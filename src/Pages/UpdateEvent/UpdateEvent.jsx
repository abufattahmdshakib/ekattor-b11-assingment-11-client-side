import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateEvent = () => {
  const { _id, groupName, Description, category, location, photo } =
    useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  const [imgUrl, setImgUrl] = useState(photo || "");
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=YOUR_IMGBB_API_KEY`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      if (data.success) {
        setImgUrl(data.data.url);
        Swal.fire("Image uploaded!", "Image hosted successfully.", "success");
      } else {
        Swal.fire("Error", "Image upload failed.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  const handleCreateUsers = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const groupData = Object.fromEntries(formData.entries());

    // Replace photo with hosted URL
    groupData.photo = imgUrl;

    fetch(`https://ekattor-server-side.vercel.app/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groupData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Successfully Event Updated!",
            icon: "success",
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
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          ← Go Back
        </button>
        <h2 className="text-green-800 mb-12 text-center pb-5 font-bold text-5xl">
          Update Event
        </h2>
      </div>

      <form onSubmit={handleCreateUsers}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Other inputs... */}
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
                className="mt-2 w-32 h-32 object-cover rounded"
              />
            )}
            <input type="hidden" name="photo" value={imgUrl} />
          </fieldset>
        </div>

        <button className="relative inline-block px-4 py-2 font-medium group w-full mt-5">
          <span className="absolute inset-0 bg-green-800 border-2 border-green-800"></span>
          <span className="relative text-white">Update Event</span>
        </button>
      </form>
    </div>
  );
};

export default UpdateEvent;
