import React from 'react'
import { Link } from "react-router-dom";

function SignUp() {
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
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="checkout-form-centre">
                            <div className="checkout-login-step">
                                <h5>Contact Person</h5>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputName">First Name<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Last Name<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="inputPhone">Designation<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <h5>Alternate Contact Person</h5>
                                        <div className="form-group col-md-6">
                                            <label for="inputName">First Name<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Last Name<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="inputPhone">Designation<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>

                                        <div className="form-group col-md-12">
                                            <div className="login-btn">
                                                <div className="sky-cloud">
                                                    <img src="images/cloud-bg.png" alt=""/>
                                                </div>
                                                <Link to="/signup1" type="button" className="sky-btn">cONTINUE</Link>
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

export default SignUp