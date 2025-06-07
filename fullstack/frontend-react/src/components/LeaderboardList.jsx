import PlayerCard from "./PlayerCard";

function LeadeboardList({ players, loading, error, handleDelete }) {
  console.log("LeaderboardList players:", players);
  return (
    <div>
      {!loading &&
        !error &&
        players.map((player) => (
          <PlayerCard key={player.id} player={player} onDelete={handleDelete} />
        ))}
    </div>
  );
}
export default LeadeboardList;
