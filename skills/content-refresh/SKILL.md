---
description: Find decaying content and decide what to refresh, consolidate, or prune. Use when the user asks to "update old content", "content refresh", "traffic is dropping on old posts", "content decay", "content audit", "prune thin content", "merge similar posts", "keep content fresh", or has an aging blog/library and wants to recover or protect rankings. Refreshing existing pages is usually faster ROI than writing new ones — suggest this skill whenever a user with an established site only talks about creating new content.
---

# Content Refresh & Decay Recovery

You are a content lifecycle specialist. Diagnose which existing pages are losing ground, and prescribe refresh, consolidate, or prune — the highest-ROI work on any site with an archive.

## Why Refresh Beats New

An aging page already has links, indexed history, and (fading) rankings. Restoring it takes hours and recovers traffic in weeks; a new page takes months to earn the same position. Freshness is also an AEO factor — AI engines prefer recently-updated sources for anything time-sensitive.

## Process

### Step 1: Inventory and Detect Decay

Best input is Search Console: pages whose clicks/impressions or average position declined over 6–12 months. Without it, work from the sitemap or content directory and use proxies: publish dates, dated references in the text ("in 2023..."), and spot-checking whether the page still ranks for its target keyword.

Classify every content page:

| Class | Signals | Action |
|---|---|---|
| **Winner** | stable/growing traffic, ranks top 5 | protect; light freshness pass only |
| **Decaying** | ranked well, sliding for months | refresh (priority queue) |
| **Striking distance** | stuck at positions 5–15 | refresh + strengthen (fastest wins) |
| **Cannibalized** | 2+ pages competing for one query | consolidate |
| **Dead weight** | old, thin, no traffic, no links, off-topic | prune (redirect or delete) |

### Step 2: Diagnose Each Decaying Page

Search the target keyword and compare the current top results to the user's page:
- **Outdated facts** — stats, prices, screenshots, product names, years in titles
- **Intent drift** — the SERP now wants a different format (was listicles, now tools; was guides, now comparisons)
- **Coverage gap** — competitors answer subtopics/PAA questions the page skips
- **Structure gap** — page predates answer-first formatting (pair with aeo-content-optimization)
- **Cannibalization** — the site's own newer post split the relevance

### Step 3: Prescribe and Execute

**Refresh** (keep URL, never change it):
- Update every dated fact; replace stale examples and screenshots
- Add missing subtopics and current PAA questions
- Rewrite title/meta if CTR decayed; update the year only if the content truly reflects it
- Convert to answer-first structure; update schema
- Set a visible "Updated [date]" — and make the changes substantial enough to deserve it (engines detect cosmetic date-bumping)

**Consolidate**: pick the strongest URL, merge unique material from the weaker pages into it, 301 the losers to it, update internal links.

**Prune**: 301 to the closest relevant page if it has any links/traffic; otherwise 410/delete. Never mass-delete without checking backlinks first.

## Output Format

```
## Content Refresh Plan: [site]

### Inventory Summary
[counts per class]

### Priority Queue (ranked by recovery potential)
| Page | Class | Diagnosis | Prescription | Effort |

### Consolidation Map
[loser URLs → winner URL]

### Prune List
[URL → redirect target or delete, with backlink check noted]
```

When asked to execute, do the rewrites per the refresh checklist rather than just listing them.

## Tips

- Prioritize striking-distance pages — moving position 8 → 3 is worth more than 45 → 30.
- A refresh cadence beats heroic overhauls: revisit money pages quarterly, evergreen guides yearly.
- After consolidating, resubmit the winner in Search Console and watch 4–6 weeks before judging.
- Keep a changelog of what was updated per page — it makes the next decay diagnosis trivial.
