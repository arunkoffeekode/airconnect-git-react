import React from 'react'
import "./flightdetails.css"
function PaxChangeModel() {
    return (
        <div>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div className='d-block'>
                                <h5 class="modal-title" id="exampleModalLongTitle">Add Travellers details</h5>
                            </div>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                        </div>
                        <div class="modal-body">
                            <div className='govt'>
                                <p>name should be match with govt. id proof</p>
                            </div>
                            <div className='psnger'>Passenger 01</div>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputName">First name </label>
                                        <input type="text" className="form-control" id="inputName" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputName">Last Name</label>
                                        <input type="text" className="form-control" id="inputPhone" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputName">Date of Birth</label>
                                        <input type="date" className="form-control" id="inputName" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputName">Gender</label>
                                        <select className="form-control">
                                            <option selected>Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row justify-content-center">
                                    <div className="form-group col-md-4">
                                        <button type='button' className='flight-btn'>Close</button>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <button type='button' className='flight-btn'>Done</button>
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

export default PaxChangeModel