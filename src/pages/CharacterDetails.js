import React from 'react'

function CharacterDetails() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                        <div className="character-section"></div>
                    </div>
                </div>
            </div>
            <section className="character-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <div className="character-content">
                                <h2>Airto VA904</h2>
                                <h6>PRIVATE CHARTER </h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit viverra non turpis posuere. Nunc
                                    sed ornare sit eu. Arcu ipsum dis dis elementum eget gravida fames nulla vitae. </p>

                                <p> Viverra eu sed laoreet egestas lectus tempus interdum. Dui, nibh arcu ut posuere purus etiam
                                    sit facilisis. Posuere eget aliquet amet mi sed sagittis, eget tellus nec. Tellus at integer
                                    feugiat aliquam nibh scelerisque facilisi non magna. Ultrices ultricies felis leo eget. </p>

                                <p>Maecenas proin facilisis nullam bibendum blandit dignissim sit sit proin. Fermentum pharetra
                                    tempor diam sit volutpat eleifend non integer. Etiam sit tincidunt dis orci, aenean quam
                                    tempus suspendisse.</p>
                            </div>
                            <div className="character-small-box">
                                <ul>
                                    <li>
                                        <div className="round">
                                            <img src="images/air-1.png" alt="" />
                                            <h6>Height: 173.74 cm</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="round">
                                            <img src="images/air-2.png" alt="" />
                                            <h6>Speed: 466 kts</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="round">
                                            <img src="images/air-3.png" alt="" />
                                            <h6>Range: 2500 nm</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="round">
                                            <img src="images/air-4.png" alt="" />
                                            <h6>9 Seats</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="round">
                                            <img src="images/air-5.png" alt="" />
                                            <h6>9 Suitcase</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="round">
                                            <img src="images/air-6.png" alt="" />
                                            <h6>Carry-on</h6>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="specification">
                <div className="container">
                    <div className="row">
                        <div className="left-specification">
                            <h4>SPECIFICATIONS</h4>
                            <div className="text">
                                <ul>
                                    <li>
                                        The 900XP is one of the most popular midsize business jets and a fine choice for the
                                        elite traveler.</li>

                                    <li>It is the latest development of the Hawker 800 series and very similar to the 850XP.
                                    </li>

                                    <li>The Hawker 900XP has improved payload capabilities, enhanced performance, upgraded
                                        systems and offers unbeatable fuel efficiency.</li>

                                    <li>Also, with higher ceiling the Hawker provide a standup cabin for passengers to
                                        easily
                                        move around.</li>

                                    <li>Other amenities include full refreshment galley, microwave, and lavatory with sink
                                        providing comfort for long & short journeys.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="right-specification">
                            <h4>CABIN SPECIFICATIONS</h4>
                            <div className="text">
                                <img src="images/spacification.png" alt="" />
                                <h5>Length: 649.22 cm</h5>
                                <div className="display">
                                    <h5>Width: 182.88 cm</h5>
                                    <img src="images/specification-2.png" alt="" />
                                </div>
                                <h5 className="mb-5">Width: 182.88 cm</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CharacterDetails