// pages/[slug].js
export async function getServerSideProps(context) {
  const { slug } = context.params;

  // Fetch article content from your API or a local generator
  const res = await fetch(`https://your-api-or-logic.com/api/article?slug=${slug}`);
  const data = await res.json();

  return {
    props: {
      slug,
      content: data.content,
      meta: data.meta || {}, // title, desc, etc.
    },
  };
}

export default function ArticlePage({ slug, content, meta }) {
  return (
    <>
      <head>
        <title>{meta.title || slug} | Respirework</title>
        <meta name="description" content={meta.description || ''} />
        <meta property="og:title" content={meta.title || slug} />
        <meta property="og:description" content={meta.description || ''} />
      </head>
      <main>
        <h1>{meta.title || slug}</h1>
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </>
  );
}
