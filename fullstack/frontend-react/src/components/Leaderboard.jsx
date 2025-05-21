import { useState } from "react";
import { usePlayerContext } from "../contexts/PlayerContext";
import PlayerCard from "./PlayerCard";
import PlayerForm from "./PlayerForm";
import ChartPanel from "./ChartPanel";

function Leaderboard() {
  const { players, feedback, addPlayer, deletePlayer, loading, error } =
    usePlayerContext();
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

  const handleAdd = (newPlayer) => {
    addPlayer(newPlayer);
  };

  return (
    <div>
      <PlayerForm onAdd={handleAdd} />

      {feedback && <p>{feedback}</p>}

      {loading && <p>Loading players...</p>}
      {error && <p className="error">{error}</p>}
      <ChartPanel />
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
