import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import ilegalhomeimg from "./../assests/images/HomepageImages/legalImg1.jpg";
import sliderhomeimg1 from "./../assests/images/HomepageImages/users.png";
import sliderhomeimg2 from "./../assests/images/HomepageImages/customer.png";
import sliderhomeimg3 from "./../assests/images/HomepageImages/employee-experience.png";
import sliderhomeimg4 from "./../assests/images/HomepageImages/case-report.png";
import sliderhomeimg5 from "./../assests/images/HomepageImages/gold-cup.png";
import Service1 from "./../assests/images/HomepageImages/accounting.svg";
import Service2 from "./../assests/images/HomepageImages/affidavit.svg";
import Service3 from "./../assests/images/HomepageImages/applicationform.png";
import Service4 from "./../assests/images/HomepageImages/dissolution of deeds.svg";
import Service5 from "./../assests/images/HomepageImages/foodlicence.svg";
import Service6 from "./../assests/images/HomepageImages/gstfilling.svg";
import Service7 from "./../assests/images/HomepageImages/gstregister.svg";
import Service8 from "./../assests/images/HomepageImages/icegateregister.svg";
import Service9 from "./../assests/images/HomepageImages/importexportlicence.png";
import Service10 from "./../assests/images/HomepageImages/incometax.png";
import Service11 from "./../assests/images/HomepageImages/legaldrafting.svg";
import Service12 from "./../assests/images/HomepageImages/msmeregister.png";
import Service13 from "./../assests/images/HomepageImages/noc.svg";
import Service14 from "./../assests/images/HomepageImages/partnership deed.svg";
import Service15 from "./../assests/images/HomepageImages/pfregister.svg";
import Service16 from "./../assests/images/HomepageImages/power.svg";
import Service17 from "./../assests/images/HomepageImages/proffessional.svg";
import Service18 from "./../assests/images/HomepageImages/societyregister.svg";
import Service19 from "./../assests/images/HomepageImages/trade.svg";
import Service20 from "./../assests/images/HomepageImages/trademark.svg";
import Service21 from "./../assests/images/HomepageImages/gstreturn.svg";
import Service22 from "./../assests/images/HomepageImages/gumasta.svg";
import GoogleImg from "./../assests/images/HomepageImages/googleImg.png";
import GstImg from "./../assests/images/HomepageImages/gst-image1.jfif";
import consultant from "./../assests/images/HomepageImages/consultant.png";
import taxConsultant from "./../assests/images/HomepageImages/tax-consultation.png";
import taxExpert from "./../assests/images/HomepageImages/tax-expert.png";
import taxFiling from "./../assests/images/HomepageImages/tax-filing.png";
import taxPlaning from "./../assests/images/HomepageImages/tax-planing.png";
import updatesOnLaw from "./../assests/images/HomepageImages/updates-on-law.png";
import tile1 from "./../assests/images/HomepageImages/tile1.png";
import tile2 from "./../assests/images/HomepageImages/tile2.png";
import tile3 from "./../assests/images/HomepageImages/tile3.png";
import tile4 from "./../assests/images/HomepageImages/tile4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./home.css";


// bank service

import zero from "../assests/images/Bankservices/zero.png";
import CASH from "../assests/images/Bankservices/CASH.png";
import DEPOSIT from "../assests/images/Bankservices/deposit.png";
import fsat from "../assests/images/Bankservices/fsat.png";
import pickup from "../assests/images/Bankservices/pickup.png";
import aadhar from "../assests/images/Bankservices/aadhar.jpeg";
import dmt from "../assests/images/Bankservices/dmt.png";
import aeps from "../assests/images/Bankservices/aeps.svg";
import upi from "../assests/images/Bankservices/upi.png";
import pan from "../assests/images/Bankservices/pan.png";
import micro from "../assests/images/Bankservices/micro.png";
import bbps from "../assests/images/Bankservices/bbps.png";
import bank from "../assests/images/Bankservices/bank.png";
import RECHARGE from "../assests/images/Bankservices/RECHARGE.png";
import PAY from "../assests/images/Bankservices/PAYCONTACTS.png";
import mobile from "../assests/images/Bankservices/mobilepayment.png";
import cibil from "../assests/images/Bankservices/cibilscore.jpg";
import upid from "../assests/images/Bankservices/UPIid.png";
import FLIGHTBOOKING from "../assests/images/Bankservices/FLIGHTBOOKING.jpg";
import bus from "../assests/images/Bankservices/BUSBOOKING.png";
import HOTEL from "../assests/images/Bankservices/HOTEL.png";
import INSURANCE from "../assests/images/Bankservices/INSURANCE.png";
import FASTAG from "../assests/images/Bankservices/FASTAG.png";
import QR from "../assests/images/Bankservices/QR CODE.png";
import bhim from "../assests/images/Bankservices/bhim.png";
import TRANSFER from "../assests/images/Bankservices/TRANSFER.png";
import DROP from "../assests/images/Bankservices/DROP.png";


