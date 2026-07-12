---
name: create-topic
description: Research one topic and produce a complete targeting plan — keyword mapping, intent, angle, and competitive positioning — before any content gets written.
arguments:
  - name: topic
    description: The topic or keyword to research
    required: true
---

Build a targeting plan for "{{topic}}" using the keyword-research and keyword-clustering skills as needed.

Deliver:

1. **Keyword map** — primary keyword, secondary keywords, and question keywords for this topic, with intent labels
2. **SERP read** — what currently ranks, what format wins, how strong the competition is
3. **Angle** — the differentiated take that beats the current results (gap they all miss, experience/data we can add)
4. **Audience** — who searches this and what job the content does for them
5. **Page recommendation** — page type, working title, where it fits in the site's cluster structure
6. **Verdict** — pursue now / pursue later / skip, with the reason

End by offering to generate the full brief (/create-content or the content-brief skill).
