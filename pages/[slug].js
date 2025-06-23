export async function getStaticPaths() {
  return {
    paths: [], // No pre-rendered paths
    fallback: 'blocking', // Enable on-demand generation
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  return {
    props: {
      slug,
    },
    revalidate: 3600, // Optional: revalidate every hour
  };
}

export default function SlugPage({ slug }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Dynamic Page for: {slug}</h1>
      <p>This page was generated on-demand with ISR (Incremental Static Regeneration).</p>
    </div>
  );
}
