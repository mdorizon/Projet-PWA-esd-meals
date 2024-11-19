import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import Navbar from "./components/navbar";
import { router } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  // on déclare le state permettant de retenir nos recettes
  const [meals, setMeals] = useState([]);

  // on utilise un useEffect pour que la fonction se lance au chargement de l'app
  useEffect(() => {
    (async () => {

      // on fetch la liste des recettes à l'API
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      // une fois la réponse reçue on la stocke dans une constante
      const meals = await response.json()
      // on utilise le setter du state 'meals' pour y ajouter toutes nos recettes
      setMeals(meals.meals)
    })()
  }, [])

  const handleNavigateToSingleMeal = (id: Number) => {
    // le router push ajoute la page donnée en haut de la liste des écrans "actifs" et donc l'affiche
    router.push(`MealsList/${id}`)
  }

  return (
    <>
      <ScrollView style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('../assets/images/esd-meals.png')} style={styles.logo}/>
          <Text style={styles.h1}>Toque App</Text>
          <Text style={styles.p}>Mettez la toque à vos plats !</Text>
        </View>
        {/* sections */}
        <View style={styles.container}>
          {/* cards */}
          <Text style={styles.h3}>Des recettes variées, des guides simples, et des idées adaptées à vos goûts. Cuisinez comme un chef en quelques clics !</Text>
          <View style={styles.mealsContainer}>
            <Text style={styles.h2}>Les trois dernières recettes :</Text>
            {/* le slice(-3).map crée un nouveau tableau avec les trois derniers éléments du tableau donné */}
            {meals.slice(-3).map((meal, index) => (
              <TouchableOpacity key={index} style={styles.mealCard} onPress={() => handleNavigateToSingleMeal(meal.idMeal)}>
                <Image source={{ uri: meal.strMealThumb }} style={styles.mealImage} />
                <Text style={styles.mealText}>{meal.strMeal}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* footer */}
          <View style={styles.footer}>
            <Text style={styles.h3}>copyright Toque App 2023-2024</Text>
          </View>
        </View>
      </ScrollView>
      {/* Navbar */}
      <Navbar />
    </>
  );
}