import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import Logo from "../../../public/assets/logo.png";
import CustomBtn from "./CustomBtn";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-2 py-4 sm:py-6 sm:px-20">
      <Link href="/">
        <Image src={Logo} alt="Logo" width={150} height={150} />
      </Link>
      <div className="flex space-x-2 sm:space-x-10 items-center">
        <IoCartOutline className="w-8 h-8 text-slate-500 cursor-pointer" />
        <div>
          <CustomBtn className="rounded-full cursor-pointer hidden sm:block">
            Sign up
          </CustomBtn>
          <MdLogin className="w-8 h-8 text-slate-500 cursor-pointer sm:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Header;
