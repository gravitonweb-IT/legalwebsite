import React from 'react'

const FDCalculator = () => {
  return (
   <>
   
   <div className="wrapper">
  <div>
  
    <img
      src="https://legal251.com/images/services/Group 887.svg"
      style={{
        width: 40,
        marginTop: 6,
        marginLeft: "12.5px",
        visibility: "hidden"
      }}
    />
    <div className="servicebrhide">
      <br />
    </div>
    <div>
      <div
        className="nav navbar-nav serviceheader"
        style={{ display: "none", marginTop: "-40px", padding: "2px 2px 1px" }}
      >
        <hr
          className="animationhr"
          id="nav_slide_click"
          style={{ top: "-35px", height: "33.5px" }}
        />
      </div>
    </div>
    <div>
      <div className="fd_main" />
      <div className="row fdrow">
        <div className="col-md-6">
          <div className="fd_graph_con">
            <div className="row fdrow">
              <div className="calculatorimg fdcalculatorimg">
                <img
                  src="https://legal251.com/images/calculator_img/fd_img.png"
                  alt="sip-top_img"
                />
              </div>
              <p className="sip_p">
                Now planning a Fixed Deposit is simple with easy and rapid
                calculation. Compare different plans and offers for you and your
                family without any errors.
              </p>
              <div className="fd_r_padd padd_992 result_fd_bacl_img">
                <div className="">
                  <p className="fd_time_text">
                    After <span className="time_p_fd_yr"> 4 years, </span> your
                    amount will be
                  </p>
                  <div className="row fdrow">
                    <div className="col-sm-6 rig_m_r">
                      <div className="deposit_am">
                        <center>
                          <h5>Deposit Amount</h5>
                        </center>
                        <h6 className="result_fd deposit_am_r">₹ 0 /-</h6>
                      </div>
                    </div>
                    <div className="col-sm-6 left_m_r">
                      <div className="total_int">
                        <center>
                          <h5>Total Intrest</h5>
                        </center>
                        <h6 className="result_fd total_int_r">₹ 0 /-</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row fdrow">
                    <div className="col-sm-6 rig_m_r">
                      <div className="result_fdpadd">
                        <div className="matuarity_val">
                          <center>
                            <h5>Maturity Value</h5>
                          </center>
                          <h6 className="result_fd matuarity_val_r">₹ 0 /-</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 left_m_r">
                      <div className="maturity_date">
                        <center>
                          <h5>Maturity Date</h5>
                        </center>
                        <h6 className="result_fd maturity_date_e" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 ">
          <div className="fd_cal ">
            <div className="claculate_fd_con">
              <div>
                <h3 className="sip_title">Calculate FD Mutual Value </h3>
                <p className="fd_title_con"></p>
              </div>
              <div>
                <div className="deposit_amount fd_deposit_am">
                  <div className="row fdrow">
                    <div className="col-sm-6 col-md-6 col-lg-6 fd_padd_f_input">
                      <lable className="depositfd">
                        Deposit Amount<span>*</span>
                      </lable>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 fd_padd_f_input">
                      <div className="input-group mb-3 deposit_amount2">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <img src="https://legal251.com/images/calculator_img/Rupeeimg.svg" />
                          </span>
                        </div>
                        <input
                          type="number"
                          pattern="\d*"
                          className="form-control fd_deposit_amount_input rangeval"
                          id="deposit_am"
                          placeholder="Enter Deposit Amount"
                          maxLength={100000}
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          onkeypress="if(this.value.length==8) return false;"
                        />
                      </div>
                      <div className="deposit_am_v">
                        <span>Please enter deposit amount</span>
                      </div>
                      <div className="deposit_am_v valid_f_0d_fd">
                        <span>
                          Please enter greater than ₹ 0 deposit amount
                        </span>
                      </div>
                      <div className="deposit_am_v valid_f_10c_d_fd">
                        <span>
                          Please enter less than ₹ 10 Cr deposit amount
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <input
                    id="myRange"
                    defaultValue={0}
                    className="slider styled-slider slider-progress deposit_am_range"
                    min={0}
                    max={100000}
                    type="range"
                  />
                  <div className="smallval">
                    <p>₹ 0</p>
                    <p>₹ 10 Cr</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="intrest_rate_fd fd_intrest_r">
                  <div className="row fdrow">
                    <div className="col-sm-6 col-md-6 col-lg-6 fd_padd_f_input">
                      <lable className="intrestfd">
                        Intrest Rate<span>*</span>
                      </lable>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 fd_padd_f_input">
                      <div className="input-group mb-3 intrest_rate2">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <img src="https://legal251.com/images/calculator_img/per_icon.svg" />
                          </span>
                        </div>
                        <input
                          type="number"
                          className="form-control fd_intrest_rate_input rangeval2"
                          id="rate_int"
                          placeholder="Enter Intrest Rate"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          onkeypress="if(this.value.length==3) return false;"
                        />
                      </div>
                      <div className="intrest_r_v">
                        <span>Please enter intrest rate</span>
                      </div>
                      <div className="intrest_r_v valid_f0per_fd">
                        <span>Please enter greater than 0% intrest rate</span>
                      </div>
                      <div className="intrest_r_v valid_f51per_fd">
                        <span>Please enter less than 51% intrest rate</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <input
                    id="myRange2"
                    defaultValue={0}
                    className="slider styled-slider slider-progress fd_intrest_range"
                    min={0}
                    max={100}
                    type="range"
                  />
                  <div className="smallval">
                    <p>0%</p>
                    <p>50%</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="time_period fd_time_period">
                  <div className="row fdrow">
                    <div className="col-sm-6 col-md-6 col-lg-6 fd_padd_f_input">
                      <lable className="time_p_fd">
                        Time Period<span>*</span>
                      </lable>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 fd_padd_f_input">
                      <div className="input-group mb-3 time_period2">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <img src="https://legal251.com/images/calculator_img/sip_cal_icon.svg" />
                          </span>
                        </div>
                        <input
                          type="number"
                          className="form-control fd_time_period_input rangeval3"
                          id="time_period"
                          placeholder="Enter Time Period"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          onkeypress="if(this.value.length==3) return false;"
                        />
                      </div>
                      <div className="time_p_v">
                        <span>Please enter time period</span>
                      </div>
                      <div className="time_p_v valid_f0_time_fd">
                        <span>Please enter greater than 0 time period</span>
                      </div>
                      <div className="time_p_v valid_f50_time_fd">
                        <span>Please enter less than 51 time period</span>
                      </div>
                      <div className=" valid_f600_time_fd">
                        <span>Please enter less than 601 time period</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <input
                    id="myRange3"
                    defaultValue={0}
                    className="slider styled-slider slider-progress fd_time_period_range"
                    min={0}
                    max={30}
                    type="range"
                  />
                  <div className="smallval">
                    <p className="fd_fs_y_m">1 Year</p>
                    <p className="fd_fe_y_m">30 Years</p>
                  </div>
                </div>
                <div className="btn-container align_r r_fd_mar">
                  <div className="switches-container">
                    <input
                      type="radio"
                      className="fdtoggle"
                      id="switchMonthly"
                      name="switchPlan"
                      defaultValue="Year"
                      defaultChecked=""
                    />
                    <input
                      type="radio"
                      className="fdtoggle"
                      id="switchYearly"
                      name="switchPlan"
                      defaultValue="Month"
                    />
                    <label htmlFor="switchMonthly">Year</label>
                    <label htmlFor="switchYearly">Month</label>
                    <div className="switch-wrapper">
                      <div className="switch">
                        <div>
                          <img src="https://legal251.com/images/calculator_img/toggleswitchimg.svg" />{" "}
                          Year
                        </div>
                        <div>
                          <img src="https://legal251.com/images/calculator_img/toggleswitchimg.svg" />{" "}
                          Month
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="calculate_fd">
                <button onclick="calculatefd()">Calculate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <div id="Detailedprocess" className="page-section">
      <br />
      <br />
      <br />
      <br />
      <p className="servicehrheading">
        &nbsp;{" "}
        <img
          src="https://legal251.com/images/gstregistration/Path 19952.svg"
          className="Detailedprocessimage"
        />{" "}
        Benefits&nbsp;
      </p>
      <hr className="Detailedprocesshr1" />
      <hr className="Detailedprocesshr2" />
      <hr className="Detailedprocesshr3" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="firstcarddivpadd">
        <div className="row" style={{ margin: 0, padding: 0 }}>
          <center>
            <h1 className="gst_b_head">Legal251 BENEFITS</h1>
          </center>
          <div className="col-md-4 col-sm-4   firstcarddivcol ">
            <div className="servicebenefitscard e_benifit_b">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <h5>Zero Errors</h5>
                <p className="benefitscardtext">
                  Unlike manual calculators, this online FD calculator gives
                  accurate results every time without a single error.
                </p>
              </center>
            </div>
          </div>
          <div className="col-md-4 col-sm-4   firstcarddivcol">
            <div className="servicebenefitscard e_benifit_b">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <h5>Easy &amp; Faster Calculation</h5>
                <p className="benefitscardtext">
                  This online FD calculator is easy to use and gives results
                  faster in comparison with digital calculators and
                  spreadsheets.
                </p>
              </center>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 firstcarddivcol">
            <div className="servicebenefitscard e_benifit_b">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <h5>Compare Different Offers</h5>
                <p className="benefitscardtext">
                  It is free to use, so you can compare multiple offers and
                  decide which scheme will give a better return. Thus you can
                  figure out numerous investment opportunities.
                </p>
              </center>
            </div>
          </div>
        </div>
      </div>
      <br className="mobhidebr" />
      <div id="FAQs" className="page-section">
        <br />
        <br />
        <br />
        <br />
        <p className="servicehrheading">
          &nbsp;{" "}
          <img
            src="https://legal251.com/images/services/faq.svg"
            className="FAQsimage"
          />
          FAQs&nbsp;
        </p>
        <hr className="FAQshr1" />
        <hr className="FAQshr2" />
        <hr className="FAQshr3" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="frequentlyheading fd_f_q">FREQUENTLY ASKED QUESTIONS</p>
        <br />
        <br />
        <br />
        <div
          className="mobhidebr"
          style={{ position: "absolute", width: "100%" }}
        >
          <hr
            style={{
              border: "none",
              marginTop: "-20px",
              borderLeft: "2px solid rgb(1,53,93,0.3)",
              height: 300,
              width: 2
            }}
          />
        </div>
        <div style={{ padding: "0 5%" }}>
          <div className="row">
            <div className="col-md-6 servicefaqcol1">
              <div
                className="panel-group"
                id="accordion"
                style={{ border: "none" }}
              >
                <div className="panel panel-default servicefaqmainpanel">
                  <div className="panel-heading servicefaqpanelheading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        className="servicefaqlink"
                        id="servicefaq1"
                        data-parent="#accordion"
                        href="#collapse1"
                      >
                        1. Is this online FD calculator free to use?
                        <img
                          src="https://legal251.com/images/gstregistration/Path_20192.svg"
                          className="servicefaqimg"
                        />
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapse1"
                    className="panel-collapse collapse in paddingzero"
                  >
                    <div className="panel-body servicefaqbody">
                      Yes, you can use any of our online calculators for free.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default servicefaqmainpanel">
                  <div className="panel-heading servicefaqpanelheading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        className="servicefaqlink"
                        id="servicefaq2"
                        data-parent="#accordion"
                        href="#collapse2"
                      >
                        Q2. How much time does this online FD calculator take?
                        <img
                          src="https://legal251.com/images/gstregistration/Path_20191.svg"
                          className="servicefaqimg"
                        />
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapse2"
                    className="panel-collapse collapse  paddingzero"
                  >
                    <div className="panel-body servicefaqbody">
                      You can compute any FD interest in a few seconds.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 servicefaqcol2">
              <div className="panel-group" id="accordion2">
                <div className="panel panel-default servicefaqmainpanel">
                  <div className="panel-heading servicefaqpanelheading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        className="servicefaqlink"
                        id="servicefaq6"
                        data-parent="#accordion2"
                        href="#collapse21"
                      >
                        Q3. What details will I need to use this FD calculator?
                        <img
                          src="https://legal251.com/images/gstregistration/Path_20192.svg"
                          className="servicefaqimg"
                        />
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapse21"
                    className="panel-collapse collapse in paddingzero"
                  >
                    <div className="panel-body servicefaqbody">
                      You only need a few essential details, such as deposit
                      amount, tenure, and prevailing FD rates, to use this FD
                      calculator.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default servicefaqmainpanel">
                  <div className="panel-heading servicefaqpanelheading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        className="servicefaqlink"
                        id="servicefaq7"
                        data-parent="#accordion2"
                        href="#collapse22"
                      >
                        Q4. Is the FD calculator helpful in financial planning?
                        <img
                          src="https://legal251.com/images/gstregistration/Path_20191.svg"
                          className="servicefaqimg"
                        />
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapse22"
                    className="panel-collapse collapse paddingzero"
                  >
                    <div className="panel-body servicefaqbody">
                      Once you know how much you will get after the completion
                      of your FD, you can choose to either re-invest or withdraw
                      the amount.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
     
    </div>
  </div>
  
</div>

   
   
   
   </>
  )
}

export default FDCalculator