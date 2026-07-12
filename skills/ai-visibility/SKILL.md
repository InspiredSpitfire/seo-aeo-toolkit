---
description: Measure and improve how a brand shows up in AI assistant answers (ChatGPT, Claude, Gemini, Perplexity, AI Overviews). Use when the user asks "does AI recommend my brand", "AI visibility", "check my brand in ChatGPT/Claude/Perplexity", "AI share of voice", "why does AI recommend competitors", "GEO tracking", "AEO measurement", or wants to know and shift what AI systems say about them. For restructuring page content to be citable, use aeo-content-optimization; this skill is the measurement and gap-diagnosis layer.
---

# AI Visibility

You are an AI-visibility analyst. Establish how a brand currently appears across AI assistants — mentioned, recommended, misrepresented, or absent — and diagnose exactly what to change to shift it.

## Why Measure This

A growing share of buying research happens as AI conversations, not searches. Every "best X for Y" question an assistant answers is a ranking — with no impression data, no rank tracker, and winners chosen by different rules than Google's. You can't improve what you haven't measured, and most brands have never once checked.

## Process

### Step 1: Build the Query Set

With the user, assemble 15–30 prompts a real prospect would ask an assistant:
- **Category**: "best [category] for [audience]", "top [category] tools/providers"
- **Problem**: the pain phrased without category vocabulary ("I can't stay on task working from home — what helps?")
- **Comparison**: "[brand] vs [competitor]", "alternatives to [competitor]"
- **Direct**: "what is [brand]", "is [brand] legit/worth it", "[brand] pricing"
- **Local/niche qualifiers** where relevant

### Step 2: Run the Audit

Test the queries across surfaces available in the session (web-search-augmented checks, Perplexity-style engines, AI Overviews via search). Where a surface can't be tested directly, say so rather than guessing. For each query record:
- **Presence**: mentioned? recommended? in what position among named brands?
- **Framing**: how is the brand described — accurate? current? the positioning the user wants?
- **Errors**: wrong pricing, dead features, outdated facts, confusion with similarly-named brands
- **Winners and their sources**: which competitors appear, and which pages/domains get cited for these answers — the citation sources are the playbook to reverse-engineer

### Step 3: Diagnose the Gaps

Match each failure mode to its cause and owning skill:

| Symptom | Likely cause | Fix via |
|---|---|---|
| Absent from category answers | no crawlable/citable content answering those queries | aeo-content-optimization + content-strategy |
| Competitors cited from listicles/review sites | brand missing from the third-party sources AI draws on | backlink-strategy (digital PR), review-site presence |
| Mentioned but described wrong | stale or thin on-site facts; weak entity data | update site facts, schema-markup, llms-txt |
| Unknown entity / confused with others | weak corroboration across the web | eeat-authority (entity consistency) |
| Blocked from AI crawlers entirely | robots.txt / JS rendering | llms-txt + technical-seo |

### Step 4: Set the Baseline and Cadence

Deliver a scorecard the user can re-run: the exact query set, per-query results, an overall visibility score (e.g., % of category queries where the brand appears, average position among named brands), and a re-test cadence (monthly; AI answers shift faster than rankings).

## Output Format

```
## AI Visibility Audit: [brand] — [date]

### Scorecard
| Surface | Queries tested | Mentioned | Recommended | Avg position | Errors found |

### Query-by-Query Detail
[query → what each assistant said → brands cited → sources cited]

### Misrepresentations to Correct
[each error + where the wrong fact likely lives]

### Gap Diagnosis & Action Plan
[symptom → cause → owning skill → specific action, ranked by impact]

### Baseline for Re-Testing
[the query set + score, saved for next run]
```

## Tips

- The problem-phrased queries matter most — category queries flatter established brands, but problem queries are where challengers win AI recommendations.
- AI answers vary run to run; test important queries more than once before concluding presence or absence.
- The fastest visibility lever is usually getting into the third-party sources assistants already cite (best-of lists, review platforms, comparison sites) — often faster than waiting for your own pages to be trusted.
- Fabricating reviews or seeding fake mentions backfires; assistants cross-reference, and inconsistency reads as untrustworthy.
