import React, { useState } from "react";
import document from "../../assests/images/filing and more/doucment.svg";
import Group from "../../assests/images/filing and more/Group 656.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import {
  faHandshake,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import gstimage from "../../assests/images/filing and more/gstreturnimg.png";
import patnership2 from "../../assests/images/Start BusinessImages/PatnerShipimages/patnershipregimg.png";

const GstReturnFiling = () => {
  const [showParagraph1, setShowParagraph1] = useState(false);
  const [showParagraph2, setShowParagraph2] = useState(false);
  const [showParagraph3, setShowParagraph3] = useState(false);
  const [showParagraph4, setShowParagraph4] = useState(false);
  const [showParagraph5, setShowParagraph5] = useState(false);
  const [showParagraph6, setShowParagraph6] = useState(false);
  const [showParagraph7, setShowParagraph7] = useState(false);
  const [showParagraph8, setShowParagraph8] = useState(false);
  const [showParagraph9, setShowParagraph9] = useState(false);
  const [showParagraph10, setShowParagraph10] = useState(false);
  const [showParagraph11, setShowParagraph11] = useState(false);
  const [showParagraph12, setShowParagraph12] = useState(false);
  const [showParagraph13, setShowParagraph13] = useState(false);
  const [showParagraph14, setShowParagraph14] = useState(false);
  const [showParagraph15, setShowParagraph15] = useState(false);
  const [showParagraph16, setShowParagraph16] = useState(false);
  const [showParagraph17, setShowParagraph17] = useState(false);
  const handleButtonClick1 = () => {
    setShowParagraph1(true);
    setShowParagraph2(false);
    setShowParagraph3(false);
    setShowParagraph4(false);
    setShowParagraph5(false);
    setShowParagraph6(false);
    setShowParagraph7(false);
    setShowParagraph8(false);
    setShowParagraph9(false);
    setShowParagraph10(false);
    setShowParagraph11(false);
    setShowParagraph12(false);
    setShowParagraph13(false);
    setShowParagraph14(false);
    setShowParagraph15(false);
    setShowParagraph16(false);
    setShowParagraph17(false);
  };

  const handleButtonClick2 = () => {
    setShowParagraph1(false);
    setShowParagraph2(true);
    setShowParagraph3(false);
    setShowParagraph4(false);
    setShowParagraph5(false);
    setShowParagraph6(false);
    setShowParagraph7(false);
    setShowParagraph8(false);
    setShowParagraph9(false);
    setShowParagraph10(false);
    setShowParagraph11(false);
    setShowParagraph12(false);
    setShowParagraph13(false);
    setShowParagraph14(false);
    setShowParagraph15(false);
    setShowParagraph16(false);
    setShowParagraph17(false);
  };

  const handleButtonClick3 = () => {
    setShowParagraph1(false);
    setShowParagraph2(false);
    setShowParagraph3(true);
    setShowParagraph4(false);
    setShowParagraph5(false);
    setShowParagraph6(false);
    setShowParagraph7(false);
    setShowParagraph8(false);
    setShowParagraph9(false);
    setShowParagraph10(false);
    setShowParagraph11(false);
    setShowParagraph12(false);
    setShowParagraph13(false);
    setShowParagraph14(false);
    setShowParagraph15(false);
    setShowParagraph16(false);
    setShowParagraph17(false);
  };

  const handleButtonClick4 = () => {
    setShowParagraph1(false);
    setShowParagraph2(false);
    setShowParagraph3(false);
    setShowParagraph4(true);
    setShowParagraph5(false);
    setShowParagraph6(false);
    setShowParagraph7(false);
    setShowParagraph8(false);
    setShowParagraph9(false);
    setShowParagraph10(false);
    setShowParagraph11(false);
    setShowParagraph12(false);
    setShowParagraph13(false);
    setShowParagraph14(false);
    setShowParagraph15(false);
    setShowParagraph16(false);
    setShowParagraph17(false);
  };

  const handleButtonClick5 = () => {
    setShowParagraph1(false);
    setShowParagraph2(false);
    setShowParagraph3(false);
    setShowParagraph4(false);
    setShowParagraph5(true);
    setShowParagraph6(false);
    setShowParagraph7(false);
    setShowParagraph8(false);
    setShowParagraph9(false);
    setShowParagraph10(false);
    setShowParagraph11(false);
    setShowParagraph12(false);
    setShowParagraph13(false);
    setShowParagraph14(false);
    setShowParagraph15(false);
    setShowParagraph16(false);
    setShowParagraph17(false);
  };

  const handleButtonClick6 = () => {
    setShowParagraph1(false);
    setShowParagraph2(false);
    setShowParagraph3(false);
    setShowParagraph4(false);
    setShowParagraph5(false);
    setShowParagraph6(true);
    setShowParagraph7(false);
    setShowParagraph8(false);
    setShowParagraph9(false);
    setShowParagraph10(false);
    setShowParagraph11(false);
    setShowParagraph12(false);
    setShowParagraph13(false);
    setShowParagraph14(false);
    setShowParagraph15(false);
    setShowParagraph16(false);
    setShowParagraph17(false);
  };

  const handleButtonClick7 = () => {
    setShowParagraph1(false);
    setShowParagraph2(false);
    setShowParagraph3(false);
    setShowParagraph4(false);
    setShowParagraph5(false);
    setShowParagraph6(false);
    setShowParagraph7(true);
    setShowParagraph8(false);
    setShowParagraph9(false);
    setShowParagraph10(false);
    setShowParagraph11(false);
    setShowParagraph12(false);
    setShowParagraph13(false);
    setShowParagraph14(false);
    setShowParagraph15(false);
    setShowParagraph16(false);
    setShowParagraph17(false);
  };

  const handleButtonClick8 = () => {
    setShowParagraph1(false);
    setShowParagraph2(false);
    setShowParagraph3(false);
    setShowParagraph4(false);
    setShowParagraph5(false);
    setShowParagraph6(false);
    setShowParagraph7(false);
    setShowParagraph8(true);
    setShowParagraph9(false);
    setShowParagraph10(false);
    setShowParagraph11(false);
    setShowParagraph12(false);
    setShowParagraph13(false);
    setShowParagraph14(false);
    setShowParagraph15(false);
    setShowParagraph16(false);
    setShowParagraph17(false);
  };

  const handleButtonClick9 = () => {
    setShowParagraph1(false);
    setShowParagraph2(false);
    setShowParagraph3(false);
    setShowParagraph4(false);
    setShowParagraph5(false);
    setShowParagraph6(false);
    setShowParagraph7(false);
    setShowParagraph8(false);
    setShowParagraph9(true);
    setShowParagraph10(false);
    setShowParagraph11(false);
    setShowParagraph12(false);
    setShowParagraph13(false);
    setShowParagraph14(false);
    setShowParagraph15(false);
    setShowParagraph16(false);
    setShowParagraph17(false);
  };

  const handleButtonClick10 = () => {
    setShowParagraph1(false);
    setShowParagraph2(false);
    setShowParagraph3(false);
    setShowParagraph4(false);
    setShowParagraph5(false);
    setShowParagraph6(false);
    setShowParagraph7(false);
    setShowParagraph8(false);
    setShowParagraph9(false);
    setShowParagraph10(true);
    setShowParagraph11(false);
    setShowParagraph12(false);
    setShowParagraph13(false);
    setShowParagraph14(false);
    setShowParagraph15(false);
    setShowParagraph16(false);
    setShowParagraph17(false);
  };
  const handleButtonClick11 = () => {
    setShowParagraph1(false);
    setShowParagraph2(false);
    setShowParagraph3(false);
    setShowParagraph4(false);
    setShowParagraph5(false);
    setShowParagraph6(false);
    setShowParagraph7(false);
    setShowParagraph8(false);
    setShowParagraph9(false);
    setShowParagraph10(false);
    setShowParagraph11(true);
    setShowParagraph12(false);
    setShowParagraph13(false);
    setShowParagraph14(false);
    setShowParagraph15(false);
    setShowParagraph16(false);
    setShowParagraph17(false);
  };
  const handleButtonClick12 = () => {
    setShowParagraph1(false);
    setShowParagraph2(false);
    setShowParagraph3(false);
    setShowParagraph4(false);
    setShowParagraph5(false);
    setShowParagraph6(false);
    setShowParagraph7(false);
    setShowParagraph8(false);
    setShowParagraph9(false);
    setShowParagraph10(false);
    setShowParagraph11(false);
    setShowParagraph12(true);
    setShowParagraph13(false);
    setShowParagraph14(false);
    setShowParagraph15(false);
    setShowParagraph16(false);
    setShowParagraph17(false);
  };
  const handleButtonClick13 = () => {
    setShowParagraph1(false);
    setShowParagraph2(false);
    setShowParagraph3(false);
    setShowParagraph4(false);
    setShowParagraph5(false);
    setShowParagraph6(false);
    setShowParagraph7(false);
    setShowParagraph8(false);
    setShowParagraph9(false);
    setShowParagraph10(false);
    setShowParagraph11(false);
    setShowParagraph12(false);
    setShowParagraph13(true);
    setShowParagraph14(false);
    setShowParagraph15(false);
    setShowParagraph16(false);
    setShowParagraph17(false);
  };
  const handleButtonClick14 = () => {
    setShowParagraph1(false);
    setShowParagraph2(false);
    setShowParagraph3(false);
    setShowParagraph4(false);
    setShowParagraph5(false);
    setShowParagraph6(false);
    setShowParagraph7(false);
    setShowParagraph8(false);
    setShowParagraph9(false);
    setShowParagraph10(false);
    setShowParagraph11(false);
    setShowParagraph12(false);
    setShowParagraph13(false);
    setShowParagraph14(true);
    setShowParagraph15(false);
    setShowParagraph16(false);
    setShowParagraph17(false);
  };
  const handleButtonClick15 = () => {
    setShowParagraph1(false);
    setShowParagraph2(false);
    setShowParagraph3(false);
    setShowParagraph4(false);
    setShowParagraph5(false);
    setShowParagraph6(false);
    setShowParagraph7(false);
    setShowParagraph8(false);
    setShowParagraph9(false);
    setShowParagraph10(false);
    setShowParagraph11(false);
    setShowParagraph12(false);
    setShowParagraph13(false);
    setShowParagraph14(false);
    setShowParagraph15(true);
    setShowParagraph16(false);
    setShowParagraph17(false);
  };
  const handleButtonClick16 = () => {
    setShowParagraph1(false);
    setShowParagraph2(false);
    setShowParagraph3(false);
    setShowParagraph4(false);
    setShowParagraph5(false);
    setShowParagraph6(false);
    setShowParagraph7(false);
    setShowParagraph8(false);
    setShowParagraph9(false);
    setShowParagraph10(false);
    setShowParagraph11(false);
    setShowParagraph12(false);
    setShowParagraph13(false);
    setShowParagraph14(false);
    setShowParagraph15(false);
    setShowParagraph16(true);
    setShowParagraph17(false);
  };
  const handleButtonClick17 = () => {
    setShowParagraph1(false);
    setShowParagraph2(false);
    setShowParagraph3(false);
    setShowParagraph4(false);
    setShowParagraph5(false);
    setShowParagraph6(false);
    setShowParagraph7(false);
    setShowParagraph8(false);
    setShowParagraph9(false);
    setShowParagraph10(false);
    setShowParagraph11(false);
    setShowParagraph12(false);
    setShowParagraph13(false);
    setShowParagraph14(false);
    setShowParagraph15(false);
    setShowParagraph16(false);
    setShowParagraph17(true);
  };


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
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
      city: "",
    });
  };

  const [showForm, setShowForm] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };
  const openForm1 = () => {
    setShowForm1(true);
  };
  const openForm2 = () => {
    setShowForm2(true);
  };
  const openForm3 = () => {
    setShowForm3(true);
  };
  return (
    <>
      {/* section-1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-14 mx-5 md:mx-20 lg:mx-28 mt-24 md:mt-28">
        <div className="">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B70505]">
          GST Return Filing
          </h1>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            Legal257 offers specialized GST return filing services tailored to
            various business needs, considering factors like professional
            standards, industry type, imports, tax deductions, and monthly
            invoice count. Our team ensures you meet deadlines without risking
            penalties. With dedicated professionals, we prioritize your
            compliance, safeguarding your business from potential fines. Trust
            us for meticulous and reliable GST return filing assistance.
          </p>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            Legal257 delivers tailored GST return filing services, ensuring
            compliance, preventing fines, and safeguarding your business with
            dedicated professionals and meticulous assistance.
          </p>
          <div className="mt-5">
            <button className="bg-[#8A4117] text-white px-4 py-3 rounded-[4px]">
              GET STARTED
            </button>
          </div>
        </div>

        <div className="flex justify-center  ">
          <img src={gstimage} className=" w-[75%] md:w-[60%] h-auto"></img>
        </div>
      </div>


{/* section-2 */}
      <div className="mt-10 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            className="pr-5 text-[#01355D] "
          />
          Plans
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mx-5 md:mx-20 lg:mx-28 mt-5 md:mt-12">
        <div className="bg-[#B70505] rounded-xl shadow-lg p-3 ">
          <h1 className="text-white text-center font-semibold text-xl md:text-2xl ">
            STARTER
          </h1>
          <div className="bg-white  rounded-lg  mt-3">
            <div className="  p-8">
              {!showForm ? (
                <div className="">
                  <h2 className="text-xl font-bold mb-4">Tenure Options</h2>
                  <div className="text-center">
                    <button
                      onClick={openForm}
                      className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                    >
                      GET STARTED
                    </button>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold">Requirements:</h3>
                    <p>
                      - GSTR - 3B Excel file
                      <br />- GSTR - 1 File or Normal Excel file of Sales &
                      Purchase
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold">Inclusions:</h3>
                    <p>
                      - Dashboard for managing service
                      <br />
                      - Mobile application support
                      <br />
                      - Documents sharing facility
                      <br />
                      - Download deliverables any time
                      <br />
                      - Password sharing
                      <br />
                      - Round the clock support
                      <br />- Time to time updates & notifications
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-4">
                  {/* This is where your form or content will be displayed */}
                  <form onSubmit={handleSubmit}>
                    <p>
                      <input
                        type="text"
                        id="firstname"
                        required
                        name="firstName"
                        placeholder="First Name"
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Contact No"
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="city"
                        id="city"
                        name="city"
                        placeholder="City"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </p>
                    <div className="mt-5">
                      <button
                        type="submit"
                        className="bg-[#B70505] text-white px-4 py-2 rounded-[20px]"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#FBB03B]   rounded-xl shadow-lg p-3">
          <h1 className="text-white text-center font-semibold text-xl md:text-2xl ">
            BASIC
          </h1>
          <div className="bg-white  rounded-lg  p-7 mt-3">
            <div className=" ">
              {!showForm1 ? (
                <div className="">
                  <h2 className="text-xl font-bold mb-4">Tenure Options</h2>
                  <div className="text-center">
                    <button
                      onClick={openForm1}
                      className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                    >
                      GET STARTED
                    </button>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold">Requirements:</h3>
                    <p>
                      - GSTR - 3B Excel file
                      <br />- GSTR - 1 File or Normal Excel file of Sales &
                      Purchase
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold">Inclusions:</h3>
                    <p>
                      - E-way bill facility
                      <br />
                      -Dashboard for managing service
                      <br />
                      - Mobile application support
                      <br />
                      -Documents sharing facility
                      <br />
                      - Download deliverables any timeg
                      <br />
                      - Password sharing
                      <br />
                      - Round the clock support
                      <br />- Time to time updates & notifications
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-4">
                  {/* This is where your form or content will be displayed */}
                  <form onSubmit={handleSubmit}>
                    <p>
                      <input
                        type="text"
                        id="firstname"
                        required
                        name="firstName"
                        placeholder="First Name"
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Contact No"
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="city"
                        id="city"
                        name="city"
                        placeholder="City"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </p>
                    <div className="mt-5">
                      <button
                        type="submit"
                        className="bg-[#FBB03B] text-white px-4 py-2 rounded-[20px]"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#B70505]   rounded-xl shadow-lg p-3">
          <h1 className="text-white text-center font-semibold text-xl md:text-2xl ">
            PRO
          </h1>
          <div className="bg-white  rounded-lg  p-5 mt-3">
            <div className=" ">
              {!showForm2 ? (
                <div className="">
                  <h2 className="text-xl font-bold mb-4">Tenure Options</h2>
                  <div className="text-center">
                    <button
                      onClick={openForm2}
                      className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                    >
                      GET STARTED
                    </button>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold">Requirements:</h3>
                    <p>- Sales & Purchase Invoices</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Inclusions:</h3>
                    <p>
                      - GSTR-2A Reconciliation mismatch report
                      <br />
                      - Included data preparation (on basis of Invoices)
                      <br />
                      -Dashboard for managing service
                      <br />
                      - Mobile application support
                      <br />
                      -Documents sharing facility
                      <br />
                      -Download deliverables any time
                      <br />
                      - Password sharing
                      <br />
                      - Round the clock support
                      <br />- Time to time updates & notifications
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-4">
                  {/* This is where your form or content will be displayed */}
                  <form onSubmit={handleSubmit}>
                    <p>
                      <input
                        type="text"
                        id="firstname"
                        required
                        name="firstName"
                        placeholder="First Name"
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Contact No"
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="city"
                        id="city"
                        name="city"
                        placeholder="City"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </p>
                    <div className="mt-5">
                      <button
                        type="submit"
                        className="bg-[#B70505] text-white px-4 py-2 rounded-[20px]"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#FBB03B]   rounded-xl shadow-lg p-3">
          <h1 className="text-white text-center font-semibold text-xl md:text-2xl ">
            PREMIUM
          </h1>
          <div className="bg-white  rounded-lg  p-5">
            <div className=" ">
              {!showForm3 ? (
                <div className="">
                  <h2 className="text-xl font-bold mb-4">Tenure Options</h2>
                  <div className="text-center">
                    <button
                      onClick={openForm3}
                      className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                    >
                      GET STARTED
                    </button>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold">Requirements:</h3>
                    <p>- Sales & Purchase Invoices</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Inclusions:</h3>
                    <p>
                      -GSTR-2A Reconciliation mismatch report
                      <br />
                      - Included data preparation (on basis of Invoices)
                      <br />
                      - E-way bill facility
                      <br />
                      - Dashboard for managing service
                      <br />
                      -Mobile application support
                      <br />
                      - Documents sharing facility
                      <br />
                      - Download deliverables any time
                      <br />
                      - Password sharing
                      <br />
                      - Round the clock support
                      <br />
                      - Time to time updates & notifications
                      <br />
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-4">
                  {/* This is where your form or content will be displayed */}
                  <form onSubmit={handleSubmit}>
                    <p>
                      <input
                        type="text"
                        id="firstname"
                        required
                        name="firstName"
                        placeholder="First Name"
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Contact No"
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="city"
                        id="city"
                        name="city"
                        placeholder="City"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5 w-full"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </p>
                    <div className="mt-5">
                      <button
                        type="submit"
                        className="bg-[#FBB03B] text-white px-4 py-2 rounded-[20px]"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>


            {/* section-3 */}
            <div className="mt-10 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            className="pr-5 text-[#01355D] "
          />
          How To Apply
        </h1>
      </div>
      <div className="mt-10 md:mt-12 flex justify-center mx-5">
        <img src={patnership2} alt="" className="w-[100%] md:w-[50%] h-auto" />
      </div>

      {/* section-4 */}

      <div className="mt-10 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            className="pr-5 text-[#01355D] "
          />
         Types of forms 
        </h1>
      </div>
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  mx-5 md:mx-20 lg:mx-28  mt-10 md:mt-20">
            {/* Column 1 */}
            <div className="grid grid-cols-2 gap-2">
              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3  rounded-lg"
                onClick={handleButtonClick1}
              >
                GSTR-1
              </button>
              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3  rounded-lg"
                onClick={handleButtonClick2}
              >
                GSTR-2A
              </button>

              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3  rounded-lg"
                onClick={handleButtonClick3}
              >
                GSTR-2
              </button>
              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3  rounded-lg"
                onClick={handleButtonClick4}
              >
                GSTR-3B
              </button>

              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3  rounded-lg"
                onClick={handleButtonClick5}
              >
                GSTR-4
              </button>
              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3  rounded-lg"
                onClick={handleButtonClick6}
              >
                GSTR-5
              </button>

              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3 rounded-lg"
                onClick={handleButtonClick7}
              >
                GSTR-5A
              </button>
              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3  rounded-lg"
                onClick={handleButtonClick8}
              >
                GSTR-6A
              </button>

              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3  rounded-lg"
                onClick={handleButtonClick9}
              >
                GSTR-6
              </button>
              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3 rounded-lg"
                onClick={handleButtonClick10}
              >
                GSTR-7
              </button>

              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3 rounded-lg"
                onClick={handleButtonClick11}
              >
                GSTR-7A
              </button>
              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3  rounded-lg"
                onClick={handleButtonClick12}
              >
                GSTR-8
              </button>

              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3  rounded-lg"
                onClick={handleButtonClick13}
              >
                GSTR-9
              </button>
              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3  rounded-lg"
                onClick={handleButtonClick14}
              >
                GSTR-9A
              </button>

              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3  rounded-lg"
                onClick={handleButtonClick15}
              >
                GSTR-9C
              </button>
              <button
                className="border border-solid border-gray-500 text-gray-500 px-5 py-3 rounded-lg"
                onClick={handleButtonClick16}
              >
                GSTR-10
              </button>

              <button
                className="col-span-full border border-solid border-gray-500 text-gray-500 px-5 py-3 rounded-lg"
                onClick={handleButtonClick17}
              >
                All other forms
              </button>
            </div>

            {/* Column 2 */}
            <div>
              {/* Content for column 2 */}
              {showParagraph1 && (
                <div
                  className=" text-[#01355D] "
                  
                >
                  <h1 className="text-4xl font-bold">GSTR-1</h1>
                  <p className=" text-xl font-semibold text-justify">
                    The GSTR-1 is a monthly return form filed by businesses to
                    report the details of the outward supplies of all services
                    and goods. Every GST-registered entity should file GSTR-1
                    except Input service distributor and Composition taxpayer.
                    It must be filed even if there is no business activity. The
                    due date for filing GSTR-1 is 10th of every month.
                  </p>
                  <p className=" text-xl font-semibold">
                    GSTR 1 acts as the basis for all other form submissions for
                    the month.
                  </p>
                </div>
              )}
              {showParagraph2 && (
                <>
                  <div
                    className="text-left text-[#01355D]  "
                    
                  >
                    <h1 className="text-4xl font-bold">GSTR-2A</h1>
                    <p className=" text-xl font-semibold text-justify">
                      GSTR-2A is the return of details of all the inward
                      supplies of goods/services, that is, purchases made by
                      registered suppliers. This form is filed by the 15th of
                      every month. GSTR-2A is auto-populated, where the data
                      will be fetched from the GSTR-1 filed by the supplier. It
                      is a read-only return and cannot be edited.
                    </p>
                  </div>
                </>
              )}
              {showParagraph3 && (
                <>
                  <div
                    className="text-left text-[#01355D]  "
                    
                  >
                    <h1 className="text-4xl font-bold">GSTR-2</h1>
                    <p className=" text-xl font-semibold text-justify">
                      GSTR-2 is the return filed to furnish the details of all
                      the inward supplies of goods/services. It is possible to
                      edit this form, but the government has suspended the
                      filing.
                    </p>
                  </div>
                </>
              )}
              {showParagraph4 && (
                <>
                  <div
                    className="text-left text-[#01355D]  "
                   
                  >
                    <h1 className="text-4xl font-bold">GSTR-3B</h1>
                    <p className="text-xl font-semibold text-justify">
                      It is a summarized monthly return of all the details of
                      inward and outward supplies, input tax credits, and
                      details of all the GST liabilities. It is a
                      self-declaration form filed by all taxpayers for every tax
                      period.
                    </p>
                    <p className=" text-xl font-semibold">
                      The due date for filing the GSTR-3B return form is 20th
                      usually. However, the date may be changed if there are any
                      government notifications.
                    </p>
                  </div>
                </>
              )}
              {showParagraph5 && (
                <>
                  <div
                    className="text-left text-[#01355D]  "
                    
                  >
                    <h1 className="text-4xl font-bold">GSTR-4</h1>
                    <p className=" text-xl font-semibold text-justify">
                      GSTR-4 is filed every year by all taxpayers under the GST
                      composition scheme. Businesses should provide a summary of
                      the outward supplies and all the taxes paid thereon, as
                      details of the import of services and supplies that may
                      attract reverse charges.
                    </p>
                    <p  className=" text-xl font-semibold text-justify">
                      The due date for filing this form is the 30th of the
                      month, succeeding the financial year.
                    </p>
                  </div>
                </>
              )}
              {showParagraph6 && (
                <>
                  <div
                    className="text-left text-[#01355D]  "
          
                  >
                    <h1 className="text-4xl font-bold">GSTR-5</h1>
                    <p className=" text-xl font-semibold text-justify">
                      This form is filed by all non-resident taxpayers
                      registered in India and carries out business operations in
                      India. In the GSTR-5 return, businesses should furnish the
                      details of all the inward and outward supplies and the tax
                      liabilities. This form is to be submitted on a monthly
                      basis and has to be filed by every month on the 20th.
                    </p>
                  </div>
                </>
              )}
              {showParagraph7 && (
                <>
                  <div
                    className="text-left text-[#01355D]  "
                   
                  >
                    <h1 className="text-4xl font-bold">GSTR-5A</h1>
                    <p className=" text-xl font-semibold text-justify">
                      Form GSTR-5A is furnished by service providers of Online
                      Information and Database Access or Retrieval (OIDAR). It
                      is filed to declare the services provided to unregistered
                      entities or individuals from a place outside India to a
                      person in India. It is a monthly return filed by the 20th
                      of every month.
                    </p>
                  </div>
                </>
              )}
              {showParagraph8 && (
                <>
                  <div
                    className="text-left text-[#01355D]  "
              
                  >
                    <h1 className="text-4xl font-bold">GSTR-6A</h1>
                    <p className="text-xl font-semibold text-justify">
                      GSTR-6A form is a system-generated “draft” Statement of
                      Inward Supplies for a Receiver Taxpayer. It is a read-only
                      form.
                    </p>
                  </div>
                </>
              )}
              {showParagraph9 && (
                <>
                  <div
                    className="text-left text-[#01355D]  "
                  
                  >
                    <h1 className="text-4xl font-bold">GSTR-6</h1>
                    <p className=" text-xl font-semibold text-justify">
                      The Input Service provider generates and files GSTR-6 only
                      after all details furnished in GSTR 6A are accepted and
                      verified on the 13th of every month.
                    </p>
                  </div>
                </>
              )}
              {showParagraph10 && (
                <>
                  <div
                    className="text-left text-[#01355D]"
                    
                  >
                    <h1 className="text-4xl font-bold">GSTR-7</h1>
                    <p className=" text-xl font-semibold text-justify">
                      GSTR-7 is filed by the entities who deduct tax at the time
                      of making payment to the suppliers for purchase, that is,
                      inward supplies received.
                    </p>
                    <p className=" text-xl font-semibold">
                      GSTR-7 form contains details of Tax Deducted at Source
                      (TDS) under GST, the tax liability, and TDS refund..
                    </p>
                    <p className=" text-xl font-semibold">
                      GSTR7 must be filed on the 10th of the subsequent month.
                    </p>
                  </div>
                </>
              )}
              {showParagraph11 && (
                <>
                  <div
                    className="text-left text-[#01355D]  "
                
                  >
                    <h1 className="text-4xl font-bold">GSTR-7A</h1>
                    <p className="text-xl font-semibold text-justify">
                      GSTR 7A is better known as the TDS certificate, which is
                      generated as soon as the tax deductor does the GSTR filing
                      in Form GSTR-7. The assessee uses it for keeping records.
                    </p>
                  </div>
                </>
              )}
              {showParagraph12 && (
                <>
                  <div
                    className="text-left text-[#01355D]  "
                   
                  >
                    <h1 className="text-4xl font-bold">GSTR-8</h1>
                    <p className=" text-xl font-semibold text-justify">
                      The form GSTR-8 is filed by e-commerce businesses who
                      collect tax at source (TCS) to furnish the details of the
                      supplies made through the e-commerce platform..
                    </p>
                    <p className="leading-9 text-xl font-semibold">
                      It is filed on the 10th of every month
                    </p>
                  </div>
                </>
              )}
              {showParagraph13 && (
                <>
                  <div
                    className="text-left text-[#01355D]  "
              
                  >
                    <h1 className="text-4xl font-bold">GSTR-9</h1>
                    <p className=" text-xl font-semibold text-justify">
                      The GSTR 9 form is filed annually by entities to furnish
                      the details of all purchases, sales, input tax credits, or
                      refunds claimed or demanded created, and so. Regular
                      taxpayers file GSTR-9, SEZ units, SEZ developers, OIDAR
                      service providers, and the taxpayers who have withdrawn
                      from the composition scheme to ordinary taxpayers.
                    </p>
                    <p className="text-xl font-semibold">
                      Annual return purposes. It has to be duly filled by all
                      taxpayers by the coming financial year 31st. It mainly
                      consists of all the details of the 12 GSTR3 filed during
                      the financial year.
                    </p>
                  </div>
                </>
              )}
              {showParagraph14 && (
                <>
                  <div
                    className="text-left text-[#01355D]  "
                   
                  >
                    <h1 className="text-4xl font-bold">GSTR-9A</h1>
                    <p className=" text-xl font-semibold text-justify">
                      GSTR-9A is filed by entities who have opted for a
                      composition scheme at any time during the financial year.
                      The details furnished in GSTR-9A are inward and outward
                      supplies, taxes paid, demand created, refund, and input
                      tax credit availed or reversed.
                    </p>
                    <p className=" text-xl font-semibold">
                      Annual return purposes. It has to be duly filled by all
                      taxpayers by the coming financial year 31st. It mainly
                      consists of all the details of the 12 GSTR3 filed during
                      the financial year.
                    </p>
                  </div>
                </>
              )}
              {showParagraph15 && (
                <>
                  <div
                    className="text-left text-[#01355D]  "
                
                  >
                    <h1 className="text-4xl font-bold">GSTR-9C</h1>
                    <p className=" text-xl font-semibold text-justify">
                      The GSTR 9C reconciliation statement must be filed by
                      registered taxpayers with a total annual revenue above 5
                      Cr for the applicable financial year. The taxpayer is
                      required to complete and self-certify GSTR 9C on the GST
                      site. Taxpayers who must have their yearly accounts
                      audited per GST regulations are subject to filing this
                      form..
                    </p>
                  </div>
                </>
              )}
              {showParagraph16 && (
                <>
                  <div
                    className="text-left text-[#01355D]  "
               
                  >
                    <h1 className="text-4xl font-bold">GSTR-10</h1>
                    <p className=" text-xl font-semibold text-justify">
                      A taxable person whose GST registration is cancelled or
                      surrendered has to file a return in Form GSTR-10 called as
                      Final Return. This is statement of stocks held by such
                      taxpayer on day immediately preceding the date from which
                      cancellation is made effective. This return should be
                      filed within three months of the date of cancellation or
                      date of order of cancellation, whichever is later.
                    </p>
                  </div>
                </>
              )}
              {showParagraph17 && (
                <>
                  <div
                    className="text-left text-[#01355D]  "
                    
                  >
                    <h1 className="text-4xl font-bold">All other Forms</h1>
                    <p className=" text-xl font-semibold text-justify">
                      Registration Forms , Composition Scheme Forms , Forms for
                      Enrolment under Section 35 , GSTR 11 & All GST Returns
                      Forms , Input Tax Credit Forms , Electronic
                      Ledgers/Payment Forms , Audit Forms in GST, Advance Ruling
                      Forms in GST, Appellate Authority of Advance Ruling Forms
                      ,Transitional Credit Forms, E-Way Bill Forms ,​​​​​
                      Inspection Forms. Legal251 will take care of all these as
                      per applicability.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>




          {/* section-5 */}
          <div className="mt-10 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faHandshake}
            className="pr-5 text-[#01355D] "
          />
          Benefits
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 mx-5 md:mx-20 lg:mx-28 mt-10 md:mt-14">
        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Unified Platform</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Subsuming of Taxes</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Lower Taxes</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Ease of Doing Business</h1>
        </div>

        <div className="bg-white shadow-2xl  p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Larger Tax Base</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Large Volume Data Handling Capacity</h1>
        </div>

        <div className="bg-white shadow-2xl  p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Easy reconciliation Of Records</h1>
        </div>

        <div className="bg-white shadow-lg p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Multiple Platform Capabilities</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">A Simple and common form for all taxes</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Higher Threshold Benefits</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Startup Benefits</h1>
        </div>
      </div>

      {/* sixth-section */}
      <div className="mt-10 md:mt-20">
      <div className="mt-10 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            className="pr-5 text-[#01355D] "
          />
         Documents
        </h1>
      </div>
      
          <h1 className="text-xl md:text-2xl lg:text-3xl text-[#01355D] font-bold text-center mt-3">
            Documents required for GST Return Filing:-
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 md:mx-20 lg:mx-28 mt-5 md:mt-10 ">
          <div className="mt-5 mx-auto">
      <div className="w-full md:w-[70%] mx-auto text-center">
        <img src={document} alt="About Us" className="mx-auto" />
      </div>
    </div>
   
            <div>
            <div className="bg-gray-200 shadow-xl p-2 rounded-lg">
              <h1 className="text-center font-bold text-xl  text-yellow-500">
                GST Return Filing
              </h1>
              <div className="font-semibold text-md bg-white shadow-xl p-7 white mt-5 rounded-lg">
                <ol className=" list-disc text-left">
                  <li>One time:</li>
                  <li>GST Number</li>
                  <span>or</span>
                  <li>GST Registration Certificate</li>
                </ol>
                <div className="p-8 font-semibold text-md">
                  <div className="flex">
                    {/* First column */}
                    <div className="w-1/2 pr-4">
                      <ol className=" list-disc text-left">
                        <li>Monthly:</li>
                        <li>Starter and Basic plans:</li>
                        <li>GSTR - 3B (Soft copy)</li>
                        <li>GSTR - 1 (Soft copy)</li>
                        <span>or</span>
                        <li>Normal Excel file of Sales & Purchase</li>
                      </ol>
                    </div>

                    {/* Second column */}
                    <div className="w-1/2 pl-4">
                      <ol className=" list-disc text-left ">
                        <li>Pro and Premium plans::</li>
                        <li>Sales & Purchase Invoices</li>
                        <spna>or</spna>
                        <li>GSTR - 3B (Soft copy)</li>
                        <li>GSTR - 1 (Soft copy)</li>
                        <span>or</span>
                        <li>Normal Excel file of Sales & Purchase </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

           
            </div>
            <div className="p-8  mt-[14px] flex justify-center">
          
             
              <div className=" ">
                <h1 className="text-center">
                  Don't have all these documents?
                  <br />
                  We will help you in preparing these documents
                </h1>
                <h3 className="text-center mt-3">Just call on</h3>
                {/* <img src={Group} alt="image" className="mt-3" /> */}
                <p className="text-xl md:text-3xl  text-black font-bold text-center mt-3">+91-9435266783</p>
              </div>
         
          </div>
            </div>
          </div>
        
          </div>

    </>
  );
};

export default GstReturnFiling;
