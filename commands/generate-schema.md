---
name: generate-schema
description: Generate valid JSON-LD structured data for a page — auto-detects the right schema type from the content.
arguments:
  - name: target
    description: URL, file path, or description of the page
    required: true
  - name: type
    description: "Schema type override (Article, Product, FAQPage, HowTo, LocalBusiness, Organization, VideoObject...) — omit to auto-detect"
    required: false
---

Generate JSON-LD for {{target}} using the schema-markup skill. Read the page/file, pick the correct type ({{type}} if specified, otherwise detect from content), and fill properties from actual page values — leave TODO placeholders with a note for anything that can't be extracted, never invented values.

Deliver the complete `<script type="application/ld+json">` block(s) ready to paste, placement instructions, and a note on which rich results this can earn. Connect entities with `@id` references where multiple blocks are produced.
