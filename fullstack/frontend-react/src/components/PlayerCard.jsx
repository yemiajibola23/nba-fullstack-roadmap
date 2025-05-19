function PlayerCard({ player, onDelete }) {
  return (
    <div className="player-card">
      <h3>{player.name}</h3>
      <p>Points: {player.points}</p>
      <button className="delete-button" onClick={() => onDelete(player.id)} aria-label={`Delete ${player.name}`}>Delete</button>
    </div>
  );
}

export default PlayerCard;
