import React from 'react'

function GstDetails() {
    return (
        <div>
            <div className='webcheck'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='webcheck-header'>
                                <h1>GST Details Update</h1>
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
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='gst'>
                                <div className='d-flex'><input type="checkbox" id="checkbox1" name="checkbox1" className='mr-3' style={{ height: '35px' }} /><h2>GST details <span>(Travelling for business purpose?)</span></h2></div>
                                <p>After complete booking GST invoice will be not provided </p>
                                <form>
                                    <div className="form-row mt-3">
                                        <div className="form-group col-md-6">
                                            <label for="inputName">GST Number <span>*</span></label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputName">Company Name<span>*</span></label>
                                            <input type="text" className="form-control" id="inputPhone" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputName">Company GST Email</label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputName">Company Contact Number</label>
                                            <input type="text" className="form-control" id="inputPhone" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputName">Company Address 01</label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputName">Company Address 02</label>
                                            <input type="text" className="form-control" id="inputPhone" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div className="flight-status-btn1">
                                <div className="sky-cloud-flight1">
                                    <img src="images/cloud-bg.png" alt="" />
                                </div>
                                <button type="button" className="flight-btn1">Finish</button>
                            </div>
                            <div className="flight-status-btn1">
                                <button type="button" className="flight-btn1">bACK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GstDetails