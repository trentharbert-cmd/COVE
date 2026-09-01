create table if not exists public.homes (
  id uuid primary key default gen_random_uuid(),
  data jsonb not null default '{}'::jsonb,
  invite_code text unique not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.home_members (
  user_id uuid primary key references auth.users (id) on delete cascade,
  home_id uuid not null references public.homes (id) on delete cascade
);

alter table public.homes enable row level security;
alter table public.home_members enable row level security;

drop policy if exists "homes_select_member" on public.homes;
drop policy if exists "homes_update_member" on public.homes;
drop policy if exists "members_select_own" on public.home_members;
drop policy if exists "members_insert_own" on public.home_members;
drop policy if exists "members_update_own" on public.home_members;

create policy "homes_select_member" on public.homes
  for select using (
    exists (select 1 from public.home_members m where m.home_id = homes.id and m.user_id = auth.uid())
  );

create policy "homes_update_member" on public.homes
  for update using (
    exists (select 1 from public.home_members m where m.home_id = homes.id and m.user_id = auth.uid())
  );

create policy "members_select_own" on public.home_members
  for select using (auth.uid() = user_id);

create policy "members_insert_own" on public.home_members
  for insert with check (auth.uid() = user_id);

create policy "members_update_own" on public.home_members
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create or replace function public.create_home()
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  hid uuid;
  code text;
begin
  if auth.uid() is null then
    raise exception 'Not signed in';
  end if;
  select home_id into hid from public.home_members where user_id = auth.uid();
  if hid is not null then
    return hid;
  end if;
  code := substr(md5(random()::text || clock_timestamp()::text), 1, 8);
  insert into public.homes (data, invite_code) values ('{}'::jsonb, code) returning id into hid;
  insert into public.home_members (user_id, home_id) values (auth.uid(), hid);
  return hid;
end;
$$;

create or replace function public.join_home(code text)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  hid uuid;
begin
  if auth.uid() is null then
    raise exception 'Not signed in';
  end if;
  select id into hid from public.homes where invite_code = lower(trim(code));
  if hid is null then
    raise exception 'Invalid invite code';
  end if;
  insert into public.home_members (user_id, home_id) values (auth.uid(), hid)
  on conflict (user_id) do update set home_id = excluded.home_id;
  return hid;
end;
$$;

grant execute on function public.create_home() to authenticated;
grant execute on function public.join_home(text) to authenticated;
