import Image from "next/image";

const DelailsImage = ({ onFoodDetails }) => {
  return (
    <div className="w-full md:w-1/2">
      <Image src={onFoodDetails} alt="FoodImage" width={600} height={600} />
    </div>
  );
};

export default DelailsImage;
