import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>RespireWork - Passive Traffic Engine</title>
        <meta name="description" content="Build 1 billion+ passive SEO pages with AI + Vercel." />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>🚀 RespireWork Engine</h1>
        <p>Choose a live page:</p>
        <ul>
          <li><Link href="/ai-news_usa">AI News - USA</Link></li>
          <li><Link href="/crypto_canada">Crypto - Canada</Link></li>
          <li><Link href="/ebooks_uk">eBooks - UK</Link></li>
        </ul>
      </main>
    </>
  );
}
