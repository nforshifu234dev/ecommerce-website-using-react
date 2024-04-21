import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/HeroSection';
import { fetchAllCategories, fetchProductsByCategory } from '../functions/Categories';
import { setPageTitle } from '../functions/setPageTitle';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [products, setProducts] = useState({});
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [error, setError] = useState(null);
  setPageTitle();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all categories
        setLoadingCategories(true);
        const uniqueCategories = await fetchAllCategories();
        setCategories(uniqueCategories);

        // Initialize expanded state for each category as true by default
        const initialExpandedState = {};
        uniqueCategories.forEach((category) => {
          initialExpandedState[category] = true;
        });
        setExpandedCategories(initialExpandedState);

        // Fetch products for each category
        setLoadingProducts(true);
        const productsByCategory = {};
        for (const category of uniqueCategories) {
          const productsForCategory = await fetchProductsByCategory(category);
          productsByCategory[category] = productsForCategory;
        }
        setProducts(productsByCategory);
        setLoadingProducts(false);
      } catch (error) {
        console.error(error);
        setError(error.message || 'An error occurred while fetching data');
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchData();
  }, []);

  const toggleCategory = (category) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  if (error) {
    return (
      <div className="text-center font-bold py-4 h-screen flex items-center justify-center">
        {error}
      </div>
    );
  }

  return (
    <div>
      <HeroSection />
      {loadingCategories || loadingProducts ? (
        <div className="text-center font-bold py-4 h-screen flex items-center justify-center">Loading...</div>
      ) : (
        categories.map((category) => (
          <section key={category} className='py-4 mt-12'>
            <div className="container mx-auto">
              <div className='bg-black text-white py-6 px-4 mb-4 flex justify-between items-center'>
                <h2 className='font-bold capitalize text-xl'>{category}</h2>
                <span>{products[category]?.length || 0} items</span>
                <button
                  className='underline text-gray-300'
                  onClick={() => toggleCategory(category)}
                >
                  {expandedCategories[category] ? 'View less' : 'View more'}
                </button>
              </div>
              <div className={`${expandedCategories[category] ? 'block' : 'hidden'}`}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                  {products[category]?.map((product) => (
                    <ProductCard productInfo={product} key={product.id} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))
      )}
    </div>
  );
};

export default Home;
