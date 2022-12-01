import React from 'react'
import { Link } from "react-router-dom";
function SignUp1() {
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
                            <li></li>
                        </ul>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="checkout-form-centre">
                            <div className="checkout-login-step">
                                <h5>Contact</h5>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputName">Phone<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Alternate Contact Phone<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Email<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Alternate Contact Email<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Fax</label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">No. of Users</label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <h5>Address</h5>
                                        <div className="form-group col-md-6">
                                            <label for="inputName">Address1<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Address2</label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Pin Code<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Country<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">City<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Pan Card No.<span>*</span></label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>

                                        <div className="form-group col-md-12">
                                            <div className="login-btn">
                                                <div className="sky-cloud">
                                                    <img src="images/cloud-bg.png" alt=""/>
                                                </div>
                                                <Link to="/signup2" type="button" className="sky-btn" >cONTINUE</Link>
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

export default SignUp1