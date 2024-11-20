import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "@/style/style";
import Navbar from "@/components/navbar";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const [meals, setMeals] = useState([]);
  const local = useLocalSearchParams()

  useEffect(() => {
    (async () => {

      // Requête api cherchant le mot reçu depuis le formulaire
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${local.query}`);
      const meals = await response.json()

      // une fois les résultats de l'api reçu on l'ajoute au state meals
      setMeals(meals.meals)
    })()
  }, [])

  const handleNavigateToSingleMeal = (id: string) => {
    router.push(`meals/${id}`)
  }

  return (
    <>
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.h1}>Recherche pour : {local.query}</Text>
        </View>
        <FlatList 
          data={meals}
          style={styles.mealsList}
          contentContainerStyle={styles.mealsListContainer}
          renderItem={({item}) => 
            <TouchableOpacity style={styles.mealCard} onPress={() => handleNavigateToSingleMeal(item.idMeal)}>
              <Image source={{ uri: item.strMealThumb }} style={styles.mealImage} />
              <Text style={styles.mealText}>{item.strMeal}</Text>
            </TouchableOpacity>
          }
          keyExtractor={item => item.idMeal}
        />
      </View>
      {/* Navbar */}
      <Navbar />
    </>
  );
}