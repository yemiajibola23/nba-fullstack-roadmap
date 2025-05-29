// mobile/screens/LeaderboardScreen.tsx

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LeaderboardScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>🏀 Welcome to the Leaderboard!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 22, fontWeight: "bold" },
});

export default LeaderboardScreen;
