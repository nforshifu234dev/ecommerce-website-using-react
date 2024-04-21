// export const fetchAllCategories = async () => {

import { getRandomData } from "./RandomData";

//     let request_url = process.env.REACT_APP_BACKEND_API_URL ?? '';

//     request_url = 'http://localhost:3000/assets/FakeStoreAPI/';

//     // let route = `products?limit=${limit}`;
//     let route = `products.json`;

//     request_url = `${request_url}${route}`;

// }


export const fetchProductsByCategory = async (category) => {
    const requestUrl = 'http://localhost:3000/assets/FakeStoreAPI/';
    const route = 'products.json';
    const url = `${requestUrl}${route}`;
  
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
  
      // Filter products by category
      const filteredProducts = jsonData.filter(product => product.category === category);
  
      if (filteredProducts.length === 0) {
        return "Error: Category does not exist";
      } else {
        // Get random data from the filtered products
        const randomData = getRandomData(9, filteredProducts);
        return randomData;
      }
    } catch (error) {
      return "Error: Failed to fetch data";
    }
  }