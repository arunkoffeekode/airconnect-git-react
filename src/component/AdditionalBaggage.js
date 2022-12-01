import React from 'react'
import "./AdditionalBaggage.css"

function AdditionalBaggage() {
    return (
        <div>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle"><img src="images/additional-bag.png"></img> Add additional baggage</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <div className='row'>
                                <div className='col-lg-6 col-md-12 col-sm-12 col-xl-6'>
                                    <div className='bag-box'>
                                        <div className='show-bag'>
                                            <div className='bag-name'>
                                                Excess Baggage 3 Kg
                                            </div>
                                            <div className='right-bag'>
                                                <div style={{ display: 'inline-flex' }}>
                                                    <button type="button" className="decress1">-</button>
                                                    <div className="digit1">01</div>
                                                    <button type="button" className="incress1">+</button>
                                                    <p>₹2250</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 col-sm-12 col-xl-6'>
                                    <div className='bag-box'>
                                        <div className='show-bag'>
                                            <div className='bag-name'>
                                                Excess Baggage 3 Kg
                                            </div>
                                            <div className='right-bag'>
                                                <div style={{ display: 'inline-flex' }}>
                                                    <button type="button" className="decress1">-</button>
                                                    <div className="digit1">01</div>
                                                    <button type="button" className="incress1">+</button>
                                                    <p>₹2250</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 col-sm-12 col-xl-6'>
                                    <div className='bag-box'>
                                        <div className='show-bag'>
                                            <div className='bag-name'>
                                                Excess Baggage 3 Kg
                                            </div>
                                            <div className='right-bag'>
                                                <div style={{ display: 'inline-flex' }}>
                                                    <button type="button" className="decress1">-</button>
                                                    <div className="digit1">01</div>
                                                    <button type="button" className="incress1">+</button>
                                                    <p>₹2250</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 col-sm-12 col-xl-6'>
                                    <div className='bag-box'>
                                        <div className='show-bag'>
                                            <div className='bag-name'>
                                                Excess Baggage 3 Kg
                                            </div>
                                            <div className='right-bag'>
                                                <div style={{ display: 'inline-flex' }}>
                                                    <button type="button" className="decress1">-</button>
                                                    <div className="digit1">01</div>
                                                    <button type="button" className="incress1">+</button>
                                                    <p>₹2250</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4'>
                                    <div className='md-btn'>
                                        <button type='button' className='btn-model'>Close</button>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4'>
                                    <div className='md-btn'>
                                        <button type='button' className='btn-model'>Done</button>
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

export default AdditionalBaggage