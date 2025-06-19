import React from "react";

const JoinedEventCard = ({ joinEvent }) => {
  const { groupName, photo, category } = joinEvent;
  return (
    <div className="card bg-base-300 rounded-2xl mx-auto shadow-2xl">
      <figure>
        <img
          src={photo}
          alt="Shoes"
          className="rounded-xl w-[500px] h-[400px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{groupName}</h2>
        <p>
          {category}
        </p>
      </div>
    </div>
  );
};

export default JoinedEventCard;
