// mobile/screens/LeaderboardScreen.tsx

import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { usePlayerContext } from "../contexts/PlayerContext";

export default function LeaderboardScreen() {
  const { players, fetchPlayers } = usePlayerContext();

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏀 Leaderboard!</Text>

      <FlatList
        data={players}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.points}>{item.points} pts</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50 },
  title: { fontSize: 22, fontWeight: "bold" },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 8,
  },
  name: { fontSize: 18 },
  points: { fontSize: 16, fontWeight: "600" },
});
