import Head from 'next/head';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug || '';
  const [topic, country] = slug.split('_');

  return {
    props: {
      title: `${topic?.replace('-', ' ')} in ${country?.toUpperCase()}`,
      slug,
    },
    revalidate: 60,
  };
}

export default function Page({ title, slug }) {
  return (
    <>
      <Head>
        <title>{title} | RespireWork</title>
        <meta name="description" content={`Explore insights about ${title}`} />
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>{title}</h1>
        <p>Dynamic Page Slug: <strong>{slug}</strong></p>
      </main>
    </>
  );
}
