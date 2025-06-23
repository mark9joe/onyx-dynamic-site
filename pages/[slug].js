export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'hello-world' } },
      { params: { slug: 'example' } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug || null,
    },
  };
}

export default function Page({ slug }) {
  return (
    <div>
      <h1>Dynamic Page: {slug}</h1>
      <p>This page was generated dynamically using [slug].js</p>
    </div>
  );
}
