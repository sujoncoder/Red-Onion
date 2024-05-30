import Image from "next/image";
import Link from "next/link";

const Meal = ({ meal }) => {
  const { id, title, image, description, price } = meal;
  const shortDescription =
    description.length > 30
      ? `${description.substring(0, 30)}...`
      : description;
  return (
    <Link
      href={`/${id}`}
      className="flex flex-col items-center rounded-lg px-4 py-6  hover:shadow-xl duration-300 cursor-pointer space-y-2"
    >
      <Image
        src={image}
        width={200}
        height={200}
        alt="meal-pic"
        className="rounded"
      />
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium text-slate-600">{title}</h3>
        <p className="text-slate-500">{shortDescription}</p>
        <h3 className="text-lg font-semibold text-slate-600">${price}</h3>
      </div>
    </Link>
  );
};

export default Meal;
