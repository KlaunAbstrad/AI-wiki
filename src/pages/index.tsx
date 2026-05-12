import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            🚀 开始学习
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/blog"
            style={{marginLeft: '1rem'}}>
            📝 博客
          </Link>
        </div>
      </div>
    </header>
  );
}

function QuickLinks() {
  const links = [
    {
      title: '📚 知识库',
      description: 'AI 核心概念、学习笔记',
      to: '/docs/categories/concepts/what-is-ai',
    },
    {
      title: '🔗 工具推荐',
      description: '我们用过的 AI 工具',
      to: '/docs/resources/tools/ai-tools',
    },
    {
      title: '❓ Q&A',
      description: '常见问题解答',
      to: '/docs/qa/getting-started',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {links.map((link, idx) => (
            <div className="col col--4" key={idx}>
              <div className="card padding--lg margin-bottom--lg">
                <Heading as="h3">{link.title}</Heading>
                <p>{link.description}</p>
                <Link className="button button--primary" to={link.to}>
                  查看 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="AI 学习小组知识库，记录我们的学习历程">
      <HomepageHeader />
      <main>
        <QuickLinks />
      </main>
    </Layout>
  );
}
