import React from 'react';

const ContactSupplier = () => {
    return (

        <div className=' my-5 row  mx-auto gy-3' id='supplier'>


            <div className=' col-12 col-lg-5 d-flex  align-items-center '>
                <div className='ms-5 '>
                    <h4>Contact Your <span className='' style={{ color: 'rgb(258,99,71)' }}>Supplier</span></h4>

                    <a style={{ backgroundColor: 'rgb(255,99,95)' }} className=' text-white px-5 py-1 border-0 rounded fs-5 btn mt-lg-3 mt-3' href='https://www.apple.com/contact/#:~:text=You%20can%20buy%20online%20or,800%E2%80%93692%E2%80%937753).'>Contact
                        <span className='ms-2 '><i class="fa fa-brands fa-apple"></i></span>
                    </a>
                </div>
            </div>

            <div className=' col-12 col-lg-7  '>
                <img className='img-fluid w-75 mx-auto d-block ' src='https://i.ibb.co/vqCJ4pJ/Hnet-com-image-4.jpg' alt="" />
            </div>
        </div>

    );
};

export default ContactSupplier;