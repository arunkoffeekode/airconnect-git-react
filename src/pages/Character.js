import React from 'react'
import OwlCarousel from 'react-owl-carousel';

//Owl Carousel Settings
const options = {
    loop: true,
    dots: false,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    smartSpeed: 70,
    responsiveClass: true,
    // navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navigation: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 2,
            nav: true,
        },
        1000: {
            items: 3,
            nav: true,
            loop: true,
        },
    },
};

function Character() {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="images/private-character-slider.png" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="images/private-character-slider.png" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="images/private-character-slider.png" alt="First slide" />
                    </div>
                </div>
            </div>

            <div className='private-box'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12 col-sm-12 col-xl-7'>
                            <div className='private-char-box'>
                                <div className='characher-form-section'>
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="inputName">Contact person</label>
                                                <input type="text" class="form-control" id="inputName" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="inputEmail">Email ID</label>
                                                <input type="email" class="form-control" id="inputEmail" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="inputEmail">Phone No.</label>
                                                <input type="email" class="form-control" id="inputEmail" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail">Departure Date</label>
                                                <input type="date" class="form-control" id="inputEmail" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail">Departure Time</label>
                                                <input type="time" class="form-control" id="inputEmail" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="inputEmail">City</label>
                                                <select name="" id="" class="form-control">
                                                    <option value="1" selected>Surat</option>
                                                    <option value="2">Ahmedabad</option>
                                                    <option value="3">AMRELI</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail">Passenger</label>
                                                <input type="number" class="form-control" id="inputEmail" />
                                            </div>

                                            <div class="form-group col-md-12">
                                                <div class="quot">
                                                    <div class="sky-cloud">
                                                        <img src="images/cloud-bg.png" alt="" />
                                                    </div>
                                                    <button type="button" class="sky-btn">Get Quote</button>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="private-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div className="flight-details" style={{ boxShadow: 'none' }}>
                                <h1>PRIVATE JET CHARTER AT THE BEST PRICES BY AIR CHARTER SERVICE</h1>
                                <p>Safety, security and privacy are the three hallmarks of SpiceShuttle Charter. SpiceShuttles’ 14-seater chartered flights are meant for business as well as leisure travellers, and offer an unmatched flying pleasure within one’s own personal space. High fliers who seek to book an exhilarating private flying experience can book the entire seaplane for themselves.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <OwlCarousel className='owl-carousel owl-theme' loop margin={10} items={3} nav autoplay={true} {...options}>
                                <div className="item">
                                    <div className="home-page-services12">
                                        <img src="images/flight-1.png" alt="" />
                                        <div className="location">
                                            <div className="left-section">
                                                <h6>Airto VA904</h6>
                                                <p>Range: 2500 nm</p>
                                            </div>
                                            <div className="right-section">
                                                <div className="dropdown">
                                                    <button type="button" className="btn btn-result dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                        READ MORE...
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="home-page-services12">
                                        <img src="images/flight-2.png" alt="" />
                                        <div className="location">
                                            <div className="left-section">
                                                <h6>Airto VA904</h6>
                                                <p>Range: 2500 nm</p>
                                            </div>
                                            <div className="right-section">
                                                <div className="dropdown">
                                                    <button type="button" className="btn btn-result dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                        READ MORE...
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="home-page-services12">
                                        <img src="images/flight-3.png" alt="" />
                                        <div className="location">
                                            <div className="left-section">
                                                <h6>Airto VA904</h6>
                                                <p>Range: 2500 nm</p>
                                            </div>
                                            <div className="right-section">
                                                <div className="dropdown">
                                                    <button type="button" className="btn btn-result dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                        READ MORE...
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="home-page-services12">
                                        <img src="images/flight-1.png" alt="" />
                                        <div className="location">
                                            <div className="left-section">
                                                <h6>Airto VA904</h6>
                                                <p>Range: 2500 nm</p>
                                            </div>
                                            <div className="right-section">
                                                <div className="dropdown">
                                                    <button type="button" className="btn btn-result dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                        READ MORE...
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flyairconnect">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xl-6">
                            <div className="about-flyairconnect">
                                <h5><span>About</span> flyairconnect</h5>
                                <h3>Take Your Loved Ones on a Long Drive, Not in a Car But in a Private Aircraft</h3>
                                <p>Safety, security and privacy are the three hallmarks of SpiceShuttle Charter. SpiceShuttles’ 14-seater chartered flights are meant for business as well as leisure travellers, and offer an unmatched flying pleasure within one’s own personal space. High fliers who seek to book an exhilarating private flying experience can book the entire seaplane for themselves.</p>
                                <div className="btn-section">
                                    <div className="sky-cloud">
                                        <img src="images/cloud-bg.png" alt="" />
                                    </div>
                                    <button type="button" className="sky-btn">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xl-6">
                            <div className="flyairconnect-image">
                                <img src="images/flyconnect.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="youtube">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <div className="content">
                                <h5>PRIVATE CHARTERS</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fusce donec turpis in
                                    ut. Cras consectetur feugiat ridiculus amet, in est feugiat sed. A faucibus turpis dictumst
                                    et enim sit et parturient ornare. Porta pretium sem sem in ultricies tortor vel vitae diam.
                                    Aliquet tortor ac magna vitae sem purus cursus augue. Blandit vitae, nibh mattis orci massa
                                    montes. Dolor, consectetur vel nunc ut nunc morbi. Purus neque sed eu nisi vestibulum
                                    bibendum porttitor purus diam. Sit quis lectus velit est metus nec vulputate.</p>
                                <p> Sed magna faucibus in mauris, egestas non amet, a. Cursus eros id purus proin tellus non.
                                    Turpis adipiscing volutpat consequat morbi elit erat nec commodo turpis. Dignissim nam amet
                                    amet neque a a ut a pellentesque. A aenean nec in tortor. Scelerisque praesent sit integer
                                    proin molestie viverra vivamus. Fusce mi porta amet.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <div className="checkout-form-centre">
                                <div className="checkout-login-step">
                                    <div className="youtube-box">
                                        <a href="" target="_blank"><img src="images/video.jpg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Character