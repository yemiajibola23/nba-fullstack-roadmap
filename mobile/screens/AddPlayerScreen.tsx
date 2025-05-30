import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
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

        <TouchableOpacity
          style={[styles.button, !(name && points) && styles.buttonDisabled]}
          disabled={!name || !points}
          onPress={addNewPlayer}
        >
          <Text style={styles.buttonText}>Add Player</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#0066cc",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
