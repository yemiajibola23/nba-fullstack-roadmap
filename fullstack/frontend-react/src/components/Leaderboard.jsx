import { useState } from "react";
import { usePlayerContext } from "../contexts/PlayerContext";
import PlayerForm from "./PlayerForm";
import ChartPanel from "./ChartPanel";
import LeaderboardList from "./LeaderboardList";

function Leaderboard(/*{ currentUser, onLogout }*/) {
  const { players, feedback, addPlayer, deletePlayer, loading, error } =
    usePlayerContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const safePlayers = Array.isArray(players) ? players : [];
  console.log("Is players an array?: ", Array.isArray(players));

  // const uniquePlayers = players
  //   // .filter((p) => p.user_id === currentUser.id)
  //   .filter(
  //     (player, index, self) =>
  //       index ===
  //       self.findIndex(
  //         (p) => p.name.toLowerCase() === player.name.toLowerCase()
  //       )
  //   );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentPlayers = safePlayers.slice(indexOfFirstItem, indexOfLastItem);
  console.log("Current players:", currentPlayers);
  const totalPages = Math.ceil(safePlayers.length / itemsPerPage);

  // console.log("Players list", players);
  const handleDelete = (id) => {
    deletePlayer(id);
  };

  const handleAdd = (newPlayer) => {
    addPlayer(newPlayer);
  };

  try {
    return (
      <>
        <div className="flex justify-between-items-center px-4 py-2 bg-gray-100">
          {/* <h2 className="text-lg font-bold">
          {Welcome {currentUser?.username || "Guest"}!}
        </h2> */}
          <button
            // onClick={onLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        <div>
          <PlayerForm onAdd={handleAdd} />

          {feedback && <p>{feedback}</p>}

          {loading && <p>Loading players...</p>}
          {error && <p className="error">{error}</p>}

          <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
            <ChartPanel players={currentPlayers} />
            <LeaderboardList
              players={currentPlayers}
              loading={loading}
              error={error}
              handleDelete={handleDelete}
            />
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
      </>
    );
  } catch (err) {
    console.error("Render error in Leaderboard:", err);
    return <p>⚠️ Something went wrong in Leaderboard rendering.</p>;
  }
}

export default Leaderboard;
