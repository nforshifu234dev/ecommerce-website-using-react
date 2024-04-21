import React, {useContext} from 'react';

// import useParams
import {useParams} from 'react-router-dom';

// import cart contenxt
import {CartContext} from '../contexts/CartContext'

// import product context
import { ProductContext } from '../contexts/ProductContext'

const ProductDetails = () => {

  // get the product id from the url
  const {id} = useParams();

  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  // get single product based on id
  const product = products.find( item => {
    return item.id === parseInt(id);
  } );

  // if product is not found
  if ( ! product )
  {
    
    return <section className='h-screen flex items-center justify-center'>Loading...</section>
  
  }

  const { title, price , description, image, category } = product;

  document.title = `${title}`;

  return <section className='pt-32 pb-12 lg:py-32 min-h-screen'>
    <div className='container mx-auto'>

      {/* image & text wrapper */}
      <div className='flex flex-col lg:flex-row items-center'>

        {/* image */}
        <div className='flex items-center justify-center flex-1 mb-8 lg:mb-0 '>
          <img src={image} alt={title} className='max-w-[200px] h-full lg:max-w-md  '  />
        </div>

        {/* text */}
        <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
          <div className='text-xl text-gray-500 font-medium mb-6 capitalize'>{category}</div>
          <div className='text-2xl text-red-500  mb-6 font-bold'>₦ {price}</div>
          <p className='mb-8'>{description}</p>
          <button onClick={ ()=> addToCart(product, product.id) }  className='bg-primary py-4 px-8 text-white'>
            Add to cart
          </button>
        </div>

      </div>

    </div>
  </section>;
};

export default ProductDetails;
