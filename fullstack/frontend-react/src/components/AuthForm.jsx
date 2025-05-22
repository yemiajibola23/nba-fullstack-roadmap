import { useState } from "react";

function AuthForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("signup");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = mode === "signup" ? "/api/signup" : "/api/login";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include"
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      console.log("Server response:", data);
      setMessage(`✅ ${mode} successful! Welcome ${data.username}.`);
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }
  };

  return (
    <div>
      <h2>{mode === "signup" ? "Sign up" : "Log In"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">
          {mode === "signup" ? "Sign Up" : "Log In"}
        </button>
      </form>

      <button onClick={() => setMode(mode === "signup" ? "login" : "signup")}>
        Switch to {mode === "signup" ? "Login" : "Signup"}
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AuthForm;
