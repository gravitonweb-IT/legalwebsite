import React from "react";
import "../css/navbar.css";
import "../css/font/CerebriSans-Bold.ttf";
import "../css/plugins.css";
import "../css/navbar.css";
import "../css/style.css";
import "../css/bootsnav.css";
// import './css/all_calculator.css';
import "../css/animation.css";
import "../css/header.css";
import "../css/Consultancy.css";
import "../css/trackingresponsive.css";
import "../css/tracking.css";
import "../css/textanimation.css";
import "../css/tds_calculator.css";
import "../css/style2.css";
import "../css/services.css";
import "../css/services2.css";
import "../css/select2.css";
import "../css/select3.css";
import "../css/policy.css";
import "../css/owl.theme.default.min.css";
import "../css/owl.carousel.min.css";
import "../css/new-hover.css";
import "../css/lovefromourclient.css";
import Asset from "../images/services/Asset 1@1000x.png";
import one from "../images/services/1 (37).png";
import  Path4125 from "../images/services/Path 4125.svg"
import  question from "../images/services/question.svg";
import  Report from "../images/nda/Credit-Monitoring-Arrangement-(CMA)-Report@2x.png";
import Path19952 from  "../images/gstregistration/Path 19952.svg";
import Compliance  from "../images/companyregimage/Compliance.svg";
import  optiization  from "../images/companyregimage/cost-optiization.svg";
import  Making  from  "../images/companyregimage/Decision-Making.svg";
import  Transparency from "../images/companyregimage/Transparency.svg";
import  adherence from  "../images/companyregimage/regulatory-adherence.svg"
import Advantage from   "../images/companyregimage/Competitive-Advantage.svg";
import Allocation  from "../images/companyregimage/Resource-Allocation.svg";
import Evaluation from   "..//images/companyregimage/Performance-Evaluation.svg"
import  Benchmarking from  "../images/companyregimage/Benchmarking.svg";
import Assessment from   "../images/companyregimage/Health-Assessment.svg";
import registration from "../images/services/registration.svg";
import Group_1799 from "../images/services/Group_1799.svg";
import yellow from "../images/services/yellow.svg";
import cut from "../images/services/blue_cut.svg";
import blue from "../images/services/blue.svg";
import Legalwhitelogo from "../../components/images/legalwhitelogo.svg";
import Visaimg from "../../components/images/visa.svg";
import Upiimg from "../../components/images/upi.svg";
import Rupayimg from "../../components/images/rupay.svg";
import Paytmimg from "../../components/images/paytm.svg";
import Mastercardimg from "../../components/images/mastercard.svg";
import Emailbuttonimg from "../../components/images/emailbutton.svg";
import FooterTwitter from "../../components/images/fottertwitter.svg";
import FooterLinked from "../../components/images/footerlinkedin.svg";
import FooterInstagram from "../../components/images/footerinsta.svg";
import FooterFacebook from "../../components/images/footerfb.svg";
import faq from "../images/services/faq.svg";
// import Lineimages from "../../components/images/companyregimage/Line.png";
import { Link } from "react-router-dom";
import Whychooseus from "../images/services/Why choose us.svg";
import Layer from "../images/services/Layer 2.svg";
const CmaReport = () => {
  return (
    <>
      <div style={{ position: "relative", "overflow-x": "hidden" }}>
        <div className="wrapper page-section" id="overview">
          <div className="row r1 animatable slower fadeInDown"></div>
        </div>
        <div className="sidebar-contact">
          <div className="toggle1" id="freeconsultationBtn">
            <img
              src="images/services/Icon_ionic-ios-arrow-back.svg"
              id="test123"
              style={{ height: "15px", "margin-top": "8px" }}
            />
          </div>
          <a href="#overview">
            <p
              style={{
                color: "#f8951d",
                "font-size": "14px",
                "font-family": "'Gotham'",
                "line-height": "2.5",
              }}
            >
              Free Consultation
            </p>
          </a>
        </div>
        <div
          className="input-group popupsearchbar"
          style={{ position: "fixed", display: "none" }}
        >
          <input
            type="text"
            id="pop-input"
            autoComplete="off"
            name="search_entered"
            className="form-control Searchbar1"
            placeholder="Search..."
            style={{ "box-shadow": "none", "border-color": "#2d2d2d" }}
          />
          <div className="pop-data" style={{ position: "absolute" }}></div>
          <div className="input-group-btn">
            <div
              className="input-group-addon"
              id="hide"
              style={{
                padding: "0px",
                "background-color": "transparent",
                border: "none",
              }}
            >
              <div className="popupsearchbaraddon">
                <img
                  src="images/closeicon.svg"
                  className="subscribeemailclose"
                />
              </div>
            </div>
          </div>
        </div>
        <a
          href="msme-udhyam-registration-hindi.html"
          className="languageicon"
          style={{ display: "none" }}
        >
          हिंदी <img src="images/langicon.svg" className="langicon" />
        </a>
        <div className="sidebarmain">
          <img
            src="images/sidebarshape.png"
            style={{ position: "absolute", height: "100%", "z-index": "-1" }}
          />
          <img
            src="images/cancel.svg"
            style={{
              cursor: "pointer",
              width: "3.6vh",
              "margin-top": "1.5vh",
              "z-index": "100",
              "margin-left": "1.2vh",
              position: "absolute",
            }}
            onclick="closesidebarmain()"
          />
          <div style={{ "padding-left": "5.9vh" }}>
            <div className="sidebarmainsection">
              <p className="sidebarmainheading">
                <a href="how-we-work.html">
                  <img src="images/howwework.svg" className="sidebarimage2" />
                </a>
              </p>
              <center>
                <a
                  className="sidebarmainheading"
                  href="how-we-work.html"
                  style={{
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    color: "#fff",
                  }}
                >
                  {" "}
                  How we work
                </a>{" "}
              </center>
            </div>
            <div className="sidebarmainsection">
              <p className="sidebarmainheading">
                <a href="how-to-get-consultancy.html">
                  <img src="images/howtogetcon.svg" className="sidebarimage1" />
                </a>
              </p>
              <center>
                <a
                  className="sidebarmainheading"
                  href="how-to-get-consultancy.html"
                  style={{
                    "line-height": "1.3",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    color: "#fff",
                  }}
                >
                  How to get <br />
                  Consultancy
                </a>
              </center>
              <a
                className="sidebarmainheading"
                href="how-to-get-consultancy.html"
                style={{
                  "line-height": "1.3",
                  "-webkit-text-align": "center",
                  "text-align": "center",
                  color: "#fff",
                }}
              ></a>
            </div>
            <div className="sidebarmainsection">
              <p className="sidebarmainheading">
                <a href="https://blog.legal251.com/">
                  <img src="images/blog.svg" className="sidebarimage1" />
                </a>
              </p>
              <center>
                <a
                  className="sidebarmainheading"
                  href="resources/index.html"
                  style={{
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    color: "#fff",
                  }}
                >
                  Blog
                </a>{" "}
              </center>
            </div>
            <div className="sidebarmainsection">
              <p className="sidebarmainheading">
                <a href="about.html">
                  <img src="images/aboutus.svg" className="sidebarimage1" />
                </a>
              </p>
              <center>
                {" "}
                <a
                  className="sidebarmainheading"
                  href="about.html"
                  style={{
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    color: "#fff",
                  }}
                >
                  About Us
                </a>
              </center>
            </div>
            <div className="sidebarmainsection">
              <p className="sidebarmainheading">
                <a href="contact.html">
                  <img src="images/contactus.svg" className="sidebarimage2" />
                </a>
              </p>
              <center>
                <a
                  className="sidebarmainheading"
                  href="contact.html"
                  style={{
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    color: "#fff",
                  }}
                >
                  Contact Us
                </a>{" "}
              </center>
            </div>
          </div>
        </div>
        <noscript>
          &lt;iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N37QCKM"
          height="0" width="0"
          style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
        </noscript>
        <nav
          className="navbar navbar-default bootsnav"
          id="nav1"
          style={{ position: "fixed", width: "100%", "z-index": "10" }}
        >
          <div className="trackserviceheader" id="trackservicediv">
            <div className="phonenoheader">
              <a
                target="_blank"
                href="https://wa.me/917772877729/?text=917772877729&text=Hello%20Team%20Legal251!"
              >
                {" "}
                <img
                  className="phonenoheaderwhatsapp"
                  src="images/whatsapp.svg"
                />{" "}
              </a>
              &nbsp;&nbsp;{" "}
              <a style={{ color: "#2d2d2d" }} href="tel:7772877729">
                {" "}
                <img src="images/phoneno.svg" className="phonenoheaderlogo" />
                (+91)77728-77729{" "}
              </a>
            </div>
            <div
              className="dropdown mydropdownclass"
              style={{ color: "#2d2d2d" }}
            >
              <button
                className="userloginbutton  dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                Login{" "}
                <img src="images/common/login.svg" className="userloginicon" />
              </button>
              <ul className="dropdown-menu dropdown-menu2   specialdropul2">
                <li>
                  <a href="https://user.legal251.com/">
                    <img
                      src="images/common/Path_1.svg"
                      className="userlogindropicon"
                    />
                    &nbsp;User Login
                  </a>
                </li>
                <li>
                  <a href="https://partners.legal251.com/">
                    <img
                      src="images/common/agent.svg"
                      className="userlogindropicon2"
                    />
                    &nbsp;Partner Login
                  </a>
                </li>
              </ul>
            </div>
            <a href="track-service.html" style={{ color: "#2d2d2d" }}>
              <button className="trackservicebutton">
                <p style={{ display: "inline-block", top: "0px" }}>
                  Track
                  <br /> Service
                </p>
                <img
                  src="images/trackservice.svg"
                  className="trackserviceicon"
                />
              </button>
            </a>
            <div className="trackservicebuttonmobdiv dropdown">
              <button
                className="trackservicebuttonmob dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                User Services
                <img
                  src="images/common/Group_7.svg"
                  className="userloginicon"
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-right specialdropul">
                <li>
                  <a href="https://user.legal251.com/">
                    <img
                      src="images/common/Path_1.svg"
                      className="userlogindropicon"
                    />{" "}
                    &nbsp;User Login
                  </a>
                </li>
                <li>
                  <a href="track-service.html">
                    <img
                      src="images/common/Group_3.svg"
                      className="userlogindropicon"
                    />{" "}
                    &nbsp;Track Service
                  </a>
                </li>
                <li>
                  <a href="https://partners.legal251.com/">
                    <img
                      src="images/common/agent.svg"
                      className="userlogindropicon2"
                    />
                    &nbsp;Partner Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="container-fluid"
            style={{ "background-color": "transparent" }}
          >
            <div className="attr-nav">
              <ul className="pal">
                <li className="search">
                  <a href="#" style={{ "margin-top": "2px" }}>
                    <img
                      src="images/sidesearchicon.svg"
                      className="navSearchbaricon"
                      id="show"
                      style={{ width: "20px" }}
                    />
                  </a>
                </li>
                <li className="menu">
                  <a style={{ "margin-top": "3px" }}>
                    <img
                      src="images/star.svg"
                      className="sidemenuicon burger1"
                      style={{ width: "23px", cursor: "pointer" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                id="testingside"
                style={{ "background-color": "transparent" }}
              >
                <i
                  className="fa fa-bars"
                  style={{
                    "font-size": "25px",
                    "background-color": "transparent",
                  }}
                />
              </button>
              <a className="navbar-brand" href="index.html">
                <center>
                  <img
                    src="images/common/legal.svg"
                    className="logo mainlogo"
                    alt
                  />
                </center>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul className="nav navbar-nav navbar-right" data-in data-out>
                <li className="dropdown megamenu-fw ">
                  <a href="#" className="dropdown-toggle mytext m_togle">
                    Start Business
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </a>
                  <ul
                    className="bimage dropdown-menu megamenu-content "
                    role="menu"
                  >
                    <li className="allcontent allcontent12">
                      <div className="row ">
                        <div className="col-menu col-md-5">
                          <div className="megamenu_heading">
                            <img
                              className="megamenu_title_img"
                              src="images/megamenubimage/Group_5675.png"
                              loading="lazy"
                            />
                            <div>
                              <span
                                className="title mtitle "
                                data-toggle="dropdown"
                              >
                                Start Business
                              </span>
                            </div>
                            <hr className="headinghr" />
                          </div>
                          <div className="content">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <a
                                  className="text"
                                  href="partnership-deed.html"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/partnership-deed.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Partnership Deed
                                  </span>
                                </a>
                              </li>
                              <li className="incontent">
                                <a
                                  className="text"
                                  href="private-limited-company-registration.html"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/company-reg.svg"
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Pvt. Ltd. Company Registration
                                  </span>
                                </a>
                              </li>
                              <li className="incontent">
                                <a
                                  className="text"
                                  href="section-8-company-registration.html"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/section8-reg.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Section 8 Company Registration
                                  </span>
                                </a>
                              </li>
                              <li className="incontent">
                                <a
                                  className="text"
                                  href="llp-company-registration.html"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/llp.svg"
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    LLP Company Registration
                                  </span>
                                </a>
                              </li>
                              <li className="incontent">
                                <a
                                  className="text"
                                  href="opc-one-person-company-registration.html"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/opc.svg"
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    OPC Company Registration
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-5">
                          <div className="megamenu_heading">
                            <img
                              className="megamenu_title_img"
                              src="images/megamenubimage/Group_5675.png"
                              loading="lazy"
                            />
                            <div>
                              <span className="title mtitle">Compliance</span>
                            </div>
                            <hr className="headinghr" />
                          </div>
                          <div className="content">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <a
                                  className="text"
                                  href="annual-compliance-llp.html"
                                >
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/newicons/annualcompliancellp.svg"
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Annual Compliance LLP
                                  </span>
                                </a>
                              </li>
                              <li className="incontent">
                                <a
                                  className="text"
                                  href="annual-compliance-company.html"
                                >
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/newicons/AnnualCompliancePvt.Ltd..svg"
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Annual Compliance Pvt. Ltd.
                                  </span>
                                </a>
                              </li>
                              <li className="incontent">
                                <a className="text" href="cma-report.html">
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/newicons/CMAReport.svg"
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    CMA Report
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu-fw ">
                  <a href="#" className="dropdown-toggle mytext5 m_togle">
                    Change in Business
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </a>
                  <ul
                    className="bimage dropdown-menu megamenu-content lopadd"
                    role="menu"
                  >
                    <li className="allcontent newincontent allcontent12">
                      <div className="row col-menu">
                        <div className="megamenu_heading">
                          <img
                            className="megamenu_title_img"
                            src="images/megamenubimage/Group_5675.png"
                            loading="lazy"
                          />
                          <div>
                            <span className="title mtitle">
                              Change in Business{" "}
                            </span>
                          </div>
                          <hr className="headinghr" />
                        </div>
                        <div className="col-menu col-md-5 dview">
                          <div className="content">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group%205917.svg"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div>
                                    <a
                                      className="text"
                                      href="dissolution-of-deed.html"
                                    >
                                      <span className="hvr-sweep-to-right textres">
                                        Dissolution of deeds
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="incontent">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/newicons/AddressAmendmentWithinstate(LLP).svg"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div>
                                    <a
                                      className="text"
                                      href="address-amendment-within-state-llp.html"
                                    >
                                      <span className="hvr-sweep-to-right textres">
                                        {" "}
                                        Address Amendment Within state (LLP)
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="incontent">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/newicons/AddressAmendmentWithinstate(Company).svg"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div>
                                    <a
                                      className="text"
                                      href="address-amendment-within-state-company.html"
                                    >
                                      <span className="hvr-sweep-to-right textres">
                                        {" "}
                                        Address Amendment Within state (Company)
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="incontent">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/newicons/AddressAmendmentoutofstate(LLP).svg"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div>
                                    <a
                                      className="text"
                                      href="address-amendment-out-state-llp.html"
                                    >
                                      <span className="hvr-sweep-to-right textres">
                                        Address Amendment out of state (LLP)
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="incontent">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/newicons/AddressAmendmentoutofstate(Company).svg"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div>
                                    <a
                                      className="text"
                                      href="address-amendment-out-state-company.html"
                                    >
                                      <span className="hvr-sweep-to-right textres">
                                        {" "}
                                        Address Amendment out of state (Company)
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-3 dview">
                          <div className="content">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <a className="text" href="add-director.html">
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/newicons/AddDirector(company).svg"
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Add Director (company)
                                  </span>
                                </a>
                              </li>
                              <li className="incontent">
                                <a className="text" href="add-partner.html">
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/newicons/AddPartner(LLP).svg"
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Add Partner (Company)
                                  </span>
                                </a>
                              </li>
                              <li className="incontent">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/newicons/IncreaseCapital(LLP).svg"
                                      loading="lazy"
                                    />
                                    &nbsp;
                                  </div>
                                  <div>
                                    <a
                                      className="text"
                                      href="increase-capital-llp.html"
                                    >
                                      {" "}
                                      <span className="hvr-sweep-to-right textres">
                                        Increase Capital (LLP)
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="incontent">
                                <a
                                  className="text"
                                  href="change-in-name-llp.html"
                                >
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/newicons/ChangeInNameofLLP.svg"
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right">
                                    Change In Name of LLP
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-4 dview">
                          <div className="content">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <a className="text" href="remove-director.html">
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/newicons/removeDirector(company).svg"
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right">
                                    Remove Director (Company)
                                  </span>
                                </a>
                              </li>
                              <li className="incontent">
                                <a className="text" href="remove-partner.html">
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/newicons/RemovePartner(LLP).svg"
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Remove Partner (LLP)
                                  </span>
                                </a>
                              </li>
                              <li className="incontent">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <img
                                      className="megamenu_iconspecial"
                                      src="images/icons/newicons/IncreaseCapital(Company).svg"
                                      loading="lazy"
                                    />
                                    &nbsp;
                                  </div>
                                  <div>
                                    <a
                                      className="text"
                                      href="increase-capital-company.html"
                                    >
                                      {" "}
                                      <span className="hvr-sweep-to-right textres">
                                        Increase Capital (Company)
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="incontent">
                                <a
                                  className="text"
                                  href="change-in-name-company.html"
                                >
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/newicons/ChangeInNameofCompany.svg"
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Change In Name of Company
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu-fw">
                  <a href="#" className="dropdown-toggle mytext1 m_togle">
                    Registrations
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </a>
                  <ul
                    className="bimage dropdown-menu megamenu-content rpadd"
                    role="menu"
                  >
                    <li className="allcontent incontentnew allcontent12">
                      <div className="row">
                        <div className="row col-menu">
                          <div className="megamenu_heading">
                            <img
                              className="megamenu_title_img"
                              src="images/megamenubimage/Group_5675.png"
                              loading="lazy"
                            />
                            <div>
                              <span className="title mtitle">
                                Registrations{" "}
                              </span>
                            </div>
                            <hr className="reheadinghr" />
                          </div>
                          <div className="col-menu col-md-4 dview">
                            <div className="content ">
                              <ul className="menu-col" id="id01">
                                <li className="incontent">
                                  <a
                                    className="text"
                                    href="import-export-license.html"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/NoPath%20-%20Copy%20(4).svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Import Export License (IEC)
                                    </span>
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a
                                    className="text"
                                    href="icegate-registration.html"
                                  >
                                    {" "}
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group%205910.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      ICEGATE Registration
                                    </span>{" "}
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a
                                    className="text"
                                    href="msme-udhyam-registration.html"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group%205911.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      MSME Registration
                                    </span>
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a
                                    className="text"
                                    href="society-registration.html"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group%205912.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Society Registration
                                    </span>
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a
                                    className="text"
                                    href="pf-registration.html"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group%205913.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      PF Registration
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-menu col-md-4 dview">
                            <div className="content">
                              <ul className="menu-col" id="id01">
                                <li className="incontent">
                                  <a
                                    href="professional-tax-registration.html"
                                    className="singlemenua"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/proffessional.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Professional Tax Registration
                                    </span>{" "}
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a
                                    href="gumasta-licence.html"
                                    className="singlemenua"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group_5632_1.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Gumasta License
                                    </span>
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a
                                    href="trademark-registration.html"
                                    className="singlemenua"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group_3625_2.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Trade Mark Registration
                                    </span>{" "}
                                  </a>{" "}
                                </li>
                                <li className="incontent">
                                  <a
                                    href="esic-registration.html"
                                    className="singlemenua"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group_6897.png"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      ESIC Registration
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-menu col-md-4 dview">
                            <div className="content">
                              <ul className="menu-col" id="id01">
                                <li className="incontent">
                                  <a
                                    href="gst-registration.html"
                                    className="singlemenua"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group%205915.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      GST Registration
                                    </span>
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a
                                    href="food-licence.html"
                                    className="singlemenua"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group_5645_1.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Food Licence
                                    </span>{" "}
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a
                                    href="trade-licence.html"
                                    className="singlemenua"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group_5631_1.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Trade Licence
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu-fw ">
                  <a href="#" className="dropdown-toggle mytext2 m_togle">
                    Filing &amp; More
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </a>
                  <ul
                    className="bimage dropdown-menu megamenu-content"
                    role="menu"
                  >
                    <li className="allcontent allcontent12">
                      <div className="row">
                        <div className="row col-menu m_mar">
                          <div className="col-menu col-md-4 col-lg-5 pleft fpadd ">
                            <div className="megamenu_heading">
                              <img
                                className="megamenu_title_img"
                                src="images/megamenubimage/Group_5675.png"
                                loading="lazy"
                              />
                              <div>
                                <span className="title mtitle">Filings </span>
                              </div>
                              <hr className="reheadinghr" />
                            </div>
                            <div className="content">
                              <ul className="menu-col" id="id01">
                                <li className="incontent">
                                  <a href="gst-return-filing.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group_3506_1.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      GST Return Filing
                                    </span>
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a href="income-tax-return-filing.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group_3507_1.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      ITR Filing
                                    </span>{" "}
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a href="tds-return-filing.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/newicons/tdsrf.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      TDS Return Filing
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-menu col-md-3 col-lg-3 pleft ">
                            <div className="megamenu_heading">
                              <img
                                className="megamenu_title_img"
                                src="images/megamenubimage/Group_5675.png"
                                loading="lazy"
                              />
                              <div>
                                <span className="title mtitle maxcon">
                                  Accounting{" "}
                                </span>
                              </div>
                              <hr className="headinghr" />
                            </div>
                            <div className="content">
                              <ul className="menu-col" id="id01">
                                <li className="incontent li_dview newincontent">
                                  <a href="online-accounting.html">
                                    <img
                                      className="megamenu_icon megamenu_iconspecial"
                                      src="images/icons/Layer_2_1.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Online Accounting
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu-fw">
                  <a href="#" className="dropdown-toggle mytext3 m_togle">
                    Drafting{" "}
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </a>
                  <ul
                    className="bimage dropdown-menu megamenu-content dpadd"
                    role="menu"
                  >
                    <li className="allcontent newincontent allcontent12">
                      <div className="row col-menu">
                        <div className="megamenu_heading">
                          <img
                            className="megamenu_title_img"
                            src="images/megamenubimage/Group_5675.png"
                            loading="lazy"
                          />
                          <div>
                            <span className="title mtitle">Drafting </span>
                          </div>
                          <hr className="reheadinghr" />
                        </div>
                        <div className="col-menu col-md-4 dcol">
                          <div className="content">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <a
                                  href="legal-drafting.html"
                                  className="singlemenua"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/movie-copyright_1.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Legal Drafting
                                  </span>{" "}
                                </a>
                              </li>
                              <li className="incontent">
                                <a
                                  href="rent-agreement.html"
                                  className="singlemenua"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/Group%205918.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Rent Agreement
                                  </span>{" "}
                                </a>
                              </li>
                              <li className="incontent">
                                <a
                                  href="noc-no-objection-certificate.html"
                                  className="singlemenua"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/Group%205919.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    {" "}
                                    NOC
                                  </span>
                                </a>
                              </li>
                              <li className="incontent">
                                <a
                                  href="affidavit.html"
                                  className="singlemenua"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/Group%205920.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Affidavit
                                  </span>{" "}
                                </a>
                              </li>
                              <li className="incontent">
                                <a
                                  href="power-of-attorney.html"
                                  className="singlemenua"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/Group%205921.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Power of Attorney
                                  </span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-5">
                          <div className="content">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <a href="will.html" className="singlemenua">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/NoPath%20-%20Copy%20(17).svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right">
                                    Will
                                  </span>{" "}
                                </a>
                              </li>
                              <li className="incontent">
                                <a
                                  href="application.html"
                                  className="singlemenua"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/appf.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Application Form
                                  </span>{" "}
                                </a>
                              </li>
                              <li className="incontent">
                                <a href="nda-non-disclosure-agreement-online.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/nda.png"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    NDA Drafting
                                  </span>{" "}
                                </a>
                              </li>
                              <li className="incontent">
                                <a href="privacy-policy-drafting-online.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/user-privacy_1.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Privacy Policy Drafting
                                  </span>
                                </a>
                              </li>
                              <li className="incontent">
                                <a href="terms-and-conditions-drafting-online.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/tnc.png"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Terms and Conditions Drafting
                                  </span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu-fw ">
                  <a href="#" className="dropdown-toggle mytext4 m_togle">
                    Legal Issues{" "}
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </a>
                  <ul
                    className="bimage dropdown-menu megamenu-content lepadd "
                    role="menu"
                  >
                    <li className="allcontent newincontent allcontent12">
                      <div className="row">
                        <div className="col-menu col-md-4">
                          <div className="megamenu_heading">
                            <img
                              src="images/megamenubimage/Group_5675.png"
                              loading="lazy"
                            />
                            <div>
                              <span className="title mtitle textres">
                                Legal Reply{" "}
                              </span>
                            </div>
                            <hr className="headinghr" />
                          </div>
                          <div className="content le_cpadd">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <a href="legal-notice-reply.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/legalreply.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Legal Notice Reply
                                  </span>{" "}
                                </a>
                              </li>
                              <li className="incontent">
                                <a href="legal-claim-help.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/baggage-claim.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Legal Advice
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-4">
                          <div className="megamenu_heading">
                            <img
                              src="images/megamenubimage/Group_5675.png"
                              loading="lazy"
                            />
                            <div>
                              <span className="title mtitle">
                                Legal Notice{" "}
                              </span>
                            </div>
                            <hr className="headinghr" />
                          </div>
                          <div className="content le_cpadd">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <a href="legal-notice.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/help.png"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Legal Notice Prepration
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu-fw ">
                  <a href="#" className="dropdown-toggle mytext6 m_togle">
                    Other Services
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </a>
                  <ul
                    className="bimage dropdown-menu megamenu-content opadd"
                    role="menu"
                  >
                    <li className="allcontent newincontent allcontent12">
                      <div className="row">
                        <div className="col-menu col-md-5 pleft">
                          <div className="megamenu_heading">
                            <img src="images/megamenubimage/Group_5675.png" />
                            <div>
                              <span className="title mtitle">
                                Other Services
                              </span>
                            </div>
                            <hr className="headinghr" />
                          </div>
                          <div className="content o_cpadd">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <a href="balance-sheet-prepration.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/Group%205926.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    {" "}
                                    Balance Sheet Preparation &amp; P&amp;L
                                  </span>
                                </a>
                              </li>
                              <li className="incontent">
                                <a href="project-report-prepration.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/Group%205927.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Project Report Preparation
                                  </span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu-fw ">
                  <a href="#" className="dropdown-toggle mytext7 m_togle">
                    Utilities
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </a>
                  <ul
                    className="bimage dropdown-menu megamenu-content opadd"
                    role="menu"
                  >
                    <li className="allcontent newincontent allcontent12">
                      <div className="row">
                        <div className="col-menu">
                          <div className="megamenu_heading">
                            <img src="images/megamenubimage/Group_5675.png" />
                            <div>
                              <span className="title mtitle">Utilities </span>
                            </div>
                            <hr className="headinghr" />
                          </div>
                          <div className="col-menu col-md-4 dcol">
                            <div className="content lo_cpadd">
                              <ul className="menu-col" id="id01">
                                <li className="incontent">
                                  <a href="GST-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/gst.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      GST Calculator
                                    </span>{" "}
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a href="SIP-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/sip.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      SIP Calculator
                                    </span>{" "}
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a href="EMI-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/interest.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      EMI Calculator
                                    </span>{" "}
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a href="FD-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/fd.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      FD Calculator
                                    </span>{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-menu col-md-4">
                            <div className="content lo_cpadd">
                              <ul className="menu-col" id="id01">
                                <li className="incontent">
                                  <a href="80U-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/Group_6457.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      80U Calculator
                                    </span>{" "}
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a href="HRA-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/hra.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      HRA Calculator
                                    </span>{" "}
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a href="simple-interest.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/interest-rate.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Simple Interest Calculator
                                    </span>{" "}
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a href="capital-gain-calulator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/capital_gain.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Capital Gain Calculator
                                    </span>{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-menu col-md-4">
                            <div className="content lo_cpadd">
                              <ul className="menu-col" id="id01">
                                <li className="incontent">
                                  <a href="TDS-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/tds.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      TDS Calculator
                                    </span>{" "}
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a href="PPF-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/ppf.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      PPF Calculator
                                    </span>{" "}
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a href="Gratuity-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/gratuaty.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Gratuity Calculator
                                    </span>
                                  </a>
                                </li>
                                <li className="incontent">
                                  <a href="RD-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/rd.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      RD Calculator
                                    </span>{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br />
        <div className="servicebrhide">
          <br />
          <br />
          <br />
        </div>
        <img
          src="images/services/Group%20887.svg"
          style={{
            width: "40px",
            "margin-top": "6px",
            "margin-left": "12.5px",
            visibility: "hidden",
          }}
        />
        <div>
          <div
            className="nav navbar-nav serviceheader"
            style={{ display: "none" }}
          >
            <hr className="animationhr" id="nav_slide_click" />
          </div>
          <br />
          <br />
          <div className="servicemaindiv" style={{ "margin-top": "7px" }}>
            <div className="row">
              <div className="col-md-6">
                <p className="serviceamainheading">
                  Credit Monitoring Arrangement (CMA) Report
                </p>
                <p
                  style={{
                    "font-family": "'Roboto'",
                    "margin-top": "18px",
                    "font-weight": "700",
                    "font-size": "24.5px",
                    color: "#01355D",
                    "line-height": "1.2",
                  }}
                >
                  We are introducing Legal251's Credit Monitoring Arrangement
                  (CMA) Report Service, designed to empower businesses in India
                  with comprehensive and reliable cost analysis.
                </p>
                <br />
                <a href="#formpricediv">
                  <button className="docureqbutton">Get Started</button>
                </a>
                <div id="formpricediv">
                  <div className="service1formdiv">
                    <div className="row">
                      <div className="col-md-6">
                        <center>
                          <input
                            type="text"
                            maxLength={150}
                            pattern="[A-Za-z ]{3,150}"
                            id="name"
                            className="serviceinput"
                            style={{
                              "-webkit-text-transform": "capitalize",
                              "text-transform": "capitalize",
                            }}
                            placeholder="  Name"
                            required
                          />
                          <br />
                          <br />
                          <input
                            type="email"
                            maxLength={50}
                            id="email"
                            className="serviceinput"
                            placeholder="  E-mail"
                            required
                          />
                          <br />
                          <br />
                          <input
                            type="tel"
                            pattern="[6-9]{1}[0-9]{9}"
                            maxLength={10}
                            id="contact"
                            className="serviceinput"
                            placeholder="  Contact no."
                            required
                          />
                          <br />
                          <br />
                          <select
                            id="city"
                            className="js-example-basic-single"
                            style={{ "z-index": "9999999999" }}
                            name="state"
                            required
                          >
                            <option className="cities" data-value />
                            <option className="cities" data-value={1}>
                              Adilabad
                            </option>
                            <option className="cities" data-value={2}>
                              Agar Malwa
                            </option>
                            <option className="cities" data-value={3}>
                              Agra
                            </option>
                            <option className="cities" data-value={4}>
                              Ahmedabad
                            </option>
                            <option className="cities" data-value={5}>
                              Ahmednagar
                            </option>
                            <option className="cities" data-value={6}>
                              Aizawl
                            </option>
                            <option className="cities" data-value={7}>
                              Ajmer
                            </option>
                            <option className="cities" data-value={8}>
                              Akola
                            </option>
                            <option className="cities" data-value={9}>
                              Alappuzha
                            </option>
                            <option className="cities" data-value={10}>
                              Aligarh
                            </option>
                            <option className="cities" data-value={11}>
                              Alipurduar
                            </option>
                            <option className="cities" data-value={12}>
                              Alirajpur
                            </option>
                            <option className="cities" data-value={13}>
                              Allahabad
                            </option>
                            <option className="cities" data-value={14}>
                              Almora
                            </option>
                            <option className="cities" data-value={15}>
                              Alwar
                            </option>
                            <option className="cities" data-value={16}>
                              Ambala
                            </option>
                            <option className="cities" data-value={17}>
                              Ambedkar Nagar
                            </option>
                            <option className="cities" data-value={18}>
                              Amethi (Chatrapati Sahuji Mahraj Nagar)
                            </option>
                            <option className="cities" data-value={19}>
                              Amravati
                            </option>
                            <option className="cities" data-value={20}>
                              Amreli
                            </option>
                            <option className="cities" data-value={21}>
                              Amritsar
                            </option>
                            <option className="cities" data-value={22}>
                              Amroha
                            </option>
                            <option className="cities" data-value={23}>
                              Anand
                            </option>
                            <option className="cities" data-value={24}>
                              Anantapur
                            </option>
                            <option className="cities" data-value={25}>
                              Anantnag
                            </option>
                            <option className="cities" data-value={26}>
                              Angul
                            </option>
                            <option className="cities" data-value={27}>
                              Anjaw
                            </option>
                            <option className="cities" data-value={28}>
                              Anuppur
                            </option>
                            <option className="cities" data-value={29}>
                              Araria
                            </option>
                            <option className="cities" data-value={30}>
                              Aravalli
                            </option>
                            <option className="cities" data-value={31}>
                              Ariyalur
                            </option>
                            <option className="cities" data-value={32}>
                              Arwal
                            </option>
                            <option className="cities" data-value={33}>
                              Ashoknagar
                            </option>
                            <option className="cities" data-value={34}>
                              Auraiya
                            </option>
                            <option className="cities" data-value={35}>
                              Aurangabad (BH)
                            </option>
                            <option className="cities" data-value={36}>
                              Aurangabad (MH)
                            </option>
                            <option className="cities" data-value={37}>
                              Azamgarh
                            </option>
                            <option className="cities" data-value={38}>
                              Bagalkot
                            </option>
                            <option className="cities" data-value={39}>
                              Bageshwar
                            </option>
                            <option className="cities" data-value={40}>
                              Baghpat
                            </option>
                            <option className="cities" data-value={41}>
                              Bahraich
                            </option>
                            <option className="cities" data-value={42}>
                              Baksa
                            </option>
                            <option className="cities" data-value={43}>
                              Balaghat
                            </option>
                            <option className="cities" data-value={44}>
                              Balangir
                            </option>
                            <option className="cities" data-value={45}>
                              Balasore
                            </option>
                            <option className="cities" data-value={46}>
                              Ballari (Bellary)
                            </option>
                            <option className="cities" data-value={47}>
                              Ballia
                            </option>
                            <option className="cities" data-value={48}>
                              Balod
                            </option>
                            <option className="cities" data-value={49}>
                              Baloda Bazar
                            </option>
                            <option className="cities" data-value={50}>
                              Balrampur (CG)
                            </option>
                            <option className="cities" data-value={51}>
                              Balrampur (UP)
                            </option>
                            <option className="cities" data-value={52}>
                              Banaskantha (Palanpur)
                            </option>
                            <option className="cities" data-value={53}>
                              Banda
                            </option>
                            <option className="cities" data-value={54}>
                              Bandipore
                            </option>
                            <option className="cities" data-value={55}>
                              Banka
                            </option>
                            <option className="cities" data-value={56}>
                              Bankura
                            </option>
                            <option className="cities" data-value={57}>
                              Banswara
                            </option>
                            <option className="cities" data-value={58}>
                              Barabanki
                            </option>
                            <option className="cities" data-value={59}>
                              Baramulla
                            </option>
                            <option className="cities" data-value={60}>
                              Baran
                            </option>
                            <option className="cities" data-value={61}>
                              Bareilly
                            </option>
                            <option className="cities" data-value={62}>
                              Bargarh
                            </option>
                            <option className="cities" data-value={63}>
                              Barmer
                            </option>
                            <option className="cities" data-value={64}>
                              Barnala
                            </option>
                            <option className="cities" data-value={65}>
                              Barpeta
                            </option>
                            <option className="cities" data-value={66}>
                              Barwani
                            </option>
                            <option className="cities" data-value={67}>
                              Bastar
                            </option>
                            <option className="cities" data-value={68}>
                              Basti
                            </option>
                            <option className="cities" data-value={69}>
                              Bathinda
                            </option>
                            <option className="cities" data-value={70}>
                              Beed
                            </option>
                            <option className="cities" data-value={71}>
                              Begusarai
                            </option>
                            <option className="cities" data-value={72}>
                              Belagavi (Belgaum)
                            </option>
                            <option className="cities" data-value={73}>
                              Bemetara
                            </option>
                            <option className="cities" data-value={74}>
                              Bengaluru (Bangalore) Rural
                            </option>
                            <option className="cities" data-value={75}>
                              Bengaluru (Bangalore) Urban
                            </option>
                            <option className="cities" data-value={76}>
                              Betul
                            </option>
                            <option className="cities" data-value={77}>
                              Bhadohi
                            </option>
                            <option className="cities" data-value={78}>
                              Bhadradri Kothagudem
                            </option>
                            <option className="cities" data-value={79}>
                              Bhadrak
                            </option>
                            <option className="cities" data-value={80}>
                              Bhagalpur
                            </option>
                            <option className="cities" data-value={81}>
                              Bhandara
                            </option>
                            <option className="cities" data-value={82}>
                              Bharatpur
                            </option>
                            <option className="cities" data-value={83}>
                              Bharuch
                            </option>
                            <option className="cities" data-value={84}>
                              Bhavnagar
                            </option>
                            <option className="cities" data-value={85}>
                              Bhilwara
                            </option>
                            <option className="cities" data-value={86}>
                              Bhind
                            </option>
                            <option className="cities" data-value={87}>
                              Bhiwani
                            </option>
                            <option className="cities" data-value={88}>
                              Bhojpur
                            </option>
                            <option className="cities" data-value={89}>
                              Bhopal
                            </option>
                            <option className="cities" data-value={90}>
                              Bidar
                            </option>
                            <option className="cities" data-value={91}>
                              Bijapur
                            </option>
                            <option className="cities" data-value={92}>
                              Bijnor
                            </option>
                            <option className="cities" data-value={93}>
                              Bikaner
                            </option>
                            <option className="cities" data-value={94}>
                              Bilaspur (CG)
                            </option>
                            <option className="cities" data-value={95}>
                              Bilaspur (HP)
                            </option>
                            <option className="cities" data-value={96}>
                              Birbhum
                            </option>
                            <option className="cities" data-value={97}>
                              Bishnupur
                            </option>
                            <option className="cities" data-value={98}>
                              Biswanath
                            </option>
                            <option className="cities" data-value={99}>
                              Bokaro
                            </option>
                            <option className="cities" data-value={100}>
                              Bongaigaon
                            </option>
                            <option className="cities" data-value={101}>
                              Botad
                            </option>
                            <option className="cities" data-value={102}>
                              Boudh
                            </option>
                            <option className="cities" data-value={103}>
                              Budaun
                            </option>
                            <option className="cities" data-value={104}>
                              Budgam
                            </option>
                            <option className="cities" data-value={105}>
                              Bulandshahr
                            </option>
                            <option className="cities" data-value={106}>
                              Buldhana
                            </option>
                            <option className="cities" data-value={107}>
                              Bundi
                            </option>
                            <option className="cities" data-value={108}>
                              Burhanpur
                            </option>
                            <option className="cities" data-value={109}>
                              Buxar
                            </option>
                            <option className="cities" data-value={110}>
                              Cachar
                            </option>
                            <option className="cities" data-value={111}>
                              Central Delhi
                            </option>
                            <option className="cities" data-value={112}>
                              Chamarajanagar
                            </option>
                            <option className="cities" data-value={113}>
                              Chamba
                            </option>
                            <option className="cities" data-value={114}>
                              Chamoli
                            </option>
                            <option className="cities" data-value={115}>
                              Champawat
                            </option>
                            <option className="cities" data-value={116}>
                              Champhai
                            </option>
                            <option className="cities" data-value={117}>
                              Chandauli
                            </option>
                            <option className="cities" data-value={118}>
                              Chandel
                            </option>
                            <option className="cities" data-value={119}>
                              Chandigarh
                            </option>
                            <option className="cities" data-value={120}>
                              Chandrapur
                            </option>
                            <option className="cities" data-value={121}>
                              Changlang
                            </option>
                            <option className="cities" data-value={122}>
                              Charaideo
                            </option>
                            <option className="cities" data-value={123}>
                              Charkhi Dadri
                            </option>
                            <option className="cities" data-value={124}>
                              Chatra
                            </option>
                            <option className="cities" data-value={125}>
                              Chengalpattu
                            </option>
                            <option className="cities" data-value={126}>
                              Chennai
                            </option>
                            <option className="cities" data-value={127}>
                              Chhatarpur
                            </option>
                            <option className="cities" data-value={128}>
                              Chhindwara
                            </option>
                            <option className="cities" data-value={129}>
                              Chhota Udepur
                            </option>
                            <option className="cities" data-value={130}>
                              Chikballapur
                            </option>
                            <option className="cities" data-value={131}>
                              Chikkamagaluru (Chikmagalur)
                            </option>
                            <option className="cities" data-value={132}>
                              Chirang
                            </option>
                            <option className="cities" data-value={133}>
                              Chitradurga
                            </option>
                            <option className="cities" data-value={134}>
                              Chitrakoot
                            </option>
                            <option className="cities" data-value={135}>
                              Chittoor
                            </option>
                            <option className="cities" data-value={136}>
                              Chittorgarh
                            </option>
                            <option className="cities" data-value={137}>
                              Churachandpur
                            </option>
                            <option className="cities" data-value={138}>
                              Churu
                            </option>
                            <option className="cities" data-value={139}>
                              Coimbatore
                            </option>
                            <option className="cities" data-value={140}>
                              Cooch Behar
                            </option>
                            <option className="cities" data-value={141}>
                              Cuddalore
                            </option>
                            <option className="cities" data-value={142}>
                              Cuttack
                            </option>
                            <option className="cities" data-value={143}>
                              Dadra &amp; Nagar Haveli
                            </option>
                            <option className="cities" data-value={144}>
                              Dahod
                            </option>
                            <option className="cities" data-value={145}>
                              Dakshin Dinajpur (South Dinajpur)
                            </option>
                            <option className="cities" data-value={146}>
                              Dakshina Kannada
                            </option>
                            <option className="cities" data-value={147}>
                              Daman
                            </option>
                            <option className="cities" data-value={148}>
                              Damoh
                            </option>
                            <option className="cities" data-value={149}>
                              Dangs (Ahwa)
                            </option>
                            <option className="cities" data-value={150}>
                              Dantewada (South Bastar)
                            </option>
                            <option className="cities" data-value={151}>
                              Darbhanga
                            </option>
                            <option className="cities" data-value={152}>
                              Darjeeling
                            </option>
                            <option className="cities" data-value={153}>
                              Darrang
                            </option>
                            <option className="cities" data-value={154}>
                              Datia
                            </option>
                            <option className="cities" data-value={155}>
                              Dausa
                            </option>
                            <option className="cities" data-value={156}>
                              Davangere
                            </option>
                            <option className="cities" data-value={157}>
                              Dehradun
                            </option>
                            <option className="cities" data-value={158}>
                              Deogarh
                            </option>
                            <option className="cities" data-value={159}>
                              Deoghar
                            </option>
                            <option className="cities" data-value={160}>
                              Deoria
                            </option>
                            <option className="cities" data-value={161}>
                              Devbhoomi Dwarka
                            </option>
                            <option className="cities" data-value={162}>
                              Dewas
                            </option>
                            <option className="cities" data-value={163}>
                              Dhalai
                            </option>
                            <option className="cities" data-value={164}>
                              Dhamtari
                            </option>
                            <option className="cities" data-value={165}>
                              Dhanbad
                            </option>
                            <option className="cities" data-value={166}>
                              Dhar
                            </option>
                            <option className="cities" data-value={167}>
                              Dharmapuri
                            </option>
                            <option className="cities" data-value={168}>
                              Dharwad
                            </option>
                            <option className="cities" data-value={169}>
                              Dhemaji
                            </option>
                            <option className="cities" data-value={170}>
                              Dhenkanal
                            </option>
                            <option className="cities" data-value={171}>
                              Dholpur
                            </option>
                            <option className="cities" data-value={172}>
                              Dhubri
                            </option>
                            <option className="cities" data-value={173}>
                              Dhule
                            </option>
                            <option className="cities" data-value={174}>
                              Dibang Valley
                            </option>
                            <option className="cities" data-value={175}>
                              Dibrugarh
                            </option>
                            <option className="cities" data-value={176}>
                              Dima Hasao (North Cachar Hills)
                            </option>
                            <option className="cities" data-value={177}>
                              Dimapur
                            </option>
                            <option className="cities" data-value={178}>
                              Dindigul
                            </option>
                            <option className="cities" data-value={179}>
                              Dindori
                            </option>
                            <option className="cities" data-value={180}>
                              Diu
                            </option>
                            <option className="cities" data-value={181}>
                              Doda
                            </option>
                            <option className="cities" data-value={182}>
                              Dumka
                            </option>
                            <option className="cities" data-value={183}>
                              Dungarpur
                            </option>
                            <option className="cities" data-value={184}>
                              Durg
                            </option>
                            <option className="cities" data-value={185}>
                              East Champaran (Motihari)
                            </option>
                            <option className="cities" data-value={186}>
                              East Delhi
                            </option>
                            <option className="cities" data-value={187}>
                              East Garo Hills
                            </option>
                            <option className="cities" data-value={188}>
                              East Godavari
                            </option>
                            <option className="cities" data-value={189}>
                              East Jaintia Hills
                            </option>
                            <option className="cities" data-value={190}>
                              East Kameng
                            </option>
                            <option className="cities" data-value={191}>
                              East Khasi Hills
                            </option>
                            <option className="cities" data-value={192}>
                              East Siang
                            </option>
                            <option className="cities" data-value={193}>
                              East Sikkim
                            </option>
                            <option className="cities" data-value={194}>
                              East Singhbhum
                            </option>
                            <option className="cities" data-value={195}>
                              Ernakulam
                            </option>
                            <option className="cities" data-value={196}>
                              Erode
                            </option>
                            <option className="cities" data-value={197}>
                              Etah
                            </option>
                            <option className="cities" data-value={198}>
                              Etawah
                            </option>
                            <option className="cities" data-value={199}>
                              Faizabad
                            </option>
                            <option className="cities" data-value={200}>
                              Faridabad
                            </option>
                            <option className="cities" data-value={201}>
                              Faridkot
                            </option>
                            <option className="cities" data-value={202}>
                              Farrukhabad
                            </option>
                            <option className="cities" data-value={203}>
                              Fatehabad
                            </option>
                            <option className="cities" data-value={204}>
                              Fatehgarh Sahib
                            </option>
                            <option className="cities" data-value={205}>
                              Fatehpur
                            </option>
                            <option className="cities" data-value={206}>
                              Fazilka
                            </option>
                            <option className="cities" data-value={207}>
                              Ferozepur
                            </option>
                            <option className="cities" data-value={208}>
                              Firozabad
                            </option>
                            <option className="cities" data-value={209}>
                              Gadag
                            </option>
                            <option className="cities" data-value={210}>
                              Gadchiroli
                            </option>
                            <option className="cities" data-value={211}>
                              Gajapati
                            </option>
                            <option className="cities" data-value={212}>
                              Ganderbal
                            </option>
                            <option className="cities" data-value={213}>
                              Gandhinagar
                            </option>
                            <option className="cities" data-value={214}>
                              Ganjam
                            </option>
                            <option className="cities" data-value={215}>
                              Garhwa
                            </option>
                            <option className="cities" data-value={216}>
                              Gariyaband
                            </option>
                            <option className="cities" data-value={217}>
                              Gautam Buddha Nagar
                            </option>
                            <option className="cities" data-value={218}>
                              Gaya
                            </option>
                            <option className="cities" data-value={219}>
                              Ghaziabad
                            </option>
                            <option className="cities" data-value={220}>
                              Ghazipur
                            </option>
                            <option className="cities" data-value={221}>
                              Gir Somnath
                            </option>
                            <option className="cities" data-value={222}>
                              Giridih
                            </option>
                            <option className="cities" data-value={223}>
                              Goalpara
                            </option>
                            <option className="cities" data-value={224}>
                              Godda
                            </option>
                            <option className="cities" data-value={225}>
                              Golaghat
                            </option>
                            <option className="cities" data-value={226}>
                              Gomati
                            </option>
                            <option className="cities" data-value={227}>
                              Gonda
                            </option>
                            <option className="cities" data-value={228}>
                              Gondia
                            </option>
                            <option className="cities" data-value={229}>
                              Gopalganj
                            </option>
                            <option className="cities" data-value={230}>
                              Gorakhpur
                            </option>
                            <option className="cities" data-value={231}>
                              Gumla
                            </option>
                            <option className="cities" data-value={232}>
                              Guna
                            </option>
                            <option className="cities" data-value={233}>
                              Guntur
                            </option>
                            <option className="cities" data-value={234}>
                              Gurdaspur
                            </option>
                            <option className="cities" data-value={235}>
                              Gurugram (Gurgaon)
                            </option>
                            <option className="cities" data-value={236}>
                              Gwalior
                            </option>
                            <option className="cities" data-value={237}>
                              Hailakandi
                            </option>
                            <option className="cities" data-value={238}>
                              Hamirpur (HP)
                            </option>
                            <option className="cities" data-value={239}>
                              Hamirpur (UP)
                            </option>
                            <option className="cities" data-value={240}>
                              Hanumangarh
                            </option>
                            <option className="cities" data-value={241}>
                              Hapur (Panchsheel Nagar)
                            </option>
                            <option className="cities" data-value={242}>
                              Harda
                            </option>
                            <option className="cities" data-value={243}>
                              Hardoi
                            </option>
                            <option className="cities" data-value={244}>
                              Haridwar
                            </option>
                            <option className="cities" data-value={245}>
                              Hassan
                            </option>
                            <option className="cities" data-value={246}>
                              Hathras
                            </option>
                            <option className="cities" data-value={247}>
                              Haveri
                            </option>
                            <option className="cities" data-value={248}>
                              Hazaribag
                            </option>
                            <option className="cities" data-value={249}>
                              Hingoli
                            </option>
                            <option className="cities" data-value={250}>
                              Hisar
                            </option>
                            <option className="cities" data-value={251}>
                              Hojai
                            </option>
                            <option className="cities" data-value={252}>
                              Hooghly
                            </option>
                            <option className="cities" data-value={253}>
                              Hoshangabad
                            </option>
                            <option className="cities" data-value={254}>
                              Hoshiarpur
                            </option>
                            <option className="cities" data-value={255}>
                              Howrah
                            </option>
                            <option className="cities" data-value={256}>
                              Hyderabad
                            </option>
                            <option className="cities" data-value={257}>
                              Idukki
                            </option>
                            <option className="cities" data-value={258}>
                              Imphal East
                            </option>
                            <option className="cities" data-value={259}>
                              Imphal West
                            </option>
                            <option className="cities" data-value={260}>
                              Indore
                            </option>
                            <option className="cities" data-value={261}>
                              Jabalpur
                            </option>
                            <option className="cities" data-value={262}>
                              Jagatsinghapur
                            </option>
                            <option className="cities" data-value={263}>
                              Jagtial
                            </option>
                            <option className="cities" data-value={264}>
                              Jaipur
                            </option>
                            <option className="cities" data-value={265}>
                              Jaisalmer
                            </option>
                            <option className="cities" data-value={266}>
                              Jajpur
                            </option>
                            <option className="cities" data-value={267}>
                              Jalandhar
                            </option>
                            <option className="cities" data-value={268}>
                              Jalaun
                            </option>
                            <option className="cities" data-value={269}>
                              Jalgaon
                            </option>
                            <option className="cities" data-value={270}>
                              Jalna
                            </option>
                            <option className="cities" data-value={271}>
                              Jalore
                            </option>
                            <option className="cities" data-value={272}>
                              Jalpaiguri
                            </option>
                            <option className="cities" data-value={273}>
                              Jammu
                            </option>
                            <option className="cities" data-value={274}>
                              Jamnagar
                            </option>
                            <option className="cities" data-value={275}>
                              Jamtara
                            </option>
                            <option className="cities" data-value={276}>
                              Jamui
                            </option>
                            <option className="cities" data-value={277}>
                              Jangaon
                            </option>
                            <option className="cities" data-value={278}>
                              Janjgir-Champa
                            </option>
                            <option className="cities" data-value={279}>
                              Jashpur
                            </option>
                            <option className="cities" data-value={280}>
                              Jaunpur
                            </option>
                            <option className="cities" data-value={281}>
                              Jayashankar Bhoopalpally
                            </option>
                            <option className="cities" data-value={282}>
                              Jehanabad
                            </option>
                            <option className="cities" data-value={283}>
                              Jhabua
                            </option>
                            <option className="cities" data-value={284}>
                              Jhajjar
                            </option>
                            <option className="cities" data-value={285}>
                              Jhalawar
                            </option>
                            <option className="cities" data-value={286}>
                              Jhansi
                            </option>
                            <option className="cities" data-value={287}>
                              Jhargram
                            </option>
                            <option className="cities" data-value={288}>
                              Jharsuguda
                            </option>
                            <option className="cities" data-value={289}>
                              Jhunjhunu
                            </option>
                            <option className="cities" data-value={290}>
                              Jind
                            </option>
                            <option className="cities" data-value={291}>
                              Jiribam
                            </option>
                            <option className="cities" data-value={292}>
                              Jodhpur
                            </option>
                            <option className="cities" data-value={293}>
                              Jogulamba Gadwal
                            </option>
                            <option className="cities" data-value={294}>
                              Jorhat
                            </option>
                            <option className="cities" data-value={295}>
                              Junagadh
                            </option>
                            <option className="cities" data-value={296}>
                              Kabirdham (Kawardha)
                            </option>
                            <option className="cities" data-value={297}>
                              Kachchh
                            </option>
                            <option className="cities" data-value={298}>
                              Kaimur (Bhabua)
                            </option>
                            <option className="cities" data-value={299}>
                              Kaithal
                            </option>
                            <option className="cities" data-value={300}>
                              Kakching
                            </option>
                            <option className="cities" data-value={301}>
                              Kalaburagi (Gulbarga)
                            </option>
                            <option className="cities" data-value={302}>
                              Kalahandi
                            </option>
                            <option className="cities" data-value={303}>
                              Kalimpong
                            </option>
                            <option className="cities" data-value={304}>
                              Kallakurichi
                            </option>
                            <option className="cities" data-value={305}>
                              Kamareddy
                            </option>
                            <option className="cities" data-value={306}>
                              Kamjong
                            </option>
                            <option className="cities" data-value={307}>
                              Kamle
                            </option>
                            <option className="cities" data-value={308}>
                              Kamrup
                            </option>
                            <option className="cities" data-value={309}>
                              Kamrup Metropolitan
                            </option>
                            <option className="cities" data-value={310}>
                              Kanchipuram
                            </option>
                            <option className="cities" data-value={311}>
                              Kandhamal
                            </option>
                            <option className="cities" data-value={312}>
                              Kangpokpi
                            </option>
                            <option className="cities" data-value={313}>
                              Kangra
                            </option>
                            <option className="cities" data-value={314}>
                              Kanker (North Bastar)
                            </option>
                            <option className="cities" data-value={315}>
                              Kannauj
                            </option>
                            <option className="cities" data-value={316}>
                              Kannur
                            </option>
                            <option className="cities" data-value={317}>
                              Kanpur Dehat
                            </option>
                            <option className="cities" data-value={318}>
                              Kanpur Nagar
                            </option>
                            <option className="cities" data-value={319}>
                              Kanshiram Nagar (Kasganj)
                            </option>
                            <option className="cities" data-value={320}>
                              Kanyakumari
                            </option>
                            <option className="cities" data-value={321}>
                              Kapurthala
                            </option>
                            <option className="cities" data-value={322}>
                              Karaikal
                            </option>
                            <option className="cities" data-value={323}>
                              Karauli
                            </option>
                            <option className="cities" data-value={324}>
                              Karbi Anglong
                            </option>
                            <option className="cities" data-value={325}>
                              Kargil
                            </option>
                            <option className="cities" data-value={326}>
                              Karimganj
                            </option>
                            <option className="cities" data-value={327}>
                              Karimnagar
                            </option>
                            <option className="cities" data-value={328}>
                              Karnal
                            </option>
                            <option className="cities" data-value={329}>
                              Karur
                            </option>
                            <option className="cities" data-value={330}>
                              Kasaragod
                            </option>
                            <option className="cities" data-value={331}>
                              Kathua
                            </option>
                            <option className="cities" data-value={332}>
                              Katihar
                            </option>
                            <option className="cities" data-value={333}>
                              Katni
                            </option>
                            <option className="cities" data-value={334}>
                              Kaushambi
                            </option>
                            <option className="cities" data-value={335}>
                              Kendrapara
                            </option>
                            <option className="cities" data-value={336}>
                              Kendujhar (Keonjhar)
                            </option>
                            <option className="cities" data-value={337}>
                              Khagaria
                            </option>
                            <option className="cities" data-value={338}>
                              Khammam
                            </option>
                            <option className="cities" data-value={339}>
                              Khandwa
                            </option>
                            <option className="cities" data-value={340}>
                              Khargone
                            </option>
                            <option className="cities" data-value={341}>
                              Kheda (Nadiad)
                            </option>
                            <option className="cities" data-value={342}>
                              Khordha
                            </option>
                            <option className="cities" data-value={343}>
                              Khowai
                            </option>
                            <option className="cities" data-value={344}>
                              Khunti
                            </option>
                            <option className="cities" data-value={345}>
                              Kinnaur
                            </option>
                            <option className="cities" data-value={346}>
                              Kiphire
                            </option>
                            <option className="cities" data-value={347}>
                              Kishanganj
                            </option>
                            <option className="cities" data-value={348}>
                              Kishtwar
                            </option>
                            <option className="cities" data-value={349}>
                              Kodagu
                            </option>
                            <option className="cities" data-value={350}>
                              Koderma
                            </option>
                            <option className="cities" data-value={351}>
                              Kohima
                            </option>
                            <option className="cities" data-value={352}>
                              Kokrajhar
                            </option>
                            <option className="cities" data-value={353}>
                              Kolar
                            </option>
                            <option className="cities" data-value={354}>
                              Kolasib
                            </option>
                            <option className="cities" data-value={355}>
                              Kolhapur
                            </option>
                            <option className="cities" data-value={356}>
                              Kolkata
                            </option>
                            <option className="cities" data-value={357}>
                              Kollam
                            </option>
                            <option className="cities" data-value={358}>
                              Komaram Bheem Asifabad
                            </option>
                            <option className="cities" data-value={359}>
                              Kondagaon
                            </option>
                            <option className="cities" data-value={360}>
                              Koppal
                            </option>
                            <option className="cities" data-value={361}>
                              Koraput
                            </option>
                            <option className="cities" data-value={362}>
                              Korba
                            </option>
                            <option className="cities" data-value={363}>
                              Korea (Koriya)
                            </option>
                            <option className="cities" data-value={364}>
                              Kota
                            </option>
                            <option className="cities" data-value={365}>
                              Kottayam
                            </option>
                            <option className="cities" data-value={366}>
                              Kozhikode
                            </option>
                            <option className="cities" data-value={367}>
                              Kra Daadi
                            </option>
                            <option className="cities" data-value={368}>
                              Krishna
                            </option>
                            <option className="cities" data-value={369}>
                              Krishnagiri
                            </option>
                            <option className="cities" data-value={370}>
                              Kulgam
                            </option>
                            <option className="cities" data-value={371}>
                              Kullu
                            </option>
                            <option className="cities" data-value={372}>
                              Kupwara
                            </option>
                            <option className="cities" data-value={373}>
                              Kurnool
                            </option>
                            <option className="cities" data-value={374}>
                              Kurukshetra
                            </option>
                            <option className="cities" data-value={375}>
                              Kurung Kumey
                            </option>
                            <option className="cities" data-value={376}>
                              Kushinagar (Padrauna)
                            </option>
                            <option className="cities" data-value={377}>
                              Lahaul &amp; Spiti
                            </option>
                            <option className="cities" data-value={378}>
                              Lakhimpur
                            </option>
                            <option className="cities" data-value={379}>
                              Lakhimpur - Kheri
                            </option>
                            <option className="cities" data-value={380}>
                              Lakhisarai
                            </option>
                            <option className="cities" data-value={381}>
                              Lakshadweep
                            </option>
                            <option className="cities" data-value={382}>
                              Lalitpur
                            </option>
                            <option className="cities" data-value={383}>
                              Latehar
                            </option>
                            <option className="cities" data-value={384}>
                              Latur
                            </option>
                            <option className="cities" data-value={385}>
                              Lawngtlai
                            </option>
                            <option className="cities" data-value={386}>
                              Leh
                            </option>
                            <option className="cities" data-value={387}>
                              Lepa Rada
                            </option>
                            <option className="cities" data-value={388}>
                              Lohardaga
                            </option>
                            <option className="cities" data-value={389}>
                              Lohit
                            </option>
                            <option className="cities" data-value={390}>
                              Longding
                            </option>
                            <option className="cities" data-value={391}>
                              Longleng
                            </option>
                            <option className="cities" data-value={392}>
                              Lower Dibang Valley
                            </option>
                            <option className="cities" data-value={393}>
                              Lower Siang
                            </option>
                            <option className="cities" data-value={394}>
                              Lower Subansiri
                            </option>
                            <option className="cities" data-value={395}>
                              Lucknow
                            </option>
                            <option className="cities" data-value={396}>
                              Ludhiana
                            </option>
                            <option className="cities" data-value={397}>
                              Lunglei
                            </option>
                            <option className="cities" data-value={398}>
                              Madhepura
                            </option>
                            <option className="cities" data-value={399}>
                              Madhubani
                            </option>
                            <option className="cities" data-value={400}>
                              Madurai
                            </option>
                            <option className="cities" data-value={401}>
                              Mahabubabad
                            </option>
                            <option className="cities" data-value={402}>
                              Mahabubnagar
                            </option>
                            <option className="cities" data-value={403}>
                              Maharajganj
                            </option>
                            <option className="cities" data-value={404}>
                              Mahasamund
                            </option>
                            <option className="cities" data-value={405}>
                              Mahe
                            </option>
                            <option className="cities" data-value={406}>
                              Mahendragarh
                            </option>
                            <option className="cities" data-value={407}>
                              Mahisagar
                            </option>
                            <option className="cities" data-value={408}>
                              Mahoba
                            </option>
                            <option className="cities" data-value={409}>
                              Mainpuri
                            </option>
                            <option className="cities" data-value={410}>
                              Majuli
                            </option>
                            <option className="cities" data-value={411}>
                              Malappuram
                            </option>
                            <option className="cities" data-value={412}>
                              Malda
                            </option>
                            <option className="cities" data-value={413}>
                              Malkangiri
                            </option>
                            <option className="cities" data-value={414}>
                              Mamit
                            </option>
                            <option className="cities" data-value={415}>
                              Mancherial
                            </option>
                            <option className="cities" data-value={416}>
                              Mandi
                            </option>
                            <option className="cities" data-value={417}>
                              Mandla
                            </option>
                            <option className="cities" data-value={418}>
                              Mandsaur
                            </option>
                            <option className="cities" data-value={419}>
                              Mandya
                            </option>
                            <option className="cities" data-value={420}>
                              Mansa
                            </option>
                            <option className="cities" data-value={421}>
                              Mathura
                            </option>
                            <option className="cities" data-value={422}>
                              Mau
                            </option>
                            <option className="cities" data-value={423}>
                              Mayurbhanj
                            </option>
                            <option className="cities" data-value={424}>
                              Medak
                            </option>
                            <option className="cities" data-value={425}>
                              Medchal
                            </option>
                            <option className="cities" data-value={426}>
                              Meerut
                            </option>
                            <option className="cities" data-value={427}>
                              Mehsana
                            </option>
                            <option className="cities" data-value={428}>
                              Mirzapur
                            </option>
                            <option className="cities" data-value={429}>
                              Moga
                            </option>
                            <option className="cities" data-value={430}>
                              Mokokchung
                            </option>
                            <option className="cities" data-value={431}>
                              Mon
                            </option>
                            <option className="cities" data-value={432}>
                              Moradabad
                            </option>
                            <option className="cities" data-value={433}>
                              Morbi
                            </option>
                            <option className="cities" data-value={434}>
                              Morena
                            </option>
                            <option className="cities" data-value={435}>
                              Morigaon
                            </option>
                            <option className="cities" data-value={436}>
                              Muktsar
                            </option>
                            <option className="cities" data-value={437}>
                              Mumbai City
                            </option>
                            <option className="cities" data-value={438}>
                              Mumbai Suburban
                            </option>
                            <option className="cities" data-value={439}>
                              Mungeli
                            </option>
                            <option className="cities" data-value={440}>
                              Munger (Monghyr)
                            </option>
                            <option className="cities" data-value={441}>
                              Murshidabad
                            </option>
                            <option className="cities" data-value={442}>
                              Muzaffarnagar
                            </option>
                            <option className="cities" data-value={443}>
                              Muzaffarpur
                            </option>
                            <option className="cities" data-value={444}>
                              Mysuru (Mysore)
                            </option>
                            <option className="cities" data-value={445}>
                              Nabarangpur
                            </option>
                            <option className="cities" data-value={446}>
                              Nadia
                            </option>
                            <option className="cities" data-value={447}>
                              Nagaon
                            </option>
                            <option className="cities" data-value={448}>
                              Nagapattinam
                            </option>
                            <option className="cities" data-value={449}>
                              Nagarkurnool
                            </option>
                            <option className="cities" data-value={450}>
                              Nagaur
                            </option>
                            <option className="cities" data-value={451}>
                              Nagpur
                            </option>
                            <option className="cities" data-value={452}>
                              Nainital
                            </option>
                            <option className="cities" data-value={453}>
                              Nalanda
                            </option>
                            <option className="cities" data-value={454}>
                              Nalbari
                            </option>
                            <option className="cities" data-value={455}>
                              Nalgonda
                            </option>
                            <option className="cities" data-value={456}>
                              Namakkal
                            </option>
                            <option className="cities" data-value={457}>
                              Namsai
                            </option>
                            <option className="cities" data-value={458}>
                              Nanded
                            </option>
                            <option className="cities" data-value={459}>
                              Nandurbar
                            </option>
                            <option className="cities" data-value={460}>
                              Narayanpur
                            </option>
                            <option className="cities" data-value={461}>
                              Narmada (Rajpipla)
                            </option>
                            <option className="cities" data-value={462}>
                              Narsinghpur
                            </option>
                            <option className="cities" data-value={463}>
                              Nashik
                            </option>
                            <option className="cities" data-value={464}>
                              Navsari
                            </option>
                            <option className="cities" data-value={465}>
                              Nawada
                            </option>
                            <option className="cities" data-value={466}>
                              Nawanshahr (Shahid Bhagat Singh Nagar)
                            </option>
                            <option className="cities" data-value={467}>
                              Nayagarh
                            </option>
                            <option className="cities" data-value={468}>
                              Neemuch
                            </option>
                            <option className="cities" data-value={469}>
                              New Delhi
                            </option>
                            <option className="cities" data-value={470}>
                              Nicobar
                            </option>
                            <option className="cities" data-value={471}>
                              Nilgiris
                            </option>
                            <option className="cities" data-value={472}>
                              Nirmal
                            </option>
                            <option className="cities" data-value={473}>
                              Nizamabad
                            </option>
                            <option className="cities" data-value={474}>
                              Noney
                            </option>
                            <option className="cities" data-value={475}>
                              North 24 Parganas
                            </option>
                            <option className="cities" data-value={476}>
                              North Delhi
                            </option>
                            <option className="cities" data-value={477}>
                              North East Delhi
                            </option>
                            <option className="cities" data-value={478}>
                              North Garo Hills
                            </option>
                            <option className="cities" data-value={479}>
                              North Goa
                            </option>
                            <option className="cities" data-value={480}>
                              North Sikkim
                            </option>
                            <option className="cities" data-value={481}>
                              North Tripura
                            </option>
                            <option className="cities" data-value={482}>
                              North West Delhi
                            </option>
                            <option className="cities" data-value={483}>
                              North and Middle Andaman
                            </option>
                            <option className="cities" data-value={484}>
                              Nuapada
                            </option>
                            <option className="cities" data-value={485}>
                              Nuh
                            </option>
                            <option className="cities" data-value={486}>
                              Osmanabad
                            </option>
                            <option className="cities" data-value={487}>
                              Pakke Kessang
                            </option>
                            <option className="cities" data-value={488}>
                              Pakur
                            </option>
                            <option className="cities" data-value={489}>
                              Palakkad
                            </option>
                            <option className="cities" data-value={490}>
                              Palamu
                            </option>
                            <option className="cities" data-value={491}>
                              Palghar
                            </option>
                            <option className="cities" data-value={492}>
                              Pali
                            </option>
                            <option className="cities" data-value={493}>
                              Palwal
                            </option>
                            <option className="cities" data-value={494}>
                              Panchkula
                            </option>
                            <option className="cities" data-value={495}>
                              Panchmahal (Godhra)
                            </option>
                            <option className="cities" data-value={496}>
                              Panipat
                            </option>
                            <option className="cities" data-value={497}>
                              Panna
                            </option>
                            <option className="cities" data-value={498}>
                              Papum Pare
                            </option>
                            <option className="cities" data-value={499}>
                              Parbhani
                            </option>
                            <option className="cities" data-value={500}>
                              Paschim (West) Burdwan (Bardhaman)
                            </option>
                            <option className="cities" data-value={501}>
                              Paschim Medinipur (West Medinipur)
                            </option>
                            <option className="cities" data-value={502}>
                              Patan
                            </option>
                            <option className="cities" data-value={503}>
                              Pathanamthitta
                            </option>
                            <option className="cities" data-value={504}>
                              Pathankot
                            </option>
                            <option className="cities" data-value={505}>
                              Patiala
                            </option>
                            <option className="cities" data-value={506}>
                              Patna
                            </option>
                            <option className="cities" data-value={507}>
                              Pauri Garhwal
                            </option>
                            <option className="cities" data-value={508}>
                              Peddapalli
                            </option>
                            <option className="cities" data-value={509}>
                              Perambalur
                            </option>
                            <option className="cities" data-value={510}>
                              Peren
                            </option>
                            <option className="cities" data-value={511}>
                              Phek
                            </option>
                            <option className="cities" data-value={512}>
                              Pherzawl
                            </option>
                            <option className="cities" data-value={513}>
                              Pilibhit
                            </option>
                            <option className="cities" data-value={514}>
                              Pithoragarh
                            </option>
                            <option className="cities" data-value={515}>
                              Poonch
                            </option>
                            <option className="cities" data-value={516}>
                              Porbandar
                            </option>
                            <option className="cities" data-value={517}>
                              Prakasam
                            </option>
                            <option className="cities" data-value={518}>
                              Pratapgarh (RJ)
                            </option>
                            <option className="cities" data-value={519}>
                              Pratapgarh (UP)
                            </option>
                            <option className="cities" data-value={520}>
                              Puducherry
                            </option>
                            <option className="cities" data-value={521}>
                              Pudukkottai
                            </option>
                            <option className="cities" data-value={522}>
                              Pulwama
                            </option>
                            <option className="cities" data-value={523}>
                              Pune
                            </option>
                            <option className="cities" data-value={524}>
                              Purba Burdwan (Bardhaman)
                            </option>
                            <option className="cities" data-value={525}>
                              Purba Medinipur (East Medinipur)
                            </option>
                            <option className="cities" data-value={526}>
                              Puri
                            </option>
                            <option className="cities" data-value={527}>
                              Purnia (Purnea)
                            </option>
                            <option className="cities" data-value={528}>
                              Purulia
                            </option>
                            <option className="cities" data-value={529}>
                              RaeBareli
                            </option>
                            <option className="cities" data-value={530}>
                              Raichur
                            </option>
                            <option className="cities" data-value={531}>
                              Raigad
                            </option>
                            <option className="cities" data-value={532}>
                              Raigarh
                            </option>
                            <option className="cities" data-value={533}>
                              Raipur
                            </option>
                            <option className="cities" data-value={534}>
                              Raisen
                            </option>
                            <option className="cities" data-value={535}>
                              Rajanna Sircilla
                            </option>
                            <option className="cities" data-value={536}>
                              Rajgarh
                            </option>
                            <option className="cities" data-value={537}>
                              Rajkot
                            </option>
                            <option className="cities" data-value={538}>
                              Rajnandgaon
                            </option>
                            <option className="cities" data-value={539}>
                              Rajouri
                            </option>
                            <option className="cities" data-value={540}>
                              Rajsamand
                            </option>
                            <option className="cities" data-value={541}>
                              Ramanagara
                            </option>
                            <option className="cities" data-value={542}>
                              Ramanathapuram
                            </option>
                            <option className="cities" data-value={543}>
                              Ramban
                            </option>
                            <option className="cities" data-value={544}>
                              Ramgarh
                            </option>
                            <option className="cities" data-value={545}>
                              Rampur
                            </option>
                            <option className="cities" data-value={546}>
                              Ranchi
                            </option>
                            <option className="cities" data-value={547}>
                              Rangareddy
                            </option>
                            <option className="cities" data-value={548}>
                              Ranipet
                            </option>
                            <option className="cities" data-value={549}>
                              Ratlam
                            </option>
                            <option className="cities" data-value={550}>
                              Ratnagiri
                            </option>
                            <option className="cities" data-value={551}>
                              Rayagada
                            </option>
                            <option className="cities" data-value={552}>
                              Reasi
                            </option>
                            <option className="cities" data-value={553}>
                              Rewa
                            </option>
                            <option className="cities" data-value={554}>
                              Rewari
                            </option>
                            <option className="cities" data-value={555}>
                              Ri Bhoi
                            </option>
                            <option className="cities" data-value={556}>
                              Rohtak
                            </option>
                            <option className="cities" data-value={557}>
                              Rohtas
                            </option>
                            <option className="cities" data-value={558}>
                              Rudraprayag
                            </option>
                            <option className="cities" data-value={559}>
                              Rupnagar
                            </option>
                            <option className="cities" data-value={560}>
                              Sabarkantha (Himmatnagar)
                            </option>
                            <option className="cities" data-value={561}>
                              Sagar
                            </option>
                            <option className="cities" data-value={562}>
                              Saharanpur
                            </option>
                            <option className="cities" data-value={563}>
                              Saharsa
                            </option>
                            <option className="cities" data-value={564}>
                              Sahibganj
                            </option>
                            <option className="cities" data-value={565}>
                              Sahibzada Ajit Singh Nagar (Mohali)
                            </option>
                            <option className="cities" data-value={566}>
                              Saiha
                            </option>
                            <option className="cities" data-value={567}>
                              Salem
                            </option>
                            <option className="cities" data-value={568}>
                              Samastipur
                            </option>
                            <option className="cities" data-value={569}>
                              Samba
                            </option>
                            <option className="cities" data-value={570}>
                              Sambalpur
                            </option>
                            <option className="cities" data-value={571}>
                              Sambhal (Bhim Nagar)
                            </option>
                            <option className="cities" data-value={572}>
                              Sangareddy
                            </option>
                            <option className="cities" data-value={573}>
                              Sangli
                            </option>
                            <option className="cities" data-value={574}>
                              Sangrur
                            </option>
                            <option className="cities" data-value={575}>
                              Sant Kabir Nagar
                            </option>
                            <option className="cities" data-value={576}>
                              Saran
                            </option>
                            <option className="cities" data-value={577}>
                              Satara
                            </option>
                            <option className="cities" data-value={578}>
                              Satna
                            </option>
                            <option className="cities" data-value={579}>
                              Sawai Madhopur
                            </option>
                            <option className="cities" data-value={580}>
                              Sehore
                            </option>
                            <option className="cities" data-value={581}>
                              Senapati
                            </option>
                            <option className="cities" data-value={582}>
                              Seoni
                            </option>
                            <option className="cities" data-value={583}>
                              Sepahijala
                            </option>
                            <option className="cities" data-value={584}>
                              Seraikela-Kharsawan
                            </option>
                            <option className="cities" data-value={585}>
                              Serchhip
                            </option>
                            <option className="cities" data-value={586}>
                              Shahdara
                            </option>
                            <option className="cities" data-value={587}>
                              Shahdol
                            </option>
                            <option className="cities" data-value={588}>
                              Shahjahanpur
                            </option>
                            <option className="cities" data-value={589}>
                              Shajapur
                            </option>
                            <option className="cities" data-value={590}>
                              Shamali (Prabuddh Nagar)
                            </option>
                            <option className="cities" data-value={591}>
                              Sheikhpura
                            </option>
                            <option className="cities" data-value={592}>
                              Sheohar
                            </option>
                            <option className="cities" data-value={593}>
                              Sheopur
                            </option>
                            <option className="cities" data-value={594}>
                              Shi Yomi
                            </option>
                            <option className="cities" data-value={595}>
                              Shimla
                            </option>
                            <option className="cities" data-value={596}>
                              Shivamogga (Shimoga)
                            </option>
                            <option className="cities" data-value={597}>
                              Shivpuri
                            </option>
                            <option className="cities" data-value={598}>
                              Shopian
                            </option>
                            <option className="cities" data-value={599}>
                              Shravasti
                            </option>
                            <option className="cities" data-value={600}>
                              Siang
                            </option>
                            <option className="cities" data-value={601}>
                              Siddharth Nagar
                            </option>
                            <option className="cities" data-value={602}>
                              Siddipet
                            </option>
                            <option className="cities" data-value={603}>
                              Sidhi
                            </option>
                            <option className="cities" data-value={604}>
                              Sikar
                            </option>
                            <option className="cities" data-value={605}>
                              Simdega
                            </option>
                            <option className="cities" data-value={606}>
                              Sindhudurg
                            </option>
                            <option className="cities" data-value={607}>
                              Singrauli
                            </option>
                            <option className="cities" data-value={608}>
                              Sirmaur (Sirmour)
                            </option>
                            <option className="cities" data-value={609}>
                              Sirohi
                            </option>
                            <option className="cities" data-value={610}>
                              Sirsa
                            </option>
                            <option className="cities" data-value={611}>
                              Sitamarhi
                            </option>
                            <option className="cities" data-value={612}>
                              Sitapur
                            </option>
                            <option className="cities" data-value={613}>
                              Sivaganga
                            </option>
                            <option className="cities" data-value={614}>
                              Sivasagar
                            </option>
                            <option className="cities" data-value={615}>
                              Siwan
                            </option>
                            <option className="cities" data-value={616}>
                              Solan
                            </option>
                            <option className="cities" data-value={617}>
                              Solapur
                            </option>
                            <option className="cities" data-value={618}>
                              Sonbhadra
                            </option>
                            <option className="cities" data-value={619}>
                              Sonepur
                            </option>
                            <option className="cities" data-value={620}>
                              Sonipat
                            </option>
                            <option className="cities" data-value={621}>
                              Sonitpur
                            </option>
                            <option className="cities" data-value={622}>
                              South 24 Parganas
                            </option>
                            <option className="cities" data-value={623}>
                              South Andaman
                            </option>
                            <option className="cities" data-value={624}>
                              South Delhi
                            </option>
                            <option className="cities" data-value={625}>
                              South East Delhi
                            </option>
                            <option className="cities" data-value={626}>
                              South Garo Hills
                            </option>
                            <option className="cities" data-value={627}>
                              South Goa
                            </option>
                            <option className="cities" data-value={628}>
                              South Salamara-Mankachar
                            </option>
                            <option className="cities" data-value={629}>
                              South Sikkim
                            </option>
                            <option className="cities" data-value={630}>
                              South Tripura
                            </option>
                            <option className="cities" data-value={631}>
                              South West Delhi
                            </option>
                            <option className="cities" data-value={632}>
                              South West Garo Hills
                            </option>
                            <option className="cities" data-value={633}>
                              South West Khasi Hills
                            </option>
                            <option className="cities" data-value={634}>
                              Sri Ganganagar
                            </option>
                            <option className="cities" data-value={635}>
                              Sri Potti Sriramulu Nellore{" "}
                            </option>
                            <option className="cities" data-value={636}>
                              Srikakulam
                            </option>
                            <option className="cities" data-value={637}>
                              Srinagar
                            </option>
                            <option className="cities" data-value={638}>
                              Sukma
                            </option>
                            <option className="cities" data-value={639}>
                              Sultanpur
                            </option>
                            <option className="cities" data-value={640}>
                              Sundargarh
                            </option>
                            <option className="cities" data-value={641}>
                              Supaul
                            </option>
                            <option className="cities" data-value={642}>
                              Surajpur
                            </option>
                            <option className="cities" data-value={643}>
                              Surat
                            </option>
                            <option className="cities" data-value={644}>
                              Surendranagar
                            </option>
                            <option className="cities" data-value={645}>
                              Surguja
                            </option>
                            <option className="cities" data-value={646}>
                              Suryapet
                            </option>
                            <option className="cities" data-value={647}>
                              Tamenglong
                            </option>
                            <option className="cities" data-value={648}>
                              Tapi (Vyara)
                            </option>
                            <option className="cities" data-value={649}>
                              Tarn Taran
                            </option>
                            <option className="cities" data-value={650}>
                              Tawang
                            </option>
                            <option className="cities" data-value={651}>
                              Tehri Garhwal
                            </option>
                            <option className="cities" data-value={652}>
                              Tengnoupal
                            </option>
                            <option className="cities" data-value={653}>
                              Tenkasi
                            </option>
                            <option className="cities" data-value={654}>
                              Thane
                            </option>
                            <option className="cities" data-value={655}>
                              Thanjavur
                            </option>
                            <option className="cities" data-value={656}>
                              Theni
                            </option>
                            <option className="cities" data-value={657}>
                              Thiruvananthapuram
                            </option>
                            <option className="cities" data-value={658}>
                              Thoothukudi (Tuticorin)
                            </option>
                            <option className="cities" data-value={659}>
                              Thoubal
                            </option>
                            <option className="cities" data-value={660}>
                              Thrissur
                            </option>
                            <option className="cities" data-value={661}>
                              Tikamgarh
                            </option>
                            <option className="cities" data-value={662}>
                              Tinsukia
                            </option>
                            <option className="cities" data-value={663}>
                              Tirap
                            </option>
                            <option className="cities" data-value={664}>
                              Tiruchirappalli
                            </option>
                            <option className="cities" data-value={665}>
                              Tirunelveli
                            </option>
                            <option className="cities" data-value={666}>
                              Tirupathur
                            </option>
                            <option className="cities" data-value={667}>
                              Tiruppur
                            </option>
                            <option className="cities" data-value={668}>
                              Tiruvallur
                            </option>
                            <option className="cities" data-value={669}>
                              Tiruvannamalai
                            </option>
                            <option className="cities" data-value={670}>
                              Tiruvarur
                            </option>
                            <option className="cities" data-value={671}>
                              Tonk
                            </option>
                            <option className="cities" data-value={672}>
                              Tuensang
                            </option>
                            <option className="cities" data-value={673}>
                              Tumakuru (Tumkur)
                            </option>
                            <option className="cities" data-value={674}>
                              Udaipur
                            </option>
                            <option className="cities" data-value={675}>
                              Udalguri
                            </option>
                            <option className="cities" data-value={676}>
                              Udham Singh Nagar
                            </option>
                            <option className="cities" data-value={677}>
                              Udhampur
                            </option>
                            <option className="cities" data-value={678}>
                              Udupi
                            </option>
                            <option className="cities" data-value={679}>
                              Ujjain
                            </option>
                            <option className="cities" data-value={680}>
                              Ukhrul
                            </option>
                            <option className="cities" data-value={681}>
                              Umaria
                            </option>
                            <option className="cities" data-value={682}>
                              Una
                            </option>
                            <option className="cities" data-value={683}>
                              Unakoti
                            </option>
                            <option className="cities" data-value={684}>
                              Unnao
                            </option>
                            <option className="cities" data-value={685}>
                              Upper Siang
                            </option>
                            <option className="cities" data-value={686}>
                              Upper Subansiri
                            </option>
                            <option className="cities" data-value={687}>
                              Uttar Dinajpur (North Dinajpur)
                            </option>
                            <option className="cities" data-value={688}>
                              Uttara Kannada (Karwar)
                            </option>
                            <option className="cities" data-value={689}>
                              Uttarkashi
                            </option>
                            <option className="cities" data-value={690}>
                              Vadodara
                            </option>
                            <option className="cities" data-value={691}>
                              Vaishali
                            </option>
                            <option className="cities" data-value={692}>
                              Valsad
                            </option>
                            <option className="cities" data-value={693}>
                              Varanasi
                            </option>
                            <option className="cities" data-value={694}>
                              Vellore
                            </option>
                            <option className="cities" data-value={695}>
                              Vidisha
                            </option>
                            <option className="cities" data-value={696}>
                              Vijayapura (Bijapur)
                            </option>
                            <option className="cities" data-value={697}>
                              Vikarabad
                            </option>
                            <option className="cities" data-value={698}>
                              Viluppuram
                            </option>
                            <option className="cities" data-value={699}>
                              Virudhunagar
                            </option>
                            <option className="cities" data-value={700}>
                              Visakhapatnam
                            </option>
                            <option className="cities" data-value={701}>
                              Vizianagaram
                            </option>
                            <option className="cities" data-value={702}>
                              Wanaparthy
                            </option>
                            <option className="cities" data-value={703}>
                              Warangal (Rural)
                            </option>
                            <option className="cities" data-value={704}>
                              Warangal (Urban)
                            </option>
                            <option className="cities" data-value={705}>
                              Wardha
                            </option>
                            <option className="cities" data-value={706}>
                              Washim
                            </option>
                            <option className="cities" data-value={707}>
                              Wayanad
                            </option>
                            <option className="cities" data-value={708}>
                              West Champaran
                            </option>
                            <option className="cities" data-value={709}>
                              West Delhi
                            </option>
                            <option className="cities" data-value={710}>
                              West Garo Hills
                            </option>
                            <option className="cities" data-value={711}>
                              West Godavari
                            </option>
                            <option className="cities" data-value={712}>
                              West Jaintia Hills
                            </option>
                            <option className="cities" data-value={713}>
                              West Kameng
                            </option>
                            <option className="cities" data-value={714}>
                              West Karbi Anglong
                            </option>
                            <option className="cities" data-value={715}>
                              West Khasi Hills
                            </option>
                            <option className="cities" data-value={716}>
                              West Siang
                            </option>
                            <option className="cities" data-value={717}>
                              West Sikkim
                            </option>
                            <option className="cities" data-value={718}>
                              West Singhbhum
                            </option>
                            <option className="cities" data-value={719}>
                              West Tripura
                            </option>
                            <option className="cities" data-value={720}>
                              Wokha
                            </option>
                            <option className="cities" data-value={721}>
                              YSR District, Kadapa (Cuddapah)
                            </option>
                            <option className="cities" data-value={722}>
                              Yadadri Bhuvanagiri
                            </option>
                            <option className="cities" data-value={723}>
                              Yadgir
                            </option>
                            <option className="cities" data-value={724}>
                              Yamunanagar
                            </option>
                            <option className="cities" data-value={725}>
                              Yanam
                            </option>
                            <option className="cities" data-value={726}>
                              Yavatmal
                            </option>
                            <option className="cities" data-value={727}>
                              Zunheboto
                            </option>
                          </select>
                          <br />
                          <br />
                          <select
                            className="serviceinputselect"
                            id="applicationtype"
                          >
                            <option value id="selectOpt" selected disabled>
                              Select loan amount...
                            </option>
                            <option value={1}>Upto 2.5 Lac</option>
                            <option value={2}>2.5 Lac to 10 Lac</option>
                            <option value={3}>More than 10 Lac</option>
                          </select>
                          <div
                            style={{
                              width: "100%",
                              margin: "0px",
                              padding: "0px",
                              left: "0px",
                            }}
                          >
                            <p className="errorside">
                              <img src="index.html" className="errorsideimg" />
                            </p>
                          </div>
                          <br />
                          <br />
                          <button
                            id="submit"
                            onclick="submitcontact()"
                            className="proceednowbutton"
                          >
                            Proceed now{" "}
                            <img
                              src={Path4125}
                              className="proceednowbuttonicon"
                            />
                          </button>
                          <img
                            className="loader1"
                            style={{ display: "none" }}
                            src="images/homecontact/Rolling.svg"
                            alt
                          />
                          <p
                            style={{
                              "margin-top": "10px",
                              "font-family": "'Gotham'",
                              "font-size": "13px",
                              color: "#01355D",
                              "line-height": "1.2",
                            }}
                          >
                            Still confused, Need expert help?
                          </p>
                          <a
                            href="consultancy.html"
                            style={{
                              display: "block",
                              "font-family": "'Gotham'",
                              "font-size": "13px",
                              color: "#f8951d",
                              "-webkit-text-decoration": "underline",
                              "text-decoration": "underline",
                              "line-height": "1.2",
                            }}
                          >
                            Get consultation for FREE!
                          </a>
                        </center>
                      </div>
                      <div className="col-md-6">
                        <center>
                          <br />
                          <p
                            style={{
                              "margin-top": "8px",
                              "font-family": "'Roboto'",
                              "font-weight": "900",
                              "font-size": "32px",
                              color: "#F8951D",
                              "line-height": "1.2",
                            }}
                          >
                            <sup style={{ "line-height": "1.5" }} />₹ 1907.63
                          </p>
                          <p
                            style={{
                              "font-family": "'Roboto'",
                              "font-weight": "900",
                              "font-size": "12px",
                              color: "#01355D",
                              "line-height": "1.2",
                            }}
                          >
                            (*Limited time period offer)
                          </p>
                          <br />
                          <img
                            src={one}
                            className="serviceillustration"
                          />
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mobhidebr">
                <center>
                  <br />
                  <br />
                  <br />
                  <img
                    src={Asset}
                    className="service1illustration"
                  />
                </center>
              </div>
            </div>
            <br />
            <br />
            <p className="aboutustext">
              We are introducing Legal251's Credit Monitoring Arrangement (CMA)
              Report Service, designed to empower businesses in India with
              comprehensive and reliable cost analysis. Our expert Cost and
              Management Accountants (CMAs) meticulously prepare CMA Reports,
              strictly adhering to the Companies (Cost Records and Audit) Rules,
              2014. These reports are essential for companies operating under
              the Companies Act 2013. With Legal251's CMA Report, you gain
              invaluable insights into your cost accounting records, systems,
              and procedures, ensuring accuracy and compliance with cost
              accounting standards and legal obligations. Our CMA Report goes
              beyond mere compliance. They provide a detailed analysis of your
              cost structures, enabling you to identify areas for cost
              optimisation and enhanced efficiency. By leveraging our service,
              you can improve transparency, accountability, and, ultimately, the
              financial health of your organisation. Our team understands the
              unique requirements of different industries and tailors the CMA
              Report accordingly. When you choose Legal251's CMA Report Service,
              you partner with highly skilled CMAs who conduct rigorous cost
              audits and prepare reports that meet the highest standards of
              professionalism and accuracy. Maximise your cost management
              potential with Legal251's CMA Report Service, and unlock new
              avenues for growth and success in the competitive business
              landscape of India.
            </p>
            <br />
            <br />
          </div>
        </div>
        <div id="Howtoapply" className="page-section">
          <br />
          <br />
          <br />
          <br />
          <p className="servicehrheading">
            &nbsp;{" "}
            <img
              src={question}
              className="Howtoapplyimage"
            />{" "}
            How to apply&nbsp;
          </p>
          <hr className="Howtoapplyhr1" />
          <hr className="Howtoapplyhr2" />
          <hr className="Howtoapplyhr3" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <center>
            <img
              src={Report}
              className="gsthowtoapplyimg"
            />
          </center>
        </div>
        <div id="Detailedprocess" className="page-section">
          <br />
          <br />
          <br />
          <br />
          <p className="servicehrheading">
            &nbsp;{" "}
            <img
              src={Path19952}
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
          <div className="row companybenefitscardrow">
            <div className="col-md-6 ">
              <div className="companybenefitscard companybenefitscard2">
                <div className="row ">
                  <div className="col-md-8 col-sm-8 col-xs-8 col-12">
                    <p className="companybenefitscardheading">Compliance</p>
                    <p className="companybenefitscardtext">
                      CMA Report ensures compliance with the Companies (Cost
                      Records and Audit) Rules, helping companies fulfil their
                      legal obligations.
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 col-12">
                    <img
                      src={Compliance}
                      className="companybenefitscardimg companybenefitscardimgheight1 companybenefitscardimgmargin3 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="companybenefitscard companybenefitscard2">
                <div className="row ">
                  <div className="col-md-8 col-sm-8 col-xs-8 col-12">
                    <p className="companybenefitscardheading ">
                      Cost Optimization
                    </p>
                    <p className="companybenefitscardtext ">
                      CMA Report identifies areas for cost reduction and
                      efficiency improvement, enabling businesses to optimise
                      their cost structures.
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 col-12">
                    <img
                      src={optiization}
                      className="companybenefitscardimg companybenefitscardimgheight1 companybenefitscardimgmargin3 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="companybenefitscard companybenefitscard2">
                <div className="row ">
                  <div className="col-md-8 col-sm-8 col-xs-8 col-12">
                    <p className="companybenefitscardheading ">
                      Enhanced Decision-Making
                    </p>
                    <p className="companybenefitscardtext ">
                      The insights provided in CMA Report empower management to
                      make informed decisions based on accurate cost analysis.
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 col-12">
                    <img
                      src={Making}
                      className="companybenefitscardimg companybenefitscardimgheight1 companybenefitscardimgmargin3 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="companybenefitscard companybenefitscard2">
                <div className="row ">
                  <div className="col-md-8 col-sm-8 col-xs-8 col-12">
                    <p className="companybenefitscardheading ">
                      Transparency and Accountability
                    </p>
                    <p className="companybenefitscardtext ">
                      CMA Report enhances transparency and accountability in
                      cost accounting practices, fostering trust among
                      stakeholders.
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 col-12">
                    <img
                      src={Transparency}
                      className="companybenefitscardimg companybenefitscardimgheight1 companybenefitscardimgmargin3 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="companybenefitscard companybenefitscard2">
                <div className="row ">
                  <div className="col-md-8 col-sm-8 col-xs-8 col-12">
                    <p className="companybenefitscardheading ">
                      Legal and Regulatory Adherence
                    </p>
                    <p className="companybenefitscardtext ">
                      CMA Report ensures adherence to cost accounting standards
                      and regulatory requirements, mitigating legal risks.
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 col-12">
                    <img
                      src={adherence}
                      className="companybenefitscardimg companybenefitscardimgheight1 companybenefitscardimgmargin3 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="companybenefitscard companybenefitscard2">
                <div className="row ">
                  <div className="col-md-8 col-sm-8 col-xs-8 col-12">
                    <p className="companybenefitscardheading ">
                      Competitive Advantage
                    </p>
                    <p className="companybenefitscardtext ">
                      By optimising costs, businesses gain a competitive edge,
                      allowing them to offer competitive pricing and improve
                      profitability.
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 col-12">
                    <img
                      src={Advantage}
                      className="companybenefitscardimg companybenefitscardimgheight1 companybenefitscardimgmargin3 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="companybenefitscard companybenefitscard2">
                <div className="row ">
                  <div className="col-md-8 col-sm-8 col-xs-8 col-12">
                    <p className="companybenefitscardheading ">
                      Improved Resource Allocation
                    </p>
                    <p className="companybenefitscardtext ">
                      CMA Report aids in effective resource allocation by
                      highlighting areas where resources can be allocated more
                      efficiently.
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 col-12">
                    <img
                      src={Allocation}
                      className="companybenefitscardimg companybenefitscardimgheight1 companybenefitscardimgmargin3 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="companybenefitscard companybenefitscard2">
                <div className="row ">
                  <div className="col-md-8 col-sm-8 col-xs-8 col-12">
                    <p className="companybenefitscardheading ">
                      Performance Evaluation
                    </p>
                    <p className="companybenefitscardtext ">
                      CMA Report provides a basis for evaluating the performance
                      of various cost centres and departments within an
                      organisation.
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 col-12">
                    <img
                      src={Evaluation}
                      className="companybenefitscardimg companybenefitscardimgheight1 companybenefitscardimgmargin3 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="companybenefitscard companybenefitscard2">
                <div className="row ">
                  <div className="col-md-8 col-sm-8 col-xs-8 col-12">
                    <p className="companybenefitscardheading ">Benchmarking</p>
                    <p className="companybenefitscardtext ">
                      CMA Report enables benchmarking against industry
                      standards, allowing businesses to compare their cost
                      efficiency and identify areas for improvement.
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 col-12">
                    <img
                      src={Benchmarking}
                      className="companybenefitscardimg companybenefitscardimgheight1 companybenefitscardimgmargin3 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="companybenefitscard companybenefitscard2">
                <div className="row ">
                  <div className="col-md-8 col-sm-8 col-xs-8 col-12">
                    <p className="companybenefitscardheading ">
                      Financial Health Assessment
                    </p>
                    <p className="companybenefitscardtext ">
                      CMA Report contributes to assessing the financial health
                      of a company by providing a comprehensive analysis of its
                      cost structures and efficiency.
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 col-12">
                    <img
                      src={Assessment}
                      className="companybenefitscardimg companybenefitscardimgheight1 companybenefitscardimgmargin3 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="Registrationprocess" className="page-section">
            <br />
            <br />
            <br />
            <br />
            <p className="servicehrheading">
              &nbsp;{" "}
              <img
                src={registration}
                className="registrationimage"
              />{" "}
              Registration Process&nbsp;
            </p>
            <hr className="registrationhr1" />
            <hr className="registrationhr2" />
            <hr className="registrationhr3" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div style={{ padding: "0px 10.61vw" }}>
              <div>
                <div
                  className="row"
                  style={{
                    left: "15px",
                    right: "0px",
                    padding: "4vw 10.61vw",
                    position: "absolute",
                    width: "100%",
                    "z-index": "1",
                  }}
                >
                  <div className="col-md-2 Registrationprocesscol1">
                    <center>
                      <p className="Registrationprocesstext1 gstrtext1">
                        To keep you risk-free, our team will analyze your
                        submitted documents, looking for any misleading or
                        incorrect information.
                      </p>
                    </center>
                  </div>
                  <div className="col-md-2 Registrationprocesscol2">
                    <center>
                      <p className="Registrationprocesstext2 gstrtext2 gstrtext2cma">
                        Our professionals are here to help you with document
                        requirements and licensing necessities.
                      </p>
                    </center>
                  </div>
                  <div className="col-md-2 Registrationprocesscol3">
                    <center>
                      <p className="Registrationprocesstext3 gstrtext3 gstrtext3cma">
                        Engage with the client, collect data, review and verify,
                        perform cost audits, and analyse cost structures.
                      </p>
                    </center>
                  </div>
                  <div className="col-md-2 Registrationprocesscol4">
                    <center>
                      <p className="Registrationprocesstext4 gstrtext4 gstrtext4cma">
                        Prepare a comprehensive CMA Report with insights,
                        recommendations, and compliance, ensuring accuracy and
                        alignment with client objectives.
                      </p>
                    </center>
                  </div>
                  <div className="col-md-2 Registrationprocesscol5">
                    <center>
                      <p className="Registrationprocesstext5 gstrtext5 gstrtext5cma">
                        Present Reports to stakeholders, submit to authorities,
                        provide implementation support, and drive cost
                        management strategies for business growth and
                        competitiveness.
                      </p>
                    </center>
                  </div>
                </div>
                <div>
                <center>
                    <img src={blue} className="registrationicon1" />
                    <img src={yellow} className="registrationicon2" />
                    <img src={cut} className="registrationicon3" />
                    <img className="registrationicon4" src={yellow} />
                    <img src={Group_1799} className="registrationicon5" />
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div id="FAQs" className="page-section">
            <br />
            <br />
            <br />
            <br />
            <p className="servicehrheading">
             &nbsp; <img src={faq} className="FAQsimage" /> FAQs&nbsp;
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
                  "margin-top": "-20px",
                  "border-left": "2px solid rgb(1,53,93,0.3)",
                  height: "300px",
                  width: "2px",
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
                            Q1. Are CMA Reports mandatory for all companies in
                            India?
                            <img
                              src="images/gstregistration/Path_20192.svg"
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
                          No, CMA Reports are mandatory only for certain
                          companies as per the Companies Act, 2013 and the
                          Companies (Cost Records and Audit) Rules, 2014.
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
                            Q2. What is the role of CMAs in preparing a CMA
                            Report?
                            <img
                              src="images/gstregistration/Path_20191.svg"
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
                          CMAs play a crucial role in conducting cost audits,
                          analysing cost structures, and preparing CMA Reports
                          in accordance with the applicable regulations and
                          guidelines.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default servicefaqmainpanel">
                      <div className="panel-heading servicefaqpanelheading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            className="servicefaqlink"
                            id="servicefaq3"
                            data-parent="#accordion"
                            href="#collapse3"
                          >
                            Q3. How does the CMA Report help in cost
                            optimization?
                            <img
                              src="images/gstregistration/Path_20191.svg"
                              className="servicefaqimg"
                            />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse3"
                        className="panel-collapse collapse paddingzero"
                      >
                        <div className="panel-body servicefaqbody">
                          CMA Report identifies areas for cost reduction,
                          inefficiencies, and improvement, providing valuable
                          insights and recommendations for optimising cost
                          structures.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default servicefaqmainpanel">
                      <div className="panel-heading servicefaqpanelheading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            className="servicefaqlink"
                            id="servicefaq4"
                            data-parent="#accordion"
                            href="#collapse4"
                          >
                            Q4. Can CMA Report help in legal compliance?
                            <img
                              src="images/gstregistration/Path_20191.svg"
                              className="servicefaqimg"
                            />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse4"
                        className="panel-collapse collapse paddingzero"
                      >
                        <div className="panel-body servicefaqbody">
                          Yes, CMA Report ensures compliance with cost
                          accounting standards and regulatory requirements,
                          helping companies mitigate legal risks.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default servicefaqmainpanel">
                      <div className="panel-heading servicefaqpanelheading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            className="servicefaqlink"
                            id="servicefaq5"
                            data-parent="#accordion"
                            href="#collapse5"
                          >
                            Q5. Are CMA Reports useful for decision-making?
                            <img
                              src="images/gstregistration/Path_20191.svg"
                              className="servicefaqimg"
                            />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse5"
                        className="panel-collapse collapse paddingzero"
                      >
                        <div className="panel-body servicefaqbody">
                          Absolutely. CMA Report provides accurate cost
                          analysis, enabling management to make informed
                          decisions regarding pricing, resource allocation, and
                          cost management strategies.
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
                            Q6. How does the CMA Report contribute to
                            transparency and accountability?
                            <img
                              src="images/gstregistration/Path_20192.svg"
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
                          CMA Reports enhance transparency by revealing detailed
                          information about cost accounting practices, and they
                          promote accountability by holding companies
                          responsible for accurate cost reporting.
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
                            Q7. Can CMA Report help in evaluating departmental
                            performance?
                            <img
                              src="images/gstregistration/Path_20191.svg"
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
                          Yes, the CMA Report provides a basis for evaluating
                          the performance of various cost centres and
                          departments, enabling businesses to identify areas of
                          improvement and allocate resources effectively.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default servicefaqmainpanel">
                      <div className="panel-heading servicefaqpanelheading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            className="servicefaqlink"
                            id="servicefaq8"
                            data-parent="#accordion2"
                            href="#collapse23"
                          >
                            Q8. Are CMA Reports helpful for benchmarking?
                            <img
                              src="images/gstregistration/Path_20191.svg"
                              className="servicefaqimg"
                            />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse23"
                        className="panel-collapse collapse paddingzero"
                      >
                        <div className="panel-body servicefaqbody">
                          Definitely. CMA Report allows businesses to benchmark
                          their cost efficiency against industry standards,
                          facilitating performance comparisons and highlighting
                          areas where improvements can be made.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default servicefaqmainpanel">
                      <div className="panel-heading servicefaqpanelheading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            className="servicefaqlink"
                            id="servicefaq9"
                            data-parent="#accordion2"
                            href="#collapse24"
                          >
                            Q9. How does a CMA Report contribute to a company's
                            financial health assessment?
                            <img
                              src="images/gstregistration/Path_20191.svg"
                              className="servicefaqimg"
                            />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse24"
                        className="panel-collapse collapse paddingzero"
                      >
                        <div className="panel-body servicefaqbody">
                          CMA Report provides a comprehensive analysis of a
                          company's cost structures, efficiency, and compliance,
                          thereby assisting in assessing its overall financial
                          health.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default servicefaqmainpanel">
                      <div className="panel-heading servicefaqpanelheading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            className="servicefaqlink"
                            id="servicefaq10"
                            data-parent="#accordion2"
                            href="#collapse25"
                          >
                            Q10. Can CMA Reports give companies a competitive
                            advantage?
                            <img
                              src="images/gstregistration/Path_20191.svg"
                              className="servicefaqimg"
                            />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse25"
                        className="panel-collapse collapse paddingzero"
                      >
                        <div className="panel-body servicefaqbody">
                          Yes, by identifying cost optimization opportunities,
                          CMA Report enables businesses to offer competitive
                          pricing, enhance profitability, and gain a competitive
                          edge in the market.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="Whychooseus?" className="page-section">
            <br />
            <br />
            <br />
            <br />
            <p className="servicehrheading">
              &nbsp;{" "}
              <img
                src={Layer}
                className="whychosseusserviceimage"
              />{" "}
              Why Choose Us?&nbsp;
            </p>
            <hr className="whychosseushr1" />
            <hr className="whychosseushr2" />
            <hr className="whychosseushr3" />
            <br />
            <br />
            <br />
            <div
              className="whychosseusmob"
              style={{
                background:
                  "url('images/services/Mask%20Group%2033%20(1.html).jpg')",
                "background-size": "cover",
                padding: "20px",
                "background-position": "center",
              }}
            >
              <div className="row">
                <div className="col-xs-4">
                  <center>
                    <div>
                      <img
                        src="images/services/XMLID_1249_.svg"
                        style={{ width: "8vw", "background-size": "cover" }}
                      />
                      <p
                        style={{
                          "margin-top": "10px",
                          "font-family": "'Roboto'",
                          "font-weight": "700",
                          "line-height": "1.1",
                          "font-size": "2.2vw",
                          color: "#ffffff",
                        }}
                      >
                        Growth &amp; Improvement
                      </p>
                      <p
                        style={{
                          "margin-top": "5px",
                          "font-family": "'Roboto'",
                          "font-weight": "400",
                          "line-height": "1.1",
                          "font-size": "2vw",
                          color: "#ffffff",
                        }}
                      >
                        We believe in growth and improvement at all costs. For
                        us, growth is the law of life and it shall be fulfilled.
                        We know the importance of business and its growth for
                        you.
                      </p>
                      <br />
                    </div>
                  </center>
                </div>
                <div className="col-xs-4">
                  <center>
                    <div>
                      <img
                        src="images/services/customer-service.svg"
                        style={{ width: "9vw" }}
                      />
                      <p
                        style={{
                          "margin-top": "4px",
                          "font-family": "'Roboto'",
                          "font-weight": "700",
                          "line-height": "1.1",
                          "font-size": "2.2vw",
                          color: "#ffffff",
                        }}
                      >
                        Support &amp; Availability
                      </p>
                      <p
                        style={{
                          "margin-top": "4px",
                          "font-family": "'Roboto'",
                          "font-weight": "400",
                          "line-height": "1.1",
                          "font-size": "2vw",
                          color: "#ffffff",
                        }}
                      >
                        We feel how much pain even a small problem or query can
                        cause, that is the reason we are available to support
                        you and solve any of such problems at every particular
                        instance in time.{" "}
                      </p>
                      <br />
                    </div>
                  </center>
                </div>
                <div className="col-xs-4">
                  <center>
                    <div>
                      <img
                        src="images/services/success.svg"
                        style={{ width: "8vw", "background-size": "cover" }}
                      />
                      <p
                        style={{
                          "margin-top": "6px",
                          "font-family": "'Roboto'",
                          "font-weight": "700",
                          "line-height": "1.1",
                          "font-size": "2.2vw",
                          color: "#ffffff",
                        }}
                      >
                        Experienced Team
                      </p>
                      <p
                        style={{
                          "margin-top": "10px",
                          "font-family": "'Roboto'",
                          "font-weight": "400",
                          "line-height": "1.1",
                          "font-size": "2vw",
                          color: "#ffffff",
                        }}
                      >
                        All the members of our team are experienced individuals
                        who believe in professionalism and customer satisfaction
                        above all. Each one of them is passionate in their
                        respective fields.
                      </p>
                      <br />
                    </div>
                  </center>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4">
                  <center>
                    <div>
                      <img
                        src="images/services/target.svg"
                        style={{ width: "8vw", "background-size": "cover" }}
                      />
                      <p
                        style={{
                          "margin-top": "6px",
                          "font-family": "'Roboto'",
                          "font-weight": "700",
                          "line-height": "1.1",
                          "font-size": "2.2vw",
                          color: "#ffffff",
                        }}
                      >
                        Focus
                      </p>
                      <p
                        style={{
                          "margin-top": "6px",
                          "font-family": "'Roboto'",
                          "font-weight": "400",
                          "line-height": "1.1",
                          "font-size": "2vw",
                          color: "#ffffff",
                        }}
                      >
                        Any assigned task is of utmost importance to us, that's
                        why our team members are always focused on taking care
                        of even the smallest of our clients' needs and
                        requirements.
                      </p>
                    </div>
                  </center>
                </div>
                <div className="col-xs-4">
                  <center>
                    <div>
                      <img
                        src="images/services/suitcase.svg"
                        style={{ width: "8vw", "background-size": "cover" }}
                      />
                      <p
                        style={{
                          "margin-top": "10px",
                          "font-family": "'Roboto'",
                          "font-weight": "700",
                          "line-height": "1.1",
                          "font-size": "2.2vw",
                          color: "#ffffff",
                        }}
                      >
                        Value for Money
                      </p>
                      <p
                        style={{
                          "margin-top": "6px",
                          "font-family": "'Roboto'",
                          "font-weight": "400",
                          "line-height": "1.1",
                          "font-size": "2vw",
                          color: "#ffffff",
                        }}
                      >
                        We understand that the money being spent is hard-earned,
                        therefore we utilize every single penny that you pay us
                        in the most effective way possible hence providing the
                        best value for money.
                      </p>
                    </div>
                  </center>
                </div>
                <div className="col-xs-4">
                  <center>
                    <div>
                      <img
                        src="images/services/value.svg"
                        style={{ width: "8vw", "background-size": "cover" }}
                      />
                      <p
                        style={{
                          "margin-top": "8px",
                          "font-family": "'Roboto'",
                          "font-weight": "700",
                          "line-height": "1.1",
                          "font-size": "2.2vw",
                          color: "#ffffff",
                        }}
                      >
                        Care &amp; Regards
                      </p>
                      <p
                        style={{
                          "margin-top": "5px",
                          "font-family": "'Roboto'",
                          "font-weight": "400",
                          "line-height": "1.1",
                          "font-size": "2vw",
                          color: "#ffffff",
                        }}
                      >
                        We believe you to be a part of this family and that all
                        your problems, as well as achievements, are our very
                        own. Your interests are ours and their fulfillment is at
                        the top in our regards.
                      </p>
                    </div>
                  </center>
                </div>
              </div>
            </div>
            <img
              src={Whychooseus}
              className="whychosseusmainimage"
            />
          </div>
          <br />
          <br />
          <br />
          <footer className="mainfooter">
            <div className="row">
              <div className="col-xs-4">
                <img
                  src={Legalwhitelogo}
                  className="footerlegallogo"
                  loading="lazy"
                />
              </div>
              <div className="col-xs-8 paymentrow">
                <div className="row">
                  <div className="col-xs-2"></div>
                  <div className="col-xs-4">
                    <center>
                      <img
                        src={Visaimg}
                        className="paymentimage"
                        loading="lazy"
                      />
                    </center>
                  </div>
                  <div className="col-xs-6">
                    <center>
                      <img
                        src={Upiimg}
                        className="paymentimage"
                        loading="lazy"
                      />
                      <div className="footerdemodiv" />
                    </center>
                  </div>
                  <div className="col-xs-4">
                    <center>
                      <img
                        src={Rupayimg}
                        className="paymentimage"
                        loading="lazy"
                      />
                    </center>
                  </div>
                  <div className="col-xs-4">
                    <center>
                      <img
                        src={Paytmimg}
                        className="paymentimage"
                        loading="lazy"
                      />
                    </center>
                  </div>
                  <div className="col-xs-2"></div>
                  <div className="col-xs-2">
                    <center>
                      <img
                        src={Mastercardimg}
                        className="paymentimage"
                        loading="lazy"
                      />
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "6.4vw" }}>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-4">
                    <p className="footerheading">Contact us</p>
                    <a
                      href="cdn-cgi/l/email-protection.html#ee8d81809a8f8d9aae828b898f82dcdbdfc08d8183"
                      style={{ textDecoration: "underline", color: "#fff" }}
                      className="footertext"
                    >
                      <span
                        className="__cf_email__"
                        data-cfemail="f4979b9a80959780b49891939598c6c1c5da979b99"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                    <br />
                    <a
                      href="tel:7772877729"
                      style={{ textDecoration: "underline", color: "#fff" }}
                      className="footertext"
                    >
                      (+91)77728-77729
                    </a>
                    <br />
                  </div>
                  <div className="col-md-3">
                    <p className="footerheading">Links</p>
                    <a
                      href="https://blog.legal251.com/"
                      style={{ color: "#fff" }}
                      className="footertext"
                    >
                      Latest News
                    </a>
                    <br />
                    <a
                      href="how-we-work.html"
                      style={{ color: "#fff" }}
                      className="footertext"
                    >
                      How we work
                    </a>
                    <br />
                    <a
                      href="about.html"
                      style={{ color: "#fff" }}
                      className="footertext"
                    >
                      About Us
                    </a>
                    <br />
                    <a
                      href="resources/index.html"
                      style={{ color: "#fff" }}
                      className="footertext"
                    >
                      Blog
                    </a>
                    <br />
                    <a
                      href="resources/guides/index.html"
                      style={{ color: "#fff" }}
                      className="footertext"
                    >
                      Guides
                    </a>
                  </div>
                  <div className="col-md-5">
                    <p className="footerheading">Legal &amp; Policies</p>
                    <a
                      href="terms-and-conditions.html"
                      style={{ color: "#fff" }}
                      className="footertext"
                    >
                      Terms &amp; Condition
                    </a>
                    <br />
                    <a
                      href="privacy-policy.html"
                      style={{ color: "#fff" }}
                      className="footertext"
                    >
                      Privacy Policy
                    </a>
                    <br />
                    <a
                      href="cookie-policy.html"
                      style={{ color: "#fff" }}
                      className="footertext"
                    >
                      Cookie Policy
                    </a>
                    <br />
                    <a
                      href="refund-policy.html"
                      style={{ color: "#fff" }}
                      className="footertext"
                    >
                      Refund Policy
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-3">
                    <p className="footerheading">Support</p>
                    <a
                      href="faq.html"
                      style={{ color: "#fff" }}
                      className="footertext"
                    >
                      FAQs
                    </a>
                    <br />
                    <Link
                      to="/Contact"
                      style={{ color: "#fff" }}
                      className="footertext"
                    >
                      Contact us
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <p className="footerheading">Account</p>
                    <a
                      href="https://user.legal251.com/"
                      style={{ color: "#fff" }}
                      className="footertext"
                    >
                      User Login
                    </a>
                    <br />
                    <a
                      href="https://partners.legal251.com/"
                      style={{ color: "#fff" }}
                      className="footertext"
                    >
                      Partner Login
                    </a>
                    <br />
                    <a
                      href="track-service.html"
                      style={{ color: "#fff" }}
                      className="footertext"
                    >
                      Service Tracking Dashboard
                    </a>
                  </div>
                  <div className="col-md-5">
                    <center>
                      <p className="Subscribeinfoheading">
                        Subscribe for more info
                      </p>
                      <div className="input-group Subscribeinfodiv">
                        <input
                          type="email"
                          id="footerEmail"
                          maxLength={50}
                          className="form-control Subscribeemail Subscribeinfoinput"
                          placeholder="email..."
                          style={{ borderColor: "#F4FC40", borderRadius: 40 }}
                          required=""
                        />
                        <div className="input-group-btn">
                          <button
                            id="footersubmitemail"
                            onclick="submitfooteremail()"
                            className="Subscribeinfobutton"
                            type="submit"
                          >
                            <img
                              src={Emailbuttonimg}
                              className="Subscribeinfobuttonimg"
                              loading="lazy"
                            />
                          </button>
                        </div>
                      </div>
                      <p
                        id="footererror"
                        className="Subscribeemail"
                        style={{ color: "#fe0c0c" }}
                      />
                      <br />
                      <p className="Followusheading">Follow us on</p>
                      <a
                        href="https://www.instagram.com/legal251india/"
                        target="_blank"
                      >
                        <img
                          src={FooterInstagram}
                          class="footersocialicon"
                          loading="lazy"
                        />{" "}
                      </a>
                      <a href="https://twitter.com/legal251" target="_blank">
                        <img
                          src={FooterTwitter}
                          class="footersocialicon"
                          loading="lazy"
                        />{" "}
                      </a>
                      <a
                        href="https://www.linkedin.com/company/legal251/"
                        target="_blank"
                      >
                        <img
                          src={FooterLinked}
                          class="footersocialicon"
                          loading="lazy"
                        />{" "}
                      </a>
                      <a
                        href="https://www.facebook.com/legal251"
                        target="_blank"
                      >
                        <img
                          src={FooterFacebook}
                          class=" footersocialicon"
                          loading="lazy"
                        />{" "}
                      </a>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <p className="footerbottomtext" style={{ textAlign: "center" }}>
              © 2023 ISONOMY LEGAL251 Private Limited. All Rights Reserved
            </p>
          </footer>
          <div className="modal fade" id="myModal1" role="dialog">
            <div
              className="modal-dialog modalmainwidth"
              style={{ border: "none" }}
            >
              <div
                className="modal-content"
                style={{ "border-radius": "10px", border: "none" }}
              >
                <div
                  className="modal-header subscribeemailpopupheader"
                  style={{
                    display: "block",
                    border: "none",
                    "background-color": "#2d2d2d",
                    "border-radius": "8px 8px 0 0",
                    "-webkit-box-shadow": "6px 7px 15px -13px rgba(0,0,0,1)",
                    "-moz-box-shadow": "6px 7px 15px -13px rgba(0,0,0,1)",
                    "box-shadow": "6px 7px 15px -13px rgba(0,0,0,1)",
                  }}
                >
                  <img
                    src="images/popupcross2.svg"
                    className="subscribeemailemailpopupclose"
                    style={{
                      position: "absolute",
                      right: "1.9%",
                      top: "0px",
                      "margin-top": "1.4vw",
                    }}
                    data-dismiss="modal"
                    loading="lazy"
                  />
                  <h4 className="subscribeemailpopupheading">
                    Thank you for subscribing newsletter
                  </h4>
                </div>
                <div className="modal-body">
                  <div className="legallandingnorow">
                    <div
                      className="legallandingnocol"
                      style={{
                        padding: "0px 1.46vw",
                        margin: "0px",
                        "vertical-align": "middle",
                      }}
                    >
                      <p className="email-content verificationtext">
                        A verification link
                        <br /> has been sent.
                        <br />
                        Please verify your e-mail address
                      </p>
                    </div>
                    <div className="legallandingnocol">
                      <img
                        src="images/EMAIL.png"
                        className="verificationimg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="myModal1" role="dialog">
            <div
              className="modal-dialog modalmainwidth"
              style={{ border: "none" }}
            >
              <div
                className="modal-content"
                style={{ "border-radius": "10px", border: "none" }}
              >
                <div
                  className="modal-header subscribeemailpopupheader"
                  style={{
                    display: "block",
                    border: "none",
                    "background-color": "#2d2d2d",
                    "border-radius": "8px 8px 0 0",
                    "-webkit-box-shadow": "6px 7px 15px -13px rgba(0,0,0,1)",
                    "-moz-box-shadow": "6px 7px 15px -13px rgba(0,0,0,1)",
                    "box-shadow": "6px 7px 15px -13px rgba(0,0,0,1)",
                  }}
                >
                  <img
                    src="images/popupcross2.svg"
                    className="subscribeemailemailpopupclose"
                    style={{
                      position: "absolute",
                      right: "1.9%",
                      top: "0px",
                      "margin-top": "1.4vw",
                    }}
                    data-dismiss="modal"
                  />
                  <h4 className="subscribeemailpopupheading">
                    Thank you for subscribing newsletter
                  </h4>
                </div>
                <div className="modal-body">
                  <div className="legallandingnorow">
                    <div
                      className="legallandingnocol"
                      style={{
                        padding: "0px 1.46vw",
                        margin: "0px",
                        "vertical-align": "middle",
                      }}
                    >
                      <p className="email-content verificationtext">
                        A verification link
                        <br /> has been sent.
                        <br />
                        Please verify your e-mail address
                      </p>
                    </div>
                    <div className="legallandingnocol">
                      <img src="images/EMAIL.png" className="verificationimg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CmaReport;
