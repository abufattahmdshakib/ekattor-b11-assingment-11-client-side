import React, { useEffect, useState } from "react";
import EventCard from "../PastMainPage/EventCard";

export default function EventsSection  ({
    hasFilter = true,
    filterCategory,
    sectionName,
    title,
    subTitle,
    api = "http://localhost:3000/event-Data/upcoming",
}) {


    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${api}`)
            .then((res) => res.json())
            .then((data) => {
                if (hasFilter) {
                    const filteredEvents = data.filter(
                        (e) => e.category?.toLowerCase() === filterCategory.toLowerCase()
                    );
                    setEvents(filteredEvents.slice(0, 4));
                    setLoading(false);
                } else {
                    setEvents(data.slice(0, 4));
                    setLoading(false)
                }

            })
            .catch((err) => {
                console.error("Failed to load upcoming events:", err);
                setLoading(false);
            });
    }, []);

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (selectedEvent) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedEvent]);

    if (loading) return <p>Loading {sectionName}  events Data...</p>;
    if (!events.length) return <p>No {sectionName} events found.</p>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center text-green-800">
                {title}

            </h2>
            <p className="text-center mb-8">
                {subTitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {events.map((event) => (
                    <EventCard key={event._id} event={event} onClick={setSelectedEvent} />
                ))}
            </div>

            {selectedEvent && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
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
