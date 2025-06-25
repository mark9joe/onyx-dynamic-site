// pages/[slug].js

import Head from 'next/head';

export default function Page({ slug, article }) { return ( <> <Head> <title>{slug} | Respirework</title> <meta name="description" content={article?.summary || Latest update on ${slug}} /> <meta property="og:title" content={${slug} | Respirework} /> <meta property="og:description" content={article?.summary || ''} /> <meta property="og:url" content={https://www.respirework.com/${slug}} /> <meta name="twitter:card" content="summary_large_image" /> </Head>

<main style={{ padding: '20px', fontFamily: 'Arial' }}>
    <h1>{article?.title || `Trending Topic: ${slug.replace(/_/g, ' ')}`}</h1>
    <p>{article?.content || `Fresh update soon about ${slug}.`}</p>

    {/* ✅ Ad Placement */}
    <div style={{ marginTop: '20px' }}>
      <script async="async" data-cfasync="false"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2933560"
        data-ad-slot="2933560"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>

    {/* ✅ eBook CTA */}
    <div className="ebook-cta" style={{ marginTop: '30px' }}>
      <a href="https://payhip.com/b/yLYxv" target="_blank" rel="noopener noreferrer">
        📘 Buy the trending eBook on Payhip
      </a>
    </div>

    <footer style={{ marginTop: '50px', fontSize: '0.8em' }}>
      <p>© {new Date().getFullYear()} Respirework | Auto-generated articles from AI engine</p>
    </footer>
  </main>
</>

); }

export async function getServerSideProps({ params }) { const { slug } = params;

const article = { title: Daily Insight: ${slug.replace(/_/g, ' ')}, summary: What’s trending now in ${slug.split('_')[1]}, content: This article dives deep into today’s biggest update on ${slug.split('_')[0].toUpperCase()} in ${slug.split('_')[1]}. Stay informed and ahead. };

return { props: { slug, article, }, }; }

          
