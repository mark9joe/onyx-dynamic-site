// /pages/[slug].js
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { slug: params.slug },
    revalidate: 3600, // 1 hour
  };
}

export default function SlugPage({ slug }) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>✅ Dynamic Page</h1>
      <p>Slug: <strong>{slug}</strong></p>
    </div>
  );
}
