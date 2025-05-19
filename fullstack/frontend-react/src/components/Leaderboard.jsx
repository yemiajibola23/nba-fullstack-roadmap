import { useState } from "react";
import { usePlayerContext } from "../contexts/PlayerContext";
import PlayerCard from "./PlayerCard";

function Leaderboard() {
  const { players, feedback, addPlayer, deletePlayer } = usePlayerContext();
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");

  const handleDelete = (id) => {
    deletePlayer(id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlayer = {
      name: name,
      points: parseInt(points),
    };

    addPlayer(newPlayer);
    setName("");
    setPoints("");
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

      {feedback && <p>{feedback}</p>}
      
      <div>
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
