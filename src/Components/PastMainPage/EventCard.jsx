import React from "react";

const EventCard = ({ event, onClick = () => {} }) => {
  const imageSrc = event.photo && event.photo.trim() !== "" 
    ? event.photo 
    : "https://via.placeholder.com/400x200?text=No+Image"; // fallback image

  return (
    <div
      className="border rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
      onClick={() => onClick(event)}
    >
      {imageSrc && (
        <img 
          src={imageSrc} 
          alt={event.groupName || "Event"} 
          className="w-full h-48 object-cover" 
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{event.groupName}</h3>
        <div className="flex items-center mt-2 text-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 16h-1v-4h-1m1-4h.01M12 12h.01" 
            />
          </svg>
          <span>Details</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
