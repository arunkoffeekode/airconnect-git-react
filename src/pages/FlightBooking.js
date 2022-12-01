import React from 'react'
import AddPassanger from '../component/AddPassanger'
function FlightBooking() {
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
                                <a href="#demo" className="btn show" data-toggle="collapse" aria-expanded="true">Review your flight
                                    <i className="fa fa-angle-down"></i></a>
                                <div id="demo" className="collapse show">
                                    <div className="logo-top">
                                        <div className="logo-icon1">
                                            <img src="images/icon-logo.png" alt="" />
                                            <div className="title12">VA904</div>
                                        </div>
                                    </div>
                                    <div className="route-details">
                                        <div className="frome">
                                            <p>Ahmedabad</p>
                                            <div className="time">07:20</div>
                                            <span>Thursday,31 Mar, 2022</span>
                                            <div className="address">Terminal 1,
                                                Ahmedabad Airport,
                                                Ahmedabad</div>
                                        </div>
                                        <div className="direct-flight">
                                            <p>2h 05m</p>
                                            <div className="arrow">
                                                <img src="images/left-arrow.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="frome">

                                            <p>Surat</p>
                                            <div className="time">08:50</div>
                                            <span>Thursday,31 Mar, 2022</span>
                                            <div className="address">Terminal 1,
                                                Ahmedabad Airport,
                                                Ahmedabad</div>
                                        </div>
                                    </div>

                                    <div className="Baggage-Policy">
                                        <div className="title">
                                            Baggage Policy
                                        </div>
                                        <div className="policy-details">
                                            <p>Tip:
                                                <span>
                                                    Airlines cancellation charges do apply. Please check cancellation and
                                                    baggage policies for more details.</span>
                                            </p>
                                            <div className="policy-route">
                                                <div className="route-logo">
                                                    <img src="images/icon-logo.png" alt="" className="imgg" />
                                                    <div className="from1">Ahmedabad</div>
                                                    <img src="images/left-arrow.png" alt="" className="arrow-fleft" />
                                                    <div className="from1">Surat</div>
                                                </div>
                                            </div>
                                            <div className="hand-baggage">
                                                <div className="bag">
                                                    <img src="images/hand-bag.png" alt="" />
                                                    <div className="d-block">
                                                        <h6>Hand Baggage</h6>
                                                        <p>1 piece x 7 kg / person</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="policy-btn-section">
                                                <p>Cancellation & Reschedule Policy</p>
                                                <div className="set-btn">
                                                    <div className="policy-cloud">
                                                        <img src="images/cloud-bg.png" alt="" />
                                                    </div>
                                                    <button type="button" className="policy-btn">Continue</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flight-review">
                                <a href="#demo1" className="btn show" data-toggle="collapse" aria-expanded="true">passenger details
                                    <i className="fa fa-angle-down"></i></a>
                                <div id="demo1" className="collapse show">
                                    <div className="passanger-details">
                                        <p>name should be match with govt. id proof</p>
                                    </div>
                                    <div className="information">
                                        <h6>Passenger 01</h6>
                                        <form>
                                            <div className="form-row mt-3">
                                                <div className="form-group col-md-6">
                                                    <label for="inputName">First name</label>
                                                    <input type="text" className="form-control" id="inputName" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="inputPhone">Last Name</label>
                                                    <input type="text" className="form-control" id="inputPhone" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="inputPhone">Date of Birth</label>
                                                    <input type="date" className="form-control" id="inputPhone" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="information">
                                        <h6>Passenger 02</h6>
                                        <form>
                                            <div className="form-row mt-3">
                                                <div className="form-group col-md-6">
                                                    <label for="inputName">First name</label>
                                                    <input type="text" className="form-control" id="inputName" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="inputPhone">Last Name</label>
                                                    <input type="text" className="form-control" id="inputPhone" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="inputPhone">Date of Birth</label>
                                                    <input type="date" className="form-control" id="inputPhone" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="add-passanger">
                                        <h4 data-toggle="modal" data-target="#exampleModalCenter">+ Add Passenger</h4>
                                    </div>
                                    <div className="passanger-contact">
                                        <div className="p-contact-title">Contact Details</div>
                                        <span>* Ticket will be sent to below mobile number and email</span>
                                        <form>
                                            <div className="form-row mt-3">
                                                <div className="form-group col-md-6">
                                                    <label for="inputEmail">Mobile number <span>*</span> </label>
                                                    <div className="row">
                                                        <div className="col-md-5">
                                                            <select name="" id="" className="form-control">
                                                                <option value="1" selected="">+91</option>
                                                                <option value="2">+90</option>
                                                                <option value="3">+91</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-7">
                                                            <input type="text" className="form-control" id="inputEmail" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="inputPhone">Email<span>*</span></label>
                                                    <input type="text" className="form-control" id="inputPhone" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="inputEmail">Whatsapp Number<span>*</span> </label>
                                                    <div className="row">
                                                        <div className="col-md-5">
                                                            <select name="" id="" className="form-control">
                                                                <option value="1" selected="">+91</option>
                                                                <option value="2">+90</option>
                                                                <option value="3">+91</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-7">
                                                            <input type="text" className="form-control" id="inputEmail" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label for="inputEmail">Pincode<span>*</span> </label>
                                                            <input type="text" className="form-control" id="inputEmail" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label for="inputEmail">Area<span>*</span> </label>
                                                            <input type="text" className="form-control" id="inputEmail" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-12" style={{ marginBottom: '0px' }}>
                                                    <label for="inputEmail">Get your ticket on whatsapp.</label>
                                                </div>
                                                <div className="form-group col-md-12 mt-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value=""
                                                            id="flexCheckDefault" />
                                                        <label className="form-check-label ml-2" for="flexCheckDefault">
                                                            <h6>GST details <p>(Travelling For Business Purpose?)</p>
                                                            </h6>
                                                            <p>After complete booking GST invoice will be not provided </p>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="inputName">GST Number <span>*</span></label>
                                                    <input type="text" className="form-control" id="inputName" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="inputName">Company Name <span>*</span></label>
                                                    <input type="text" className="form-control" id="inputPhone" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="inputName">Company GST Email</label>
                                                    <input type="email" className="form-control" id="inputPhone" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="inputName">Company Contact Number</label>
                                                    <input type="email" className="form-control" id="inputPhone" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="inputName">Company Address 01</label>
                                                    <input type="email" className="form-control" id="inputPhone" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="inputName">Company Address 02</label>
                                                    <input type="email" className="form-control" id="inputPhone" />
                                                </div>
                                                <div className="pasanger-btn">
                                                    <div className="pasanger-cloud">
                                                        <img src="images/cloud-bg.png" alt="" />
                                                    </div>
                                                    <button type="button" className="policy-pasanger">Continue</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="flight-review">
                                <div className="out-your-trip">Get more out of your trip</div>
                                <div className="all-trip btn show" id="#demo1" data-toggle="collapse" aria-expanded="true">
                                    <div className="additional-bag">
                                        <img src="images/additional-bag.png" alt="" />
                                        <div className="d-block">
                                            <p>Prebook your additional baggage</p>
                                            <span>Extra Check-in baggage</span>
                                        </div>
                                    </div>
                                    <i className="fa fa-angle-down"></i>
                                </div>
                                <div className="all-trip btn show" id="#demo1" data-toggle="collapse" aria-expanded="true">
                                    <div className="additional-bag">
                                        <img src="images/meal.png" alt="" />
                                        <div className="d-block">
                                            <p>Prebook your meals</p>
                                            <span>Select a meal for your trip</span>
                                        </div>
                                    </div>
                                    <i className="fa fa-angle-down"></i>
                                </div>
                                <div className="all-trip btn show" id="#demo1" data-toggle="collapse" aria-expanded="true">
                                    <div className="additional-bag">
                                        <img src="images/seat.png" alt="" />
                                        <div className="d-block">
                                            <p>Pick a Seat</p>
                                            <span>Preselect a seat of your choice</span>
                                        </div>
                                    </div>
                                    <i className="fa fa-angle-down"></i>
                                </div>
                            </div>
                            <div className="pay-btn">
                                <div className="pay-cloud">
                                    <img src="images/cloud-bg.png" alt="" />
                                </div>
                                <button type="button" className="paytm">Proceed to Pay</button>
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

                                <div className="pay-btn" style={{ marginBottom: '0px' }}>
                                    <div className="pay-cloud">
                                        <img src="images/cloud-bg.png" alt="" />
                                    </div>
                                    <button type="button" className="paytm">Proceed to Pay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AddPassanger/>
        </div>
    )
}

export default FlightBooking