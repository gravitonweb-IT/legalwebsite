import React, { useState } from "react";
import document from "../../assests/images/filing and more/doucment.svg";
import incotaximage from "../../assests/images/filing and more/incometaximg.png";
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
import patnership2 from "../../assests/images/Start BusinessImages/PatnerShipimages/patnershipregimg.png";
import { servieUrl } from "../../env/env";


const faqs = [
  {
    id: 1,
    question:
      " Q1. What is income tax return filing?",
    answer:
      "A tax return is a form or form filed with a tax authority that reports income, expenses, and other pertinent tax information. Tax returns allow taxpayers to calculate their tax liability, schedule tax payments, or request refunds for the overpayment of taxes. In most countries, tax returns must be filed annually for an individual or business with reportable income, including wages, interest, dividends, capital gains, or other profits.",
  },
  {
    id: 2,
    question: "Q2. Who is required to file an Income Tax Return?",
    answer: "Anybody who is less than 60 years of age and has an annual income of more than Rs 2.5 lakh has to file income tax returns, according to the Income Tax Act. For senior citizens, the cut-off is Rs 3 lakh, and for those who are more than 80 years old, the cut off is Rs 5 lakh.",
  },
  {
    id: 3,
    question:
      "Q3. Can I file a return of income even if my income is below taxable limits?",
    answer:
      "Yes, you can file a return of income voluntarily even if your income is less than the basic exemption limit.",
  },
  {
    id: 4,
    question: "Q4.  How many types of income tax returns forms are available for individuals?",
    answer:
      "In total, there are six ITR forms for individuals, namely, ITR-1, ITR-2, ITR-2A, ITR-3, ITR-4, and ITR-4S.",
  },
  {
    id: 5,
    question: "Q5.  If I have paid excess tax, how will it be refunded to me?",
    answer:
      "The excess tax can be claimed as a refund by filing your income tax return (ITR). After your return is processed and provided the tax department accepts your refund claim, the amount claimed as a refund would be credited back to your bank account through Electronic Clearance Service (ECS) transfer. You would also get an email intimation for the same.",
  },
  {
    id: 6,
    question: "Q6. How can I get a copy of ITR?",
    answer:
      "You can download a copy of your Income Tax Return acknowledgement after filing it online. The I-T department sends your ITR-V acknowledgement to your registered e-mail id.",
  },
];



const ITSfiling = () => {
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
    // console.log("Starter Form Data:", formDataStarter);
    

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
      "type": "ITS Fling"
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
      "type": "ITS Filing"
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
    // console.log("Premium Form Data:", formDataPremium);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=Z9nseXk0218jRsyMVwAhHRYLPsrUDGZf");
    
    var raw = JSON.stringify({
      "firstName": formDataPremium.firstname,
      "email": formDataPremium.email,
      "contactNo": formDataPremium.phone,
      "city": formDataPremium.city,
      "type": "ITS Filing"
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
            Income Tax Return Filing
          </h1>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            Easily file various tax returns—salary, capital gains, business,
            professional, or property taxes—directly with Legal257. Access
            comprehensive tax return services effortlessly, ensuring a seamless
            process and expert assistance at your convenience.
          </p>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            File salary, capital gains, business, professional, or property
            taxes directly with Legal257. Access comprehensive tax return
            services easily, ensuring expert assistance and a seamless filing
            process.
          </p>
          <div className="mt-5">
            <button className="bg-[#8A4117] text-white px-4 py-3 rounded-[4px]">
              GET STARTED
            </button>
          </div>
        </div>

        <div className="flex justify-center  ">
          <img src={incotaximage} className=" w-[75%] md:w-[60%] h-auto"></img>
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
          <h1 className="mt-3 text-center">Accessibility to past data</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Claiming Refund</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Carry-forward Losses</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Income in Compensation cases</h1>
        </div>

        <div className="bg-white shadow-2xl  p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Self-Employed Individual</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Being a Responsible Citizen</h1>
        </div>

        <div className="bg-white shadow-2xl  p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Income & Address Proof</h1>
        </div>

        <div className="bg-white shadow-lg p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Buying a high life cover</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Avoid interest on tax liability</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Proof of Income</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Elimination of Multiple Taxes</h1>
        </div>
      </div>

      {/* section-5 */}
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

      {/* section-6  desktop*/}
      <div className="mt-12 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faRegistered}
            className="pr-5 text-[#01355D] "
          />
          Registration Process
        </h1>
      </div>
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mx-5 md:mx-20 lg:mx-24 xl:mx-28 mt-5 md:mt-14">
          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              After you have submitted your documents our team will go through
              them carefully and will inform you if any changes are required to
              avoid mistakes
            </p>
          </div>

          <div class="flex justify-center items-center col-span-3">
            <div class="border-t-4 border-dashed border-yellow-600 w-[40%] xl:w-[70%]"></div>
            <div class="w-4 h-4 border-t-4 border-r-4 border-yellow-600 transform rotate-45"></div>
          </div>

          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              Our best ITR filing experts are here to deal with document
              necessities & fulfilment of filing.
            </p>
          </div>

          <div class="flex justify-center items-center col-span-3">
            <div class="border-t-4 border-dashed border-yellow-600  w-[40%] xl:w-[70%]"></div>
            <div class="w-4 h-4 border-t-4 border-r-4 border-yellow-600 transform rotate-45"></div>
          </div>

          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium ">
              Experts will carefully look into your expenses and income
              information so that they consult you regarding this.
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
              Based on your respective plan relevant experts will prepare your
              Income Tax Return.
            </p>
          </div>
          <div class="flex  justify-center items-center col-span-3">
            <div class="w-4 h-4 border-t-4 border-l-4 border-yellow-600 transform -rotate-45"></div>
            <div class="border-t-4 border-dashed border-yellow-600  w-[40%] xl:w-[70%]"></div>
          </div>
          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              At last, we will file an Income Tax Return on your behalf and
              share all the deliverables with you.
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
                After you have submitted your documents our team will go through
                them carefully and will inform you if any changes are required
                to avoid mistakes
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
                Our best ITR filing experts are here to deal with document
                necessities & fulfilment of filing.
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
                Experts will carefully look into your expenses and income
                information so that they consult you regarding this.
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
                Based on your respective plan relevant experts will prepare your
                Income Tax Return.
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
                At last, we will file an Income Tax Return on your behalf and
                share all the deliverables with you.
              </p>
            </div>
          </div>
        </div>
      </div>


             {/* section-7 */}
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

export default ITSfiling;
