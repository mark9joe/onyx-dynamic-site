import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{slug ? `${slug} | Onyx Dynamic Site` : 'Loading...'}</title>
        <meta name="description" content={`Details about ${slug}`} />
      </Head>

      <main>
        <h1>{slug}</h1>
        <p>This is a dynamic page for: <strong>{slug}</strong></p>
      </main>
    </>
  );
}
