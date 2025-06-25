// pages/[slug].amp.js

export const config = { amp: true };

export default function AMPPage({ slug }) {
  return (
    <html amp>
      <head>
        <meta charSet="utf-8" />
        <title>{slug} | Respirework AMP</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta name="description" content={`Latest trending news in ${slug}`} />
        <meta property="og:title" content={`${slug} | Respirework AMP`} />
        <meta property="og:description" content={`Latest trending updates in ${slug}`} />
        <meta property="og:url" content={`https://www.respirework.com/${slug}?amp=1`} />
        <meta name="twitter:card" content="summary" />
        <style amp-custom>{`
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            line-height: 1.6;
          }
          h1 {
            font-size: 24px;
            margin-bottom: 10px;
          }
          p {
            font-size: 16px;
            margin-bottom: 16px;
          }
          .promo {
            background: #f9f9f9;
            padding: 12px;
            border-left: 4px solid #333;
            margin: 20px 0;
          }
        `}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
      </head>
      <body>
        <h1>Trending Topic: {slug}</h1>
        <p>
          Welcome to today's top story in <strong>{slug}</strong>. Stay updated with fresh articles daily powered by Respirework.
        </p>

        <div className="promo">
          <p>🔥 Download our featured eBook: <a href="https://payhip.com/b/yLYxv" target="_blank">The Empyrean #3</a></p>
        </div>

        <p>
          Enjoy clean, AMP-optimized content and fast delivery. This is part of our global news & knowledge portal. For more updates, visit <a href="https://www.respirework.com">Respirework.com</a>.
        </p>

        {/* Propeller Ads (AMP Version) */}
        <amp-ad width="100vw" height="320"
          type="adsense"
          data-ad-client="ca-pub-9911531576192254"
          data-ad-slot="2933560"
          data-auto-format="rspv"
          data-full-width="">
          <div overflow=""></div>
        </amp-ad>
      </body>
    </html>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      slug: params.slug || "default",
    },
  };
}
