import Head from 'next/head';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { slug: params.slug },
    revalidate: 86400,
  };
}

export default function Page({ slug }) {
  const [niche, location] = slug.split('_');

  return (
    <>
      <Head>
        <title>{`${niche.toUpperCase()} in ${location.toUpperCase()} | RespireWork`}</title>
        <meta name="description" content={`Latest in ${niche} from ${location}.`} />
        <meta property="og:title" content={`${niche.toUpperCase()} in ${location.toUpperCase()} | RespireWork`} />
        <meta property="og:description" content={`Explore ${niche} updates from ${location}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.respirework.com/${slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://www.respirework.com/${slug}`} />
      </Head>

      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>{niche.replace(/-/g, ' ').toUpperCase()} in {location.replace(/-/g, ' ').toUpperCase()}</h1>
        <p>This page is dynamically generated at run‑time for slug: <strong>{slug}</strong>.</p>
      </main>
    </>
  );
}
