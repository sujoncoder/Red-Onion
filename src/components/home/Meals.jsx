"use client";

import meals from "@/utils/data";
import { useState } from "react";
import Meal from "./Meal";

const Meals = () => {
  const [foods, setFoods] = useState("breakfast");

  return (
    <div className="my-20">
      <div className="flex justify-center items-center space-x-6 text-lg font-semibold text-slate-600">
        <button
          name="breakfast"
          onClick={(e) => setFoods(e.target.name)}
          className={`${
            foods === "breakfast"
              ? "text-pink-500 border-b-2 border-pink-500"
              : ""
          } px-2 sm:px-4`}
        >
          Breakfast
        </button>
        <button
          name="lunch"
          onClick={(e) => setFoods(e.target.name)}
          className={`${
            foods === "lunch" ? "text-pink-500 border-b-2 border-pink-500" : ""
          } px-2 sm:px-4`}
        >
          Lunch
        </button>
        <button
          name="dinner"
          onClick={(e) => setFoods(e.target.name)}
          className={`${
            foods === "dinner" ? "text-pink-500 border-b-2 border-pink-500" : ""
          } px-2 sm:px-4`}
        >
          Dinner
        </button>
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 py-10 sm:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {meals
          .filter((meal) => meal.category === foods)
          .map((data) => (
            <Meal key={data.id} meal={data} />
          ))}
      </div>
    </div>
  );
};

export default Meals;
