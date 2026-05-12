# AI-wiki — AI Learning Group Wiki

A Docusaurus-based knowledge wiki for learning AI together with friends. Primarily in Chinese with bilingual terminology (English terms in parentheses).

**Live Site:** https://klaunabstrad.github.io/AI-wiki/

## What This Project Is

A collaborative learning platform that:
- Records AI learning notes and concepts
- Summarizes articles and papers we read
- Shares useful tools and resources
- Answers common questions from group members
- Tracks a reading list of articles to process

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Docusaurus 3.x | Static site generator |
| TypeScript | Configuration and components |
| Markdown + MDX | Content writing |
| GitHub Pages | Hosting (free) |
| GitHub Actions | Auto-deploy on push |

## Project Structure

```
AI-wiki/
├── docs/                          # Main content
│   ├── intro.md                   # Welcome page
│   ├── categories/
│   │   ├── concepts/              # Core AI concepts
│   │   │   ├── what-is-ai.md
│   │   │   └── what-is-llm.md
│   │   └── prompt-engineering/    # Prompt engineering
│   │       ├── what-is-prompt-engineering.md
│   │       └── what-is-rag.md
│   ├── resources/
│   │   ├── tools/                 # Tool recommendations
│   │   │   └── ai-tools.md
│   │   └── papers/                # Paper summaries
│   │       └── attention-is-all-you-need.md
│   ├── articles/                  # Article summaries
│   │   ├── index.md               # Articles index
│   │   ├── reading-list.md        # Pending articles
│   │   ├── article-template.md    # Template for new summaries
│   │   └── *.md                   # Individual summaries
│   ├── qa/                        # Q&A
│   │   └── getting-started.md
│   └── about/
│       └── index.md
├── blog/                          # Blog posts
│   ├── authors.yml
│   └── *.md
├── src/
│   ├── css/custom.css             # Custom styles
│   └── pages/index.tsx            # Homepage
├── sidebars.ts                    # Navigation structure
├── docusaurus.config.ts           # Site config
└── .github/workflows/deploy.yml   # Auto-deployment
```

## Content Categories

| Category | Path | Purpose |
|----------|------|---------|
| **Core Concepts** | `docs/categories/concepts/` | AI fundamentals (什么是 AI, LLM, etc.) |
| **Prompt Engineering** | `docs/categories/prompt-engineering/` | Prompt techniques, RAG |
| **Tools** | `docs/resources/tools/` | AI tool recommendations |
| **Papers** | `docs/resources/papers/` | Academic paper summaries |
| **Articles** | `docs/articles/` | External article summaries |
| **Q&A** | `docs/qa/` | Frequently asked questions |
| **Blog** | `blog/` | Learning reflections |

## Writing Conventions

### Frontmatter Template

```yaml
---
id: unique-id
title: 中文标题（English Title）
sidebar_position: 1
tags: [tag1, tag2]
---
```

### Bilingual Terminology

- Chinese first, English in parentheses
- Example: "大语言模型（Large Language Model, LLM）"
- Abbreviate after first use: "LLM"

### Content Style

- **Beginner-friendly**: Assume reader knows little
- **Structured**: Use headings, tables, lists
- **Cross-linked**: Link to related concepts
- **Actionable**: Include code examples where relevant

## Common Workflows

### 1. Add a Concept Page

```bash
# Create file
touch docs/categories/concepts/my-concept.md
```

```markdown
---
id: my-concept
title: 什么是 XXX（What is XXX）?
sidebar_position: 5
---

# 什么是 XXX（What is XXX）?

## 一句话总结

## 核心观点

1. **第一点**：...

## 相关概念

- [相关概念](../concepts/related-concept)
```

Then add to `sidebars.ts`:
```ts
items: [
  'categories/concepts/what-is-ai',
  'categories/concepts/what-is-llm',
  'categories/concepts/my-concept',  // <-- add here
]
```

### 2. Summarize an Article (With Claude)

**Option A: Direct chat**
> "帮我整理这篇文章：https://example.com/article"

**Option B: Batch processing via reading list**
1. Add link to `docs/articles/reading-list.md`
2. Tell Claude: "帮我整理待读清单"
3. Claude generates `.md` files
4. Save to `docs/articles/`, register in `sidebars.ts`

### 3. Update the Wiki

```bash
cd AI-wiki

# Edit content...

# Test locally
npm run start

# Build and check
npm run build

# Commit
git add .
git commit -m "Add: article about MCP"
git push

# GitHub Actions auto-deploys
```

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run start` | Start dev server (localhost:3000) |
| `npm run build` | Production build |
| `npm run serve` | Serve built files locally |
| `npm run deploy` | Manual deploy to GitHub Pages |

## Deployment

**Auto-deploy:** Every `git push` to `master` triggers GitHub Actions → builds → deploys to GitHub Pages.

**Manual deploy:**
```bash
GIT_USER=KlaunAbstrad npm run deploy
```

## Troubleshooting

### Build fails with "Invalid sidebar file"

Check that all doc IDs in `sidebars.ts` match the `id` field in frontmatter.

### Broken links

Build output shows broken links. Fix the relative paths in Markdown.

### Changes not showing on site

1. Check Actions tab for build status
2. Hard refresh browser (Ctrl+Shift+R)
3. Wait 2-3 minutes for CDN cache

## Configuration Reference

### `docusaurus.config.ts`

| Field | Purpose |
|-------|---------|
| `url` | Base URL (GitHub Pages) |
| `baseUrl` | Subpath (`/AI-wiki/`) |
| `organizationName` | GitHub username |
| `projectName` | Repo name |
| `i18n.defaultLocale` | `'zh-Hans'` for Chinese |

### `sidebars.ts`

Each sidebar = one nav menu. Currently:
- `docsSidebar` — 知识库 + 提示词工程
- `resourcesSidebar` — 文章 + 工具 + 论文
- `qaSidebar` — Q&A

## Useful Links

- [Docusaurus Docs](https://docusaurus.io/docs)
- [Markdown Features](https://docusaurus.io/docs/markdown-features)
- [Deployment Guide](https://docusaurus.io/docs/deployment)
