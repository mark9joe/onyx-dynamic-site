// pages/[slug].js

import Head from 'next/head';

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const articles = {
    'ai-news_usa': {
      title: 'AI Breakthroughs Making Headlines in the USA',
      content: `Artificial Intelligence is disrupting every industry in the USA. From autonomous vehicles to advanced healthcare diagnostics, the AI boom is revolutionizing how we live and work. Startups in Silicon Valley are rapidly adopting generative AI to boost productivity and profitability. The government has announced new funding for AI research, ensuring the USA remains competitive.`,
      tags: ['AI', 'USA', 'Innovation'],
    },
    'crypto_india': {
      title: 'Crypto Buzz in India: What You Need to Know',
      content: `India is witnessing a surge in crypto adoption despite regulatory uncertainty. With over 100 million users, India is now one of the biggest crypto markets. Leading exchanges are adapting to new compliance models, and the government is considering a digital rupee pilot. Stay tuned as the crypto story evolves in India.`,
      tags: ['Crypto', 'India', 'Finance'],
    }
  };

  const article = articles[slug] || {
    title: `Topic: ${slug.replace(/_/g, ' ')}`,
    content: 'Fresh insights and global trends will appear here daily. Stay tuned!',
    tags: [slug],
  };

  return {
    props: {
      slug,
      article,
    },
  };
}

export default function ArticlePage({ slug, article }) {
  return (
    <>
      <Head>
        <title>{article.title} | Respirework</title>
        <meta name="description" content={article.content.slice(0, 120)} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.content.slice(0, 160)} />
        <meta property="og:type" content="article" />
      </Head>

      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>{article.title}</h1>
        <p>{article.content}</p>

        {/* ✅ Propeller Ads Embed */}
        <div dangerouslySetInnerHTML={{ __html: `
          <script async="async" data-cfasync="false" src="//pl19551082.profitablegatecpm.com/b064ce3b57cc3d0d54b7680c5b4d8492/invoke.js"></script>
          <div id="container-b064ce3b57cc3d0d54b7680c5b4d8492"></div>
        ` }} />

        {/* ✅ eBook CTA */}
        <p>
          📘 Check our bestseller eBook: <a href="https://payhip.com/b/yLYxv" target="_blank" rel="noopener noreferrer">Buy Now</a>
        </p>

        {/* ✅ Email Lead Capture */}
        <form style={{ marginTop: '20px' }}>
          <input type="email" placeholder="Enter your email for daily updates" style={{ padding: '10px', width: '60%' }} />
          <button type="submit" style={{ padding: '10px' }}>Subscribe</button>
        </form>

        {/* ✅ Tags */}
        <div style={{ marginTop: '30px' }}>
          <strong>Tags:</strong>
          <ul>
            {article.tags.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
          }
