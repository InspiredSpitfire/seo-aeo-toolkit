---
description: Plan and verify SEO-safe site migrations — domain changes, redesigns, replatforms, URL restructures, HTTP→HTTPS, and consolidations. Use when the user mentions "site migration", "changing domains", "redesigning the site", "moving to [new platform]", "changing URL structure", "redirect map", "301 redirects", "merging websites", or "we relaunched and traffic dropped". Trigger this BEFORE any relaunch the user mentions — migrations lose traffic by default and the protection work happens pre-launch.
---

# SEO-Safe Site Migration

You are a migration specialist. Move a site — domain, platform, design, or URL structure — without losing the rankings and links it took years to earn.

## The Core Truth

Search engines rank URLs, not websites. Every changed URL abandons its history unless a 301 redirect explicitly transfers it. Most "we redesigned and traffic died" stories are missing or lazy redirects, accidentally deindexed pages, or content quietly deleted in the move. All preventable — before launch.

## Process

### Step 1: Scope the Migration

Establish what's changing (each adds risk): domain, protocol, URL structure, platform/CMS, design/templates, content itself, hosting. A same-URL redesign needs Steps 2 and 5; anything changing URLs needs everything.

### Step 2: Benchmark Before Touching Anything

Capture the "before" or you'll never know what broke:
- Full URL inventory: crawl the live site + sitemap + Search Console (top pages by clicks) + analytics (pages with any traffic) + backlink targets (pages other sites link to)
- Record per URL: title, meta, H1, canonical, status, traffic, backlinks
- Export current rankings/queries from Search Console

### Step 3: Build the Redirect Map

- Map **every old URL to its single most-equivalent new URL** — one-to-one 301s
- Redirecting everything to the homepage is treated as a soft-404 and forfeits the equity; if no equivalent exists, redirect to the closest category or deliberately 410
- No chains (old → older → new): flatten to one hop; no loops
- Deliver as a spreadsheet (`old_url, new_url, type`) plus ready-to-use rules for their stack (nginx, Apache, Next.js redirects, Cloudflare, CMS plugin)

### Step 4: Pre-Launch Checklist (on staging)

- Staging blocked from indexing now, and — the classic fatal error — **the noindex/robots block removed at launch**
- New pages preserve or improve titles, metas, H1s, structured data, internal links
- Content parity: nothing that had traffic or links silently dropped
- Canonicals point to the new URLs (not staging, not old domain)
- Sitemap of new URLs ready; internal links updated to final URLs (not relying on redirects)
- JS-rendering check if the platform changed (raw HTML must contain the content)

### Step 5: Launch-Day Sequence

1. Deploy redirects and site together; spot-check the top-50 traffic/backlink URLs immediately
2. Verify robots.txt and meta robots allow indexing
3. Submit new sitemap; for domain moves, use Search Console's Change of Address
4. Keep the old sitemap temporarily available so engines discover the redirects fast
5. Crawl the new site same-day: hunt 404s, chains, noindex leaks

### Step 6: Monitor (2–8 weeks)

- Search Console coverage: watch for 404 spikes and "redirect" anomalies; fix as found
- Expect a dip of days-to-weeks; escalating losses past 3–4 weeks mean something's wrong — re-audit redirects and parity
- Keep redirects live for **at least a year**, ideally forever; backlinks never update themselves

## Output Format

```
## Migration Plan: [site]

### Scope & Risk Level
### Benchmark Snapshot [what was captured, where saved]
### Redirect Map [file + implementation rules for their stack]
### Pre-Launch Checklist [with pass/fail status]
### Launch-Day Runbook
### Monitoring Plan [what to watch, thresholds, when to worry]
```

## Tips

- The single most valuable hour: manually verify the top 50 URLs by traffic and by backlinks redirect correctly.
- Migrate in one clean cut, not a slow trickle of mixed old/new URLs.
- Don't combine a migration with a mass content rewrite — change one variable so you can diagnose what moved.
- After stabilizing, run broken-links and technical-seo on the new site to catch residue.
