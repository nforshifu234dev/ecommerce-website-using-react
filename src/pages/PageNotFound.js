import React from 'react';
import { Link } from 'react-router-dom';
import { BiAlarmExclamation } from 'react-icons/bi';
import { setPageTitle } from '../functions/setPageTitle';


const PageNotFound = () => {
  setPageTitle('Page Not Found');
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-yellow-500 text-6xl mb-4">
        <BiAlarmExclamation />
      </div>
      <h1 className="text-3xl font-semibold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 text-lg">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 mt-4 underline">Go Home</Link>
    </div>
  );
}

export default PageNotFound;
