import React, { useEffect, useRef } from "react";
import "./home.css";
import "./css/navbar.css";
import "./css/font/CerebriSans-Bold.ttf";
import "./css/plugins.css";
import "./css/navbar.css";
import "./css/style.css";
import "./css/bootsnav.css";
// import './css/all_calculator.css';
import "./css/animation.css";
import "./css/header.css";
import "./css/Consultancy.css";
import "./css/trackingresponsive.css";
import "./css/tracking.css";
import "./css/textanimation.css";
import "./css/tds_calculator.css";
import "./css/style2.css";
import "./css/services.css";
import "./css/services2.css";
import "./css/select2.css";
import "./css/select3.css";
import "./css/policy.css";
import "./css/owl.theme.default.min.css";
import "./css/owl.carousel.min.css";
import "./css/new-hover.css";
import "./css/lovefromourclient.css";
import Whatsappicon from "./images/whatsapp-icon.svg";

import Group5915 from "./images/icons/Group 5915.svg";
import GroupEmail from "./images/Group_401.svg";

import Group9729 from "./images/review/Group_9729.jpg";
import Consultancyimg from "./images/consultancy.svg";
import Thumbnailimg from "./images/review/Thumbnail_For_Web_copy.jpg";
import Legallogoimg from "./images/review/Group 9575.png";
import Gstimg from "./images/home/GST.jpg";
import Linkedinimg from "./images/sociallinkedin.svg";
import Fbimg from "./images/socialfb.svg";
import Instaimg from "./images/socialinsta.svg";
import Twitterimg from "./images/socialtwitter.svg";
import Emailimg from "./images/subscribeemail.svg";
import CloseImg from "./images/closeicon.svg";
import Email2img from "./images/iconmonstr-email-2.svg";
import SubEmailimg from "./images/subemail.svg";
import GetStartArrow from "./images/getstartedarrow.svg";
import Employeeimg from "./images/companyregimage/employee-experience.png";
import Caseimg from "./images/companyregimage/case-report.png";
import GoldcupImg from "./images/companyregimage/gold-cup.png";
import Customerimg from "./images/companyregimage/customer.png";
import Group82 from "./images/companyregimage/Mask Group 5782.png";
import Preferredimg from "./images/companyregimage/badge-example-preferred.png";
import Userimg from "./images/companyregimage/users.png";
import Polygonimg from "./images/review/Polygon85.svg";
import Layerimg from "./images/review/Layer_2_1_1.svg";
import GroupA from "./images/review/Group_3506_1_1.svg";
import Professonial from "./images/review/proffessional.svg";
import Group3505 from "./images/review/Group3505.svg";
import Group5909 from "./images/review/Group5909.svg";
import Group3507 from "./images/review/Group3507.png";
import Group5912 from "./images/review/Group5912.svg";
import Group9704 from "./images/review/Group9704.png";
import NOpathimg from "./images/review/NoPath.png";
import Group59519 from "./images/review/Group5919.svg";
import Moviesimg from "./images/icons/movie-copyright_1.svg";
import Group9648 from "./images/review/Group9648.svg";
import Taximg from "./images/bookdemo/tax-rates.png";
import TaxPlaningimg from "./images/bookdemo/advance-tax-planning.png";
import Consultantimg from "./images/bookdemo/consultant.png";
import Consulationimg from "./images/bookdemo/health-consultation.png";
// import Layerimg from "./images/bookdemo/Layer%202.png";
import ArrowRightimg from "./images/review/awesome-long-arrow-alt-right.svg";
import Navyimg from "./images/bookdemo/navy-officer.png";
import Illustrationimg from "./images/downloadillustration.png";
import Googleplayimg from "./images/google_play-icon.svg";
import Appleimg from "./images/apple-logo.png";
import Heartimg from "./images/bookdemo/heart.svg";
import Kailashimg from "./images/bookdemo/Kailash_Chandra_Verma.jpg";
import Quoteimg from "./images/bookdemo/quote.svg";
import Gruoup9638 from "./images/review/Group9648.svg";
import Virendraimg from "./images/bookdemo/Virendra_Vishwkarma.jpg";
import Quoteimg2 from "./images/bookdemo/quote.svg";
import Thumbnailimg2 from "./images/review/Thumbnail_For_Web_copy1.jpg";
import Thumbnailimg3 from "./images/review/Thumbnail_For_Web_copy2.jpg";
import Reviesimg from "./images/review/Group9648.svg";
import Priyankaimg from "./images/bookdemo/PriyankaVerma.jpg";
import Monuimg from "./images/bookdemo/Monu_Panchal.jpg";
import Clientsimg from "./images/clients/1.png";
import Clientsimg2 from "./images/clients/2.png";
import Clientsimg3 from "./images/clients/3.png";
import Clientsimg4 from "./images/clients/4.png";
import Clientsimg5 from "./images/clients/5.png";
import Clientsimg6 from "./images/clients/6.png";
import Clientsimg7 from "./images/clients/7.png";
import Clientsimg8 from "./images/clients/8.png";
import Clientsimg9 from "./images/clients/9.png";
import Clientsimg10 from "./images/clients/10.png";
import Clientsimg11 from "./images/clients/11.png";
import Clientsimg12 from "./images/clients/12.png";
import Clientsimg13 from "./images/clients/13.png";
import Group9961 from "./images/bookdemo/Group_9961.png";
import Group9730 from "./images/bookdemo/Group_9730.png";
import Titleimg1 from "./images/bookdemo/tile1.png";
import Titleimg2 from "./images/bookdemo/tile2.png";
import Titleimg3 from "./images/bookdemo/tile3.png";
import Titleimg4 from "./images/bookdemo/tile4.png";
import Titleimg5 from "./images/bookdemo/tile1.png";
import Titleimg6 from "./images/bookdemo/tile2.png";
import Titleimg7 from "./images/bookdemo/tile3.png";
import Titleimg8 from "./images/bookdemo/tile4.png";
import Titleimg9 from "./images/bookdemo/tile1.png";
import Titleimg10 from "./images/bookdemo/tile2.png";
import Whatisimg from "./images/What is legal251.jpg";
import Legalconsultancy from "./images/how to get consultancy.jpg";
import Legalworkimg from "./images/how legal251 works.jpg";
import Onlineimg from "./images/online acc.jpg";
import Trackimg from "./images/Track consultancy service.jpg";
import Supportimg from "./images/widget-image-support-1.svg";
import Whatsappimg2 from "./images/whatsapp-icon.svg";
import Group9801img from "./images/bookdemo/Group_9801.svg";
import Group209801 from "./images/bookdemo/Group 9801.png";
import Ressponimg from "./images/bookdemo/resspon_Group_9962.png";
import Group97982 from "./images/bookdemo/Group_97982x.png";
import Typewriter from "typewriter-effect";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Group5911img from "./images/review/Group5911.png";
import Group5913img from "./images/review/Group5913.svg";
import Group5916img from "./images/icons/Group 5916.svg";
import Group5645img from "./images/icons/Group_5645_1.svg";
import Group5631img from "./images/icons/Group_5631_1.svg";
import Group5920img from "./images/icons/Group 5920.svg";
import { Link } from "react-router-dom";

