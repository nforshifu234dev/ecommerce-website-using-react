
export const setPageTitle = (user_title = '') => {
    
    // fetch application name from the .env file
    const application_name_from_env = process.env.REACT_APP_APP_NAME ?? '';

    let title = user_title;

    if ( user_title !== '' )
    {
        title = `${user_title} - `;
    }

    

    if ( application_name_from_env !== '' )
    {
        title = `${title} ${application_name_from_env}`;
    }

    document.title = title;

}