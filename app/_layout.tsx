import { Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "Accueil", headerShown: false}}/>
      <Stack.Screen name="MealsList/index" options={{title: "Liste", headerShown: false}}/>
      <Stack.Screen name="MealsList/[id]" options={{title: "Recette"}}/>
    </Stack>
  )
}
