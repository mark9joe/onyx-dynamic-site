// pages/[slug].js
import Head from 'next/head';

export async function getServerSideProps(context) {
  const { slug } = context.params;

  // Sample dynamic article (Replace with real API or JSON source)
  const trendingArticles = {
    'ai-news_usa': {
      title: 'Top AI Breakthroughs in the USA Today',
      content: 'AI is reshaping industries across the USA, from healthcare to defense...',
      tags: ['AI', 'Technology', 'USA'],
    },
    'crypto_india': {
      title: 'Crypto in India: Regulations and New Trends',
      content: 'Indian crypto adoption is rising despite uncertain legal frameworks...',
      tags: ['Crypto', 'India', 'Finance'],
    }
  };

  const article = trendingArticles[slug] || { title: slug, content: 'No content found', tags: [] };

  return {
    props: {
      slug,
      article
    }
  };
}

export default function ArticlePage({ slug, article }) {
  return (
    <>
      <Head>
        <title>{article.title} | Respirework</title>
        <meta name="description" content={`Read latest trends on ${slug}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={`Daily trending update on ${slug}`} />
      </Head>

      <main style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>{article.title}</h1>
        <p>{article.content}</p>

        {/* ✅ Propeller Ads */}
        <div dangerouslySetInnerHTML={{ __html: `
          <script async="async" data-cfasync="false" src="//pl19551082.profitablegatecpm.com/b064ce3b57cc3d0d54b7680c5b4d8492/invoke.js"></script>
          <div id="container-b064ce3b57cc3d0d54b7680c5b4d8492"></div>
        `}} />

        {/* ✅ Payhip eBook CTA */}
        <p>
          📘 Support us & explore: <a href="https://payhip.com/b/yLYxv" target="_blank">Get our Featured eBook</a>
        </p>

        {/* ✅ Lead Form */}
        <form>
          <input type="email" placeholder="Enter your email for daily updates" />
          <button type="submit">Subscribe</button>
        </form>

        {/* ✅ Related Tags */}
        <div>
          <h4>Tags:</h4>
          <ul>{article.tags.map(tag => <li key={tag}>#{tag}</li>)}</ul>
        </div>
      </main>
    </>
  );
}
