function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <h3>{player.name}</h3>
      <p>Points: {player.points}</p>
    </div>
  );
}

export default PlayerCard;
