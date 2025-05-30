import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useState } from "react";

export default function AddPlayerScreen() {
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");

  const testConnection = async () => {
    try {
      const res = await fetch("http://192.168.1.13:3000/api/players");
      const data = await res.json();
      console.log("✅ Connection OK:", data);
      Alert.alert("Connected to backend!");
    } catch (err) {
      console.error("❌ Connection failed:", err);
      Alert.alert("Network Error");
    }
  };

  const addNewPlayer = async () => {
    try {
      console.log("👉 Sending POST request...", { name, points });

      const res = await fetch("http://192.168.1.13:3000/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, points: Number(points) }),
      });

      console.log("🔁 Response status:", res.status);

      let result;

      try {
        result = await res.json();
      } catch {
        result = { error: "Invalid server response (not JSON)" };
      }

      console.log("📦 Response body:", result);

      if (!res.ok) {
        Alert.alert("Error:", result.error || "Something went wrong.");
        return;
      }

      Alert.alert("Success", `Successfully added ${name}`);
      setName("");
      setPoints("");
    } catch (err) {
      console.error("❌ Error in submission:", err);
      Alert.alert("An error occurred");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Player</Text>
      <TextInput
        value={name}
        placeholder={"Name"}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        value={points}
        placeholder={"Points"}
        keyboardType="numeric"
        onChangeText={setPoints}
        style={styles.input}
      />

      <Button
        title="Add Player"
        disabled={!name || !points}
        onPress={addNewPlayer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
});
