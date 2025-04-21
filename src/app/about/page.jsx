'use client';
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
    <div>
    <div className="flex-col items-center justify-between mt-10 h-auto bg-[#F9F7F7] p-10 ">
      <h1 className="text-center md:text-4xl text-2xl font-bold">What We Offer</h1>

      <div className="md:mx-20 mt-6 mx-30 md:overflow-visible overflow-hidden">
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
              <div className="bg-white shadow-md p-6 rounded-lg text-center h-full  ">
                <div className="flex justify-center mb-4">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    className="h-20 w-20 object-fill"
                  />
                </div>
                <h2 className="font-semibold mt-3 text-lg">{offer.title}</h2>
                <p className="text-sm mt-2 mb-4 text-gray-600">{offer.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
      <div className="flex items-center justify-center mt-10 gap-10 bg-[#FFA20C] md:h-100 h-50 w-full"><div>
<h1 className="md:text-5xl text-3xl font-bold">Scan the QR </h1>
<p className="md:text-3xl mt-3">Sit back, and enjoy the food</p>
<button className="rounded-sm bg-white mt-3 border border-gray-100 hover:text-[#FFA20C] hover:translate-y-[-2px] shadow-lg "><h1 className="mx-3 my-1">Click here to start</h1></button>
</div>
<Image src={image8}
className="md:h-90 md:w-100 h-40 w-50"/>
    </div>
    </div>
  );
}

export default About;
