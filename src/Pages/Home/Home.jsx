import React from 'react';
import Banner from '../../Components/Banner/Banner';
import SocialPromot from '../../Components/SocialPromot/SocialPromot';
import CustomExperience from '../../Components/44CustomExperience/CustomExperience';
import PromotSection from '../../Components/PromotSection/PromotSection';

const Home = () => {
    return (
        <div>
            {/* <Banner /> */}
            <SocialPromot />
            <CustomExperience />
            <PromotSection />
        </div>
    );
};

export default Home;