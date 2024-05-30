"use client";

import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const OrderCount = () => {
  const [count, setCount] = useState(0);

  const handleCounter = () => {
    if (count > 0) {
      return setCount(count - 1);
    } else if (count == 0) {
      return null;
    }
  };

  return (
    <div className="border rounded-full px-4 py-1 flex items-center space-x-3 w-24 md:w-auto">
      <AiOutlineMinus
        onClick={handleCounter}
        className="cursor-pointer font-semibold active:text-pink-500 duration-300"
      />
      <span className="text-xl font-medium text-slate-500">{count}</span>
      <AiOutlinePlus
        onClick={() => setCount(count + 1)}
        className="cursor-pointer font-semibold active:text-pink-500 duration-300"
      />
    </div>
  );
};

export default OrderCount;
