import React from 'react'

function FlightBooking1() {
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
                            <div className="flight-review">
                                <a href="#demo4" className="btn show" data-toggle="collapse" aria-expanded="true">Review your flight
                                    <i className="fa fa-angle-down"></i></a>
                                <div id="demo4" className="collapse show">
                                    <div className="flight-selected">
                                        <img src="images/review.png" alt="" />
                                        <h4>Flight Selected</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="flight-review">
                                <a href="#demo5" className="btn show" data-toggle="collapse" aria-expanded="true">passenger details
                                    <i className="fa fa-angle-down"></i></a>
                                <div id="demo5" className="collapse show">
                                    <div className="flight-selected">
                                        <img src="images/review.png" alt="" />
                                        <h4>Passenger Details</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="flight-review">
                                <div className="out-your-trip">Get more out of your trip</div>
                                <div className="all-trip btn show" href="#demo1" data-toggle="collapse" aria-expanded="true"
                                    style={{ borderBottom: 'none' }}>
                                    <div className="additional-bag">
                                        <img src="images/additional-bag.png" alt="" />
                                        <div className="d-block">
                                            <p>Prebook your additional baggage</p>
                                            <span>Extra Check-in baggage</span>
                                        </div>
                                    </div>
                                    <i className="fa fa-angle-down"></i>
                                </div>
                                <div id="demo1" className="collapse show">
                                    <div className="add">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-xl-6 col-sm-12">
                                                <div className="excess-bag">
                                                    <div className="bag-details">
                                                        <div className="bag-kg">Excess Baggage 5 Kg</div>
                                                        <button type="button" className="decress">-</button>
                                                        <div className="digit">01</div>
                                                        <button type="button" className="incress">+</button>
                                                        <div className="rupee-all">₹2250</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-xl-6 col-sm-12">
                                                <div className="excess-bag">
                                                    <div className="bag-details">
                                                        <div className="bag-kg">Excess Baggage 5 Kg</div>
                                                        <button type="button" className="decress">-</button>
                                                        <div className="digit">01</div>
                                                        <button type="button" className="incress">+</button>
                                                        <div className="rupee-all">₹2250</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-xl-6 col-sm-12">
                                                <div className="excess-bag">
                                                    <div className="bag-details">
                                                        <div className="bag-kg">Excess Baggage 15 Kg</div>
                                                        <button type="button" className="decress">-</button>
                                                        <div className="digit">01</div>
                                                        <button type="button" className="incress">+</button>
                                                        <div className="rupee-all">₹2250</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-xl-6 col-sm-12">
                                                <div className="excess-bag">
                                                    <div className="bag-details">
                                                        <div className="bag-kg">Excess Baggage 15 Kg</div>
                                                        <button type="button" className="decress">-</button>
                                                        <div className="digit">01</div>
                                                        <button type="button" className="incress">+</button>
                                                        <div className="rupee-all">₹2250</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-xl-6 col-sm-12">
                                                <div className="excess-bag">
                                                    <div className="bag-details">
                                                        <div className="bag-kg">Excess Baggage 15 Kg</div>
                                                        <button type="button" className="decress">-</button>
                                                        <div className="digit">01</div>
                                                        <button type="button" className="incress">+</button>
                                                        <div className="rupee-all">₹2250</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-xl-6 col-sm-12">
                                                <div className="excess-bag">
                                                    <div className="bag-details">
                                                        <div className="bag-kg">Excess Baggage 15 Kg</div>
                                                        <button type="button" className="decress">-</button>
                                                        <div className="digit">01</div>
                                                        <button type="button" className="incress">+</button>
                                                        <div className="rupee-all">₹2250</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="all-trip btn show" href="#demo2" data-toggle="collapse" aria-expanded="true"
                                    style={{ borderBottom: 'none' }}>
                                    <div className="additional-bag">
                                        <img src="images/meal.png" alt="" />
                                        <div className="d-block">
                                            <p>Prebook your meals</p>
                                            <span>Select a meal for your trip</span>
                                        </div>
                                    </div>
                                    <i className="fa fa-angle-down"></i>
                                </div>
                                <div id="demo2" className="collapse show">
                                    <div className="prebook">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                                                <div className="pre-box">
                                                    <div className="box-details">
                                                        <div className="left-box">
                                                            <img src="images/check-box.png" alt="" />
                                                            <p>Cucumber tomato cheese multigrain bread</p>
                                                        </div>
                                                        <div className="right-box">
                                                            <div style={{ display: 'inline-flex' }}>
                                                                <button type="button" className="decress1">-</button>
                                                                <div className="digit1">01</div>
                                                                <button type="button" className="incress1">+</button>
                                                            </div>
                                                            <p>₹2250</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                                                <div className="pre-box">
                                                    <div className="box-details">
                                                        <div className="left-box">
                                                            <img src="images/check-box.png" alt="" />
                                                            <p>Veg Red Thai Curry with Steamed Rice</p>
                                                        </div>
                                                        <div className="right-box">
                                                            <div style={{ display: 'inline-flex' }}>
                                                                <button type="button" className="decress1">-</button>
                                                                <div className="digit1">01</div>
                                                                <button type="button" className="incress1">+</button>
                                                            </div>
                                                            <p>₹2250</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                                                <div className="pre-box">
                                                    <div className="box-details">
                                                        <div className="left-box">
                                                            <img src="images/check-box1.png" alt="" />
                                                            <p>Tandoori Chicken tangri, tikka & kebab</p>
                                                        </div>
                                                        <div className="right-box">
                                                            <div style={{ display: 'inline-flex' }}>
                                                                <button type="button" className="decress1">-</button>
                                                                <div className="digit1">01</div>
                                                                <button type="button" className="incress1">+</button>
                                                            </div>
                                                            <p>₹2250</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                                                <div className="pre-box">
                                                    <div className="box-details">
                                                        <div className="left-box">
                                                            <img src="images/check-box1.png" alt="" />
                                                            <p>Chicken Junglee in Marble Bread</p>
                                                        </div>
                                                        <div className="right-box">
                                                            <div style={{ display: 'inline-flex' }}>
                                                                <button type="button" className="decress1">-</button>
                                                                <div className="digit1">01</div>
                                                                <button type="button" className="incress1">+</button>
                                                            </div>
                                                            <p>₹2250</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                                                <div className="pre-box">
                                                    <div className="box-details">
                                                        <div className="left-box">
                                                            <img src="images/check-box.png" alt="" />
                                                            <p>Paneer tikka, tandoori aloo & vegetable croquette</p>
                                                        </div>
                                                        <div className="right-box">
                                                            <div style={{ display: 'inline-flex' }}>
                                                                <button type="button" className="decress1">-</button>
                                                                <div className="digit1">01</div>
                                                                <button type="button" className="incress1">+</button>
                                                            </div>
                                                            <p>₹2250</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                                                <div className="pre-box">
                                                    <div className="box-details">
                                                        <div className="left-box">
                                                            <img src="images/check-box.png" alt="" />
                                                            <p>Vegetarian Gluten-free Cold Meal (Dhokla)</p>
                                                        </div>
                                                        <div className="right-box">
                                                            <div style={{ display: 'inline-flex' }}>
                                                                <button type="button" className="decress1">-</button>
                                                                <div className="digit1">01</div>
                                                                <button type="button" className="incress1">+</button>
                                                            </div>
                                                            <p>₹2250</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                                                <div className="pre-box">
                                                    <div className="box-details">
                                                        <div className="left-box">
                                                            <img src="images/check-box.png" alt="" />
                                                            <p>Vegetable Daliya</p>
                                                        </div>
                                                        <div className="right-box">
                                                            <div style={{ display: 'inline-flex' }}>
                                                                <button type="button" className="decress1">-</button>
                                                                <div className="digit1">01</div>
                                                                <button type="button" className="incress1">+</button>
                                                            </div>
                                                            <p>₹2250</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                                                <div className="pre-box">
                                                    <div className="box-details">
                                                        <div className="left-box">
                                                            <img src="images/check-box.png" alt="" />
                                                            <p>Vegetarian Gluten-free Hot Meal</p>
                                                        </div>
                                                        <div className="right-box">
                                                            <div style={{ display: 'inline-flex' }}>
                                                                <button type="button" className="decress1">-</button>
                                                                <div className="digit1">01</div>
                                                                <button type="button" className="incress1">+</button>
                                                            </div>
                                                            <p>₹2250</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                                                <div className="pre-box">
                                                    <div className="box-details">
                                                        <div className="left-box">
                                                            <img src="images/check-box.png" alt="" />
                                                            <p>Kid's meal</p>
                                                        </div>
                                                        <div className="right-box">
                                                            <div style={{ display: 'inline-flex' }}>
                                                                <button type="button" className="decress1">-</button>
                                                                <div className="digit1">01</div>
                                                                <button type="button" className="incress1">+</button>
                                                            </div>
                                                            <p>₹2250</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                                                <div className="pre-box">
                                                    <div className="box-details">
                                                        <div className="left-box">
                                                            <img src="images/check-box.png" alt="" />
                                                            <p>Cake</p>
                                                        </div>
                                                        <div className="right-box">
                                                            <div style={{ display: 'inline-flex' }}>
                                                                <button type="button" className="decress1">-</button>
                                                                <div className="digit1">01</div>
                                                                <button type="button" className="incress1">+</button>
                                                            </div>
                                                            <p>₹2250</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="all-trip btn show" href="#demo3" data-toggle="collapse" aria-expanded="true"
                                    style={{ borderBottom: 'none' }}>
                                    <div className="additional-bag">
                                        <img src="images/seat.png" alt="" />
                                        <div className="d-block">
                                            <p>Pick a Seat</p>
                                            <span>Preselect a seat of your choice</span>
                                        </div>
                                    </div>
                                    <i className="fa fa-angle-down"></i>
                                </div>
                                <div id="demo3" className="collapse show">
                                    <div className="seat">
                                        <img src="images/peack-seat.png" alt="" />
                                        <div className="seat-book">
                                            <ul>
                                                <li>
                                                    <img src="images/blue-seat.png" alt="" />
                                                    <div className="seat-rupee">₹3333</div>
                                                </li>
                                                <li>
                                                    <img src="images/green-seat.png" alt="" />
                                                    <div className="seat-rupee">₹2727</div>
                                                </li>
                                                <li>
                                                    <img src="images/gray-seat.png" alt="" />
                                                    <div className="seat-rupee">Book</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="pay-btn">
                                <div className="pay-cloud">
                                    <img src="images/cloud-bg.png" alt="" />
                                </div>
                                <button type="button" className="paytm" style={{ background: '#5EB6FE' }}>Proceed to Pay ₹ 6,557
                                </button>
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
                                    <button type="button" className="booking-btn" style={{ fontSize: '16px' }}>Proceed to Pay ₹ 6,557
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FlightBooking1