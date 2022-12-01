import React from 'react'

function FlightSchedule() {
    return (
        <div>
            <section className="schedule">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                        <div className="contact-title" style={{ marginBottom: '25px' }}>
                            <h2>FLIGHT RESCHEDULED OR CANCELLED?</h2>
                        </div>
                        <p>Choose an alternate flight at no additional cost<br />
                            OR<br />
                            Check your eligibility for a full refund</p>
                    </div>
                </div>
                <div className="flight-section"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <div className="schedule-details" style={{ overflowX: 'hidden' }}>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputName">PNR <span>*</span></label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">E-MAIL / LAST NAME<span>*</span></label>
                                            <input type="text" className="form-control" id="inputPhone" />
                                        </div>
                                        <div className="form-group col-md-12 mt-5 mb-5">
                                            <div className="sky-cloud">
                                                <img src="images/cloud-bg.png" alt="" />
                                            </div>
                                            <button type="button" className="sky-btn">Retrieve Booking</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default FlightSchedule