import React from 'react'
import Legalwhitelogo from "./../components/images/Media.jpg";
import Visaimg from "./../components/images/visa.svg";
import Upiimg from "./../components/images/upi.svg";
import Rupayimg from "./../components/images/rupay.svg";
import Paytmimg from "./../components/images/paytm.svg";
import Mastercardimg from "./../components/images/mastercard.svg";
import Emailbuttonimg from "./../components/images/emailbutton.svg";
import Footerinstaimg from "./../components/images/footerinsta.svg";
import FooterTwitter from "./../components/images/fottertwitter.svg";
import FooterLinkedingimg from "./../components/images/footerlinkedin.svg";
import Footerfbimg from "./../components/images/footerfb.svg";
import Popupimg from "./../components/images/popupcross2.svg";
import Phonecallimg from "./../components/images/phonecall.svg";
import Emailimg2 from "./../components/images/EMAIL.png";
import Contactimg from "./../components/images/home/contact.svg";
import Personimg from "./../components/images/personimage.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
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
                    <img src={Upiimg} className="paymentimage" loading="lazy" />
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
                  <Link
                    to="cdn-cgi/l/email-protection.html#ee8d81809a8f8d9aae828b898f82dcdbdfc08d8183"
                    style={{ textDecoration: "underline", color: "#fff" }}
                    className="footertext"
                  >
                    <span
                      className="__cf_email__"
                      data-cfemail="f4979b9a80959780b49891939598c6c1c5da979b99"
                    >
                      legal257rgvf@gmail.com
                    </span>
                  </Link>
                  <br />
                  <Link
                    to="tel:9435266783/8133997722"
                    style={{ textDecoration: "underline", color: "#fff" }}
                    className="footertext"
                  >
                    9435266783/8133997722
                  </Link>
                  <br/>
                 
                </div>
                
                <div className="col-md-3">
                  <p className="footerheading">Links</p>
                  <Link
                    to="https://blog.legal251.com/"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Latest News
                  </Link>
                  <br />
                  <Link
                    to="how-we-work.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    How we work
                  </Link>
                  <br />
                  <Link
                    to="about.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    About Us
                  </Link>
                  <br />
                  <Link
                    to="resources/index.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Blog
                  </Link>
                  <br />
                  <Link
                    to="resources/guides/index.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Guides
                  </Link>
                </div>
                <div className="col-md-5">
                  <p className="footerheading">Legal &amp; Policies</p>
                  <Link
                    to="terms-and-conditions.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Terms &amp; Condition
                  </Link>
                  <br />
                  <Link
                    to="privacy-policy.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Privacy Policy
                  </Link>
                  <br />
                  <Link
                    to="cookie-policy.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Cookie Policy
                  </Link>
                  <br />
                  <Link
                    to="refund-policy.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Refund Policy
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <p className="footerheading">Support</p>
                  <Link
                    to="faq.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    FAQs
                  </Link>
                  <br />
                  <Link
                    to="contact.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Contact us
                  </Link>
                </div>
              
                <div className="col-md-4">
                  <p className="footerheading">Account</p>
                  <Link
                    to="https://user.legal251.com/"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    User Login
                  </Link>
                  <br />
                  <Link
                    to="https://partners.legal251.com/"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Partner Login
                  </Link>
                  <br />
                  <Link
                    to="track-service.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Service Tracking Dashboard
                  </Link>
                </div>
                <div className="col-md-5">
                  
                  <p className="footerheading">
                      Address
                    </p>
                    <Link
                    to="Address"
                    style={{ textDecoration: "", color: "#fff" }}
                    className="footertext"
                  >
                   UTTAR KHATOWAL <br/>RUPAHI NAGAON ASSAM <br/>PINCODE:- 782128
                  </Link>
                  <br />
                     
                    <p className="Followusheading">Follow us on</p>
                    <Link
                      to="https://www.instagram.com/legal251india/"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src={Footerinstaimg}
                        className="footersocialicon"
                        loading="lazy"
                      />{" "}
                    </Link>{" "}
                    <Link to="https://twitter.com/legal251" target="_blank">
                      {" "}
                      <img
                        src={FooterTwitter}
                        className="footersocialicon"
                        loading="lazy"
                      />{" "}
                    </Link>{" "}
                    <Link
                      to="https://www.linkedin.com/company/legal251/"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src={FooterLinkedingimg}
                        className="footersocialicon"
                        loading="lazy"
                      />{" "}
                    </Link>{" "}
                    <Link to="https://www.facebook.com/legal251" target="_blank">
                      {" "}
                      <img
                        src={Footerfbimg}
                        className=" footersocialicon"
                        loading="lazy"
                      />{" "}
                    </Link>
                  
                </div>
              </div>
            </div>
          </div>
          <p className="footerbottomtext" style={{ textAlign: "center" }}>
            © 2023 ISONOMY LEGAL257 Private Limited. All Rights Reserved
          </p>
        </footer>
        <div className="modal fade" id="myModal1" role="dialog">
          <div
            className="modal-dialog modalmainwidth"
            style={{ border: "none" }}
          >
            <div
              className="modal-content"
              style={{ borderRadius: 10, border: "none" }}
            >
              <div
                className="modal-header subscribeemailpopupheader"
                style={{
                  display: "block",
                  border: "none",
                  backgroundColor: "#2d2d2d",
                  borderRadius: "8px 8px 0 0",
                  WebkitBoxShadow: "6px 7px 15px -13px rgba(0,0,0,1)",
                  MozBoxShadow: "6px 7px 15px -13px rgba(0,0,0,1)",
                  boxShadow: "6px 7px 15px -13px rgba(0,0,0,1)",
                }}
              >
                <img
                  src={Popupimg}
                  className="subscribeemailemailpopupclose"
                  style={{
                    position: "absolute",
                    right: "1.9%",
                    top: 0,
                    marginTop: "1.4vw",
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
                      margin: 0,
                      verticalAlign: "middle",
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
                      src={Emailimg2}
                      className="verificationimg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={Contactimg}
          className="burger"
          width={50}
          height={50}
          style={{ cursor: "pointer" }}
        />
        <div className="modal modalmain fade" id="myModal" role="dialog">
          <div
            className="modal-dialog modalmainwidth"
            style={{ border: "none" }}
          >
            <div className="modal-content" style={{ borderRadius: 10 }}>
              <div
                className="modal-header"
                style={{
                  border: "none",
                  backgroundColor: "#f8951d",
                  borderRadius: "8px 8px 0 0",
                  WebkitBoxShadow: "6px 7px 15px -13px rgba(0,0,0,1)",
                  MozBoxShadow: "6px 7px 15px -13px rgba(0,0,0,1)",
                  boxShadow: "6px 7px 15px -13px rgba(0,0,0,1)",
                }}
              >
                <img
                  src={Popupimg}
                  className="chossingpopupclose"
                  style={{ position: "absolute" }}
                  data-dismiss="modal"
                  loading="lazy"
                />
                <h4
                  className="chossingpopupmainheading"
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    textAlign: "center",
                    fontWeight: 800,
                  }}
                >
                  Thank You for Trusting Legal257
                </h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-xs-7">
                    <p
                      className="chossingpopuprequesth"
                      style={{
                        color: "#01355D",
                        fontFamily: '"Open Sans", sans-serif',
                        textAlign: "center",
                      }}
                    >
                      We have received your query.
                    </p>
                    <p
                      className="chossingpopupexecutive"
                      style={{
                        color: "#2d2d2d",
                        fontFamily: '"Open Sans", sans-serif',
                        textAlign: "center",
                      }}
                    >
                      One of our experts will contact you soon. If you wish, you
                      can submit your query/problem online also.{" "}
                    </p>
                    <center>
                      <Link to="index.html" className="btn Clickherebutton">
                        Proceed online
                      </Link>
                      <p
                        className="choossingno"
                        style={{
                          color: "#2d2d2d",
                          fontFamily: '"Open Sans", sans-serif',
                          textAlign: "center",
                        }}
                      >
                        Or call on (+91){" "}
                        <Link
                          style={{ display: "block", color: "#2d2d2d" }}
                          to="tel:7772877729"
                        >
                          77728-77729{" "}
                          <img
                            src={Phonecallimg}
                            className="phonecall"
                            loading="lazy"
                          />
                        </Link>
                      </p>
                    </center>
                  </div>
                  <div className="col-xs-5">
                    <div
                      className="chossingpopupimgdiv"
                      style={{
                        marginTop: "2.19vw",
                        WebkitBoxShadow: "4px 5px 5px 0px rgba(0,0,0,0.2)",
                        MozBoxShadow: "4px 5px 5px 0px rgba(0,0,0,0.2)",
                        boxShadow: "4px 5px 5px 0px rgba(0,0,0,0.2)",
                        backgroundColor: "#F3F3F3",
                      }}
                    >
                      <img
                        src={Personimg}
                        className="chossingpopupimg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg modal1"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                background: "transparent",
              }}
            >
              <button
                type="button"
                className="close close1 modal1close"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "black",
                  fontSize: 30,
                }}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div
              className="modal-content"
              style={{ height: 500, background: "transparent" }}
            >
              <iframe
                className="embed-responsive-item youtube-iframe"
                id="linkmodalclose"
                style={{ width: "100%", height: "100%" }}
                allowscriptaccess="always"
                src="https://www.youtube.com/embed/4KCHx81vaY8?&modestbranding=1&showinfo=0"
                allowFullScreen="allowfullscreen"
              />
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg modal2"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                background: "transparent",
              }}
            >
              <button
                type="button"
                className="close close1 modalclose1"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "black",
                  fontSize: 30,
                }}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div
              className="modal-content"
              style={{ height: 500, background: "transparent" }}
            >
              <iframe
                className="embed-responsive-item youtube-iframe"
                id="linkmodalclose1"
                style={{ width: "100%", height: "100%" }}
                allowscriptaccess="always"
                src="https://www.youtube.com/embed/wDzFGWLg8xw?&modestbranding=1&showinfo=0"
                allowFullScreen="allowfullscreen"
              />
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg modal3"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                background: "transparent",
              }}
            >
              <button
                type="button"
                className="close close1 modalclose2"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "black",
                  fontSize: 30,
                }}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div
              className="modal-content"
              style={{ height: 500, background: "transparent" }}
            >
              <iframe
                className="embed-responsive-item youtube-iframe"
                id="linkmodalclose2"
                style={{ width: "100%", height: "100%" }}
                allowscriptaccess="always"
                src="https://www.youtube.com/embed/pLbI6QqWuiw?&modestbranding=1&showinfo=0"
                allowFullScreen="allowfullscreen"
              />
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg modal4"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                background: "transparent",
              }}
            >
              <button
                type="button"
                className="close close1 modalclose3"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "black",
                  fontSize: 30,
                }}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div
              className="modal-content"
              style={{ height: 500, background: "transparent" }}
            >
              <iframe
                className="embed-responsive-item youtube-iframe"
                id="linkmodalclose3"
                style={{ width: "100%", height: "100%" }}
                allowscriptaccess="always"
                src="https://www.youtube.com/embed/PEwm1L37DEM?&modestbranding=1&showinfo=0"
                allowFullScreen="allowfullscreen"
              />
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer