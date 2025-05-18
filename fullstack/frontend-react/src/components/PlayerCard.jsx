function PlayerCard({ player, onDelete }) {
  return (
    <div className="player-card">
      <h3>{player.name}</h3>
      <p>Points: {player.points}</p>
      <button onClick={() => onDelete(player.id)}>Delete</button>
    </div>
  );
}

export default PlayerCard;
