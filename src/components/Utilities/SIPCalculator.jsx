import React from 'react'

const SIPCalculator = () => {
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
      <div className="">
        <div className="sip_main" />
        <div className="row sip_row" style={{ backgroundColor: "white" }}>
          <div className="col-md-7 col-lg-7 ">
            <div className="sip_graph_con">
              <div className="row sip_row">
                <div className="calculatorimg sipcalculatorimg">
                  <img
                    src="https://legal251.com/images/calculator_img/sip_top_img.png"
                    alt="sip-top_img"
                  />
                </div>
                <p className="sip_p">
                  With the help of the SIP Calculator, it is effortless to
                  determine the return of your mutual fund investment throughout
                  the SIP tenure, deposits, and return rates. Now, plan your
                  investment corpus smartly.
                </p>
              </div>
              <div className="row">
                <div className="sip_y">
                  <p>
                    After <span className="time_p_sip">4 years</span>, your amount
                    will be
                  </p>
                  <h2 className="total_sip">₹ 4564654</h2>
                  <div className="row m-0">
                    <div className="col-md-5">
                      <p className="es_r__in_am">
                        that include
                        <span className="est_r_sip">₹ 1,24,369</span> capital
                        gains on an investment amount of
                        <span className="invest_am_sip">₹ 5,24,369</span>
                      </p>
                    </div>
                    <div className="col-md-7">
                      <div className="graph_btn">
                        <button className="gr_view_btn">View As</button>
                        <button className="gr_table_btn">Table</button>
                        <button className="gr_chart_btn">Chart</button>
                      </div>
                    </div>
                  </div>
                  <div className="graph">
                    <div
                      id="container"
                      style={{ minWidth: 100, height: 400, margin: "0 auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-5 ">
            <div className="sip_cal">
              <div className="sip_main_content">
                <div>
                  <h3 className="sip_title">Calculate SIP Mutual Fund Returns</h3>
                  <p className="sip_title_con"></p>
                </div>
                <div className="intrest_amount sip_intrest_am">
                  <div className="row ">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <lable className="intrest">
                        Monthly Investment<span>*</span>
                      </lable>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="input-group mb-3 intrest2">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <img src="https://legal251.com/images/calculator_img/Rupeeimg.svg" />
                          </span>
                        </div>
                        <input
                          type="number"
                          id="month_sip_p"
                          className="form-control sip_month_inv_input rangeval"
                          placeholder="Enter Monthly Investment"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          onkeypress="if(this.value.length==10) return false;"
                        />
                      </div>
                      <div className="monthly_investment_v">
                        <span>Please enter monthly investment</span>
                      </div>
                      <div className="monthly_investment_v val_f_0">
                        <span>
                          Please enter greater than ₹ 0 monthly investment
                        </span>
                      </div>
                      <div className="monthly_investment_v val_f_cr">
                        <span>
                          Please enter smaller than ₹ 10 Cr monthly investment
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="range">
                    <input
                      id="sip_month_inv"
                      defaultValue={0}
                      className="slider styled-slider slider-progress"
                      min={0}
                      max={100000000}
                      type="range"
                    />
                    <div className="smallval">
                      <p>₹ 0</p>
                      <p>₹ 10 Cr</p>
                    </div>
                  </div>
                  <div className="rate-sip mt-5">
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <lable className="ratemar col">
                          Rate Of Interest<span>*</span>
                        </lable>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="input-group mb-3 intrest2">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                              <img src="https://legal251.com/images/calculator_img/per_icon.svg" />
                            </span>
                          </div>
                          <input
                            type="number"
                            id="rate_sip_p"
                            className="form-control sip_intrest_rate_input rangeval2"
                            placeholder="Enter Rate Of Interest"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onkeypress="if(this.value.length==3) return false;"
                          />
                        </div>
                        <div className="rate_interest_v">
                          <span>Please enter rate of interest</span>
                        </div>
                        <div className="rate_interest_v val_f_0per">
                          <span>
                            Please enter greater than 0% rate of interest
                          </span>
                        </div>
                        <div className="rate_interest_v val_f_51per">
                          <span>Please enter less than 51% rate of interest</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="range">
                    <input
                      id="sip_intrest_rate"
                      defaultValue={0}
                      className="slider styled-slider slider-progress"
                      min={1}
                      max={100}
                      type="range"
                    />
                    <div className="smallval">
                      <p>1%</p>
                      <p>50%</p>
                    </div>
                  </div>
                  <div className="sip_timeper">
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <lable className="intrest">
                          Time Period<span>*</span>
                        </lable>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="input-group mb-3 intrest2">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                              <img src="https://legal251.com/images/calculator_img/sip_cal_icon.svg" />
                            </span>
                          </div>
                          <input
                            type="number"
                            id="time_sip_p"
                            className="form-control sip_time_period_input rangeval3"
                            placeholder="Enter Time Period"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onkeypress="if(this.value.length==2) return false;"
                          />
                        </div>
                        <div className="time_period_v">
                          <span>Please enter time period</span>
                        </div>
                        <div className="time_period_v val_f_0time_sip">
                          <span>Please enter greater than 0 time period</span>
                        </div>
                        <div className="time_period_v val_f_50time_sip">
                          <span>Please enter less than 51 time period</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="range">
                    <input
                      id="sip_time_period"
                      defaultValue={0}
                      className="slider styled-slider slider-progress"
                      min={1}
                      max={30}
                      type="range"
                    />
                    <div className="smallval">
                      <p>1 Years</p>
                      <p>50 Years</p>
                    </div>
                  </div>
                  <div className="btn-container align_r">
                    <div className="switches-container">
                      <input
                        type="radio"
                        className="siptoggle"
                        id="switchMonthly"
                        name="switchPlan"
                        defaultValue="Yearly"
                        defaultChecked=""
                      />
                      <input
                        type="radio"
                        className="siptoggle"
                        id="switchYearly"
                        name="switchPlan"
                        defaultValue="Monthly"
                      />
                      <label htmlFor="switchMonthly">Yearly</label>
                      <label htmlFor="switchYearly">Monthly</label>
                      <div className="switch-wrapper">
                        <div className="switch">
                          <div>
                            <img src="https://legal251.com/images/calculator_img/toggleswitchimg.svg" />
                            Yearly
                          </div>
                          <div>
                            <img src="https://legal251.com/images/calculator_img/toggleswitchimg.svg" />
                            Monthly
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sip_calculate_btn">
                    <center>
                      <button onclick="sipcalculate()" id="calculatesip">
                        Calculate
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="Detailedprocess"
          className="page-section"
          style={{ backgroundColor: "white" }}
        >
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
              <div className="col-md-4  firstcarddivcol ">
                <div className="servicebenefitscard e_benifit_b">
                  <center>
                    <img
                      src="https://legal251.com/images/faqflag.svg"
                      className="benefitscardimg"
                    />
                    <h5>Better Investment Planning</h5>
                    <p className="benefitscardtext">
                      The SIP calculator is an ideal tool that helps you better
                      plan your Mutual Fund SIP investments based on amount and
                      tenure.
                    </p>
                  </center>
                </div>
              </div>
              <div className="col-md-4 firstcarddivcol">
                <div className="servicebenefitscard e_benifit_b">
                  <center>
                    <img
                      src="https://legal251.com/images/faqflag.svg"
                      className="benefitscardimg"
                    />
                    <h5>Estimates Better Returns</h5>
                    <p className="benefitscardtext">
                      You can compute the total value of your investments at the
                      end of your SIP tenure and better estimate your returns.
                    </p>
                  </center>
                </div>
              </div>
              <div className="col-md-4   firstcarddivcol">
                <div className="servicebenefitscard e_benifit_b">
                  <center>
                    <img
                      src="https://legal251.com/images/faqflag.svg"
                      className="benefitscardimg"
                    />
                    <h5>Accurate &amp; Time Saving</h5>
                    <p className="benefitscardtext">
                      Unlike manual calculation, it saves time on computation and
                      gives accurate results each time.
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
            <p className="frequentlyheading sip_f_q">
              FREQUENTLY ASKED QUESTIONS
            </p>
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
                            1. How much should a person invest in SIP?
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
                          No upper limit for the amount one can invest in a SIP.
                          However, you can invest only Rs. 500 per month.
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
                            Q2. Are SIPs and mutual funds similar?
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
                          SIP is not an investment scheme or any fund. It is a
                          method of investing in Mutual Funds. You can use it to
                          systematically invest a fixed amount of money in Mutual
                          Funds for a period on a regular basis.
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
                            Q3. Can I alter my SIP amount anytime?
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
                          No. You cannot change your SIP amount anytime, as it is
                          fixed for a given period.
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
                            Q4. Is SIP renewable?
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
                          Yes, you can automatically renew your SIP easily. While
                          different companies also offer you the option to cancel
                          the auto-renew feature.
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

export default SIPCalculator