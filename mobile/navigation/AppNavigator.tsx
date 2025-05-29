import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import LeaderboardScreen from "../screens/LeaderboardScreen";
import { RootStackParamList } from "./types";
import TestScreen from "../screens/TestScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  console.log("✅ LoginScreen:", LoginScreen);
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
