import React from 'react'

function NewPassword() {

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
                        <h1>Create new password</h1>
                    </div>
                    <p>We'll ask for this password whenever you sign in.</p>
                    <div className="row justify-content-center align-items-center">
                        <div className="checkout-form-centre">
                            <div className="checkout-login-step">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="inputPhone">New password</label>
                                            <input type="password" id="txtPassword" className="form-control"
                                                placeholder="New password" />
                                            <button type="button" id="btnToggle" className="toggle" onClick={newpass}>
                                                <i id="eyeIcon" className="fa fa-eye"></i>
                                            </button>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="inputPhone">Confirm Password</label>
                                            <input type="password" id="txtpass" className="form-control"
                                                placeholder="Confirm Password" />
                                            <button type="button" id="btnToggle1" className="toggle" onClick={newpass2}>
                                                <i id="eyeIcon1" className="fa fa-eye"></i>
                                            </button>
                                        </div>

                                        <div className="form-group col-md-12">
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

export default NewPassword