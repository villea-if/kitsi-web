# Kitsi Web

Specialty coffee bar website and web fundamentals training repository.

## Structure

- [`CONTEXT.md`](./CONTEXT.md) — Canonical domain glossary (Catalog, Café, and Localization terms).
- [`docs/adr/0001-buildless-vue-and-file-protocol-i18n.md`](./docs/adr/0001-buildless-vue-and-file-protocol-i18n.md) — Architecture decision record for the zero-build Vue 3 + `file://` i18n setup.
- [`public/`](./public/) — Self-contained static web application (open `public/index.html` directly in a browser or serve over any static server).

## Git Workflow (Basic Instructions)

**Rule #1: Never commit or push directly to `main`.**
`main` is protected. All changes go through a feature branch and a Pull Request (PR).

### One-Time Local Hook Setup

Enable the repository's Git hooks so Git blocks accidental commits or pushes to `main` locally:

```bash
git config core.hooksPath .githooks
```

### Everyday Step-by-Step Workflow

1. **Start from an up-to-date `main`:**
   ```bash
   git switch main
   git pull
   ```

2. **Create a new feature branch:**
   Use a short descriptive name (`feat/...`, `fix/...`, `docs/...`):
   ```bash
   git switch -c feat/update-menu
   ```

3. **Make your edits and check what changed:**
   ```bash
   git status
   git diff
   ```

4. **Stage and commit your work:**
   ```bash
   git add .
   git commit -m "Add seasonal espresso drink to menu"
   ```

5. **Push the feature branch to GitHub:**
   ```bash
   git push -u origin feat/update-menu
   ```

6. **Open a Pull Request & merge:**
   Create a PR on GitHub (or run `gh pr create --fill`) and merge it into `main`.

7. **Clean up after merging:**
   ```bash
   git switch main
   git pull
   git branch -d feat/update-menu
   ```
