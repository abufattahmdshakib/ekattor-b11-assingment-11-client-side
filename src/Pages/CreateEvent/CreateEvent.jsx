import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const CreateEvent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [imageUrl, setImageUrl] = useState(""); // uploaded image link
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  // handle image upload to imgbb
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    const url = `https://api.imgbb.com/1/upload?key=077d9c3c5de79bf9f91643037ed35fc4`;

    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setImageUrl(data.data.url);
        Swal.fire({
          title: "Image Uploaded!",
          text: "Your image has been successfully uploaded.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Image upload failed:", error);
      Swal.fire({
        title: "Upload Failed",
        text: "Something went wrong while uploading image.",
        icon: "error",
      });
    }
  };

  const handleCreateEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const groupData = Object.fromEntries(formData.entries());

    // Replace photo value with uploaded image URL
    groupData.photo = imageUrl;

    // You can set time to 18:00 UTC if needed
    const dateObj = new Date(startDate);
    dateObj.setUTCHours(18, 0, 0, 0);
    groupData.date = dateObj.toISOString();

    axiosSecure.post("event-Data", groupData).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          title: "Successfully Event Created!",
          icon: "success",
          draggable: true,
        });
        form.reset();
        setImageUrl("");
        navigate("/upcoming-event");
      }
    });
  };

  return (
    <div className="max-w-11/12 mx-auto my-16">
      <Helmet>
        <title>Ekattor | CreateEvent</title>
      </Helmet>
      <h2 className="text-green-800 text-center pb-5 font-bold text-5xl">
        Create Event
      </h2>
      <form onSubmit={handleCreateEvent}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Event Title</label>
            <input
              type="text"
              className="input w-full outline-2 outline-green-800"
              name="groupName"
              placeholder="Event Title"
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Event Type</label>
            <select
              name="category"
              defaultValue="Pick a Event Type"
              className="select w-full outline-2 outline-green-800"
              required
            >
              <option disabled>Pick a Event Type</option>
              <option>Clean-up drives</option>
              <option>Tree plantation drives</option>
              <option>Blood donation camps</option>
              <option>Water and sanitation projects</option>
              <option>Road safety and transport education</option>
              <option>Sanitation and hygiene awareness drives</option>
              <option>Health camps and check-ups for senior citizens</option>
              <option>Self-employment and entrepreneurship workshops</option>
            </select>
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              className="input w-full outline-2 outline-green-800"
              name="Description"
              placeholder="Description"
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Meeting Location</label>
            <input
              type="text"
              className="input w-full outline-2 outline-green-800"
              name="location"
              placeholder="Location"
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Start Date</label>
            <DatePicker
              className="input w-full outline-2 outline-green-800"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              required
              // remove name to prevent default form submission of string
            />
            {/* Hidden input with ISO date string */}
            <input type="hidden" name="date" value={startDate.toISOString()} />
          </fieldset>

          {/* Thumbnail image upload */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Thumbnail Image</label>
            <input
              type="file"
              accept="image/*"
              className="file-input w-full outline-2 outline-green-800"
              onChange={handleImageUpload}
              required
            />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Preview"
                className="mt-2 rounded"
                style={{ maxHeight: "100px" }}
              />
            )}
            {/* hidden input to keep form structure */}
            <input type="hidden" name="photo" value={imageUrl} />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full outline-2 outline-green-800"
              name="name"
              placeholder="Name"
              defaultValue={user?.displayName || ""}
              readOnly
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full outline-2 outline-green-800"
              name="email"
              placeholder="Email"
              defaultValue={user?.email || ""}
              readOnly
              required
            />
          </fieldset>
        </div>

        <button className="relative inline-block px-4 py-2 font-medium group w-full mt-5">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-green-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-green-800 border-2 border-green-800 group-hover:bg-green-800"></span>
          <span className="relative text-white">Create Event</span>
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
