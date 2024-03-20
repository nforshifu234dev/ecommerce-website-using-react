import React, {useContext} from 'react';

// import products from context 

import { ProductContext } from '../contexts/ProductContext';

// Import products component
import Product from  '../components/Product';

// import Hero component
import Hero from '../components/Hero';

import {setPageTitle} from '../functions/setPageTitle'


const Home = () => {

  setPageTitle();

  // get products from products context
  const { products } = useContext(ProductContext);

  console.log(products);

  products.forEach(product => {

    console.log(product.category.name);

  })

  // get men's and women's clothing category
  // const filteredProducts = products.filter(item => {

  //   return (

  //     item.category === "men's clothing" || item.category === "women's clothing"



  //   )

  // }); 

  const filteredProducts = products;

  // get men's and women's clothing category
  // const filteredProducts = products.filter(item => {

  //   return (

  //     item.category === "men's clothing" || item.category === "women's clothing"



  //   )

  // }); 


  return <div>
    <Hero />
    <section className='py-16 '>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
        {filteredProducts.map(product => (
          <Product product={product} key={product.id} />
        ))}


          
        </div>
      </div>
    </section>
  </div>;
};

export default Home;
