import React from "react";

const EventDetailModal = ({ event, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-black rounded-lg max-w-lg w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &#x2715;
        </button>
        <h2 className="text-2xl text-black font-bold mb-4">{event.groupName}</h2>
        <img
          src={event.photo}
          alt={event.groupName}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <p className="text-black"><strong>Category: </strong>{event.category}</p>
        <p className="text-black"><strong>Description: </strong>{event.description || event.Description}</p>
        <p className="text-black"><strong>Location: </strong>{event.location}</p>
        <p className="text-black">
          <strong>Date: </strong>
          {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="text-black"><strong>Organizer: </strong>{event.organizer || event.name} ({event.contact || event.email})</p>
      </div>
    </div>
  );
};

export default EventDetailModal;

