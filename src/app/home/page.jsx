import React from "react";
import image1 from "../../../public/cook.jpg";
import image2 from "../../../public/Qr.jpg";
import image3 from "../../../public/scan.jpg";
import image4 from "../../../public/glass.jpg";
import Image from "next/image";

function Home() {
  return (
    <div className="p-0 md:p-10">
      <div className="relative w-full md:h-100 h-50 overflow-hidden">
        <div className="absolute inset-0 bg-[#F9F7F7]"></div>
        <div className="absolute left-1/2 top-0 w-full h-full bg-[#FFA20C] origin-top-left -skew-x-12"></div>

        <div className="relative z-10 w-full h-full">
          <div className="absolute left-2 md:p-10 md:mx-15 p-5 w-1/2">
            <h1 className="text-3xl md:text-6xl font-bold lg:w-80 w-40 md:mb-7 mb-2">Scan QR to view menu</h1>
            <Image src={image2} className="md:h-25 md:w-25 h-13 w-13 object-fill" alt="QR Code" />
          </div>
          <div className="absolute right-0 top-0 p-10 w-1/2 h-full flex flex-col justify-center items-center">
            <div className="flex space-x-6 mb-6">
              <Image
                src={image3}
                alt="Top Left"
                className="rounded-full md:h-32 md:w-32 h-20 w-20 object-cover"
              />
              <Image
                src={image4}
                alt="Top Right"
                className="rounded-full md:h-32 md:w-32 h-20 w-20 object-cover"
              />
            </div>
            <div className="relative mt-6">
              <div className="absolute left-0 right-0 top-0 z-0">
                <div className="absolute inset-0 bg-[#F9F7F7] z-0" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
              </div>

        
              <Image
                src={image1}
                alt="Bottom Image"
                className="rounded-full md:h-32 md:w-32 h-20 w-20 object-cover z-10"
                style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
