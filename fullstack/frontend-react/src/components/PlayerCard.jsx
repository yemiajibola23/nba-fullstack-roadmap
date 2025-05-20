import { useState } from "react";

function PlayerCard({ player, onDelete }) {
  const [showInsights, setShowInsights] = useState(false);

  return (
    <div className="player-card">
      <h3>{player.name}</h3>
      <p>Points: {player.points}</p>
      <button
        className="delete-button"
        onClick={() => onDelete(player.id)}
        aria-label={`Delete ${player.name}`}
      >
        Delete
      </button>

      <button onClick={() => setShowInsights(!showInsights)}>
        {showInsights ? "Hide Insights" : "Show Insights"}
      </button>
      {showInsights && (
        <div className="player-insights">
          <p>Assists: 8</p>
          <p>Rebounds: 9</p>
          <p>Team: Lakers</p>
        </div>
      )}
    </div>
  );
}

export default PlayerCard;
