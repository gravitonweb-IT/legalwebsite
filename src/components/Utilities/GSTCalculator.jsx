import React from 'react'

const GSTCalculator = () => {
  return (
    <>

  <div className="wrapper">
    <div style={{ position: "relative", overflowX: "hidden" }}>
   
      <div className="servicebrhide">
        <br />
      </div>
      <img
        src="https://legal251.com/images/services/Group 887.svg"
        style={{
          width: 40,
          marginTop: 6,
          marginLeft: "12.5px",
          visibility: "hidden"
        }}
      />
      <div className="all_back_color">
        <div
          className="nav navbar-nav serviceheader"
          style={{
            display: "none",
            marginTop: "-40px",
            padding: "2px 2px 1px"
          }}
        >
          <hr
            className="animationhr"
            style={{ top: "-35px", height: "33.5px" }}
          />
        </div>
        <div className="">
          <div className="gst_main" />
          <div className="row">
            <div className="col-md-12 ">
              <div className="">
                <div className="gst_cal ">
                  <div className="calculatorimg gst_calculatorimg">
                    <center>
                      <img
                        className="head_img_gst"
                        src="https://legal251.com/images/calculator_img/gst_heading_img.png"
                        alt="GST_heading"
                      />
                    </center>
                  </div>
                  <center>
                    <p className="gst_p">
                      The easiest way for businesses to calculate GST is to use
                      our online GST Calculator and get error-free results in a
                      blink of an eye.
                    </p>
                  </center>
                  <div className="main_content">
                    <div className="row">
                      <div className="col-md-4 col-lg-4">
                        <div className="intrest_amount">
                          <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6">
                              <lable className="intrest col">
                                Initial Amount<span>*</span>
                              </lable>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6">
                              <div className="input-group mb-3 intrest2">
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
                                  id="intrest_gst_p"
                                  className="form-control intrest_amou_input rangeval"
                                  placeholder="Enter intial amount"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  onkeypress="if(this.value.length==10) return false;"
                                />
                              </div>
                              <div className="initial_am_v">
                                <span>Please enter initial amount</span>
                              </div>
                              <div className="gst_f0valid">
                                <span>
                                  Please enter greater than 0 initial amount
                                </span>
                              </div>
                              <div className="gst_f10cvalid">
                                <span>
                                  Please enter less than 100000000 initial
                                  amount
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="range">
                          <input
                            id="intrest_amou_range"
                            defaultValue={1}
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
                        <div className="rate-gst mt-5">
                          <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6">
                              <lable className="ratemar col">
                                Rate Of GST<span>*</span>
                              </lable>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6">
                              <div className="input-group mb-3 intrest2">
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
                                  defaultValue=""
                                  id="rate_gst_p"
                                  className="form-control rate_gst_input rangeval2"
                                  placeholder="Enter rate of GST"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  onkeypress="if(this.value.length==2) return false;"
                                />
                              </div>
                              <div className="rate_gst_valid">
                                <span>Please enter rate of gst</span>
                              </div>
                              <div className="rate_gst0__v">
                                <span>
                                  Please enter greater than 0% rate of gst
                                </span>
                              </div>
                              <div className="rate_gst1__v">
                                <span>
                                  Please enter smaller than 28% rate of gst
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="range">
                          <input
                            id="rate_gst_range"
                            defaultValue=""
                            className="slider styled-slider slider-progress"
                            min={1}
                            max={28}
                            type="range"
                          />
                          <div className="smallval">
                            <p>1%</p>
                            <p>28%</p>
                          </div>
                        </div>
                        <div className="yourstate">
                          <lable>
                            Your State<span>*</span>
                          </lable>
                        </div>
                        <div className="custom">
                          <select className="ystate">
                            <option value="Select"> Select </option>
                            <option value="Andhra Pradesh">
                              {" "}
                              Andhra Pradesh{" "}
                            </option>
                            <option value="Arunachal Pradesh">
                              {" "}
                              Arunachal Pradesh{" "}
                            </option>
                            <option value="Assam"> Assam </option>
                            <option value="Bihar"> Bihar </option>
                            <option value="Chhattisgarh"> Chhattisgarh </option>
                            <option value="Goa"> Goa </option>
                            <option value="Gujarat"> Gujarat </option>
                            <option value="Haryana"> Haryana </option>
                            <option value="Himachal Pradesh">
                              {" "}
                              Himachal Pradesh{" "}
                            </option>
                            <option value="Jharkhand"> Jharkhand </option>
                            <option value="Karnataka"> Karnataka </option>
                            <option value="Kerala"> Kerala </option>
                            <option value="Madhya Pradesh">
                              {" "}
                              Madhya Pradesh{" "}
                            </option>
                            <option value="Maharashtra"> Maharashtra </option>
                            <option value="Manipur"> Manipur </option>
                            <option value="Meghalaya"> Meghalaya </option>
                            <option value="Mizoram"> Mizoram </option>
                            <option value="Nagaland"> Nagaland </option>
                            <option value="Odisha"> Odisha </option>
                            <option value="Punjab"> Punjab </option>
                            <option value="Rajasthan"> Rajasthan </option>
                            <option value="Sikkim"> Sikkim </option>
                            <option value="Tamil Nadu"> Tamil Nadu </option>
                            <option value="Telangana"> Telangana </option>
                            <option value="Tripura"> Tripura </option>
                            <option value="Uttarakhand"> Uttarakhand </option>
                            <option value="Uttar Pradesh">
                              {" "}
                              Uttar Pradesh{" "}
                            </option>
                            <option value="West Bengal"> West Bengal </option>
                            <option value="Andaman and Nicobar Islands">
                              {" "}
                              Andaman and Nicobar Islands{" "}
                            </option>
                            <option value="Chandigarh"> Chandigarh </option>
                            <option value="Dadra and Nagar Haveli and Daman & Diu">
                              {" "}
                              Dadra and Nagar Haveli and Daman &amp; Diu{" "}
                            </option>
                            <option value="Delhi"> Delhi </option>
                            <option value="Jammu & Kashmir">
                              {" "}
                              Jammu &amp; Kashmir{" "}
                            </option>
                            <option value="Ladakh"> Ladakh </option>
                            <option value="Lakshadweep"> Lakshadweep </option>
                            <option value="Puducherry"> Puducherry </option>
                          </select>
                          <div className="yourstate_gst__v">
                            <span>Please select your state</span>
                          </div>
                        </div>
                        <div className="coustomerstate">
                          <lable>
                            Customer State<span>*</span>
                          </lable>
                        </div>
                        <div className="custom">
                          <select className="cstate">
                            <option value="Select"> Select </option>
                            <option value="Andhra Pradesh">
                              {" "}
                              Andhra Pradesh{" "}
                            </option>
                            <option value="Arunachal Pradesh">
                              {" "}
                              Arunachal Pradesh{" "}
                            </option>
                            <option value="Assam"> Assam </option>
                            <option value="Bihar"> Bihar </option>
                            <option value="Chhattisgarh"> Chhattisgarh </option>
                            <option value="Goa"> Goa </option>
                            <option value="Gujarat"> Gujarat </option>
                            <option value="Haryana"> Haryana </option>
                            <option value="Himachal Pradesh">
                              {" "}
                              Himachal Pradesh{" "}
                            </option>
                            <option value="Jharkhand"> Jharkhand </option>
                            <option value="Karnataka"> Karnataka </option>
                            <option value="Kerala"> Kerala </option>
                            <option value="Madhya Pradesh">
                              {" "}
                              Madhya Pradesh{" "}
                            </option>
                            <option value="Maharashtra"> Maharashtra </option>
                            <option value="Manipur"> Manipur </option>
                            <option value="Meghalaya"> Meghalaya </option>
                            <option value="Mizoram"> Mizoram </option>
                            <option value="Nagaland"> Nagaland </option>
                            <option value="Odisha"> Odisha </option>
                            <option value="Punjab"> Punjab </option>
                            <option value="Rajasthan"> Rajasthan </option>
                            <option value="Sikkim"> Sikkim </option>
                            <option value="Tamil Nadu"> Tamil Nadu </option>
                            <option value="Telangana"> Telangana </option>
                            <option value="Tripura"> Tripura </option>
                            <option value="Uttarakhand"> Uttarakhand </option>
                            <option value="Uttar Pradesh">
                              {" "}
                              Uttar Pradesh{" "}
                            </option>
                            <option value="West Bengal"> West Bengal </option>
                            <option value="Andaman and Nicobar Islands">
                              {" "}
                              Andaman and Nicobar Islands{" "}
                            </option>
                            <option value="Chandigarh"> Chandigarh </option>
                            <option value="Dadra and Nagar Haveli and Daman & Diu">
                              {" "}
                              Dadra and Nagar Haveli and Daman &amp; Diu{" "}
                            </option>
                            <option value="Delhi"> Delhi </option>
                            <option value="Jammu & Kashmir">
                              {" "}
                              Jammu &amp; Kashmir{" "}
                            </option>
                            <option value="Ladakh"> Ladakh </option>
                            <option value="Lakshadweep"> Lakshadweep </option>
                            <option value="Puducherry"> Puducherry </option>
                          </select>
                          <div className="cusyomerstate_gst__v">
                            <span>Please select customer state</span>
                          </div>
                        </div>
                        <div className="add_re form-box">
                          <label>
                            <input
                              className="addremove"
                              defaultValue="Add_GST"
                              type="radio"
                              name="ad_re"
                              defaultChecked=""
                            />
                            <div className="circle" />
                            <span>Add GST</span>
                          </label>
                          <label>
                            <input
                              className="addremove"
                              defaultValue="Remove_GST"
                              type="radio"
                              name="ad_re"
                            />
                            <div className="circle" />
                            <span>Remove GST</span>
                          </label>
                        </div>
                        <div>
                          <center>
                            {" "}
                            <button id="gst_calculate" onclick="calculate()">
                              {" "}
                              Calculate{" "}
                            </button>
                          </center>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4 ">
                        <div className="mar gst_cart">
                          <div className="">
                            <div className="cont">
                              <h6>Net Amount</h6>
                              <h4 className="net_amount">₹ 0 /-</h4>
                            </div>
                          </div>
                        </div>
                        <div className="mar gst_cart">
                          <div className="">
                            <div className="cont">
                              <h6>GST Amount</h6>
                              <h4 className="gstamount">₹ 0 /-</h4>
                            </div>
                          </div>
                        </div>
                        <div className="mar gst_cart">
                          <div className="">
                            <div className="cont">
                              <h6>Total Amount</h6>
                              <h4 className="totalgst">₹ 0 /-</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="mar gst_cart2">
                          <div className="">
                            <div className="cont2">
                              <h6>SGST</h6>
                              <h4 className="sgst">₹ 0 /-</h4>
                            </div>
                          </div>
                        </div>
                        <div className="mar gst_cart2">
                          <div className="">
                            <div className="cont2">
                              <h6>CGST</h6>
                              <h4 className="cgst">₹ 0 /-</h4>
                            </div>
                          </div>
                        </div>
                        <div className="mar gst_cart2">
                          <div className="">
                            <div className="cont2">
                              <h6>IGST</h6>
                              <h4 className="igst">₹ 0 /-</h4>
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
                  <h5>Determine Gross or Net Price</h5>
                  <p className="benefitscardtext">
                    {" "}
                    Using this online GST Calculator, you can figure out a
                    product's Gross or Net Price using percentage-based goods
                    and service tax rates.
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
                  <h5>Manageable </h5>
                  <p className="benefitscardtext">
                    It helps you quickly differentiate between SGST, CGST, and
                    IGST, as well as assess each tax accurately in a manageable
                    and hassle-free way.
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
                  <h5>Time Saving &amp; Error Free</h5>
                  <p className="benefitscardtext">
                    It provides immediate returns and saves your time while
                    making the computation of the price of products &amp;
                    services easy and free from human errors.
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
          <p className="frequentlyheading f_text_col">
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
                          1. What is a GST Calculator?
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
                        GST calculator assists in computing the payable GST for
                        a specific period.
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
                          Q2. How to use the GST calculator?
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
                        As a buyer, you can use the GST Calculator by entering
                        the price and then the rate of GST for a particular
                        product or service. It will calculate the total cost of
                        production, SGST, CGST, and tax.
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
                          Q3. Is GST applicable to all goods?
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
                        GST is not applicable to all goods and services. As per
                        the taxation system, certain commodities are exempt from
                        GST.
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
                          Q4. What is an exclusive GST amount?
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
                        An exclusive GST amount is the value of a good after
                        deducting GST cost from the GST inclusion price of the
                        items.
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

export default GSTCalculator