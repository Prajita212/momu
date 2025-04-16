'use client';
import React from "react";
import image from "../../../public/pic.jpg";
import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      quote: "The QR menu made ordering so easy - no waiting for staff. Customized my pizza in seconds.",
      name: "Amit Dev",
      role: "Jadibuti",
      title: "Game changer for dining"
    },
    {
      id: 2,
      quote: "No paper waste, and the food options are fantastic. Highly recommend the vegan bowl.",
      name: "Sujata Khanal",
      role: "Food Blogger",
      title: "Love the eco-friendly approach"
    },
    {
      id: 3,
      quote: "Scanned, ordered, and split the bill seamlessly. Momo's dumplings were a hit.",
      name: "Priya Dev",
      role: "Kathmandu",
      title: "Perfect for large groups"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto bg-[#F9F7F7] px-4 py-16 relative z-0 overflow-visible">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Customers Say
        </h1>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="overflow-visible"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="overflow-visible">
            <div className="relative border border-gray-200 rounded-xl p-6 pt-16 shadow-sm hover:shadow-md transition-shadow h-full bg-white overflow-visible">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
                <div className="relative h-20 w-20 rounded-full shadow-lg bg-white">
                  <Image
                    src={image}
                    alt={testimonial.name}
                    className="rounded-full object-cover"
                    fill
                  />
                </div>
              </div>
              <div className="text-center mt-4">
                <RiDoubleQuotesL className="text-gray-400 text-2xl mb-2 mx-auto" />
                <h4 className="font-medium text-gray-900 mb-3">{testimonial.title}</h4>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <RiDoubleQuotesR className="text-gray-400 text-2xl mt-2 mx-auto" />
              </div>

              <div className="text-center mt-4">
                <h3 className="font-semibold text-lg text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
