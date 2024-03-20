import React, {createContext, useState, useEffect} from 'react';

// create contex
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  // products state
  const [products, setProducts] = useState([]);

  // fetch products
  useEffect( ()=>{

    const fetchProducts = async () => {
      
      const response = await fetch('/products.json');

      const data = await response.json();

      setProducts(data);

    };

    fetchProducts();


  }, [] )

  return <ProductContext.Provider value={{products}} >{children}</ProductContext.Provider>
};

export default ProductProvider;
