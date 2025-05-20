function PlayerInsights({ assists, rebounds, team }) {
  return (
    <div className="player-insights">
      <p>Assists: {assists}</p>
      <p>Rebounds: {rebounds}</p>
      <p>Team: {team}</p>
    </div>
  );
}

export default PlayerInsights