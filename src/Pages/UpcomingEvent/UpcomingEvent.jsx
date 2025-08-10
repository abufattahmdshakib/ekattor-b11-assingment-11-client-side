import React from "react";
import { useLoaderData } from "react-router-dom";
import UpcomingEventCard from "../UpcomingEventCard/UpcomingEventCard";
import { Helmet } from "react-helmet-async";

const UpcomingEvent = () => {
  const eventsData = useLoaderData();
  console.log(eventsData);

  if (!eventsData || eventsData.length === 0) {
    return <p className="text-center mt-20">No upcoming events found.</p>;
  }

  return (
    <div className="my-16 container mx-auto">
      <Helmet>
        <title>Ekattor | UpcomingEvent</title>
      </Helmet>
      <h2 className="text-green-800 text-center mb-12 pb-5 font-bold text-5xl">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {eventsData.map((eventData) => (
          <UpcomingEventCard key={eventData._id} eventData={eventData} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvent;
