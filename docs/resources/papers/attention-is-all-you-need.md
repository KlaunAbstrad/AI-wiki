---
id: attention-is-all-you-need
title: Attention Is All You Need（Transformer 论文）
sidebar_position: 1
---

# Attention Is All You Need

这篇论文是**现代 AI 的基石**，提出了 **Transformer** 架构，所有主流 LLM 都基于此。

## 基本信息

- **论文标题**：Attention Is All You Need
- **作者**：Google Brain 团队（Ashish Vaswani 等，2017）
- **发表**：NeurIPS 2017
- **链接**：[arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762)

## 核心贡献

提出 **Transformer** 架构，特点是：

1. **不用 RNN/LSTM**，纯靠注意力机制
2. **并行计算**，训练速度快
3. **效果远超** 之前的序列模型

## 一句话理解

> 让模型自己学会"注意"句子中哪些词更重要。

```
句子："猫坐在垫子上"

注意力权重示意：
"猫" 关注 → 谁做了什么
"坐" 关注 → 主体和位置
"垫子" 关注 → 坐的地方
```

## Transformer 架构

```
          ┌─────────────┐
          │   Input     │
          └──────┬──────┘
                 ↓
          ┌─────────────┐
          │  Embedding  │
          └──────┬──────┘
                 ↓
     ┌───────────────────────┐
     │    Multi-Head         │
     │    Self-Attention     │
     │    (注意力层)          │
     └───────────┬───────────┘
                 ↓
          ┌─────────────┐
          │   FFN       │
          │ (前馈网络)   │
          └─────────────┘
                 ↓
          ┌─────────────┐
          │   Output    │
          └─────────────┘
```

## 为什么重要

| 影响 | 说明 |
|------|------|
| GPT 系列 | 基于 Transformer Decoder |
| BERT | 基于 Transformer Encoder |
| 所有现代 LLM | GPT-4、Claude、DeepSeek 全部基于此 |

:::info 学习建议
初学者不需要理解论文细节，但要知道：
- Transformer 是现代 AI 的基础
- "注意力机制" 是让它理解上下文的关键
- 所有你用的 AI（ChatGPT、Claude）都基于这个架构
:::

## 延伸阅读

- [The Illustrated Transformer](http://jalammar.github.io/illustrated-transformer/) — 图形化解释
- [Transformer 详解](https://zhuanlan.zhihu.com/p/44121378) — 中文解释
- [Hugging Face 课程](https://huggingface.co/learn/nlp-course) — 实践学习

## 引用

```bibtex
@inproceedings{vaswani2017attention,
  title={Attention is all you need},
  author={Vaswani, Ashish and others},
  booktitle={NeurIPS},
  year={2017}
}
```