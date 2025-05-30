import { createContext, useContext, useState } from "react";

export type Player = {
  id: number;
  name: string;
  points: number;
  userId?: number;
  teamId?: number;
};

type PlayerContextType = {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  fetchPlayers: () => Promise<void>;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [players, setPlayers] = useState<Player[]>([]);

  const fetchPlayers = async () => {
    try {
      const res = await fetch("http://192.168.1.13:3000/api/players");

      if (!res.ok) throw new Error("Failed to fetch players");

      const data: Player[] = await res.json();
      setPlayers(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Unknown error occurred.");
      }
    }
  };

  return (
    <PlayerContext.Provider value={{ players, setPlayers, fetchPlayers }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("usePlayContext must be within a PlayerProvider");
  }

  return context;
};
