import React from 'react'

import OwlCarousel from 'react-owl-carousel';

//Owl Carousel Settings
const options = {
    loop: true,
    dots: false,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    smartSpeed: 70,
    responsiveClass: true,
    // navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navigation: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 1,
            nav: true,
        },
        1000: {
            items: 1,
            nav: true,
            loop: true,
        },
    },
};

function Wallet() {
    return (
        <div>
            <section className='wallet'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-12 col-sm-12 col-xl-8'>
                            <div className='wallet-box'>
                                <div className='wallet-title'>
                                    <p>Airconnect WALLET</p>
                                </div>
                                <div className='start-wallet'>
                                    <h6>Total Balance</h6>
                                    <h1>₹ 3000.00</h1>
                                </div>
                                <div className='wallet-btn-section'>
                                    <button type='button' className='wallet-btn'><i class="fa fa-arrow-circle-o-down"></i> Add Money</button>
                                    <button type='button' className='wallet-btn'><i class="fa fa-home"></i> Withdraw </button>
                                    <button type='button' className='wallet-btn'><i class="fa fa-retweet"></i> Transfer </button>
                                </div>
                            </div>
                            <div className='pay-details'>
                                <div className='pay-mane'>
                                    Passbook
                                </div>
                                <div className='passbok'>
                                    <img src="images/passbook.png" alt="" />
                                </div>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ width: '60%' }}>transactions
                                        </th>
                                        <th scope="col" style={{ width: '20%' }}> amount</th>
                                        <th scope="col" style={{ width: '20%' }}>status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Shipping Address">
                                            <div class="content-pane clearfix">
                                                <div className='rufra-icon'>
                                                    <i class="fa fa-arrow-circle-o-down"></i>
                                                </div>
                                                <div class="rudra-info-box">
                                                    <h4>Added to wallet</h4>
                                                    <p>29 AUG, 12:20 PM <br />FROM Bank of Baroda<br />Transaction ID 41280513600</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-label="Payment Method">
                                            <div class="price-shopping-cart clearfix">
                                                ₹ 1000
                                            </div>
                                        </td>
                                        <td data-label="Payment Method">
                                            <div class="price-shopping-cart clearfix" style={{ color: '#25D366' }}>
                                                ₹ 1000
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-label="Shipping Address">
                                            <div class="content-pane clearfix">
                                                <div className='rufra-icon'>
                                                    <i class="fa fa-arrow-circle-o-down"></i>
                                                </div>
                                                <div class="rudra-info-box">
                                                    <h4>Added to wallet</h4>
                                                    <p>29 AUG, 12:20 PM <br />FROM Bank of Baroda<br />Transaction ID 41280513600</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-label="Payment Method">
                                            <div class="price-shopping-cart clearfix">
                                                ₹ 1000
                                            </div>
                                        </td>
                                        <td data-label="Payment Method">
                                            <div class="price-shopping-cart clearfix" style={{ color: '#25D366' }}>
                                                ₹ 1000
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12 col-xl-4'>
                            <div className='wallet-box'>
                                <div className='wallet-title'>
                                    <p>Card</p>
                                </div>
                                <div className='atm-card'>
                                    <OwlCarousel className='owl-carousel owl-theme' loop margin={10} items={4} nav autoplay={true} {...options}>
                                        <div class="item">
                                            <div className='atmcd'>
                                                <img src="images/atm-card.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div className='atmcd'>
                                                <img src="images/atm-card.png" alt="" />
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                                <div className='activity'>
                                    <h6>Recent activity</h6>
                                    <div class="rupee">
                                        <div class="logo-icon">
                                            <img src="images/hdfc.png" alt="" />
                                            <div className='d-block'>
                                                <div class="title">hdfc card add on</div>
                                                <p>29 AUG, 12:20 PM</p></div>
                                        </div>
                                        <div class="green-button">
                                            <h6>4D</h6>
                                        </div>
                                    </div>

                                    <div class="rupee">
                                        <div class="logo-icon">
                                            <img src="images/lock.png" alt="" />
                                            <div className='d-block'>
                                                <div class="title">Pin changed successfully</div>
                                                <p>29 AUG, 12:20 PM</p></div>
                                        </div>
                                        <div class="green-button">
                                            <h6>4D</h6>
                                        </div>
                                    </div>

                                    <div class="rupee">
                                        <div class="logo-icon">
                                            <img src="images/lock.png" alt="" />
                                            <div className='d-block'>
                                                <div class="title">Money transfer successfully</div>
                                                <p>29 AUG, 12:20 PM</p></div>
                                        </div>
                                        <div class="green-button">
                                            <h6>4D</h6>
                                        </div>
                                    </div>

                                    <div class="rupee">
                                        <div class="logo-icon">
                                            <img src="images/card.png" alt="" />
                                            <div className='d-block'>
                                                <div class="title">hdfc card update successfully</div>
                                                <p>29 AUG, 12:20 PM</p></div>
                                        </div>
                                        <div class="green-button">
                                            <h6>4D</h6>
                                        </div>
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

export default Wallet