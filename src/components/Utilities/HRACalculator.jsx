import React from 'react'

const HRACalculator = () => {
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
      <div className="container-fluid tds_background">
        <div className="row row1 hra_mt">
          <div className="col-lg-7 col-sm-7">
            <div id="gratuity">
              <h1 className="h11">HRA Calculator</h1>
              <div id="gratuitydata">
                <hr className="hr1" />
                <h4 className="h44">Full-fledged HRA Calculator</h4>
              </div>
              <h4 className="desc">
                A salaried individual can claim up to Rs. 60,000/- under Section
                80GG even if he doesn't receive HRA. Also, he can calculate
                exemption if you receive HRA in a few moments.
              </h4>
              <p>
                According to this, you can calculate HRA by Filing in the basic
                details on a per annum basis:
              </p>
              <ul id="hra_ul">
                <li id="hra_li">
                  <span> Basic Salary.</span>
                </li>
                <li id="hra_li">
                  <span> Dearness Allowance (DA).</span>
                </li>
                <li id="hra_li">
                  <span>Total Rent Paid.</span>
                </li>
                <li id="hra_li">
                  <span>Actual HRA Received.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-sm-5">
            <div id="hracalculator">
              <form action="">
                <h3 className="text-center h33">Calculate HRA</h3>
                <div className="form-group">
                  <label htmlFor="basicsalary">Basic Salary + DA</label>
                  <input
                    type="number"
                    className="form-control"
                    id="basicsalary"
                    defaultValue=""
                    placeholder="₹ eg. 50000"
                    onkeypress="if(this.value.length==9   ) return false;"
                  />
                  <div className="basicsalary_DA_v">
                    <span>
                      Pleace enter <span className="check_err_hra" />
                      basic salary + DA
                    </span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="hra_recive">HRA Recived</label>
                  <input
                    type="number"
                    className="form-control"
                    id="hra_recive"
                    defaultValue=""
                    placeholder="₹ eg. 50000"
                    onkeypress="if(this.value.length==9) return false;"
                  />
                  <div className="hra_recived_v">
                    <span>Pleace enter HRA recived</span>
                  </div>
                </div>
                <div className="hra_rad_btn_d">
                  <label htmlFor="">Choose city</label>
                  <br />
                  <input
                    type="radio"
                    id="test1"
                    name="radio"
                    className="hrsradio"
                    defaultValue="metro_city"
                    defaultChecked=""
                  />
                  <label className="radio-btn m_city" htmlFor="test1">
                    Metro City
                  </label>
                  <input
                    type="radio"
                    id="test2"
                    className="hrsradio"
                    name="radio"
                    defaultValue="other_city"
                  />
                  <label className="radio-btn" htmlFor="test2">
                    Other City
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="actual_rent">Actual Rent Paid</label>
                  <input
                    type="number"
                    className="form-control"
                    id="actual_rent"
                    defaultValue=""
                    placeholder="₹ eg. 50000"
                    onkeypress="if(this.value.length==9) return false;"
                  />
                  <div className="a_rentpay_v">
                    <span>
                      Pleace enter <span className="hra_rent_pay" />
                      actual rent paid
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  id="hra_calaulator"
                  h=""
                  className="btn btn-default center-block"
                >
                  Calculate
                </button>
              </form>
            </div>
            <div className="container-fluid  hra_result_div">
              <div className="row ">
                <div className="">
                  <div id="hra_result">
                    <div id="hra_result1">
                      <span
                        id="hra_back"
                        className="glyphicon glyphicon-arrow-left"
                      />
                      <h2 className="text-center h22">EXEMPTION</h2>
                    </div>
                    <div id="hra_result2">
                      <h2 className="h22 amo text-center" id="hra_exe">
                        ₹ 0
                      </h2>
                      <div id="hra_result3">
                        <center>
                          <h2 className="text-center h22">HRA taxable</h2>
                        </center>
                      </div>
                      <div>
                        <h4 className="h22 amo text-center" id="hra_taxable">
                          {" "}
                          ₹ 0
                        </h4>
                      </div>
                      <button className="btn btn-success btn_s_hover center-block">
                        <a
                          className="hra_hover"
                          href="https://legal251.com/income-tax-return-filing"
                        >
                          File ITR NOW
                        </a>
                      </button>
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
                <h5>Error-Free Calculations</h5>
                <p className="benefitscardtext">
                  You can use this online HRA calculator as many times as you
                  want without making a single mistake.
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
                <h5>Claim Tax Exemptions</h5>
                <p className="benefitscardtext">
                  HRA calculator allows you to claim tax exemptions on the basis
                  of the calculations.
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
                <h5>Autocaculartion of HRA</h5>
                <p className="benefitscardtext">
                  This calculator takes care of all the variables that are a
                  part of HRA calculation quickly and efficiently.{" "}
                </p>
              </center>
            </div>
          </div>
        </div>
      </div>
      <br className="mobhidebr" />
      <div id="FAQs" className="page-section tds_background">
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
        <p className="frequentlyheading faq_head_col">
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
                        1. Am I eligible for a tax rebate if I live in my own
                        house?
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
                      No, you can not claim HRA exemption in this case.
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
                        Q2. Can I claim HRA while claiming home loan deductions
                        simultaneously?
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
                      Yes, you can. You can claim HRA while paying back your
                      home loan if you live in a rented property. You can avail
                      of both benefits to minimize your taxable income.
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
                        Q3. Can I claim an HRA tax exemption if I pay my
                        parents' rent?
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
                      Yes, you can. If you are living in your parent's house and
                      getting a house rent allowance for the same, you can get a
                      tax exemption on it. However, the house must be in your
                      parent's name, and they need to show this rent as the
                      income from rent in their income tax returns.
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
                        Q4. What should I do if my landlord refuses to give me
                        his PAN?
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
                      The PAN of your landlord is necessary for you to avail of
                      HRA exemption with the condition that you pay Rs. 1lakh
                      per year.
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

export default HRACalculator