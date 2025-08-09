import React, { useEffect, useState } from "react";
// import axios from "axios";
import EventCard from "./EventCard";

const PastEvents = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/event-Data/past")
            .then((res) => res.json())
            .then((data) => {
                setEvents(data.slice(0, 3));
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to load past events:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading past events...</p>;

    if (!events.length) return <p>No past events found.</p>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold  text-center text-green-800">Recently held community events and initiatives</h2>
            <p className="text-center mb-8">Take a closer look at the community events and initiatives that we have recently undertaken to make a positive impact.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {events.map((event) => (
                    <EventCard key={event._id} event={event} onClick={setSelectedEvent} />
                ))}
            </div>

            {selectedEvent && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
                    onClick={() => setSelectedEvent(null)}
                >
                    <div
                        className="bg-white rounded-lg max-w-lg w-full p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                            onClick={() => setSelectedEvent(null)}
                        >
                            &#x2715;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{selectedEvent.groupName}</h2>
                        <img
                            src={selectedEvent.photo}
                            alt={selectedEvent.groupName}
                            className="w-full h-64 object-cover mb-4 rounded"
                        />
                        <p><strong>Type: </strong>{selectedEvent.category}</p>
                        <p><strong>Description: </strong>{selectedEvent.Description}</p>
                        <p><strong>Location: </strong>{selectedEvent.location}</p>
                        <p>
                            <strong>Date: </strong>
                            {new Date(selectedEvent.date).toLocaleDateString()}
                        </p>
                        <p><strong>Organizer: </strong>{selectedEvent.name} ({selectedEvent.email})</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PastEvents;

