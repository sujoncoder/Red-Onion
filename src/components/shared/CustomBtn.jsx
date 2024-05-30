const CustomBtn = ({ className, children }) => {
  return (
    <button className={`${className} bg-[#ee223c] px-4 py-2 text-white`}>
      {children}
    </button>
  );
};

export default CustomBtn;
