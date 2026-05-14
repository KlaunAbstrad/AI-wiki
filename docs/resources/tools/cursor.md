---
id: cursor
title: Cursor AI 代码编辑器
sidebar_position: 2
---

# Cursor AI 代码编辑器

## 一句话总结

**Cursor** 是一个内置 AI 能力的代码编辑器，基于 VS Code，适合想要 AI 辅助编程的开发者。

## 核心功能

### 1. AI 搭档模式

| 模式 | 说明 |
|------|------|
| **Normal** | 普通编辑，AI 仅提供补全建议 |
| **Agent** | AI 自主理解任务、搜索文件、编写代码、运行命令 |

### 2. 主要特性

- **多文件编辑**：Agent 模式可同时读写多个文件
- **代码库感知**：理解整个项目的上下文
- **集成终端**：AI 可以运行 git、npm 等命令
- **图像支持**：可以直接拖入设计稿让 AI 参考

### 3. 快捷键

| 操作 | 快捷键 |
|------|--------|
| 打开 AI 对话 | `Cmd/Ctrl + L` |
| 代码补全 | `Tab` |
| 引用代码 | `Cmd/Ctrl + K` |
| Accept/拒绝补全 | `Tab` / `Esc` |

## 对比 VS Code

| 特性 | Cursor | VS Code |
|------|--------|---------|
| AI 集成 | 原生内置 | 需安装插件 |
| Agent 模式 | 是 | 需 Copilot |
| 价格 | 免费/Pro $20/月 | 免费 |
| 基础 | VS Code 分支 | 原始 |

## 入门建议

1. 下载 [cursor.com](https://cursor.com)
2. 用 GitHub 账号登录
3. 开始新项目或打开现有文件夹
4. 尝试 `Cmd/Ctrl + L` 打开 AI 对话

## 相关工具

- [Ollama 本地 LLM](./ollama) — 本地运行模型
- [GitHub Copilot](https://github.com/features/copilot) — 另一个 AI 编程助手