import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateEvent = () => {
  const {
    _id,
    groupName: initialGroupName,
    Description: initialDescription,
    category: initialCategory,
    location: initialLocation,
    photo: initialPhoto,
    date: initialDate,
  } = useLoaderData();

  const [groupName, setGroupName] = useState(initialGroupName || "");
  const [description, setDescription] = useState(initialDescription || "");
  const [category, setCategory] = useState(initialCategory || "");
  const [location, setLocation] = useState(initialLocation || "");
  const [imgUrl, setImgUrl] = useState(initialPhoto || "");
  const [startDate, setStartDate] = useState(
    initialDate ? new Date(initialDate) : new Date()
  );

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // এখানে তোমার Imgbb API key বসাও
  const IMGBB_API_KEY = "077d9c3c5de79bf9f91643037ed35fc4"; // তোমার নিজস্ব API key

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      console.log("ImgBB response:", data); // ডিবাগের জন্য

      if (data.success) {
        setImgUrl(data.data.url);
        Swal.fire("Image uploaded!", "Image hosted successfully.", "success");
      } else {
        Swal.fire("Error", "Image upload failed.", "error");
      }
    } catch (err) {
      console.error("Image upload error:", err);
      Swal.fire("Error", "Something went wrong during image upload!", "error");
    }
  };

  const handleUpdateEvent = (e) => {
    e.preventDefault();

    if (!groupName || !description || !category || !location || !imgUrl) {
      Swal.fire("Warning", "Please fill all fields and upload image.", "warning");
      return;
    }

    const updatedEvent = {
      groupName,
      Description: description,
      category,
      location,
      photo: imgUrl,
      date: startDate.toISOString(),
      name: user?.displayName || "",
      email: user?.email || "",
    };

    fetch(`https://ekattor-server-side.vercel.app/event-Data/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEvent),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update event");
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Success", "Event updated successfully!", "success");
          navigate("/manage-event");
        } else {
          Swal.fire("Info", "No changes were made.", "info");
        }
      })
      .catch((err) => {
        Swal.fire("Error", err.message, "error");
      });
  };

  return (
    <div className="max-w-11/12 mx-auto my-16">
      <h2 className="text-green-800 text-center pb-5 font-bold text-5xl">
        Update Event
      </h2>
      <form onSubmit={handleUpdateEvent}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Event Title</label>
            <input
              type="text"
              className="input w-full outline-2 outline-green-800"
              name="groupName"
              placeholder="Event Title"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Event Type</label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select w-full outline-2 outline-green-800"
              required
            >
              <option disabled value="">
                Pick a Event Type
              </option>
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Thumbnail Image</label>
            <input
              type="file"
              accept="image/*"
              className="file-input w-full outline-2 outline-green-800"
              onChange={handleImageUpload}
            />
            {imgUrl && (
              <img
                src={imgUrl}
                alt="Preview"
                className="mt-2 rounded"
                style={{ maxHeight: "100px" }}
              />
            )}
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full outline-2 outline-green-800"
              name="name"
              value={user?.displayName || ""}
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
              value={user?.email || ""}
              readOnly
              required
            />
          </fieldset>
        </div>

        <button className="relative inline-block px-4 py-2 font-medium group w-full mt-5">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-green-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-green-800 border-2 border-green-800 group-hover:bg-green-800"></span>
          <span className="relative text-white">Update Event</span>
        </button>
      </form>
    </div>
  );
};

export default UpdateEvent;
