import React from "react";
import EventCard from "../PastMainPage/EventCard";


const EventSection = ({ category, subtitle, events, onClick }) => {
  return (
    <section className="mb-12 container mx-auto p-4">
      <h2 className="text-2xl font-bold text-green-800 mb-1">{category}</h2>
      <p className="mb-4 text-green-600">{subtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {events.slice(0, 4).map((event) => (
          <EventCard key={event._id || event.id} event={event} onClick={onClick} />
        ))}
      </div>
    </section>
  );
};

export default EventSection;
