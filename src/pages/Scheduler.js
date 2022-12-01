import React from 'react'

function Scheduler() {
    return (
        <div>
            <section className="scheduler-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-xl-4 col-sm-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                                    <div className="alternative-date">
                                        <label for="inputName">Alternative Date</label>
                                        <input type="date" className="form-control" id="inputName"/>
                                            <div className="sector">
                                                <h5>Sector wise</h5>
                                                <div className="image-section">
                                                    <img src="images/sector.png" alt=""/>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                                    <div className="alternative-date">
                                        <p>Departure Date</p>
                                        <input type="date" className="form-control" id="inputName"/>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                                    <div className="stop">
                                        <a href="#demo" className="btn  show" data-toggle="collapse">Stops <i
                                            className="fa fa-angle-down"></i></a>
                                        <div id="demo" className="collapse show">
                                            <form>
                                                <div className="form-group">
                                                    <input type="checkbox" id="flight"/>
                                                        <label for="flight">All Flights</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox" id="stop"/>
                                                        <label for="stop">Non Stop</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox" id="max"/>
                                                        <label for="max">max 01 Stop only</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                                    <div className="stop">
                                        <a href="#demo1" className="btn  show" data-toggle="collapse">Departure time <i
                                            className="fa fa-angle-down"></i></a>
                                        <div id="demo1" className="collapse show">
                                            <form>
                                                <div className="form-group">
                                                    <input type="checkbox" id="Early"/>
                                                        <label for="Early">Early Morning</label>
                                                        <span>12 AM To 08 AM</span>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox" id="morning"/>
                                                        <label for="morning">morning</label>
                                                        <span>08 AM To 12 AM</span>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox" id="Day"/>
                                                        <label for="Day">Mid Day</label>
                                                        <span>12 pM To 04 pM</span>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox" id="Evening"/>
                                                        <label for="Evening">Evening</label>
                                                        <span>04 pM To 08 pM</span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-xl-8 col-sm-12">
                            <div className="table-section">
                                <table className="table table-striped">
                                    <thead>
                                        <tr className="col-th">
                                            <th scope="col" className="round-left">Flight No</th>
                                            <th scope="col">From</th>
                                            <th></th>
                                            <th scope="col">To</th>
                                            <th scope="col">Departure </th>
                                            <th scope="col">arrival </th>
                                            <th scope="col" className="round-right">Seats</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="icon">
                                                    <img src="images/flight-icon.png" alt=""/>
                                                        <div className="number">VA901</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">STV</div>
                                                    <p>Surat</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="direct">
                                                    <div className="meter">0h1 70m</div>
                                                    <img src="images/direct.png" alt=""/>
                                                        <div className="title">Direct</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">AMD</div>
                                                    <p>Ahmedabad</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">06:40</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">08:00</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="seat">02</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="icon">
                                                    <img src="images/flight-icon.png" alt=""/>
                                                        <div className="number">VA991</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">AMD</div>
                                                    <p>Ahmedabad</p>
                                                </div>

                                            </td>
                                            <td>
                                                <div className="direct">
                                                    <div className="meter">0h1 70m</div>
                                                    <img src="images/direct.png" alt=""/>
                                                        <div className="title">Direct</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">STV</div>
                                                    <p>Surat</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">06:40</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">08:00</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="seat">08</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="icon">
                                                    <img src="images/flight-icon.png" alt=""/>
                                                        <div className="number">VA703</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">STV</div>
                                                    <p>Surat</p>
                                                </div>

                                            </td>
                                            <td>
                                                <div className="direct">
                                                    <div className="meter">0h1 70m</div>
                                                    <img src="images/direct.png" alt=""/>
                                                        <div className="title">Direct</div>
                                                </div>
                                            </td>
                                            <td>

                                                <div className="from">
                                                    <div className="start-location">BHU</div>
                                                    <p>Bhavnagar</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">06:40</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">08:00</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="seat">03</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="icon">
                                                    <img src="images/flight-icon.png" alt=""/>
                                                        <div className="number">VA703</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">BHU</div>
                                                    <p>Bhavnagar</p>
                                                </div>


                                            </td>
                                            <td>
                                                <div className="direct">
                                                    <div className="meter">0h1 70m</div>
                                                    <img src="images/direct.png" alt=""/>
                                                        <div className="title">Direct</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">STV</div>
                                                    <p>Surat</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">06:40</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">08:00</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="seat">03</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="icon">
                                                    <img src="images/flight-icon.png" alt=""/>
                                                        <div className="number">VA703</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">STV</div>
                                                    <p>Surat</p>
                                                </div>

                                            </td>
                                            <td>
                                                <div className="direct">
                                                    <div className="meter">0h1 70m</div>
                                                    <img src="images/direct.png" alt=""/>
                                                        <div className="title">Direct</div>
                                                </div>
                                            </td>
                                            <td>

                                                <div className="from">
                                                    <div className="start-location">CITY/XAM</div>
                                                    <p>Amreli</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">06:40</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">08:00</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="seat">04</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="icon">
                                                    <img src="images/flight-icon.png" alt=""/>
                                                        <div className="number">VA703</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">RAJ</div>
                                                    <p>Rajkot</p>
                                                </div>

                                            </td>
                                            <td>
                                                <div className="direct">
                                                    <div className="meter">0h1 70m</div>
                                                    <img src="images/direct.png" alt=""/>
                                                        <div className="title">Direct</div>
                                                </div>
                                            </td>
                                            <td>

                                                <div className="from">
                                                    <div className="start-location">STV</div>
                                                    <p>Surat</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">06:40</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">08:00</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="seat">03</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="icon">
                                                    <img src="images/flight-icon.png" alt=""/>
                                                        <div className="number">VA901</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">STV</div>
                                                    <p>Surat</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="direct">
                                                    <div className="meter">0h1 70m</div>
                                                    <img src="images/direct.png" alt=""/>
                                                        <div className="title">Direct</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">AMD</div>
                                                    <p>Ahmedabad</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">06:40</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">08:00</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="seat">02</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="icon">
                                                    <img src="images/flight-icon.png" alt=""/>
                                                        <div className="number">VA901</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">STV</div>
                                                    <p>Surat</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="direct">
                                                    <div className="meter">0h1 70m</div>
                                                    <img src="images/direct.png" alt=""/>
                                                        <div className="title">Direct</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">AMD</div>
                                                    <p>Ahmedabad</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">06:40</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">08:00</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="seat">02</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="icon">
                                                    <img src="images/flight-icon.png" alt=""/>
                                                        <div className="number">VA901</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">STV</div>
                                                    <p>Surat</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="direct">
                                                    <div className="meter">0h1 70m</div>
                                                    <img src="images/direct.png" alt=""/>
                                                        <div className="title">Direct</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">AMD</div>
                                                    <p>Ahmedabad</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">06:40</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">08:00</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="seat">09</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="icon">
                                                    <img src="images/flight-icon.png" alt=""/>
                                                        <div className="number">VA703</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">STV</div>
                                                    <p>Surat</p>
                                                </div>

                                            </td>
                                            <td>
                                                <div className="direct">
                                                    <div className="meter">0h1 70m</div>
                                                    <img src="images/direct.png" alt=""/>
                                                        <div className="title">Direct</div>
                                                </div>
                                            </td>
                                            <td>

                                                <div className="from">
                                                    <div className="start-location">BHU</div>
                                                    <p>Bhavnagar</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">06:40</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="from">
                                                    <div className="start-location">08:00</div>
                                                    <p>12 April 2022</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="seat">05</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Scheduler