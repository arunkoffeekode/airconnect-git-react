import React from 'react'

function FlightStatus() {
    return (
        <div>
            <section className="flight-status-top-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div className="start-flight">
                                <div className="logo-content">
                                    <div className="round-logo">
                                        <img src="images/flight-icon.png" alt="" />
                                        <div className="number12">VA901</div>
                                    </div>
                                </div>
                                <div className="return-ticket">
                                    <button type="button" className="book-btn">Book Return Ticket</button>
                                    <div className="exchange-flight">
                                        <i className="fa fa-share-alt share-btn" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='webcheck-box pb-0'>
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
                    </div>
                </div>
            </section>

            <section className="flight-status pt-2">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div className="all-details mt-0">
                                <div className="flightr-title">
                                    Filght Details
                                </div>
                                <div className="route-details">
                                    <div className="frome">
                                        <div className="city-name">AMD</div>
                                        <p>Ahmedabad</p>
                                        <div className="time">07:20</div>
                                        <span>Thursday,31 Mar, 2022</span>
                                        <div className="address">Terminal 1,
                                            Ahmedabad Airport,
                                            Ahmedabad</div>
                                    </div>
                                    <div className="direct-flight">
                                        <p>01h 70m</p>
                                        <div className="arrow">
                                            <img src="images/arrow.png" alt="" />
                                        </div>
                                        <p>Direct</p>
                                    </div>
                                    <div className="frome">
                                        <div className="city-name">AMD</div>
                                        <p>Ahmedabad</p>
                                        <div className="time">07:20</div>
                                        <span>Thursday,31 Mar, 2022</span>
                                        <div className="address">Terminal 1,
                                            Ahmedabad Airport,
                                            Ahmedabad</div>
                                    </div>
                                </div>
                                <div className="schedule-details">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>schedule</th>
                                                <th>ETD</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>check in</td>
                                                <td></td>
                                                <td>6:00 PM</td>
                                                <td>6:00 PM</td>
                                                <td><button type="button" className="btn-orange">delay</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>boarding </td>
                                                <td></td>
                                                <td>6:00 PM</td>
                                                <td>6:00 PM</td>
                                                <td><button type="button" className="btn-green">On time</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>arrival </td>
                                                <td></td>
                                                <td>7:45 PM </td>
                                                <td>7:45 PM </td>
                                                <td><button type="button" className="btn-blue">preponed</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>departure </td>
                                                <td></td>
                                                <td>6:45 PM </td>
                                                <td>6:45 PM </td>
                                                <td><button type="button" className="btn-green">On time</button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div className="flight-details">
                                <div className="information-title">contact Information</div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xl-4">
                                        <div className="passanger">
                                            <p>passanger name </p>
                                            <h5>Mr. Ashok saheb</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xl-4">
                                        <div className="passanger">
                                            <p>Mobile Number </p>
                                            <h5>+91 9754736128</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xl-4">
                                        <div className="passanger">
                                            <p>Email ID</p>
                                            <h5>ABC@gmail.com</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div className="flight-status-btn">
                                <div className="sky-cloud-flight">
                                    <img src="images/cloud-bg.png" alt="" />
                                </div>
                                <button type="button" className="flight-btn">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default FlightStatus