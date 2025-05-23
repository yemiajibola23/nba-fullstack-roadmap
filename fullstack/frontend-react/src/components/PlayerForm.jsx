import { useEffect } from "react";
import { useState } from "react";

function PlayerForm({ onAdd }) {
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");
  const [teams, setTeams] = useState([]);
  const [teamId, setTeamId] = useState("");

  useEffect(() => {
    fetch("/api/teams")
      .then((res) => res.json())
      .then(setTeams)
      .catch((err) => {
        console.error("Error loading teams", err);
        setTeams([]);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !points) return;

    const newPlayer = {
      name: name,
      points: parseInt(points, 10),
      team_id: teamId,
    };

    onAdd(newPlayer);
    setName("");
    setPoints("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Points"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
      />

      <select
        value={teamId}
        onChange={(e) => setTeamId(parseInt(e.target.value))}
        required
      >
        <option value="">Select Team</option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Player</button>
    </form>
  );
}

export default PlayerForm;
