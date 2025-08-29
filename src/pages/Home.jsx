import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import RecipeCard from "../components/RecipeCard";
import React from "react";

export default function Home() {
  const [highlighted, setHighlighted] = useState([]);

  useEffect(() => {
    api
      .get("/search.php?f=a")
      .then((res) => setHighlighted(res.data.meals?.slice(0, 3) || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="text-center bg-gradient-to-b from-emerald-50 via-white to-emerald-50 py-16 px-6">
      <h1 className="text-5xl font-extrabold mb-6 text-emerald-800 drop-shadow-sm">
        Find Your Next Favorite Recipe
      </h1>

      <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
        Browse quick meals, classic dishes, and new inspirations. Save favorites
        and build your personal cookbook.
      </p>

      <div className="flex items-center justify-center gap-5 mb-14">
        <Link
          to="/recipes"
          className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 hover:scale-105 transition transform"
        >
          Explore Recipes
        </Link>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-emerald-900">
        Highlighted Recipes
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {highlighted.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </section>
  );
}
