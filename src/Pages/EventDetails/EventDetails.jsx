import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/UseAxiosSecure";

const EventDetails = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [eventDetails, setEventDetails] = useState({});
  const { user } = use(AuthContext);
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`event-Data/${id}`)
        .then((response) => {
          setEventDetails(response.data || {});
          console.log(response);
        })
        .catch((error) => {
          console.error("Error fetching event data:", error);
          setEventDetails({});
        });
    }
  }, [user?.email, id, axiosSecure]);

  const { photo, groupName, location, date, category, Description } =
    eventDetails;

  const handleJoinEvent = () => {
    fetch("https://uddog-server.vercel.app/join-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        groupName,
        category,
        photo,
        location,
        date,
        Description,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully Joined Event!",
            icon: "success",
            draggable: true,
          });
          setIsDisabled(true);
        }
      });
  };

  return (
    <div className="card card-side w-7/12 mx-auto bg-base-200 shadow-sm my-16">
      <figure>
        <img src={photo} alt="Event" className="w-80 h-full object-cover" />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{groupName}</h1>
        <p className="font-bold">{category}</p>
        <p>Location: {location}</p>
        <p>Last date of joining: {date}</p>
        <p>{Description}</p>
        <div className="card-actions justify-left">
          <button
            onClick={handleJoinEvent}
            disabled={isDisabled}
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#129ee7] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#129ee7] group-hover:bg-[#129ee7]"></span>
            <span className="relative text-black group-hover:text-white">
              {isDisabled ? "Already Joined" : "Join Event"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
