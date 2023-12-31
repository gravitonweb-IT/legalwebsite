import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import qr from '../../assests/images/Qr/qrPayment.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import patnership2 from "../../assests/images/Start BusinessImages/PatnerShipimages/patnershipregimg.png";
import sliderhomeimg1 from "../../assests/images/HomepageImages/users.png";
import sliderhomeimg2 from "../../assests/images/HomepageImages/customer.png";
import sliderhomeimg3 from "../../assests/images/HomepageImages/employee-experience.png";
import sliderhomeimg4 from "../../assests/images/HomepageImages/case-report.png";
import sliderhomeimg5 from "../../assests/images/HomepageImages/gold-cup.png";
import lmtliablity from "../../assests/images/PvtLtdcompregistrationimg/Limited_liability.png";
import sepratelegal from "../../assests/images/PvtLtdcompregistrationimg/Separate legal.png";
import PerpectualExistenceimg from "../../assests/images/PvtLtdcompregistrationimg/PerpectualExistence2.png";
import Conversation from "../../assests/images/OPCImages/Conversation.png";
import EasyFund from "../../assests/images/OPCImages/EasyFund.png";
import Minimal from "../../assests/images/OPCImages/Minimal.png";
import Owenership from "../../assests/images/OPCImages/Owenership.png";
import TaxAdvantage from "../../assests/images/OPCImages/TaxAdvantage.png";

import whyChoose1 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose1.svg";
import whyChoose2 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose2.svg";
import whyChoose3 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose3.svg";
import whyChoose4 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose4.svg";
import whyChoose5 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose5.svg";
import whyChoose6 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose6.svg";
import { servieUrl } from "../../env/env";
import {
  faListCheck,
  faCircleQuestion,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faSquarespace } from "@fortawesome/free-brands-svg-icons";

const faqs = [
  {
    id: 1,
    question:
      "Q1: Who can register an OPC in India?",
    answer:
      "Any Indian citizen and resident can register an OPC. However, a person cannot incorporate more than one OPC or be a nominee for more than one OPC",
  },
  {
    id: 2,
    question:
      "Q2: Can an OPC have more than one director?",
    answer:
      "No, an OPC can have only one director. However, it can appoint a nominee who will take charge in case of the director's death or incapacity.",
  },
  {
    id: 3,
    question:
      "Q3: Is it mandatory to have a nominee for OPC registration?",
    answer:
      "Yes, every OPC must nominate a person who will become the member of the company in case of the director's death or incapacity. The nominee's consent is required for the nomination.",
  },
  {
    id: 4,
    question:
      "Q4.  Can an OPC have branches in multiple locations?",
    answer:
      "Yes, an OPC can have branches in multiple locations within India or even abroad. However, it must comply with the applicable laws, such as obtaining necessary approvals and licenses for conducting business in different locations.",
  },
  {
    id: 5,
    question:
      "Q5. Can an OPC be converted into a private limited company?",
    answer:
      "Yes, an OPC can be converted into a private limited company if it meets the eligibility criteria. The conversion can be voluntary or mandatory based on certain thresholds specified by the Companies Act, 2013..",
  },
  {
    id: 6,
    question:
      "Q6. What are the compliance requirements for an OPC?",
    answer:
      "OPCs have relatively fewer compliance requirements compared to other types of companies. They must file annual financial statements, annual returns, and income tax returns.",
  },
];

