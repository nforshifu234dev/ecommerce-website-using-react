import { Link } from "react-router-dom";
import { star } from "../assets/icons"

import { CartContext } from '../contexts/CartContext';
import { useContext } from "react";
import { BsBagPlus, BsEyeFill, BsPlus } from "react-icons/bs";


const ProductCard = ({productInfo}) => {

  const { addToCart } = useContext(CartContext);

  const { id, image, category, rating, title, price } = productInfo;



  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full group transition shadow-md px-2 py-3 rounded-md shadow-[#e4e4e4]  mb-4 relative overflow-hidden ">

        <img src={image} alt={title} className="w-[150px] h-[150px] object-contain mx-auto group-hover:scale-110 transition duration-300" />

        <div className="mt-8 flex justify-start items-center gap-2.5">
            <img src={star} alt="rating" width={14} height={14} />
            <p className="text-sm font-montserrat leading-normal text-slate-gray">({rating.rate})</p>
        </div>

        <Link to={`/product/${id}`}>
          <h3 className="mt-2 text-lg leading-normal font-bold mb-1">{title}</h3>
        </Link>
        <p className="mt-2 font-montserrat text-lg text-red-500 font-semibold leading-normal">₦ {price}</p>


        {/* Button */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(productInfo, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsBagPlus className="text-xl" />
            </div>
          </button>
          <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex items-center justify-center text-primary drop-shadow-xl">
            <BsEyeFill />
          </Link>
        </div>

    </div>
  )
}

export default ProductCard