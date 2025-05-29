import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

type Player = {
  id: number;
  name: string;
  points: number;
};

const PlayerListScreen: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("🔄 Fetching players...");

    const fetchPlayers = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/players");

        if (!res.ok) throw new Error("Failed to fetch players");

        const data: Player[] = await res.json();
        setPlayers(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  console.log("Loading:", loading);
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={players}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.points}>Points: {item.points}</Text>
        </View>
      )}
      contentContainerStyle={styles.list}
    />
  );
};

export default PlayerListScreen;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  list: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  points: {
    fontSize: 16,
    color: "#666",
  },
});
