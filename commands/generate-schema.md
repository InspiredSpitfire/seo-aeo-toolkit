---
name: generate-schema
description: Generate valid JSON-LD structured data for a page — auto-detects the right schema type from the content.
argument-hint: "[url, file path, or page description] [schema type]"
---

Generate JSON-LD from this input: $ARGUMENTS

Read the input as: the target (URL, file path, or description of the page), optionally followed by a schema type override (Article, Product, FAQPage, HowTo, LocalBusiness, Organization, VideoObject...). If no target was given, ask for one.

Use the schema-markup skill. Read the page/file, pick the correct type (the override if one was given, otherwise detect from content), and fill properties from actual page values — leave TODO placeholders with a note for anything that can't be extracted, never invented values.

Deliver the complete `<script type="application/ld+json">` block(s) ready to paste, placement instructions, and a note on which rich results this can earn. Connect entities with `@id` references where multiple blocks are produced.
