---
id: what-is-llm
title: 什么是大语言模型（LLM / Large Language Model）？
sidebar_position: 2
---

# 什么是大语言模型（LLM / Large Language Model）？

**LLM = Large Language Model**，即大语言模型。

LLM 是基于海量文本数据训练的大型神经网络，能理解并生成人类语言。

## 一句话理解

> 给它一段文字，它能预测下一段文字该说什么。

这就是 LLM 的本质——**预测下一个词（Next Token Prediction）**。

## LLM 的关键数字

| 参数 | 含义 |
|------|------|
| **参数数量** | 模型的大小，常见如 7B（70亿）、70B（700亿）、1.8T（1.8万亿） |
| **上下文窗口** | 单次对话能处理的字数，如 128K tokens |
| **训练数据量** | 训练用的文本量，常见数万亿（Trillion）tokens |

:::info 什么是 Token？
Token 是文本处理的最小单位。1 个中文词 ≈ 1-2 个 tokens。
「你好」≈ 2 tokens，「AI 学习」≈ 3 tokens。
:::

## 主流 LLM（2024-2026）

### 国际

| 模型 | 公司 | 特点 |
|------|------|------|
| GPT-5 | OpenAI | 最强通用能力 |
| Claude 4 | Anthropic | 长文本、推理能力强 |
| Gemini | Google | 多模态（文本/图像/视频） |
| Grok | xAI | 实时信息、幽默风格 |
| DeepSeek V4 | 深度求索 | 开源、高性价比 |

### 国内

| 模型 | 公司 | 特点 |
|------|------|------|
| GLM-5 | 智谱 AI | 中文优化 |
| Kimi | 月之暗面 | 长上下文（200K） |
| MiMo | 小米 | Agent 能力强 |
| 豆包 | 字节跳动 | 性价比高 |
| 混元 | 腾讯 | 接入微信/QQ |

## 模型尺寸对比

```
模型大小示意（参数数量）：

1B  (10亿)     → 手机可运行：Llama 3.2 1B, Qwen2.5 0.5B
7B  (70亿)     → 普通 GPU 可运行：Llama 3.1 7B, Qwen2.5 7B
14B (140亿)    → 中等 GPU：Qwen2.5 14B
70B (700亿)    → 高端 GPU：Llama 3.1 70B, DeepSeek V4 Flash
405B (4050亿)  → 超大规模：GPT-4 (估计), Claude 3 (估计)
1.8T (1.8万亿) → 顶级：DeepSeek V4 Pro
```

## LLM 能做什么？

### ✅ 强项
- 写作、翻译、总结
- 编程辅助（写代码、Debug）
- 分析和解释概念
- 对话和问答
- 头脑风暴

### ❌ 弱项
- 实时信息（不知道最新新闻）
- 数学计算（有时会出错）
- 长程推理（复杂多步任务）
- 精确事实记忆（可能"幻觉"）

## 相关概念

- [什么是 AI？](./what-is-ai)
- [什么是提示词工程？](../prompt-engineering/what-is-prompt-engineering)
- [什么是 RAG？](../prompt-engineering/what-is-rag)