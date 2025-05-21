import { useState } from "react";

function PlayerForm({ onAdd }) {
    const [name, setName] = useState("")
    const [points, setPoints] = useState("")

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !points) return

    const newPlayer = {
      name: name,
      points: parseInt(points, 10),
    }

    onAdd(newPlayer);
    setName("");
    setPoints("");
  }

  return (<form onSubmit={handleSubmit}>
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
        <button type="submit">Add Player</button>
      </form>)
}

export default PlayerForm
