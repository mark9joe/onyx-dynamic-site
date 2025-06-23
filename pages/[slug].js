// pages/[slug].js
import { useRouter } from 'next/router';

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Dynamic Page</h1>
      <p>You are viewing: <strong>{slug}</strong></p>
    </div>
  );
}
