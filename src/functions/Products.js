export const fetchProducts = async ( limit = 10, offset = 0 ) => {

    let request_url = process.env.REACT_APP_BACKEND_API_URL ?? '';

    // request_url = 'http://localhost:3000/assets/FakeStoreAPI/';

    // let route = `products?limit=${limit}`;
    let route = `products`;

    request_url = `${request_url}${route}`;

    console.log(request_url);

    // const response = await fetch(request_url)
    //                         .then( async (responseData) => {

    //                             console.log(responseData.body);

    //                             return await responseData.json()

    //                         } )
    //                         .catch( error => {
    //                             console.error(error);
    //                             return false;
    //                         } );

    try {
        const response = await fetch(request_url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return null; // Return null or handle the error as needed
    }

    // return response;



}



export const fetchSingleProduct = async (id) => {
    let requestUrl = process.env.REACT_APP_BACKEND_API_URL ?? '';
    let route = 'products'; // Default route

    // Append route to the request URL if it's not empty
    if (route === '' || requestUrl === undefined ) {
        console.error("Invalid URL");
        return false;
    }

    requestUrl = `${requestUrl}${route}/${id}`;


    try {
        const response = await fetch(requestUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return null; // Return null or handle the error as needed
    }
};



  