// export const fetchAllCategories = async () => {

import { getRandomData } from "./RandomData";

//     let request_url = process.env.REACT_APP_BACKEND_API_URL ?? '';

//     request_url = 'http://localhost:3000/assets/FakeStoreAPI/';

//     // let route = `products?limit=${limit}`;
//     let route = `products.json`;

//     request_url = `${request_url}${route}`;

// }


export const fetchProductsByCategory = async (category) => {
    let requestUrl = process.env.REACT_APP_BACKEND_API_URL ?? '';
    const route = `products/category/${category}`; // Default route
    const url = `${requestUrl}${route}`;

    try {
        const response = await fetch(url);
        const jsonData = await response.json();
        return jsonData;
    }
    catch (error) {
        console.error(error);
        return "Error: Failed to fetch data";
    }

}
export const fetchAllCategories = async () => {

    let request_url = process.env.REACT_APP_BACKEND_API_URL ?? '';

    let route = 'products/categories';

    request_url = `${request_url}${route}`;

    try {
        const response = await fetch(request_url);
        const jsonData = await response.json();
        return jsonData;
    }
    catch (error) {
        console.error(error);
        return "Error: Failed to fetch data";
    }


}