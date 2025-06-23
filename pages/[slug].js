// pages/[slug].js
import Head from 'next/head';

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  return {
    props: { slug: params.slug },
    revalidate: 86400, // Rebuild daily
  };
}

export default function Page({ slug }) {
  return (
    <>
      <Head>
        <title>{slug} | RespireWork</title>
        <meta name="description" content={`Page about ${slug}`} />
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>{slug.replace(/-/g, ' ').toUpperCase()}</h1>
        <p>This page was generated on-demand.</p>
      </main>
    </>
  );
}
