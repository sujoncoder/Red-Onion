import Image from "next/image";
import BG from "../../../public/assets/bg.png";
import CustomBtn from "../shared/CustomBtn";

const Hero = () => {
  return (
    <div className="relative h-[150px] md:h-[300px] lg:h-[500px] w-full">
      <Image
        src={BG}
        alt="banner"
        className="w-full bg-cover hidden sm:block"
      />

      <h1 className="font-semibold text-xl md:text-3xl lg:text-4xl text-slate-700 absolute top-16 sm:top-20 left-[50%] transform -translate-x-1/2 text-center">
        Best food waiting for your belly.
      </h1>
      <div className="w-10/12 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto rounded-full border flex justify-between items-center absolute top-32 sm:top-40 left-1/2 transform -translate-x-1/2 bg-white">
        <input
          type="text"
          className="rounded-full w-full h-10 md:h-12 px-2 sm:px-4 text-slate-500 focus:outline-none"
          placeholder="Search food items"
        />
        <CustomBtn className="rounded-full text-xs md:text-lg py-3 px-6">
          Search
        </CustomBtn>
      </div>
    </div>
  );
};

export default Hero;
