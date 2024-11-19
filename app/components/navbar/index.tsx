import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../style";
import { router } from "expo-router";

export default function Navbar() {

  const handleNavigateToHome = () => {
    router.push(`/`)
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