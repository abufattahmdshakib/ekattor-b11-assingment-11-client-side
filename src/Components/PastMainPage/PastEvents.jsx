import React from 'react'
import EventsSection from '../HomeUpcameing/EventSection'

function PastEvents() {
  return (
    <EventsSection 
    api='https://ekattor-server-side.vercel.app/event-Data/past'
    hasFilter= {false}
    sectionName={"past events"}
    title={"Recently held community events and initiatives"}
    subTitle={"Take a closer look at the community events and initiatives that we have recently undertaken to make a positive impact."}
    
    />
  )
}

export default PastEvents