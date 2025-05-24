import { useState, useEffect } from "react";

function Profile() {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [newAvatar, setNewAvatar] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/profile", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUsername(data.username);
        setAvatar(data.avatar);
      })
      .catch((err) => console.error("Failed to load profile:", err));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);

    if (newAvatar) {
      formData.append("avatar", newAvatar);
    }

    fetch("http://localhost:3000/api/profile", {
      method: "POST",
      credentials: "include",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage("✅ Profile updated!");
        setAvatar(data.avatar);
      })
      .catch((err) => {
        setMessage("❌ Update failed");
        console.error(err);
      });
  }

  return (
    <div>
      <h2>Profile Settings</h2>
      {avatar && (
        <img
          src={`http://localhost:3000/uploads/${avatar}`}
          alt="Avatar"
          style={{ width: "100px", borderRadius: "50%" }}
        />
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setNewAvatar(e.target.files[0])}
        />
        <button type="submit">Update Profile</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Profile;
