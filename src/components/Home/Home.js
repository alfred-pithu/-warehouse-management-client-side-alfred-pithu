import React from 'react';
import HomeItemSection from '../HomeItemSection/HomeItemSection';

const Home = () => {
    return (
        <div className=' container '>

            {/* Banner */}
            <div className='mt-5 border border-1'>
                <img className=' d-block mx-auto img-fluid' src="https://i.ibb.co/tB9Lr54/resized-banner.png" alt="" />
            </div>

            {/* // Items */}
            <HomeItemSection></HomeItemSection>

        </div>
    );
};

export default Home;