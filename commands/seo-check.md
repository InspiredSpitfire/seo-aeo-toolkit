---
name: seo-check
description: Quick SEO health check on a URL or file — the ten highest-impact checks in one fast pass.
arguments:
  - name: target
    description: URL or file path to check
    required: true
---

Run a fast SEO triage on {{target}}. This is the quick version — route to the seo-audit skill for the full treatment.

## Checks

1. Title tag: present, unique-looking, ~50–60 chars, keyword placement
2. Meta description: present, ~150–160 chars, click-worthy
3. Exactly one H1; sensible heading hierarchy
4. Main content present in raw HTML (not JS-only)
5. Canonical tag present and sane
6. No noindex surprise (meta or header)
7. Image alt text coverage on meaningful images
8. Internal links: at least a few contextual ones, descriptive anchors
9. Structured data present for the page type
10. Obvious weight problems (huge images, render-blocking assets)

## Output

A pass/partial/fail line per check with evidence, then the three fixes worth doing first. Keep it under a screen — this is triage, not an audit.
