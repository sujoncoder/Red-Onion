import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../../public/assets/footerLogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#191919] py-10 px-4 md:px-10 lg:px-20">
      <section className="flex flex-col md:flex-row justify-between text-slate-200 space-y-10 md:space-y-0 md:space-x-10">
        <Link href="/">
          <Image src={LogoImage} alt="Logo" width={150} height={150} />
        </Link>

        <div>
          <p>About Online food</p>
          <p>Read our blog</p>
          <p>Sign up to deliver</p>
        </div>

        <div>
          <p>Get help</p>
          <p>Read FAQ</p>
          <p>View all client</p>
        </div>
      </section>

      <section className="text-slate-200 flex flex-col md:flex-row justify-around items-center pt-10 md:pt-20 space-y-4 md:space-y-0">
        <p> &copy; {currentYear}. All rights reserved.</p>
        <p>Privacy policy.</p>
        <p>Terms of use.</p>
        <p>Pricing.</p>
      </section>
    </footer>
  );
};

export default Footer;
