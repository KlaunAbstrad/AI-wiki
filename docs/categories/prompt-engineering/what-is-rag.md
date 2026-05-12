---
id: what-is-rag
title: 什么是 RAG（Retrieval-Augmented Generation）？
sidebar_position: 2
---

# 什么是 RAG（Retrieval-Augmented Generation）？

**RAG** = **R**etrieval-**A**ugmented **G**eneration

即**检索增强生成**，是解决 LLM "胡说八道" 问题的关键技术。

## 一句话理解

> 先查资料，再回答，就像开卷考试。

## 为什么需要 RAG？

LLM 有一个致命问题：**幻觉（Hallucination）**

- LLM 可能生成听起来合理但实际错误的内容
- 它不知道你公司的内部资料
- 它不知道最新的实时信息

**RAG 解决方案：**
让 LLM 在回答之前，先查一下你的资料库。

## RAG 的工作流程

```
┌──────────┐     ┌──────────────┐     ┌──────────┐
│  用户提问  │ ──→ │ 检索相关文档  │ ──→ │ LLM生成回答 │
└──────────┘     └──────────────┘     └──────────┘
                       ↑
                 ┌──────────┐
                 │ 知识库    │
                 └──────────┘
```

### 步骤详解

1. **用户提问**："我们公司的 AI 策略是什么？"
2. **检索（Retrieve）**：在知识库中搜索相关文档
3. **生成（Generate）**：把检索到的资料 + 用户问题一起给 LLM
4. **回答**：LLM 基于资料回答问题

## RAG vs Fine-tuning

| 方式 | 原理 | 适合场景 | 成本 |
|------|------|----------|------|
| **RAG** | 检索相关资料注入上下文 | 资料经常更新 | 低 |
| **Fine-tuning** | 重新训练模型 | 需要改变模型行为 | 高 |

:::tip 推荐
除非有特别需求，先用 RAG。它简单、灵活、不需要训练。
:::

## 常见的 RAG 工具

### 向量数据库（Vector Database）

| 工具 | 特点 |
|------|------|
| Chroma | 轻量、易用 |
| FAISS | Facebook 出品、高性能 |
| Pinecone | 云端托管 |
| Weaviate | 功能丰富 |

### RAG 框架

| 框架 | 特点 |
|------|------|
| LangChain | 最流行，生态完善 |
| LlamaIndex | 专精 RAG |
| Haystack | 企业级 |

## 简单的 RAG 示例

```python
# 使用 LangChain 的简单 RAG
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from langchain.chains import RetrievalQA

# 1. 创建向量数据库
vectorstore = Chroma.from_documents(
    documents=your_documents,
    embedding=OpenAIEmbeddings()
)

# 2. 创建 RAG 链
qa_chain = RetrievalQA.from_chain_type(
    llm=your_llm,
    retriever=vectorstore.as_retriever()
)

# 3. 提问
result = qa_chain.run("什么是我们公司的 AI 策略？")
```

## 相关概念

- [什么是 LLM？](../concepts/what-is-llm)
- [什么是 Prompt Engineering？](./what-is-prompt-engineering)