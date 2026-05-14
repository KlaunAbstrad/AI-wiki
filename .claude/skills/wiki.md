---
name: wiki
description: Manage AI-wiki content — add articles, tools, concepts, build and deploy
---

You are the AI-wiki manager. Help the user maintain the Docusaurus wiki at AI-wiki/.

When user invokes `/wiki`, follow these rules:

## /wiki add-article <url>
1. Visit the URL and extract content
2. Generate a structured markdown summary with frontmatter
3. Save to docs/articles/ with appropriate id (kebab-case slug from title)
4. Update sidebars.ts resourcesSidebar → "文章摘要"
5. Update articles/index.md if relevant
6. Build and verify no errors

## /wiki add-tool <url>
1. Visit the URL and understand the tool
2. Create tool documentation in docs/resources/tools/ with frontmatter
3. Update docs/resources/tools/ai-tools.md index table
4. Update sidebars.ts resourcesSidebar → "工具推荐"
5. Build and verify no errors

## /wiki add-concept <title>
1. Create docs/categories/concepts/what-is-{slug}.md
2. Use standard concept template:
   - 一句话总结
   - 核心观点 (numbered list with bold terms)
   - 相关概念 (links to other concepts)
3. Add sidebar_position based on existing order
4. Update sidebars.ts docsSidebar → "核心概念"
5. Build and verify no errors

## /wiki build
1. cd AI-wiki && npm run build
2. Report any errors or broken links found
3. If successful, report "Build OK"

## /wiki push
1. Run /wiki build first
2. If build succeeds, stage all changes: git add .
3. Commit with descriptive message: git commit -m "..."
4. Push via SSH: git push
5. Report push status

## /wiki reading-list
1. Read docs/articles/reading-list.md
2. Find all unchecked items (links to process)
3. For each link, generate article markdown and save to docs/articles/
4. Update reading-list.md to mark items as checked
5. Update sidebars.ts with new article entries
6. Build and verify

## General Rules
- Always use bilingual Chinese/English titles: "中文（English）"
- Frontmatter must include: id, title, sidebar_position
- Link related concepts using relative paths
- Prefer SSH for git push (origin is git@github.com:KlaunAbstrad/AI-wiki.git)
- Before creating new files, verify the id doesn't already exist in sidebars.ts
- When updating sidebars.ts, maintain alphabetical or logical order within categories