import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid mt-5'>
            <footer class="text-center text-lg-start bg-light text-muted">
                <section
                    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >

                    <div className='mx-auto'>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-linkedin"></i>
                        </a>

                    </div>
                </section>

                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">

                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>Ishop Inc
                                </h6>

                            </div>



                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="" class="text-reset">Macbook</a>
                                </p>
                                <p>
                                    <a href="" class="text-reset">Ipad</a>
                                </p>
                                <p>
                                    <a href="" class="text-reset">Iphone</a>
                                </p>
                                <p>
                                    <a href="" class="text-reset">Ipod</a>
                                </p>
                            </div>


                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful Infos
                                </h6>
                                <p><i class="fas fa-home me-3"></i> Dhaka , Bangladesh</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    alfredpithu@gmail.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> 01777777777</p>
                                <p><i class="fas fa-print me-3"></i> 01777777777</p>
                            </div>

                        </div>
                    </div>
                </section>

                <div class="text-center p-4" >
                    © 2021 Copyright:
                    <a class="text-reset fw-bold" href="https://www.facebook.com/pithubiswas/">Alfred Pithu</a>
                </div>
            </footer>
        </div >
    );
};

export default Footer;