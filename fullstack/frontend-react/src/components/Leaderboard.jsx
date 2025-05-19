import { useState } from "react";
import { usePlayerContext } from "../contexts/PlayerContext";
import PlayerCard from "./PlayerCard";

function Leaderboard() {
  const { players, feedback, addPlayer, deletePlayer, loading, error } =
    usePlayerContext();
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const uniquePlayers = players.filter(
    (player, index, self) =>
      index ===
      self.findIndex((p) => p.name.toLowerCase() === player.name.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPlayers = uniquePlayers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(uniquePlayers.length / itemsPerPage);

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

      {loading && <p>Loading players...</p>}
      {error && <p className="error">{error}</p>}

      <div>
        {!loading &&
          !error &&
          currentPlayers.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onDelete={handleDelete}
            />
          ))}
      </div>
      <div className="pagination-controls">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={currentPage === pageNum ? "active" : ""}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={indexOfLastItem >= players.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;
