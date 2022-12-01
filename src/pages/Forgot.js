import React from 'react'
import { Link } from "react-router-dom";
function Forgot() {
    return (
        <div>
            <section className="forms-section">
                <div className="container">
                    <div className="single-title">
                        <h1>Forgot Password?</h1>
                    </div>
                    <p>Enter the email address or mobile phone number associated with your account.</p>
                    <div className="row justify-content-center align-items-center">
                        <div className="checkout-form-centre">
                            <div className="checkout-login-step mt-5">
                                <form>
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <div className="forgot-tab">
                                                <button type="button" className="btn">Email</button>
                                                <button type="button" className="btn">Mobile</button>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="inputName">Enter Email ID</label>
                                            <input type="email" className="form-control" id="inputemail" placeholder="Enter Email ID" />
                                        </div>
                                        <div className="form-group col-md-12 mt-3">
                                            <div className="login-btn">
                                                <div className="sky-cloud">
                                                    <img src="images/cloud-bg.png" alt="" />
                                                </div>
                                                <button type="button" className="sky-btn">Next</button>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12 mt-3">
                                            <p>Already registered?  <Link to="/login"> Log In</Link> </p>
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

export default Forgot