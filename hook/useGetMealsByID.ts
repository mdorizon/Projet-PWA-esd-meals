import { useEffect, useState } from "react";

const useGetMealsByID = (id: Number) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {

      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const meals = await response.json()

      setMeals(meals.meals[0])
    })()
  }, [])

  return meals
}

export default useGetMealsByID