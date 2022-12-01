import React from 'react'
import RebookingModel from '../component/RebookingModel'
function Rebooking() {
    return (
        <div>
            <div className='webcheck'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='webcheck-header'>
                                <h1>Rebooking</h1>
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
                                <h2>Please select your preferred flight</h2>
                                <div className='start-table'>
                                    <table class="table">
                                        <thead>
                                            <tr style={{ borderRadius: '30px' }}>
                                                <th>  <input type="checkbox" id="checkbox1" name="checkbox1" /></th>
                                                <th scope="col">Flight No</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">From</th>
                                                <th scope="col">To</th>
                                                <th scope="col">Departure</th>
                                                <th scope="col">Arrival</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox" id="checkbox2" name="checkbox2" /></td>
                                                <td>VA904</td>
                                                <td>Direct</td>
                                                <td>16 june 22</td>
                                                <td>Ahmedabad</td>
                                                <td>Surat</td>
                                                <td><div className='text-blue'>07:20</div></td>
                                                <td><div className='text-blue'>08:20</div></td>
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
                                <button type="button" className="flight-btn1" data-toggle="modal" data-target="#exampleModalCenter2">Select & Continue</button>
                            </div>
                            <div className="flight-status-btn1">
                                <button type="button" className="flight-btn1">bACK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RebookingModel></RebookingModel>
        </div>
    )
}

export default Rebooking