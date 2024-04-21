import React from 'react';
import WomanImg from '../img/woman_hero.png';
// import link
import { Link } from 'react-router-dom';

const Hero = () => {
  return <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>

    <div className='container mx-auto flex justify-around h-full'>

      {/* text */}
      <div className='flex flex-col justify-center text-white'>

        {/* pretitle */}
        <div className='font-semibold flex items-center uppercase'>

          <div className='w-10 h-[2px] bg-[#6F3D26] mr-3 '></div> New Trend

        </div>

        <h1 className='uppercase text-[70px] leading-[1.1] font-light mb-4 '>autum sale stylish <br/> <span className='font-semibold'>womens</span> </h1>

        <Link to={'/shop'} className='self-start uppercase font-semibold border-b-2 border-white pb-2'  >Discover More</Link>

      </div>

      {/* image */}
      <div className='hidden lg:block'>
        <img src={WomanImg} alt='Hero'/>
      </div>

    </div>

  </section>;
};

export default Hero;
