// pages/[slug].amp.js
export const config = { amp: true };

export default function AMPPage({ slug, article }) {
  return (
    <html ⚡="">
      <head>
        <meta charSet="utf-8" />
        <title>{slug} | Respirework AMP</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta name="description" content={article?.summary || `Latest update on ${slug}`} />
        <meta property="og:title" content={`${slug} | Respirework`} />
        <meta property="og:description" content={article?.summary || ''} />
        <meta property="og:url" content={`https://www.respirework.com/${slug}?amp=1`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <style amp-custom>
          {`
            body { font-family: Arial; padding: 20px; }
            h1 { font-size: 24px; }
            .payhip-banner, .ads { margin: 20px 0; }
          `}
        </style>
      </head>
      <body>
        <h1>{article?.title || `Trending on ${slug}`}</h1>
        <p>{article?.content || `More updates on ${slug} will appear here.`}</p>

        <div className="ads">
          {/* ✅ PropellerAds embed */}
          <amp-iframe
            width="300"
            height="250"
            sandbox="allow-scripts allow-same-origin"
            layout="fixed"
            frameborder="0"
            src="https://your-propeller-ads-script-url-here"
          >
            <amp-img layout="fill" src="/fallback.png" placeholder></amp-img>
          </amp-iframe>
        </div>

        <div className="payhip-banner">
          <a href="https://payhip.com/b/yLYxv" target="_blank">
            📘 Get the Best eBook Now
          </a>
        </div>

        <footer>
          <small>Powered by Respirework</small>
        </footer>
      </body>
    </html>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  // 🔄 Replace this with real article fetch (API, DB, or file)
  const article = {
    title: `Why ${slug.replace(/_/g, ' ')} is trending now`,
    summary: `A deep dive into ${slug}`,
    content: `This article explains the latest news and trends around ${slug}. More updates coming daily.`,
  };

  return {
    props: {
      slug,
      article,
    },
  };
}
