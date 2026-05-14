---
id: reading-list
title: 待读文章清单
---

# 待读文章清单

这里收集待整理的文章链接。积累到一定数量后，让 Claude 批量处理。

## 使用方法

1. **发现好文章** → 按格式添加到下方
2. **积累 3-5 篇** → 告诉 Claude "帮我整理待读清单"
3. **Claude 批量生成** → 每篇文章生成一个 `.md` 摘要文件
4. **你复制保存** → 到 `docs/articles/` 目录，推送到 GitHub

## 待处理

### 示例格式

```markdown
- [ ] [文章标题](链接)
  - 类型：论文解读 / 技术教程 / 行业分析
  - 难度：入门 / 进阶 / 专家
  - 备注：为什么想读这篇文章？
```

### 清单

##### 知乎/专栏类:

- [ ] [GitHub Daily](https://github.com/GitHubDaily/GitHubDaily)
	- 每日推送 AI/开源进展
- [ ] [AI 科技大本营](https://blog.csdn.net/dQCFKyQDXYem3t1ko)
	- CSDN 专栏
- [ ] [机器之心](https://www.jiqizhixin.com/)
	- AI 行业资讯和技术解读
- [ ] [量子位](https://www.qbitai.com/)
	- AI 前沿动态

##### 工具导航类:

- [ ] [AI 产品导航](https://www.aitop100.com/)
  - 类型：工具导航
  - 难度：入门
  - 备注：中文 AI 工具收录站
- [ ] [Future Tools](https://www.futuretools.io/)
  - 类型：工具导航
  - 难度：入门
  - 备注：英文，收录全面，支持分类筛选
- [ ] [There's An AI For That](https://theresanaiforthat.com/)
  - 类型：工具导航
  - 难度：入门
  - 备注：AI 工具搜索引擎，按需求搜索

##### 实践项目类:

- [ ] [Hugging Face Spaces](https://huggingface.co/spaces)
  - 类型：实践项目
  - 难度：入门
  - 备注：可直接体验各种 AI 模型 Demo
- [ ] [LangChain Examples](https://python.langchain.com/docs/how_to#examples)
  - 类型：实践项目
  - 难度：进阶
  - 备注：跟着做 RAG/Agent 小项目
- [ ] [OpenAI Cookbook](https://github.com/openai/openai-cookbook)
  - 类型：实践项目
  - 难度：进阶
  - 备注：OpenAI API 实战技巧和示例代码

##### Newsletter / 周报类:

- [ ] [The Batch](https://www.deeplearning.ai/the-batch/)
  - 类型：行业分析
  - 难度：入门
  - 备注：吴恩达每周 AI 总结，英文
- [ ] [AI Insider](https://www.ainewsletter.cn/)
  - 类型：行业分析
  - 难度：入门
  - 备注：中文 AI 周报，翻译国外优质内容

## 已整理

- [x] [Attention Is All You Need](../resources/papers/attention-is-all-you-need)
  - 整理时间：2026-05-12
- [x] [什么是 MCP？](../categories/concepts/what-is-mcp) — Model Context Protocol 协议解读
  - 原文：https://modelcontextprotocol.io/
  - 整理时间：2026-05-12

## 整理提示

对 Claude 说：

> "帮我整理待读清单里的文章，每篇生成一个 `.md` 文件"

Claude 会：
1. 读取清单中所有未勾选的链接
2. 访问每个链接并提取内容
3. 按标准模板生成摘要
4. 输出可直接复制到 `docs/articles/` 的文件内容
