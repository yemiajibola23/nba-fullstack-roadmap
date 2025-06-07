import { useState } from "react";
import PlayerInsights from "./PlayerInsights";

function PlayerCard({ player, onDelete }) {
  const [showInsights, setShowInsights] = useState(false);

  function format(value) {
    return typeof value === "number" ? value.toFixed(1) : "N/A";
  }

  return (
    <div className="player-card">
      <h3>
        {player.first_name} {player.last_name}{" "}
        <span style={{ fontWeight: "normal" }}>
          ({player.team_name || "No Team"})
        </span>
      </h3>
      <p>
        {format(player.ppg)} ppg | {format(player.apg)} apg |{" "}
        {format(player.rpg)} rpg | {format(player.fg_pct)}% FG |{" "}
        {format(player.fg3_pct)}% 3P
      </p>
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
