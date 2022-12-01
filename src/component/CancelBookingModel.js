import React from 'react'
import "./flightdetails.css"
function CancelBookingModel() {
    return (
        <div>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div className='d-block'>
                                <h5 class="modal-title" id="exampleModalLongTitle">Cancel Booking</h5>
                                <p>Are you sure you want to cancel booking</p>
                            </div>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                        </div>
                        <div class="modal-body">
                            <div className="form-row justify-content-center">
                                <div className="form-group col-md-4">
                                    <button type='button' className='flight-btn'>No</button>
                                </div>
                                <div className="form-group col-md-4">
                                    <button type='button' className='flight-btn'>Yes</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CancelBookingModel