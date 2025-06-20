import React from "react";

const GallerySection = () => {
  return (
    <div className="shadow-2xl mt-16 rounded-2xl">
      <h1 className="text-5xl font-bold text-green-800 text-center pb-7">
        Gallery
      </h1>
      <div className="flex sm:flex-row flex-col justify-center gap-5">
        <div className="space-y-5">
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-[196px] rounded-xl"
              src="../../../public/assets/WhatsApp Image 2025-06-01 at 21.54.29_2766f397.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-96 rounded-xl"
              src="../../../public/assets/gallery-3.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-96 rounded-xl"
              src="../../../public/assets/gallery-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-[196px] rounded-xl"
              src="../../../public/assets/ph_29502_106948.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-[196px] rounded-xl"
              src="../../../public/assets/gallery-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-96 rounded-xl"
              src="../../../public/assets/gallery-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-96 rounded-xl"
              src="../../../public/assets/gallery-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-[196px] rounded-xl"
              src="../../../public/assets/gallery-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
