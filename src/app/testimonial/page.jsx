"use client";
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
      quote:
        "The QR menu made ordering so easy - no waiting for staff. Customized my pizza in seconds.",
      name: "Amit Dev",
      role: "Jadibuti",
      title: "Game changer for dining",
    },
    {
      id: 2,
      quote:
        "No paper waste, and the food options are fantastic. Highly recommend the vegan bowl.",
      name: "Sujata Khanal",
      role: "Food Blogger",
      title: "Love the eco-friendly approach",
    },
    {
      id: 3,
      quote:
        "Scanned, ordered, and split the bill seamlessly. Momo's dumplings were a hit.",
      name: "Priya Dev",
      role: "Kathmandu",
      title: "Perfect for large groups",
    },
  ];

  return (
    <div className="p-1 md:p-10">
      <div className="w-full mx-auto bg-[#F9F7F7] px-4 py-16 relative z-0 overflow-hidden lg:overflow-visible mb-10 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 lg:mb-25 mb-20">
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
              direction: "horizontal",
            },
            1024: {
              slidesPerView: 3,
              direction: "horizontal",
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="overflow-hidden !flex justify-center"
            >
              <div className="relative border border-gray-200 rounded-xl p-6 pt-16 h-90 w-80 shadow-sm hover:shadow-md transition-shadow bg-white overflow-visible">
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
                  <RiDoubleQuotesL className="text-gray-400 text-2xl mb-2" />
                  <h4 className="font-medium text-lg text-gray-900 mb-3">
                    {testimonial.title}
                  </h4>
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                </div>

                <div className="mt-8 flex justify-end items-end gap-2">
                  <div className="text-right">
                    <h3 className="font-semibold text-sm text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <RiDoubleQuotesR className="text-gray-400 text-2xl mt-4 ml-auto" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;