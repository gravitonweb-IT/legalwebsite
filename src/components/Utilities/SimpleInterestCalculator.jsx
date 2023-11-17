import React from 'react'

const SimpleInterestCalculator = () => {
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
    <div className="servicebrhide"></div>
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
      <div className="container-fluid main_container tds_background">
        <div className="row sim_padd">
          <h1 className="sic_heading">Simple Interest Calculator</h1>
          <div className="col-sm-8">
            <div className="sic_main_box row1">
              <div className="row">
                <div className="col-lg-6">
                  <div className="simple-data-a">
                    <p className="sic_form_heading blu">
                      Financial Year 2021-2022
                    </p>
                    <form action="">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Principal amount
                        </label>
                        <input
                          className="form-control place_blue si_p_input si_input_background rangeval"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          type="number"
                          placeholder="Enter Principal amount"
                        />
                        <div className="principal_a_v">
                          <span>
                            {" "}
                            Please enter <span className="si_check_f_0" />
                            principal amount
                          </span>
                        </div>
                        <div className="sic_form_range">
                          <span>
                            <b>₹ 0</b>
                          </span>
                          <input
                            type="range"
                            id="si_principal_am"
                            defaultValue={0}
                            min={0}
                            max={100000000}
                            className="form-control-range slider1"
                          />
                          <span>
                            <b>₹ 10Cr</b>
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Rate of Interest
                        </label>
                        <input
                          className="form-control place_blue si_r_input si_input_background rangeval2"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          type="number"
                          placeholder="Enter Rate of Interest"
                        />
                        <div className="rate_i_v">
                          <span>
                            Please enter <span className="si_check_f_rate" />
                            rate of interest
                          </span>
                        </div>
                        <div className="sic_form_range">
                          <span>
                            <b>0%</b>
                          </span>
                          <input
                            type="range"
                            defaultValue={0}
                            min={0}
                            max={100}
                            id="si_intrest_r"
                            className="form-control-range slider1"
                          />
                          <span>
                            <b>100%</b>
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="sel1">Period Unit</label>
                        <select className="form-control si_period_u" id="sel1">
                          <option value="select">Select</option>
                          <option value="Day">Days</option>
                          <option value="Weeks">Weeks</option>
                          <option value="Month">Months</option>
                          <option value="Quarters">Quarters</option>
                          <option value="Years">Years</option>
                        </select>
                        <div className="period_u_v">
                          <span>Please select period unit</span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Duration</label>
                        <input
                          id="si_duration"
                          type="number"
                          className="form-control place_blue si_input_background"
                          placeholder="Enter Duration"
                        />
                        <div className="duration_v">
                          <span>Please enter duration</span>
                        </div>
                      </div>
                      <button
                        type="reset"
                        className="btn age-btn1"
                        id="si_reset"
                      >
                        Reset
                      </button>
                      <button
                        type="submit"
                        className="btn age-btn2"
                        id="si_calculate"
                      >
                        Calculate
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="sic_pie-chart">
                    <div
                      id="donutchart"
                      style={{ width: "95%", height: 300 }}
                    />
                    <div className="sic-result-f">
                      <div className="sic_result">
                        <center>
                          <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-6">
                              Principal Amount
                            </div>
                            <div className="col-md-12 col-lg-12 col-xl-6 si_principal_amount">
                              ₹ 0/-
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-6">
                              Total Interest
                            </div>
                            <div className="col-md-12 col-lg-12 col-xl-6 si_total_intrest">
                              ₹ 0/-
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-6">
                              Total Value
                            </div>
                            <div className="col-md-12 col-lg-12 col-xl-6 si_total_value">
                              ₹ 0/-
                            </div>
                          </div>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="simple-data-a">
              <div id="getcons">
                <h4 className="h44">
                  Tax eFiling made simple anyone can do it.
                </h4>
                <button className="btn">Get Consultancy</button>
              </div>
              <div id="fileitr">
                <h4 className="h44">
                  File ITR Yourself Anytime &amp; Anywhere
                </h4>
                <button className="btn">File ITR Now</button>
              </div>
              <div id="fileitr1">
                <h4 className="h44">What is Simple Interest?</h4>
                <p>
                  Interest is a fee on the money you invest, borrow or take as a
                  loan. Simple In Simple Interest, the interest rate only
                  applies to the loan or investment's principal amount and will
                  not modify if any other interest occurs, unlike compound
                  interest. Our SI Calculator is a handy tool for computing
                  interest on loans and savings accounts without compounding.
                </p>
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
    <div
      id="Detailedprocess b_back_col_a"
      className="page-section all_back_color"
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
                <h5>Easy &amp; Faster Calculation</h5>
                <p className="benefitscardtext">
                  {" "}
                  With our Simple Interest Calculator, you can quickly and
                  efficiently calculate all the simple interest amounts,
                  irrespective of the amount.
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
                <h5>Instant and Accurate Results</h5>
                <p className="benefitscardtext">
                  Unlike the conventional offline SI calculators, our online SI
                  calculator gives you instant results even for complex
                  calculations with a hundred per cent accuracy.
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
                <h5>Easy Comparison </h5>
                <p className="benefitscardtext">
                  Our Simple Interest Calculator lets you compare simple
                  interest rates against compound interest rates while
                  determining the current value of money.
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
        <p className="frequentlyheading" style={{ color: "#1C1C1C" }}>
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
                        1. Can I use this Simple Interest Calculator anytime?
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
                      Yes, you can use this SI calculator 24*7.
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
                        Q2. Is this calculator free, or do I need to pay any
                        charges for it?
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
                      Yes, our SI calculator is free, and you don’t have to pay
                      anything.
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
                        Q3. How to calculate simple interest?
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
                      The formula for computing Simple Interest is (P x R x T) ÷
                      100, where:
                      <br />
                      P = Principal
                      <br />
                      R = Rate of Interest
                      <br />
                      T = Time for Tenure (for which you will earn interest)
                      <br />
                      <br />
                      You only have to put the values of P, R, &amp; T in the
                      online SI calculator, and you will get the results in
                      moments.
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
                        Q4. Do the Principal Amount and Interest Rates change
                        over time?
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
                      No. The principal amount and the interest rates don’t
                      change.
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

export default SimpleInterestCalculator