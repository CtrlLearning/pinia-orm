# Releasing

This repo uses [Changesets](https://github.com/changesets/changesets) for versioning and publishing. All three packages (`pinia-orm`, `pinia-orm-normalizr`, `pinia-orm-axios`) are versioned **independently** — a change to one does not force a release of the others.

## For contributors: adding a changeset to your PR

When your feature branch contains a user-facing change (new feature, bug fix, breaking change), you must include a changeset before opening a PR.

```sh
npx changeset
```

This interactive prompt will ask you to:

1. **Select which packages** are affected by your change (space to toggle, enter to confirm).
2. **Choose the bump type** for each selected package — `patch`, `minor`, or `major`.
3. **Write a summary** of the change (appears in the changelog).

A new Markdown file is created under `.changeset/`. Commit it alongside your code changes.

### Bump type guide

| Change type                      | Bump    |
| -------------------------------- | ------- |
| Bug fix, docs, internal refactor | `patch` |
| New backwards-compatible feature | `minor` |
| Breaking API change              | `major` |

---

## How releases are automated

The GitHub Actions workflow (`.github/workflows/release.yml`) handles everything after merge to `main`:

1. **Changesets present** — the action opens (or updates) a **"Version Packages"** pull request. This PR updates `CHANGELOG.md` files and bumps `package.json` versions for every package that has pending changesets.
2. **Version Packages PR merged** — the action detects no remaining changesets, builds all packages, and publishes the new versions to npm.

No manual `npm publish` or `git tag` is required.

---

## Required repository secrets

| Secret         | Purpose                                                                   |
| -------------- | ------------------------------------------------------------------------- |
| `GITHUB_TOKEN` | Automatically provided by GitHub Actions — no setup needed                |
| `NPM_TOKEN`    | npm publish token — add in **Settings → Secrets and variables → Actions** |

---

## Manual release (emergency only)

If you need to publish outside of the automated flow:

```sh
pnpm install
pnpm build:ci
pnpm run version-packages   # bump versions and update changelogs
pnpm run release            # publish to npm
```
