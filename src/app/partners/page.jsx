'use client';
import React from 'react';
import image from '../../../public/menuscan.jpg';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

const Partners = () => {
  return (
    <div className="w-full flex justify-center bg-white">
      <div className="w-full lg:w-350">
        <div className="flex-col justify-center items-center h-auto bg-[#F9F7F7] p-5">
          <div className="flex flex-col md:flex-row items-center gap-12 ">
            <div className="md:w-1/2">
              <Image 
                src={image} 
                alt="menu scan" 
                className="rounded-lg shadow-xl w-full h-auto"
              
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold md:mb-7 mb-2">
                Modernize Your Menu<br/>
                <span className="text-[#FFA20C] text-2xl md:text-3xl lg:text-5xl">Delight Your Customers</span>
              </h1>
              <p className="text-center mt-7 text-gray-600">
                Join MOMU the effortless QR menu solution helping restaurants, cafes, and bars reduce costs, speed up service, and boost sales with contactless ordering.
              </p>
              <div className="flex justify-center mt-7">
                <button className="rounded-sm bg-[#FFA20C] mt-5 border border-gray-100 hover:text-white hover:translate-y-[-2px] shadow-lg">
                  <h1 className="mx-3 my-2 md:text-xl">Get Started</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-center mt-10 h-auto bg-[#F9F7F7] p-5">
          <h1 className="text-center md:text-4xl text-2xl font-bold">Why Restaurants Love MOMU</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-7">
            {[ 
              {
                icon: "🔄",
                title: "No More Printed Menus",
                description: "Update dishes, prices, or promotions in real-time. No reprints needed."
              },
              {
                icon: "⚡",
                title: "Faster Turnover",
                description: "Customers order and pay instantly from their phones. Fewer waitstaff delays!"
              },
              {
                icon: "📈",
                title: "Upsell Smartly",
                description: "Highlight chef's specials or pairings with details of food menus."
              },
              {
                icon: "💳",
                title: "Integrated Payments",
                description: "Secure and convenient checkout with eSewa, Khalti, IME Pay, or your existing POS like Fonepay, ConnectIPS, and more."
              },
              {
                icon: "📊",
                title: "Data You Can Use",
                description: "Track top-selling items, peak hours, and customer preferences."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center h-60">
                <div className="text-4xl mb-4 text-[#FFA20C]">{feature.icon}</div>
                <h2 className="font-semibold mt-3 text-lg">{feature.title}</h2>
                <p className="text-sm mt-2 mb-4 text-gray-600 ">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-10 bg-[#FFA20C] p-5 md:p-10 h-auto">
          <div className="text-center w-full">
            <h1 className="text-3xl lg:text-6xl md:text-4xl font-bold text-white">Ready to Transform Your Restaurant?</h1>
            <p className="lg:text-3xl md:text-2xl mt-5 text-white">
              Join hundreds of restaurants already using MOMU
            </p>
            <div className="flex justify-center gap-4 mt-5">
              <button className="rounded-sm bg-white mt-5 border border-gray-100 hover:text-[#FFA20C] hover:translate-y-[-2px] shadow-lg">
                <h1 className="mx-3 my-2 md:text-xl">Start Free Trial</h1>
              </button>
              <button className="rounded-sm bg-transparent mt-5 border border-white text-white hover:bg-white hover:text-[#FFA20C] hover:translate-y-[-2px] shadow-lg">
                <h1 className="mx-3 my-2 md:text-xl">Book a Demo</h1>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-center mt-10 h-auto bg-[#F9F7F7] p-5">
          <h1 className="text-center md:text-4xl text-2xl font-bold">Partner With MOMU</h1>
          <p className="text-center mt-7 text-gray-600">
            Join our network of restaurants and streamline your service with QR-powered menus.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-7">
            <div className="space-y-8">
              {[ 
                {
                  icon: <FaMapMarkerAlt size={20} className="text-[#FFA20C]" />,
                  title: "Location",
                  content: "Jadibuti, Kathmandu, Nepal"
                },
                {
                  icon: <FaPhone size={20} className="text-[#FFA20C]" />,
                  title: "Phone",
                  content: <a href="tel:+9779888855500" className="text-gray-600 hover:text-[#FFA20C] transition-colors duration-200">+977 9888855500</a>
                },
                {
                  icon: <FaEnvelope size={20} className="text-[#FFA20C]" />,
                  title: "Email",
                  content: <a href="mailto:momu@gmail.com" className="text-gray-600 hover:text-[#FFA20C] transition-colors duration-200">momu@gmail.com</a>
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <div className="text-gray-600">{item.content}</div>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>

                <div className="flex gap-6">
                  <a href="https://www.facebook.com" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.youtube.com/" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                    <FaYoutube className="w-6 h-6" />
                  </a>
                </div>

              </div>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
              <form className="space-y-5">
                {[ 
                  { id: "name", label: "Your Name", type: "text", placeholder: "enter your name" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "you@gmail.com" },
                  { id: "business", label: "Business Name", type: "text", placeholder: "Your Restaurant/Cafe" }
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA20C]"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA20C]"
                    placeholder="Tell us about your business needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-[#FFA20C] text-white font-medium rounded-lg hover:bg-[#e69100] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFA20C]"
                >
                  <FaPaperPlane className="mr-2" />
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