const Home = () => {
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const isSmallScreen1 = window.innerWidth <= 768;

  if (isSmallScreen1) {
    settings1.slidesToShow = 3;
  }

  const isSmallScreen2 = window.innerWidth <= 768;

  if (isSmallScreen2) {
    settings3.slidesToShow = 3;
  }

  // form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    select: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // You can perform additional actions here, such as sending data to a server

    // Reset the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      select: "",
    });
  };

  return (
    <>
      {/* hero section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ml-0 md:ml-20 lg:ml-28">
        <div className="mx-5 md:mx-0 mt-20 md:mt-16">
          <p className="font-bold text-2xl md:text-4xl lg:text-5xl mt-5 md:mt-20 md:h-[120px] ">
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
          </p>

          <div className="mt-10 ">
            <Slider {...settings1}>
              <div className="">
                <div className="">
                  <img
                    src={sliderhomeimg1}
                    className="w-[70px] h-auto"
                    alt=""
                  />
                </div>

                <div className="mt-3">
                  <p className="text-[#B9BFBF] text-sm ">
                    Trusted <br />
                    Clients
                  </p>
                </div>
              </div>

              <div className="">
                <div className="">
                  <img
                    src={sliderhomeimg2}
                    className="w-[70px] h-auto"
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <p className="text-[#B9BFBF] text-sm ">
                    Queries
                    <br /> Solved
                  </p>
                </div>
              </div>

              <div className="">
                <div className="">
                  <img
                    src={sliderhomeimg3}
                    className="w-[70px] h-auto"
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <p className="text-[#B9BFBF] text-sm ">
                    Years Of
                    <br /> Experience
                  </p>
                </div>
              </div>

              <div className="">
                <div className="">
                  <img
                    src={sliderhomeimg4}
                    className="w-[70px] h-auto"
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <p className="text-[#B9BFBF] text-sm ">
                    Cases
                    <br /> Solved
                  </p>
                </div>
              </div>

              <div className="">
                <div className="">
                  <img
                    src={sliderhomeimg5}
                    className="w-[70px] h-auto"
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <p className="text-[#B9BFBF] text-sm ">
                    Awards
                    <br /> Gained
                  </p>
                </div>
              </div>
            </Slider>
          </div>

          <div className="mt-10">
            <img src={GoogleImg}></img>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              className="rounded-bl-[100px] w-[100%] h-[75vh]"
              src={ilegalhomeimg}
              alt="Legal Home"
            />
            <div className="absolute top-0 left-0 w-full flex  justify-center mt-28 ">
              <div className="bg-white shadow-lg rounded-2xl p-5">
                <h1 className="font-semibold text-2xl flex justify-center text-[#01355D] ">
                  Get your queries solved by
                </h1>
                <div className="mt-4 text-center text-xl font-semibold text-[#954535]">
                  <Typewriter
                    options={{
                      strings: [
                        "Lawyer",
                        "Consultant ",
                        "Company Secretary",
                        "Chartered  Accountant",
                      ],
                      autoStart: true,
                      loop: true,
                      typeSpeed: 50,
                    }}
                  />
                </div>

                <div>
                  <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <p className="mb-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Your Name"
                        className=" w-full lg:w-[400px] mt-2  border p-2 rounded-lg"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </p>
                    <label className="mt-3">Email</label>
                    <p className="mb-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className=" w-full lg:w-[400px]  mt-2 border p-2 rounded-lg"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </p>
                    <label className="mt-3">Contact Number</label>

                    <p className="mb-3">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Enter Your Number"
                        className=" w-full lg:w-[400px] mt-2  border p-2 rounded-lg"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </p>
                    <label>Related to</label>
                    <p>
                      <select
                        className="border p-2 w-full lg:w-[400px] mt-2 rounded-lg"
                        value={formData.select}
                        onChange={handleChange}
                        id="select"
                        name="select"
                      >
                        <option value="" disabled>
                          Select Course
                        </option>
                        <option value="Lawyer">Lawyer</option>
                        <option value="Consultant">Consultant</option>
                        <option value="Company Secretary">
                          Company Secretary
                        </option>
                        <option value="Chartered Accountant">
                          Chartered Accountant
                        </option>
                      </select>
                    </p>
                    <div className="mt-5 flex justify-center">
                      <button className="bg-[#8A4117] text-white px-4 py-3 rounded-[4px]">
                        GET CONSULTANCY
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second part */}
      <div className="mt-44 md:mt-32 text-center font-bold text-2xl md:text-4xl mx-5 sm:mx-0">
        <h1>
          <span> Discover</span>257+ legal services over one platform
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5 mx-5 md:mx-20 lg:mx-28 mt-10 md:mt-16">
        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service1} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Online
            <br /> Accounting
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service2} className="w-[75px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-4">Affidavit</p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service3} className="w-[55px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Application
            <br />
            Form
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service4} className="w-[55px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Dissolution
            <br />
            of Deeds
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service5} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Food
            <br />
            Licence
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service6} className="w-[40px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            GST Return
            <br />
            Filing
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service7} className="w-[50px] h-auto"></img>
          </div>
         
          <p className="text-md font-semibold text-center mt-3">
            GST
            <br />
            Registration
          </p>
        
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service8} className="w-[80px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-4">
            ICEGATE <br /> Registration
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service9} className="w-[55px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Import Export
            <br />
            Licence
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service10} className="w-[55px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Income Tax
            <br />
            Return Filing
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service11} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Legal
            <br />
            Drafting
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service12} className="w-[40px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            MSME
            <br />
            Registration
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service13} className="w-[70px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">NOC</p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service14} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Partnership
            <br />
            Deed
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service15} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            PF
            <br />
            Registration
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service16} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Power of
            <br />
            Attorney
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service17} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Professional
            <br />
            Tax Registration
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service18} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Society
            <br />
            Registration
          </p>
        </div>
      </div>

      <div className="border-b-2 border-[#8A4117] mx-5 md:mx-20 lg:mx-28 py-5 mb-5"></div>

      {/* third part */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28 mx-5 md:mx-20 lg:mx-32 mt-5 md:mt-14">
        <div>
          <Slider {...settings2}>
            <div>
              <h1 className="text-xl font-semibold text-[#8A4117]">Deepak</h1>
              <p className="text-justify mt-4 text-[#1E1E1E]">
                Another noteworthy aspect of Legal257's service was the
                transparency regarding fees and costs. I received a detailed
                breakdown of the expected expenses upfront, allowing me to make
                informed decisions. The pricing was fair and competitive,
                especially considering the high-quality legal representation I
                received.
              </p>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-[#8A4117]">Amisha</h1>
              <p className="text-justify mt-4 text-[#1E1E1E]">
                I recently had the opportunity to utilize the online legal
                services provided by Legal257, and I must say that I am
                thoroughly impressed. As someone who needed legal assistance but
                couldn't spare the time for in-person consultations, their
                online platform proved to be a convenient and efficient
                solution.
              </p>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-[#8A4117]">Anjali</h1>
              <p className="text-justify mt-4 text-[#1E1E1E]">
                Right from the start, the website was user-friendly and
                intuitive, making it easy to navigate and find the information I
                needed. The process of submitting my legal request was
                straightforward, and I appreciated the option to provide
                relevant documents electronically, saving me the hassle of
                scanning or mailing physical copies.
              </p>
            </div>
          </Slider>
        </div>

        <div>
          <img src={GoogleImg}></img>
        </div>
      </div>

      {/* fourth part */}

      <div className="mx-5 md:mx-20 lg:mx-28 mt-5 md:mt-20 lg:mt-28">
        <Slider {...settings3}>
          <div className="">
            <div className="flex justify-center">
              <img src={Service1} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Online
              <br /> Accounting
            </p>
            <div className="border-b-4 border-[#8A4117] mx-10 py-3"></div>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={Service5} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Food
              <br />
              Licence
            </p>
            <div className="border-b-4 border-[#8A4117] mx-10 py-3"></div>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={Service19} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Trade
              <br />
              Licence
            </p>
            <div className="border-b-4 border-[#8A4117] mx-10 py-3"></div>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={Service20} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Trademark
              <br />
              Registration
            </p>
            <div className="border-b-4 border-[#8A4117] mx-10 py-3"></div>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={Service21} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              GST Return
              <br />
              Filing
            </p>
            <div className="border-b-4 border-[#8A4117] mx-10 py-3"></div>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={Service22} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Gumasta
              <br />
              Licence
            </p>
            <div className="border-b-4 border-[#8A4117] mx-10 py-3"></div>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={Service10} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              ITR
              <br />
              Filing
            </p>
            <div className="border-b-4 border-[#8A4117] mx-10 py-3"></div>
          </div>
        </Slider>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-5 mx-5 md:mx-20 lg:mx-28 px-5 md:px-20 mt-5 md:mt-10 
       bg-white shadow-2xl p-5"
      >
        <div className="md:col-span-4 ">
          <img src={GstImg}></img>
        </div>

        <div className="md:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
           
              <h1 className="text-[#01355D] text-xl md:text-2xl font-semibold">
                GST Registration
              </h1>
            </div>

            <div>
              <span className="font-semibold text-md">
                Time Required : 6-7 days
              </span>
              <span className="border-r-2 border-black mx-3"></span>
              <span className="font-semibold text-md">
                Starting at : &#x20b9;
                <b className="text-[#954535]">2251</b>
              </span>
            </div>
          </div>

          <p className="mt-5 text-md font-medium">
            Register yourself as a trusted business of this country with GST
            online in minutes. Ask our experts to guide you for an easy GST
            Registration.
          </p>
          <div className="mt-5">
          <Link to="/GstRegistration"> 
            <button className="bg-[#8A4117] text-white px-4 py-3 rounded-[4px]">
              GET STARTED
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* fifth part */}

      <div className="mt-20 text-center">
        <h1 className="font-bold text-2xl md:text-4xl">
          What We Can{" "}
          <span className="bg-gradient-to-r from-purple-600 via-red-500 to-yellow-300">
            Help You
          </span>{" "}
          With?
        </h1>
      </div>
      <div className="mx-5 md:mx-20 lg:mx-28 mt-10 md:mt-20">
        <Slider {...settings3}>
          <div className="">
            <div className="flex justify-center">
              <img src={consultant} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Consultancy
            </p>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={taxConsultant} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Tax
              <br />
              Consultancy
            </p>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={taxExpert} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Tax
              <br />
              Experts
            </p>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={taxFiling} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Tax
              <br />
              Filing
            </p>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={taxPlaning} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Tax
              <br />
              Planning
            </p>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={updatesOnLaw} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Updates On
              <br />
              Laws
            </p>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={taxConsultant} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Tax
              <br />
              Consultancy
            </p>
          </div>
        </Slider>
      </div>

      {/* six part */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mx-5 md:mx-20 lg:mx-32 mt-5 md:mt-20">
        <div className="md:col-span-7">
          <div class="hexagonrow1">
            <div class="hexagoncol">
              <div class="hexagon">
                <img
                  class="hexalogo"
                  src="https://legal251.com/images/clients/1.png"
                  loading="lazy"
                />
                <div class="hexTop"></div>
                <div class="hexBottom"></div>
              </div>
            </div>
            <div class="hexagoncol">
              <div class="hexagon">
                <img
                  class="hexalogo"
                  src="https://legal251.com/images/clients/2.png"
                  loading="lazy"
                />
                <div class="hexTop"></div>
                <div class="hexBottom"></div>
              </div>
            </div>
            <div class="hexagoncol">
              <div class="hexagon">
                <img
                  class="hexalogo"
                  src="https://legal251.com/images/clients/3.png"
                  loading="lazy"
                />
                <div class="hexTop"></div>
                <div class="hexBottom"></div>
              </div>
            </div>
            <div class="hexagoncol">
              <div class="hexagon">
                <img
                  class="hexalogo"
                  src="https://legal251.com/images/clients/4.png"
                  loading="lazy"
                />
                <div class="hexTop"></div>
                <div class="hexBottom"></div>
              </div>
            </div>
          </div>

          <div class="hexagonrow2">
            <div class="hexagoncol">
              <div class="hexagon">
                <img
                  class="hexalogo"
                  src="https://legal251.com/images/clients/5.png"
                  loading="lazy"
                />
                <div class="hexTop"></div>
                <div class="hexBottom"></div>
              </div>
            </div>
            <div class="hexagoncol">
              <div class="hexagon">
                <img
                  class="hexalogo"
                  src="https://legal251.com/images/clients/6.png"
                  loading="lazy"
                />
                <div class="hexTop"></div>
                <div class="hexBottom"></div>
              </div>
            </div>
            <div class="hexagoncol">
              <div class="hexagon">
                <img
                  class="hexalogo"
                  src="https://legal251.com/images/clients/7.png"
                  loading="lazy"
                />
                <div class="hexTop"></div>
                <div class="hexBottom"></div>
              </div>
            </div>
            <div class="hexagoncol">
              <div class="hexagon">
                <img
                  class="hexalogo"
                  src="https://legal251.com/images/clients/8.png"
                  loading="lazy"
                />
                <div class="hexTop"></div>
                <div class="hexBottom"></div>
              </div>
            </div>
            <div class="hexagoncol">
              <div class="hexagon">
                <img
                  class="hexalogo"
                  src="https://legal251.com/images/clients/9.png"
                  loading="lazy"
                />
                <div class="hexTop"></div>
                <div class="hexBottom"></div>
              </div>
            </div>
          </div>

          <div class="hexagonrow3">
            <div class="hexagoncol">
              <div class="hexagon">
                <img
                  class="hexalogo"
                  src="https://legal251.com/images/clients/10.png"
                  loading="lazy"
                />
                <div class="hexTop"></div>
                <div class="hexBottom"></div>
              </div>
            </div>
            <div class="hexagoncol">
              <div class="hexagon">
                <img
                  class="hexalogo"
                  src="https://legal251.com/images/clients/11.png"
                  loading="lazy"
                />
                <div class="hexTop"></div>
                <div class="hexBottom"></div>
              </div>
            </div>
            <div class="xagoncol">
              <div class="hexagon">
                <img
                  class="hexalogo"
                  src="https://legal251.com/images/clients/12.png"
                  loading="lazy"
                />
                <div class="hexTop"></div>
                <div class="hexBottom"></div>
              </div>
            </div>
            <div class="hexagoncol">
              <div class="hexagon">
                <img
                  class="hexalogo"
                  src="https://legal251.com/images/clients/13.png"
                  loading="lazy"
                />
                <div class="hexTop"></div>
                <div class="hexBottom"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-center">
            <span className="text-[#01355D] font-semibold text-2xl md:text-4xl">
              100+
            </span>
          </h3>
          <p className="text-center text-[#01355D] font-semibold">
            Currently Served Cities
          </p>

          <h3 className="text-center mt-10 md:mt-28">
            <span className="text-[#01355D] font-semibold text-2xl md:text-4xl">
              110k+
            </span>
          </h3>
          <p className="text-center text-[#01355D] font-semibold">
            Trusted Clients
          </p>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-center mt-0 md:mt-20">
            <span className="text-[#01355D] font-semibold text-2xl md:text-4xl">
              354+
            </span>
          </h3>
          <p className="text-center text-[#01355D] font-semibold">
            Qualified Professionals
          </p>

          <h3 className="text-center mt-10 md:mt-20">
            <span className="text-[#01355D] font-semibold text-2xl md:text-4xl">
              50k+
            </span>
          </h3>
          <p className="text-center text-[#01355D] font-semibold">
            Queries Solved
          </p>
        </div>
      </div>

      {/* bank service */}
      <div className="mt-24 md:mt-32">
    <h1 className='text-center text-2xl text-3xl font-bold text-[#B70505]'>BANKING SERVICES</h1>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-5 md:mx-20 mt-10">
        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={zero} alt="image" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">
            ZERO BALANCE <br />
            ACCOUNT OPENING
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={CASH} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">
            CASH
            <br /> WITHDRAWAL
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={DEPOSIT} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">CASH DEPOSIT</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={fsat} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">M-CASH RETURN</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={pickup} alt="image" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">
            CASH PICKUP REQUEST
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={aadhar} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">AADHAAR PAY</p>
        </div>

        <div className="bg-white p-4 rounded shadow  mb-3">
          <img src={dmt} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">DMT</p>
        </div>

        <div className="bg-white p-4 rounded shadow  mb-3">
          <img src={aeps} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">AEPS</p>
        </div>

        <div className="bg-white p-4 rounded shadow  mb-3">
          <img src={upi} alt="image" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">ADD MONEY TO UPI</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={pan} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">NSDL PAN CARD</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={micro} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">DMT</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={bbps} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">BBPS</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={DROP} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">CASH DROP</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={bank} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">CASH DROP</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={RECHARGE} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">RECHARGE</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={PAY} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">PAY CONTACTS</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={mobile} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">PAY PHONE NUMBER</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={cibil} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">CIBIL SCORE</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={upid} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">UPI PAYMENT</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={FLIGHTBOOKING} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">FLIGHT BOOKING</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={bus} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">BUS BOOKING</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={HOTEL} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">HOTEL BOOKING</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={INSURANCE} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">INSURANCE POLICY</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={FASTAG} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">FASTAG</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={QR} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">QR CODE</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={bhim} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">PAY UPI ID</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={TRANSFER} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">BANK TRANSFER</p>
        </div>
      </div>



      {/* sevent part */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 mx-5 md:mx-20 lg:mx-32 mt-10 md:mt-20">
        <div className="">
          <h1 className="font-bold text-2xl md:text-4xl">
            Why Choose <span className="text-[#954535]">Legal257?</span>
          </h1>
          <p class="mt-4 text-md font-medium text-justify">
            Legal257 is the perfect choice for anyone looking to prepare legal
            documents , registrations and compliance with ease and confidence.
            Our team of experienced experts provide filing services that are
            always on-time and accurate. Plus, we have a mobile app and
            dashboard for managing your service &amp; documents, so you can stay
            on top of your filing and other works from anywhere. With over 10
            years of experience in the industry, you can trust us to get the job
            done right!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="">
            <div className="flex">
              <div className="">
                <img src={tile1} className="w-[25px] h-auto"></img>
              </div>

              <div className="">
                <p class="pl-5 font-semibold">Trusted Advisors</p>
              </div>
            </div>

            <div className="flex mt-3">
              <div className="">
                <img src={tile2} className="w-[25px] h-auto"></img>
              </div>

              <div className="">
                <p class="pl-5 font-semibold">10 Years of Experience</p>
              </div>
            </div>

            <div className="flex mt-3">
              <div className="">
                <img src={tile3} className="w-[25px] h-auto"></img>
              </div>

              <div className="">
                <p class="pl-5 font-semibold">Dedicated Experts</p>
              </div>
            </div>

            <div className="flex mt-3">
              <div className="">
                <img src={tile4} className="w-[25px] h-auto"></img>
              </div>

              <div className="">
                <p class="pl-5 font-semibold">Safe & Secure</p>
              </div>
            </div>

            <div className="flex mt-3">
              <div className="">
                <img src={tile1} className="w-[25px] h-auto"></img>
              </div>

              <div className="">
                <p class="pl-5 font-semibold">Digital Plateform</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex">
              <div className="">
                <img src={tile1} className="w-[25px] h-auto"></img>
              </div>

              <div className="">
                <p class="pl-5 font-semibold">Round Clock Support</p>
              </div>
            </div>

            <div className="flex mt-3">
              <div className="">
                <img src={tile2} className="w-[25px] h-auto"></img>
              </div>

              <div className="">
                <p class="pl-5 font-semibold">Verified Professionals</p>
              </div>
            </div>

            <div className="flex mt-3">
              <div className="">
                <img src={tile3} className="w-[25px] h-auto"></img>
              </div>

              <div className="">
                <p class="pl-5 font-semibold">Quick and Reliable System</p>
              </div>
            </div>

            <div className="flex mt-3">
              <div className="">
                <img src={tile4} className="w-[25px] h-auto"></img>
              </div>

              <div className="">
                <p class="pl-5 font-semibold">Super Fast Team</p>
              </div>
            </div>

            <div className="flex mt-3">
              <div className="">
                <img src={tile1} className="w-[25px] h-auto"></img>
              </div>

              <div className="">
                <p class="pl-5 font-semibold">Best Operational Control</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* eight part */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 mx-5 md:mx-20 lg:mx-32 mt-5 md:mt-20">
        <div className="md:col-span-7">
          <p className="text-2xl md:text-3xl lg:text-5xl font-bold">
            BOOK A <span className=" text-[#954535]">FREE</span>
          </p>
          <p className="text-2xl md:text-3xl lg:text-5xl font-bold mt-3">
            <span className="text-[#01355D]">CONSULTATION </span>NOW!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-5 md:mt-10">
            <div className="">
              <p className="text-2xl md:text-2xl lg:text-4xl font-medium">
                Ready to take first step ? Let's chat about how we can help.
              </p>
            </div>

            <div className="">
              <img
                src="https://legal251.com/images/bookdemo/Group_9801.svg"
                className="w-[50%] h-auto"
              />
            </div>
          </div>

          <div className="mt-5">
            <button className="bg-[#8A4117] text-white px-4 py-3 rounded-[4px]">
              Book A Free Demo
            </button>
          </div>
        </div>

        <div className="md:col-span-5 hidden lg:block">
          <img
            src="https://legal251.com/images/bookdemo/Group_97982x.png"
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
