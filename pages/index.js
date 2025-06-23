import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>RespireWork - AI, Crypto, Motivation</title>
        <meta name="description" content="Explore trending AI, Crypto, Motivation topics" />
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to RespireWork</h1>
        <p>Discover top topics:</p>
        <ul>
          <li><Link href="/ai-news_usa">AI News - USA</Link></li>
          <li><Link href="/crypto_canada">Crypto - Canada</Link></li>
          <li><Link href="/motivation_uk">Motivation - UK</Link></li>
        </ul>
      </main>
    </>
  );
}
