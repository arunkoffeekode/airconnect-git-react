import React from 'react'
import { Link } from "react-router-dom";
function Account() {

    const newpass=()=>{
        let passwordInput = document.getElementById("txtPassword"),
        toggle = document.getElementById("btnToggle"),
        icon = document.getElementById("eyeIcon");
    function togglePassword() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.classList.add("fa-eye-slash");
            //toggle.innerHTML = 'hide';
        } else {
            passwordInput.type = "password";
            icon.classList.remove("fa-eye-slash");
            //toggle.innerHTML = 'show';
        }
    }
    function checkInput() {}
    toggle.addEventListener("click", togglePassword, false);
    passwordInput.addEventListener("keyup", checkInput, false);
    }

    const newpass2=()=>{
        let passwordInput = document.getElementById("txtpass"),
        toggle = document.getElementById("btnToggle1"),
        icon = document.getElementById("eyeIcon1");
    function togglePassword() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.classList.add("fa-eye-slash");
            //toggle.innerHTML = 'hide';
        } else {
            passwordInput.type = "password";
            icon.classList.remove("fa-eye-slash");
            //toggle.innerHTML = 'show';
        }
    }
    function checkInput() {}
    toggle.addEventListener("click", togglePassword, false);
    passwordInput.addEventListener("keyup", checkInput, false);
    }
    return (
        <div>
            <section className="forms-section">
                <div className="container">
                    <div className="single-title">
                        <h1>Create Account</h1>
                    </div>
                    <p>Sign up with your mobile number and Email ID to get started</p>
                    <div className="row justify-content-center align-items-center">
                        <div className="checkout-form-centre" style={{maxWidth: '1000px'}}>
                            <div className="checkout-login-step mt-5">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <input type="radio" id="user" name="user" checked/>
                                            <label for="user">User Account</label>
                                            <input type="radio" id="agent" name="user" />
                                            <label for="agent">Agent Account</label>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputName">First name</label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Last Name</label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Country</label>
                                            <select name="" id="" className="form-control">
                                                <option value="1" selected>india</option>
                                                <option value="2">india</option>
                                                <option value="3">india</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Date of Birth</label>
                                            <input type="date" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Contact Number</label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputName">Email Address</label>
                                            <input type="email" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Password</label>
                                            <input type="password" id="txtPassword" className="form-control"
                                                placeholder="New password" />
                                            <button type="button" id="btnToggle" className="toggle" onClick={newpass}>
                                                <i id="eyeIcon" className="fa fa-eye"></i>
                                            </button>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">Confirm Password</label>
                                            <input type="password" id="txtpass" className="form-control"
                                                placeholder="New password" />
                                            <button type="button" id="btnToggle1" className="toggle" onClick={newpass2}>
                                                <i id="eyeIcon1" className="fa fa-eye"></i>
                                            </button>
                                        </div>
                                        <div className="form-group col-md-12 mt-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    I agree to <a href="">Terms of Service, Privacy Policy </a>and<a href="">
                                                        Content Policies</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12 mt-3">
                                            <div className="login-btn">
                                                <div className="sky-cloud">
                                                    <img src="images/cloud-bg.png" alt="" />
                                                </div>
                                                <button type="button" className="sky-btn">Register</button>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12 mt-3">
                                            <p>Already registered? <Link to="/login"> Log In</Link> </p>
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

export default Account