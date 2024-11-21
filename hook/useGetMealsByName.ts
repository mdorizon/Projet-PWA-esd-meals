import { useEffect, useState } from "react";

const useGetMealsByName = (query: String) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {

      // Requête api cherchant le mot reçu depuis le formulaire
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const meals = await response.json()

      // une fois les résultats de l'api reçu on l'ajoute au state meals
      setMeals(meals.meals)
    })()
  }, [])

  return meals
}

export default useGetMealsByName