import { createContext, useContext, useState, useEffect } from "react";

const PlayerContext = createContext()
export function PlayerProvider({ children }) {
    const [players, setPlayers] = useState([])
    const [feedback, setFeedback] = useState('')

    useEffect(() => {
        fetch('/api/players')
        .then((res) => res.json())
        .then((data) => setPlayers(data))
        .catch((err) => {
            console.error('Error fetching players', err)
            setFeedback('❌ Failed to fetch players.')
        })
    }, [])

    const addPlayer = (player) => {
        fetch('/api/players', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(player),
        })
        .then((res) => res.json())
        .then((newPlayer) => {
            setPlayers((prev) => [...prev, newPlayer])
            setFeedback("✅ Player added!")
        })
        .catch(() => setFeedback('❌ Failed to add player.'))
    }

    const deletePlayer = (id) => {
        fetch(`/api/players/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            setPlayers((prev) => prev.filter((p) => p.id !== id))
            setFeedback("🗑️ Player deleted.")
        })
        .catch(() => setFeedback('❌ Failed to delete player.'))
    }

    return (
        <PlayerContext.Provider value={{players, addPlayer, deletePlayer, feedback}}>
            {children}
        </PlayerContext.Provider>
    )
}

export function usePlayerContext() {
    return useContext(PlayerContext)
}