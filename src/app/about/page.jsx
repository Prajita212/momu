"use client";
import React from "react";
import image5 from "../../../public/Menu.jpg";
import image6 from "../../../public/Refresh.jpg";
import image7 from "../../../public/Padlock.jpg";
import image8 from "../../../public/scanning.jpg";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function About() {
  const offers = [
    {
      id: 1,
      image: image5,
      title: "Menu Customization",
      desc: "Easily modify your order with options for size, ingredients, and more.",
    },
    {
      id: 2,
      image: image6,
      title: "Instant Updates",
      desc: "Receive real-time updates on your order status from preparation to delivery.",
    },
    {
      id: 3,
      image: image7,
      title: "Secure Payments",
      desc: "Pay easily and securely using your preferred payment method.",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full lg:w-350 ">
        <div className="flex-col md:flex-row justify-center items-center gap-10 mt-10 bg-[#F9F7F7] p-5">
          <h1 className="text-center md:text-4xl text-2xl font-bold">
            What We Offer
          </h1>

          <div className="lg:mx-20 mx-30 lg:overflow-visible overflow-hidden">
          <div className="w-full mt-10 py-10">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {offers.map((offer) => (
                <SwiperSlide key={offer.id}>
                 <div className="bg-white shadow-md p-6 rounded-lg text-center w-full h-72 flex flex-col justify-center items-center">
                 <div className="flex justify-center mb-4">
                      <Image
                        src={offer.image}
                        alt={offer.title}
                        className="lg:h-20 lg:w-20 w-15 h-15 object-fill"
                      />
                    </div>
                    <h2 className="font-semibold mt-3 text-lg">
                      {offer.title}
                    </h2>
                    <p className="text-sm mt-2 mb-4 text-gray-600">
                      {offer.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
        
          </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-10 bg-[#FFA20C] p-5 md:p-10 lg:h-120 md:h-100 h-50">
          <div className="text-center lg:ml-20">
            <h1 className="text-3xl lg:text-6xl md:text-4xl font-bold text-white">
              Scan the QR
            </h1>
            <p className="lg:text-3xl md:text-2xl mt-5 text-white">
              Sit back, and enjoy the food
            </p>
            <button className="rounded-sm bg-white mt-5 border border-gray-100 hover:text-[#FFA20C] hover:translate-y-[-2px] shadow-lg">
              <h1 className="mx-3 my-2 md:text-2xl ">Click here to start</h1>
            </button>
          </div>
          <Image
            src={image8}
            className="lg:h-100 md:h-80 md:w-1/2 h-40 w-50"
            alt="Scanning illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
