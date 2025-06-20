import React from 'react';
import NewsLetter from '../NewsLetter/NewsLetter';
import Banner from '../Banner/Banner';
import FeaturedSection from '../FeaturedSection/FeaturedSection';
import GallerySection from '../GallerySection/GallerySection';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Ekattor | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
            <GallerySection></GallerySection>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;