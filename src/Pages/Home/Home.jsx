import React from 'react';
import NewsLetter from '../NewsLetter/NewsLetter';
import Banner from '../Banner/Banner';
import FeaturedSection from '../FeaturedSection/FeaturedSection';
import GallerySection from '../GallerySection/GallerySection';
import { Helmet } from 'react-helmet-async';
import PastEvents from '../../Components/PastMainPage/PastEvents';

// ঠিক path অনুযায়ী import করো
import CleanUpDrives from "../../Components/HomeUpcameing/CleanUpDrives";
import TreePlantationDrives from '../../Components/HomeUpcameing/TreePlantationDrives';
import BloodDonationCamps from '../../Components/HomeUpcameing/BloodDonationCamps';
import WaterSanitationProjects from '../../Components/HomeUpcameing/WaterSanitationProjects';
import RoadSafetyEducation from '../../Components/HomeUpcameing/RoadSafetyEducation';
import SanitationHygieneDrives from '../../Components/HomeUpcameing/SanitationHygieneDrives';
import HealthCamps from '../../Components/HomeUpcameing/HealthCamps';
import SelfEmploymentWorkshops from '../../Components/HomeUpcameing/SelfEmploymentWorkshops';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Ekattor | Home</title>
            </Helmet>
            <div className="my-8"><Banner /></div>
            <div className="my-8"><FeaturedSection /></div>
            <div className="my-8"><GallerySection /></div>
            <div className="my-8"><PastEvents /></div>
            
            {/* ৮টা ক্যাটাগরি সেকশন */}
            <div className="my-8"><CleanUpDrives /></div>
            <div className="my-8"><TreePlantationDrives /></div>
            <div className="my-8"><BloodDonationCamps /></div>
            <div className="my-8"><WaterSanitationProjects /></div>
            <div className="my-8"><RoadSafetyEducation /></div>
            <div className="my-8"><SanitationHygieneDrives /></div>
            <div className="my-8"><HealthCamps /></div>
            <div className="my-8"><SelfEmploymentWorkshops /></div>
            <div className="my-8"><NewsLetter /></div>
        </div>
    );
};

export default Home;
