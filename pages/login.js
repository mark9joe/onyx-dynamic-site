// pages/login.js
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "respire123") {
      localStorage.setItem("auth", "true");
      router.push("/dashboard");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Dashboard Login</h1>
      <input
        type="password"
        className="p-2 border rounded mb-4"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Login
      </button>
    </div>
  );
}
