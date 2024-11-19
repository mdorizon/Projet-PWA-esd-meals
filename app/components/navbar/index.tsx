import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../style";
import { router } from "expo-router";

export default function Navbar() {

  const handleNavigateToHome = () => {
    // retire tout les screens actif du router pour retourner à la page d'accueil en 'nettoyant' le router
    router.dismissAll()
  }
  
  const handleNavigateToMealsList = () => {
    router.push(`MealsList`)
  }

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navitem} onPress={handleNavigateToHome}>
        <Text style={styles.navitem}>Accueil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navitem} onPress={handleNavigateToMealsList}>
        <Text style={styles.navitem}>Liste Meals</Text>
      </TouchableOpacity>
    </View>
  );
}