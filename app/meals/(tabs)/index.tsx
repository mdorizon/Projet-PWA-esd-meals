import { FlatList, Text, View } from "react-native";
import styles from "@/style/style";
import Navbar from "@/components/navbar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MealListItem from "@/components/meals/MealListItem";
import useGetMeals from "@/hook/useGetMeals";

export default function Index() {
  const meals = useGetMeals();

  return (
    <>
      <View style={styles.page}>
        {/* sections */}
        <View style={styles.container}>
          {/* cards */}
          <GestureHandlerRootView style={styles.mealsContainer}>
            <Text style={styles.h2}>Listes de nos recettes :</Text>
            <FlatList 
              data={meals}
              style={styles.mealsList}
              contentContainerStyle={styles.mealsListContainer}
              renderItem={({item}) => <MealListItem meal={item}/>}
              keyExtractor={item => item.idMeal}
            />
          </GestureHandlerRootView>
        </View>
      </View>
      {/* Navbar */}
      <Navbar />
    </>
  );
}