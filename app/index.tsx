import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "@/style/style";
import Navbar from "@/components/navbar";
import { router } from "expo-router";
import { useState } from "react";
import useGetMeals from "@/hook/useGetMeals";

export default function Index() {
  const meals = useGetMeals();
  // permet de récupérer la valeur de l'imput de recherche
  const [text, onChangeText] = useState('');

  const handleNavigateToSingleMeal = (id: Number) => {
    // le router push ajoute la page donnée en haut de la liste des écrans "actifs" et donc l'affiche
    router.push(`meals/details/${id}`)
  }

  const handleSearch = () => {
    // est éxecuté lorsque le bouton du formulaire est tapé, redirige vers les résultats de recherche
    router.push(`meals/search/${text}`)
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
          <View>
            <TextInput
              onChangeText={onChangeText}
              value={text}
              style={styles.input}
              placeholderTextColor="#2B2C28" 
              placeholder="Nom de la recette"
            />
            <TouchableOpacity onPress={handleSearch}>
              <Text style={styles.h3}>Chercher</Text>
            </TouchableOpacity>
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