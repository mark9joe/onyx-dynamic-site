// pages/[slug].js

import Head from 'next/head';

export default function NormalPage({ slug, article }) {
  return (
    <>
      <Head>
        <title>{slug} | Respirework</title>
        <meta name="description" content={article?.summary || `Explore updates on ${slug}`} />
        <meta property="og:title" content={`${slug} | Respirework`} />
        <meta property="og:description" content={article?.summary || ''} />
        <meta property="og:url" content={`https://www.respirework.com/${slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>{article?.title || `Trending: ${slug.replace(/_/g, ' ')}`}</h1>
        <p>{article?.content || `More details coming soon about ${slug}.`}</p>

        {/* ✅ PropellerAds Zone (adjust your script below) */}
        <div className="ads" style={{ margin: '30px 0' }}>
          <script async="async" data-cfasync="false" src="//upgulpinon.com/1?z=2933560"></script>
        </div>

        {/* ✅ eBook Promo */}
        <div className="payhip-banner" style={{ marginTop: '30px' }}>
          <a href="https://payhip.com/b/yLYxv" target="_blank" rel="noopener noreferrer">
            📘 Buy Our Top eBook on Payhip
          </a>
        </div>

        <footer style={{ marginTop: '50px', fontSize: '0.8em' }}>
          <p>© {new Date().getFullYear()} Respirework | Auto-generated content powered by AI</p>
        </footer>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  // Replace this with your real content logic (API, DB, or generated)
  const article = {
    title: `Hot Topic: ${slug.replace(/_/g, ' ')}`,
    summary: `Breaking down the latest news on ${slug}`,
    content: `Today in ${slug.split('_')[1]}, people are discussing "${slug
      .split('_')[0]
      .toUpperCase()}". Here's what's trending and why it matters...`,
  };

  return {
    props: {
      slug,
      article,
    },
  };
          }
