// pages/[slug].amp.js

export const config = { amp: true };

export default function AMPPage({ slug }) {
  return (
    <main>
      <h1>🚀 AMP Version: {slug}</h1>
      <p>This is the AMP version of the page for: <strong>{slug}</strong></p>

      <p>📚 <a href="https://payhip.com/b/yLYxv" target="_blank">Get the featured eBook</a></p>

      <form action="https://formsubmit.co/plazead@gmail.com" method="POST">
        <input type="email" name="email" placeholder="Subscribe for updates" required />
        <button type="submit">Subscribe</button>
      </form>
    </main>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: { slug: params.slug || "default" },
  };
}
