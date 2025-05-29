import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMsg("Username and password required.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }
      console.log("Login response:", data);

      if (data.userId) {
        await AsyncStorage.setItem("userId", String(data.userId));
        console.log("Stored userId:", data.userId);
      } else {
        console.warn("No userId returned from backend.");
      }
      navigation.navigate("Leaderboard");
    } catch (err: any) {
      console.error("Login error:", err);
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏀 HoopTalk Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
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
    backgroundColor: "#1e90ff",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  error: {
    color: "red",
    marginBottom: 12,
    textAlign: "center",
  },
});

export default LoginScreen;
