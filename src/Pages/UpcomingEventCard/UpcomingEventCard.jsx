import React from "react";
import { Link } from "react-router";

const UpcomingEventCard = ({ eventData }) => {
  const { _id, category, photo, groupName, Description, date, location } =
    eventData;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{groupName}</h2>
        <h4>{category}</h4>
        <p>{Description}</p>
        <div className="flex">
          <p>Location: {location}</p>
          <p>Date: {date}</p>
        </div>
        <div className="card-actions justify-center">
          <Link className="w-full" to={`/event-details/${_id}`}>
            <button className="relative w-full inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#129ee7] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#129ee7] group-hover:bg-[#129ee7]"></span>
              <span className="relative text-black group-hover:text-white">
                View Event
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
