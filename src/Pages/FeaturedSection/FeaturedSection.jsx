import React from "react";

const FeaturedSection = () => {
  return (
    <div className="mt-16">
      <h1 className="text-5xl font-bold text-[#129ee7] text-center pb-7">
        Feature
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="text-center rounded-2xl p-5 bg-base-300 space-y-2">
          <h2 className="text-2xl font-semibold">Join Upcoming Events</h2>
          <p className="text-base font-medium">
            Discover and participate in meaningful events that align with your
            passions.
          </p>
        </div>
        <div className="text-center rounded-2xl p-5 bg-base-300 space-y-2">
          <h2 className="text-2xl font-semibold">Create Your Own Events</h2>
          <p className="text-base font-medium">
            Easily host your own events to support social causes, raise
            awareness, or build local impact.
          </p>
        </div>
        <div className="text-center rounded-2xl p-5 bg-base-300 space-y-2">
          <h2 className="text-2xl font-semibold">Manage Your Events</h2>
          <p className="text-base font-medium">
            Track attendance, edit details, and monitor progress—all from your
            personalized dashboard.
          </p>
        </div>
        <div className="text-center rounded-2xl p-5 bg-base-300 space-y-2">
          <h2 className="text-2xl font-semibold">Update or Delete Events</h2>
          <p className="text-base font-medium">
            Need to make changes? Update event info or remove events anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
