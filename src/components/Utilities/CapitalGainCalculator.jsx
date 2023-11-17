import React from 'react'

const CapitalGainCalculator = () => {
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
         <div className="c_g_top_back_img" />
         <div className="row cgrow1">
           <div className="col-md-6 col-lg-6">
             <div className="fcol">
               <div>
                 <img
                   className="cg_img"
                   src="https://legal251.com/images/calculator_img/capital_gain_title_img.png"
                 />
               </div>
               <div>
                 <p className="cg_p">
                   Capital Gains Calculator assists investors in saving on taxes in
                   long-term gains. It enables the taxpayer to inflate the asset's
                   buying price by considering the result of inflation and
                   estimates the taxable gain by reckoning the sale price.
                 </p>
               </div>
               <div className="all_cg_result">
                 <div className="cg_calculate_res-contaner">
                   <div>
                     <p>
                       After <span>4 years,</span> Asset Holding Period (in years)
                     </p>
                   </div>
                   <div className="row">
                     <div className=" col-sm-6 col-md-6 col-lg-6">
                       <center>
                         <h6>Capital Gain / Loss</h6>
                         <h4 className="cg_p_l">₹ 0/-</h4>
                       </center>
                     </div>
                     <div className="col-sm-6 col-md-6 col-lg-6">
                       <center>
                         <h6>Effective Tax Rate</h6>
                         <h4 className="eff_tax_rate">₹ 0/-</h4>
                       </center>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-sm-6 col-md-6 col-lg-6">
                       <center>
                         <h6>Type of Capital Gain</h6>
                         <h4 className="long_short_term">Long_Term</h4>
                       </center>
                     </div>
                     <div className="col-sm-6 col-md-6 col-lg-6">
                       <center>
                         <h6>Tax Payable</h6>
                         <h4 className="cg_tax_payable">₹ 0/-</h4>
                       </center>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-md-6 col-lg-6">
             <div>
               <div className="cp_calculate">
                 <div className="claculate_fd_con">
                   <div>
                     <h3 className="sip_title">Capital Gain Calculator</h3>
                     <p className="fd_title_con"></p>
                   </div>
                   <div>
                     <div className="">
                       <lable className="depositcg">
                         Type of Asset Sold<span>*</span>
                       </lable>
                     </div>
                     <div className="asset_sold">
                       <select className="type_aset_sold">
                         <option value="Stocks">Stocks</option>
                         <option value="Equity Oriented">
                           Equity Oriented Mutual Funds
                         </option>
                         <option value="Rest of the Mutual Funds">
                           Rest of the Mutual Funds
                         </option>
                         <option value="Government">
                           Government and Corporate Bonds
                         </option>
                         <option value="Gold">Gold</option>
                         <option value="Gold ETF">Gold ETF</option>
                         <option value="Property">Property</option>
                         <option value="Privately held Stocks">
                           Privately held Stocks
                         </option>
                       </select>
                     </div>
                   </div>
                   <div className="row cgrow2">
                     <div className="col-sm-6 col-md-6 col_mar mt-1">
                       <div className="">
                         <lable className="depositcg">
                           Net Selling Price<span>*</span>
                         </lable>
                       </div>
                       <div className="">
                         <input
                           className="rup_img cg_mar_right selling_price_val"
                           id="cp_f_img"
                           placeholder="10,00,000"
                           onkeypress="if(this.value.length==10) return false;"
                         />
                         <div className="valid_s_p">
                           <span>Please enter net selling price</span>
                         </div>
                         <div className="valid_s_p_f0">
                           <span>
                             Please enter grater than 0 net selling price
                           </span>
                         </div>
                       </div>
                     </div>
                     <div className="col-sm-6 col-md-6 col_mar">
                       <div className="">
                         <lable className="depositcg">
                           Asset Bought Date<span>*</span>
                         </lable>
                       </div>
                       <div className="">
                         <input
                           className=" asset_bought_date"
                           type="date"
                           id="cp_f_img"
                           placeholder="10,00,000"
                           onkeypress="if(this.value.length==10) return false;"
                         />
                         <div className="valid_a_b_d">
                           <span>Please enter bought date</span>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="row cgrow3">
                     <div className="col-sm-6 col-md-6 col_mar">
                       <div className="">
                         <lable className="depositcg">
                           Net Buying Price<span>*</span>
                         </lable>
                       </div>
                       <div className="">
                         <input
                           className="rup_img cg_mar_right net_buying_price"
                           id="cp_f_img"
                           placeholder="10,00,000"
                         />
                         <div className="valid_buy_d">
                           <span>Please enter net buying price</span>
                         </div>
                         <div className="valid_buy_d_f0">
                           <span>Please enter grater than 0 net buying price</span>
                         </div>
                       </div>
                     </div>
                     <div className="col-sm-6 col-md-6 col_mar">
                       <div className="">
                         <lable className="depositcg">
                           Asset Sold Date<span>*</span>
                         </lable>
                       </div>
                       <div className="">
                         <input
                           className=" asset_sold_date"
                           type="date"
                           id="cp_f_img"
                           placeholder="10,00,000"
                         />
                         <div className="valid_a_s_d">
                           <span className="v_a_s_date" />
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="calculate_cg">
                     <button id="calculate_cg_btn" onclick="cgcalculate()">
                       Calculate
                     </button>
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
                   <h5>Easy and Quick Processing</h5>
                   <p className="benefitscardtext">
                     With the online Capital Gain Calculator, now calculate both
                     Long Term Capital Gain and Short Term Capital Gain easily in a
                     blink of an eye.
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
                   <h5>Accurate Results</h5>
                   <p className="benefitscardtext">
                     You only have to put the values and variables, and the online
                     capital gain calculator will do it for you with full accuracy.
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
                   <h5>No More Complexities</h5>
                   <p className="benefitscardtext">
                     This Capital Gain calculator helps you estimate all the gains
                     and losses along with the tax payable with zero complexity.
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
                           1. What is a Capital Gain?
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
                         If the selling amount of a capital asset is more than the
                         purchasing amount, this (extra) amount is Capital Gain.
                         Similarly goes with Capital Loss. When the selling amount
                         is lower than the purchasing amount, it is a Capital Loss.{" "}
                         <br />
                         <br />
                         The gain comes under the income, so the taxpayer needs to
                         pay tax on the gain.
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
                           Q2. How can I calculate capital gains tax?
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
                         You can calculate Capital Gain as Capital gain = final
                         value - ( cost of acquisition of capital asset + cost of
                         improvement of capital asset + cost of transfer of a
                         capital asset).
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
                           Q3. What is an Asset?
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
                         A capital asset is any asset one acquires for personal or
                         business use. It may be movable, immovable, tangible,
                         intangible, circulating or fixed, such as shares, stocks,
                         house property, and so.
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
                           Q4. Can I avail of indexation benefit while calculating
                           capital gain arising on the transfer of short-term
                           capital assets?
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
                         Yes, but only in the case of long-term capital assets. The
                         benefit is not applicable to short-term capital assets.
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

export default CapitalGainCalculator