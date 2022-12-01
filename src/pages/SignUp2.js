import React from 'react'

function SignUp2() {
    return (
        <div>
            <section className="forms-section">
                <div className="container">
                    <div className="single-title">
                        <h1>New Agent Sign-Up</h1>
                    </div>
                    <p>Please fill the details below:</p>
                    <div className="section-complete">
                        <ul>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                        </ul>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="checkout-form-centre">
                            <div className="checkout-login-step">
                                <h5>Your account</h5>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputName">Agency Name<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">IATA Code</label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="inputPhone">Login ID<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Password<span>*</span></label>
                                            <input type="password" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Confirm Password<span>*</span></label>
                                            <input type="password" className="form-control" id="inputName" />
                                        </div>

                                        <h5>GST details</h5>
                                        <div className="form-group col-md-6">
                                            <label for="inputName">GST Number</label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">GST Email</label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">GST Company Name</label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">GST Address</label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>

                                        <div className="form-group col-md-12 mt-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    I agree to <a href="">Terms of Service, Privacy Policy </a>and <a href="">
                                                        Content Policies</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12 mt-3">
                                            <div className="login-btn">
                                                <div className="sky-cloud">
                                                    <img src="images/cloud-bg.png" alt="" />
                                                </div>
                                                <button type="button" className="sky-btn">Submit</button>
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

export default SignUp2