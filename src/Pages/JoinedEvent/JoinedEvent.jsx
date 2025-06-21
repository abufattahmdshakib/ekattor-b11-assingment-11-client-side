import React, { useContext, useEffect, useState } from "react";
import JoinedEventCard from "../JoinedEventCard/JoinedEventCard";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const JoinedEvent = () => {
  // fetch("https://ekattor-server-side.vercel.app/join-user")
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [joinedEvent, setJoinedEvent] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get("join-user")
        .then((response) => {
          setJoinedEvent(response.data || []);
          console.log(response);
        })
        .catch((error) => {
          console.error("Error fetching event data:", error);
          setJoinedEvent([]);
        });
    }
  }, [user?.email, axiosSecure]);

  return (
    <div className="my-16">
      <Helmet>
        <title>Ekattor | ManageEvent</title>
      </Helmet>
      <h2 className="text-green-800 text-center pb-5 font-bold text-5xl">
        Joined Event
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
        {joinedEvent.map((joinEvent) => (
          <JoinedEventCard
            key={joinEvent._id}
            joinEvent={joinEvent}
          ></JoinedEventCard>
        ))}
      </div>
    </div>
  );
};

export default JoinedEvent;
