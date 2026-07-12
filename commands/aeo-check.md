---
name: aeo-check
description: Quick AEO readiness check for a URL — can AI engines crawl it, extract answers from it, and trust it enough to cite it?
arguments:
  - name: url
    description: The page or site URL to check
    required: true
---

Run a fast answer-engine-optimization readiness check on {{url}}. This is the quick triage version — for deep work, route to the aeo-content-optimization, llms-txt, or eeat-authority skills.

## Checks

1. **Access** — Fetch the site's robots.txt. Report whether GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and Bingbot are allowed. Check whether /llms.txt exists.
2. **Renderability** — Fetch the page. Is the main content present in raw HTML (AI crawlers don't run JavaScript)?
3. **Extractability** — Do headings map to real questions? Does each section answer in its first 1–2 sentences? Are there self-contained, quotable passages with specific facts, or does everything require surrounding context?
4. **Trust signals** — Named author? Visible date? Schema markup present (Article/FAQ/Organization)? Sources cited?

## Output

Score each of the four areas pass / partial / fail with one line of evidence, then give the three highest-impact fixes in priority order. Keep the whole report under a screen — this is a triage tool, not an audit.
