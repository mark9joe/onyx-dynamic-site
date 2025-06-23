// pages/[slug].js
import { useRouter } from 'next/router';

export default function SlugPage() {
  const router = useRouter();
  return <h1>Slug: {router.query.slug}</h1>;
};

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Dynamic Page</h1>
      <p>You are viewing: <strong>{slug}</strong></p>
    </div>
  );
}
