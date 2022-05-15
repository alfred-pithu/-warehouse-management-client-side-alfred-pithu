import React from 'react';
import ContactSupplier from '../ContactSupplier/ContactSupplier';
import HomeItemSection from '../HomeItemSection/HomeItemSection';
import TrackOrder from '../TrackOrder/TrackOrder';

const Home = () => {
    return (
        <div className=' container '>

            {/* Banner */}
            <div className='mt-5  pt-5'>
                <img className=' d-block mx-auto img-fluid' src="https://i.ibb.co/tB9Lr54/resized-banner.png" alt="" />
            </div>

            {/* // Items */}
            <HomeItemSection></HomeItemSection>

            <TrackOrder></TrackOrder>

            <ContactSupplier></ContactSupplier>

        </div>
    );
};

export default Home;