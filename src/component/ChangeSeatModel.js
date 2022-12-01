import React from 'react'
import "./ChangeSeatModel.css"

function ChangeSeatModel() {
    return (
        <div>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Select/Change Seat</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-12 col-sm-12 col-xl-4'>
                                        <div className='set'>
                                            <div class="change-set"><img src="images/flight-icon.png" alt="" /><div class="number121">VA901</div></div>
                                            <div className='set-details'>
                                                <p>Passenger 01</p>
                                                <div className='client-name'>Mr. Adesh Mishra</div>
                                                <button type='button' className='delete-bnt'>
                                                    <img src='images/confiurmed-chk.png' />
                                                    01A Back <i class="fa fa-trash" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-8 col-md-12 col-sm-12 col-xl-8'>
                                        <div className='chenge-set-m'>
                                            <div class="seat-book1"><ul><li><img src="images/blue-seat.png" alt="" /><div class="seat-rupee">₹3333</div></li><li><img src="images/green-seat.png" alt="" /><div class="seat-rupee">₹2727</div></li><li><img src="images/gray-seat.png" alt="" /><div class="seat-rupee">Book</div></li></ul></div>
                                            <img src='images/peack-seat.png' />
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-6 col-md-12 col-xl-6 col-sm-12'>
                                                <button type='button' className='clode'>Close</button>
                                            </div>
                                            <div className='col-lg-6 col-md-12 col-xl-6 col-sm-12'>
                                                <button type='button' className='clode' >Done</button>
                                            </div>
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

export default ChangeSeatModel