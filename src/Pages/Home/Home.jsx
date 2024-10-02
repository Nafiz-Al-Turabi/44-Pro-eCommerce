import React from 'react';
import Banner from '../../Components/Banner/Banner';
import SocialPromot from '../../Components/SocialPromot/SocialPromot';
import CustomExperience from '../../Components/44CustomExperience/CustomExperience';
import PromotSection from '../../Components/PromotSection/PromotSection';
import PlayerComments from '../../Components/PlayerComments/PlayerComments';
import InstagramXContact from '../../Components/InstagramXContact/InstagramXContact';

const Home = () => {
    return (
        <div>
            {/* <Banner /> */}
            <SocialPromot />
            <CustomExperience />
            <PromotSection />
            <PlayerComments />
            <InstagramXContact />
        </div>
    );
};

export default Home;