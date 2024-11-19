import { Image, ScrollView, Text, View } from "react-native";
import styles from "../style";
import Navbar from "../components/navbar";
import { useLocalSearchParams } from "expo-router";

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

  const local = useLocalSearchParams()
  const meal = meals.find(meal => meal.id == parseInt(local.id))

  return (
    <>
      <ScrollView style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.h1}>{meal?.title}</Text>
          <Image source={{ uri: meal?.image }} style={styles.singleMealImage}/>
          <View style={styles.singleMealContent}>
            <Text style={styles.p}>Catégorie : { meal?.category }</Text>
            <Text style={styles.h3}>{ meal?.description }</Text>
          </View>
        </View>
      </ScrollView>
      {/* Navbar */}
      <Navbar />
    </>
  );
}