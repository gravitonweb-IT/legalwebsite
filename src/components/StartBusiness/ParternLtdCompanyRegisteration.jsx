import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import patnership2 from "../../assests/images/Start BusinessImages/PatnerShipimages/patnershipregimg.png";
import sliderhomeimg1 from "../../assests/images/HomepageImages/users.png";
import sliderhomeimg2 from "../../assests/images/HomepageImages/customer.png";
import sliderhomeimg3 from "../../assests/images/HomepageImages/employee-experience.png";
import sliderhomeimg4 from "../../assests/images/HomepageImages/case-report.png";
import sliderhomeimg5 from "../../assests/images/HomepageImages/gold-cup.png";
import lmtliablity from "../../assests/images/PvtLtdcompregistrationimg/Limited_liability.png";
import sepratelegal from "../../assests/images/PvtLtdcompregistrationimg/Separate legal.png";
import morecapital from "../../assests/images/PvtLtdcompregistrationimg/morecapital.png";
import limitiedcompliance from "../../assests/images/PvtLtdcompregistrationimg/lmtdcompliance.png";
import investorimg from "../../assests/images/PvtLtdcompregistrationimg/attractinginvestor.png";
import PerpectualExistenceimg from "../../assests/images/PvtLtdcompregistrationimg/PerpectualExistence2.png";
import SeparateTaxationimg from "../../assests/images/PvtLtdcompregistrationimg/SeparateTaxation.jpg";
import LegalProtectionimg from "../../assests/images/PvtLtdcompregistrationimg/LegalProtection.png";
import LimitedRiskimg from "../../assests/images/PvtLtdcompregistrationimg/LimitedRisk.png";
import whyChoose1 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose1.svg";
import whyChoose2 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose2.svg";
import whyChoose3 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose3.svg";
import whyChoose4 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose4.svg";
import whyChoose5 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose5.svg";
import whyChoose6 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose6.svg";
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
      "Q1: Can the registered office address of the company be a residential address?",
    answer:
      "Yes, the registered office of the company can be a residential address. However, certain documents and proofs will be required to establish the authenticity and legality of the address.",
  },
  {
    id: 2,
    question:
      "Q2: What are the tax implications for a Private Limited Company?",
    answer:
      "A Private Limited Company is subject to corporate income tax on its profits. Additionally, other taxes such as Goods and Services Tax (GST) may apply based on the nature of the company's business activities.",
  },
  {
    id: 3,
    question: "Q3: What are the key requirements to register a Private Limited Company in India?",
    answer:
      "To register a Private Limited Company in India, key requirements include a minimum of two directors and shareholders, a unique company name, a registered office, and compliance with statutory regulations.",
  },
  {
    id: 4,
    question: "Q4. Can a Private Limited Company convert into another type of business entity later?",
    answer:
      "Yes, a Private Limited Company in India can convert into another business entity, such as a Limited Liability Partnership (LLP) or a public company, subject to legal and regulatory procedures.",
  },
  {
    id: 5,
    question:
      "Q5. What is the minimum capital requirement for a Private Limited Company?",
    answer:
      "As of my last knowledge update in January 2022, there is no minimum capital requirement for a Private Limited Company in India. The Companies Act 2013 abolished the concept of minimum capital.",
  },
  {
    id: 6,
    question:
      "Q6. What is the process and timeline for Private Limited Company registration?",
    answer:
      "The process for Private Limited Company registration in India involves obtaining Digital Signatures, Director Identification Number, name approval, filing incorporation documents, and obtaining the certificate. The timeline is approximately 15-20 days.",
  },
];

const ParternLtdCompanyRegisteration = () => {
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
            Pvt. Ltd. Company Registration
          </h1>
          <p className="text-lg font-medium mt-5 text-justify">
            Grow your business! Register it as a Private Limited Company with
            complete legal protection. A Private Limited Company is a company
            privately held for small businesses. This business entity limits
            owner liability to their shareholdings and the number of
            shareholders to 200 and restricts shareholders from publicly trading
            shares.
          </p>

          <div className="border-2 rounded-2xl mt-5 lg:mt-8 xl:mt-12">
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
              &#x20B9;10051.00
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <p className="mt-2 mb-2">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className=" w-full border p-2 rounded-lg"
                value={formData.name}
                onChange={handleChange}
              />
            </p>
            <label className="">Email</label>
            <p className="mt-2 mb-2">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                className=" w-full border p-2 rounded-lg"
                value={formData.email}
                onChange={handleChange}
              />
            </p>
            <label className="">Contact Number</label>

            <p className="mt-2 mb-2">
              <input
                type="text"
                id="pnum"
                name="phone"
                placeholder="Enter Your Number"
                className=" w-full mt-2  border p-2 rounded-lg"
                value={formData.phone}
                onChange={handleChange}
              />
            </p>
            <label>Related to</label>
            <p className="mt-2">
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City/District"
                className=" w-full  border p-2 rounded-lg"
                value={formData.city}
                onChange={handleChange}
              />
            </p>
            <div className="mt-5 flex justify-center">
              <button className="bg-[#8A4117] text-white px-4 py-3 rounded-[4px]">
                GET STARTED
              </button>
            </div>
          </form>
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
        <table className="min-w-full bg-white rounded-xl shadow-md mt-5 md:mt-10">
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
            <img src={lmtliablity} alt=""className="w-2/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Limited liability
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            Shareholders are not personally liable for the company's debts and
            liabilities.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={sepratelegal} alt=""className="w-2/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Separate legal entity
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
            Perpetual existence
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            The company continues to exist even if the shareholders change.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={morecapital} alt="" className="w-2/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            More capital
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            Private limited companies can raise funds by issuing shares.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={limitiedcompliance} alt="" className="w-2/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Limited compliance
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            Private limited companies have less stringent compliance
            requirements compared to public companies.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={investorimg} alt="" className="w-3/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Attracting investors
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            The structure of a private limited company is attractive to
            potential investors.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={SeparateTaxationimg} alt="" className="w-2/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Separate taxation
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            The company is taxed separately from its<br></br> owners.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={LimitedRiskimg} alt="" className="w-3/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Limited risk
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            Shareholders are only liable for the amount unpaid on their shares.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={LegalProtectionimg} alt="" className="w-2/4 h-auto"/>
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Legal protection
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            A company structure provides legal protection to shareholders and
            directors.
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

export default ParternLtdCompanyRegisteration;
