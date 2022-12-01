import React from 'react'
import "./Rebooking.css"
function RebookingModel() {
    return (
        <div>
            <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Reschedule your flight - pic a new date </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className='chkweb'>

                            <div className='start-table'>
                                <table class="table">
                                    <thead>
                                        <tr>
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

                        <div class="modal-body mt-3">
                            <div className='rebok'>
                                <form>
                                    <div className="form-row justify-content-center mb-3">
                                        <div className="form-group col-md-9">
                                            <h2>Pic your preferred date to change flighe</h2>
                                            <input type="date" className="form-control" id="inputName" />
                                        </div>
                                    </div>
                                    <div className="form-row justify-content-center mb-3">
                                        <div className='col-lg-3 col-md-4 col-sm-12 col-xl-3'>
                                            <button type='button' className='rebok-btn'>Cancel</button>
                                        </div>
                                        <div className='col-lg-3 col-md-4 col-sm-12 col-xl-3'>
                                            <button type='button' className='rebok-btn'>Select Flight</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RebookingModel