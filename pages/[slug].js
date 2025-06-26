import Head from 'next/head';
import { getContentForSlug } from '../lib/content';

export default function Page({ slug, content, isBot }) {
  if (!isBot) {
    return <meta httpEquiv="refresh" content="0;url=/" />;
  }
  return (
    <>
      <Head>
        <title>{slug} | RespireWork</title>
        <meta name="description" content={`Latest on ${slug}`} />
        <meta property="og:title" content={`${slug} | RespireWork`} />
        <meta property="og:description" content={`Check out ${slug}`} />
      </Head>
      <article dangerouslySetInnerHTML={{ __html: content?.replace(/#offer/g, `<a href="https://respirework.com/offer">Special Offer</a>`) }} />
    </>
  );
}

export async function getServerSideProps({ req, params }) {
  const slug = params.slug;
  const ua = req.headers['user-agent'] || '';
  const isBot = /bot|crawler|spider|slurp|archiver|facebook/i.test(ua);
  const content = await getContentForSlug(slug);
  return { props: { slug, content, isBot } };
}
