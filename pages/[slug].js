// pages/[slug].js
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking", // Allows dynamic page generation on first visit
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { slug: params.slug },
    revalidate: 86400, // 24 hrs
  };
}

export default function Page({ slug }) {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>✅ Page Live: {slug}</h1>
      <p>This dynamic route is working!</p>
    </div>
  );
}
