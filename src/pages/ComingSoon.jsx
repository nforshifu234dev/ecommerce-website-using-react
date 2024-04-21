import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegClock } from 'react-icons/fa';
import { setPageTitle } from '../functions/setPageTitle';

const ComingSoon = () => {
  setPageTitle('Coming Soon');

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-green-500 text-6xl mb-4">
        <FaRegClock />
      </div>
      <h1 className="text-3xl font-semibold mb-4">Coming Soon</h1>
      <p className="text-gray-600 text-lg">We're working hard to bring you something amazing!</p>
      <Link to="/" className="text-blue-500 mt-4 underline">Go Home</Link>
    </div>
  );
}

export default ComingSoon;
