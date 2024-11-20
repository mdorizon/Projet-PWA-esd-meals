import styles from "@/style/style"
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native"

export default function CreateMealScreen() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleChangeName = (text: string) => {
    setName(text);
  };

  const handleChangeIngredients = (text: string) => {
    setIngredients(text);
  };

  const handleCreate = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/create.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        ingredients,
      }),
    });

    console.log(response);
  };

  return (
    <View>
      <Text>Créer une recette</Text>

      <TextInput style={styles.input} placeholder="nom de la recette" onChangeText={handleChangeName}></TextInput>

      <TextInput style={styles.input} placeholder="Ingrédients" onChangeText={handleChangeIngredients}></TextInput>

      <TouchableOpacity onPress={handleCreate}>
        <Text>Créer</Text>
      </TouchableOpacity>
    </View>
  )
}