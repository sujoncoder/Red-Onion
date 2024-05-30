import DelailsImage from "@/components/foodDetails/DelailsImage";
import Details from "@/components/foodDetails/Details";
import meals from "@/utils/data";

const FoodDetails = ({ params }) => {
  const foodDetails = meals.find((meal) => meal.id === parseInt(params.id));

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 flex flex-col md:flex-row justify-between items-center py-10">
      <Details onFoodDetails={foodDetails} />
      <DelailsImage onFoodDetails={foodDetails.image} />
    </section>
  );
};

export default FoodDetails;
