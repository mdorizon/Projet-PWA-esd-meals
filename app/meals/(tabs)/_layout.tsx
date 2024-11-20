import { Tabs } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export default function MealsLayout() {

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <Tabs>
      <Tabs.Screen name="random" options={{ title: "Random Meal" }} />
      <Tabs.Screen name="index" options={{ title: "List Meal" }} />
    </Tabs>
  )
}
