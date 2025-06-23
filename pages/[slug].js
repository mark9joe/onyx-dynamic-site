// pages/[slug].js
import { useRouter } from 'next/router';

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Dynamic Page: {slug}</h1>
      <p>This is the content for {slug}</p>
    </div>
  );
}
