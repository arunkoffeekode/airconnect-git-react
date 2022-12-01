import React from 'react'
import FlightPriceModel from '../component/FlightPriceModel'

function FlightPriceDetails() {
    return (
        <div>
            <div className='webcheck'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='webcheck-header'>
                                <h1>Flight & Price details</h1>
                                <button type='button' className='print-conf' data-toggle="modal" data-target="#exampleModalCenter">Print Confirmation</button>
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
                                <h2>GST Information</h2>
                                <div className='set-details mt-4'>
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-6 col-sm-12 col-xl-3'>
                                            <div className='change-details'>
                                                <p>Company Name</p>
                                                <h6>ABC Tech</h6>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4'>
                                            <div className='change-details'>
                                                <p>Company Contact Number</p>
                                                <h6>+91  9754736128</h6>
                                            </div>
                                        </div>
                                        <div className='col-lg-5 col-md-6 col-sm-12 col-xl-5'>
                                            <div className='change-details'>
                                                <p>Company GST Email </p>
                                                <h6>ABC@Tech.com</h6>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12 col-xl-3'>
                                            <div className='change-details'>
                                                <p>GST Number</p>
                                                <h6>AKYH0032ZL</h6>
                                            </div>
                                        </div>
                                        <div className='col-lg-9 col-md-6 col-sm-12 col-xl-9'>
                                            <div className='change-details'>
                                                <p>Company Address </p>
                                                <h6>30, Udhana Road, 394210</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='chkweb'>
                                <div className='additional-details mb-4'>
                                    <h1>Price details</h1>
                                    <div className='amt'>All Amount In INR</div>
                                </div>
                                <div className='additional-details'>
                                    <h6>base fare + Fuel Charge:</h6>
                                    <p>1 Adult @ INR 2116.00</p>
                                    <div className='bag-value'>2116.00</div>
                                </div>
                                <div className='additional-details'>
                                    <p>2 Child @ INR 2116.00</p>
                                    <div className='bag-value'>4232.00</div>
                                </div>
                                <div className='additional-details'>
                                    <p>1 Infant @ INR 500.00</p>
                                    <div className='bag-value'>500.00</div>
                                </div>
                                <div className='additional-details mt-4'>
                                    <h6>Prebook your additional baggage</h6>
                                    <p>Excess Baggage 5 Kg</p>
                                    <div className='bag-value'>106.00</div>
                                </div>
                                <div className='additional-details mt-4'>
                                    <h6>Prebook your meals</h6>
                                    <p><img src='images/check-box.png'></img> Cucumber tomato cheese multigrain bread</p>
                                    <div className='bag-value'>500.00</div>
                                </div>
                                <div className='additional-details mt-4'>
                                    <h6>Taxes and Fees:</h6>
                                    <p>GST(GS)</p>
                                    <div className='bag-value'>106.00</div>
                                </div>
                                <div className='bag-total'>
                                    <div className='pay-amt'>Total Amount :</div>
                                    <div className='tol'>INR 9856.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FlightPriceModel></FlightPriceModel>
        </div>
    )
}

export default FlightPriceDetails