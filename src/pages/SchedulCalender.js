import React from 'react'

function SchedulCalender() {
    return (
        <div>
            <section class="scheduler-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-xl-4 col-sm-12">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                                    <div class="alternative-date">

                                        <label for="inputName">Alternative Date</label>
                                        <input type="date" class="form-control active" id="inputName"/>

                                            <div class="sector" style={{background: 'transparent',border: '1px solid #5EB6FE'}}>
                                                <h5 style={{color: '#5EB6FE'}}>Sector wise</h5>
                                                <div class="image-section">
                                                    <img src="images/sector-white.png" alt=""/>
                                                </div>
                                            </div>

                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                                    <div class="alternative-date">
                                        <div class="form-group col-md-12">
                                            <label for="inputPhone" class="lbl">From</label>
                                            <select name="" id="" class="form-control">
                                                <option value="1" selected="">Ahmedabad (AMD)</option>
                                                <option value="1">surat</option>
                                                <option value="1">Ahmedabad (AMD)</option>
                                            </select>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="exchange">
                                                <button type="button"><img src="images/exchange.png" alt=""/></button>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPhone" class="lbl">To</label>
                                            <select name="" id="" class="form-control">
                                                <option value="1" selected="">Surat (STU)</option>
                                                <option value="1">Ahmedabad (AMD)</option>
                                                <option value="1">Ahmedabad (AMD)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                                    <div class="stop">
                                        <a href="#demo" class="btn  show" data-toggle="collapse">Stops <i
                                            class="fa fa-angle-down"></i></a>
                                        <div id="demo" class="collapse show">
                                            <form>
                                                <div class="form-group">
                                                    <input type="checkbox" id="flight" checked />
                                                        <label for="flight">All Flights</label>
                                                </div>
                                                <div class="form-group">
                                                    <input type="checkbox" id="stop" />
                                                        <label for="stop">Non Stop</label>
                                                </div>
                                                <div class="form-group">
                                                    <input type="checkbox" id="max" />
                                                        <label for="max">max 01 Stop only</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                                    <div class="stop">
                                        <a href="#demo1" class="btn  show" data-toggle="collapse">Departure time <i
                                            class="fa fa-angle-down"></i></a>
                                        <div id="demo1" class="collapse show">
                                            <form>
                                                <div class="form-group">
                                                    <input type="checkbox" id="Early" checked />
                                                        <label for="Early">Early Morning</label>
                                                        <span>12 AM To 08 AM</span>
                                                </div>
                                                <div class="form-group">
                                                    <input type="checkbox" id="morning" />
                                                        <label for="morning">morning</label>
                                                        <span>08 AM To 12 AM</span>
                                                </div>
                                                <div class="form-group">
                                                    <input type="checkbox" id="Day" />
                                                        <label for="Day">Mid Day</label>
                                                        <span>12 pM To 04 pM</span>
                                                </div>
                                                <div class="form-group">
                                                    <input type="checkbox" id="Evening" />
                                                        <label for="Evening">Evening</label>
                                                        <span>04 pM To 08 pM</span>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-8 col-md-12 col-xl-8 col-sm-12">

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SchedulCalender