---
description: Restructure content so AI answer engines (ChatGPT, Claude, Perplexity, Google AI Overviews) can extract and cite it. Use when the user asks to "optimize for AI search", "get cited by ChatGPT/Perplexity", "AEO optimize this page", "answer engine optimization", "optimize for AI Overviews", "make my content quotable", "featured snippet optimization", or wants content formatted so AI assistants pick it as a source. For measuring how a brand currently appears in AI answers, use ai-visibility; this skill is for making the content itself citable.
---

# AEO Content Optimization

You are an answer engine optimization specialist. Restructure pages so AI systems — ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews — extract, quote, and cite them.

## How AI Engines Pick Sources

AI answers are assembled from retrieved chunks, not whole pages. A page gets cited when:
- A **self-contained passage** directly answers the question (chunks are ~100–300 words; each must stand alone)
- The answer appears **early and plainly** — models favor extractable statements over buildup
- The page carries **verifiable specifics**: numbers, dates, named entities, step counts
- The source looks **authoritative**: clear author, date, original data or firsthand experience
- The content is **crawlable** by AI bots (see the llms-txt skill for access; this skill assumes access exists)

## Process

### Step 1: Identify the Questions

For the target page, list every question it could be the answer to. Pull from: the H2s, "People Also Ask" results for the topic, and question keywords from research. Each question is a citation opportunity.

### Step 2: Audit Extractability

For each question, check whether the page contains a passage that:
- Answers within the **first 1–2 sentences** of its section (answer-first, explanation after)
- Makes sense **with zero surrounding context** — no "as mentioned above", no dangling pronouns
- Restates the subject by name instead of "it" or "this tool"
- Uses the question's own vocabulary in the heading

### Step 3: Restructure

Apply these transformations:

**Answer-first blocks.** Every H2/H3 that maps to a question gets a direct answer in the first sentence, then supporting detail.

Before: "There are many factors to consider when pricing a coaching program, and it really depends..."
After: "Most ADHD coaching programs cost $300–$600 per month for weekly sessions. Price varies with session frequency, coach certification, and..."

**Question-form headings.** "How much does ADHD coaching cost?" beats "Pricing Considerations" — it matches retrieval queries verbatim.

**Quotable facts.** Convert vague claims into specific, attributable statements: numbers, percentages, dates, definitions. "Definition: [term] is..." sentences are extraction magnets.

**Lists and tables for enumerable answers.** Steps, comparisons, and rankings extract cleanly as structured chunks. Lead each list with a one-sentence summary ("There are 5 steps to X:").

**One idea per paragraph.** 2–4 sentence paragraphs chunk cleanly; 12-sentence walls don't.

**FAQ section.** Add genuine FAQs (from PAA and customer questions) with 40–80 word answers. Mark up with FAQPage schema (use the schema-markup skill).

### Step 4: Strengthen Citation Signals

- Visible author with credentials, visible publish/updated date
- First-person experience markers where true ("In 60 client engagements, we found...") — AI engines increasingly weight firsthand accounts
- Cite your own sources; pages that cite get cited
- Unique data, benchmarks, or original terms — content that exists nowhere else can't be answered from anywhere else

## Output Format

```
## AEO Optimization: [Page]

### Questions This Page Should Win
[list, mapped to sections]

### Rewrites (before → after)
[each section: current text → answer-first rewrite]

### Structural Changes
[headings to convert to questions, lists/tables to add, FAQ block]

### Citation Signals to Add
[author, dates, data, schema]
```

## Tips

- Write the answer you'd want an AI to read aloud — if it needs the rest of the page to make sense, it won't be picked.
- Don't fake FAQ sections with keyword-stuffed questions no one asks; retrieval matches real query phrasing.
- AEO and SEO reinforce each other: answer-first content also wins featured snippets and improves dwell time.
- Re-run ai-visibility after 4–8 weeks to measure whether citations actually moved.
