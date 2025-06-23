// /pages/[slug].js
export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.slug }, revalidate: 3600 };
}

export default function Page({ slug }) {
  return <div style={{ padding: '2rem' }}>Slug: <b>{slug}</b></div>;
}
