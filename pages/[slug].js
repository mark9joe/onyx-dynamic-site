import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  return (
    <>
      <Head>
        <title>{slug} | Onyx Dynamic Site</title>
        <meta name="description" content={`Details about ${slug}`} />
        <meta property="og:title" content={`${slug} | Onyx Dynamic Site`} />
        <meta property="og:description" content={`Details about ${slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://onyx-dynamic-site.vercel.app/${slug}`} />
        <meta name="twitter:card" content="summary" />
      </Head>

      <main>
        <h1>{slug}</h1>
        <p>This is a dynamic page for <strong>{slug}</strong>.</p>
      </main>
    </>
  );
}
