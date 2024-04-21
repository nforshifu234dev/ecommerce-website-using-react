import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { headerLogo } from "../assets/images";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isRouteHome, setIsRouteHome] = useState(false); // New state variable for route check
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });

    const currentRoute = window.location.pathname;

    if (currentRoute === '' || currentRoute === '/') {
      setIsRouteHome(true); // Set isRouteHome directly based on the route
    } else {
      setIsRouteHome(false);
    }
  }, []); // Empty dependency array for useEffect

  return (
    <header
      className={`${
        isActive ? 'bg-white py-4 shadow-md text-black' : 'bg-none py-6'
      // } ${isRouteHome ? 'text-white' : 'text-black'} fixed w-full z-50 transition-all`}
    } text-coral-red fixed w-full z-40 transition-all`}
    >
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to={'/'}>
          <div>
            <img src={headerLogo} alt="Logo" width={130} height={29} />

          </div>
        </Link>

        <div className='flex gap-x-6'>
          {/* cart */}
          <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
            <BsSearch className='text-2xl' />
          </div>

          {/* cart */}
          <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
            <BsBag className='text-2xl' />
            <div className='bg-primary absolute -right-2 -bottom-2 font-[12px] h-[18px] text-white rounded-full flex items-center justify-center px-1 text-sm'>
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
