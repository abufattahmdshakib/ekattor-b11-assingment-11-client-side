import React, { useState, useEffect } from "react";

import CleanUpDrives from "./CleanUpDrives";
import TreePlantationDrives from "./TreePlantationDrives";
import BloodDonationCamps from "./BloodDonationCamps";
import WaterSanitationProjects from "./WaterSanitationProjects";
import RoadSafetyEducation from "./RoadSafetyEducation";
import SanitationHygieneDrives from "./SanitationHygieneDrives";
import HealthCamps from "./HealthCamps";
import SelfEmploymentWorkshops from "./SelfEmploymentWorkshops";

import EventDetailModal from "./EventDetailModal";

const MainPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

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

  return (
    <div>
      <CleanUpDrives onEventClick={setSelectedEvent} />
      <TreePlantationDrives onEventClick={setSelectedEvent} />
      <BloodDonationCamps onEventClick={setSelectedEvent} />
      <WaterSanitationProjects onEventClick={setSelectedEvent} />
      <RoadSafetyEducation onEventClick={setSelectedEvent} />
      <SanitationHygieneDrives onEventClick={setSelectedEvent} />
      <HealthCamps onEventClick={setSelectedEvent} />
      <SelfEmploymentWorkshops onEventClick={setSelectedEvent} />

      {selectedEvent && (
        <EventDetailModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default MainPage;
