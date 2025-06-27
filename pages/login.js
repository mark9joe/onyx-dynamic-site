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
      alert("Wrong password!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h2>Login to Dashboard</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", margin: "10px", width: "250px" }}
      />
      <br />
      <button onClick={handleLogin} style={{ padding: "10px 20px" }}>
        Login
      </button>
    </div>
  );
}
