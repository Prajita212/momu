import React from 'react';
import image1 from "../../../public/momu.png";
import { FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";
import Image from 'next/image';


function Contact() {
  return (
    <div className="grid justify-center max-w-350 mx-auto px-4 py-8 bg-[#F9F7F7] mt-10 ">
      <div className='flex items-center justify-center mb-12'>
        <Image 
          src={image1} 
          alt="Momu Logo"
          className='lg:h-40 lg:w-40 w-20 h-20 object-contain'
        />
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-20 md:gap-50'>
        <div className='items-center justify-center space-y-3'>
          <h3 className='font-bold text-lg mb-4'>Restaurant Types</h3>
          <ul className='space-y-2 text-gray-600'>
            <li>Cafes</li>
            <li>Restaurants</li>
            <li>Tea Shops</li>
            <li>Coffee Shops</li>
            <li>Pizzerias</li>
            <li>Food Trucks</li>
          </ul>
        </div>
        <div className='space-y-3'>
          <h3 className='font-bold text-lg mb-4'>Partners</h3>
          <ul className='space-y-2 text-gray-600'>
            <li>Integrated Partners</li>
            <li>Reseller Partners</li>
          </ul>
        </div>
        <div className='space-y-3'>
          <h3 className='font-bold text-lg mb-4'>Follow Us</h3>
          <ul className='space-y-2 text-gray-600'>
            <li className='flex items-center gap-2'><FaFacebook />

              <a href="www.facebook.com" className="hover:text-blue-600 transition">Facebook</a>
            </li>
            <li className='flex items-center gap-2'><FaInstagram />
              <a href="#" className="hover:text-blue-600 transition">Instagram</a>
            </li>
            <li className='flex items-center gap-2'>          <FaYoutube />

              <a href="https://www.youtube.com" className="hover:text-blue-600 transition">YouTube</a>
            </li>
          </ul>
        </div>

        <div className='space-y-3'>
          <h3 className='font-bold text-lg mb-4'>Contact Us</h3>
          <ul className='not-italic space-y-2 text-gray-600'>
            <p>Jadibuti, Kathmandu</p>
            <p>
              <a href="mailto:momu@gmail.com" className="hover:text-blue-600 transition">
                momu@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+9779888855500" className="hover:text-blue-600 transition">
                +977 9888855500
              </a>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;