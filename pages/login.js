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
      alert("Incorrect password!");
    }
  };

  return (
    <div style={{ marginTop: "20vh", textAlign: "center" }}>
      <h1>Login</h1>
      <input
        type="password"
        placeholder="Enter dashboard password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", width: "250px" }}
      />
      <br />
      <button
        onClick={handleLogin}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
      >
        Login
      </button>
    </div>
  );
}
