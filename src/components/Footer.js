import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaCcApplePay, FaCcMastercard, FaCcAmazonPay, FaCcPaypal, FaCcStripe, FaBitcoin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Section 1 */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-lg font-bold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-400">Shop</a></li>
            <li><a href="/" className="hover:text-gray-400">About Us</a></li>
            <li><a href="/" className="hover:text-gray-400">Contact Us</a></li>
            <li><a href="/" className="hover:text-gray-400">FAQ</a></li>
          </ul>
        </div>
        {/* Section 2 */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-lg font-bold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-gray-400"><FaFacebook /></a>
            <a href="/" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="/" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="/" className="hover:text-gray-400"><FaEnvelope /></a>
          </div>
        </div>
        {/* Section 3 */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-lg font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-400">Shipping & Returns</a></li>
            <li><a href="/" className="hover:text-gray-400">Track Order</a></li>
            <li><a href="/" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="/" className="hover:text-gray-400">Terms of Service</a></li>
          </ul>
        </div>
        {/* Section 4 */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <form className="flex items-center">
            <input type="email" placeholder="Enter your email" className="bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none" />
            <button type="submit" className="bg-gray-600 hover:bg-gray-700 text-white rounded-md px-4 py-2 ml-2">Subscribe</button>
          </form>
        </div>
      </div>
      {/* Contact Information */}
      <div className="container mx-auto mt-8">
        <div className="flex max-md:flex-col justify-between items-center max-md:items-start max-md:justify-start w-full">
          <div className="text-sm flex-1">
            <p className='mb-2'><FaPhoneAlt className="inline-block mr-2" />+1 234 567 890</p>
            <p className='mb-2'><FaEnvelope className="inline-block mr-2" />info@example.com</p>
            <p className='mb-2'><FaMapMarkerAlt className="inline-block mr-2" />1234 Street Name, City, Country</p>
          </div>

          {/* Payment Methods */}
          <div className="container mx-auto mt-4 flex flex-1 items-center max-md:items-start max-md:flex-col max-md:mx-0">
            <div className="text-sm">
              Accepted Payment Methods:
            </div>
            <div className="flex space-x-4 ml-2">
              <FaCcApplePay className="text-2xl" />
              <FaCcMastercard className="text-2xl" />
              <FaCcAmazonPay className="text-2xl" />
              <FaCcPaypal className="text-2xl" />
              <FaCcStripe className="text-2xl" />
              <FaBitcoin className="text-2xl" />
            </div>
          </div>


        </div>
      </div>

      <div className="container mx-auto mt-8 w-full justify-between flex max-md:flex-col max-md:text-cente">
        
        <div className='max-md:mb-4'>
          <p className="text-sm mb-2">This store is powered by <span className='font-semibold'>Shopify</span></p>
          <p className="text-sm">Designed and developed by <a href='https://instagram.com/nforshifu234dev/' target='_blank' rel='noreferrer' className="font-bold">NFORSHIFU234 Dev</a></p>
        </div>

        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;
