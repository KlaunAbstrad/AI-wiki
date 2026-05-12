---
id: what-is-ai
title: 什么是 AI（Artificial Intelligence）？
sidebar_position: 1
---

# 什么是 AI（Artificial Intelligence）？

**AI = Artificial Intelligence**，即人工智能。

简单来说，AI 是让计算机具有人类智能的技术 —— 能看、能听、能思考、能对话。

## AI 的发展历程

```
1950s  →  AI 概念诞生
1990s  →  机器学习（Machine Learning）兴起
2010s  →  深度学习（Deep Learning）突破
2020s  →  大语言模型（LLM）爆发
```

## AI 的主要类型

### 1. 狭义 AI / 弱 AI（Narrow AI）
- 专注于完成特定任务
- 例子：图像识别、语音助手、推荐算法
- **目前所有 AI 都是这一类**

### 2. 通用 AI / 强 AI（General AI, AGI）
- 具备人类水平的通用智能
- 能像人类一样思考和推理
- **目前尚未实现（2024年）**

## 核心概念

### 机器学习（Machine Learning, ML）
让计算机从数据中学习，而不是被明确编程。

```python
# 简单的机器学习示例
from sklearn import tree
# 用决策树分类
classifier = tree.DecisionTreeClassifier()
classifier.fit(training_data, labels)
```

### 深度学习（Deep Learning, DL）
使用**神经网络**（Neural Networks）模拟人脑工作方式。

### 大语言模型（Large Language Model, LLM）
基于海量文本数据训练的大型神经网络，能理解和生成文本。

:::info 什么是 LLM？
GPT、Claude、Gemini、DeepSeek 都是 LLM。
LLM 是 2020 年以来 AI 领域最重要的突破。
:::

## AI 能做什么？

| 领域 | 应用例子 |
|------|----------|
| **对话/文本** | ChatGPT、Claude、文心一言 |
| **图像** | Midjourney、Stable Diffusion、DALL-E |
| **代码** | GitHub Copilot Cursor |
| **音频** | Whisper（语音识别）、Suno（音乐生成） |
| **视频** | Sora Runway |
| **研究** | AlphaFold（蛋白质结构预测） |

## 相关概念

- [什么是大语言模型（LLM）？](./what-is-llm)
- [什么是机器学习？](./what-is-ml)
- [什么是深度学习？](./what-is-deep-learning)
- [什么是 RAG？](../prompt-engineering/what-is-rag)