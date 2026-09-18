# SEO + AEO Toolkit

A complete search optimization plugin for Claude Code — traditional SEO **and** answer engine optimization (AEO/GEO), so your content ranks on Google and gets cited by ChatGPT, Claude, Perplexity, and AI Overviews.

## What's Inside

### Skills — the full lifecycle

**Research & planning**
| Skill | What it does |
|---|---|
| `keyword-research` | Discover keywords from scratch — intent, difficulty, long-tail |
| `keyword-clustering` | Group a keyword list into topical clusters mapped to pages |
| `content-strategy` | Data-driven content plan and editorial roadmap |
| `content-brief` | Detailed writing briefs for any article |

**On-site optimization**
| Skill | What it does |
|---|---|
| `seo-audit` | Comprehensive site/codebase SEO audit |
| `technical-seo` | Crawlability, Core Web Vitals, indexation, speed |
| `on-page-seo` | Page-level optimization: titles, metas, headings, content |
| `schema-markup` | JSON-LD structured data for rich results |
| `internal-linking` | Site architecture and link equity distribution |
| `broken-links` | Find and fix dead links and 404s |

**AEO — AI answer engines**
| Skill | What it does |
|---|---|
| `aeo-content-optimization` | Restructure content so AI engines extract and cite it |
| `llms-txt` | Generate llms.txt and audit AI-crawler access |
| `ai-visibility` | Track and improve how your brand appears in AI answers |
| `eeat-authority` | E-E-A-T signals and entity presence engines can trust |

**Growth & maintenance**
| Skill | What it does |
|---|---|
| `backlink-strategy` | Off-page: link building, digital PR, profile audits |
| `content-refresh` | Find decaying content; refresh, consolidate, or prune |
| `serp-performance` | Interpret Search Console data; diagnose drops, find wins |
| `local-seo` | Google Business Profile, local pack, citations, reviews |
| `video-seo` | YouTube optimization, video schema, transcript repurposing |
| `short-form-video-ideation` | High-retention TikTok/Reels/Shorts concepts with hooks, scripts, and CTAs |
| `site-migration` | Redirect maps and SEO-safe relaunches |
| `content-translation` | Multilingual SEO and hreflang |

### Agents
- `seo-auditor` — autonomously crawls and audits a site
- `content-strategist` — researches a site and delivers a full content plan
- `competitor-analyzer` — competitive SEO and content analysis

### Commands
`/seo-check` · `/aeo-check` · `/create-topic` · `/create-content` · `/keyword-cluster` · `/generate-schema` · `/translate-content`

## Install

Add this repo as a marketplace, then install the plugin:

```
/plugin marketplace add InspiredSpitfire/seo-aeo-toolkit
/plugin install seo-aeo-toolkit
```

Or clone and test locally:

```
claude --plugin-dir /path/to/seo-aeo-toolkit
```

## Suggested Workflows

**New site:** `keyword-research` → `keyword-clustering` → `content-strategy` → `content-brief` → `/create-content` → `aeo-content-optimization` → `schema-markup`

**Existing site tune-up:** `seo-audit` → `serp-performance` → `content-refresh` → `internal-linking` → `broken-links`

**Get cited by AI:** `llms-txt` → `aeo-content-optimization` → `eeat-authority` → `ai-visibility` (measure after 4–8 weeks)

## Credits

All skills, agents, and commands here were written independently, but the toolkit's coverage was partly inspired by the [SearchFit.ai](https://searchfit.ai) `searchfit-seo` plugin. No explicit license is granted; if you'd like to redistribute or adapt this toolkit, please reach out first.
