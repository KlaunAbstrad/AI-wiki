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

- [ ] [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
  - 类型：论文解读
  - 难度：进阶
  - 备注：Transformer 奠基论文，必读

（在此添加新文章...）

## 已整理

- [x] [Attention Is All You Need](../resources/papers/attention-is-all-you-need)
  - 整理时间：2026-05-12

## 整理提示

对 Claude 说：

> "帮我整理待读清单里的文章，每篇生成一个 `.md` 文件"

Claude 会：
1. 读取清单中所有未勾选的链接
2. 访问每个链接并提取内容
3. 按标准模板生成摘要
4. 输出可直接复制到 `docs/articles/` 的文件内容
