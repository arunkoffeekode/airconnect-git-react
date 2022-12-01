import React from 'react'

function CreateNewPassword() {
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
            <section className='profile-pass'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-xl-3'>
                            <div className='profile-left'>
                                <div className='profile-img'>
                                    <img src="images/profile.png" alt="" />
                                </div>
                                <div className='button-section'>
                                    <ul>
                                        <li><a href="#" class="active"><i class="fa fa-user" aria-hidden="true"></i> My Profile</a></li>
                                        <li><a href="#"> <i class="fa fa-map-marker" aria-hidden="true"></i>Manage Addresses</a></li>
                                        <li><a href="#"><i class="fa fa-users" aria-hidden="true"></i>Traveller </a></li>
                                        <li><a href="#"><i class="fa fa-lock" aria-hidden="true"></i>Change Password</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='profile-logout'>
                                <button type='button' className='lg'>Log Out</button>
                                <div className='sky-lg'>
                                    <img src="images/cloud-bg.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-9 col-md-12 col-sm-12 col-xl-9'>
                            <div className='profile-details'>
                                <div className='pro-title'>
                                    <h1>Profile</h1>
                                    <p>Basic info, for a faster booking experience</p>
                                </div>
                                <div className='edit'>
                                    <button type='button'><i class="fa fa-pencil" aria-hidden="true"></i>
                                        Edit Profile
                                    </button>
                                </div>
                                <div className='profile-form'>
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputName">First name</label>
                                                <input type="text" class="form-control" id="inputName" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="inputEmail">Last Name</label>
                                                <input type="email" class="form-control" id="inputEmail" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail">Country</label>
                                                <select name="" id="" class="form-control">
                                                    <option value="1" selected>India</option>
                                                    <option value="2">UK</option>
                                                    <option value="3">POK</option>
                                                </select>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="inputEmail">Date of Birth</label>
                                                <input type="Date" class="form-control" id="inputEmail" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail">Gender</label>
                                                <input type="text" class="form-control" id="inputEmail" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail">marital status</label>
                                                <input type="text" class="form-control" id="inputEmail" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='profile-details'>
                                <div className='pro-title'>
                                    <h1>Login Details</h1>
                                    <p>Manage your email address and mobile number </p>
                                </div>
                                <div className='profile-form'>
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-8 col-lg-9 col-xl-9">
                                                <label for="inputName">Contact Number</label>
                                                <input type="text" class="form-control" id="inputName" />
                                            </div>
                                            <div class="form-group col-md-4 col-lg-3 col-xl-3">
                                                <label for="inputName" style={{ visibility: 'hidden' }}>Contact Number</label>
                                                <button type='button' className='verify'> <img src="images/confiurmed-chk.png" alt="" />Verified</button>
                                            </div>

                                            <div class="form-group col-md-8 col-lg-9 col-xl-9">
                                                <label for="inputEmail">Email Address</label>
                                                <input type="email" class="form-control" id="inputEmail" />
                                            </div>
                                            <div class="form-group col-md-4 col-lg-3 col-xl-3">
                                                <label for="inputName" style={{ visibility: 'hidden' }}>Contact Number</label>
                                                <button type='button' className='verify'> <img src="images/confiurmed-chk.png" alt="" />Verified</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className='profile-details'>
                                <div className='w-100 mb-5' style={{ float: 'left' }}>
                                    <div className='pro-title'>
                                        <h1>Manage Addresses</h1>
                                        <p>Manage your address </p>
                                    </div>
                                    <div className='edit'>
                                        <button type='button'>
                                            + Add
                                        </button>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-6 col-xl-4 col-sm-12'>
                                        <div className='profile-box'>
                                            <h6>Amit H.</h6>
                                            <p>110, Poddar Plaza, Turning point,
                                                Ghod Dod Road, Surat Gujarat
                                                395007</p>
                                            <div className='contact-no'>+91 1234567890</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-xl-4 col-sm-12'>
                                        <div className='profile-box'>
                                            <h6>Amit H.</h6>
                                            <p>110, Poddar Plaza, Turning point,
                                                Ghod Dod Road, Surat Gujarat
                                                395007</p>
                                            <div className='contact-no'>+91 1234567890</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-xl-4 col-sm-12'>
                                        <div className='profile-box'>
                                            <h6>Amit H.</h6>
                                            <p>110, Poddar Plaza, Turning point,
                                                Ghod Dod Road, Surat Gujarat
                                                395007</p>
                                            <div className='contact-no'>+91 1234567890</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='profile-details'>
                                <div className='w-100 mb-4' style={{ float: 'left' }}>
                                    <div className='pro-title'>
                                        <h1>Travellers</h1>
                                        <p>Manage your Traveller Details  </p>
                                    </div>

                                </div>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 col-xl-6 col-sm-12'>
                                        <div className='traveller'>
                                            <div className='traveller-details'>
                                                <div className='passenger-icon'>
                                                    <img src="images/profile.png" alt="" />

                                                </div>
                                                <div className='name-year'>
                                                    Mayur Mohite, 17 yrs, M
                                                </div>
                                                <button type='button' className='delete-btn'><i class="fa fa-trash" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-xl-6 col-sm-12'>
                                        <div className='traveller'>
                                            <div className='traveller-details'>
                                                <div className='passenger-icon'>
                                                    <img src="images/profile.png" alt="" />

                                                </div>
                                                <div className='name-year'>
                                                    Mayur Mohite, 17 yrs, M
                                                </div>
                                                <button type='button' className='delete-btn'><i class="fa fa-trash" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-xl-6 col-sm-12'>
                                        <div className='traveller'>
                                            <div className='traveller-details'>
                                                <div className='passenger-icon'>
                                                    <img src="images/profile.png" alt="" />

                                                </div>
                                                <div className='name-year'>
                                                    Mayur Mohite, 17 yrs, M
                                                </div>
                                                <button type='button' className='delete-btn'><i class="fa fa-trash" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-xl-6 col-sm-12'>
                                        <div className='traveller'>
                                            <div className='traveller-details'>
                                                <div className='passenger-icon'>
                                                    <img src="images/profile.png" alt="" />

                                                </div>
                                                <div className='name-year'>
                                                    Mayur Mohite, 17 yrs, M
                                                </div>
                                                <button type='button' className='delete-btn'><i class="fa fa-trash" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='profile-details'>
                                <div className='pro-title'>
                                    <h1>Change Password</h1>
                                    <p>Manage your password </p>
                                </div>
                                <div className='edit'>
                                    <button type='button'>
                                        Save
                                    </button>
                                </div>
                                <div className='profile-form'>
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-12 col-lg-9 col-xl-9">
                                                <label for="inputName">Current Password</label>
                                                <input type="password" class="form-control" id="txtPassword" />
                                                <button type="button" id="btnToggle" className="toggle" onClick={pass}>
                                                    <i id="eyeIcon" className="fa fa-eye"></i>
                                                </button>
                                            </div>
                                            <div class="form-group col-md-12 col-lg-9 col-xl-9">
                                                <label for="inputEmail">New Password</label>
                                                <input type="password" class="form-control" id="txtPassword" />
                                                <button type="button" id="btnToggle" className="toggle" onClick={pass}>
                                                    <i id="eyeIcon" className="fa fa-eye"></i>
                                                </button>
                                            </div>
                                            <div class="form-group col-md-12 col-lg-9 col-xl-9">
                                                <label for="inputEmail">Confirm New Password</label>
                                                <input type="password" class="form-control" id="txtPassword" />
                                                <button type="button" id="btnToggle" className="toggle" onClick={pass}>
                                                    <i id="eyeIcon" className="fa fa-eye"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='post-data'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='pass-btn'>
                                            <div class="sky-cancel">
                                                <img src="images/cloud-bg.png" alt="" />
                                            </div>
                                            <button type="button" class="sky-save">Save</button>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="sky-left">
                                            <img src="images/cloud-bg.png" alt="" />
                                        </div>
                                        <button type="button" class="sky-save">Cancel</button>
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

export default CreateNewPassword