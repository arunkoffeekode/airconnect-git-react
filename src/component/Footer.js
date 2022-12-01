import React from 'react'

function Footer() {
    return (
        <div>
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12 col-xl-3">
                            <div className="footer-links-1">
                                <div className="footer-title">
                                    <h5>About Us</h5>
                                </div>
                                <ul>
                                    <li><a href="#">Corporate Overview</a></li>
                                    <li><a href="#">Charter Request</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Media Center</a></li>
                                    <li><a href="#">Press Release</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-xl-3">
                            <div className="footer-links">
                                <div className="footer-title">
                                    <h5>Contact Us</h5>
                                </div>
                                <ul>
                                    <li><a href="#">Airports</a></li>
                                    <li><a href="#">Corporate Head Office</a></li>
                                    <li><a href="#">Advertise with Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 col-sm-12 col-xl-2">
                            <div className="footer-links-1">
                                <div className="footer-title">
                                    <h5>Info</h5>
                                </div>
                                <ul>
                                    <li><a href="#">Policies </a></li>
                                    <li><a href="#">Terms & Condition</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Feedback </a></li>
                                    <li><a href="#">Disclaimer </a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-xl-4">
                            <div className="footer-address">
                                <div className="address-title">
                                    <h5>Connect with us</h5>
                                </div>
                                <div className="socialfoot">
                                    <ul>
                                        <li><a target="_blank" href="#"><i className="fa fa-facebook fb"></i></a></li>
                                        <li><a target="_blank" href="#"><i className="fa fa-twitter yt"></i></a></li>
                                        <li><a target="_blank" href="#"><i className="fa fa-instagram insta"></i></a></li>
                                        <li><a target="_blank" href="#"><i className="fa fa-linkedin linked"></i></a></li>
                                        <li><a target="_blank" href="#"><i className="fa fa-google yt"></i></a></li>

                                    </ul>
                                </div>
                                <a href="https://api.whatsapp.com/send/?phone=911234567890&text&app_absent=0" target="_blank"
                                    className="whatsApp"><i className="fa fa-whatsapp" aria-hidden="true"></i> Chat via
                                    whatsApp</a>
                                <div className="call">
                                    <h6>For Reservations, kindly call us at:</h6>
                                    <div className="phone">
                                        <img src="images/phone.png" alt="" />
                                        <a href="tel:+91 1234567890">+91 1234567890</a>
                                    </div>
                                    <div className="phone">
                                        <img src="images/phone.png" alt="" />
                                        <a href="tel:+91 1234567890">+91 1234567890</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xl-8">
                            <div className="Subscribe">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter Your Email ID" />
                                    <button className="input-group-text">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xl-4">
                            <p>Download our mobile app</p>
                            <div className="app">

                                <a href="" className="mr-1"><img src="images/google-play.png" alt="" /></a>
                                <a href=""><img src="images/app-store.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div className="copy-right-content">
                                <p>© Copyright Ventura AirConnect 2022. All Right Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer