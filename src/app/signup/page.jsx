import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo2.png";

const Signup = () => {
    return (
        <div className='p-3 max-w-lg mx-auto'>
      <div className='text-3xl mx-auto text-center font-semibold my-7'>
     <Image className="mx-auto" src={logo}
      width={300}
      height={300}
      alt="Picture of the author"
     />
      </div>
      <form className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='name'
          className='border p-3 rounded-lg'
          id='name'
        
        />
        <input
          type='email'
          placeholder='Email'
          className='border p-3 rounded-lg'
          id='email'
         
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
        />
        <input
          type='password'
          placeholder='conform password'
          className='border p-3 rounded-lg'
          id='password'
        />

        <button

          className=' bg-rose-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          { 'Sign Up'}
        </button>
      </form>
      <div className='flex justify-center gap-2 mt-5'>
        <p className=" text-rose-500">Have an account?</p>
        <Link href={'/signin'}>
          <span className='text-blue-700'>Log in</span>
        </Link>
      </div>
    </div>
    );
};

export default Signup;