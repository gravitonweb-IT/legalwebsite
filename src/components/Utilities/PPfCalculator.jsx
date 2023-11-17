import React from 'react'

const PPfCalculator = () => {
  return (
    <>
   
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
     <div className="mainppf" />
     <div className="Emi_cal all_ppf_con_w">
       <center>
         <img
           className="ppf_top_image"
           src="https://legal251.com/images/calculator_img/PPF_calculator_main_head.png"
           alt="head_emi_image"
         />
       </center>
       <center>
         <p className="p_80u ppf_head_text">
           Save for the future and get the estimated interest insights now using
           this online PPF calculator, with easy calculation. Also, save you from
           paying huge taxes on your savings.
         </p>
       </center>
       <div className="row maincal80u">
         <div className="col-md-6 col-lg-4 col-xl-4">
           <div>
             <div className="deposit_amount fd_deposit_am">
               <div className="row">
                 <div className="col-sm-6 col-md-6 col-lg-6">
                   <lable className="depositfd">
                     Yearly Investment<span>*</span>
                   </lable>
                 </div>
                 <div className="col-sm-6 col-md-6 col-lg-6">
                   <div className="input-group mb-3 deposit_amount2">
                     <div className="input-group-prepend">
                       <span className="input-group-text" id="basic-addon1">
                         <img src="https://legal251.com/images/calculator_img/Rupeeimg.svg" />
                       </span>
                     </div>
                     <input
                       type="number"
                       defaultValue=""
                       className="form-control year_inv_inp_ppf rangeval"
                       id="deposit_am"
                       placeholder="Enter amount"
                       aria-label="Username"
                       aria-describedby="basic-addon1"
                       minLength={0}
                       maxLength={4}
                       onkeypress="if(this.value.length==10) return false;"
                     />
                   </div>
                   <div className="yearly_invest_ppf_valid">
                     <span>Please enter yearly investment</span>
                   </div>
                   <div className="yearly_invest_ppf_valid_f0">
                     <span>Please enter greater than ₹ 0 yearly investment</span>
                   </div>
                   <div className="yearly_invest_ppf_valid_f10c">
                     <span>
                       Please enter less than ₹ 100000000 yearly investment
                     </span>
                   </div>
                 </div>
               </div>
             </div>
             <div className="">
               <input
                 id="myRange"
                 defaultValue={0}
                 className="slider styled-slider slider-progress year_inv_range_ppf"
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
           <div>
             <div className="intrest_rate_fd fd_intrest_r">
               <div className="row">
                 <div className="col-sm-6 col-md-6 col-lg-6">
                   <lable className="intrestfd">
                     Rate of Interest<span>*</span>
                   </lable>
                 </div>
                 <div className="col-sm-6 col-md-6 col-lg-6">
                   <div className="input-group mb-3 intrest_rate2">
                     <div className="input-group-prepend">
                       <span className="input-group-text" id="basic-addon1">
                         <img src="https://legal251.com/images/calculator_img/per_icon.svg" />
                       </span>
                     </div>
                     <input
                       type="number"
                       className="form-control rate_int_inp_ppf rangeval2"
                       id="rate_int"
                       placeholder="Enter Intrest Rate"
                       aria-label="Username"
                       aria-describedby="basic-addon1"
                       onkeypress="if(this.value.length==2) return false;"
                     />
                   </div>
                   <div className="rate_intrest_ppf_valid">
                     <span>Please enter intrest rate</span>
                   </div>
                   <div className="rate_intrest_ppf_valid_f0per">
                     <span>Please enter greater than 0% intrest rate</span>
                   </div>
                   <div className="rate_intrest_ppf_valid_f50per">
                     <span>Please enter less than 51% intrest rate</span>
                   </div>
                 </div>
               </div>
             </div>
             <div className="">
               <input
                 id="myRange2"
                 defaultValue={0}
                 className="slider styled-slider slider-progress rate_int_range_ppf "
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
             <div className="time_period fd_time_period">
               <div className="row">
                 <div className="col-sm-6 col-md-6 col-lg-6">
                   <lable className="time_p_fd">
                     Time Period<span>*</span>
                   </lable>
                 </div>
                 <div className="col-sm-6 col-md-6 col-lg-6">
                   <div className="input-group mb-3 time_period2">
                     <div className="input-group-prepend">
                       <span className="input-group-text" id="basic-addon1">
                         <img src="https://legal251.com/images/calculator_img/sip_cal_icon.svg" />
                       </span>
                     </div>
                     <input
                       type="number"
                       className="form-control time_p_inp_ppf rangeval3"
                       id="time_period"
                       placeholder="Enter Time Period"
                       aria-label="Username"
                       aria-describedby="basic-addon1"
                       minLength={0}
                       maxLength={30}
                       onkeypress="if(this.value.length==2) return false;"
                     />
                   </div>
                   <div className="time_period_ppf_valid">
                     <span>Please enter time period</span>
                   </div>
                   <div className="time_period_ppf_valid_f0y">
                     <span>
                       Please enter <span className="ppf_c_f_ym_g" />
                       time period
                     </span>
                   </div>
                   <div className="time_period_ppf_valid_f30y">
                     <span>
                       Please enter <span className="ppf_c_f_ym_l" />
                       time period
                     </span>
                   </div>
                 </div>
               </div>
             </div>
             <div className="">
               <input
                 id="myRange3"
                 defaultValue={0}
                 className="slider styled-slider slider-progress time_p_range_ppf"
                 min={15}
                 max={30}
                 type="range"
               />
               <div className="smallval">
                 <p>15 Year</p>
                 <p>30 Years</p>
               </div>
             </div>
             <div>
               <center>
                 <button id="calculate_ppf_btn" onclick="calculateppf()">
                   Calculate
                 </button>
               </center>
             </div>
           </div>
         </div>
         <div className="col-md-6 col-lg-4 col-xl-4">
           <center>
             <div className="fd_r_padd ppf_wi">
               <div className="bg_inp">
                 <div className="result_fdpadd result_ppfpadd ">
                   <div className="ppf_res_padd">
                     <h5 className="result_text_ppf ppf_text_res_padd">
                       Invested Amount
                     </h5>
                     <h6 className="result_fd ppf_iinvest_am_value ">₹ 0 /-</h6>
                   </div>
                   <div className="ppf_res_padd ">
                     <h5 className="result_text_ppf ppf_text_res_padd">
                       Total Interest
                     </h5>
                     <h6 className="result_fd ppf_total_intrest_value">
                       ₹ 0 /-
                     </h6>
                   </div>
                   <div className="ppf_res_padd ">
                     <h5 className="result_text_ppf ppf_text_res_padd">
                       Maturity Value
                     </h5>
                     <h6 className="result_fd ppf_maturity_value">₹ 0 /-</h6>
                   </div>
                 </div>
               </div>
             </div>
           </center>
         </div>
         <div className=" col-md-12 col-lg-4 col-xl-4">
           <center>
             <div id="donutchart" style={{ height: 300 }} />
           </center>
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
               <h5>Get Interest Insights</h5>
               <p className="benefitscardtext">
                 {" "}
                 This online computing tool allows users to get insight into the
                 interest amount they can earn by investing a certain amount of
                 money for a particular time.
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
               <h5>Tax Saving</h5>
               <p className="benefitscardtext">
                 Our PPF calculator makes the calculation easy, helps you
                 determine the tax liability, and saves you from paying a hefty
                 amount.
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
               <h5>Decide Maturity Period </h5>
               <p className="benefitscardtext">
                 The online PPF calculator eases the process of deciding the
                 maturity period for your investment.
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
                       1. Can I transfer my PPF account to another branch?
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
                     Yes, you are eligible to transfer your PPF account from one
                     branch/office to another branch/office.
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
                       Q2. What is the maturity period for my PPF investment?
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
                     The maturity period for your PPF investment is 15 years, and
                     you are liable to withdraw your entire amount after this
                     period.
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
                       Q3. Can I extend my PPF tenure, and how many times?
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
                     Yes. You can extend your PPF tenure investment as many times
                     as you wish after the maturity period.
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
                       Q4. Can I close my PPF account if I cannot contribute to
                       the same?
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
                     Yes, you can close your PPF account after five years.
                     However, some other factors need to meet for closing the PPF
                     account.
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

export default PPfCalculator