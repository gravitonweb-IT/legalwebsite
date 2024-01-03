import React, { useState } from "react";
import tdsimage1 from "../../assests/images/filing and more/TDSimage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faFlagCheckered,
  faHandshake,
  faRegistered,  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import patnership2 from "../../assests/images/Start BusinessImages/PatnerShipimages/patnershipregimg.png";
import { servieUrl } from "../../env/env";
import Check from "../StartBusiness/Check";










const faqs = [
  {
    id: 1,
    question:
      " Q1. What is TDS return filing?",
    answer:
      "TDS return filing is the process of submitting a detailed statement to the Income Tax Department, containing information about tax deductions made at the source on various transactions."
  },
  {
    id: 2,
    question: "Q2. Who is required to file TDS returns?",
    answer: "Any person or entity that deducts TDS while making payments is required to file TDS returns. This includes employers, businesses, and individuals making specified payments.",
  },
  {
    id: 3,
    question:
      "Q3. What are the types of TDS return forms? ?",
    answer:
      "The commonly used TDS return forms are Form 24Q (TDS on salaries), Form 26Q (TDS on non-salary payments), Form 27Q (TDS on payments to non-residents), and Form 27EQ (TDS on non-resident sportsmen/entertainers).",
  },
  {
    id: 4,
    question: "Q4. When are TDS returns filed?",
    answer:
      "TDS returns are filed quarterly, usually within a month from the end of each quarter: June 30th, September 30th, December 31st, and March 31st.",
  },
  {
    id: 5,
    question: "Q5.  What is the role of Legal251 in TDS return filing?",
    answer:
      "Legal257's expert team assists in accurate data compilation, form preparation, timely filing, and ensuring compliance throughout the TDS return filing process.",
  },
  {
    id: 6,
    question: "Q6. What happens if TDS returns are not filed?",
    answer:
      "Failure to file TDS returns can result in penalties and legal consequences, including disallowance of expenses for which TDS was not deducted.",
  },
];

