import React from 'react';

const TrackOrder = () => {
    return (
        <div className=' my-3 row  mx-auto gy-3'>
            <div className=' col-12 col-lg-7 '>
                <img className='img-fluid w-75  mx-auto d-block' src='https://i.ibb.co/Y0PQDg2/Hnet-com-image-2.jpg' alt="" />
            </div>

            <div className=' col-12 col-lg-5 d-flex  align-items-center'>
                <div className='ms-5 '>
                    <h4>Track Your Sent Out <span className='text-danger'>Deliveries</span></h4>
                    <a className='bg-danger text-white px-5 py-1 border-0 rounded fs-5 btn mt-lg-3 mt-3' href='https://pathao.com/courier/'>Track
                        <span className='ms-2 '><i class="fa fa-thin fa-truck"></i></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TrackOrder;