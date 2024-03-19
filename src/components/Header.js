import React, { useContext, useEffect, useState } from 'react';
// sidebar context
import { SidebarContext } from '../contexts/SidebarContext';

// cart context
import { CartContext } from '../contexts/CartContext';

// import Logo
import Logo from '../img/logo.svg'

// import icon 

import {BsBag} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Header = () => {

  // header state
  const [isActive, setIsActive] = useState(false);

  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener 
  useEffect( () => {
    window.addEventListener('scroll', ()=>{

      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);

    })
  } )

  return <header className={`${isActive? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all `}>

    <div className='container mx-auto flex items-center justify-between h-full '>
      <Link to={'/'} >
        <div>
          <img className='w-[40px]' src={Logo} alt='Logo' />
        </div>
      </Link>

      {/* cart */}
      <div onClick={()=>{ setIsOpen(! isOpen) }} className='cursor-pointer flex relative '>
        <BsBag className='text-2xl' />
        <div className='bg-red-500 absolute -right-2 -bottom-2 font-[12px] h-[18px] text-white rounded-full flex items-center justify-center px-1 text-sm'>{itemAmount}</div>
      </div>

    </div>
  </header>;
};

export default Header;
