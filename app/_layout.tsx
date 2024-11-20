import { Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {

  // remet la barre de status dans la bonne couleur dès le lancement de l'app
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    // Stack représentant la list des écrans disponibles de l'app
    <Stack>
      {/* Déclaration d'un écran et de ses paramètres */}
      <Stack.Screen 
        // On défini le nom de l'écran pour pouvoir le push par la suite
        name="index" 
        // On défini ses options comme le titre, si le header est affiché ou non etc...
        options={{title: "Accueil", headerShown: false}}
        />
      <Stack.Screen name='meals' options={{headerShown: false}} />
    </Stack>
  )
}
