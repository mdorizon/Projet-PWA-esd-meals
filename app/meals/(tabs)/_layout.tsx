import { Tabs } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MealsLayout() {

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <Tabs>
      <Tabs.Screen 
        name="random"
        options={{ 
          title: "Random Meal",
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'dice' : 'dice-outline'} size={24} color={"#ff5478"}/>,
          tabBarActiveTintColor: '#ff5478',
        }} 
      />
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "List Meal",
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'list' : 'list-outline'} size={24} color={"#ff5478"}/>,
          tabBarActiveTintColor: '#ff5478',
          }} />
    </Tabs>
  )
}
