import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    } else {
      router.push("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  if (!isAuthenticated) {
    return null; // Prevent flash of protected content before redirect
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Welcome to Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Replace the section below with your dashboard features */}
        <div className="grid grid-cols-1 gap-6">
          <div className="p-4 bg-gray-50 rounded shadow">
            <h2 className="text-lg font-semibold text-gray-600">Stats</h2>
            <p>Live content, injection logs, backlinks, RSS feeds etc.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded shadow">
            <h2 className="text-lg font-semibold text-gray-600">Page Indexation</h2>
            <p>Index status, pings sent to Google/Bing, and traffic reports.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded shadow">
            <h2 className="text-lg font-semibold text-gray-600">Top Keywords</h2>
            <p>Tracking top-performing keywords for SEO boosts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
