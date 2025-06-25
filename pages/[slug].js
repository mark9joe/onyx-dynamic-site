// pages/[slug].js
export async function getServerSideProps(context) {
  const { slug } = context.params;

  // Dummy content generation based on slug
  const content = `<p>Dynamic article for <strong>${slug}</strong></p><p>This content is loaded at request time.</p>`;
  const meta = {
    title: `Trending: ${slug.replace(/_/g, ' ')}`,
    description: `Latest updates on ${slug.replace(/_/g, ' ')}`,
  };

  return {
    props: {
      slug,
      content,
      meta,
    },
  };
}

export default function DynamicPage({ slug, content, meta }) {
  return (
    <>
      <head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </head>
      <main>
        <h1>{meta.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </>
  );
}
