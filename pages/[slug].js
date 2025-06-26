export default function Page({ slug, content, isBot }) {
  // Cloak logic
  if (!isBot) {
    return <>
      <script>location.href='/'</script>
    </>;
  }
  return (
    <>
      <Head>
        <title>{slug} | RespireWork</title>
        <meta name="description" content={`Latest on ${slug}`} />
        <meta property="og:title" content={`${slug} | RespireWork`} />
        <meta property="og:description" content={`Latest on ${slug}`} />
      </Head>
      <article dangerouslySetInnerHTML={{ __html: content.replace(/#offer/g, '<a href="#offer">Offer Here</a>') }} />
    </>
  );
}

export async function getServerSideProps({ req, params }) {
  const slug = params.slug;
  const isBot = /bot|spider|crawl/ig.test(req.headers['user-agent'] || '');
  const content = await generateContentForSlug(slug); // AI or cached
  // Ping sitemap / index triggers here
  return { props: { slug, content, isBot } };
}
