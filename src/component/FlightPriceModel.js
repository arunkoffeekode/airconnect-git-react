import React from 'react'
import "./flightdetails.css"

function FlightPriceModel() {
    return (
        <div>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div className='d-block'>
                                <h5 class="modal-title" id="exampleModalLongTitle">Send Confirmation</h5>
                                <p>To  Email your reprint, please enter the  preferred  email Address below. </p>
                            </div>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                        </div>
                        <div class="modal-body">
                            <form>

                                <div className="form-row justify-content-center">
                                    <div className="form-group col-md-10">
                                        <label for="inputName">Primary Email <span>*</span> </label>
                                        <input type="text" className="form-control" id="inputName" />
                                    </div>
                                    <div className="form-group col-md-10">
                                        <label for="inputName">Secondary email</label>
                                        <input type="email" className="form-control" id="inputPhone" />
                                    </div>
                                </div>
                                <div className="form-row justify-content-center">
                                    <div className="form-group col-md-4">
                                        <button type='button' className='flight-btn'>Print ticket</button>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <button type='button' className='flight-btn'>sand ticket</button>
                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightPriceModel