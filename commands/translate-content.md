---
name: translate-content
description: Translate and localize content for a target language/market with SEO intact — localized keywords, metadata, and hreflang.
argument-hint: "[content, URL, or file path] [target language/region]"
---

Localize content using the content-translation skill, from this input: $ARGUMENTS

Read the input as: the content to translate (inline text, URL, or file path), followed by the target language and region as the last part of the input (e.g. "German (Germany)", "pt-BR"). If either is missing, ask for it.

Deliver:

1. **Localized keyword check** — what locals actually search for this topic vs the literal translation (flag any keyword where the two differ)
2. **Translated content** — natural native-register translation with market localization (currency, units, examples, idioms) applied and noted
3. **Localized metadata** — title, meta description, slug, alt texts
4. **hreflang block** — reciprocal tags for this page pair, including x-default

Flag anything that shouldn't be translated (brand terms, product names) and anything needing local substitution you can't provide (local testimonials, local legal references).
