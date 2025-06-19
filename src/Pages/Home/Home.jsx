import React from 'react';
import NewsLetter from '../NewsLetter/NewsLetter';
import Banner from '../Banner/Banner';
import FeaturedSection from '../FeaturedSection/FeaturedSection';
import GallerySection from '../GallerySection/GallerySection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
            <GallerySection></GallerySection>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;