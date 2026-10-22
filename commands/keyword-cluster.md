---
name: keyword-cluster
description: Cluster a keyword list into topical groups mapped to pages, with intent labels and build priorities.
argument-hint: "[keywords, or a file path to a keyword list]"
---

Keyword input (inline list, or a file path/spreadsheet to read): $ARGUMENTS

Cluster it using the keyword-clustering skill: dedupe and normalize, label intent, group by the same-page test (same page could satisfy both searches), and map each cluster to a page.

Deliver the cluster table — cluster name, primary keyword, secondaries, intent, recommended page type, existing page or GAP — plus cannibalization warnings and a build-order recommendation for the gaps.

If the input has no keyword list to work from, run keyword-research first rather than asking for one.
