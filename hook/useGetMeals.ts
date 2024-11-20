import { useEffect, useState } from "react";

const useGetMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {

      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const meals = await response.json()

      setMeals(meals.meals)
    })()
  }, [])

  return meals
}

export default useGetMeals