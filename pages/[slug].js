// pages/[slug].js
import Head from 'next/head';

export async function getServerSideProps(context) {
  const { slug } = context.params;

  // Simulate a generated trending article (later replace with real fetch)
  const article = `
    <h1>Breaking Trends in ${slug.replace(/_/g, ' ')}</h1>
    <p>Stay ahead with the latest ${slug.split('_')[0]} insights tailored for ${slug.split('_')[1]} audience.</p>
    <p>This content updates daily with fresh headlines and expert commentary.</p>
    <a href="https://payhip.com/b/yLYxv" target="_blank">📘 Grab the latest eBook</a>
    <div id="propeller-ad"></div>
  `;

  const meta = {
    title: `${slug.replace(/_/g, ' ')} | RespireWork`,
    description: `Explore trending insights on ${slug.replace(/_/g, ' ')}`,
    slugUrl: `https://www.respirework.com/${slug}`,
  };

  return {
    props: { slug, article, meta },
  };
}

export default function Page({ slug, article, meta }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.slugUrl} />
        <meta name="twitter:card" content="summary" />
        <script
          async
          data-cfasync="false"
          src="//upgulpinon.com/1?z=6052213"
        ></script>
      </Head>
      <main>
        <div dangerouslySetInnerHTML={{ __html: article }} />
      </main>
    </>
  );
}
