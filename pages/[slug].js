import Head from 'next/head';

const validSlugs = [
  "ai-news_usa", "ai-news_uk", "ai-news_canada", "ai-news_australia", "ai-news_new-zealand", "ai-news_uae", "ai-news_germany", "ai-news_france", "ai-news_italy", "ai-news_spain", "ai-news_netherlands", "ai-news_sweden", "ai-news_switzerland", "ai-news_ireland", "ai-news_qatar", "ai-news_kuwait", "ai-news_oman", "ai-news_bahrain", "ai-news_saudi-arabia",
  "crypto_usa", "crypto_uk", "crypto_canada", "crypto_australia", "crypto_new-zealand", "crypto_uae", "crypto_germany", "crypto_france", "crypto_italy", "crypto_spain", "crypto_netherlands", "crypto_sweden", "crypto_switzerland", "crypto_ireland", "crypto_qatar", "crypto_kuwait", "crypto_oman", "crypto_bahrain", "crypto_saudi-arabia",
  "motivation_usa", "motivation_uk", "motivation_canada", "motivation_australia", "motivation_new-zealand", "motivation_uae", "motivation_germany", "motivation_france", "motivation_italy", "motivation_spain", "motivation_netherlands", "motivation_sweden", "motivation_switzerland", "motivation_ireland", "motivation_qatar", "motivation_kuwait", "motivation_oman", "motivation_bahrain", "motivation_saudi-arabia",
  // Add remaining slug combinations...
];

export async function getStaticPaths() {
  const paths = validSlugs.map((slug) => ({
    params: { slug }
  }));
  return {
    paths,
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  if (!validSlugs.includes(slug)) {
    return { notFound: true };
  }

  return {
    props: { slug },
    revalidate: 86400, // Regenerate every 24 hours
  };
}

export default function Page({ slug }) {
  const [niche, location] = slug.split('_');

  return (
    <>
      <Head>
        <title>{`${niche.toUpperCase()} in ${location.toUpperCase()} | RespireWork`}</title>
        <meta name="description" content={`Explore the latest in ${niche} from ${location}. Trends, updates, and insights.`} />
        <meta property="og:title" content={`${niche.toUpperCase()} in ${location.toUpperCase()} | RespireWork`} />
        <meta property="og:description" content={`Discover ${niche} updates from ${location} on RespireWork.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.respirework.com/${slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://www.respirework.com/${slug}`} />
      </Head>

      <main>
        <h1>{niche.replace(/-/g, ' ').toUpperCase()} in {location.replace(/-/g, ' ').toUpperCase()}</h1>
        <p>This dynamic page brings you curated updates, tools, and resources on <strong>{niche.replace(/-/g, ' ')}</strong> in <strong>{location.replace(/-/g, ' ')}</strong>.</p>
        <p>Powered by <a href="https://www.respirework.com">RespireWork.com</a></p>
      </main>
    </>
  );
}