const OpcOnePersonCompanyRegistration = () => {
  const [data, setData] = useState(true);
  const [pdf, setPdf] = useState(false);
  const [qrcode, setQrcode] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

 

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    contactNo: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://legalwebsite.pythonanywhere.com/api/all-pages-api/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
          },
          body: JSON.stringify({
            ...formData,
            type: 'Opc One Person Company Registration',
          }),
        }
      );

      if (response.ok) {
        console.log('Data submitted successfully');
        setPdf(true);
        // You can add further actions or redirect the user after successful submission.
      } else {
        console.error('Error submitting data:', response.statusText);
        // Handle error, show user a message, etc.
      }
    } catch (error) {
      console.error('Error submitting data:', error.message);
      // Handle error, show user a message, etc.
    }

    // Reset the form
    setFormData({
      firstName: '',
      email: '',
      contactNo: '',
      city: '',
    });
  };

  const [userData, setUserData] = useState({
    name: '',
    uTrNumber: '',
    email: '',
    contactNo: '',
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const resetForm = () => {
    setUserData({
      name: '',
      uTrNumber: '',
      email: '',
      contactNo: '',
    });
  };
  
  const submitFormData = async () => {
    try {
      const response = await fetch('https://legalwebsite.pythonanywhere.com/api/paymentdata/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        console.log('Data submitted successfully');
        alert('Data submitted successfully');
        setShowPaymentSuccess(true);
  
        resetForm();
        // You can add further actions or redirect the user after successful submission.
      } else {
        console.error('Error submitting data:', response.statusText);
        // Handle error, show user a message, etc.
      }
    } catch (error) {
      console.error('Error submitting data:', error.message);
      // Handle error, show user a message, etc.
    }
  };
  

  const [email, setEmail] = useState('');
  const [pdfFiles, setPdfFiles] = useState({
    pdfFile1: null,
    pdfFile2: null,
    pdfFile3: null,
    pdfFile4: null,
  });


  const handleFileChange = (e, key) => {
    setPdfFiles({
      ...pdfFiles,
      [key]: e.target.files[0],
    });
  };

  const FileSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('pdf_file1', pdfFiles.pdfFile1);
    formData.append('pdf_file2', pdfFiles.pdfFile2);
    formData.append('pdf_file3', pdfFiles.pdfFile3);
    formData.append('pdf_file4', pdfFiles.pdfFile4);

    const requestOptions = {
      method: 'POST',
      body: formData,
      // No need for redirect here, handle the response in the component
    };

    try {
      const response = await fetch('https://legalwebsite.pythonanywhere.com/api/UserOutput/', requestOptions);
      const result = await response.text();
      console.log(result);
      setQrcode(true);

      // Clear input fields after successful submission
      setEmail('');
      setPdfFiles({
        pdfFile1: null,
        pdfFile2: null,
        pdfFile3: null,
        pdfFile4: null,
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle error, show the user a message, etc.
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    let timeoutId;

    if (showPaymentSuccess) {
     
      timeoutId = setTimeout(() => {
        setShowPaymentSuccess(false);
        navigate('/');
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [showPaymentSuccess, navigate]);

 

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      {/* 1st part start */}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-16 mx-5 md:mx-20 lg:mx-28 mt-24 md:mt-28">
        <div className="md:col-span-7">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-[#B70505]">
            One Person Company (OPC) Registration
          </h1>
          <p className="text-lg font-medium mt-5 text-justify">
            One Person Company (OPC) in India is a new concept introduced with
            the Companies Act 2013. As per section 2(62) of the Company's Act
            2013, a company can be formed with just one director and one member.
            The director and member can be the same person. It is a form of a
            company where the compliance requirements are lesser than that of a
            private company.
          </p>

          <div className="border-2 rounded-2xl mt-5 lg:mt-8">
            <h1 className="text-white p-4 text-lg md:text-xl rounded-2xl text-center bg-[#8A4117]">
              Get Absolutely Free In Package
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-5 mt-4 p-3 lg:p-5 gap-5">
              <div className="">
                <div className="flex justify-center">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className=" text-[#8A4117] w-[40px] h-auto "
                  />
                </div>

                <h1 className=" text-xs  text-center text-[#1E1E1E] mt-3">
                  PAN & TAN Registration
                </h1>
              </div>

              <div className="">
                <div className="flex justify-center">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className=" text-[#8A4117] w-[40px] h-auto "
                  />
                </div>
                <h1 className=" text-xs text-center  text-[#1E1E1E] mt-3">
                  DIN and DSC for Directors
                </h1>
              </div>
              <div className="">
                <div className="flex justify-center">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className=" text-[#8A4117] w-[40px] h-auto "
                  />
                </div>
                <h1 className="text-xs text-center  text-[#1E1E1E] mt-3">
                  Complete Documentation
                </h1>
              </div>
              <div className="">
                <div className="flex justify-center">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className=" text-[#8A4117] w-[40px] h-auto "
                  />
                </div>
                <h1 className=" text-xs text-center  text-[#1E1E1E] mt-3">
                  Personal Assistance
                </h1>
              </div>
              <div className="">
                <div className="flex justify-center">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className=" text-[#8A4117] w-[40px] h-auto "
                  />
                </div>
                <h1 className="text-xs  text-center   text-[#1E1E1E] mt-3">
                  PF and ESIC Registration
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-5 md:col-span-5">
          <div class="flex justify-between mb-4">
            <div class="font-semibold text-2xl text-[#01355D]">
              Get Quote Instantly
            </div>
            <div class="text-xl font-semibold text-[#F89327]">
              &#x20B9;9751/-
            </div>
          </div>

          <>
     
     {qrcode ? (
        <div className="container mx-auto mt-10 rounded-sm">
         <img src={qr} alt="" className="mb-5 border border-sky-600" />
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="uTrNumber" className="block text-gray-700 text-sm font-bold mb-2">
              uTr Number
            </label>
            <input
              type="text"
              id="uTrNumber"
              name="uTrNumber"
              value={userData.uTrNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter uTr Number"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="contactNo" className="block text-gray-700 text-sm font-bold mb-2">
              contactNo
            </label>
            <input
              type="tel"
              id="contactNo"
              name="contactNo"
              value={userData.contactNo}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your contactNo number"
              required
            />
          </div>
  
          <button
            type="button"
            onClick={submitFormData}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
     ) : pdf ? (
       <form onSubmit={FileSubmit} className="max-w-md mx-auto">
       {/* Email input */}
       <div className="mb-4">
         <label
           htmlFor="email"
           className="block text-gray-700 text-sm font-bold mb-2"
         >
           Email
         </label>
         <input
           type="email"
           id="email"
           name="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           required
         />
       </div>
       {/* File inputs */}
       <div className="mb-4">
         <label
           htmlFor="pdfFile1"
           className="block text-gray-700 text-sm font-bold mb-2"
         >
           PDF File 1
         </label>
         <input
           type="file"
           id="pdfFile1"
           name="pdfFile1"
           onChange={(e) => handleFileChange(e, 'pdfFile1')}
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           required
         />
       </div>
       <div className="mb-4">
         <label
           htmlFor="pdfFile2"
           className="block text-gray-700 text-sm font-bold mb-2"
         >
           PDF File 2
         </label>
         <input
           type="file"
           id="pdfFile2"
           name="pdfFile2"
           onChange={(e) => handleFileChange(e, 'pdfFile2')}
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           required
         />
       </div>
       <div className="mb-4">
         <label
           htmlFor="pdfFile3"
           className="block text-gray-700 text-sm font-bold mb-2"
         >
           PDF File 3
         </label>
         <input
           type="file"
           id="pdfFile3"
           name="pdfFile3"
           onChange={(e) => handleFileChange(e, 'pdfFile3')}
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           required
         />
       </div>
       <div className="mb-4">
         <label
           htmlFor="pdfFile4"
           className="block text-gray-700 text-sm font-bold mb-2"
         >
           PDF File 4
         </label>
         <input
           type="file"
           id="pdfFile4"
           name="pdfFile4"
           onChange={(e) => handleFileChange(e, 'pdfFile4')}
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           required
         />
       </div>
       {/* Submit button */}
       <div className="flex items-center justify-center mt-4">
         <button
           type="submit"
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         >
           Submit
         </button>
       </div>
     </form>
     ) : (<div className="container mx-auto mt-8">
         <div className="">
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
               id="contactNo"
               name="contactNo"
               required
               placeholder="Contact No"
               className="py-2 border-b-2 border-slate-400 px-5 w-full"
               value={formData.contactNo}
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
               className="bg-[#8A4117] text-white px-4 py-2 rounded-[20px]"
             >
               GET CONSULTANCY
             </button>
           </div>
         </form>
       </div>
   </div>
     )}
      
   </>
  
   {showPaymentSuccess && (
       <div className="fixed inset-0 flex items-center justify-center">
         <div className="bg-white p-8 rounded shadow-lg">
           <p className="text-green-500 text-2xl font-semibold mb-4">Payment Successful!</p>
           <p className="text-gray-700">Thank you for your payment.</p>
           <button
             onClick={() => setShowPaymentSuccess(false)}
             className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
           >
             Close
           </button>
         </div>
       </div>
     )}
        </div>
      </div>

      {/* second-section */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5  shadow-2xl rounded-lg p-5 mx-5 md:mx-20 lg:mx-28 mt-10 md:mt-20">
        <div className="flex justify-center items-center ">
          <img
            src={sliderhomeimg1}
            className="w-[20%] md:w-[30%] h-auto"
            alt=""
          />
          <div className="ml-10 md:ml-3">
            <p className="font-sans font-semibold text-xl">
              <span className="">10 Years</span>
            </p>
            <p className="text-medium font-sans font-semibold text-gray-500">
              Of Experience
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center  mt-3 md:mt-0">
          <img
            src={sliderhomeimg2}
            className=" w-[20%] md:w-[30%] h-auto"
            alt=""
          />

          <div className="ml-10 md:ml-3">
            <p className="font-sans font-bold text-xl  ">
              <span className="counter-value">5000</span>+
            </p>
            <p className="text-medium font-sans font-semibold text-gray-500 ">
              Cases Solved
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center   mt-3 md:mt-0">
          <img
            src={sliderhomeimg3}
            className="w-[20%] md:w-[30%] h-auto"
            alt=""
          />

          <div className="ml-10 md:ml-3">
            <p class="font-sans font-bold text-xl  ">
              <span class="counter-value">15</span>+
            </p>
            <p className="text-medium font-sans font-semibold text-gray-500 ">
              Awards Gained
            </p>
          </div>
        </div>

        <div className="flex  justify-center items-center   mt-3 md:mt-0">
          <img
            src={sliderhomeimg4}
            className=" w-[20%] md:w-[30%] h-auto "
            alt=""
          />

          <div className="ml-10 md:ml-3">
            <p class="font-sans font-bold text-xl  ">
              <span class="counter-value">200</span>k +
            </p>
            <p className="text-medium font-sans font-semibold text-gray-500 ">
              Trusted Clients
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center  mt-3 md:mt-0">
          <img
            src={sliderhomeimg5}
            className="w-[20%] md:w-[30%] h-auto"
            alt=""
          />

          <div className="ml-10 md:ml-3">
            <p className=" font-sans font-bold text-xl  ">
              <span className="counter-value">50</span>
              k+
            </p>
            <p className="text-medium font-sans font-semibold text-gray-500 ">
              Queries Solved
            </p>
          </div>
        </div>
      </div>

      {/* third-section */}

      <div className="mt-14 md:mt-20 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faListCheck}
            className="pr-5 text-[#01355D] "
          />
          Comparison
        </h1>
      </div>

      <div className="overflow-x-auto ">
      <div className="mx-0 md:mx-14">
        <table className="min-w-full bg-white rounded-xl shadow-md mt-5 md:mt-10 ">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="py-3 px-4 font-semibold">Aspect</th>
              <th className="py-3 px-4 font-semibold">Proprietorship</th>
              <th className="py-3 px-4 font-semibold">Partnership</th>
              <th className="py-3 px-4 font-semibold">LLP</th>
              <th className="py-3 px-4 font-semibold">Company</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="">
              <td className="py-2 px-4 font-semibold">Definition</td>
              <td className="py-2 px-4">
                A business owned and operated by a single individual.
              </td>
              <td className="py-2 px-4">
                A legal arrangement where two or more individuals or entities
                share ownership and responsibilities of a business.
              </td>
              <td className="py-2 px-4">
                A hybrid business structure combining elements of partnerships
                and companies, offering limited liability to partners.
              </td>
              <td className="py-2 px-4">
                A legal entity separate from its shareholders, with the board of
                directors managing operations.
              </td>
            </tr>
            <tr className="">
              <td className="py-2 px-4 font-semibold">Ownership</td>
              <td className="py-2 px-4">
                Single individual owns and manages the business.
              </td>
              <td className="py-2 px-4">
                Two or more individuals (partners) sharing ownership and
                management responsibilities.
              </td>
              <td className="py-2 px-4">
                Partners have limited liability, protecting personal assets from
                business debts.
              </td>
              <td className="py-2 px-4">
                Shareholders own the company; their liability is limited to
                their investment.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-semibold">Registration Time</td>
              <td className="py-2 px-4">7-15 working days</td>
              <td className="py-2 px-4">-</td>
              <td className="py-2 px-4">-</td>
              <td className="py-2 px-4">-</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-semibold">Promotor Liability</td>
              <td className="py-2 px-4">-</td>
              <td className="py-2 px-4">Unlimited Liability</td>
              <td className="py-2 px-4">Limited Liability</td>
              <td className="py-2 px-4">-</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-semibold">Governance</td>
              <td className="py-2 px-4">Governed by Local Laws</td>
              <td className="py-2 px-4">Under Partnership Act, 1932</td>
              <td className="py-2 px-4">LLP Act, 2008</td>
              <td className="py-2 px-4">Under Companies Act, 2013</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-semibold">
                Compliance Requirements
              </td>
              <td className="py-2 px-4">
                Compliance with Income Tax Laws and other Local Laws
              </td>
              <td className="py-2 px-4">
                Compliance with Income Tax Laws and other Local Laws
              </td>
              <td className="py-2 px-4">
                Compliance with Income Tax Laws, Local Laws, Companies Act, and
                others as applicable
              </td>
              <td className="py-2 px-4">
                Compliance with Income Tax Laws, Local Laws, Companies Act, and
                others as applicable
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-semibold">Taxation</td>
              <td className="py-2 px-4">
                Income taxed at individual's income tax rates.
              </td>
              <td className="py-2 px-4">
                Income generally taxed at individual partners' income tax rates.
              </td>
              <td className="py-2 px-4">
                Taxed as a partnership, partners individually taxed on their
                share of profits.
              </td>
              <td className="py-2 px-4">
                Subject to corporate tax rates, shareholders taxed on dividends
                received.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>

      {/* fourth section */}

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

      {/* Fifth-section */}

      <div className="mt-10 md:mt-20 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faHandshake}
            className="pr-5 text-[#01355D] "
          />
          Benifits
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 md:mx-20 lg:mx-28 mt-5 md:mt-10">
        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={lmtliablity} alt="" className="w-2/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Limited Liability
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            Shareholders are not personally liable for the company's debts and
            liabilities.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={sepratelegal} alt="" className="w-2/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Separate Legal Entity
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            The company has its own legal identity, separate from its owners.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={PerpectualExistenceimg} alt="" className="w-3/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
          Perpetual Succession
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            The company continues to exist even if the shareholders change.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={Owenership} alt="" className="w-3/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
          Single Ownership and Management
          </h3>

          <p className="text-gray-600 mt-3 text-center">
          One person owns and manages the business, ensuring streamlined decision-making.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={EasyFund} alt="" className="w-3/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
          Easy Funding and Bank Loans


          </h3>

          <p className="text-gray-600 mt-3 text-center">
          Accessible funding and bank loans facilitate business growth and development.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={TaxAdvantage} alt="" className="w-3/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
          Tax Advantages
          </h3>

          <p className="text-gray-600 mt-3 text-center">
          Funding and bank loans simplify financial support for business endeavors.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={Minimal} alt="" className="w-2/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
          Minimal Compliance Requirements
          </h3>

          <p className="text-gray-600 mt-3 text-center">
          Minimal compliance eases regulatory burden, promoting business flexibility and growth.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={Conversation} alt="" className="w-2/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
          Easy Conversion
          </h3>

          <p className="text-gray-600 mt-3 text-center">
          Smooth conversion processes enhance user experience and encourage broader adoption.
          </p>
        </div>

        
      </div>

      {/* six-section */}
      <div className="mt-10 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="pr-5 text-[#01355D] "
          />
          Faq's
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-5 md:mx-20 lg:mx-28 mt-10">
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

      {/* seven-section */}
      <div className="mt-10 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faSquarespace}
            className="pr-5 text-[#01355D] "
          />
          Why Choose Us?
        </h1>
      </div>

      <div className="why-choose-image mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-16 mx-5 md:mx-20 lg:mx-28 pt-12 lg:pt-20 pb-10">
          <div className="text-white">
            <div className="flex justify-center">
              <img src={whyChoose1} alt="" className=" md:w-[40%] h-auto" />
            </div>
            <h1 className="mt-3 text-center text-xl font-semibold">
              Growth & Improvement
            </h1>
            <p className="mt-2 text-center">
              We believe in growth and improvement at all costs. For us, growth
              is the law of life and it shall be fulfilled. We know the
              importance of business and its growth for you.
            </p>
          </div>

          <div className="text-white">
            <div className="flex justify-center">
              <img src={whyChoose2} alt="" className=" md:w-[35%] h-auto" />
            </div>
            <h1 className="mt-3 text-center text-xl font-semibold">
              Support & Availability
            </h1>
            <p className="mt-2 text-center">
              We feel how much pain even a small problem or query can cause,
              that is the reason we are available to support you and solve any
              of such problems at every particular instance in time.
            </p>
          </div>

          <div className="text-white">
            <div className="flex justify-center">
              <img src={whyChoose3} alt="" className=" md:w-[30%] h-auto" />
            </div>
            <h1 className="mt-3 text-center text-xl font-semibold">
              Experienced Team
            </h1>
            <p className="mt-2 text-center">
              All the members of our team are experienced individuals who
              believe in professionalism and customer satisfaction above all.
              Each one of them is passionate in their respective fields.
            </p>
          </div>

          <div className="text-white">
            <div className="flex justify-center">
              <img src={whyChoose4} alt="" className=" md:w-[35%] h-auto" />
            </div>
            <h1 className="mt-3 text-center text-xl font-semibold">Focus</h1>
            <p className="mt-2 text-center">
              Any assigned task is of utmost importance to us, that's why our
              team members are always focused on taking care of even the
              smallest of our clients' needs and requirements.
            </p>
          </div>

          <div className="text-white">
            <div className="flex justify-center">
              <img src={whyChoose5} alt="" className=" md:w-[35%] h-auto" />
            </div>
            <h1 className="mt-3 text-center text-xl font-semibold">
              Value For Money
            </h1>
            <p className="mt-2 text-center">
              We understand that the money being spent is hard-earned, therefore
              we utilize every single penny that you pay us in the most
              effective way possible hence providing the best value for money.
            </p>
          </div>

          <div className="text-white">
            <div className="flex justify-center">
              <img src={whyChoose6} alt="" className=" md:w-[35%] h-auto" />
            </div>
            <h1 className="mt-3 text-center text-xl font-semibold">
              Care & Regards
            </h1>
            <p className="mt-2 text-center">
              We believe you to be a part of this family and that all your
              problems, as well as achievements, are our very own. Your
              interests are ours and their fulfillment is at the top in our
              regards.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpcOnePersonCompanyRegistration;
