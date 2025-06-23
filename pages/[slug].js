import { useRouter } from 'next/router';

export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Dynamic Page for: {slug}</h1>
      <p>This page was generated for the slug: <strong>{slug}</strong></p>
    </div>
  );
}
