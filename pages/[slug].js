// pages/[slug].js

import Head from 'next/head'; import { useEffect } from 'react'; import Script from 'next/script';

export default function Page({ slug, article }) { const country = slug.split('_')[1]?.toLowerCase();

return ( <> <Head> <title>{slug} | Respirework</title> <meta name="description" content={article?.summary || Latest update on ${slug}} /> <meta property="og:title" content={${slug} | Respirework} /> <meta property="og:description" content={article?.summary || ''} /> <meta property="og:url" content={https://www.respirework.com/${slug}} /> <meta name="twitter:card" content="summary_large_image" /> </Head>

<main style={{ padding: '20px', fontFamily: 'Arial' }}>
    <h1>{article?.title || `Trending Topic: ${slug.replace(/_/g, ' ')}`}</h1>
    <p>{article?.content || `Fresh update soon about ${slug}.`}</p>

    {/* ✅ Ad Placement */}
    <div style={{ marginTop: '20px' }}>
      <Script id="propeller" strategy="afterInteractive">
        {`
          atOptions = {
            'key' : '2933560',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {} 
          };
          document.write('<scr' + 'ipt type="text/javascript" src="//www.propellerclick.com/ads.js"></scr' + 'ipt>');
        `}
      </Script>
    </div>

    {/* ✅ eBook CTA */}
    <div className="ebook-cta" style={{ marginTop: '30px' }}>
      <a href="https://payhip.com/b/yLYxv" target="_blank" rel="noopener noreferrer">
        📘 Buy the trending eBook on Payhip
      </a>
    </div>

    {/* 🌍 Region Language Notice */}
    <div style={{ marginTop: '40px', fontStyle: 'italic', color: '#555' }}>
      {country && (
        <p>This article is tailored for readers in <b>{country.toUpperCase()}</b>. Translations in your regional language coming soon.</p>
      )}
    </div>

    {/* 📚 Related Articles */}
    <div style={{ marginTop: '40px' }}>
      <h3>Related Articles</h3>
      <ul>
        <li><a href="/crypto_usa">🚀 Crypto Trends in USA</a></li>
        <li><a href="/ai-news_india">🤖 AI News in India</a></li>
        <li><a href="/motivation_uk">💡 Motivation Stories UK</a></li>
      </ul>
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

