import React from 'react'

function Contact() {
    return (
        <div>
            <section className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12 ">
                            <div className="contact-title">
                                <h2>Contact Us</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xl-4">
                            <div className="details">
                                <div className="lication-icon">
                                    <img src="images/location.png" alt="" />
                                    <span>Address</span>
                                </div>
                                <h5>VENTURA AIRCONNECT LTD.</h5>
                                <p>803, Luxuria Business Hub, Near VR Mall, Dumas Road, Surat-395007.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xl-4">
                            <div className="details">
                                <div className="lication-icon">
                                    <img src="images/call.png" alt="" />
                                    <span>Phone</span>
                                </div>
                                <h5>call us</h5>
                                <p>Land Line - 0261-2728002 Reservation Inquiry - 9909900100, 18001080108</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xl-4">
                            <div className="details">
                                <div className="lication-icon">
                                    <img src="images/booking.png" alt="" />
                                    <span>Booking</span>
                                </div>
                                <h5>Booking Now</h5>
                                <p>ticket.ventura@gmail.com callcenter@flyairconnect.com</p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <div className="contact-form">
                                <h6>feedback</h6>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputName">Name <span>*</span></label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPhone">mobile Number<span>*</span></label>
                                            <input type="text" className="form-control" id="inputPhone" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail">Email iD<span>*</span></label>
                                            <input type="email" className="form-control" id="inputEmail" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail">PNR <span>*</span></label>
                                            <input type="email" className="form-control" id="inputEmail" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputComments">Massage </label>
                                            <textarea type="text" className="form-control" name="Message" id="inputMessage"
                                                rows="4"></textarea>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label for="inputComments">Rate Us </label>
                                            <ul>
                                                <li className="active">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </li>
                                                <li className="active">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </li>
                                                <li className="active">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label className="btn  btn-lg">
                                                <img src="images/upload.png" alt="" className="upload" />
                                                upload File
                                                {/* <input type="file" hiddenclassName="form-control-file"(change)="fileChanged($event)"
                                        /> */}
                                            </label>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <div className="sky-cloud">
                                                <img src="images/cloud-bg.png" alt="" />
                                            </div>
                                            <button type="button" className="sky-btn">Send</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <div className="frame">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14884.266722323215!2d72.75352882120791!3d21.14974448733337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s803%2C%20Luxuria%20Business%20Hub%2C%20Near%20VR%20Mall%2C%20Dumas%20Road%2C%20Surat-395007.!5e0!3m2!1sen!2sin!4v1650605296115!5m2!1sen!2sin" width="100%" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact