import { Image, ScrollView, Text, View } from "react-native";
import styles from "@/style/style";
import Navbar from "@/components/navbar";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const [meals, setMeals] = useState([]);
  const local = useLocalSearchParams()

  useEffect(() => {
    (async () => {

      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${local.id}`);
      const meals = await response.json()

      setMeals(meals.meals[0])
    })()
  }, [])

  return (
    <>
      <ScrollView style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.h1}>{meals?.strMeal}</Text>
          <Image source={{ uri: meals?.strMealThumb }} style={styles.singleMealImage}/>
          <View style={styles.singleMealContent}>
            <Text style={styles.p}>Catégorie : { meals?.strCategory }</Text>
            <Text style={styles.h3}>{ meals?.strInstructions }</Text>
          </View>
        </View>
      </ScrollView>
      {/* Navbar */}
      <Navbar />
    </>
  );
}