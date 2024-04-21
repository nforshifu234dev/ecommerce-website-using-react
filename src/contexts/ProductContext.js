import React, {createContext, useState, useEffect} from 'react';
import { fetchProducts } from '../functions/Products';

// create contex
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  // products state
  const [products, setProducts] = useState([]);

  // fetch products
  useEffect( ()=>{

    const fetchProductsFromBackend = async () => {
      
      // const response = await fetch('/products.json');
      const response = await fetchProducts();

      // const data = await response.json();

      setProducts(response);

    };

    fetchProductsFromBackend();


  }, [] )

  return <ProductContext.Provider value={{products}} >{children}</ProductContext.Provider>
};

export default ProductProvider;
