import React from 'react'

function BoardingPass() {
    return (
        <div>
                <div className='webcheck'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='webcheck-header'>
                                <h1>Web Check-In</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='boardingpass'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='boardingpass-box'>
                                <div className='row'>
                                    <div className='col-lg-7 col-md-12 col-sm-12 col-xl-7'>
                                        <div className='boardingpass-left'>
                                            <h2>Your bag tag has been successfully generated!</h2>
                                            <p>Please print a copy of your baggage tag online and carry at the airport</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-md-12 col-xl-5 col-sm-12'>
                                        <div className='view-btn'>
                                            <button type='button' className='view'>View boarding pass</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                                        <div className='check-route12'>
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
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4'>
                                        <div className='barcode-section'>
                                            <div className='logo-bar'>
                                                <img src="images/logo.png" alt="" />
                                                <label>123456</label>
                                            </div>
                                            <div className='bar'>
                                                <img src="images/bar.png" alt="" />
                                                <div className='text21'>1234578900</div>
                                            </div>
                                            <div className='bar'>
                                                <img src="images/bar1.png" alt="" />
                                                <div className='text21'>Mr. Adesh Mishra</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4'>
                                        <div className='barcode-section'>
                                            <div className='logo-bar'>
                                                <img src="images/logo.png" alt="" />
                                                <label>123456</label>
                                            </div>
                                            <div className='bar'>
                                                <img src="images/bar.png" alt="" />
                                                <div className='text21'>1234578900</div>
                                            </div>
                                            <div className='bar'>
                                                <img src="images/bar1.png" alt="" />
                                                <div className='text21'>Mr. Adesh Mishra</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                                        <div className='bar-btn'>
                                            <button className='bar-button' type='button'>Email</button>
                                            <button className='bar-button' type='button'>Download</button>
                                            <button className='bar-button' type='button'>Print</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BoardingPass