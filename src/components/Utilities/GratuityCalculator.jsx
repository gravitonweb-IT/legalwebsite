import React from 'react'

const GratuityCalculator = () => {
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
      <div className="container-fluid back_col_g">
        <div className="">
          <div className="row g_row1">
            <div className="col-lg-7 col-md-7">
              <div id="gratuity">
                <h1 className="g_h11">Gratuity Calculator</h1>
                <div id="gratuitydata">
                  <hr className="hr1" />
                  <h4 className="h44">Best Gratuity Calculator</h4>
                </div>
                <p>
                  Gratuity is the amount an employer pays his employees in
                  return for their services to the company for five or more
                  years. An employee can get his Gratuity amount before five
                  years if the employee gets disabled due to a disease or
                  accident. The maximum Gratuity tax exemption benefit one can
                  get as an employee is Rs. 20 lakh.
                </p>
                <p>
                  This Gratuity calculator assists you in calculating the
                  gratuity amount according to your service period. You don't
                  need any technical skills for calculation. Enter your Basic
                  Pay, Dearness Allowance, and Years of Service, and you will
                  get accurate results instantly.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 gratuity_calculate_in">
              <div id="gcalculator">
                <form action="">
                  <h3 className="text-center h33">Calculate Gratuity</h3>
                  <div className="form-group">
                    <label htmlFor="hra_recive">Basic Pay</label>
                    <input
                      type="number"
                      className="form-control g_basic_pay hide_def_shadow "
                      id=""
                      defaultValue=""
                      placeholder="₹ eg. 50000"
                      onkeypress="if(this.value.length==9 ) return false;"
                    />
                    <div className="g_bpay">
                      <span>
                        Please enter <span className="g_bp" />
                        basic pay
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="actual_rent">Dearness Allowance</label>
                    <input
                      type="number"
                      className="form-control g_dearness_a hide_def_shadow"
                      id=""
                      defaultValue=""
                      placeholder="₹ eg. 50000"
                      onkeypress="if(this.value.length==9 ) return false;"
                    />
                    <div className="g_dear_all">
                      <span>Please enter dearness allowance</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Number of years of Service</label>
                    <input
                      type="number"
                      className="form-control g_years hide_def_shadow"
                      id=""
                      defaultValue=""
                      placeholder="years 5"
                      onkeypress="if(this.value.length==5 ) return false;"
                    />
                    <div className="g_y_service">
                      <span>
                        Please enter <span className="gra_cal_y" /> of service
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    id="g_calaulator"
                    h=""
                    className="btn btn-default center-block"
                  >
                    Calculate
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-5 gratuity_result_show">
              <div id="gcalculator">
                <h3 className="text-center h33">Calculate Gratuity Results</h3>
                <div className="main_g_result">
                  <div className="g_result">
                    <div className="exempted_g">
                      <div className="back_arrow_geatuity">
                        <img
                          className="b_a_gratuity"
                          src="https://legal251.com/images/calculator_img/backarrow_gr.svg"
                        />
                      </div>
                      <center>
                        <h3>Total Gratuity payable</h3>
                        <span className="total_g_pay_r">₹ 50,000</span>
                      </center>
                    </div>
                  </div>
                </div>
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
                <h5>Easy-to-Use</h5>
                <p className="benefitscardtext">
                  Our online Gratuity Calculator is an easy-to-use tool that
                  makes all the computation procedures easy and gives Gratuity
                  estimation accurately.
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
                <h5>Faster Calculation</h5>
                <p className="benefitscardtext">
                  Our Gratuity calculator helps you calculate Gratuity in
                  seconds and aids in your financial planning while ensuring the
                  best possible returns.
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
                <h5>Easily Accessible</h5>
                <p className="benefitscardtext">
                  You can access and use this Gratuity calculator from anywhere
                  and at any time so that you can utilize your time more
                  precisely.{" "}
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
        <p className="frequentlyheading">FREQUENTLY ASKED QUESTIONS</p>
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
                        1. What is the minimum time frame for Gratuity?
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
                      The minimum time frame for Gratuity is five years for both
                      government and private employees who are working on a
                      full-time basis.
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
                        Q2. Can I withdraw my Gratuity amount?
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
                      Yes. You can withdraw your Gratuity amount by Filing out
                      the Gratuity Form-1.
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
                        Q3. Is Gratuity calculation different for private and
                        government employees?
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
                      The Gratuity calculation for the employees private sector
                      is the same as for government employees.
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
                        Q4. What is the maximum Gratuity amount one can receive?
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
                      The maximum Gratuity amount one can receive is Rs. 10
                      lakh. Gratuity value above Rs. 10 lakh comes under ex
                      gratia Payment.
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

export default GratuityCalculator