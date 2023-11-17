import React from 'react'

const EMICalculator = () => {
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
      <div className="Emi_main" />
      <div className="emiback">
        <div className="Emi_cal emi_cal_container">
          <center>
            <img
              className="emi_top_img"
              src="https://legal251.com/images/calculator_img/EMI_head_img.png"
              alt="head_emi_image"
            />
          </center>
          <center></center>
          <center>
            <p className="Emi_p">
              Plan your loan quickly with the easiest online EMI Calculator
              while getting accurate results every time. Save your time, and
              plan better.
            </p>
          </center>
          <div className="main_content">
            <div className="row mainrow">
              <div className="col-md-6 col-lg-4 col-xl-4">
                <div className="">
                  <div>
                    <div className="deposit_amount fd_deposit_am mb-0 loan_amount_emi">
                      <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <lable className="time_p_emi">
                            Loan amount<span>*</span>
                          </lable>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <div className="input-group deposit_amount2">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="basic-addon1"
                              >
                                <img src="https://legal251.com/images/calculator_img/Rupeeimg.svg" />
                              </span>
                            </div>
                            <input
                              type="number"
                              className="form-control fd_deposit_amount_input emi_loan_a rangeval"
                              id="deposit_am"
                              placeholder="Enter loan amount"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              onkeypress="if(this.value.length==10) return false;"
                            />
                          </div>
                          <div className="loan_am_v">
                            <span>Please enter loan amount</span>
                          </div>
                          <div className="valid_f0_emi_l_am">
                            <span>
                              Please enter greater than ₹ 0 loan amount
                            </span>
                          </div>
                          <div className="valid_f10c_emi_l_am">
                            <span>
                              Please enter less than and equal to ₹ 10 Cr loan
                              amount
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <input
                        id="emi_loan_a_range"
                        className="slider styled-slider slider-progress deposit_am_range"
                        min={0}
                        max={100000000}
                        type="range"
                      />
                      <div className="smallval">
                        <p>₹ 0</p>
                        <p>₹ 10 Cr</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="time_period fd_time_period emi_amount_b mb-0">
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <lable className="time_p_emi">
                          Rate of Interest<span>*</span>
                        </lable>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="input-group time_period2">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              <img src="https://legal251.com/images/calculator_img/per_icon.svg" />
                            </span>
                          </div>
                          <input
                            type="number"
                            className="form-control fd_time_period_input emi_amount rangeval2"
                            id="time_period"
                            placeholder="Enter rate of interest"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onkeypress="if(this.value.length==10) return false;"
                          />
                        </div>
                        <div className="emi_am_v">
                          <span>Please enter rate of interest</span>
                        </div>
                        <div className="valid_f0_emi_am valid_f0_emi_am_fm">
                          <span>
                            Please enter greater than 0% rate of interest
                          </span>
                        </div>
                        <div className="valid_f10c_emi_am valid_f10c_emi_am_fm">
                          <span>
                            Please enter less than 51% rate of interest
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <input
                      id="emi_amount_range"
                      defaultValue={0}
                      className="slider styled-slider slider-progress fd_time_period_range"
                      min={0}
                      max={50}
                      type="range"
                    />
                    <div className="smallval">
                      <p>0%</p>
                      <p>50%</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="time_period fd_time_period emi_time_peiod_b mb-0">
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <lable className="time_p_emi">
                          Time Period<span>*</span>
                        </lable>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="input-group time_period2">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              <img src="https://legal251.com/images/calculator_img/sip_cal_icon.svg" />
                            </span>
                          </div>
                          <input
                            type="number"
                            className="form-control fd_time_period_input emi_time_peiod rangeval3"
                            id="time_period"
                            placeholder="Enter time period"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onkeypress="if(this.value.length==3) return false;"
                          />
                        </div>
                        <div className="time_p_emi_v">
                          <span>Please enter time period</span>
                        </div>
                        <div className="valid_0time_per_emi">
                          <span>Please enter greater than 0 time period</span>
                        </div>
                        <div className="valid_30timr_per_emi">
                          <span>Please enter less than 51 time period</span>
                        </div>
                        <div className="valid_600m_timr_per_emi">
                          <span>Please enter less than 600 time period</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <input
                      id="emi_time_peiod_range"
                      defaultValue={0}
                      className="slider styled-slider slider-progress fd_time_period_range"
                      min={1}
                      max={50}
                      type="range"
                    />
                    <div className="smallval">
                      <p className="check_emi_my_s">1 Year</p>
                      <p className="check_emi_my_g">50 Years</p>
                    </div>
                  </div>
                  <div className="btn-container emi_btn_container">
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
                  <div>
                    <center>
                      <button id="calculate_emi_btn" onclick="calculateemi()">
                        Calculate
                      </button>
                    </center>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-4">
                <div className="bg_inp">
                  <p id="M_Emi">Monthly EMI</p>
                  <h4 className="M_Emi_h4 monthly_emi_res">₹ 0/-</h4>
                  <p id="M_Emi">Total Interest</p>
                  <h4 className="M_Emi_h4 total_int_emi_res">₹ 0/-</h4>
                  <p id="M_Emi">Total Payment</p>
                  <h4 className="M_Emi_h4 total_am_emi_res">₹ 0/-</h4>
                </div>
              </div>
              <div className=" col-md-12 col-lg-4 col-xl-4">
                <center>
                  <div id="donutchart" style={{ height: 300 }} />
                  <center>
                    <div id="center_emi_graph">
                      <h5 className="emi_graph_text" />
                      <h1 className="emi_graph_per" />
                    </div>
                  </center>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="Detailedprocess" className="page-section emiback">
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
          <div className="col-md-4 col-xs-4  firstcarddivcol ">
            <div className="servicebenefitscard e_benifit_b">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <h5>Simplifies Loan Planning</h5>
                <p className="benefitscardtext">
                  {" "}
                  The EMI calculator gives you the applicable EMI and the
                  complete amortization calendar that helps you plan better and
                  more straightforwardly.
                </p>
              </center>
            </div>
          </div>
          <div className="col-md-4 col-xs-4 firstcarddivcol">
            <div className="servicebenefitscard e_benifit_b">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <h5>Consistent &amp; Accurate Results</h5>
                <p className="benefitscardtext">
                  This EMI calculator consistently gives accurate answers
                  without any calculation error while allowing you to change
                  your inputs to get desired results.
                </p>
              </center>
            </div>
          </div>
          <div className="col-md-4  col-xs-4 firstcarddivcol">
            <div className="servicebenefitscard e_benifit_b">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <h5>Easy to Use &amp; Time-Saving</h5>
                <p className="benefitscardtext">
                  {" "}
                  You only need to furnish the essential details such as loan
                  amount, tenure, and interest rate, which instantly give you
                  the results.
                </p>
              </center>
            </div>
          </div>
        </div>
      </div>
      <br className="mobhidebr" />
      <div className="secondcarddivpadd"></div>
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
        <p className="frequentlyheading emi_f_q">FREQUENTLY ASKED QUESTIONS</p>
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
              height: 400,
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
                        1. What is an EMI?
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
                      EMI refers to Equated Monthly Installment, the amount an
                      individual must pay to the bank or any other lender every
                      month until you entirely pay off the loan.
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
                        Q2. For what types of loans can I use the EMI
                        calculator?
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
                      You can use this online EMI calculator to calculate all
                      types of loans, including personal, car, and business
                      loans. You only need to know the payable interest on the
                      principal amount for the tenure.
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
                        Q3. What does an EMI consist of?
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
                      An Equated Monthly Installment consists of your interest
                      payable on the principal amount and the tenure.
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
                        Q4. What will happen if I miss paying my EMIs?
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
                      The unpaid EMIs attract penalties from financial
                      institutions, so if you fail to pay your EMIs, you have to
                      pay an extra amount in future.
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

export default EMICalculator