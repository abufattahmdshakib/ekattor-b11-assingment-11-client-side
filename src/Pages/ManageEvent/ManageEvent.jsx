import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import ManageEventCard from "../ManageEventCard/ManageEventCard";
// import axios from "axios";
import useAxiosSecure from "../Hooks/UseAxiosSecure";

const ManageEvent = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [manageEvent, setManageEvent] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`users/${user.email}`)
        .then((response) => {
          setManageEvent(response.data || []);
          console.log(response);
        })
        .catch((error) => {
          console.error("Error fetching event data:", error);
          setManageEvent([]);
        });
    }
  }, [user?.email, axiosSecure]);

  return (
    <div className="p-5 my-16">
      <h2 className="text-[#129ee7] text-center pb-5 font-bold text-5xl">
        Manage Event
      </h2>
      {manageEvent.length === 0 ? (
        <p className="text-gray-500">No Events Found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {manageEvent.map((events) => (
            <ManageEventCard
              key={events._id}
              manageEvent={manageEvent}
              setManageEvent={setManageEvent}
              events={events}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageEvent;
