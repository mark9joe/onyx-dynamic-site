// pages/[slug].amp.js

export const config = { amp: true };

export default function AMPPage({ slug }) {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>{slug} | Respirework AMP</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta name="description" content={`Latest trending news and insights on ${slug}`} />
        <meta property="og:title" content={`${slug} | Respirework`} />
        <meta property="og:description" content={`Breaking stories and updates on ${slug}`} />
        <meta property="og:url" content={`https://www.respirework.com/${slug}?amp=1`} />
        <meta name="twitter:card" content="summary" />
        <style amp-custom>{`
          body { font-family: Arial, sans-serif; padding: 16px; line-height: 1.6; background: #fff; color: #111; }
          h1 { font-size: 24px; }
          p { margin-bottom: 12px; }
          .ad { margin: 20px 0; background: #f9f9f9; padding: 10px; border: 1px dashed #ccc; }
          form { margin-top: 20px; }
        `}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
      </head>

      <body>
        <h1>🔥 Trending: {slug.replaceAll('_', ' ')}</h1>

        <p>This is the AMP version of <strong>{slug}</strong>. We deliver regionally relevant news, insights, and offers tailored to your interest.</p>

        <div className="ad">
          <p><strong>Advertisement</strong></p>
          {/* Insert your PropellerAds AMP ad code here */}
          <amp-ad
            width="300"
            height="250"
            type="adsense"
            data-ad-client="ca-pub-2933560"
            data-ad-slot="1234567890">
          </amp-ad>
        </div>

        <p>📚 Discover our featured eBook: <a href="https://payhip.com/b/yLYxv" target="_blank">The Empyrean #3 by Rebecca Yarros</a></p>

        <form action="https://formsubmit.co/plazead@gmail.com" method="POST">
          <input type="email" name="email" placeholder="Get daily updates" required />
          <button type="submit">Subscribe</button>
        </form>
      </body>
    </>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      slug: params.slug || 'ai-news_usa',
    },
  };
}
