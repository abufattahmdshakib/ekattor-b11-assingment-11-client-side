import React, { use, useState } from "react";
import Swal from "sweetalert2";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateEvent = () => {
  const { _id, groupName, Description, category, location, photo } =
    useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />;
  const navigate = useNavigate();

  const { user } = use(AuthContext);
  const handleCreateUsers = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const groupData = Object.fromEntries(formData.entries());
    console.log(groupData);
    fetch(`http://localhost:3000/event-Data/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groupData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Successfully Event Updated!",
            icon: "success",
            draggable: true,
          });
          form.reset();
          navigate("/manage-event");
        }
      });
  };
  return (
    <div className="max-w-11/12 mx-auto my-16">
      <div>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
        >
          ← Go Back
        </button>
        <h2 className="text-green-800 mb-12 text-center pb-5 font-bold text-5xl">
          Create Event
        </h2>
      </div>

      <form onSubmit={handleCreateUsers}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Event Title</label>
            <input
              type="text"
              className="input w-full outline-2 outline-green-800"
              name="groupName"
              placeholder="Event Title"
              defaultValue={groupName}
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Event Type</label>
            <select
              name="category"
              defaultValue={category}
              className="select w-full outline-2 outline-green-800"
              required
            >
              <option disabled={false}>Pick a Event Type</option>
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
              defaultValue={Description}
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
              defaultValue={location}
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Start Date</label>
            <DatePicker
              className="input w-full outline-2 outline-green-800"
              selected={startDate}
              name="date"
              onChange={(date) => setStartDate(date)}
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Thumbnail Image Url</label>
            <input
              type="url"
              className="input w-full outline-2 outline-green-800"
              name="photo"
              placeholder="Image Url"
              defaultValue={photo}
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full outline-2 outline-green-800"
              name="name"
              placeholder="Name"
              defaultValue={user.displayName}
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
              defaultValue={user.email}
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
