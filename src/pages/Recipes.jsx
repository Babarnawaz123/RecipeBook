import { useEffect, useState } from "react";
import api from "../utils/api";
import RecipeCard from "../components/RecipeCard";
import React from "react";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("/search.php?f=c") // fetch meals starting with "c"
      .then((res) => setRecipes(res.data.meals || []))
      .catch((err) => console.error(err));
  }, []);

  const filtered = recipes.filter((meal) =>
    meal.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Recipes</h2>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 rounded-lg border px-3 py-2"
      />
      {filtered.length === 0 ? (
        <p className="text-gray-600">No recipes found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 ">
          {filtered.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </section>
  );
}