export default function Home() {
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
    <div style={{ position: "relative", overflowX: "hidden" }}>
      


      <div className="sidesocialicon">
        <Link to="https://www.linkedin.com/company/legal251/" target="_blank">
          <img src={Linkedinimg} className="socialicon" />
        </Link>
        <Link to="https://www.facebook.com/legal251" target="_blank">
          <img src={Fbimg} className="socialicon" />
        </Link>
        <Link to="https://www.instagram.com/legal251india/" target="_blank">
          <img src={Instaimg} className="socialicon" />
        </Link>
        <Link to="https://twitter.com/legal251" target="_blank">
          <img src={Twitterimg} className="socialicon" />
        </Link>
        <img src={Emailimg} className="subscribeemail" />
      </div>
      <div className="subscribeemailpopup">
        <img src={CloseImg} className="subscribeemailpopupclose" />
        <p className="subscribeemailpopuptext">
          <img className="emailicon" src={Email2img} />
          Subscribe to Legal <br />
          updates from Legal251
        </p>
        <div className="popupinside">
          <input
            type="email"
            name="userEmail"
            maxLength={50}
            id="userEmail"
            className="subscribeemailpopupinput"
            placeholder="email"
            required=""
          />
          <button
            className="subscribeemailpopupbutton"
            id="emailsubmit"
            type="submit"
            onclick="submitemail()"
          >
            <img src={SubEmailimg} className="subscribeemailpopupbuttonimg" />
          </button>
        </div>
      </div>
      <div className="row landingpagerow" style={{ marginTop: 74 }}>
        <div className="col-12 col-sm-12 col-md-7 col-lg-7">
          <br />
          {/* <p className="legalmainheading legalmainheadingres autotype">
          Lorem ipsum, dolor sit Lorem 
          ipsum, dolor
          </p> */}

          <div className="typeitheading">
            <Typewriter
              options={{
                strings: [
                  "One-Stop Solution to All  Your  Legal Problems",
                  "Get Your Personal Legal Advisor ",
                  "Now Legal is Always On  Your Phone",
                ],
                autoStart: true,
                loop: true,
                typeSpeed: 50,
              }}
            />
          </div>
          <br />

          <br />
          <center>
            <div className="row experiencecustomcolrow expsecmobres " id="">
              <div id="reviews-exp" className="">
                <Slider {...settings1}>
                  <div className="experiencedisplay ourexp">
                    <div className="expimg">
                      <img
                        src={Employeeimg}
                        className="experienceimghome"
                        alt=""
                      />
                    </div>

                    <div className="experiencedisplaycol2 experiencedisplaycolres">
                      <p className="experienceheading2">
                        Years Of Experience
                      </p>
                    </div>
                  </div>

                  <div className="experiencedisplay ourexp">
                    <div className="expimg">
                      <img
                        src={Caseimg}
                        className="experienceimghome"
                        alt=""
                      />
                    </div>
                    <div className="experiencedisplaycol2 experiencedisplaycolres">
                      {/* <p
                        className="experienceheading"
                        style={{ width: 90 }}
                      ></p> */}
                      {/* <p className="experienceheading experience1" />
                      <span className="experienceheading">+</span>
                      <p /> */}
                      <p className="experienceheading2">Cases Solved</p>
                    </div>
                  </div>

                  <div className="experiencedisplay ourexp">
                    <div className="expimg">
                      <img
                        src={GoldcupImg}
                        className="experienceimghome"
                        alt=""
                      />
                    </div>
                    <div className="experiencedisplaycol2 experiencedisplaycolres">
                      {/* <p
                        className="experienceheading"
                        style={{ width: 90 }}
                      ></p> */}
                      {/* <p className="experienceheading experience2" />
                      <span className="experienceheading">+</span>
                      <p /> */}
                      <p className="experienceheading2">Awards Gained</p>
                    </div>
                  </div>

                  <div className="experiencedisplay ourexp">
                    <div className="expimg">
                      <img
                        src={Userimg}
                        className="experienceimghome"
                        alt=""
                      />
                    </div>
                    <div className="experiencedisplaycol2 experiencedisplaycolres">
                      {/* <p
                        className="experienceheading"
                        style={{ width: 90 }}
                      ></p>
                      <p className="experienceheading experience3" />
                      <span className="experienceheading"> k+</span>
                      <p />
                      <p /> */}
                      <p className="experienceheading2">Trusted Clients</p>
                    </div>
                  </div>

                  <div className="experiencedisplay ourexp">
                    <div className="expimg">
                      <img
                        src={Customerimg}
                        className="experienceimghome"
                        alt=""
                      />
                    </div>
                    <div className="experiencedisplaycol2 experiencedisplaycolres">
                      {/* <p
                        className="experienceheading"
                        style={{ width: 90 }}
                      ></p>
                      <p className="experienceheading experience4" />
                      <span className="experienceheading"> k+</span>
                      <p />
                      <p /> */}
                      <p className="experienceheading2">Queries Solved</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
{/* 
            <div className="quotesdiv quotesdivres">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 colpaddingzero2">
                  <p className="comapnydownloadappline comapnydownloadapplineres">
                    Download Legal251 App Now!
                  </p>
                  <Link
                    target="_blank"
                    to="https://play.google.com/store/apps/details?id=com.legal251.in"
                  >
                    <img src={Group82} className="getitgoogleplayimg" />
                  </Link>
                  <Link
                    target="_blank"
                    to="https://apps.apple.com/in/app/legal251-legal-service-more/id6443916709"
                  >
                    <img src={Preferredimg} className="getitplaystoreimg" />
                  </Link>
                </div>
              </div>
            </div> */}
          </center>
        </div>

        <div className="col-12 col-sm-12 col-md-5 col-lg-5">
          <input
            type="text"
            id="input"
            className="Searchbar ressearchbar"
            name="search_entered"
            autoComplete="off"
            placeholder="Search.."
          />
          <div className="data"></div>

          <div className="getConsultancybuttondiv getConsultancybuttondiv1 getconsultancyformres">
            <div className="companyformouterdiv companyformouterdiv1 companyformouterdivres">
              <div
                className="companyformdiv"
                style={{ marginTop: 0, paddingBottom: 20, paddingTop: 10 }}
              >
                <h1
                  className="cd-headline push getConsultancyformheading"
                  style={{ lineHeight: "1.3" }}
                >
                  <span>
                    Get your queries solved by
                    <br />
                  </span>
                  <span className="cd-words-wrapper">
                    <b className="is-visible" style={{ color: "#0080ff" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Consultant
                    </b>
                    <b style={{ color: "#f8951d" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lawyer
                    </b>
                    <b style={{ color: "#f8951d" }}>Chartered Accountant </b>
                    <b style={{ color: "#f8951d" }}>Company Secretary </b>
                  </span>
                </h1>
                <p className="companyformtext">
                  Name <span className="menstar">*</span>
                </p>
                <input
                  type="text"
                  className="companyforminput"
                  placeholder="Enter your name"
                  style={{ textTransform: "capitalize" }}
                  data-rule="minlen:4"
                  maxLength={150}
                  pattern="[A-Za-z ]{3,150}"
                  id="inputName"
                  required=""
                />
                <p className="companyformtext">
                  Email <span className="menstar">*</span>
                </p>
                <input
                  type="text"
                  className="companyforminput"
                  placeholder="Enter your Email"
                  maxLength={50}
                  id="inputEmail"
                  required=""
                />
                <p className="companyformtext">
                  Contact Number <span className="menstar">*</span>
                </p>
                <input
                  type="text"
                  className="companyforminput"
                  placeholder="Enter your Contact Number"
                  pattern="[6-9]{1}[0-9]{9}"
                  maxLength={10}
                  id="inputphone"
                  required=""
                />
                <p className="companyformtext">
                  Related To <span className="menstar">*</span>
                </p>
                <select
                  id="inputrelatedto"
                  className="companyforminput"
                  required=""
                >
                  <option value="" disabled="" selected="">
                    Related to
                  </option>
                  <option value="AD" style={{ color: "#000000" }}>
                    Lawyer
                  </option>
                  <option value="CA" style={{ color: "#000000" }}>
                    Chartered Accountant
                  </option>
                  <option value="CS" style={{ color: "#000000" }}>
                    Company Secretary
                  </option>
                  <option value="NS" style={{ color: "#000000" }}>
                    Not sure
                  </option>
                </select>
                <div
                  style={{ width: "100%", margin: 0, padding: 0, left: 0 }}
                >
                  <p className="errormessage">
                    <img src={GroupEmail} className="errormessageimg" />
                  </p>
                </div>
                <center>
                  <button
                    className="companyformbtn companyformbtn1 companyformbtn2"
                    style={{ marginTop: 35, marginBottom: 0 }}
                    onclick="submitContactForm()"
                    id="submit"
                  >
                    <img
                      src={Consultancyimg}
                      className="getConsultancybuttonimg"
                    />
                    &nbsp; GET CONSULTANCY
                  </button>
                  <img
                    className="loader1"
                    style={{ display: "none" }}
                    src="images/homecontact/Rolling.svg"
                    alt=""
                  />
                </center>
              </div>
            </div>
          </div>

          {/* <div style={{ paddingRight: "3.3vw" }}>
            <center>
              <button
                className="getstartedbutton getstartbtnres"
                style={{ marginTop: 50 }}
              >
                <span style={{ textDecoration: "underline" }}>
                  Get Started
                </span>{" "}
                <span className="getstartedbuttondiv">
                  <img src={GetStartArrow} className="getstartedbuttonicon" />
                </span>
              </button>
            </center>
          </div> */}
        </div>
      </div>
      <section className="section4">
        <div
          className="row allcontent allcontent1"
          style={{ paddingTop: 85 }}
        >
          <div className="dourser">
            <h4 className="dislegalser">
              <img className="dlstar" src={Polygonimg} />
              <span className="discovery headeranamition">Discover</span> 251+
              legal services over one platform{" "}
              <img className="drstar" src={Polygonimg} loading="lazy" />
            </h4>

            {/* Legal Services Carousel  part start */}
       

           <div className="servicecardanimationpadd">
              <div
                id="owl-carousel1"
                className="owl-carousel servicecaroselpadding"
              >
              
                  <div className="row marlr1">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space space1">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="online-accounting.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{}}
                                    src={Layerimg}
                                    loading="lazy"
                                    alt=""
                                  />
                                </div>
                                <p className="Owl_Para">
                                  {" "}
                                  Online <br /> Accounting
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="msme-udhyam-registration.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src={Group5911img}
                                    loading="lazy"
                                    alt=""
                                  />
                                </div>
                                <p
                                  className="Owl_Para"
                                  style={{ marginBottom: 10 }}
                                >
                                  {" "}
                                  MSME
                                  <br />
                                  Registration
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                  </div>

                  <div className="row marlr1">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space space1">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="gst-return-filing.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{}}
                                    src={GroupA}
                                    loading="lazy"
                                    alt=""
                                  />
                                </div>
                                <p className="Owl_Para">
                                  {" "}
                                  GST Return <br />
                                  Filing
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="professional-tax-registration.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src={Professonial}
                                    loading="lazy"
                                    alt=""
                                  />
                                </div>
                                <p
                                  className="Owl_Para"
                                  style={{ marginBottom: 10 }}
                                >
                                  {" "}
                                  Professional
                                  <br /> Tax Registration
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                  </div>
                  <div className="row marlr1">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space space1">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="gst-registration.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{}}
                                    src={Group3505}
                                    loading="lazy"
                                    alt=""
                                  />
                                </div>
                                <p className="Owl_Para">
                                  {" "}
                                  GST
                                  <br /> Registration
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="icegate-registration.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src={Group5909}
                                    loading="lazy"
                                    alt=""
                                  />
                                </div>
                                <p
                                  className="Owl_Para"
                                  style={{ marginBottom: 10 }}
                                >
                                  {" "}
                                  ICEGATE
                                  <br />
                                  Registration
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                  </div>
                  <div className="row marlr1">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space space1">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="income-tax-return-filing.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 24,
                                      width: "auto !important",
                                    }}
                                    src={Group3507}
                                    loading="lazy"
                                    alt=""
                                  />
                                </div>
                                <p className="Owl_Para">
                                  {" "}
                                  Income Tax <br />
                                  Return Filing
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="society-registration.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src={Group5912}
                                    loading="lazy"
                                    alt=""
                                  />
                                </div>
                                <p
                                  className="Owl_Para"
                                  style={{ marginBottom: 10 }}
                                >
                                  {" "}
                                  Society
                                  <br />
                                  Registration
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                  </div>
                  <div className="row marlr1">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="trademark-registration.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src={Group9704}
                                    loading="lazy"
                                    alt=""
                                  />
                                </div>
                                <p className="Owl_Para">
                                  {" "}
                                  Trademark <br />
                                  Registration
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="pf-registration.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src={Group5913img}
                                    loading="lazy"
                                    alt=""
                                  />
                                </div>
                                <p
                                  className="Owl_Para"
                                  style={{ marginBottom: 10 }}
                                >
                                  {" "}
                                  PF <br />
                                  Registration
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                  </div>
                  <div className="row marlr1">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="import-export-license.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src={NOpathimg}
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <p className="Owl_Para">
                                  {" "}
                                  Import Export <br /> License
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space space1">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="noc-no-objection-certificate.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src={Group59519}
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <p
                                  className="Owl_Para"
                                  style={{ marginBottom: 10 }}
                                >
                                  {" "}
                                  NOC <br />
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                  </div>
                  <div className="row marlr1">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="partnership-deed.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src={Group5916img}
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <p className="Owl_Para">
                                  {" "}
                                  Partnership <br />
                                  Deed
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="/DissolutionOfDeed">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src="./Draftingimages/icons/Group%205917.svg"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <p
                                  className="Owl_Para"
                                  style={{ marginBottom: 10 }}
                                >
                                  {" "}
                                  Dissolution
                                  <br /> Of Deeds
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                  </div>
                  <div className="row marlr1">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="food-licence.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src={Group5645img}
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <p className="Owl_Para">
                                  {" "}
                                  Food <br />
                                  Licence
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="trade-licence.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src={Group5631img}
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <p
                                  className="Owl_Para"
                                  style={{ marginBottom: 10 }}
                                >
                                  {" "}
                                  Trade <br />
                                  Licence
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                  </div>
                  <div className="row marlr1">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="food-licence.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src={Moviesimg}
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <p className="Owl_Para">
                                  {" "}
                                  Legal <br />
                                  Drafting
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="trade-licence.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    // src={Group5918img}
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <p
                                  className="Owl_Para"
                                  style={{ marginBottom: 10 }}
                                >
                                  {" "}
                                  Rent <br />
                                  Agreement
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                  </div>
                  <div className="row marlr1">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space space1">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="affidavit.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src={Group5920img}
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <p className="Owl_Para"> Affidavit</p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="power-of-attorney.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src="images/icons/Group%205921.svg"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <p
                                  className="Owl_Para"
                                  style={{ marginBottom: 10 }}
                                >
                                  {" "}
                                  Power <br />
                                  of Attorney
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                  </div>
                  <div className="row marlr1">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space space1">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="will.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src="images/icons/NoPath%20-%20Copy%20(17).svg"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <p className="Owl_Para"> Will</p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                      <center>
                        <div className="space">
                          <div className="owl_data OwLData">
                            <div className="new1">
                              <Link to="power-of-attorney.html">
                                <div className="new2">
                                  <img
                                    className="Owl_img"
                                    style={{
                                      marginTop: 30,
                                      width: "auto !important",
                                    }}
                                    src="images/icons/appf.png"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <p
                                  className="Owl_Para"
                                  style={{ marginBottom: 10 }}
                                >
                                  {" "}
                                  Application <br />
                                  Form
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                  </div>
              
              </div>
            </div> 

            <hr className="reviewhr" style={{ color: "#F8951D" }} />
            <div className="disbottom">
              <div className="row marlr">
                <div className="col-12 col-sm-12 col-mg-12 col-lg-6 marlr">
                  <div id="owl-demo" className="owl-carousel owl-theme">
                    <div className="item">
                      <div className=" contenthead contenthead1">
                        <div className="">
                          <div className="mobstar">
                            <div>
                              <h5 className="conhead">Ramika Khandelwal</h5>
                            </div>
                            <div className="ratestar revratestar1">
                              <div>
                                <img
                                  className=""
                                  style={{ marginRight: 5 }}
                                  src={Group9648}
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                              <div>
                                <p className="amazplat">"Amazing Platform"</p>
                              </div>
                            </div>
                          </div>
                          <p className="conp">Proprietor , Balaji Apparels</p>
                        </div>
                      </div>
                      <div>
                        <p className="ptext ptext1">
                          I recently had the opportunity to utilize the online
                          legal services provided by Legal251, and I must say
                          that I am thoroughly impressed. As someone who
                          needed legal assistance but couldn't spare the time
                          for in-person consultations, their online platform
                          proved to be a convenient and efficient solution.
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className=" contenthead contenthead1">
                        <div className="">
                          <div className="mobstar">
                            <div>
                              <h5 className="conhead">Mukesh Tiwari</h5>
                            </div>
                            <div className="ratestar revratestar1">
                              <div>
                                <img
                                  className=""
                                  style={{ marginRight: 5 }}
                                  src="images/review/Group9648.svg"
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                              <div>
                                <p className="amazplat">"Amazing Platform"</p>
                              </div>
                            </div>
                          </div>
                          <p className="conp">
                            Founder &amp; CEO Bharatmat.co
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="ptext ptext1">
                          Right from the start, the website was user-friendly
                          and intuitive, making it easy to navigate and find
                          the information I needed. The process of submitting
                          my legal request was straightforward, and I
                          appreciated the option to provide relevant documents
                          electronically, saving me the hassle of scanning or
                          mailing physical copies.
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className=" contenthead contenthead1">
                        <div className="">
                          <div className="mobstar">
                            <div>
                              <h5 className="conhead">Deepak Agrawal</h5>
                            </div>
                            <div className="ratestar revratestar1">
                              <div>
                                <img
                                  className=""
                                  style={{ marginRight: 5 }}
                                  src="images/review/Group9648.svg"
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                              <div>
                                <p className="amazplat">"Amazing Platform"</p>
                              </div>
                            </div>
                          </div>
                          <p className="conp">CEO DLX.Pvt.Ltd</p>
                        </div>
                      </div>
                      <div>
                        <p className="ptext ptext1">
                          Another noteworthy aspect of Legal251's service was
                          the transparency regarding fees and costs. I
                          received a detailed breakdown of the expected
                          expenses upfront, allowing me to make informed
                          decisions. The pricing was fair and competitive,
                          especially considering the high-quality legal
                          representation I received.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-mg-12 col-lg-6 paddmarlr">
                  <div className="greview">
                    <div>
                      <img
                        className="greviewimg"
                        src="images/review/Group9675.png"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    {/* <div className="viewbtndiv">
                      <button className="viewbtn">
                        <img
                          style={{ marginLeft: 10 }}
                          src={ArrowRightimg}
                          alt=""
                          className="arrowbtn1"
                          loading="lazy"
                        />{" "}
                        <br className="arrowbtn1" />
                        View All{" "}
                        <img
                          style={{ marginLeft: 10 }}
                          src="images/review/awesome-long-arrow-alt-right.svg"
                          alt=""
                          className="arrowbtn"
                          loading="lazy"
                        />
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br /> <br />
      <section>
        <div className="servicebackimg">
          <div className="servicesection">
            <center>
              <div
                id="sercice-sec-carosel"
                className="owl-carousel owl-theme"
              >
                <div>
                  <div
                    className="nav-link space clickborderch1 active show"
                    data-target="#gst-registr"
                    data-toggle="tab"
                  >
                    <div className="owl_data OwLData">
                      <div className="new1">
                        <Link to="power-of-attorney.html">
                          <div className="new2">
                            <img
                              className="Owl_img"
                              style={{
                                marginTop: 30,
                                width: "auto !important",
                              }}
                              src="images/icons/Group%205915.svg"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <p
                            className="Owl_Para"
                            style={{ marginBottom: 10 }}
                          >
                            {" "}
                            GST
                            <br />
                            Registration
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="border border1" />
                  </div>
                </div>
                <div>
                  <div
                    className="nav-link space clickborderch2"
                    data-target="#gst-return-filing"
                    data-toggle="tab"
                  >
                    <div className="owl_data OwLData">
                      <div className="new1">
                        <Link to="power-of-attorney.html">
                          <div className="new2">
                            <img
                              className="Owl_img"
                              style={{
                                marginTop: 30,
                                width: "auto !important",
                              }}
                              src="images/icons/Group_3506_1.svg"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <p
                            className="Owl_Para"
                            style={{ marginBottom: 10 }}
                          >
                            {" "}
                            GST Return
                            <br />
                            Filing
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="border border2" />
                  </div>
                </div>
                <div>
                  <div
                    className="nav-link space clickborderch3"
                    data-target="#itr-filing"
                    data-toggle="tab"
                  >
                    <div className="owl_data OwLData">
                      <div className="new1">
                        <Link to="power-of-attorney.html">
                          <div className="new2">
                            <img
                              className="Owl_img"
                              style={{
                                marginTop: 30,
                                width: "auto !important",
                              }}
                              src="images/icons/Group_3507_1.svg"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <p
                            className="Owl_Para"
                            style={{ marginBottom: 10 }}
                          >
                            ITR <br />
                            Filing
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="border border3" />
                  </div>
                </div>
                <div>
                  <div
                    className="nav-link space clickborderch4"
                    data-target="#online-acc"
                    data-toggle="tab"
                  >
                    <div className="owl_data OwLData">
                      <div className="new1">
                        <Link to="power-of-attorney.html">
                          <div className="new2">
                            <img
                              className="Owl_img"
                              style={{
                                marginTop: 30,
                                width: "auto !important",
                              }}
                              src="images/icons/Layer_2_1.svg"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <p
                            className="Owl_Para"
                            style={{ marginBottom: 10 }}
                          >
                            {" "}
                            Online
                            <br />
                            Accounting
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="border border4" />
                  </div>
                </div>
                <div>
                  <div
                    className="nav-link space clickborderch5"
                    data-target="#teademark-reg"
                    data-toggle="tab"
                  >
                    <div className="owl_data OwLData">
                      <div className="new1">
                        <Link to="power-of-attorney.html">
                          <div className="new2">
                            <img
                              className="Owl_img"
                              style={{
                                marginTop: 30,
                                width: "auto !important",
                              }}
                              src="images/icons/Group_3625_2.svg"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <p
                            className="Owl_Para"
                            style={{ marginBottom: 10 }}
                          >
                            Trademark <br />
                            Registration
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="border border5" />
                  </div>
                </div>
                <div>
                  <div
                    className="nav-link space clickborderch6"
                    data-target="#gumasta-lic"
                    data-toggle="tab"
                  >
                    <div className="owl_data OwLData">
                      <div className="new1">
                        <Link to="power-of-attorney.html">
                          <div className="new2">
                            <img
                              className="Owl_img"
                              style={{
                                marginTop: 30,
                                width: "auto !important",
                              }}
                              src="images/icons/Group_5632_1.svg"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <p
                            className="Owl_Para"
                            style={{ marginBottom: 10 }}
                          >
                            Gumasta <br />
                            Licence(S &amp; E)
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="border border6" />
                  </div>
                </div>
                <div>
                  <div
                    className="nav-link space clickborderch7"
                    data-target="#food-lic"
                    data-toggle="tab"
                  >
                    <div className="owl_data OwLData">
                      <div className="new1">
                        <Link to="power-of-attorney.html">
                          <div className="new2">
                            <img
                              className="Owl_img"
                              style={{
                                marginTop: 30,
                                width: "auto !important",
                              }}
                              src="images/icons/Group_5645_1.svg"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <p
                            className="Owl_Para"
                            style={{ marginBottom: 10 }}
                          >
                            Food
                            <br />
                            Licence
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="border border7" />
                  </div>
                </div>
                <div>
                  <div
                    className="nav-link space clickborderch8"
                    data-target="#trade-lic"
                    data-toggle="tab"
                  >
                    <div className="owl_data OwLData">
                      <div className="new1">
                        <Link to="power-of-attorney.html">
                          <div className="new2">
                            <img
                              className="Owl_img"
                              style={{
                                marginTop: 30,
                                width: "auto !important",
                              }}
                              src="images/icons/Group_5631_1.svg"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <p
                            className="Owl_Para"
                            style={{ marginBottom: 10 }}
                          >
                            Trade
                            <br />
                            Licence
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="border border8" />
                  </div>
                </div>
              </div>
            </center>
          </div>
          <div className="servicesection servicesection1">
            <div id="tabsContent" className="tab-content">
              <div id="gst-registr" className="row tab-pane fade active in">
                <div className="col-4 col-md-3">
                  <div className="">
                    <img
                      src={Gstimg}
                      className="legalcardcaroseldivimg serviceimage"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <div className=" ">
                    <div className="legalcardcaroselheadingdiv">
                      <div className="col-md-5">
                        <p className="legalcardcaroselheading serviceheading">
                          {" "}
                          GST Registration{" "}
                        </p>
                      </div>
                      <div className="col-md-7">
                        <p
                          className="cardflowtext cardflowtext1"
                          style={{ display: "block" }}
                        >
                          <span style={{ color: "#2d2d2d" }}>
                            Time required: 6-7 d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                          <span>
                            <span
                              style={{
                                color: "#2d2d2d",
                                borderLeft: "1px solid #2d2d2d",
                              }}
                            >
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                            </span>
                            <span style={{ color: "#f8951d" }}>
                              &nbsp;₹2251
                            </span>{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <p className="legalcardcontain legalcardcontain1">
                      Register yourself as a trusted business of this country
                      with GST online in minutes. Ask our experts to guide you
                      for an easy GST Registration.{" "}
                    </p>
                  </div>
                  <div>
                    <p
                      className="cardflowtext cardflowtext1 cardflowtext2"
                      style={{ display: "block" }}
                    >
                      <i
                        className="fa fa-circle circlebullet"
                        style={{ visibility: "hidden" }}
                      />
                      Register now &gt; Submit documents &gt; Filing process
                      &gt; GST No. is ready
                    </p>
                    <button
                      className="companyformbtn"
                      style={{ marginLeft: "2vw", height: 45 }}
                      id="submit"
                    >
                      <Link
                        style={{ color: "#FAFAFA" }}
                        to="gst-registration.html"
                        target="_blank"
                      >
                        {" "}
                        Get Started{" "}
                      </Link>
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
              <div id="gst-return-filing" className="row tab-pane fade">
                <div className="col-4 col-md-3">
                  <div className="">
                    <img
                      src="images/home/GSTR.jpg"
                      className="legalcardcaroseldivimg serviceimage"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <div className=" ">
                    <div className="legalcardcaroselheadingdiv">
                      <div className="col-md-5">
                        <p className="legalcardcaroselheading serviceheading">
                          {" "}
                          GST Return Filing{" "}
                        </p>
                      </div>
                      <div className="col-md-7">
                        <p
                          className="cardflowtext cardflowtext1"
                          style={{ display: "block" }}
                        >
                          <span style={{ color: "#2d2d2d" }}>
                            {" "}
                            Time taken: Plan
                            based&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                          <span>
                            <span
                              style={{
                                color: "#2d2d2d",
                                borderLeft: "1px solid #2d2d2d",
                              }}
                            >
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                            </span>
                            <span style={{ color: "#f8951d" }}>
                              &nbsp;₹751
                            </span>{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <p className="legalcardcontain legalcardcontain1">
                      Stay ahead of deadlines and file your returns on time
                      with an all-time available team. Start Playing it safe
                      now.{" "}
                    </p>
                  </div>
                  <div>
                    <p
                      className="cardflowtext cardflowtext1 cardflowtext2"
                      style={{ display: "block" }}
                    >
                      <i
                        className="fa fa-circle circlebullet"
                        style={{ visibility: "hidden" }}
                      />
                      Choose plan &gt; Submit documents &gt; Verify document
                      &gt; Return filed
                    </p>
                    <button
                      className="companyformbtn"
                      style={{ marginLeft: "2vw", height: 45 }}
                      id="submit"
                    >
                      <Link
                        style={{ color: "#FAFAFA" }}
                        to="gst-return-filing.html"
                        target="_blank"
                      >
                        {" "}
                        Get Started{" "}
                      </Link>
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
              <div id="itr-filing" className="row tab-pane fade">
                <div className="col-4 col-md-3">
                  <div className="">
                    <img
                      src="images/home/ITR.jpg"
                      className="legalcardcaroseldivimg serviceimage"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <div className=" ">
                    <div className="legalcardcaroselheadingdiv">
                      <div className="col-md-5">
                        <p className="legalcardcaroselheading serviceheading">
                          ITR Filing
                        </p>
                      </div>
                      <div className="col-md-7">
                        <p
                          className="cardflowtext cardflowtext1"
                          style={{ display: "block" }}
                        >
                          <span style={{ color: "#2d2d2d" }}>
                            {" "}
                            Time taken: Plan
                            based&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                          <span>
                            <span
                              style={{
                                color: "#2d2d2d",
                                borderLeft: "1px solid #2d2d2d",
                              }}
                            >
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                            </span>
                            <span style={{ color: "#f8951d" }}>
                              &nbsp;₹590
                            </span>{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <p className="legalcardcontain legalcardcontain1">
                      Simply fill any type of Tax Return like salary tax,
                      capital gains, business, professional or property taxes.
                      Comprehensive Tax return services at your fingertips.
                    </p>
                  </div>
                  <div>
                    <p
                      className="cardflowtext cardflowtext1 cardflowtext2"
                      style={{ display: "block" }}
                    >
                      <i
                        className="fa fa-circle circlebullet"
                        style={{ visibility: "hidden" }}
                      />
                      Choose plan &gt; Submit documents &gt; Verify document
                      &gt; Return filed
                    </p>
                    <button
                      className="companyformbtn"
                      style={{ marginLeft: "2vw", height: 45 }}
                      id="submit"
                    >
                      <Link
                        style={{ color: "#FAFAFA" }}
                        to="income-tax-return-filing.html"
                        target="_blank"
                      >
                        {" "}
                        Get Started{" "}
                      </Link>
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
              <div id="online-acc" className="row tab-pane fade">
                <div className="col-4 col-md-3">
                  <div className="">
                    <img
                      src="images/home/Acc.jpg"
                      className="legalcardcaroseldivimg serviceimage"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <div className=" ">
                    <div className="legalcardcaroselheadingdiv">
                      <div className="col-md-5">
                        <p className="legalcardcaroselheading serviceheading">
                          Online Accounting
                        </p>
                      </div>
                      <div className="col-md-7">
                        <p
                          className="cardflowtext cardflowtext1"
                          style={{ display: "block" }}
                        >
                          <span style={{ color: "#2d2d2d" }}>
                            {" "}
                            Time taken: Plan
                            based&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                          <span>
                            <span
                              style={{
                                color: "#2d2d2d",
                                borderLeft: "1px solid #2d2d2d",
                              }}
                            >
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                            </span>
                            <span style={{ color: "#f8951d" }}>
                              &nbsp;₹1451
                            </span>{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <p className="legalcardcontain legalcardcontain1">
                      We offer overall cashflow management and tracking along
                      with payroll services. Enhance your productivity and let
                      Legal251 handle your accounting.
                    </p>
                  </div>
                  <div>
                    <p
                      className="cardflowtext cardflowtext1 cardflowtext2"
                      style={{ display: "block" }}
                    >
                      <i
                        className="fa fa-circle circlebullet"
                        style={{ visibility: "hidden" }}
                      />
                      Register now &gt; Choose type &gt; Submit documents &gt;
                      Accounts managed
                    </p>
                    <button
                      className="companyformbtn"
                      style={{ marginLeft: "2vw", height: 45 }}
                      id="submit"
                    >
                      <Link
                        style={{ color: "#FAFAFA" }}
                        to="online-accounting.html"
                        target="_blank"
                      >
                        {" "}
                        Get Started{" "}
                      </Link>
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
              <div id="teademark-reg" className="row tab-pane fade">
                <div className="col-4 col-md-3">
                  <div className="">
                    <img
                      src="images/home/TM.jpg"
                      className="legalcardcaroseldivimg serviceimage"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <div className=" ">
                    <div className="legalcardcaroselheadingdiv">
                      <div className="col-md-6">
                        <p className="legalcardcaroselheading serviceheading">
                          Trademark Registration
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p
                          className="cardflowtext cardflowtext1"
                          style={{ marginLeft: "0vw", display: "block" }}
                        >
                          <span style={{ color: "#2d2d2d" }}>
                            Time taken: 1-2 d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                          <span>
                            <span
                              style={{
                                color: "#2d2d2d",
                                borderLeft: "1px solid #2d2d2d",
                              }}
                            >
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                            </span>
                            <span style={{ color: "#f8951d" }}>
                              &nbsp;₹2251
                            </span>{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <p className="legalcardcontain legalcardcontain1">
                      We offer overall cashflow management and tracking along
                      with payroll services. Enhance your productivity and let
                      Legal251 handle your accounting.
                    </p>
                  </div>
                  <div>
                    <p
                      className="cardflowtext cardflowtext1 cardflowtext2"
                      style={{ display: "block" }}
                    >
                      <i
                        className="fa fa-circle circlebullet"
                        style={{ visibility: "hidden:" }}
                      />
                      Register now &gt; Submit documents &gt; Complete
                      verification &gt; Trademark applied
                    </p>
                    <button
                      className="companyformbtn"
                      style={{ marginLeft: "2vw", height: 45 }}
                      id="submit"
                    >
                      <Link
                        style={{ color: "#FAFAFA" }}
                        to="trademark-registration.html"
                        target="_blank"
                      >
                        {" "}
                        Get Started{" "}
                      </Link>
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
              <div id="gumasta-lic" className="row tab-pane fade">
                <div className="col-4 col-md-3">
                  <div className="">
                    <img
                      src="images/home/Guamsta.jpg"
                      className="legalcardcaroseldivimg serviceimage"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <div className=" ">
                    <div className="legalcardcaroselheadingdiv">
                      <div className="col-md-6">
                        <p className="legalcardcaroselheading serviceheading">
                          Gumasta Licence (S &amp; E)
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p
                          className="cardflowtext cardflowtext1"
                          style={{ marginLeft: "0vw", display: "block" }}
                        >
                          <span style={{ color: "#2d2d2d" }}>
                            {" "}
                            Time taken: 3-8 d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                          <span>
                            <span
                              style={{
                                color: "#2d2d2d",
                                borderLeft: "1px solid #2d2d2d",
                              }}
                            >
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                            </span>
                            <span style={{ color: "#f8951d" }}>
                              &nbsp;₹751
                            </span>{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <p className="legalcardcontain legalcardcontain1">
                      Apply for Gumasta Licence or Shop &amp; Establishment
                      Certificate online &amp; get hassle-free services. Get
                      your Shop registered with a hassle-free process.
                    </p>
                  </div>
                  <div>
                    <p
                      className="cardflowtext cardflowtext1 cardflowtext2"
                      style={{ display: "block" }}
                    >
                      <i
                        className="fa fa-circle circlebullet"
                        style={{ visibility: "hidden" }}
                      />
                      Register now &gt; Submit documents &gt; Complete
                      verification &gt; Gumasta issued
                    </p>
                    <button
                      className="companyformbtn"
                      style={{ marginLeft: "2vw", height: 45 }}
                      id="submit"
                    >
                      <Link
                        style={{ color: "#FAFAFA" }}
                        to="gumasta-licence.html"
                        target="_blank"
                      >
                        {" "}
                        Get Started{" "}
                      </Link>
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
              <div id="food-lic" className="row tab-pane fade">
                <div className="col-4 col-md-3">
                  <div className="">
                    <img
                      src="images/home/Food_License.jpg"
                      className="legalcardcaroseldivimg serviceimage"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <div className=" ">
                    <div className="legalcardcaroselheadingdiv">
                      <div className="col-md-5">
                        <p className="legalcardcaroselheading serviceheading">
                          Food Licence
                        </p>
                      </div>
                      <div className="col-md-7">
                        <p
                          className="cardflowtext cardflowtext1"
                          style={{ display: "block" }}
                        >
                          <span style={{ color: "#2d2d2d" }}>
                            Time taken: 5-15 d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                          <span>
                            <span
                              style={{
                                color: "#2d2d2d",
                                borderLeft: "1px solid #2d2d2d",
                              }}
                            >
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                            </span>
                            <span style={{ color: "#f8951d" }}>
                              &nbsp;₹590
                            </span>{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <p className="legalcardcontain legalcardcontain1">
                      Starting a food business needs an FSSAI registration.
                      Register for your food license online, supported by
                      expert professionals.
                    </p>
                  </div>
                  <div>
                    <p
                      className="cardflowtext cardflowtext1 cardflowtext2"
                      style={{ display: "block" }}
                    >
                      <i
                        className="fa fa-circle circlebullet"
                        style={{ visibility: "hidden" }}
                      />
                      Register now &gt; Select turnover &gt; Submit documents
                      &gt; Registered for FSSAI
                    </p>
                    <button
                      className="companyformbtn"
                      style={{ marginLeft: "2vw", height: 45 }}
                      id="submit"
                    >
                      <Link
                        style={{ color: "#FAFAFA" }}
                        to="food-licence.html"
                        target="_blank"
                      >
                        {" "}
                        Get Started{" "}
                      </Link>
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
              <div id="trade-lic" className="row tab-pane fade">
                <div className="col-4 col-md-3">
                  <div className="">
                    <img
                      src="images/home/Trade_License.jpg"
                      className="legalcardcaroseldivimg serviceimage"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <div className=" ">
                    <div className="legalcardcaroselheadingdiv">
                      <div className="col-md-5">
                        <p className="legalcardcaroselheading serviceheading">
                          Trade Licence
                        </p>
                      </div>
                      <div className="col-md-7">
                        <p
                          className="cardflowtext cardflowtext1"
                          style={{ display: "block" }}
                        >
                          <span style={{ color: "#2d2d2d" }}>
                            Time taken: 3-15 d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                          <span>
                            <span
                              style={{
                                color: "#2d2d2d",
                                borderLeft: "1px solid #2d2d2d",
                              }}
                            >
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                            </span>
                            <span style={{ color: "#f8951d" }}>
                              &nbsp;₹751
                            </span>{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <p className="legalcardcontain legalcardcontain1">
                      Get permission to do business with speedy and 24*7 trade
                      license online application and registration services.
                    </p>
                  </div>
                  <div>
                    <p
                      className="cardflowtext cardflowtext1 cardflowtext2"
                      style={{ display: "block" }}
                    >
                      <i
                        className="fa fa-circle circlebullet"
                        style={{ visibility: "hidden" }}
                      />
                      Register now &gt; Submit documents &gt; Complete
                      verification &gt; Trade Licence issued
                    </p>
                    <button
                      className="companyformbtn"
                      style={{ marginLeft: "2vw", height: 45 }}
                      id="submit"
                    >
                      <Link
                        style={{ color: "#FAFAFA" }}
                        to="trade-licence.html"
                        target="_blank"
                      >
                        {" "}
                        Get Started{" "}
                      </Link>
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="what_we_can_help_you_with">
        <div className="otrust">
          <h3 className="whatwchu">
            What <span className="whatwe">We</span> Can{" "}
            <span className="helpu">Help You</span>
            With?
          </h3>
          <div className="mainwwchy">
            <div id="helpyou" className="owl-carousel owl-theme">
              <div>
                <center>
                  <div className="whatwchdiv">
                    <center>
                      <img
                        src={Taximg}
                        className="whatwch_img1 "
                        alt=""
                        loading="lazy"
                      />
                      <h6 className="whatwch_text">Tax filing</h6>
                    </center>
                  </div>
                </center>
              </div>
              <div>
                <center>
                  <div className="whatwchdiv">
                    <center>
                      <img
                        src={TaxPlaningimg}
                        className="whatwch_img2"
                        alt=""
                        loading="lazy"
                      />
                      <h6 className="whatwch_text">Tax Planning</h6>
                    </center>
                  </div>
                </center>
              </div>
              <div>
                <center>
                  <div className="whatwchdiv">
                    <center>
                      <img
                        src={Consultantimg}
                        className="whatwch_img3"
                        alt=""
                        loading="lazy"
                      />
                      <h6 className="whatwch_text">Consultancy</h6>
                    </center>
                  </div>
                </center>
              </div>
              <div>
                <center>
                  <div className="whatwchdiv">
                    <center>
                      <img
                        src={Consulationimg}
                        className="whatwch_img4"
                        alt=""
                        loading="lazy"
                      />
                      <h6 className="whatwch_text">Tax Consultancy</h6>
                    </center>
                  </div>
                </center>
              </div>
              <div>
                <center>
                  <div className="whatwchdiv">
                    <center>
                      <img
                        src={Layerimg}
                        className="whatwch_img5"
                        alt=""
                        loading="lazy"
                      />
                      <h6 className="whatwch_text">Updates on Laws</h6>
                    </center>
                  </div>
                </center>
              </div>
              <div>
                <center>
                  <div className="whatwchdiv">
                    <center>
                      <img
                        src={Navyimg}
                        className="whatwch_img6"
                        alt=""
                        loading="lazy"
                      />
                      <h6 className="whatwch_text">Tax Experts</h6>
                    </center>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <div className="row downloadrow">
        <div className="col-sm-6 downfirstcol">
          <center>
            <img
              src={Illustrationimg}
              className="downloadimage"
              loading="lazy"
            />
          </center>
        </div>
        <div className="col-sm-6 downsecondcol">
          <p className="downloadtext">
            Download <span style={{ color: "#f8951d" }}>Legal251</span> App
          </p>
          <p className="downloadsmalltext">
            Manage all your legal works &amp; business with ease!
          </p>
          <div className="flex-container">
            <Link
              to="https://play.google.com/store/apps/details?id=com.legal251.in"
              className="googleplaybutton"
            >
              <p style={{ display: "block" }}>
                <img
                  src={Googleplayimg}
                  className="googleplayimg"
                  loading="lazy"
                />
                <span className="getittext">
                  <span className="getitspan">GET IT ON</span>
                  <br />
                  Google Play
                </span>
              </p>
            </Link>
            <Link
              to="https://apps.apple.com/in/app/legal251-legal-service-more/id6443916709"
              className="googleplaybutton2"
            >
              <p style={{ display: "block" }}>
                <img
                  src={Appleimg}
                  className="googleplayimg"
                  loading="lazy"
                />
                <span className="getittext">
                  <span className="getitspan">GET IT ON</span>
                  <br />
                  App Store
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <section className="testimonial">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <div className="testmdiv">
              <span className="testimonal">Testimonials</span>
              <h3 className="test_heading">
                <span className="love">
                  L
                  <img className="heartimg" src={Heartimg} loading="lazy" />
                  ve
                </span>{" "}
                From
                <br /> Our <span className="client">Clients</span>
              </h3>
              <p className="test_para">
                {" "}
                Our customers love the convenience of filing with us and
                appreciate our expertise in getting their Legal work done on
                time. We value the trust our clients place in us, and we
                strive to provide them with the best service possible.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-8">
            <div id="owl-demo1" className="owl-carousel owl-theme">
              <div className="item" style={{ width: 400 }}>
                <div className="owlcarhead">
                  <div className="croimgdiv">
                    <img
                      className="cords testimonialimg"
                      src={Kailashimg}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h6 className="owlhead">Kailash Chandra Verma</h6>
                    <p className="owlsubh testimonialsubtit">
                      Proprietor , Balaji Apparels
                    </p>
                  </div>
                </div>
                <div className=" owlcard">
                  <div className="box1 scrollAnim fade-in-up ">
                    <div className="contenthead anim-top testicard">
                      <div>
                        <img
                          className="cords "
                          src={Quoteimg}
                          loading="lazy"
                        />
                      </div>
                      <div className="ratestar">
                        <div>
                          <img
                            className=""
                            style={{ marginRight: 5 }}
                            src={Gruoup9638}
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div>
                          <p className="amazplat">"Amazing Platform"</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="ptext anim-top">
                        Filing my GST returns had been an absolute nightmare
                        until I found Legal251. The interface is so easy to
                        use, it makes filing my returns on time a breeze. I
                        can easily keep track of all my invoices and payments
                        and Legal251 experts even provides helpful tips for me
                        to make sure that everything is done correctly. Thanks
                        to Legal251 team, filing GST returns has become
                        stress-free!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{ width: 400 }}>
                <div className="owlcarhead">
                  <div className="croimgdiv">
                    <img
                      className="cords testimonialimg"
                      src={Virendraimg}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h6 className="owlhead">Virendra Vishwkarma</h6>
                    <p className="owlsubh testimonialsubtit">
                      Founder, Tirth Enterprises{" "}
                    </p>
                  </div>
                </div>
                <div className=" owlcard">
                  <div className="box1 scrollAnim fade-in-up ">
                    <div className="contenthead anim-top testicard">
                      <div>
                        <img
                          className="cords "
                          src={Quoteimg2}
                          loading="lazy"
                        />
                      </div>
                      <div className="ratestar">
                        <div>
                          <img
                            className=""
                            style={{ marginRight: 5 }}
                            src={Reviesimg}
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div>
                          <p className="amazplat">"Highly recommended!"</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="ptext anim-top">
                        I was having a hard time filing my GST returns and was
                        really confused as to how to go about it. That's when
                        I came across Legal251. They were thorough
                        professionals who made sure that my documents were
                        filed perfectly without any errors. Their customer
                        service was also top-notch and they guided me through
                        the entire process with ease. I'm glad that I chose
                        Legal251 for filing my GST returns. Highly
                        recommended!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{ width: 400 }}>
                <div className="owlcarhead">
                  <div className="croimgdiv">
                    <img
                      className="cords testimonialimg"
                      src={Priyankaimg}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h6 className="owlhead">Priyanka Agnihotri</h6>
                    <p className="owlsubh testimonialsubtit">
                      CEO, 9 Telecom and Security
                    </p>
                  </div>
                </div>
                <div className=" owlcard">
                  <div className="box1 scrollAnim fade-in-up ">
                    <div className="contenthead anim-top testicard">
                      <div>
                        <img
                          className="cords"
                          src={Quoteimg2}
                          loading="lazy"
                        />
                      </div>
                      <div className="ratestar">
                        <div>
                          <img
                            className=""
                            style={{ marginRight: 5 }}
                            src={Reviesimg}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <p className="amazplat">"Extremely Impressed"</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="ptext anim-top">
                        I've been using Legal251 for filing my GST returns for
                        the past few months and I'm extremely impressed with
                        their service and platform. It's so easy to use, and
                        all the necessary information is provided in a very
                        organized way. Plus, filing my returns on time has
                        become so much easier with this platform. Highly
                        recommend Legal251 for anyone looking for an efficient
                        way to file their GST returns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{ width: 400 }}>
                <div className="owlcarhead">
                  <div className="croimgdiv">
                    <img
                      className="cords testimonialimg"
                      src={Monuimg}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h6 className="owlhead">Monu Panchal </h6>
                    <p className="owlsubh testimonialsubtit">
                      Founder , Mishi Industries
                    </p>
                  </div>
                </div>
                <div className=" owlcard">
                  <div className="box1 scrollAnim fade-in-up ">
                    <div className="contenthead anim-top testicard">
                      <div>
                        <img
                          className="cords"
                          src={Quoteimg2}
                          loading="lazy"
                        />
                      </div>
                      <div className="ratestar">
                        <div>
                          <img
                            className=""
                            style={{ marginRight: 5 }}
                            src={Reviesimg}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <p className="amazplat">"Excellent Knowledge "</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="ptext anim-top">
                        I was a bit worried when filing my GST return for the
                        first time, but Legal251 made it a breeze. Their team
                        of experts guided me through every step and filed my
                        return perfectly. I'm really glad I chose Legal251 to
                        help me with this task as they have an excellent
                        knowledge of the regulations and ensured that
                        everything was done correctly. Thank you!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section>
        <center>
          <h3 className="reviewheading">
            <img className="headlstar" src={Polygonimg} loading="lazy" />
            Amazing Stories From Our{" "}
            <span className="valclient headeranamition">
              Valuable Clients{" "}
            </span>{" "}
            <img className="headrstar" src={Polygonimg} loading="lazy" />
          </h3>
        </center>
        <center>
          <p className="reviewp">
            {" "}
            Amazing things are on the way{" "}
            <span className="reviewpspan">
              {" "}
              “What has changed for the better since you moved to{" "}
              <img className="legallogo" src={Legallogoimg} loading="lazy" />
              ?”
            </span>{" "}
            we asked our clients. Thousands of people answered; here are some
            of their comments.{" "}
          </p>
          <center>
            <div className="row Allimg marlr" id="amazing-stories-desktop">
              <div className="backimgouterdiv">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 padleft openmodal">
                  <div className="amaztdiv">
                    <div className="backimg">
                      <img
                        className="clientimg"
                        src={Group9729}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 padleft openmodal1">
                  <div className="amaztdiv">
                    <div className="backimg1">
                      <img
                        className="clientimg"
                        src={Thumbnailimg}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 padleft openmodal2">
                  <div className="amaztdiv">
                    <div className="backimg">
                      <img
                        className="clientimg"
                        src={Thumbnailimg2}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 padleft openmodal3">
                  <div className="amaztdiv">
                    <div className="backimg1">
                      <img
                        className="clientimg"
                        src={Thumbnailimg3}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" Allimg marlr amazing-stories">
              <div className="backimgouterdiv">
                <div id="amazing-stories" className="owl-carousel">
                  <div className="item">
                    <div className="openmodal">
                      <div className="amaztdiv">
                        <div className="backimg">
                          <img
                            className="clientimg"
                            src="images/review/Group_9729.jpg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="openmodal1">
                      <div className="amaztdiv">
                        <div className="backimg1">
                          <img
                            className="clientimg"
                            src="images/review/Thumbnail_For_Web_copy.jpg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="openmodal2">
                      <div className="amaztdiv">
                        <div className="backimg">
                          <img
                            className="clientimg"
                            src="images/review/Thumbnail_For_Web_copy1.jpg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="openmodal3">
                      <div className="amaztdiv">
                        <div className="backimg1">
                          <img
                            className="clientimg"
                            src="images/review/Thumbnail_For_Web_copy2.jpg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </center>
      </section>
      <div className="row">
        <div className="col-md-7">
          <div className="legallandingnorow hexagonrow1">
            <div className="legallandingnocol">
              <div
                className="hexagon hexagonspacing"
                style={{ position: "relative" }}
              >
                <img
                  className="change0 clientslogo"
                  src={Clientsimg}
                  loading="lazy"
                />
                <div className="hexTop" />
                <div className="hexBottom" />
              </div>
            </div>
            <div className="legallandingnocol">
              <div
                className="hexagon hexagonspacing"
                style={{ position: "relative" }}
              >
                <img
                  className="change1 clientslogo"
                  src={Clientsimg2}
                  loading="lazy"
                />
                <div className="hexTop" />
                <div className="hexBottom" />
              </div>
            </div>
            <div className="legallandingnocol">
              <div
                className="hexagon hexagonspacing"
                style={{ position: "relative" }}
              >
                <img
                  className="change2 clientslogo"
                  src={Clientsimg3}
                  loading="lazy"
                />
                <div className="hexTop" />
                <div className="hexBottom" />
              </div>
            </div>
            <div className="legallandingnocol">
              <div className="hexagon">
                <img
                  className="change3 clientslogo"
                  src={Clientsimg4}
                  loading="lazy"
                />
                <div className="hexTop" />
                <div className="hexBottom" />
              </div>
            </div>
          </div>
          <div className="legallandingnorow hexagonrow2">
            <div className="legallandingnocol">
              <div
                className="hexagon hexagonspacing"
                style={{ position: "relative" }}
              >
                <img
                  className="change4 clientslogo"
                  src={Clientsimg5}
                  loading="lazy"
                />
                <div className="hexTop" />
                <div className="hexBottom" />
              </div>
            </div>
            <div className="legallandingnocol">
              <div
                className="hexagon hexagonspacing"
                style={{ position: "relative" }}
              >
                <img
                  className="change5 clientslogo"
                  src={Clientsimg6}
                  loading="lazy"
                />
                <div className="hexTop" />
                <div className="hexBottom" />
              </div>
            </div>
            <div className="legallandingnocol">
              <div
                className="hexagon hexagonspacing"
                style={{ position: "relative" }}
              >
                <img
                  className="change6 clientslogo"
                  src={Clientsimg7}
                  loading="lazy"
                />
                <div className="hexTop" />
                <div className="hexBottom" />
              </div>
            </div>
            <div className="legallandingnocol">
              <div
                className="hexagon hexagonspacing"
                style={{ position: "relative" }}
              >
                <img
                  className="change7 clientslogo"
                  src={Clientsimg8}
                  loading="lazy"
                />
                <div className="hexTop" />
                <div className="hexBottom" />
              </div>
            </div>
            <div className="legallandingnocol">
              <div className="hexagon">
                <img
                  className="change8 clientslogo"
                  src={Clientsimg9}
                  loading="lazy"
                />
                <div className="hexTop" />
                <div className="hexBottom" />
              </div>
            </div>
          </div>
          <div className="legallandingnorow hexagonrow3">
            <div className="legallandingnocol">
              <div
                className="hexagon hexagonspacing"
                style={{ position: "relative" }}
              >
                <img
                  className="change9 clientslogo"
                  src={Clientsimg10}
                  loading="lazy"
                />
                <div className="hexTop" />
                <div className="hexBottom" />
              </div>
            </div>
            <div className="legallandingnocol">
              <div
                className="hexagon hexagonspacing"
                style={{ position: "relative" }}
              >
                <img
                  className="change10 clientslogo"
                  src={Clientsimg11}
                  loading="lazy"
                />
                <div className="hexTop" />
                <div className="hexBottom" />
              </div>
            </div>
            <div className="legallandingnocol">
              <div
                className="hexagon hexagonspacing"
                style={{ position: "relative" }}
              >
                <img
                  className="change11 clientslogo"
                  src={Clientsimg12}
                  loading="lazy"
                />
                <div className="hexTop" />
                <div className="hexBottom" />
              </div>
            </div>
            <div className="legallandingnocol">
              <div className="hexagon">
                <img
                  className="change12 clientslogo"
                  src={Clientsimg13}
                  loading="lazy"
                />
                <div className="hexTop" />
                <div className="hexBottom" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3" id="counter" style={{ display: "block" }}>
          <center>
            <h3 className="counterheading1">
              <span className="counter-value" data-count={100}>
                0
              </span>
              <span
                style={{ color: "#f8951d", fontFamily: '"CerebriSansHeavy"' }}
              >
                +
              </span>
            </h3>
            <span className="counterheadingtext1">
              Currently served cities
            </span>
            <h3 className="counterheading2">
              <span className="counter-value" data-count={110}>
                0
              </span>
              <span style={{ color: "#01355D" }}>k</span>
              <span
                style={{ color: "#f8951d", fontFamily: '"CerebriSansHeavy"' }}
              >
                +
              </span>
            </h3>
            <span className="counterheadingtext2">Trusted clients</span>
          </center>
        </div>
        <div className="col-md-2">
          <center>
            <h3 className="counterheading3">
              <span className="counter-value" data-count={354}>
                0
              </span>
              <span
                style={{ color: "#f8951d", fontFamily: '"CerebriSansHeavy"' }}
              >
                +
              </span>
            </h3>
            <span className="counterheadingtext3">
              Qualified professionals
            </span>
            <h3 className="counterheading4">
              <span className="counter-value" data-count={50}>
                0
              </span>
              <span style={{ color: "#01355D" }}>k</span>
              <span style={{ color: "#f8951d" }}>+</span>
            </h3>
            <span className="counterheadingtext4">Queries Solved</span>
          </center>
        </div>
      </div>
      <br />
      <br />
      <br />
      <section>
        <div className="row otrust" style={{ padding: "0px 30px" }}>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="whychoosediv">
              <h3 className="wych">
                Why Choose{" "}
                <img
                  src={Group9961}
                  className="legal251logo"
                  alt=""
                  loading="lazy"
                />{" "}
                ?
              </h3>
              <p className="wych_para">
                Legal251 is the perfect choice for anyone looking to prepare
                legal documents , registrations and compliance with ease and
                confidence. Our team of experienced experts provide filing
                services that are always on-time and accurate. Plus, we have a
                mobile app and dashboard for managing your service &amp;
                documents, so you can stay on top of your filing and other
                works from anywhere. With over 10 years of experience in the
                industry, you can trust us to get the job done right!
              </p>
              <img
                src={Group9730}
                className="gooreview"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lfg-6">
            <div className="whychoose2">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <div className="displayflexdiv">
                  <div className="wctext">
                    <img
                      src={Titleimg1}
                      loading="lazy"
                      className="organegtickimage"
                    />
                  </div>
                  <div className="wctext">
                    <p className="wctext">Trusted Advisors</p>
                  </div>
                </div>
                <div className="displayflexdiv">
                  <div className="wctext">
                    <img
                      src={Titleimg2}
                      loading="lazy"
                      className="organegtickimage"
                    />
                  </div>
                  <div className="wctext">
                    <p className="wctext">10 Years of Experience</p>
                  </div>
                </div>
                <div className="displayflexdiv">
                  <div className="wctext">
                    <img
                      src={Titleimg3}
                      loading="lazy"
                      className="organegtickimage"
                    />
                  </div>
                  <div className="wctext">
                    <p className="wctext">Dedicated Experts</p>
                  </div>
                </div>
                <div className="displayflexdiv">
                  <div className="wctext">
                    <img
                      src={Titleimg4}
                      loading="lazy"
                      className="organegtickimage"
                    />
                  </div>
                  <div className="wctext">
                    <p className="wctext">Safe &amp; Secure</p>
                  </div>
                </div>
                <div className="displayflexdiv">
                  <div className="wctext">
                    <img
                      src={Titleimg5}
                      loading="lazy"
                      className="organegtickimage"
                    />
                  </div>
                  <div className="wctext">
                    <p className="wctext">Digital Platform</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <div className="displayflexdiv">
                  <div className="wctext">
                    <img
                      src={Titleimg6}
                      loading="lazy"
                      className="organegtickimage"
                    />
                  </div>
                  <div className="wctext">
                    <p className="wctext">Round Clock Support</p>
                  </div>
                </div>
                <div className="displayflexdiv">
                  <div className="wctext">
                    <img
                      src={Titleimg7}
                      loading="lazy"
                      className="organegtickimage"
                    />
                  </div>
                  <div className="wctext">
                    <p className="wctext">Verified Professionals</p>
                  </div>
                </div>
                <div className="displayflexdiv">
                  <div className="wctext">
                    <img
                      src={Titleimg8}
                      loading="lazy"
                      className="organegtickimage"
                    />
                  </div>
                  <div className="wctext">
                    <p className="wctext">Quick and Reliable System</p>
                  </div>
                </div>
                <div className="displayflexdiv">
                  <div className="wctext">
                    <img
                      src={Titleimg9}
                      loading="lazy"
                      className="organegtickimage"
                    />
                  </div>
                  <div className="wctext">
                    <p className="wctext">Super Fast Team</p>
                  </div>
                </div>
                <div className="displayflexdiv">
                  <div className="wctext">
                    <img
                      src={Titleimg10}
                      loading="lazy"
                      className="organegtickimage"
                    />
                  </div>
                  <div className="wctext">
                    <p className="wctext">Best Operational Control</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <div className="news ">
        <div>
          <div className="row newsrow">
            <div className="col-md-6 bignewscardcol">
              <center>
                <div className="card4 text-center bignewscard">
                  <img
                    className="card-img-top bignewscardimage"
                    src={Whatisimg}
                    loading="lazy"
                  />
                  <div className="card-body cardnewscol">
                    <h5 className="card-title bignewscardtitle">
                      What is Legal251?
                    </h5>
                    <p className="card-text bignewscardtext">
                      Meet the online legal advisors covering all domains and
                      providing services to simplify the most complex-looking
                      processes for a common person. Legal251 is an online
                      legal solutions provider that comprehensively delivers
                      the solutions for all queries of the Legal domain.
                      <br />
                      <br />
                      Founded in 2010 with a vision of streamlining the legal
                      issues and concerns of every person of this country,
                      Legal251 is the most trusted name among its users. Our
                      services are helping startups and businesses around the
                      country extensively in easing the process of
                      Registrations and Legal Management. It all started with
                      the inception of an idea to reduce the time spent on
                      legal activities of growth-focused startups and
                      businesses. The clients loved our services and therefore
                      the retention rate went up to 95%. We grew to a team of
                      100+ Members including Chartered Accountants, Lawyers,
                      Legal Advisors, Accounting Managers and more. Our
                      value-based model for our clients has made us achieve
                      numerous milestones in our path to glory. Recently, we
                      decided to go digital and bring our loved services on
                      mobiles, desktops and pcs for everyone to get
                      benefitted. We brought the best in class technology and
                      added new services to become the partner of our clients
                      in their legal issues. Trust and Transparency are the
                      key values that drive us to go the extra mile for client
                      satisfaction.
                    </p>
                    <center>
                      <Link className="readmorebutton" to="about.html">
                        Read more...
                      </Link>
                    </center>
                    <br />
                  </div>
                </div>
              </center>
            </div>
            <div className="col-md-6 w1">
              <div className="row">
                <div className="col-md-6 bignewscardcol">
                  <div className="card5 text-center smallnewscard">
                    <img
                      src={Legalconsultancy}
                      className="smallnewscardimage"
                      loading="lazy"
                    />
                    <div className="card-body cardnewscol">
                      <h5 className="card-title smallnewscardtitle">
                        How to get consultancy?
                      </h5>
                      <p style={{ marginTop: 10 }} />
                      <p className="card-text smallnewscardtext">
                        Getting consultancy with Legal251 becomes hassle-free
                        and time-saving. Whatever may be your problem in this
                        legal domain we are here for you to give a perfect
                        solution. You just have to follow the process
                        explained below and we will handle the rest.
                      </p>
                      <center>
                        <Link
                          className="readmorebutton"
                          to="how-to-get-consultancy.html"
                        >
                          Read more...
                        </Link>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 bignewscardcol">
                  <div className="card5 text-center smallnewscard">
                    <img
                      src={Legalworkimg}
                      className="smallnewscardimage"
                      loading="lazy"
                    />
                    <div className="card-body cardnewscol">
                      <h5 className="card-title smallnewscardtitle">
                        How Legal251 works?
                      </h5>
                      <p style={{ marginTop: 10 }} />
                      <p className="card-text smallnewscardtext">
                        We leverage the power of digital to simplify the
                        things and not make them complex for you. Our clear,
                        concise and transparent process gives you the complete
                        control of actions taken for you. Working smartly we
                        execute the operations in a flawless manner.
                      </p>
                      <center>
                        <Link className="readmorebutton" to="how-we-work.html">
                          Read more...
                        </Link>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginTop: "1.83vw" }}>
                <div className="col-md-6 bignewscardcol">
                  <div className="card5 text-center smallnewscard">
                    <img
                      src={Onlineimg}
                      className="smallnewscardimage"
                      loading="lazy"
                    />
                    <div className="card-body cardnewscol">
                      <h5 className="card-title smallnewscardtitle">
                        Online Accounting by Legal251
                      </h5>
                      <p style={{ marginTop: 10 }} />
                      <p className="card-text smallnewscardtext">
                        Accounting made super easy for you with verified and
                        trusted professionals made accessible to you on your
                        fingertips. We give a specialist, reliable and capable
                        virtual online accounting administrations to private
                        companies.
                      </p>
                      <center>
                        <Link
                          className="readmorebutton"
                          to="online-accounting.html"
                        >
                          Read more...
                        </Link>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 bignewscardcol">
                  <div className="card5 text-center smallnewscard">
                    <img
                      src={Trackimg}
                      className="smallnewscardimage"
                      loading="lazy"
                    />
                    <div className="card-body cardnewscol">
                      <h5 className="card-title smallnewscardtitle">
                        Track your services
                      </h5>
                      <p style={{ marginTop: 10 }} />
                      <p className="card-text smallnewscardtext">
                        Tracking your services becomes much easier in Legal251
                        you can see the progress of your query and track each
                        and every step of it and when it's completed you can
                        directly see and download the solution from Service
                        Tracking Dashboard whenever you want it will always be
                        accessible to you. <br />
                      </p>
                      <center>
                        <Link
                          className="readmorebutton"
                          to="track-service.html"
                        >
                          Read more...
                        </Link>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div className="whatspopupclosediv" id="whatspopupclosediv">
        <button
          className="whatspopupclosebtn"
          id="closewhatspopbtn"
          onclick="closepop()"
        >
          <img style={{ width: 15 }} src="images/close.svg" className="" />
        </button>
      </div>
      <div className="popupbtndiv" id="popupbtndiv">
        <button
          className="whatsuppopupbtn"
          id="openwhatspupbtn"
          onclick="openwhpop()"
        >
          <img
            style={{ width: "100%", height: "100%", marginTop: "-7px" }}
            src={Whatsappicon}
            className=""
          />
        </button>
      </div>
      <div className="whatsupchatsection " id="whatsupchatpopup">
        <div style={{ padding: 10 }}>
          <img src={Supportimg} style={{ width: "100%" }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 className="whatsup_head">Hi we are Online!</h2>
          <p className="whatsup_pera">
            We are here to help you! Chat with us on WhatsApp for any queries
            or more.
          </p>
        </div>
        <div style={{ textAlign: "center", display: "flex" }}>
          <button className="chatbtn" onclick="wht()">
            {" "}
            <img
              style={{ width: 24, height: 24, marginRight: 15 }}
              src={Whatsappimg2}
              className=""
            />{" "}
            START CHAT
          </button>
        </div>
      </div>
      <br className="mobresbr" />
      <br className="mobresbr" />
      <br className="mobresbr" />
      <br className="mobresbr" />
      <div className="consulationnowsection consulationnowsection1">
        <div className="row">
          <div className="col-md-7">
            <p className="bookconst">
              BOOK A <span className="bookconstspan1">FREE</span>{" "}
              <span className="bookconstspan2">CONSULTATION</span> NOW!
            </p>
            <div className="row">
              <div className="col-md-7">
                <p className="readyconsline">
                  Ready to take first step ? Let's chat about how we can help.
                </p>
                <button className="bookbtn2 bookdemoform">
                  Book a free demo
                </button>
              </div>
              <div className="col-md-5 ">
                <img
                  src={Group9801img}
                  className="bookconstimg2 reshide"
                  loading="lazy"
                />
                <img
                  src={Group209801}
                  className="ershideondesk bookconstimg3"
                  loading="lazy"
                />
                <img
                  src={Ressponimg}
                  className="ershideondesk bookconstimg4"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5 reshide">
            <img src={Group97982} className="bookconstimg" loading="lazy" />
            <img />
          </div>
        </div>
      </div>
      
     
    </div>
  </>
  );
}
