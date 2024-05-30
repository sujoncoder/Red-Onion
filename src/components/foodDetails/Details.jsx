import { IoCartOutline } from "react-icons/io5";
import CustomBtn from "../shared/CustomBtn";
import OrderCount from "./OrderCount";

const Details = ({ onFoodDetails }) => {
  const { title, description, price } = onFoodDetails || {};
  return (
    <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-4">
      <h1 className="text-4xl font-bold text-slate-600">{title}</h1>
      <p className="my-6 text-lg font-medium text-slate-500">{description}</p>
      <div className="flex justify-start items-center space-x-4">
        <span className="text-xl font-semibold text-slate-500">${price}</span>

        {/* order counter  */}
        <OrderCount />
      </div>
      <br />
      <CustomBtn className="flex space-x-2 items-center rounded-full px-6 active:bg-[#a70c21] duration-300 shadow">
        <IoCartOutline className="w-6 h-6 text-white cursor-pointer" />
        <span className="text-white">Add</span>
      </CustomBtn>
    </div>
  );
};

export default Details;
