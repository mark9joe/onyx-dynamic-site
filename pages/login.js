// pages/login.js
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@respirework.com" && pass === "admin123") {
      window.location.href = "/dashboard";
    } else {
      setMsg("❌ Invalid login credentials");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", maxWidth: 400, margin: "auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />
        <button type="submit" style={{ width: "100%", padding: 10 }}>Login</button>
        <p style={{ color: "red", marginTop: 10 }}>{msg}</p>
      </form>
    </div>
  );
}
