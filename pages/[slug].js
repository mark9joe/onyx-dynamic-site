import { useRouter } from 'next/router';
import Head from 'next/head';

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{slug} | Onyx Dynamic Site</title>
        <meta name="description" content={`Details about ${slug}`} />
        <meta property="og:title" content={`${slug} | Onyx Dynamic Site`} />
        <meta property="og:description" content={`Details about ${slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.respirework.com/${slug}`} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <h1>{slug}</h1>
      <p>This is the dynamic page for: {slug}</p>
    </>
  );
  }
