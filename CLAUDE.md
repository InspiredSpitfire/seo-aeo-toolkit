# SEO + AEO Toolkit (Claude Code plugin)

22 original skills for traditional SEO + answer-engine optimization. Public repo: github.com/InspiredSpitfire/seo-aeo-toolkit — this is Inspired Spitfire's shipped product, treat main as production.

## Layout
- `skills/` — the 22 SKILL.md skills (the product)
- `agents/`, `commands/` — plugin surfaces
- `scripts/` — supporting tooling

## Rules
- Skill edits are product changes: test with `~/dev/skill-evals` (the A/B harness built for exactly this) before merging anything that changes skill behavior.
- Pushing to main publishes to every user who installs from GitHub — outward action, needs Inspired Spitfire's explicit go.
- Docs/marketing copy about the toolkit is Inspired Spitfire / She Rebels territory — load `she-rebels-brand-kit` for it.
