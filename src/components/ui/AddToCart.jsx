import React from "react";
import { FaCartPlus } from "react-icons/fa";

const AddToCart = () => {
     return (
          <button className="flex items-center gap-3 p-3 bg-red-500 rounded-full transition-all group">
               <div className="text-white group-hover:scale-110 transition-transform">
                    <FaCartPlus />
               </div>
          </button>
     );
};

export default AddToCart;
