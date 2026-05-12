import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI 学习小组',
  tagline: '一起学习 AI，共同成长',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://KlaunAbstrad.github.io',
  baseUrl: '/AI-wiki/',

  organizationName: 'KlaunAbstrad',
  projectName: 'AI-wiki',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/KlaunAbstrad/AI-wiki/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
          },
          editUrl: 'https://github.com/KlaunAbstrad/AI-wiki/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'welcome',
      content: '🎓 欢迎来到 AI 学习小组 Wiki！在这里记录我们的学习历程。',
      backgroundColor: '#faf7f3',
      textColor: '#2c2420',
    },
    navbar: {
      title: 'AI 学习 Wiki',
      logo: {
        alt: 'AI 学习 Wiki',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '📚 知识库',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resourcesSidebar',
          position: 'left',
          label: '🔗 资源',
        },
        {
          type: 'docSidebar',
          sidebarId: 'qaSidebar',
          position: 'left',
          label: '❓ Q&A',
        },
        { to: '/blog', label: '📝 博客', position: 'left' },
        {
          href: 'https://github.com/KlaunAbstrad/AI-wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '📖 文档',
          items: [
            { label: '开始学习', to: '/docs/intro' },
            { label: '知识库', to: '/docs/categories/concepts' },
          ],
        },
        {
          title: '🔗 资源',
          items: [
            { label: '工具推荐', to: '/docs/resources/tools' },
            { label: '论文精选', to: '/docs/resources/papers' },
          ],
        },
        {
          title: '关于',
          items: [
            { label: '关于我们', to: '/docs/about' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} AI 学习小组 · Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'json', 'yaml'],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;