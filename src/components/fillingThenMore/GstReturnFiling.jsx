import React, { useState } from "react";
import document from "../../assests/images/filing and more/doucment.svg";
import Group from "../../assests/images/filing and more/Group 656.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faFlagCheckered,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHandshake,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import gstimage from "../../assests/images/filing and more/gstreturnimg.png";
import patnership2 from "../../assests/images/Start BusinessImages/PatnerShipimages/patnershipregimg.png";
import { servieUrl } from "../../env/env";

const faqs = [
  {
    id: 1,
    question: " Q1. What is GST return filing ?",
    answer:
      "GST returns essentially stands for filing of all GST. Every individual who is covered under the GST Act must produce their income to the Tax Department of India. This is known as return and it includes details of every sale and purchase.",
  },
  {
    id: 2,
    question: "Q2. How to submit documents?",
    answer:
      "You can easily upload all your documents using our web dashboard or app and can easily review them later and share them with anyone.",
  },
  {
    id: 3,
    question: "Q3. Can a person without a GST number collect GST ?",
    answer:
      "No, a person without GST registration can neither collect GST from his customers nor can claim any input tax credit of GST paid by him.",
  },
  {
    id: 4,
    question: "Q4. What is the cash transaction limit in GST?",
    answer:
      "Threshold Limit – Cash payment exceeding Rs 10,000 to a person in a single day. The limit is extended to Rs. 35,000 in case the payments are being made for plying, hiring or leasing of goods carriage to a person in a single day.",
  },
  {
    id: 5,
    question: "Q5. What is the composition scheme under GST?",
    answer:
      "Composition dealers need to pay nominal tax rates based on the type of business (a maximum of 2% for manufacturers, 5% for the restaurant service sector and 1% for other suppliers).Small businesses with an annual turnover of less than Rs. 1.5 crore (Rs. 75 Lakhs for the Special Category States) can opt for the Composition scheme.",
  },
  {
    id: 6,
    question: "Q6. Does GST apply to all businesses?",
    answer:
      "You will be required to register under GST, even if your business' annual revenue is less than Rs 20 lakh, which is the threshold for businesses which are required to be registered under GST.",
  },
];
const GstReturnFiling = () => {
  const [formDataStarter, setFormDataStarter] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  const [formDataBasic, setFormDataBasic] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  const [formDataPro, setFormDataPro] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  const [formDataPremium, setFormDataPremium] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  const [showFormStarter, setShowFormStarter] = useState(false);
  const [showFormBasic, setShowFormBasic] = useState(false);
  const [showFormPro, setShowFormPro] = useState(false);
  const [showFormPremium, setShowFormPremium] = useState(false);

  const handleChangeStarter = (e) => {
    setFormDataStarter({ ...formDataStarter, [e.target.name]: e.target.value });
  };

  const handleChangeBasic = (e) => {
    setFormDataBasic({ ...formDataBasic, [e.target.name]: e.target.value });
  };

  const handleChangePro = (e) => {
    setFormDataPro({ ...formDataPro, [e.target.name]: e.target.value });
  };

  const handleChangePremium = (e) => {
    setFormDataPremium({ ...formDataPremium, [e.target.name]: e.target.value });
  };

  const handleSubmitStarter = (e) => {
    e.preventDefault();
    console.log("Starter Form Data:", formDataStarter);

    setFormDataStarter({
      name: "",
      email: "",
      phone: "",
      city: "",
    });
  };

  const handleSubmitBasic = (e) => {
    e.preventDefault();
    // console.log("Basic Form Data:", formDataBasic);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=Z9nseXk0218jRsyMVwAhHRYLPsrUDGZf");
    
    var raw = JSON.stringify({
      "firstName": formDataBasic.firstname,
      "email": formDataBasic.email,
      "contactNo": formDataBasic.phone,
      "city": formDataBasic.city,
      "type": "AddressAmendmentoutStateCompany"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch( servieUrl.url + "api/all-pages-api/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    setFormDataBasic({
      name: "",
      email: "",
      phone: "",
      city: "",
    });
  };

  const handleSubmitPro = (e) => {
    e.preventDefault();
    // console.log("Pro Form Data:", formDataPro);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=Z9nseXk0218jRsyMVwAhHRYLPsrUDGZf");
    
    var raw = JSON.stringify({
      "firstName": formDataPro.firstname,
      "email": formDataPro.email,
      "contactNo": formDataPro.phone,
      "city": formDataPro.city,
      "type": "GST Return Filing"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(servieUrl.url + "api/all-pages-api/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    setFormDataPro({
      name: "",
      email: "",
      phone: "",
      city: "",
    });
  };

  const handleSubmitPremium = (e) => {
    e.preventDefault();
    console.log("Premium Form Data:", formDataPremium);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=Z9nseXk0218jRsyMVwAhHRYLPsrUDGZf");
    
    var raw = JSON.stringify({
      "firstName": formDataPremium.firstname,
      "email": formDataPremium.email,
      "contactNo": formDataPremium.phone,
      "city": formDataPremium.city,
      "type": "Gst Return Filing"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(servieUrl.url + "api/all-pages-api/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    setFormDataPremium({
      name: "",
      email: "",
      phone: "",
      city: "",
    });
  };

  // Reset the form

  const openFormStarter = () => {
    setShowFormStarter(true);
  };

  const openFormBasic = () => {
    setShowFormBasic(true);
  };
  const openFormPro = () => {
    setShowFormPro(true);
  };

  const openFormPremium = () => {
    setShowFormPremium(true);
  };

  const [selectedContent, setSelectedContent] = useState("");

  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
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
              {!showFormStarter ? (
                <div className="">
                  <h2 className="text-xl font-bold mb-4">Tenure Options</h2>
                  <div className="text-center">
                    <button
                      onClick={openFormStarter}
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
                  <form onSubmit={handleSubmitStarter}>
                    <p>
                      <input
                        type="text"
                        id="name"
                        required
                        name="name"
                        placeholder=" Name"
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataStarter.name}
                        onChange={handleChangeStarter}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataStarter.email}
                        onChange={handleChangeStarter}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Contact No"
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataStarter.phone}
                        onChange={handleChangeStarter}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="city"
                        id="city"
                        name="city"
                        placeholder="City"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataStarter.city}
                        onChange={handleChangeStarter}
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
              {!showFormBasic ? (
                <div className="">
                  <h2 className="text-xl font-bold mb-4">Tenure Options</h2>
                  <div className="text-center">
                    <button
                      onClick={openFormBasic}
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
                  <form onSubmit={handleSubmitBasic}>
                    <p>
                      <input
                        type="text"
                        id="name"
                        required
                        name="name"
                        placeholder=" Name"
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataBasic.name}
                        onChange={handleChangeBasic}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataBasic.email}
                        onChange={handleChangeBasic}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Contact No"
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataBasic.phone}
                        onChange={handleChangeBasic}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="city"
                        id="city"
                        name="city"
                        placeholder="City"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataBasic.city}
                        onChange={handleChangeBasic}
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
              {!showFormPro ? (
                <div className="">
                  <h2 className="text-xl font-bold mb-4">Tenure Options</h2>
                  <div className="text-center">
                    <button
                      onClick={openFormPro}
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
                  <form onSubmit={handleSubmitPro}>
                    <p>
                      <input
                        type="text"
                        id="name"
                        required
                        name="name"
                        placeholder="Name"
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataPro.name}
                        onChange={handleChangePro}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataPro.email}
                        onChange={handleChangePro}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Contact No"
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataPro.phone}
                        onChange={handleChangePro}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="city"
                        id="city"
                        name="city"
                        placeholder="City"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataPro.city}
                        onChange={handleChangePro}
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
              {!showFormPremium ? (
                <div className="">
                  <h2 className="text-xl font-bold mb-4">Tenure Options</h2>
                  <div className="text-center">
                    <button
                      onClick={openFormPremium}
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
                  <form onSubmit={handleSubmitPremium}>
                    <p>
                      <input
                        type="text"
                        id="name"
                        required
                        name="name"
                        placeholder=" Name"
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataPremium.name}
                        onChange={handleChangePremium}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataPremium.email}
                        onChange={handleChangePremium}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Contact No"
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataPremium.phone}
                        onChange={handleChangePremium}
                      />
                    </p>
                    <p className="mt-3">
                      <input
                        type="city"
                        id="city"
                        name="city"
                        placeholder="City"
                        required
                        className="py-2 border-b-2 border-slate-400 px-5"
                        value={formDataPremium.city}
                        onChange={handleChangePremium}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 md:mx-20 lg:mx-28 mt-10 md:mt-16">
        <div>
          <div className="grid grid-cols-2 gap-4 ">
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4  rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "The GSTR-1 is a monthly return form filed by businesses to report the details of the outward supplies of all services and goods. Every GST-registered entity should file GSTR-1 except Input service distributor and Composition taxpayer. It must be filed even if there is no business activity. The due date for filing GSTR-1 is 10th of every month."
                )
              }
            >
              GSTR-1
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "GSTR-2A is the return of details of all the inward supplies of goods/services, that is, purchases made by registered suppliers. This form is filed by the 15th of every month. GSTR-2A is auto-populated, where the data will be fetched from the GSTR-1 filed by the supplier. It is a read-only return and cannot be edited."
                )
              }
            >
              GSTR-2A
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "GSTR-2 is the return filed to furnish the details of all the inward supplies of goods/services. It is possible to edit this form, but the government has suspended the filing."
                )
              }
            >
              GSTR-2
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "It is a summarized monthly return of all the details of inward and outward supplies, input tax credits, and details of all the GST liabilities. It is a self-declaration form filed by all taxpayers for every tax period. The due date for filing the GSTR-3B return form is 20th usually. However, the date may be changed if there are any government notifications."
                )
              }
            >
              GSTR-3B
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "GSTR-4 is filed every year by all taxpayers under the GST composition scheme. Businesses should provide a summary of the outward supplies and all the taxes paid thereon, as details of the import of services and supplies that may attract reverse charges. The due date for filing this form is the 30th of the month, succeeding the financial year."
                )
              }
            >
              GSTR-4
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "This form is filed by all non-resident taxpayers registered in India and carries out business operations in India. In the GSTR-5 return, businesses should furnish the details of all the inward and outward supplies and the tax liabilities. This form is to be submitted on a monthly basis and has to be filed by every month on the 20th."
                )
              }
            >
              GSTR-5
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "Form GSTR-5A is furnished by service providers of Online Information and Database Access or Retrieval (OIDAR). It is filed to declare the services provided to unregistered entities or individuals from a place outside India to a person in India. It is a monthly return filed by the 20th of every month."
                )
              }
            >
              GSTR-5A
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "GSTR-6A form is a system-generated “draft” Statement of Inward Supplies for a Receiver Taxpayer. It is a read-only form."
                )
              }
            >
              GSTR-6A
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "The Input Service provider generates and files GSTR-6 only after all details furnished in GSTR 6A are accepted and verified on the 13th of every month."
                )
              }
            >
              GSTR-6
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "GSTR-7 is filed by the entities who deduct tax at the time of making payment to the suppliers for purchase, that is, inward supplies received. GSTR-7 form contains details of Tax Deducted at Source (TDS) under GST, the tax liability, and TDS refund. GSTR7 must be filed on the 10th of the subsequent month."
                )
              }
            >
              GSTR-7
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "GSTR 7A is better known as the TDS certificate, which is generated as soon as the tax deductor does the GSTR filing in Form GSTR-7. The assessee uses it for keeping records."
                )
              }
            >
              GSTR-7A
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "The form GSTR-8 is filed by e-commerce businesses who collect tax at source (TCS) to furnish the details of the supplies made through the e-commerce platform. It is filed on the 10th of every month."
                )
              }
            >
              GSTR-8
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "The GSTR 9 form is filed annually by entities to furnish the details of all purchases, sales, input tax credits, or refunds claimed or demanded created, and so. Regular taxpayers file GSTR-9, SEZ units, SEZ developers, OIDAR service providers, and the taxpayers who have withdrawn from the composition scheme to ordinary taxpayers. Annual return purposes. It has to be duly filled by all taxpayers by the coming financial year 31st. It mainly consists of all the details of the 12 GSTR3 filed during the financial year."
                )
              }
            >
              GSTR-9
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "GSTR-9A is filed by entities who have opted for a composition scheme at any time during the financial year. The details furnished in GSTR-9A are inward and outward supplies, taxes paid, demand created, refund, and input tax credit availed or reversed."
                )
              }
            >
              GSTR-9A
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "The GSTR 9C reconciliation statement must be filed by registered taxpayers with a total annual revenue above 5 Cr for the applicable financial year. The taxpayer is required to complete and self-certify GSTR 9C on the GST site. Taxpayers who must have their yearly accounts audited per GST regulations are subject to filing this form."
                )
              }
            >
              GSTR-9C
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "A taxable person whose GST registration is cancelled or surrendered has to file a return in Form GSTR-10 called as Final Return. This is statement of stocks held by such taxpayer on day immediately preceding the date from which cancellation is made effective. This return should be filed within three months of the date of cancellation or date of order of cancellation, whichever is later."
                )
              }
            >
              GSTR-10
            </button>
          </div>
          <div className="mt-5 flex justify-center">
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "Registration Forms , Composition Scheme Forms , Forms for Enrolment under Section 35 , GSTR 11 & All GST Returns Forms , Input Tax Credit Forms , Electronic Ledgers/Payment Forms , Audit Forms in GST, Advance Ruling Forms in GST, Appellate Authority of Advance Ruling Forms ,Transitional Credit Forms, E-Way Bill Forms ,​​​​​ Inspection Forms. Legal257 will take care of all these as per applicability."
                )
              }
            >
              All other Forms
            </button>
          </div>
        </div>

        <div>
          <div className="text-[#01355D] text-xl font-semibold text-justify  ">
            {selectedContent ? (
              <div className="border border-gray-300 hover:border-[#B70505] p-4 rounded-lg">
                <h2 className="text-2xl  font-bold mb-2">Selected GSTR:</h2>
                <p>{selectedContent}</p>
              </div>
            ) : (
              <p className="border border-gray-300  p-4  rounded-lg">
                Please select a GSTR to view its content.
              </p>
            )}
          </div>
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
          <h1 className="mt-3 text-center">
            Large Volume Data Handling Capacity
          </h1>
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
          <h1 className="mt-3 text-center">
            A Simple and common form for all taxes
          </h1>
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
                <p className="text-xl md:text-3xl  text-black font-bold text-center mt-3">
                  +91-9435266783
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-7  desktop*/}
      <div className="mt-12 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faRegistered}
            className="pr-5 text-[#01355D] "
          />
          Filing Process
        </h1>
      </div>
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mx-5 md:mx-20 lg:mx-24 xl:mx-28 mt-5 md:mt-14">
          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              Our team will look into the documents that you have submitted,
              reviewing any false or mistaken information to keep you
              comfortable.
            </p>
          </div>

          <div class="flex justify-center items-center col-span-3">
            <div class="border-t-4 border-dashed border-yellow-600 w-[40%] xl:w-[70%]"></div>
            <div class="w-4 h-4 border-t-4 border-r-4 border-yellow-600 transform rotate-45"></div>
          </div>

          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              Our best GST Filing experts are here to deal with document
              necessities & to fulfil your return filing needs.
            </p>
          </div>

          <div class="flex justify-center items-center col-span-3">
            <div class="border-t-4 border-dashed border-yellow-600  w-[40%] xl:w-[70%]"></div>
            <div class="w-4 h-4 border-t-4 border-r-4 border-yellow-600 transform rotate-45"></div>
          </div>

          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium ">
              On the basics of the details that you submitted our experts will
              determine which category of GST return is to be filed for your
              business.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mx-5 md:mx-20 lg:mx-24 xl:mx-28  mt-5">
          <div className="col-span-4"></div>
          <div className="col-span-4"></div>
          <div className="col-span-2"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1 relative">
            <div className="relative h-20">
              <div className="absolute top-0 left-1/8 transform -translate-x-1/8 border-t-4 border-b-4 border-l-4 border-dashed border-yellow-600 h-full w-0"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mx-5 md:mx-20 lg:mx-24 xl:mx-28  mt-5">
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
          <div class="col-span-3"> </div>
          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              The respective experts will proceed further with your documents in
              order to file your GST Return.
            </p>
          </div>
          <div class="flex  justify-center items-center col-span-3">
            <div class="w-4 h-4 border-t-4 border-l-4 border-yellow-600 transform -rotate-45"></div>
            <div class="border-t-4 border-dashed border-yellow-600  w-[40%] xl:w-[70%]"></div>
          </div>
          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              You are supposed to wait until our experts reach out to notify you
              of the status of your GST return as filed.
            </p>
          </div>
        </div>
      </div>

      {/* mobile-responsive */}

      <div className="block lg:hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mx-5 md:mx-20 lg:mx-28 mt-5 md:mt-14">
          <div className="col-span-2 flex items-center justify-center">
            <div className="bg-white border-4 border-[#01355D] rounded-full w-52 h-52 flex items-center justify-center p-8">
              <p className="text-center text-xs font-medium">
                Our team will look into the documents that you have submitted,
                reviewing any false or mistaken information to keep you
                comfortable.
              </p>
            </div>
          </div>

          <div className="col-span-3 relative">
            <div className="relative h-10 flex items-center justify-center">
              <div className="absolute top-0 right-1/10 transform -translate-x-1/2 border-t-4 border-b-4 border-l-4 border-dashed border-yellow-600 h-full w-0"></div>
            </div>
          </div>

          <div className="col-span-2 flex items-center justify-center">
            <div className="bg-white border-4 border-[#01355D] rounded-full w-52 h-52 flex items-center justify-center p-8">
              <p className="text-center text-xs font-medium">
                Our best GST Filing experts are here to deal with document
                necessities & to fulfil your return filing needs.
              </p>
            </div>
          </div>

          <div className="col-span-3 relative">
            <div className="relative h-10 flex items-center justify-center">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-t-4 border-b-4 border-l-4 border-dashed border-yellow-600 h-full w-0"></div>
            </div>
          </div>

          <div className="col-span-2 flex items-center justify-center">
            <div className="bg-white border-4 border-[#01355D] rounded-full w-52 h-52 flex items-center justify-center p-8">
              <p className="text-center text-xs font-medium">
                On the basics of the details that you submitted our experts will
                determine which category of GST return is to be filed for your
                business.
              </p>
            </div>
          </div>

          <div className="col-span-3 relative">
            <div className="relative h-10 flex items-center justify-center">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-t-4 border-b-4 border-l-4 border-dashed border-yellow-600 h-full w-0"></div>
            </div>
          </div>

          <div className="col-span-2 flex items-center justify-center">
            <div className="bg-white border-4 border-[#01355D] rounded-full w-52 h-52 flex items-center justify-center p-8">
              <p className="text-center text-xs font-medium">
                The respective experts will proceed further with your documents
                in order to file your GST Return.
              </p>
            </div>
          </div>

          <div className="col-span-3 relative">
            <div className="relative h-10 flex items-center justify-center">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-t-4 border-b-4 border-l-4 border-dashed border-yellow-600 h-full w-0"></div>
            </div>
          </div>

          <div className="col-span-2 flex items-center justify-center">
            <div className="bg-white border-4 border-[#01355D] rounded-full w-52 h-52 flex items-center justify-center p-8">
              <p className="text-center text-xs font-medium">
                You are supposed to wait until our experts reach out to notify
                you of the status of your GST return as filed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section-8 */}
      <div className="mt-12 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="pr-5 text-[#01355D] "
          />
          Faq's
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-5 md:mx-20 lg:mx-28 mt-8">
        {faqs.map((faq) => (
          <div key={faq.id} className="p-4">
            <div
              className="border-2 border-gray-300 p-4 cursor-pointer flex justify-between items-center rounded-[4px]"
              onClick={() => toggleFAQ(faq.id)}
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <span className="text-gray-500">
                {openId === faq.id ? (
                  <i className="fas fa-minus" />
                ) : (
                  <i className="fas fa-plus" />
                )}
              </span>
            </div>
            {openId === faq.id && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default GstReturnFiling;
