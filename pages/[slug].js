export default function Page({ slug }) {
  return (
    <div>
      <h1>Page Live: {slug}</h1>
      <p>This dynamic route is working!</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      slug: params.slug || 'default',
    },
  };
}
