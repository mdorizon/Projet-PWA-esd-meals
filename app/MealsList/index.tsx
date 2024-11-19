import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../style";
import Navbar from "../components/navbar";
import { router } from "expo-router";

export default function Index() {

  const meals = [
    {
      id: 1,
      title: "Spaghetti bolognaise",
      description: "Des pâtes avec de la sauce tomate et de la viande hachée",
      image: "https://assets.afcdn.com/recipe/20160419/14652_w1024h1024c1cx2420cy1872.jpg",
      category: "pasta",
    },
    {
      id: 2,
      title: "Salade César",
      description: "Une salade avec de la salade verte, du poulet, des croûtons et de la sauce César",
      image: "https://images.ricardocuisine.com/services/recipes/8440.jpg",
      category: "salad",
    },
    {
      id: 3,
      title: "Tarte aux pommes",
      description: "Une tarte sucrée avec des pommes",
      image: "https://static.750g.com/images/1200-675/a96d46e59b4f0ab8169c7cb0cb932a84/la-cuisson.jpg",
      category: "dessert",
    },
    {
      id: 4,
      title: "Risotto aux champignons",
      description: "Un risotto crémeux avec des champignons",
      image: "https://img.cuisineaz.com/1024x768/2017/09/04/i132139-risotto-aux-champignons-au-companion.webp",
      category: "pasta",
    },
    {
      id: 5,
      title: "Salade niçoise",
      description: "Une salade avec des tomates, des oeufs, des olives, du thon et des haricots verts",
      image: "https://img.cuisineaz.com/1024x768/2013/12/20/i34581-salade-nicoise-rapide.jpeg",
      category: "salad",
    },
    {
      id: 6,
      title: "Tiramisu",
      description: "Un dessert italien avec du café, des biscuits et du mascarpone",
      image: "https://www.galbani.fr/wp-content/uploads/2018/10/mon-tiramisu.jpg",
      category: "dessert",
    },
  ];

  const handleNavigateToSingleMeal = (id: Number) => {
    router.push(`MealsList/${id}`)
  }

  return (
    <>
      <ScrollView style={styles.page}>
        {/* sections */}
        <View style={styles.container}>
          {/* cards */}
          <View style={styles.mealsContainer}>
            <Text style={styles.h2}>Listes de nos recettes :</Text>
            {meals.map((meal, index) => (
              <TouchableOpacity key={index} style={styles.mealCard} onPress={() => handleNavigateToSingleMeal(meal.id)}>
                <Image source={{ uri: meal.image }} style={styles.mealImage} />
                <Text style={styles.mealText}>{meal.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      {/* Navbar */}
      <Navbar />
    </>
  );
}