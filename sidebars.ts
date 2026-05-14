import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: '核心概念',
      collapsible: true,
      collapsed: false,
      items: [
        'categories/concepts/what-is-ai',
        'categories/concepts/what-is-llm',
        'categories/concepts/what-is-mcp',
      ],
    },
    {
      type: 'category',
      label: '提示词工程',
      collapsible: true,
      collapsed: true,
      items: [
        'categories/prompt-engineering/what-is-prompt-engineering',
        'categories/prompt-engineering/what-is-rag',
      ],
    },
  ],
  resourcesSidebar: [
    {
      type: 'category',
      label: '文章摘要',
      collapsible: true,
      collapsed: false,
      items: [
        'articles/articles-index',
        'articles/reading-list',
        'articles/article-template',
      ],
    },
    {
      type: 'category',
      label: '工具推荐',
      collapsible: true,
      collapsed: true,
      items: [
        'resources/tools/ai-tools',
        'resources/tools/chatgpt',
        'resources/tools/claude',
        'resources/tools/cursor',
        'resources/tools/ollama',
      ],
    },
    {
      type: 'category',
      label: '论文精选',
      collapsible: true,
      collapsed: true,
      items: [
        'resources/papers/attention-is-all-you-need',
      ],
    },
  ],
  qaSidebar: [
    'qa/getting-started',
  ],
};

export default sidebars;