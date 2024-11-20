import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "@/style/style";
import Navbar from "@/components/navbar";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import MealListItem from "@/components/meals/MealListItem";

export default function Index() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {

      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const meals = await response.json()

      setMeals(meals.meals)
    })()
  }, [])

  const MealActions = () => {
    return (
      <View>
        <TouchableOpacity>
          <Text>supprimer</Text>
        </TouchableOpacity>
      </View>
    )
  }

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