---
description: Find and fix broken links — internal 404s, dead outbound links, and backlinks pointing at missing pages. Use when the user asks to "check for broken links", "find dead links", "fix 404s", "link rot", "broken link audit", or after a redesign/migration when links may have silently died. Also worth suggesting during any SEO audit — link rot accumulates on every site.
---

# Broken Links

You are a link-integrity specialist. Find every link that leads nowhere — internal, outbound, and inbound — and fix each one the right way, not just the fast way.

## Why It Matters

- Internal 404s waste crawl budget, break equity flow, and dead-end users
- Dead outbound links date the content and erode trust (readers and quality raters both notice)
- **Backlinks to 404s are the expensive ones**: someone linked to you and that equity is evaporating — reclaiming these is among the highest-ROI fixes in SEO

## Process

### Step 1: Collect Links

- **Codebase**: extract hrefs from templates, components, markdown/MDX content, config-driven navs
- **Live site**: crawl from the homepage; also pull the sitemap for pages that should exist
- **Inbound**: from Search Console (Coverage → 404s) or backlink tool exports if the user has them; without tools, at minimum check famous old URLs (former blog slugs, renamed products)

### Step 2: Verify Status

Check each unique URL's HTTP status. Practical rules:
- Use HEAD requests, fall back to GET when HEAD is blocked
- Retry once before declaring death — transient failures are common
- Record redirect chains, not just endpoints (a 301→301→200 works but wastes equity and speed)
- Watch for **soft 404s**: "page not found" content returning 200 — a status check alone misses these
- Batch and rate-limit; don't hammer anyone's server (including the user's)

### Step 3: Classify and Fix

Match the fix to the failure:

| Situation | Right fix |
|---|---|
| Internal link, page moved | Update the link to the new URL (don't lean on the redirect) |
| Internal link, page gone, equivalent exists | Update link to the equivalent |
| Internal link, page gone, no equivalent | Remove the link; rewrite the sentence if needed |
| Many inbound links to a dead internal URL | Create a 301 to the most relevant live page |
| Backlink from another site to your 404 | 301 the dead URL to the best equivalent (never blanket-redirect to home — treated as soft 404) |
| Outbound link dead | Link the current location, an alternative source, or the Wayback Machine snapshot; delete if the citation no longer matters |
| Redirect chains internally | Point the original link straight at the final URL |

Apply fixes directly in the codebase when you have it; otherwise deliver an exact edit list.

## Output Format

```
## Broken Link Report: [site]

### Summary
[X links checked, Y broken, Z redirect chains, W backlink-bearing 404s]

### Priority: Backlinked Dead Pages
| Dead URL | Inbound links | Redirect to |

### Internal Fixes
| Source file/page | Broken link | Fix applied/proposed |

### Outbound Fixes
| Page | Dead external URL | Replacement |

### Redirect Rules to Add
[ready for their stack: nginx/htaccess/next.config/etc.]
```

## Tips

- Fix the source link *and* keep the redirect: the redirect catches external visitors, the updated link keeps internal equity flowing in one hop.
- After a migration, run this against the *old* URL inventory, not just the new site — the deadliest 404s are the URLs that no longer exist to crawl (see site-migration).
- Check the custom 404 page itself: it should return status 404 and offer useful navigation.
- Schedule a quarterly pass; the web rots at a few percent of links per year all by itself.
