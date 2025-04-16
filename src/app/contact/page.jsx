import React from 'react';
import image1 from "../../../public/momu.jpg";
import Image from 'next/image';

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className='flex justify-center mb-12'>
        <Image 
          src={image1} 
          alt="Momu Logo"
          className='h-40 w-40 object-contain'
          width={160}
          height={160}
        />
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='space-y-3'>
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
            <li>
              <a href="#" className="hover:text-blue-600 transition">Facebook</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">Instagram</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">YouTube</a>
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