import { Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export default function MealsLayout() {

  // remet la barre de status dans la bonne couleur dès le lancement de l'app
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    // Stack représentant la list des écrans disponibles de l'app
    <Stack>
      <Stack.Screen name="index" options={{title: "Liste", headerShown: false}}/>
      <Stack.Screen name="random/index" options={{title: "Recette random"}}/>
      <Stack.Screen name="details/[id]" options={{title: "Recette"}}/>
      <Stack.Screen name="search/[query]" options={{title: "Recette"}}/>
    </Stack>
  )
}
