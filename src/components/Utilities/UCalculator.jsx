import React from 'react'

const UCalculator = () => {
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
      <div className="container-fluid back_col_80u">
        <div className="">
          <div className="row row1">
            <div className="col-lg-7 col-sm-7">
              <div id="gratuity ">
                <h1 className="h11 calculator_80u_text">80U Calculator</h1>
                <div id="gratuitydata">
                  <hr className="hr1" />
                  <h4 className="h44">Seamless 80U Calculator</h4>
                </div>
                <ul id="hra_ul">
                  <li id="hra_li">
                    {" "}
                    <span>
                      This online tool updates the latest 80U rules and
                      regulations.
                    </span>
                  </li>
                  <li id="hra_li">
                    <span>
                      {" "}
                      This calculator works perfectly for everyone, especially
                      those with disabilities.
                    </span>
                  </li>
                  <li id="hra_li">
                    <span>
                      You can calculate Income Tax offers tax, benefits, and an
                      estimate of eligibility for deductions under Section 80U.
                      Also, now you can know whether you are eligible for
                      deductions.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-5">
              <div id="tdscalculator">
                <form action="">
                  <h3 className="text-center h33 head_80U">
                    Calculate ITR deductions for disabled
                  </h3>
                  <div className="cont_80u">
                    <div className="form-group">
                      <label htmlFor="emptype">Financial year</label>
                      <div>
                        <select
                          name="employee_type"
                          id="emptype"
                          className="tdspan year_80u "
                        >
                          <option value="select">Select</option>
                          <option id="year_80u" value={2023}>
                            2023 - 2024
                          </option>
                        </select>
                        <div className="financial_ye_80u_v">
                          <span>Please select the financial year</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="emptype">Status</label>
                      <div>
                        <select
                          name="employee_type"
                          id="emptype"
                          className="tdspan resident_80u"
                        >
                          <option value="select">Select</option>
                          <option value="resident">Resident Individual</option>
                          <option value="resident">Other</option>
                        </select>
                        <div className="residential_status_80u_v">
                          <span>Please select the status</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="emptype">Percentage of disablity</label>
                      <div>
                        <select
                          name="employee_type"
                          id="emptype"
                          className="tdspan disability_per_80us"
                        >
                          <option value="select">Select</option>
                          <option value="normal">Normal (40% or more)</option>
                          <option value="severe">Severe (80% or more)</option>
                        </select>
                        <div className="per_disability_80u_v">
                          <span>Please select the disablity Percentage</span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="calculate_80u"
                      className="btn btn-default center-block"
                    >
                      Calculate
                    </button>
                    <div className="cal_80u_input result_80u">
                      <div className="" id="basicsalary">
                        Deduction amount
                      </div>
                      <div>
                        <span className="result_80u_amount"> ₹ 0 </span>
                      </div>
                    </div>
                  </div>
                </form>
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
                <h5>Easy Estimation of Deductions</h5>
                <p className="benefitscardtext">
                  This online Calculator assesses you and estimates the
                  deductions you can avail yourself of under 80U based on your
                  disability.
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
                <h5>Quick &amp; Efficient</h5>
                <p className="benefitscardtext">
                  With the help of this online 80U Calculator, you can get the
                  desired outcome quickly and accurately in a few seconds.
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
                <h5>Helps Finding Eligibility</h5>
                <p className="benefitscardtext">
                  The online 80U Calculator helps you compute according to
                  various deductions and confirms if you are eligible for a
                  deduction or not.
                </p>
              </center>
            </div>
          </div>
        </div>
      </div>
      <br className="mobhidebr" />
      <div id="FAQs" className="">
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
                        1. When can I claim a deduction under 80U?
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
                      Individuals with a prescribed disability between 40% to
                      80% disability, can claim a deduction under section 80U of
                      the Income Tax Act.
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
                        Q2. Who can claim deductions under section 80U?
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
                      Anyone from the below categories with a disability of more
                      than 40% to 80% can claim deductions under section 80U:
                      <br />
                      <li>Low vision</li>
                      <li>Blindness</li>
                      <li>Locomotor disability</li>
                      <li>Mental illness</li>
                      <li>Hearing impairment</li>
                      <li>Mental retardation</li>
                      <li>Leprosy-cured</li>
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
                        Q3. Is 80U applicable for dependents?
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
                      No, one cannot claim a deduction for the disability of any
                      of your dependents under section 80U. It is available only
                      for taxpayers who are disabled as per section 80U.
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
                        Q4. How can I claim deductions under Section 80U?
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
                      A person with a physical disability can claim the
                      deductions under section 80U while reporting income in his
                      Income Tax Return.
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

export default UCalculator