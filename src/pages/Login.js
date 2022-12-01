import React from 'react'
import { Link } from "react-router-dom";
function Login() {

    const pass = () => {
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

        function checkInput() {
        }
        toggle.addEventListener("click", togglePassword, false);
        passwordInput.addEventListener("keyup", checkInput, false);
    }
    return (
        <div>
            <section className="forms-section">
                <div className="container">
                    <div className="single-title">
                        <h1>Account Login</h1>
                    </div>
                    <p>Welcome back! Log In with your User ID, Login ID or mobile Number*</p>
                    <div className="row justify-content-center align-items-center">
                        <div className="checkout-form-centre">
                            <div className="checkout-login-step">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="inputName">User ID/Login ID/Mobile Number <span>*</span></label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="inputPhone">Password</label>
                                            <input type="password" id="txtPassword" className="form-control"
                                                placeholder="New password" />
                                            <button type="button" id="btnToggle" className="toggle" onClick={pass}>
                                                <i id="eyeIcon" className="fa fa-eye"></i>
                                            </button>
                                        </div>

                                        <Link to="/forgot">Forget Password?</Link>
                                        
                                        <div className="form-group col-md-12">
                                            <div className="login-btn">
                                                <div className="sky-cloud">
                                                    <img src="images/cloud-bg.png" alt="" />
                                                </div>
                                                <button type="button" className="sky-btn"> Log In</button>
                                            </div>
                                        </div>
                                        <div className="sign">
                                            <h6>Don't have a Account? <Link to="/signup">Sign up Now</Link></h6>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div className="or">
                                <span>Or log in with</span>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="checkout-form-centre" style={{ marginTop: '0px' }}>
                            <div className="checkout-login-step">
                                <div className="travel-agent">
                                    <h6>Login as <a href="">Travel Agent</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login