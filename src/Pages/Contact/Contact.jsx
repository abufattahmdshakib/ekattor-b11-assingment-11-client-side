import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can send formData to your backend or API here
    alert("Thanks for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto my-12 [#129ee7] outline-[#129ee7] lg:px-4">
      <h2 className="text-[#129ee7] text-center pb-5 font-bold text-5xl">
        Contact Us!
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 space-y-6"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#129ee7] outline-[#129ee7]"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#129ee7] outline-[#129ee7]"
            placeholder="Your email address"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#129ee7] outline-[#129ee7]"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#129ee7] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#129ee7] group-hover:bg-[#129ee7]"></span>
            <span className="relative text-black group-hover:text-white">
              Send Message
            </span>
          </button>
      </form>
    </div>
  );
};

export default Contact;
