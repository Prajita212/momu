'use client'
import React, { useState } from 'react';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I scan the QR code?",
      answer: "Open your phone's camera or a QR scanner app, point it at the QR code, and follow the link to view the menu."
    },
    {
      question: "What payment methods do you accept?",
      answer:" We accept cash, credit/debit cards, and mobile payments like Apple Pay and Google Pay."    },
    {
      question: "Can I place an order online?",
      answer: "we only support in-person dining orders. Scan the QR code to view the menu and place your order."
    },
    {
      question: "How can I provide feedback?",
      answer: "Visit the Contact Us section to share your thoughts or ask questions."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      <div className='text-center mb-12'>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h1>
        <p className='text-lg text-gray-600 mb-6'>
          Have questions? We're here to help
        </p>
        
        <div className='relative max-w-md mx-auto'>
          <input
            type="text"
            placeholder="Search FAQs..."
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button className='absolute right-3 top-3 text-gray-500'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className='space-y-4 shadow-lg md:shadow-none'>
        {faqs.map((faq, index) => (
          <div key={index} className='md:border border-gray-200 border-none rounded-lg overflow-hidden md:shadow-sm'>
            <button
              className='w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition'
              onClick={() => toggleAccordion(index)}
            >
              <h2 className='text-lg font-medium text-gray-800'>{faq.question}</h2>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition ${activeIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {activeIndex === index && (
              <div className='px-6 pb-4 pt-2 bg-gray-50'>
                <p className='text-gray-600'>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;