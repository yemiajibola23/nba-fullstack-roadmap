import "./App.css";
// import { useState, useEffect } from "react";
import AuthForm from "./components/AuthForm";
import Leaderboard from "./components/Leaderboard";
import Profile from "./components/Profile";

function App() {
  // const [currentUser, setCurrentUser] = useState(null);
  // useEffect(() => {
  //   fetch("/api/me", { credentials: "include" })
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Not logged in");
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setCurrentUser({ id: data.userId, username: data.username });
  //     })
  //     .catch(() => {
  //       setCurrentUser(null);
  //     });
  // }, []);

  // async function handleLogout() {
  //   try {
  //     await fetch("/api/logout", {
  //       method: "POST",
  //       credentials: "include",
  //     });
  //     setCurrentUser(null);
  //   } catch (err) {
  //     console.error("Logout failed", err);
  //   }
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      <Leaderboard />
      {/* {currentUser ? (
        <>
          <Leaderboard currentUser={currentUser} onLogout={handleLogout} />
          <Profile />
        </>
      ) : (
        <AuthForm onAuthSuccess={setCurrentUser} />
      )} */}
    </div>
  );
}

export default App;
