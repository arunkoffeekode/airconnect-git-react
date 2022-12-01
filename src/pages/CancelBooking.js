import React from 'react'
import CancelBookingModel from '../component/CancelBookingModel'

function CancelBooking() {
    return (
        <div>
            <div className='webcheck'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='webcheck-header'>
                                <h1>Cancel Booking</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='webcheck-box'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='chkweb'>
                                <div className='change-set'>
                                    <img src="images/flight-icon.png" alt="" />
                                    <div className="number121">VA901</div>
                                </div>
                                <div className='set-details'>
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-6 col-sm-12 col-xl-3'>
                                            <div className='change-details'>
                                                <p>Booking date</p>
                                                <h6>Thu,31 Mar, 2022, 07:20AM</h6>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12 col-xl-3'>
                                            <div className='change-details'>
                                                <p>Booking number</p>
                                                <h6>MZA0076AC</h6>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12 col-xl-3'>
                                            <div className='change-details'>
                                                <p>Ticket </p>
                                                <h6>308123456789-903</h6>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12 col-xl-3'>
                                            <div className='change-details'>
                                                <p>PRN number </p>
                                                <h6>AC8768868700</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='chkweb'>
                                <div className='check-route'>
                                    <div className='route-name'>
                                        <h4>Ahmedabad</h4>
                                        <p>Thu,31 Mar, 2022</p>
                                    </div>
                                    <button type='button' className='black-icon'>
                                        <img src="images/black-circle.png" alt="" />
                                    </button>
                                    <div className='route-name'>
                                        <h4>Surat</h4>
                                        <p>Thu,31 Mar, 2022</p>
                                    </div>
                                </div>
                                <div className='start-table'>
                                    <table class="table">
                                        <thead>
                                            <tr style={{ borderRadius: '30px' }}>
                                                <th scope="col">Departure</th>
                                                <th scope="col">Arrival</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Booking Status</th>
                                                <th scope="col">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className='departure'>
                                                        <h5>07:20</h5>
                                                        <p>Terminal 1,<br />
                                                            Ahmedabad Airport,<br />
                                                            Ahmedabad</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='departure'>
                                                        <h5>08:40</h5>
                                                        <p>Terminal 1,<br />
                                                            Surat Airport,<br />
                                                            Surat</p>
                                                    </div>
                                                </td>
                                                <td>Direct</td>
                                                <td>
                                                    <div className='confirm'>  confirmed</div>
                                                </td>
                                                <td>01h 70m</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div className='bag-all'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4'>
                                            <div className='bag-delt'>
                                                <img src="images/additional-bag.png"></img>
                                                <div className='d-block'>
                                                    <h6> Check in - additional baggage</h6>
                                                    <span>Excess Baggage 15 Kg</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4'>
                                            <div className='bag-delt'>
                                                <img src="images/hand-bag.png"></img>
                                                <div className='d-block'>
                                                    <h6> Carry on - Hand Baggage</h6>
                                                    <span>1 piece x 7 kg / person</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4'>
                                            <div className='bag-delt' style={{ borderRight: 'none' }}>
                                                <img src="images/meal.png"></img>
                                                <div className='d-block'>
                                                    <h6>Prebook your meals</h6>
                                                    <span>Cucumber tomato cheese multigrain bread</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='chkweb'>
                                <h2>Passenger Details (Pax Info)</h2>
                                <div className='start-table'>
                                    <table class="table">
                                        <thead>
                                            <tr style={{ borderRadius: '30px' }}>
                                                <th scope="col">Name</th>
                                                <th scope="col">Seat</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className='user-details'>
                                                        <div className='passanger-icon'>
                                                            <img src="images/passanger-icon.png" alt=""></img></div>
                                                        Mr. Adesh Mishra</div></td>
                                                <td>01A</td>
                                                <td>
                                                    <div className='conf'>
                                                        <img src="images/confiurmed-chk.png" alt=""></img>
                                                        <div className='confirm1'>confirmed</div>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='chkweb'>
                                <h2>contact Information</h2>
                                <div className='set-details mt-4'>
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-6 col-sm-12 col-xl-3'>
                                            <div className='change-details'>
                                                <p>passanger name </p>
                                                <h6>Mr. Ashok  saheb</h6>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4'>
                                            <div className='change-details'>
                                                <p>Mobile Number </p>
                                                <h6>+91  9754736128</h6>
                                            </div>
                                        </div>
                                        <div className='col-lg-5 col-md-6 col-sm-12 col-xl-5'>
                                            <div className='change-details'>
                                                <p>Email ID</p>
                                                <h6>ABC@gmail.com</h6>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='chkweb'>
                                <div className='additional-details mb-4'>
                                    <h1>Refund details</h1>
                                    <div className='amt'>All Amount In INR</div>
                                </div>
                                <div className='additional-details'>
                                    <p style={{ fontWeight: '600', fontSize: '15px', textTransform: "capitalize" }}>Refund amount</p>
                                    <div className='bag-value'>9,246.00</div>
                                </div>
                                <div className='additional-details'>
                                    <p style={{ fontWeight: '600', fontSize: '15px', textTransform: "capitalize" }}>Cancel Change Fees</p>
                                    <div className='bag-value'>17,148.00</div>
                                </div>

                                <div className='additional-details mt-4'>
                                    <h6>Taxes and Fees:</h6>
                                    <p>(CGST) Cancel Fees</p>
                                    <div className='bag-value'>426.00</div>
                                </div>
                                <div className='additional-details mt-4'>
                                    <p>(CGST) Cancel Fees</p>
                                    <div className='bag-value'>426.00</div>
                                </div>
                                <div className='bag-total'>
                                    <div className='pay-amt'>Total pay Amount :</div>
                                    <div className='tol'> 18,000.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div className="flight-status-btn1">
                                <div className="sky-cloud-flight1">
                                    <img src="images/cloud-bg.png" alt="" />
                                </div>
                                <button type="button" className="flight-btn1" data-toggle="modal" data-target="#exampleModalCenter">Finish</button>
                            </div>
                            <div className="flight-status-btn1">
                                <button type="button" className="flight-btn1">bACK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CancelBookingModel></CancelBookingModel>
        </div>
    )
}

export default CancelBooking