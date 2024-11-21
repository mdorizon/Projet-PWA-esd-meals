import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "@/style/style";
import Navbar from "@/components/navbar";
import { router, useLocalSearchParams } from "expo-router";
import useGetMealsByName from "@/hook/useGetMealsByName";

export default function Index() {
  const local = useLocalSearchParams()
  const meals = useGetMealsByName(local.query);

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