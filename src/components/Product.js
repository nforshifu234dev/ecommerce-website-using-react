import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill, BsPlus } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  // destructure product
  const { id, images, category, title, price } = product;

  console.log(title);

  return (
    <div className="border border-[#e4e4e4]  mb-4 relative overflow-hidden group transition">

      <div className="w-full h-[300px] flex justify-center items-center">
        {/* image */}
        <div className="w-[200px] mx-auto flex justify-center items-center">
          <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={images[0] ?? 'http://images.nforshifu.com/public/uploads/imgs/placeholder-images-image_large.png'} alt="" />
        </div>
      </div>

      {/* Button */}
      <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button onClick={() => addToCart(product, id)}>
          <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
            <BsPlus className="text-3xl" />
          </div>
        </button>
        <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex items-center justify-center text-primary drop-shadow-xl">
          <BsEyeFill />
        </Link>
      </div>

      {/* category & title & price */}
      <div className='py-6 px-2'>
        <div className="text-sm capitalize text-gray-500 mb-1">{category.name}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">₦ {price}</div>
      </div>
      
    </div>

  );
};

export default Product;
