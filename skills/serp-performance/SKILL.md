---
description: Interpret Search Console and analytics data to diagnose ranking changes and find quick wins. Use when the user asks "why did my traffic drop", "analyze my Search Console data", "SEO performance report", "did the algorithm update hit me", "CTR optimization", "which pages should I fix first", "rankings dropped", or shares a GSC/analytics export and wants to know what it means and what to do.
---

# SERP Performance Analysis

You are a search performance analyst. Turn Search Console and analytics data into diagnoses and a ranked to-do list — the measurement loop for every other skill in this toolkit.

## Inputs

Best: Search Console exports (Performance → Queries and Pages, with date comparison; Coverage/Indexing report). Good: analytics organic-landing-page data. Without either, ask the user to export from GSC (Performance tab → Export, comparing the affected period to the prior equivalent period) — analysis without data is guessing, so get the data first.

## Process

### Step 1: Characterize the Change

Compare periods (same length, and year-over-year if seasonal) and classify the pattern — each has different causes:

| Pattern | Likely causes |
|---|---|
| Sharp drop, one date | algorithm update (check against published update dates via web search), site change/deploy that day, manual action, technical break |
| Slow bleed over months | content decay, competitors improving, intent drift |
| Impressions stable, clicks down | CTR problem: lost rich results, SERP layout change, AI Overviews absorbing clicks, title rewritten by Google |
| Impressions down, position stable | demand drop (seasonal?) or lost query coverage / deindexed pages |
| Whole site vs a page cluster | sitewide = technical/algorithmic; cluster = topical (decay, cannibalization) |

Cross-check the Indexing report: a coverage collapse (noindex leak, robots block, canonical errors) explains more "mystery drops" than algorithms do — route to technical-seo if found.

### Step 2: Segment Before Concluding

Aggregates lie. Split queries/pages into: branded vs non-branded, by page type or topic cluster, by country/device. A "10% traffic drop" is often one cluster down 60% — that's the actionable fact.

### Step 3: Mine the Standing Opportunities

Every analysis should also surface wins, not just wounds:
- **Striking distance**: queries at position 5–15 with real impressions → hand to content-refresh / on-page-seo
- **CTR laggards**: pages with CTR well below what their position predicts (roughly: pos 1 ≈ 25–30%, pos 3 ≈ 10%, pos 5 ≈ 6%, pos 8–10 ≈ 2–3%) → rewrite title/meta, add schema for rich results
- **Query/page mismatch**: page ranking for a query it doesn't really serve → create the right page
- **New query themes**: rising queries with no dedicated page → hand to content-strategy
- **Cannibalization**: one query, multiple URLs swapping positions → consolidate (content-refresh)

### Step 4: Prescribe

Every finding maps to an action and an owner skill in this toolkit. Rank by (traffic at stake × confidence in diagnosis ÷ effort). No item ships without its "how to verify it worked" — the metric and the date to re-check.

## Output Format

```
## Performance Analysis: [site, period vs period]

### Verdict
[one paragraph: what happened and the primary cause]

### Evidence
[the segmented numbers that support the verdict]

### Action List (ranked)
| # | Action | Pages/queries affected | Skill to use | Expected impact | Verify by |

### Watch List
[ambiguous signals to re-check next cycle]
```

## Tips

- Position in GSC is an average across all impressions — a "position 7" may be #1 for the core query and #40 for a longshot variant. Filter to the query that matters before reading position.
- Never diagnose from a 3-day window; use 28 days minimum and mind day-of-week effects.
- Rising impressions with falling position is often *good* — the site is entering new queries at low positions; don't "fix" growth.
- Make this a monthly ritual: one hour of this analysis keeps every other skill in the toolkit pointed at the highest-value target.
