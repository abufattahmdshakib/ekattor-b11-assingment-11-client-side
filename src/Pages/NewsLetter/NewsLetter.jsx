import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex items-center justify-center gap-10 shadow-xl rounded-2xl bg-base-300 p-10 my-12">
      <div>
        <img src="/assets/newsletter-icon.png" alt="" />
      </div>
      <div className="space-y-3">
        <h1 className="text-5xl font-bold text-[#129ee7]">Subscribe to our Newsletter</h1>
        <h3 className="text-xl font-medium">
          Get the latest on upcoming events, volunteer drives, and community success stories.
        </h3>
        <form>
          <input
            placeholder="Enter Your E-mail Address"
            className="outline-0 h-10 w-2/3 p-4 border-2 border-[#129ee7]"
            type="text"
          />
          <button className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#129ee7] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#129ee7] group-hover:bg-[#129ee7]"></span>
            <span className="relative text-black group-hover:text-white">
              Button Text
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
