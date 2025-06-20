import React from "react";
import { useLoaderData } from "react-router";
import UpcomingEventCard from "../UpcomingEventCard/UpcomingEventCard";
import { Helmet } from "react-helmet-async";

const UpcomingEvent = () => {
  const eventsData = useLoaderData();
  console.log(eventsData);
  return (
    <div className="my-16">
      <Helmet>
        <title>Ekattor | UpcomingEvent</title>
      </Helmet>
      <h2 className="text-green-800 text-center mb-12 pb-5 font-bold text-5xl">
        Upcoming Event
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {eventsData.map((eventData) => (
          <UpcomingEventCard
            key={eventData._id}
            eventData={eventData}
          ></UpcomingEventCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvent;
