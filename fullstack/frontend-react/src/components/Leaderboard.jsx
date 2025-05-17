import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";

function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/api/players")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched players:", data);
        setPlayers(data);
      })
      .catch((err) => console.error("Error fetching players:", err));
  }, []);

  return (
    <div>
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}

export default Leaderboard;
