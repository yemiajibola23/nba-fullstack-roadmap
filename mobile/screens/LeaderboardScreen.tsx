// mobile/screens/LeaderboardScreen.tsx

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { usePlayerContext } from "../contexts/PlayerContext";

export default function LeaderboardScreen() {
  const { players, fetchPlayers } = usePlayerContext();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchPlayers();
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏀 Leaderboard!</Text>
      { loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
        data={players}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.points}>{item.points} pts</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No players yet. Add one to get started!</Text>
        }
      />
      )}
      
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
  emptyText: {
  textAlign: "center",
  marginTop: 20,
  color: "#999",
  fontSize: 16,
},
});
