import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useState } from "react";

export default function AddPlayerScreen() {
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");

  const addNewPlayer = async () => {
    Alert.alert("Submitting", `${name} - ${points} pts`);
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
