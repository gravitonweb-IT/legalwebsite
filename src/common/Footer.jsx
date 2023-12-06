import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faGlobe,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Footer.css";
import legallogo from "./Images/logolegal.png";

const Footer = () => {
  return (
    <>
      <div className="footer-part mt-5 md:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 mx-5 md:mx-20 lg:mx-28">
          <div className="lg:col-span-2">
            <div>
              <img src={legallogo} alt="" className="w-[50%] md:w-[80%] h-auto" />
            </div>

            <h5 className="mt-3 text-black text-lg font-semibold">
              <Link to="#">About Us</Link>
            </h5>

            <p className="mt-3  text-black">
              Legal257 is the perfect <br/>choice for anyone looking <br/>to prepare legal
              documents , registrationsand compliance with ease and confidence.
            </p>
          </div>

          <div className="lg:col-span-2 mt-5 md:mt-4 lg:mt-0">
            <h5 className="text-black font-semibold text-lg">Support</h5>

            <div className="mt-2 md:mt-4 text-black">
              <p className="">
                <Link to="#">Contact Us</Link>
              </p>

              <p className="mt-2">
                <Link to="#">FAQ'S</Link>
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 mt-5 md:mt-4 lg:mt-0">
            <h5 className="text-black font-semibold text-lg">Legal & Policies</h5>

            <div className="mt-2 md:mt-4 text-black">
              <Link to="#">
                <p className="">Terms & Conditions</p>
              </Link>

              <Link to="#">
                <p className="mt-2">Privacy Policy</p>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 mt-5 md:mt-4 lg:mt-0">
            <h5 className="text-black font-semibold text-lg">Quick Links</h5>

            <div className="mt-2 md:mt-4 text-black">
              <p className="">
                <Link to="#">Latest News</Link>
              </p>

              <p className="mt-2">
                {" "}
                <Link to="#">How we Work</Link>
              </p>

              <p className="mt-2">
                <Link to="#">About Us</Link>
              </p>

              <p className="mt-2">
                <Link to="#">Blog</Link>
              </p>

              <p className="mt-2">
                <Link to="#">Guides</Link>
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 mt-5 md:mt-4 lg:mt-0">
            <h5 className="text-black font-semibold text-lg">Account</h5>

            <div className="mt-2 md:mt-4 text-black">
              <Link to="#">
                <p className="">User Login</p>
              </Link>

              <Link to="#">
                <p className="mt-2">Partner Login</p>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 mt-5 md:mt-4 lg:mt-0">
          <h5 className="text-black font-semibold text-lg">Contact Us</h5>

            <ul class="list-inline footer-contact mt-2 md:mt-4">
              <li className="mb-3">
                <a href="#">
                  <FontAwesomeIcon icon={faPhone} className="footer-icon" />
                  +91-9435266783 / +91-8133997722
                </a>
              </li>

              <li className="mb-3">
                <a href="#">
                  <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                  Legal257rgvf@gmail.com
                </a>
              </li>

              <li className="mb-3">
                <Link href="#">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="footer-icon"
                  />
                 UTTAR KHATOWAL RUPAHI NAGAON ASSAM 
                 PIN:- 782128
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-5 w-100 text-white "></hr>

        <div className="grid grid-cols-1 lg:grid-cols-2 mx-5 md:mx-20 lg:mx-28">
          <div>
            <div className="social-link">
              <Link to="#">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </Link>

              <Link to="#">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </Link>

              <Link to="#">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </Link>

              <Link to="#">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </Link>
            </div>
          </div>

          {/* <div>
            <p className="footer-paragraph text-black text-md font-semibold">
              Copyright &copy;2023 Legal257 Designed By :
              <Link href="#" className="footer-text">
                <strong> Gravitonweb Technologies</strong>
              </Link>
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
