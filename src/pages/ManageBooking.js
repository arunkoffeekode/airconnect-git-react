import React from 'react'

function ManageBooking() {
    return (
        <div>
            <div className="manage-booking1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12">
                            <div className="booking-button">
                                <ul>
                                    <li>
                                        <a href="#" className="mng-btn active">Flight & Price details</a>
                                    </li>
                                    <li>
                                        <a href="#" className="mng-btn">Cancel Booking</a>
                                    </li>
                                    <li>
                                        <a href="#" className="mng-btn">Re-Booking</a>
                                    </li>
                                    <li>
                                        <a href="#" className="mng-btn">Extra baggage</a>
                                    </li>
                                    <li>
                                        <a href="#" className="mng-btn">Passenger Details Update</a>
                                    </li>
                                    <li>
                                        <a href="#" className="mng-btn">GST Details Update</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 col-xl-9 col-md-12 col-sm-12">
                            <div className="conformation">
                                <div className="left-confirm">
                                    <div className="icon">
                                        <img src="images/confiorm.png" alt=""/>
                                    </div>
                                    <h1>Your PNR Number is <span>8750733751</span></h1>
                                </div>
                                <div className="right-confirm">
                                    <button className="confirm-btn" type="button">Print Confirmation</button>
                                </div>
                            </div>
                            <div className="passenger-details">
                                <h1>Passenger Details</h1>
                                <div className="passenger-details-box">
                                    <div className="user-details">
                                        <div className="passanger-icon">
                                            <img src="images/passanger-icon.png" alt=""/>
                                        </div>
                                        <h5>Mr. Adesh Mishra</h5>
                                    </div>
                                    <div className="confiurmed">
                                        <div className="user-details">
                                            <h5>Confiurmed</h5>
                                            <div className="passanger-icon1">
                                                <img src="images/confiurmed-chk.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="passenger-details-box">
                                    <div className="user-details">
                                        <div className="passanger-icon">
                                            <img src="images/childern.png" alt=""/>
                                        </div>
                                        <h5>Mr. Adesh Mishra</h5>
                                    </div>
                                    <div className="confiurmed">
                                        <div className="user-details">
                                            <h5>Confiurmed</h5>
                                            <div className="passanger-icon1">
                                                <img src="images/confiurmed-chk.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="passenger-details-box">
                                    <div className="user-details">
                                        <div className="passanger-icon">
                                            <img src="images/baby-icon.png" alt=""/>
                                        </div>
                                        <h5>Mr. Adesh Mishra</h5>
                                    </div>
                                    <div className="confiurmed">
                                        <div className="user-details">
                                            <h5>Confiurmed</h5>
                                            <div className="passanger-icon1">
                                                <img src="images/confiurmed-chk.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="confiurmed-table">
                                <div className="booking-top-left1">
                                    <div className="date-city">
                                        <div className="city">Ahmedabad</div>
                                        <div className="booking-date">Thursday,31 Mar, 2022</div>
                                    </div>
                                    <div className="book-img">
                                        <button type="button"><img src="images/swap.png" alt=""/></button>
                                    </div>
                                    <div className="date-city">
                                        <div className="city">Surat</div>
                                        <div className="booking-date">Thursday,31 Mar, 2022</div>
                                    </div>
                                </div>
                                <div className="table-scrool">
                                    <table className="table">
                                        <thead>
                                            <tr className="col-th">
                                                <th scope="col" className="round-left">Departure</th>
                                                <th scope="col">Arrival</th>

                                                <th scope="col">Status</th>
                                                <th scope="col">Booking Status </th>
                                                <th scope="col">Duration </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="terminal">
                                                        <h3>07:20</h3>
                                                        <p>Terminal 1,<br/>
                                                            Ahmedabad Airport,<br/>
                                                                Ahmedabad</p>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className="terminal">
                                                                <h3>08:40</h3>
                                                                <p>Terminal 1,<br/>
                                                                    Surat Airport,<br/>
                                                                        Surat</p>
                                                                </div>
                                                                </td>
                                                                <td>
                                                                    <div className="direct">Direct</div>
                                                                </td>
                                                                <td>
                                                                    <div className="direct">Confirm</div>
                                                                </td>
                                                                <td>
                                                                    <div className="direct">01h 70m</div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="flight-details mb-4">
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
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    )
}

                    export default ManageBooking