import React from 'react'

function MyBooking() {
    return (
        <div>
            <div className='webcheck'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='webcheck-header'>
                                <h1>my Booking</h1>
                                <div className="Subscribe">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search for booking" />
                                        <button className="input-group-text"> Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-book' style={{ background: '#e6e8f4' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='book-btn'>
                                <ul>
                                    <li>
                                        <button type='button' className='btn-bk active'><i class="fa fa-briefcase" aria-hidden="true"></i> Upcoming  </button>
                                    </li>
                                    <li>
                                        <button type='button' className='btn-bk'><i class="fa fa-file-excel-o" aria-hidden="true"></i> Cancelled </button>
                                    </li>
                                    <li>
                                        <button type='button' className='btn-bk'><i class="fa fa-check-circle" aria-hidden="true"></i> Completed </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='line-book'>
                                <div className='start-table scrollbar'>
                                    <table className='table'>
                                        <tr>
                                            <td><div className='img-display'>
                                                <img src="images/icon-logo.png" alt="" />
                                                <h5>VA904</h5>
                                            </div></td>
                                            <td>
                                                <div className="swap-route">
                                                    <div className="left-route">
                                                        <div className="block">
                                                            <h6>AMD - Ahmedabad </h6>
                                                            <div className="date">
                                                                31 Mar, 2022
                                                            </div>

                                                            <div className="time">Departure: 07:20 AM</div>
                                                        </div>
                                                    </div>
                                                    <div className="swap-icon">
                                                        <button type="button"><img src="images/swap.png" alt="" /></button>
                                                    </div>
                                                    <div className="right-route">
                                                        <div className="block1">
                                                            <h6>STU - Surat</h6>
                                                            <div className="date1">
                                                                31 Mar, 2022
                                                            </div>

                                                            <div className="time1">Arrival: 08:40 PM</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='canl'>
                                                    <p>Duration</p>
                                                    <h5>0h 70mscd</h5>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='canl'>
                                                    <p>Status</p>
                                                    <h5 style={{ color: '#25D366' }}>conform</h5>
                                                </div>
                                            </td>
                                            <td><button type='button' className='dev'>₹ 2222.00</button></td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="drpbtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a class="dropdown-item" href="#">Download Ticket</a></li>
                                                        <li><a class="dropdown-item" href="#">Rebooking</a></li>
                                                        <li><a class="dropdown-item" href="#">Cancel</a></li>

                                                     
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>


                            </div>
                            <div className='line-book'>
                                <div className='start-table scrollbar'>
                                    <table className='table'>
                                        <tr>
                                            <td><div className='img-display'>
                                                <img src="images/icon-logo.png" alt="" />
                                                <h5>VA904</h5>
                                            </div></td>
                                            <td>
                                                <div className="swap-route">
                                                    <div className="left-route">
                                                        <div className="block">
                                                            <h6>AMD - Ahmedabad </h6>
                                                            <div className="date">
                                                                31 Mar, 2022
                                                            </div>

                                                            <div className="time">Departure: 07:20 AM</div>
                                                        </div>
                                                    </div>
                                                    <div className="swap-icon">
                                                        <button type="button"><img src="images/swap.png" alt="" /></button>
                                                    </div>
                                                    <div className="right-route">
                                                        <div className="block1">
                                                            <h6>STU - Surat</h6>
                                                            <div className="date1">
                                                                31 Mar, 2022
                                                            </div>

                                                            <div className="time1">Arrival: 08:40 PM</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='canl'>
                                                    <p>Duration</p>
                                                    <h5>0h 70mscd</h5>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='canl'>
                                                    <p>Status</p>
                                                    <h5 style={{ color: '#25D366' }}>cancel</h5>
                                                </div>
                                            </td>
                                            <td><button type='button' className='dev'>₹ 2222.00</button></td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="drpbtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MyBooking