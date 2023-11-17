import React from 'react'

const TDSCalculator = () => {
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
    <div className="container-fluid tds_background">
      <div className="row row1 tds_shadow">
        <div className="col-lg-7 col-sm-7">
          <div id="gratuity">
            <h1 className="h11">TDS Calculator</h1>
            <div id="gratuitydata">
              <hr className="hr1" />
              <h4 className="h44">TDS Calculator</h4>
            </div>
            <p>
              TDS is a method to collect income tax from an individual's salary
              before receiving their salary. Our TDS calculator will assist you
              in calculating the estimated amount of deduction. This online tool
              is easy to use, and you need to provide some basic details such as
              PAN Card, amount of Payment, and Nature of Payment, and select
              whether you are a Sole Proprietor/HUF/Individual or Other, and
              it's done!
            </p>
          </div>
        </div>
        <div className="col-lg-5 col-sm-5 tds_calcul">
          <div id="tdscalculator">
            <form action="">
              <h3 className="text-center h33">Financial Year 2021-2022</h3>
              <div className="form-group">
                <label htmlFor="emptype">PAN of Recipient Available</label>
                <div>
                  <select name="employee_type" id="emptype" className="tdspan">
                    <option value="Select">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  <div className="tds_pan_v">
                    <span>Please select recipient available</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="emptype">Amount of payment</label>
                <div>
                  <input
                    className="form-control tds_amount_payment  tds_amount_payment_sty "
                    name="employee_type"
                    id="emptype"
                    placeholder="₹ eg. 50000"
                    style={{ backgroundColor: "#f5f5f5", border: "none" }}
                    onkeypress="if(this.value.length==9 ) return false;"
                  />
                  <div className="tds_amount_pay_v">
                    <span>Please enter amount</span>
                  </div>
                  <div className="tds_amount_pay_v valid_f0_am_tds">
                    <span>Please enter greater than ₹ 0 amount</span>
                  </div>
                  <div className="tds_amount_pay_v valid_f1c_am_tds">
                    <span>Please enter less than ₹ 10000000 amount</span>
                  </div>
                </div>
              </div>
              <label htmlFor="">Recipient :-</label>
              <div className="form-group">
                <input
                  type="radio"
                  id="metro"
                  className="tds_recipient"
                  name="city_type"
                  defaultValue="indivisual"
                />
                <label htmlFor="metro">Indivisual/HUF/Sole Proprietor</label>
                <input
                  type="radio"
                  id="oth"
                  className="tds_recipient"
                  name="city_type"
                  defaultValue="Other"
                />
                <label htmlFor="oth">Other</label>
                <div className="tds_recipient_v">
                  <span>Please select recipient</span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="emptype">Nature of Payment</label>
                <div>
                  <select
                    name="employee_type"
                    id="emptype"
                    className="tds_nature_of_payment"
                    disabled=""
                  >
                    <option value="">Select</option>
                  </select>
                  <div className="tds_nature_pay_v">
                    <span>Please select nature of payment</span>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                id="calculate_tds"
                className="btn btn-default center-block"
              >
                Calculate
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-5 col-sm-5 tds_cal_result">
          <div id="hra_result">
            <div id="hra_result1">
              <a id="hra_back" className="tds_hover">
                <span className="glyphicon glyphicon-arrow-left" />
              </a>
              <h2 className="text-center h22">EXEMPTION</h2>
            </div>
            <div className="hra_res" id="hra_result2">
              <h2 className="h22 amo text-center" id="tds_cal_result">
                ₹ 50,000
              </h2>
              <p className="text-center" id="tds_para" />
              <button className="btn btn-success center-block ">
                File ITR NOW
              </button>
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
                <h5>Get Exact Estimation</h5>
                <p className="benefitscardtext">
                  {" "}
                  The online TDS calculator gives the estimation of the amount
                  you are liable to deduct on a particular transaction.
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
                <h5>Easy &amp; Simple to Use</h5>
                <p className="benefitscardtext">
                  Our TDS calculator is an online tool for calculating the TDS
                  (Tax Deducted at Source). You can use it from anywhere without
                  putting in the extra effort.
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
                <h5>Faster Processing</h5>
                <p className="benefitscardtext">
                  It can calculate TDS really fast as compared to offline
                  calculators or procedures.
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
                        1. How to calculate TDS?
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
                      You can calculate TDS with the formula given below:
                      <br />
                      <br />
                      <li>
                        Average Income Tax Rate = Income Tax Payable (as per the
                        slab rates) / Estimated Income for the financial year.
                      </li>
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
                        Q2. How does the TDS calculator work?
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
                      After taking the basic details from you, the TDS
                      calculator works on the preset formula.
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
                        Q3. Does the calculator show the percentage of tax
                        deducted at the source?
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
                      Yes, it will show the TDS percentage as well as the
                      amount.
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
                        Q4. Can I claim HRA as a deduction while calculating TDS
                        on salary?
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
                      Once you declare the amount paid as rent, you can claim
                      its exemption.
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

export default TDSCalculator