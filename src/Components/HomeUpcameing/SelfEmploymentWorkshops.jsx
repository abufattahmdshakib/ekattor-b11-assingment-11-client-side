import React, { useEffect, useState } from "react";
import EventSection from "./EventSection";

const category = "Self-employment and entrepreneurship workshops";
const subtitle = "Empower yourself to succeed";

const SelfEmploymentWorkshops = ({ onEventClick }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/event-Data/upcoming")
      .then(res => res.json())
      .then(data => {
        setEvents(data.filter(e => e.category === category));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading {category}...</p>;
  if (!events.length) return <p>No upcoming {category} events found.</p>;

  return (
    <EventSection
      category={category}
      subtitle={subtitle}
      events={events}
      onClick={onEventClick}
    />
  );
};

export default SelfEmploymentWorkshops;
