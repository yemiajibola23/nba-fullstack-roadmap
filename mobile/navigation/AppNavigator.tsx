import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import LeaderboardScreen from "../screens/LeaderboardScreen";
import { RootStackParamList } from "./types";
import TestScreen from "../screens/TestScreen";
import PlayerListScreen from "../screens/PlayerListScreen";
import AddPlayerScreen from "../screens/AddPlayerScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  // console.log("✅ LoginScreen:", LoginScreen);
  return (
    <Stack.Navigator
      initialRouteName="AddPlayer"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Stack.Screen name="AddPlayer" component={AddPlayerScreen} />
      <Stack.Screen
        name="PlayerList"
        component={PlayerListScreen}
        options={{ title: "Leaderboard" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
