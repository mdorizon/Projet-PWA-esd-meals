import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "@/style/style";
import Navbar from "@/components/navbar";
import { router } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {

      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const meals = await response.json()

      setMeals(meals.meals)
    })()
  }, [])

  const handleNavigateToSingleMeal = (id: string) => {
    router.push(`meals/${id}`)
  }

  return (
    <>
      <View style={styles.page}>
        {/* sections */}
        <View style={styles.container}>
          {/* cards */}
          <View style={styles.mealsContainer}>
            <Text style={styles.h2}>Listes de nos recettes :</Text>
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
        </View>
      </View>
      {/* Navbar */}
      <Navbar />
    </>
  );
}