const TDSReturnFiling = () => {
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
 

  const [showFormStarter, setShowFormStarter] = useState(false);
  const [showFormBasic, setShowFormBasic] = useState(false);


  const handleChangeStarter = (e) => {
    setFormDataStarter({ ...formDataStarter, [e.target.name]: e.target.value });
  };

  const handleChangeBasic = (e) => {
    setFormDataBasic({ ...formDataBasic, [e.target.name]: e.target.value });
  };


  const handleSubmitStarter = (e) => {
    e.preventDefault();
    console.log("Starter Form Data:", formDataStarter);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=Z9nseXk0218jRsyMVwAhHRYLPsrUDGZf");
    
    var raw = JSON.stringify({
      "firstName": formDataStarter.firstname,
      "email": formDataStarter.email,
      "contactNo": formDataStarter.phone,
      "city": formDataStarter.city,
      "type": "TDS Return Filing"
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
      "type": "TDS Return Filing"
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

  const openFormStarter = () => {
    setShowFormStarter(true);
  };

  const openFormBasic = () => {
    setShowFormBasic(true);
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
            TDS Return Filing
          </h1>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            Legal257 boasts a specialized team for TDS return filing, a crucial
            quarterly statement for the Income Tax department. Timely submission
            is imperative, and we ensure accurate and online filing to prevent
            fines. Trust our dedicated professionals for reliable compliance.
          </p>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            Legal257 excels in TDS return filing, vital quarterly statements for
            the Income Tax department. We ensure timely, accurate online
            submissions, safeguarding you from penalties with dedicated
            expertise.
          </p>
          <div className="mt-5">
            <button className="bg-[#8A4117] text-white px-4 py-3 rounded-[4px]">
              GET STARTED
            </button>
          </div>
        </div>

        <div className="flex justify-center  ">
          <img src={tdsimage1} className=" w-[80%] md:w-[70%] h-auto"></img>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 md:mx-28 lg:mx-52 xl:mx-96 mt-5 md:mt-12">
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
                  {/* <form onSubmit={handleSubmitStarter}>
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
                  </form> */}
                  <Check formType={"TDS Return Fling(Starter)"}/>
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
                  {/* <form onSubmit={handleSubmitBasic}>
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
                  </form> */}
                  <Check formType={"TDS Return Filing(BAsic)"}/>
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
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "Form 24Q\n\nThis form is used to report TDS on salaries. It involves detailing the salaries paid, tax deductions made, and other relevant information. At Legal251, our adept team specializes in handling Form 24Q with accuracy, ensuring your TDS on salaries is managed seamlessly."
                )
              }
            >
              Form 24Q
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  " For TDS on payments other than salaries, Form 26Q comes into play. It covers an array of transactions like rent, interest, and professional fees. Legal257's proficient team excels at filing Form 26Q, guaranteeing precise reporting of all non-salary TDS deductions."
                )
              }
            >
              Form 26Q
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "When dealing with TDS on payments made to non-residents, Form 27Q is essential. This form captures the tax deductions on such payments. Count on Legal251's skilled team to expertly manage Form 27Q, simplifying the process of TDS deduction on non-resident payments."
                )
              }
            >
              Form 27Q
            </button>
            <button
              className="bg-[#FBB03B] hover:bg-[#B70505] text-white py-2 px-4 rounded-lg"
              onClick={() =>
                handleButtonClick(
                  "For TDS on payments made to non-resident sportsmen or entertainers, Form 27EQ is the requisite form. This specialised area demands careful attention, and Legal257's proficient team is well-versed in accurately handling Form 27EQ, ensuring compliance and smooth filing."
                )
              }
            >
              Form 27EQ
            </button>
          </div>
        </div>

        <div>
          <div className="text-[#01355D] text-xl font-semibold text-justify  ">
            {selectedContent ? (
              <div className="border border-gray-300 hover:border-[#B70505] p-4 rounded-lg">
                <h2 className="text-2xl  font-bold mb-2">Selected Form:</h2>
                <p>{selectedContent}</p>
              </div>
            ) : (
              <p className="border border-gray-300  p-4  rounded-lg">
                Please select a form to view its content.
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
          <h1 className="mt-3 text-center">Legal Compliance</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Financial Transparency</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Government Revenue</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Penalty Avoidance</h1>
        </div>

        <div className="bg-white shadow-2xl  p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Comprehensive Records</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Smooth Business Operations</h1>
        </div>

        <div className="bg-white shadow-2xl  p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Compliance Confidence</h1>
        </div>

        <div className="bg-white shadow-lg p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Reduced Tax Liability</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Seamlessness in Transactions</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Professional Reputation</h1>
        </div>
      </div>

      {/* section-6 */}

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
              Our best experts are here to deal with document necessities & to
              fulfil your return filing needs.
            </p>
          </div>

          <div class="flex justify-center items-center col-span-3">
            <div class="border-t-4 border-dashed border-yellow-600  w-[40%] xl:w-[70%]"></div>
            <div class="w-4 h-4 border-t-4 border-r-4 border-yellow-600 transform rotate-45"></div>
          </div>

          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium ">
              On the basics of the details that you submitted our experts will
              take care of the entire process, from gathering comprehensive
              details about deductors and deducts to accurately reporting.
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
              order to file your TDS Return.
            </p>
          </div>
          <div class="flex  justify-center items-center col-span-3">
            <div class="w-4 h-4 border-t-4 border-l-4 border-yellow-600 transform -rotate-45"></div>
            <div class="border-t-4 border-dashed border-yellow-600  w-[40%] xl:w-[70%]"></div>
          </div>
          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              You are supposed to wait until our experts reach out to notify you
              of the status of your TDS return as filed.
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
                Our best experts are here to deal with document necessities & to
                fulfil your return filing needs.
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
                take care of the entire process, from gathering comprehensive
                details about deductors and deducts to accurately reporting.
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
                in order to file your TDS Return.
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
                you of the status of your TDS return as filed.
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

export default TDSReturnFiling;
