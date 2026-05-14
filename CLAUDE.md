# AI-wiki — AI Learning Group Wiki

A Docusaurus-based knowledge wiki for learning AI together with friends. Primarily in Chinese with bilingual terminology (English terms in parentheses).

**Live Site:** https://klaunabstrad.github.io/AI-wiki/

## What This Project Is

A collaborative learning platform that:
- Records AI learning notes and concepts
- Summarizes articles and papers we read
- Documents AI tools we use
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
│   │   │   ├── what-is-llm.md
│   │   │   ├── what-is-mcp.md
│   │   │   └── ...
│   │   └── prompt-engineering/    # Prompt engineering
│   │       ├── what-is-prompt-engineering.md
│   │       └── what-is-rag.md
│   ├── resources/
│   │   ├── tools/                 # Tool documentation
│   │   │   ├── ai-tools.md        # Index/overview
│   │   │   ├── chatgpt.md
│   │   │   ├── claude.md
│   │   │   ├── cursor.md
│   │   │   ├── ollama.md
│   │   │   └── ...
│   │   └── papers/                # Paper summaries
│   │       └── attention-is-all-you-need.md
│   ├── articles/                  # External article summaries
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

## Content Categories — Where Things Go

| Type | Path | Content | Example |
|------|------|---------|---------|
| **概念 (Concept)** | `categories/concepts/` | AI knowledge, definitions | what-is-llm, what-is-mcp, what-is-rag |
| **工具 (Tool)** | `resources/tools/` | Tool documentation, usage guides | cursor, ollama, chatgpt |
| **文章 (Article)** | `articles/` | External article summaries | paper解读, 技术教程 |
| **论文 (Paper)** | `resources/papers/` | Academic paper summaries | Attention Is All You Need |
| **Q&A** | `qa/` | FAQs | getting-started |

### When to Use Which

- **概念 (Concept)**：想了解 "什么是 X" → 纯知识，不绑定特定产品
- **工具 (Tool)**：想学怎么用 Cursor/Ollama → 工具使用文档
- **文章 (Article)**：读了篇好文章想收藏 → 文章摘要
- **论文 (Paper)**：读了篇学术论文 → 论文笔记

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

Add to `sidebars.ts` under `docsSidebar` → `核心概念`:
```ts
items: [
  'categories/concepts/what-is-ai',
  'categories/concepts/what-is-llm',
  'categories/concepts/my-concept',  // <-- add here
]
```

### 2. Add a Tool Documentation Page

```bash
# Create file
touch docs/resources/tools/my-tool.md
```

Add to `sidebars.ts` under `resourcesSidebar` → `工具推荐`:
```ts
items: [
  'resources/tools/ai-tools',
  'resources/tools/chatgpt',
  'resources/tools/my-tool',  // <-- add here
]
```

Update `ai-tools.md` index to add a row in the appropriate table.

### 3. Summarize an Article (With Claude)

**Option A: Direct chat**
> "帮我整理这篇文章：https://example.com/article"

**Option B: Batch processing via reading list**
1. Add link to `docs/articles/reading-list.md`
2. Tell Claude: "帮我整理待读清单"
3. Claude generates `.md` files
4. Save to `docs/articles/`, register in `sidebars.ts`

### 4. Update the Wiki

```bash
cd AI-wiki

# Edit content...

# Test locally
npm run start

# Build and check
npm run build

# Commit
git add .
git commit -m "Add: tool guide for Ollama"
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