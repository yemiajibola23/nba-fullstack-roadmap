import { useState } from "react";
import PlayerInsights from "./PlayerInsights";

function PlayerCard({ player, onDelete }) {
  const [showInsights, setShowInsights] = useState(false);
  return (
    <div className="player-card">
      <h3>
        {player.name}{" "}
        <span style={{ fontWeight: "normal" }}>
          ({player.team_name || "No Team"})
        </span>
      </h3>
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
        <PlayerInsights
          assists={8}
          rebounds={9}
          team={player.team_name || "No Team"}
        />
      )}
    </div>
  );
}

export default PlayerCard;
