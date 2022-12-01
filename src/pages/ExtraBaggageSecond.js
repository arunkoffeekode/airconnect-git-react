import React from 'react'
import AdditionalBaggage from '../component/AdditionalBaggage'
import PrebookMeals from '../component/PrebookMeals'

function ExtraBaggageSecond() {
    return (
        <div>
            <div className='webcheck'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='webcheck-header'>
                                <h1>Extra baggage & Meals</h1>
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
                            <div className='chkweb'>
                                <h2><img src="images/additional-bag.png"></img> additional baggage</h2>
                                <div className='start-table'>
                                    <table class="table">
                                        <thead>
                                            <tr style={{ borderRadius: '30px' }}>
                                                <th><input type="checkbox" id="checkbox1" name="checkbox1" /></th>

                                                <th scope="col">Pax no</th>
                                                <th scope="col">Pasanger Name</th>
                                                <th scope="col">No. of Bags</th>
                                                <th scope="col">Add More</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox" id="checkbox1" name="checkbox1" /></td>
                                                <td>01</td>
                                                <td>
                                                    <div className='user-details'>
                                                        <div className='passanger-icon'>
                                                            <img src="images/passanger-icon.png" alt=""></img></div>
                                                        Mr. Adesh Mishra</div></td>
                                                <td>
                                                    <div className='d-flex'>
                                                        <div className='no'>02</div>
                                                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                                            1 piece x 7 kg / person
                                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                                            1 piece x 7 kg / person
                                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td>
                                                    <button type='button' className='change-btn' data-toggle="modal" data-target="#exampleModalCenter">+</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><input type="checkbox" id="checkbox1" name="checkbox1" /></td>
                                                <td>01</td>
                                                <td>
                                                    <div className='user-details'>
                                                        <div className='passanger-icon'>
                                                            <img src="images/childern.png" alt=""></img></div>
                                                        Mr. Adesh Mishra</div></td>
                                                <td>
                                                    <div className='d-flex'>
                                                        <div className='no'>01</div>
                                                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                                            1 piece x 7 kg / person
                                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </td>

                                                <td>
                                                    <button type='button' className='change-btn' data-toggle="modal" data-target="#exampleModalCenter">+</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><input type="checkbox" id="checkbox1" name="checkbox1" /></td>
                                                <td>01</td>
                                                <td>
                                                    <div className='user-details'>
                                                        <div className='passanger-icon'>
                                                            <img src="images/baby-icon.png" alt=""></img></div>
                                                        Mr. Adesh Mishra</div></td>
                                                <td>
                                                    <div className='d-flex'>
                                                        <div className='no'>00</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button type='button' className='change-btn' data-toggle="modal" data-target="#exampleModalCenter">+</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='chkweb'>
                                <h2><img src="images/meal.png"></img> Prebook your meals </h2>
                                <div className='start-table'>
                                    <table class="table">
                                        <thead>
                                            <tr style={{ borderRadius: '30px' }}>
                                                <th><input type="checkbox" id="checkbox1" name="checkbox1" /></th>

                                                <th scope="col">Pax no</th>
                                                <th scope="col">Pasanger Name</th>
                                                <th scope="col">No. of Meals</th>
                                                <th scope="col">Add More</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox" id="checkbox1" name="checkbox1" /></td>
                                                <td>01</td>
                                                <td>
                                                    <div className='user-details'>
                                                        <div className='passanger-icon'>
                                                            <img src="images/passanger-icon.png" alt=""></img></div>
                                                        Mr. Adesh Mishra</div></td>
                                                <td>
                                                    <div className='d-flex'>
                                                        <div className='no'>01</div>
                                                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                                            Cucumber tomato cheese multigrain bread
                                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td>
                                                    <button type='button' className='change-btn' data-toggle="modal" data-target="#exampleModalCenter1">+</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><input type="checkbox" id="checkbox1" name="checkbox1" /></td>
                                                <td>01</td>
                                                <td>
                                                    <div className='user-details'>
                                                        <div className='passanger-icon'>
                                                            <img src="images/childern.png" alt=""></img></div>
                                                        Mr. Adesh Mishra</div></td>
                                                <td>
                                                    <div className='d-flex'>
                                                        <div className='no'>01</div>
                                                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                                            Vegetable Daliya
                                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </td>

                                                <td>
                                                    <button type='button' className='change-btn'>+</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><input type="checkbox" id="checkbox1" name="checkbox1" /></td>
                                                <td>01</td>
                                                <td>
                                                    <div className='user-details'>
                                                        <div className='passanger-icon'>
                                                            <img src="images/baby-icon.png" alt=""></img></div>
                                                        Mr. Adesh Mishra</div></td>
                                                <td>
                                                    <div className='d-flex'>
                                                        <div className='no'>00</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button type='button' className='change-btn'>+</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='chkweb'>
                                <div className='additional-details mb-4'>
                                    <h1>additional  details</h1>
                                    <div className='amt'>All Amount in INR</div>
                                </div>
                                <div className='additional-details'>
                                    <h6>Additional baggage</h6>
                                    <p>1 Additional baggage</p>
                                    <div className='bag-value'>300.00</div>
                                </div>
                                <div className='additional-details'>
                                    <p>1 Additional bag piece</p>
                                    <div className='bag-value'>89.00</div>
                                </div>
                                <div className='additional-details mt-4'>
                                    <h6>Prebook your meals</h6>
                                    <p><img src='images/check-box.png'></img> Vegetable Daliya</p>
                                    <div className='bag-value'>300.00</div>
                                </div>
                                <div className='bag-total'>
                                    <div className='pay-amt'>Total Pay Amount :</div>
                                    <div className='tol'>689.00</div>
                                </div>
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
            <AdditionalBaggage />
            <PrebookMeals />
        </div>
    )
}

export default ExtraBaggageSecond