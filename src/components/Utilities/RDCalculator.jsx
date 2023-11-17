import React from 'react'

const RDCalculator = () => {
  return (
    <>
  
    <div className="wrapper">
   
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
      <div style={{ marginTop: "-3px" }}>
        <div className="rd_back_img" />
        <div className="row rdrow">
          <div className="col-md-6">
            <div className="rd_ing_pad">
              <img
                className="rd_image"
                src="https://legal251.com/images/calculator_img/Rd_calculator_img.png"
              />
              <div>
                <p className="cg_p">
                  Plan future finances with utmost clarity using the online RD
                  Calculator. It eliminates the hassles of computing and gives you
                  the accurate estimated return value on your Recurring Deposits
                  in no time.
                </p>
              </div>
              <div className="all_cg_result">
                <div className="cg_calculate_res-contaner">
                  <div>
                    <p>
                      After{" "}
                      <span className="rd_text_y_m">
                        {" "}
                        <span className="rd_y_no">4</span> years,
                      </span>{" "}
                      your amount will be
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <center>
                        <h6>Deposit Amount</h6>
                        <h4 className="rd_da">0</h4>
                      </center>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <center>
                        <h6>Total Interest</h6>
                        <h4 className="rd_invest">0</h4>
                      </center>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <center>
                        <h6>Maturity Value</h6>
                        <h4 className="rd_m_value">0</h4>
                      </center>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <center>
                        <h6>Maturity Date</h6>
                        <h4 className="cg_tax_payable rd_maturty_d">
                          dd/mm/yyyy
                        </h4>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="rd_padd">
              <div className="">
                <h4>RD Calculator</h4>
                <div className="deposit_amount fd_deposit_am row display_n">
                  <div className="col-sm-6 col-md-6">
                    <lable className="depositfd">
                      Deposit Amount<span>*</span>
                    </lable>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="input-group mb-3 deposit_amount2">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <img src="https://legal251.com/images/calculator_img/Rupeeimg.svg" />
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control rd_deposit_amount_input rd_deposit_a rangeval"
                        id="deposit_am"
                        placeholder="Enter Deposit Amount"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="deposit_am_v rd_deposit_am_v">
                      <span>
                        Please enter <span className="rd_d_valid" />
                        deposit amount
                      </span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <input
                    id="myRange"
                    defaultValue={0}
                    className="slider styled-slider slider-progress rd_deposit_am_range"
                    min={0}
                    max={100000}
                    type="range"
                  />
                  <div className="smallval">
                    <p>₹ 1 Lac</p>
                    <p>₹ 10 Cr</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="intrest_rate_fd fd_intrest_r row display_n">
                  <div className="col-sm-6 col-md-6">
                    <lable className="intrestfd">
                      Intrest Rate<span>*</span>
                    </lable>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="input-group mb-3 intrest_rate2">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <img src="https://legal251.com/images/calculator_img/per_icon.svg" />
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control rd_intrest_rate_input rd_rate_intrest rangeval2"
                        id="rate_int"
                        placeholder="Enter Intrest Rate"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="rd_intrest_r_v">
                      <span>
                        Please enter
                        <span className="rd_v_f0_10" /> intrest rate
                      </span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <input
                    id="myRange2"
                    defaultValue={0}
                    className="slider styled-slider slider-progress rd_intrest_range"
                    min={1}
                    max={50}
                    type="range"
                  />
                  <div className="smallval">
                    <p>1%</p>
                    <p>50%</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="time_period fd_time_period row display_n">
                  <div className="col-sm-6 col-md-6">
                    <lable className="time_p_fd">
                      Time Period<span>*</span>
                    </lable>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="input-group mb-3 time_period2">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <img src="https://legal251.com/images/calculator_img/Rupeeimg.svg" />
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control rd_time_period_input rd_time_period rangeval3"
                        id="time_period"
                        placeholder="Enter Time Period"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="rd_time_p_v">
                      <span>
                        Please enter
                        <span className="rd_valid_f0_10" /> time period
                      </span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <input
                    id="myRange3"
                    defaultValue={0}
                    className="slider styled-slider slider-progress rd_time_period_range"
                    min={1}
                    max={50}
                    type="range"
                  />
                  <div className="smallval">
                    <p className="for_y_m">1 Year</p>
                    <p className="for_ys_ms">50 Years</p>
                  </div>
                </div>
                <div className="btn-container align_r rd_sw_ym">
                  <div className="switches-container">
                    <input
                      type="radio"
                      className="rdtoggle"
                      id="switchMonthly"
                      name="switchPlan"
                      defaultValue="Year"
                      defaultChecked=""
                    />
                    <input
                      type="radio"
                      className="rdtoggle"
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
              <div className="calculate_rd">
                <button id="calculate_rd_btn">Calculate</button>
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
                  <h5>Plan with Clarity</h5>
                  <p className="benefitscardtext">
                    Our online RD Calculator helps investors to plan their future
                    finances with greater clarity without charging you anything.
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
                  <h5>Convenient</h5>
                  <p className="benefitscardtext">
                    The online RD Calculator is easy and convenient for investors
                    and saves them time that they can utilize productively.
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
                  <h5> Accurate</h5>
                  <p className="benefitscardtext">
                    This calculator helps you plan your prudent finances
                    accurately, which is unquestionable.{" "}
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
          <p className="frequentlyheading ppf_fq">FREQUENTLY ASKED QUESTIONS</p>
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
                          1. What is a Recurring Deposit Calculator?
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
                        You can use the Recurring Deposit Calculator to calculate
                        the interest you will earn at the time of the maturity of
                        your Recurring Deposit.
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
                          Q2. Can I break my RD before the completion of its
                          tenure?
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
                        Yes, you can break your RD prematurely at any point and
                        get the interest till the date of closing. Your bank may
                        charge a penalty/fee for the same.
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
                          Q3. What are the ranges of RD tenure?
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
                        The tenure of RD starts from 6 months and can extend up to
                        10 years. You can choose your RD tenure in multiples of 3,
                        such as 6, 9, 12, 15, and so.
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
                          Q4. What is the minimum amount to initiate an RD?
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
                        There’s no such fixed minimum amount for initiating an RD.
                        It varies from institution to institution. However, you
                        can open an RD account by depositing a minimum amount of
                        Rs. 500, which will remain the same throughout the tenure.
                        Similarly, there’s no limitation for the maximum amount.
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

export default RDCalculator