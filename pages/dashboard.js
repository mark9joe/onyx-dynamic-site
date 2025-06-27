// pages/dashboard.js

import Head from 'next/head';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Automation Dashboard - RespireWork</title>
      </Head>
      <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <h1>📊 Automation Dashboard</h1>
        <p>Welcome to your live dashboard. Here's a snapshot of the passive traffic system.</p>

        <section style={{ marginTop: '2rem' }}>
          <h2>🔄 Live Status</h2>
          <ul>
            <li>✅ Article Injection: <strong>Active</strong></li>
            <li>✅ RSS Feed Submissions: <strong>Scheduled Daily</strong></li>
            <li>✅ Social Promotion: <strong>Enabled</strong></li>
            <li>✅ Monetization: <strong>Injected</strong></li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>📅 Today’s Activity</h2>
          <ul>
            <li>Articles Posted: <strong>100,000</strong></li>
            <li>Comments Dropped: <strong>100,000</strong></li>
            <li>RSS Feeds Generated: <strong>100,000</strong></li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>🔗 Useful Links</h2>
          <ul>
            <li><a href="https://www.respirework.com" target="_blank">Visit Main Website</a></li>
            <li><a href="/rss/master-feed.xml" target="_blank">RSS Master Feed</a></li>
            <li><a href="https://vercel.com/mark9joes-projects/onyx-dynamic-site" target="_blank">Vercel Project</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}
