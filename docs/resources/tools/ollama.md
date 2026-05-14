---
id: ollama
title: Ollama 本地 LLM 运行工具
sidebar_position: 3
---

# Ollama 本地 LLM 运行工具

## 一句话总结

**Ollama** 让你能在本地电脑运行大语言模型（如 Llama、Qwen、Mistral），无需联网、保护隐私。

## 核心功能

### 本地运行 LLM

- 下载即用，无需配置复杂环境
- 支持 Windows、macOS、Linux
- 自动下载模型文件（几个 GB）

### 支持的模型

| 模型 | 大小 | 特点 |
|------|------|------|
| Llama 3.2 | 1B/3B | 轻量、手机可跑 |
| Llama 3.1 | 8B/70B | 主流选择 |
| Qwen 2.5 | 7B/14B | 中文优化 |
| Mistral | 7B | 欧洲开源 |
| DeepSeek R1 | 7B/70B | 推理能力强 |
| Phi-3 | 3B | 微软轻量模型 |

## 安装和使用

### 安装

```bash
# macOS/Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows: 下载安装包 from ollama.com
```

### 常用命令

```bash
# 下载模型
ollama pull llama3.2

# 运行模型
ollama run llama3.2

# 列出已下载的模型
ollama list

# 删除模型
ollama rm llama3.2
```

## 与 Cursor 配合使用

可以在 Cursor 的设置中连接本地 Ollama 作为后端：

1. 安装 Ollama 并下载模型（如 `ollama pull qwen2.5:7b`）
2. 在 Cursor 设置中配置 API 地址为 `http://localhost:11434`
3. 选择使用本地模型

## 适用场景

- **隐私敏感**：不希望数据上云
- **学习研究**：低成本运行实验
- **离线环境**：没有网络
- **开发调试**：快速迭代 Prompt

## 相关工具

- [Cursor AI 代码编辑器](./cursor) — AI 代码编辑器
- [vLLM](https://github.com/vllm-project/vllm) — 高性能推理（需要 GPU）
- [llama.cpp](https://github.com/ggerganov/llama.cpp) — 更轻量的 CPU 推理