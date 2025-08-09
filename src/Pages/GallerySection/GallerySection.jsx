import React from "react";

const GallerySection = () => {
  return (
    <div className="shadow-2xl mt-16 rounded-2xl">
      <h1 className="text-2xl font-bold text-green-800 text-center">
        Community Gallery & Snapshots
      </h1>
      <p className="text-center mb-8">Discover and relive memorable moments captured during our vibrant community gatherings and events.</p>
      <div className="flex sm:flex-row flex-col justify-center gap-5">
        <div className="space-y-5">
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-[196px] rounded-xl"
              src="https://i.ibb.co/Fkfx4x0W/Whats-App-Image-2025-06-01-at-21-54-29-2766f397.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-96 rounded-xl"
              src="https://i.ibb.co/DHRGbHqz/gallery-3.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-96 rounded-xl"
              src="https://i.ibb.co/qFcVgXBJ/gallery-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-[196px] rounded-xl"
              src="https://i.ibb.co/PzhMvfCz/ph-29502-106948.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-[196px] rounded-xl"
              src="https://i.ibb.co/hJGRVWfS/gallery-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-96 rounded-xl"
              src="https://i.ibb.co/9HNJMphc/gallery-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-96 rounded-xl"
              src="https://i.ibb.co/tPm5Znnh/gallery-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[300px] mx-auto lg:w-72 h-[196px] rounded-xl"
              src="https://i.ibb.co/PsdmdcYC/gallery-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
