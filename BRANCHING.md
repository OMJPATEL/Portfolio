# Branching & Release Strategy

Three long-lived branches, each stricter than the last. Changes flow one direction only:

```
feature/xyz ──PR──▶ dev ──PR──▶ staging ──PR──▶ main
                    │             │               │
                 integration   pre-prod       production
                 (loose)       (locked)       (locked, deploy-triggering)
```

- **`dev`** — where day-to-day work lands. Direct pushes are allowed here for solo,
  fast iteration; CI still runs on every push so you get feedback immediately.
- **`staging`** — a rehearsal of production. No direct pushes — only merges via a
  reviewed pull request from `dev`. This is what you'd point a preview deployment at.
- **`main`** — production. No direct pushes — only merges via a reviewed pull request
  from `staging`. This is what your live site deploys from.

Feature work happens on short-lived branches (`feature/nav-fix`, `fix/dns-typo`, etc.)
cut from `dev`, merged back into `dev` via PR.

## What's already wired up

- **`.github/workflows/ci.yml`** — three jobs (Typecheck, Test, Build) that run on
  every push and pull request to `main`, `staging`, and `dev`. These are the status
  checks the rulesets below require.
- **`.github/CODEOWNERS`** — routes review requests to you automatically.
- **`.github/pull_request_template.md`** — a checklist that appears on every PR.

## Setting up the repo on GitHub

You'll need to do this part yourself since it requires your GitHub login — here's
exactly what to run and click.

### 1. Create the repo and push all three branches

```bash
# from inside the om-portfolio folder
gh repo create om-portfolio --public --source=. --remote=origin
# or, without the gh CLI: create an empty repo on github.com first, then:
git remote add origin https://github.com/OMJPATEL/om-portfolio.git

git push -u origin main
git push -u origin staging
git push -u origin dev
```

### 2. Set the default branch to `dev`

Repo → **Settings → General → Default branch** → switch to `dev`. New PRs and clones
will target `dev` by default, matching the flow above.

### 3. Create rulesets (Settings → Rules → Rulesets → New branch ruleset)

Create **two rulesets** — one for `main`, one for `staging`. Same settings for both,
just a different target branch:

- **Ruleset name:** `production-lock` (for `main`) / `staging-lock` (for `staging`)
- **Enforcement status:** Active
- **Target branches:** Include by pattern → `main` (or `staging`)
- **Branch protections to turn on:**
  - ✅ Restrict deletions
  - ✅ Block force pushes
  - ✅ Require a pull request before merging
    - Required approvals: **1** if you'll have any collaborator/reviewer, or **0**
      if it's just you — GitHub won't let you approve your own PR, so with 0
      approvals required the PR still can't merge until CI passes, it just doesn't
      also wait on a review nobody else can give.
    - ✅ Dismiss stale approvals when new commits are pushed
  - ✅ Require status checks to pass
    - Search and add: **Typecheck**, **Test**, **Build** (these are the three job
      names from `ci.yml` — they'll only appear in the list after the workflow has
      run at least once, so push to a PR first if they're not showing up yet)
    - ✅ Require branches to be up to date before merging
  - Leave "Require signed commits" and "Require linear history" off unless you want
    them — they're optional hardening, not required for this setup.

Do **not** create a ruleset for `dev` — it stays open for direct pushes.

### 4. (Optional) Require a specific merge source

Rulesets don't have a native "only allow merges from branch X" rule. The practical
equivalent: just be disciplined about opening `staging → main` and `dev → staging`
PRs specifically — GitHub will show you the diff either way, so an accidental
`feature/x → main` PR is easy to catch in review before merging.

## Day-to-day workflow

```bash
git checkout dev
git pull
git checkout -b feature/my-change
# ... work, commit ...
git push -u origin feature/my-change
# open a PR: feature/my-change → dev
```

```bash
# promoting dev to staging once it's stable
git checkout staging
git pull
gh pr create --base staging --head dev --title "Promote dev to staging"
```

```bash
# promoting staging to main (production release)
gh pr create --base main --head staging --title "Release: <short description>"
```

## Connecting deployment

If you're using Vercel or Netlify, connect the repo through their dashboard (not a
GitHub Action) and set:

- **Production branch:** `main`
- **Preview/staging branch:** `staging` (both hosts will auto-generate a preview URL
  for it)

That way merging into `main` is what actually ships to your live domain, and
`staging` gives you a real URL to sanity-check before it does.
