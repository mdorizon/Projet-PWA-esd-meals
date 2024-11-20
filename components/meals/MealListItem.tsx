import styles from "@/style/style";
import { router } from "expo-router";
import { Button, Image, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

const handleNavigateToSingleMeal = (id: string) => {
  router.push(`meals/details/${id}`)
}


const MealActions = ({ meal }) => {
  return (
    <View>
      <Button title="Supprimer" />
      <Button title="Afficher" onPress={() => handleNavigateToSingleMeal(meal.idMeal)}/>
    </View>
  );
};

const MealListItem = ({ meal }) => {
  const renderRightActions = () => <MealActions meal={meal} />;

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.mealCard}>
        <Image source={{ uri: meal.strMealThumb }} style={styles.mealImage} />
        <Text style={styles.mealText}>{meal.strMeal}</Text>
      </View>
    </Swipeable>
  );
};

export default MealListItem;