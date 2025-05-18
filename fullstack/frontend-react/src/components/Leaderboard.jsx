import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";

function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");

  useEffect(() => {
    fetch("/api/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error("Error fetching players:", err));
  }, []);

  const handleDelete = (id) => {
    // Save current state in case we need to rollback
    const prevPlayers = [...players];

    // Optimistic UI update
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.id !== id)
    );

    // Fire backend DELETE request
    fetch(`/api/players/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          setPlayers(prevPlayers);
          console.error("Failed to delete player");
        }
      })
      .catch((err) => {
        console.error("Error deleting player", err);
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlayer = {
      name: name,
      points: parseInt(points),
    };

    try {
      const res = await fetch("/api/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
      });

      if (res.ok) {
        const created = await res.json();

        // Update list with new player
        setPlayers([...players, created]);

        // Display form
        setName("");
        setPoints("");
      } else {
        console.error("Failed to add player");
      }
    } catch (error) {
      console.error("Network or server error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Points"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>

      {players.map((player) => (
        <PlayerCard key={player.id} player={player} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Leaderboard;
