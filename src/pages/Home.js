// import React, {useContext} from 'react';

// // import products from context 

// import { ProductContext } from '../contexts/ProductContext';

// // Import products component
// import Product from  '../components/Product';

// // import Hero component
// import Hero from '../components/Hero';

// import {setPageTitle} from '../functions/setPageTitle'
// import ProductCard from '../components/ProductCard';
// import HeroSection from '../components/HeroSection';
// import { fetchProductsByCategory } from '../functions/Categories';


// const Home = () => {

//   setPageTitle();

//   // get products from products context
//   const { products } = useContext(ProductContext);

//   // console.log(products);

//   products.forEach(product => {

//     // console.log(product.category);

//   })



//   const filteredProducts = products;

//   products.forEach(product => {

//     // fetch all products based on categories
//     const categoriesProducts = fetchProductsByCategory(product.category);

//     categoriesProducts.then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error(error);
//     })

//   })


//   return <div>
//     {/* <Hero /> */}
//     <HeroSection />
//     <section className='py-16 mt-12 '>
//       <div className="container mx-auto">
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
//         {filteredProducts.map(product => (
//           // <Product product={product} key={product.id} />
//           <ProductCard productInfo={product} key={product.id} />
//         ))}


          
//         </div>
//       </div>
//     </section>
//   </div>;
// };

// export default Home;

import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/HeroSection';
import { fetchProductsByCategory } from '../functions/Categories';
import {setPageTitle} from '../functions/setPageTitle'

const Home = () => {
  const { products } = useContext(ProductContext);
  const [categories, setCategories] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});
  setPageTitle();

  useEffect(() => {
    // Fetch all unique categories from products
    const uniqueCategories = [...new Set(products.map((product) => product.category))];
    setCategories(uniqueCategories);

    // Initialize expanded state for each category as true by default
    const initialExpandedState = {};
    uniqueCategories.forEach((category) => {
      initialExpandedState[category] = true;
    });
    setExpandedCategories(initialExpandedState);
  }, [products]);

  const toggleCategory = (category) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  if (!categories || categories.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeroSection />
      {categories.map((category) => (
        <section key={category} className='py-4 mt-12'>
          <div className="container mx-auto">
            <div className='bg-black text-white py-6 px-4 mb-4 flex justify-between items-center'>
              <h2 className='font-bold capitalize text-xl'>{category}</h2>
              <span>{products.filter((product) => product.category === category).length} items</span>
              <button
                className='underline text-gray-300'
                onClick={() => toggleCategory(category)}
              >
                {expandedCategories[category] ? 'View less' : 'View more'}
              </button>
            </div>
            <div className={`${expandedCategories[category] ? 'block' : 'hidden'}`}>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <ProductCard productInfo={product} key={product.id} />
                  ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;

