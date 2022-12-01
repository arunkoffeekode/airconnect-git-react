import React from 'react'

function WebCheckIn() {
    return (
        <div>
            <div className='webcheck'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='webcheck-header'>
                                <h1>Web Check-In</h1>
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
                            </div>

                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='chkweb'>

                                <div className='start-table'>
                                    <table class="table">
                                        <thead>
                                            <tr style={{ borderRadius: '30px' }}>
                                                <th>  <input type="checkbox" id="checkbox1" name="checkbox1" /></th>
                                                <th scope="col">Pax no</th>
                                                <th scope="col">Pasanger Name</th>
                                                <th scope="col">Seat No</th>
                                                <th scope="col">Boarding Pass</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>  <input type="checkbox" id="checkbox2" name="checkbox2" /></td>
                                                <td>01</td>
                                                <td>
                                                    <div className='user-details'>
                                                        <div className='passanger-icon'>
                                                            <img src="images/passanger-icon.png" alt=""></img></div>
                                                        Mr. Adesh Mishra</div></td>
                                                <td>01A</td>
                                            </tr>
                                            <tr>
                                                <td>  <input type="checkbox" id="checkbox2" name="checkbox2" /></td>
                                                <td>02 </td>
                                                <td>
                                                    <div className='user-details'>
                                                        <div className='passanger-icon'>
                                                            <img src="images/childern.png" alt=""></img></div>
                                                        Mr. Adesh Mishra</div></td>
                                                <td>02A</td>
                                            </tr>
                                            <tr>
                                                <td>  <input type="checkbox" id="checkbox2" name="checkbox2" /></td>
                                                <td>03</td>
                                                <td>
                                                    <div className='user-details'>
                                                        <div className='passanger-icon'>
                                                            <img src="images/baby-icon.png" alt=""></img></div>
                                                        Mr. Adesh Mishra</div></td>
                                                <td>03A</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div className="flight-status-btn1">
                                <div className="sky-cloud-flight1">
                                    <img src="images/cloud-bg.png" alt="" />
                                </div>
                                <button type="button" className="flight-btn1">Check-in</button>
                            </div>
                            <div className="flight-status-btn1">
                                <button type="button" className="flight-btn1">Change Seat(s)</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WebCheckIn