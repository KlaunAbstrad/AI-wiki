---
id: what-is-mcp
title: 什么是 MCP（Model Context Protocol）？
sidebar_position: 4
tags: [mcp, protocol, ai-integration, anthropic]
---

# 什么是 MCP（Model Context Protocol）？

## 一句话总结

**MCP（Model Context Protocol）** 是一个开源标准协议，让 AI 应用（如 Claude、ChatGPT）能够统一、标准化地连接外部数据源和工具。

## 核心观点

### AI 的 "USB-C" 接口

MCP 就像是 AI 应用的 **USB-C 端口**：

- **USB-C**：让不同电子设备统一连接
- **MCP**：让不同 AI 应用统一连接外部系统

不再需要为每个工具写不同的集成代码，一次开发，到处使用。

### 解决的核心问题

在 MCP 之前，AI 应用连接外部系统是这样的：

```
Claude ──→ 文件系统（自定义代码 A）
Claude ──→ 数据库（自定义代码 B）
Claude ──→ Google 日历（自定义代码 C）
Claude ──→ Slack（自定义代码 D）
...每个集成都要从零写
```

有了 MCP 之后：

```
Claude ──→ MCP 协议 ──→ 文件系统 MCP Server
Claude ──→ MCP 协议 ──→ 数据库 MCP Server
Claude ──→ MCP 协议 ──→ Google 日历 MCP Server
Claude ──→ MCP 协议 ──→ Slack MCP Server
...统一协议，一次对接
```

### 三大核心能力

| 能力 | 说明 | 示例 |
|------|------|------|
| **Tools（工具）** | AI 可调用的功能函数 | 查询数据库、发送邮件、操作文件 |
| **Resources（资源）** | 提供给 AI 的上下文数据 | 文件内容、数据库 Schema、API 响应 |
| **Prompts（提示词）** | 可复用的交互模板 | 系统提示词、少样本示例 |

### 架构设计

MCP 采用 **客户端-服务器（Client-Server）架构**：

```
┌─────────────────────────────────────┐
│         MCP Host（AI 应用）          │
│  ┌─────────┐ ┌─────────┐           │
│  │ MCP     │ │ MCP     │           │
│  │ Client 1│ │ Client 2│ ...       │
│  └────┬────┘ └────┬────┘           │
└───────┼───────────┼────────────────┘
        │           │
   STDIO / HTTP    STDIO / HTTP
        │           │
┌───────┴────┐ ┌────┴──────────────┐
│ MCP Server │ │ MCP Server        │
│ 本地文件系统 │ │ 远程服务（Sentry） │
└────────────┘ └───────────────────┘
```

**关键角色：**

- **MCP Host**：AI 应用本身（如 Claude Desktop、VS Code、Cursor）
- **MCP Client**：Host 创建的连接管理器，每个 Server 对应一个 Client
- **MCP Server**：提供数据/工具的程序，可本地运行或远程部署

### 两层协议设计

MCP 分为两层：

**数据层（Data Layer）**：
- 基于 **JSON-RPC 2.0** 的通信协议
- 定义生命周期管理（连接、协商、断开）
- 定义 Primitives（Tools/Resources/Prompts）的交互语义

**传输层（Transport Layer）**：
- **STDIO**：本地进程间通信，无网络开销
- **Streamable HTTP**：远程通信，支持 SSE 流式传输，兼容标准 HTTP 认证

## 对我的启发

### 为什么 MCP 很重要？

**对开发者：**
- 大幅降低 AI 应用开发复杂度
- 写一次 Server，所有支持 MCP 的客户端都能用

**对 AI 应用：**
- 接入丰富的工具生态，能力大幅增强
- 不需要维护大量自定义集成

**对终端用户：**
- AI 助手能真正操作你的工具和数据
- 更个性化、更强大的 AI 体验

### 实际应用场景

- **个人助手**：Claude 访问你的 Google 日历 + Notion，成为真正的个人助理
- **开发工具**：Claude Code 读取 Figma 设计稿，自动生成对应代码
- **企业应用**：Chatbot 连接多个数据库，用对话方式分析企业数据
- **创意工作流**：AI 生成 3D 模型，直接发送到 3D 打印机

## 相关概念

- [什么是 AI？](./what-is-ai)
- [什么是 LLM？](./what-is-llm)
- [什么是 RAG？](../prompt-engineering/what-is-rag)

## 存疑/待深入

1. MCP 与 Function Calling 有什么区别和联系？
2. MCP Server 的安全性如何保证？（权限控制、沙箱隔离）
3. 与 LangChain、LlamaIndex 等框架的关系是什么？互补还是竞争？
4. 目前支持 MCP 的主流工具有哪些？（VS Code、Cursor、Claude Desktop...）

## 延伸阅读

- [MCP 官方文档](https://modelcontextprotocol.io/)
- [MCP GitHub 仓库](https://github.com/modelcontextprotocol)
- [MCP 规范（Specification）](https://modelcontextprotocol.io/specification/2025-06-18/server/resources)
- [Claude Desktop MCP 集成指南](https://modelcontextprotocol.io/docs/getting-started/quickstart)

## 快速尝试

如果你想体验 MCP：

1. 下载 [Claude Desktop](https://claude.ai/download)
2. 配置本地 MCP Server（如文件系统访问）
3. 让 Claude 直接操作你的本地文件

或者使用 [MCP Inspector](https://modelcontextprotocol.io/docs/tools/inspector) 来开发和调试 MCP Server。
