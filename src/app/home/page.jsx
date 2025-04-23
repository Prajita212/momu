import React from "react";
import image1 from "../../../public/cook.jpg";
import image2 from "../../../public/Qr.jpg";
import image3 from "../../../public/scan.jpg";
import image4 from "../../../public/glass.jpg";
import Image from "next/image";

function Home() {
  return (
    <div className="lg:p-10 flex mt-5 justify-center">
      <div className="relative  bg-[#F9F7F7] w-full md:w-350 lg:h-110 md:h-80 h-60 overflow-hidden">
        <div className="absolute left-1/2 top-0 w-full h-full bg-[#FFA20C] origin-top-left -skew-x-12"></div>

        <div className="relative z-10 w-full h-full">
          <div className="absolute ml-2 lg:p-10 md:mx-15 p-5">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold lg:w-70 md:w-40 w-30 md:mb-7 mb-2">
              Scan QR to view menu
            </h1>
            <Image
              src={image2}
              className="md:h-25 md:w-25 h-13 w-13 object-fill"
              alt="QR Code"
            />
          </div>
          <div className="h-full flex flex-col justify-center items-center">
            <div className="flex space-x-6">
              <Image
                src={image4}
                alt="Top Left"
                className="rounded-full lg:ml-105 ml-42 lg:h-60 lg:w-60 md:h-32 md:w-32 h-30 w-30 object-cover"
             
              />
              <Image
              src={image3}
                alt="Top Right"
                className="rounded-full lg:h-60 lg:w-60 md:h-32 md:w-32 h-30 w-30 lg:ml-40 ml-10 object-cover"
              
              />
            </div>
            <div className=" ">
              <Image
                src={image1}
                alt="Bottom Image"
                className="rounded-full lg:h-60 lg:w-60 md:h-32 md:w-32 lg:ml-105 ml-40 h-30 w-30 object-cover  "

              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
