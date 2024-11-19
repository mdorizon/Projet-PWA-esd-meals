import { Image, ScrollView, Text, View } from "react-native";
import styles from "../style";
import Navbar from "../components/navbar";
import { useLocalSearchParams } from "expo-router";
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

  const local = useLocalSearchParams()
  const meal = meals.find(meal => meal.idMeal == local.id)

  return (
    <>
      <ScrollView style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.h1}>{meal?.strMeal}</Text>
          <Image source={{ uri: meal?.strMealThumb }} style={styles.singleMealImage}/>
          <View style={styles.singleMealContent}>
            <Text style={styles.p}>Catégorie : { meal?.strCategory }</Text>
            <Text style={styles.h3}>{ meal?.strInstructions }</Text>
          </View>
        </View>
      </ScrollView>
      {/* Navbar */}
      <Navbar />
    </>
  );
}