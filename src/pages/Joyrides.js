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
            items: 2,
            nav: true,
            loop: true,
        },
    },
  };
function Joyrides() {
    return (
        <div>
            <section class="overview">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                        <div class="contact-title" style={{marginBottom: '40px'}}>
                            <h2>Joyrides</h2>
                        </div>
                    </div>
                </div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="images/gallery/Joyrides.png" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="images/gallery/Joyrides.png" alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="images/gallery/Joyrides.png" alt="Third slide"/>
                        </div>
                    </div>
                </div>


            </section>

            <section class="home-page-second-section bg-white">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                        <OwlCarousel className='owl-carousel owl-theme' loop margin={10} items={2} nav autoplay={true}  {...options}>
                                <div class="item">
                                    <div class="Joyrides-section">
                                        <img src="images/Joyrides-1.png" alt=""/>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="Joyrides-section">
                                        <img src="images/Joyrides-2.png" alt=""/>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="Joyrides-section">
                                        <img src="images/Joyrides-1.png" alt=""/>
                                    </div>
                                </div>

                                </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

            <section class="Joyrides">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div class="main-title-black">
                                <h2>Joyrides</h2>
                            </div>
                            <p>There is nothing quite like the sensation of hovering and flying in a helicopter. Spend
                                memorable/romantic moments admiring breath-taking bird’s eye view of cities and other
                                geographical features from a few thousand feet above ground. Enjoy the moments and make your
                                loved ones feel special. You can see all famous spots of that place by booking joy rides. This
                                is a very unique experience that you will remember for a lifetime. Whether you are celebrating
                                an anniversary or a birthday, a proposal, taking children up in the air, this would be ideal for
                                you.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="book-time">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div class="main-title-black">
                                <h2>Bookings & Timings</h2>
                            </div>
                            <div class="slot">
                                <ul>
                                    <li>● Available Slots: 8:00 am to 5:00 pm (inclusive of all weekdays)</li>
                                    <li> ● Location: Surat</li>
                                    <li> Take follow-ups via a quick call or drop us an email to book your rides in advance and
                                        to know about the pricing structure.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div class="form-section">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputName">No of Passengers</label>
                                            <input type="text" class="form-control" id="inputName"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPhone">Joy ride in</label>
                                            <select name="" id="" class="form-control">
                                                <option value="1" selected>Surat (STV)</option>
                                                <option value="2">AMRELI (CITS/XAM)</option>
                                                <option value="3">Bhavnagar (BHU)</option>
                                                <option value="4">Indore (IDR)</option>
                                                <option value="5">Khajuraho (HJR)</option>
                                                <option value="6">rajkot (RAJ)</option>
                                                <option value="7">Shirdi (SAG)</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail">Date</label>
                                            <input type="date" class="form-control" id="date"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail">time</label>
                                            <select name="" id="" class="form-control">
                                                <option value="1" selected>20 minute</option>
                                                <option value="2">30 minute</option>
                                                <option value="3">40 minute</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail">Contact person</label>
                                            <input type="text" class="form-control" id="inputEmail"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail">Mobile number </label>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <select name="" id="" class="form-control">
                                                        <option value="1" selected>+91</option>
                                                        <option value="2">+90</option>
                                                        <option value="3">+91</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-8">
                                                    <input type="text" class="form-control" id="inputEmail"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail">Email ID</label>
                                            <input type="email" class="form-control" id="inputEmail"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail">occasion</label>
                                            <select name="" id="" class="form-control">
                                                <option value="1" selected>Anniversary</option>
                                                <option value="2">birthday celebration</option>
                                                <option value="3">proposa</option>
                                                <option value="4">something fun</option>
                                                <option value="5">weddings</option>
                                                <option value="6">charity</option>
                                                <option value="7">other</option>
                                            </select>
                                        </div>


                                        <div class="form-group col-md-12">
                                            <div class="quot">
                                                <div class="sky-cloud">
                                                    <img src="images/cloud-bg.png" alt=""/>
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
            </section>

            <section class="Gallery">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <div class="main-title-black">
                                <h2>Gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12">
                            <div class="Gallery-image">
                                <a href="images/gallery/gallery-1.png" data-lightbox="models" data-title="Gallery">
                                    <img src="images/gallery/gallery-1.png"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12">
                            <div class="Gallery-image">
                                <a href="images/gallery/gallery-2.png" data-lightbox="models" data-title="Gallery">
                                    <img src="images/gallery/gallery-2.png"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12">
                            <div class="Gallery-image">
                                <a href="images/gallery/gallery-3.png" data-lightbox="models" data-title="Gallery">
                                    <img src="images/gallery/gallery-3.png"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12">
                            <div class="Gallery-image">
                                <a href="images/gallery/gallery-4.png" data-lightbox="models" data-title="Gallery">
                                    <img src="images/gallery/gallery-4.png"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12">
                            <div class="Gallery-image">
                                <a href="images/gallery/gallery-5.png" data-lightbox="models" data-title="Gallery">
                                    <img src="images/gallery/gallery-5.png"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12">
                            <div class="Gallery-image">
                                <a href="images/gallery/gallery-6.png" data-lightbox="models" data-title="Gallery">
                                    <img src="images/gallery/gallery-6.png"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12">
                            <div class="Gallery-image">
                                <a href="images/gallery/gallery-7.png" data-lightbox="models" data-title="Gallery">
                                    <img src="images/gallery/gallery-7.png"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12">
                            <div class="Gallery-image">
                                <a href="images/gallery/gallery-8.png" data-lightbox="models" data-title="Gallery">
                                    <img src="images/gallery/gallery-8.png"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12">
                            <div class="Gallery-image">
                                <a href="images/gallery/gallery-9.png" data-lightbox="models" data-title="Gallery">
                                    <img src="images/gallery/gallery-9.png"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12">
                            <div class="Gallery-image">
                                <a href="images/gallery/gallery-10.png" data-lightbox="models" data-title="Gallery">
                                    <img src="images/gallery/gallery-10.png"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12">
                            <div class="Gallery-image">
                                <a href="images/gallery/gallery-11.png" data-lightbox="models" data-title="Gallery">
                                    <img src="images/gallery/gallery-11.png"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12">
                            <div class="Gallery-image">
                                <a href="images/gallery/gallery-12.png" data-lightbox="models" data-title="Gallery">
                                    <img src="images/gallery/gallery-12.png"/>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section class="youtube">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <div class="content">
                                <h5>Experiences</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fusce donec turpis in
                                    ut. Cras consectetur feugiat ridiculus amet, in est feugiat sed. A faucibus turpis dictumst
                                    et enim sit et parturient ornare. Porta pretium sem sem in ultricies tortor vel vitae diam.
                                    Aliquet tortor ac magna vitae sem purus cursus augue. Blandit vitae, nibh mattis orci massa
                                    montes. Dolor, consectetur vel nunc ut nunc morbi. Purus neque sed eu nisi vestibulum
                                    bibendum porttitor purus diam. Sit quis lectus velit est metus nec vulputate.</p>
                            </div>

                        </div>
                        <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12">
                            <div class="checkout-form-centre">
                                <div class="checkout-login-step">
                                    <div class="youtube-box">
                                        <a href="" target="_blank"><img src="images/video.jpg" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12">
                            <div class="checkout-form-centre">
                                <div class="checkout-login-step">
                                    <div class="youtube-box">
                                        <a href="" target="_blank"><img src="images/video.jpg" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12">
                            <div class="checkout-form-centre">
                                <div class="checkout-login-step">
                                    <div class="youtube-box">
                                        <a href="" target="_blank"><img src="images/video.jpg" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12">
                            <div class="checkout-form-centre">
                                <div class="checkout-login-step">
                                    <div class="youtube-box">
                                        <a href="" target="_blank"><img src="images/video.jpg" alt=""/></a>
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

export default Joyrides