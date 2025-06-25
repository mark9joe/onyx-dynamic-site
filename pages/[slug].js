import Head from 'next/head';

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const articles = {
    'ai-news_usa': {
      title: 'AI Breakthroughs Making Headlines in the USA',
      content: `AI is revolutionizing industries in the USA — from autonomous cars to generative AI tools in businesses. With record investments and national strategies rolling out, the U.S. is set to lead the next wave of machine intelligence.`,
      tags: ['AI', 'USA', 'Tech'],
    },
    'crypto_india': {
      title: 'Crypto Buzz in India: Regulation vs. Innovation',
      content: `India is seeing massive growth in crypto adoption. Despite regulatory pressure, young investors and developers are diving into Web3 startups and DeFi platforms, positioning India as a global crypto hub.`,
      tags: ['Crypto', 'India', 'Finance'],
    },
  };

  const article = articles[slug] || {
    title: `Topic: ${slug.replace(/_/g, ' ')}`,
    content: 'Fresh daily content will appear here. Stay tuned as we update this page with trending topics from your region.',
    tags: [slug],
  };

  return {
    props: {
      slug,
      article,
    },
  };
}

export default function ArticlePage({ article }) {
  return (
    <>
      <Head>
        <title>{article.title} | Respirework</title>
        <meta name="description" content={article.content.slice(0, 160)} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.content.slice(0, 160)} />
      </Head>

      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>{article.title}</h1>
        <p>{article.content}</p>

        {/* Embedded PropellerAds */}
        <div dangerouslySetInnerHTML={{ __html: `
          <script async="async" data-cfasync="false" src="//pl19551082.profitablegatecpm.com/b064ce3b57cc3d0d54b7680c5b4d8492/invoke.js"></script>
          <div id="container-b064ce3b57cc3d0d54b7680c5b4d8492"></div>
        ` }} />

        {/* eBook promotion */}
        <p>
          📘 Check our top eBook: <a href="https://payhip.com/b/yLYxv" target="_blank" rel="noopener noreferrer">Buy now on Payhip</a>
        </p>

        {/* Email capture form */}
        <form style={{ marginTop: '30px' }}>
          <input type="email" placeholder="Subscribe for daily updates" style={{ padding: '10px', width: '60%' }} />
          <button type="submit" style={{ padding: '10px' }}>Subscribe</button>
        </form>
      </main>
    </>
  );
}
