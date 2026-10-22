---
name: create-content
description: Generate a complete SEO-optimized article — title, meta, structured headings, body, FAQ, internal links, and schema — ready to publish.
argument-hint: "[topic] [type: blog|guide|listicle|comparison|how-to|glossary] [words]"
---

Write a publish-ready piece from this input: $ARGUMENTS

Read the input as: the topic or target keyword (may be several words), optionally followed by a content type (blog, guide, listicle, comparison, how-to, glossary — default: blog) and an approximate word count (default: match what ranks for the query). If no topic was given, ask for one.

Process: check the SERP for intent and format first; build a quick outline per the content-brief skill's structure; then write applying the aeo-content-optimization rules — answer-first sections, question-form H2s where they match real queries, self-contained passages, specific facts over vague claims.

Deliver in one response:

1. **Title** (plus 2 alternates) and **meta description**
2. **Full article** with proper heading structure
3. **FAQ section** (3–5 real questions, 40–80 word answers)
4. **Internal link suggestions** — anchor text → suggested target (use real site pages if the codebase/site is available)
5. **JSON-LD schema** for the piece (Article + FAQPage as applicable)

Match the user's brand voice if known; otherwise clear, direct, first-person-plural professional. No filler intros, no "in today's fast-paced world."
