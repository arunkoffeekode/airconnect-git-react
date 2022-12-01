import React from 'react'

function Verification() {
    return (
        <div>
            <section className="forms-section">
                <div className="container">
                    <div className="single-title">
                        <h1>Verification required</h1>
                    </div>
                    <p>To continue, please enter OTP below to
                        complete verification.</p>
                    <div className="row justify-content-center align-items-center">
                        <div className="checkout-form-centre">
                            <div className="checkout-login-step">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="inputPhone">Enter OTP </label>
                                            <input type="text" className="form-control" placeholder="Enter OTP" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <div className="login-btn">
                                                <div className="sky-cloud">
                                                    <img src="images/cloud-bg.png" alt="" />
                                                </div>
                                                <button type="button" className="sky-btn">Continue</button>
                                            </div>
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

export default Verification