import { useState, useEffect } from "react";
import React from "react";

export default function RecipeCard({ meal }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFav(favorites.includes(meal.idMeal));
  }, [meal.idMeal]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites.includes(meal.idMeal)) {
      favorites = favorites.filter((id) => id !== meal.idMeal);
      setFav(false);
    } else {
      favorites.push(meal.idMeal);
      setFav(true);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 truncate">{meal.strMeal}</h3>
        <p className="text-sm text-gray-600 mb-3">{meal.strCategory}</p>
        <button
          onClick={toggleFavorite}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
            fav
              ? "bg-red-500 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          {fav ? "★ Favorited" : "☆ Add to Favorites"}
        </button>
      </div>
    </div>
  );
}
