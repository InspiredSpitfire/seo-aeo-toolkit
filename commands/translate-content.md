---
name: translate-content
description: Translate and localize content for a target language/market with SEO intact — localized keywords, metadata, and hreflang.
arguments:
  - name: content
    description: The content to translate (inline, URL, or file path)
    required: true
  - name: language
    description: Target language and region (e.g. "German (Germany)", "pt-BR")
    required: true
---

Localize {{content}} for {{language}} using the content-translation skill.

Deliver:

1. **Localized keyword check** — what locals actually search for this topic vs the literal translation (flag any keyword where the two differ)
2. **Translated content** — natural native-register translation with market localization (currency, units, examples, idioms) applied and noted
3. **Localized metadata** — title, meta description, slug, alt texts
4. **hreflang block** — reciprocal tags for this page pair, including x-default

Flag anything that shouldn't be translated (brand terms, product names) and anything needing local substitution you can't provide (local testimonials, local legal references).
