import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";

export default function HomeScreen() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/players")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched players:", data);
        setPlayers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching players:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size={"large"} color={"#555"} />
        <Text>Loading players...</Text>
      </View>
    );
  }

  console.log("Players in render:", players );
  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.points}>Points: {item.points}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    backgroundColor: "#f4f4f4",
    padding: 16,
    marginBottom: 12,
    borderRadius: 16,
  },
  name: { fontSize: 18, fontWeight: "bold" },
  points: { fontSize: 16, color: "#333" },
});
