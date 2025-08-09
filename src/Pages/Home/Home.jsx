import React from 'react';
import NewsLetter from '../NewsLetter/NewsLetter';
import Banner from '../Banner/Banner';
import FeaturedSection from '../FeaturedSection/FeaturedSection';
import GallerySection from '../GallerySection/GallerySection';
import { Helmet } from 'react-helmet-async';
import PastEvents from '../../Components/PastMainPage/PastEvents';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Ekattor | Home</title>
            </Helmet>
            <div className="my-8">
                <Banner />
            </div>
            <div className="my-8">
                <FeaturedSection />
            </div>
            <div className="my-8">
                <GallerySection />
            </div>
            <div className="my-8">
                <PastEvents />
            </div>
            <div className="my-8">
                <NewsLetter />
            </div>

        </div>
    );
};

export default Home;