// pages/[slug].js
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <div>Loading...</div>;

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
      <h1>Redirecting...</h1>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.href = "https://www.respirework.com";`
        }}
      />
    </>
  );
}
