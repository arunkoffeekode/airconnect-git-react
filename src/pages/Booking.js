import React from 'react'

function Booking() {
    return (
        <div>
            <section className="booking-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-xl-6 col-sm-12">
                            <div className="booking-top-left">
                                <div className="date-city">
                                    <div className="booking-date">Thursday,31 Mar, 2022</div>
                                    <div className="city">Ahmedabad</div>
                                </div>
                                <div className="book-img">
                                    <button type="button"><img src="images/white-swap.png" alt="" /></button>
                                </div>
                                <div className="date-city">
                                    <div className="booking-date">Thursday,31 Mar, 2022</div>
                                    <div className="city">Surat</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-xl-6 col-sm-12">
                            <div className="adult">
                                <h3>1 Adult</h3>
                                <button className="btn"><i className="fa fa-pencil"></i> Edit</button>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mt-3">
                            <div className="steps">
                                <div className="step-row">
                                    <p>Select Flight</p>
                                    <div className="name"></div>
                                </div>
                                <div className="step-row">
                                    <p>Pax Info</p>
                                    <div className="name"></div>
                                </div>
                                <div className="step-row">
                                    <p>Payment</p>
                                    <div className="name"></div>
                                </div>
                                <div className="step-row">
                                    <p>Confurmation</p>
                                    <div className="name"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="booking-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xl-8">
                            <div className="route">
                                <div className="rupee">
                                    <div className="logo-icon">
                                        <img src="images/icon-logo.png" alt="" />
                                        <div className="title">VA904</div>
                                    </div>
                                    <div className="green-button">
                                        <button type="button" className="sr-btn"
                                            style={{ background: 'url(images/green-btn.png) no-repeat center center', backgroundSize: 'cover' }}>
                                            ₹ 2222.00</button>
                                    </div>
                                </div>
                                <div className="swap-route">
                                    <div className="display-line">
                                        <div className="left-route">
                                            <div className="block">
                                                <div className="date">
                                                    Thursday,31 Mar, 2022
                                                </div>
                                                <h6>Ahmedabad</h6>
                                                <div className="time">Departure: 07:20</div>
                                            </div>
                                        </div>
                                        <div className="swap-icon">
                                            <button type="button"><img src="images/swap.png" alt="" /></button>
                                        </div>
                                        <div className="right-route">
                                            <div className="block1">
                                                <div className="date1">
                                                    Thursday,31 Mar, 2022
                                                </div>
                                                <h6>Surat</h6>
                                                <div className="time1">Arrival: 08:40</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="duration">
                                        <div className="blck">
                                            <p>Duration</p>
                                            <h6>0h 70m</h6>
                                        </div>
                                        <div className="status1">
                                            <p>Status</p>
                                            <h6>Direct</h6>
                                        </div>

                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                <div className="social-icon">
                                    <div className="dropdown" style={{ marginRight: '20px' }}>
                                        <button type="button" className="btn icon-result dropdown-toggle" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Details
                                        </button>

                                    </div>
                                    <div className="share1">
                                        <ul className="wishlistShare">
                                            <li className="share-icon" style={{ position: 'relative' }}><i className="fa fa-share-alt"
                                                aria-hidden="true">
                                                <div className="shareSites">
                                                    <ul>
                                                        <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                                                        </li>

                                                        <li className="whatsup-icon"> <a href="#" target="_blank"><i
                                                            className="fa fa-whatsapp"></i></a></li>
                                                    </ul>
                                                </div>
                                            </i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="route">
                                <div className="rupee">
                                    <div className="logo-icon">
                                        <img src="images/icon-logo.png" alt="" />
                                        <div className="title">VA904</div>
                                    </div>
                                    <div className="green-button">
                                        <button type="button" className="btn-sr">
                                            ₹ 2222.00</button>
                                    </div>
                                </div>
                                <div className="swap-route">
                                    <div className="display-line">
                                        <div className="left-route">
                                            <div className="block">
                                                <div className="date">
                                                    Thursday,31 Mar, 2022
                                                </div>
                                                <h6>Ahmedabad</h6>
                                                <div className="time">Departure: 07:20</div>
                                            </div>
                                        </div>
                                        <div className="swap-icon">
                                            <button type="button"><img src="images/swap.png" alt="" /></button>
                                        </div>
                                        <div className="right-route">
                                            <div className="block1">
                                                <div className="date1">
                                                    Thursday,31 Mar, 2022
                                                </div>
                                                <h6>Surat</h6>
                                                <div className="time1">Arrival: 08:40</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="duration">
                                        <div className="blck">
                                            <p>Duration</p>
                                            <h6>0h 70m</h6>
                                        </div>
                                        <div className="status1">
                                            <p>Status</p>
                                            <h6>Direct</h6>
                                        </div>

                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                <div className="social-icon">
                                    <div className="dropdown" style={{ marginRight: '20px' }}>
                                        <button type="button" className="btn icon-result dropdown-toggle" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Details
                                        </button>

                                    </div>
                                    <div className="share1">
                                        <ul className="wishlistShare">
                                            <li className="share-icon" style={{ position: 'relative' }}><i className="fa fa-share-alt"
                                                aria-hidden="true">
                                                <div className="shareSites">
                                                    <ul>
                                                        <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                                                        </li>

                                                        <li className="whatsup-icon"> <a href="#" target="_blank"><i
                                                            className="fa fa-whatsapp"></i></a></li>
                                                    </ul>
                                                </div>
                                            </i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flight-depart">
                                    <div className="display-depart">
                                        <div className="left-depart">
                                            <p>Depart</p>
                                            <img src="images/plane.png" alt="" />
                                            <span>Thursday,31 Mar, 2022</span>
                                        </div>
                                    </div>
                                    <div className="display-depart12">
                                        <div className="direct">
                                            direct
                                        </div>
                                        <div className="minute">70 mins</div>
                                    </div>
                                </div>
                                <div className="kilometer">
                                    <div className="miter">
                                        <div className="left-kilometer">
                                            <h6 style={{ marginBottom: '112px' }}>07:20</h6>
                                            <h6>08:40</h6>
                                        </div>

                                        <img src="images/range.png" alt="" />
                                        <div>
                                            <div className="state-name" style={{ marginBottom: '35px' }}>
                                                Ahmedabad <span>, Gujarat</span>
                                            </div>
                                            <h6 style={{ marginBottom: '45px' }}>KLM : flight 5792 : 0h 70m</h6>
                                            <div className="state-name">
                                                Surat <span>, Gujarat</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="route">
                                <div className="rupee">
                                    <div className="logo-icon">
                                        <img src="images/icon-logo.png" alt="" />
                                        <div className="title">VA904</div>
                                    </div>
                                    <div className="green-button">
                                        <button type="button" className="btn-sr">
                                            ₹ 2222.00</button>
                                    </div>
                                </div>
                                <div className="swap-route">
                                    <div className="display-line">
                                        <div className="left-route">
                                            <div className="block">
                                                <div className="date">
                                                    Thursday,31 Mar, 2022
                                                </div>
                                                <h6>Ahmedabad</h6>
                                                <div className="time">Departure: 07:20</div>
                                            </div>
                                        </div>
                                        <div className="swap-icon">
                                            <button type="button"><img src="images/swap.png" alt="" /></button>
                                        </div>
                                        <div className="right-route">
                                            <div className="block1">
                                                <div className="date1">
                                                    Thursday,31 Mar, 2022
                                                </div>
                                                <h6>Surat</h6>
                                                <div className="time1">Arrival: 08:40</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="duration">
                                        <div className="blck">
                                            <p>Duration</p>
                                            <h6>0h 70m</h6>
                                        </div>
                                        <div className="status1">
                                            <p>Status</p>
                                            <h6>Direct</h6>
                                        </div>

                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                <div className="social-icon">
                                    <div className="dropdown" style={{ marginRight: '20px' }}>
                                        <button type="button" className="btn icon-result dropdown-toggle" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Details
                                        </button>

                                    </div>
                                    <div className="share1">
                                        <ul className="wishlistShare">
                                            <li className="share-icon" style={{ position: 'relative' }}><i className="fa fa-share-alt"
                                                aria-hidden="true">
                                                <div className="shareSites">
                                                    <ul>
                                                        <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                                                        </li>

                                                        <li className="whatsup-icon"> <a href="#" target="_blank"><i
                                                            className="fa fa-whatsapp"></i></a></li>
                                                    </ul>
                                                </div>
                                            </i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xl-4">
                            <div className="trip-summury">
                                <div className="summury-title">
                                    Your Trip summury
                                </div>
                                <div className="summury-details">
                                    <h3>Outbound</h3>
                                    <div className="bound">
                                        <p>Ahmedabad To Surat</p>
                                        <p>Thursday,31 Mar, 2022, 07:20</p>
                                    </div>
                                </div>
                                <div className="all-amount">
                                    <span>All Amount in INR</span>
                                    <div className="fee">
                                        <div className="first-caculate">
                                            <h6>base fare + Fuel Charge:</h6>
                                            <p>1 Adult @ INR 2116.00</p>
                                        </div>
                                        <div className="second-caculate">
                                            <span>(Fare Rules)</span>
                                            <div className="amount">2116.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="all-amount">
                                    <div className="fee" style={{ marginTop: '0px' }}>
                                        <div className="first-caculate">
                                            <h6>Taxes and Fees:</h6>
                                            <p>GST(GS)</p>
                                        </div>
                                        <div className="second-caculate">
                                            <span style={{ visibility: 'hidden' }}>()</span>
                                            <div className="amount">106.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="total">
                                    <div className="sub-total">Sub Total [OUTBOUND]</div>
                                    <div className="inr">INR 2222.00</div>
                                </div>
                            </div>
                            <div className="total-amount-inr">
                                <div className="inr-center">
                                    <p>Total Amount :</p>
                                    <h3>INR 22212222.00</h3>
                                </div>
                                <div className="booking-button">
                                    <div className="sky-cloud1">
                                        <img src="images/cloud-bg.png" alt="" />
                                    </div>
                                    <button type="button" className="booking-btn">Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Booking