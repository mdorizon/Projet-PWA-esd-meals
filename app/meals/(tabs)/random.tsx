import { Image, ScrollView, Text, View } from "react-native";
import styles from "@/style/style";
import Navbar from "@/components/navbar";
import useGetRandomMeal from "@/hook/useGetRandomMeal";

export default function Index() {
  const meals = useGetRandomMeal()

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