import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { faListCheck,faCircleQuestion, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";

const ParternLtdCompanyRegisteration = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
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
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* 1st part start */}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-16 mx-5 md:mx-20 lg:mx-28 mt-20 md:mt-28">
        <div className="md:col-span-7">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B70505]">
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

          <div className="border-2 rounded-2xl mt-8 md:mt-16 ">
            <h1 className="text-white p-4 text-lg md:text-xl rounded-2xl text-center bg-[#8A4117]">
              Get Absolutely Free In Package
            </h1>

            <div className="grid md:grid-cols-5 mt-8 p-5  gap-5">
              <div className="">
                <div className="flex justify-center">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className=" text-[#8A4117] w-[40px] h-auto "
                  />
                </div>

                <h1 className=" text-sm  text-center text-[#1E1E1E] mt-3">
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
                <h1 className=" text-sm text-center  text-[#1E1E1E] mt-3">
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
                <h1 className="text-sm text-center  text-[#1E1E1E] mt-3">
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
                <h1 className=" text-sm text-center  text-[#1E1E1E] mt-3">
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
                <h1 className="text-sm  text-center   text-[#1E1E1E] mt-3">
                  PF and ESIC Registration
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-5 md:col-span-5 ">
          <h1 className="font-semibold text-2xl flex justify-center text-[#01355D] ">
            Get Quote Instantly
            <sapn className="text-[#F89327] "> &#x20B9;10051.00</sapn>
          </h1>

          <form onSubmit={handleSubmit}>
            <label className="mt-5">Name</label>
            <p className="mb-3">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className=" w-full  mt-2  border p-2 rounded-lg"
                value={formData.firstName}
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
                className=" w-full   mt-2 border p-2 rounded-lg"
                value={formData.email}
                onChange={handleChange}
              />
            </p>
            <label className="mt-3">Contact Number</label>

            <p className="mb-3">
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
            <p>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City/District"
                className=" w-full  mt-2  border p-2 rounded-lg"
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

      <div className="grid grid-cols-1  md:grid-cols-5  gap-5  shadow-xl rounded-lg p-5 mx-5 md:mx-20 lg:mx-28 mt-10 md:mt-20">
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

      {/* <div className="grid  md:grid-cols-5  gap-5 mx-5 md:mx-20 lg:mx-28 text-center    mt-10 md:mt-20 ">
        <div className="">
          <h1 className="font-semibold text-xl text-[#141F38] ">Features</h1>
        </div>

        <div>
          <h1 className="font-semibold text-xl text-[#141F38] ">
            Proprietorship
          </h1>
        </div>
        <div>
          <h1 className="font-semibold text-xl text-[#141F38] ">Partnership</h1>
        </div>
        <div>
          <h1 className="font-semibold text-xl text-[#141F38] ">LLP</h1>
        </div>
        <div>
          <h1 className="font-semibold text-xl text-[#141F38] ">Company</h1>
        </div>
      </div>

      <div className="grid md:grid-cols-5  gap-5 mx-5 md:mx-20 lg:mx-28 text-center bg-[#F9FAFB] rounded-xl text-lg   mt-5 md:mt-10">
        <div>
          <h1 className="font-semibold text-xl text-[#141F38]  mt-3">
            Definition
          </h1>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            A sole proprietorship is a business owned and operated by a single
            individual.
          </p>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            A partnership is a legal arrangement where two or more individuals
            or entities agree to share ownership, responsibilities, profits, and
            liabilities of a business.
          </p>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            An LLP is a hybrid business structure that combines elements of
            partnerships and company. It offers limited liability to its
            partners, protecting their personal assets from the liabilities of
            the business.
          </p>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            A company is a legal entity that exists separately from its owners
            (shareholders). It can be a private limited company or a public
            limited company. Shareholders' are the owners of the company and
            their liability is limited to their investment, and the company's
            operations and management are governed by the board of directors.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-5  gap-5 mx-5 md:mx-20 lg:mx-28 text-center bg-[#F9FAFB] rounded-xl  text-lg  mt-5 ">
        <div>
          <h1 className="font-semibold text-xl text-[#141F38]  mt-3">
            Ownership
          </h1>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            In a proprietorship, a single individual owns and manages the
            business.
          </p>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            A partnership involves two or more individuals (partners) who share
            ownership and management responsibilities.
          </p>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            Partners have limited liability, meaning their personal assets are
            generally protected from business debts or liabilities.
          </p>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            A company is a legal entity separate from its owners (shareholders).
            Shareholders have limited liability, and their personal assets are
            not typically at risk for company debts.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:mx-20 lg:mx-28  bg-[#F9FAFB] rounded-xl  text-lg  mt-5 ">
        <div>
          {" "}
          <h1 className="font-semibold text-xl pl-16 text-[#141F38] p-4 ">
            Registration
            <br /> Time
          </h1>
        </div>
        <div>
          <p className=" text-justify p-4 text-[#1E1E1E]">7-15 working days</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:mx-20 lg:mx-28  bg-[#F9FAFB] rounded-xl  text-lg  mt-5 ">
        <div>
          <h1 className="font-semibold text-xl pl-16 text-[#141F38] p-4 ">
            Promoter
            <br /> Liability
          </h1>
        </div>
        <div>
          <h1 className="font-semibold text-xl pl-10 text-[#141F38] p-4 ">
            Unlimited Liability
          </h1>
        </div>
        <div>
          <h1 className="font-semibold text-xl pl-10 text-[#141F38] p-4 ">
            Limited Liability
          </h1>
        </div>
      </div>

      <div className="grid md:grid-cols-5  gap-5 mx-5 md:mx-20 lg:mx-28 text-center bg-[#F9FAFB] rounded-xl  text-lg  mt-5 ">
        <div>
          <h1 className="font-semibold text-xl text-[#141F38]  mt-3">
            Governance
          </h1>
        </div>

        <div>
          <p className=" p-4 text-[#1E1E1E] ">Governed by Local Laws</p>
        </div>

        <div>
          <p className="p-4 text-[#1E1E1E] ">Under Partnership Act, 1932</p>
        </div>

        <div>
          <p className=" p-4 text-[#1E1E1E] ">LLP Act, 2008</p>
        </div>

        <div>
          <p className=" p-4 text-[#1E1E1E] ">Under Companies Act,2013</p>
        </div>
      </div>

      <div className="grid md:grid-cols-5  gap-5 mx-5 md:mx-20 lg:mx-28 text-center bg-[#F9FAFB] rounded-xl  text-lg  mt-5 ">
        <div>
          <h1 className="font-semibold text-xl text-[#141F38]  mt-3">
            Compliance <br />
            Requirements
          </h1>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            Compliance in accordance with- Income Tax Laws and other Local Laws
          </p>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            Compliance in accordance with- Income Tax Laws and other Local Laws
          </p>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            Compliance in accordance with-Income Tax Laws, Local Laws, Companies
            Act and other as applicable
          </p>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            Compliance in accordance with-Income Tax Laws, Local Laws, Companies
            Act and other as applicable
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-5  gap-5 mx-5 md:mx-20 lg:mx-28 text-center bg-[#F9FAFB] rounded-xl  text-lg  mt-5 ">
        <div>
          <h1 className="font-semibold text-xl text-[#141F38]  mt-3">
            Taxation
          </h1>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            Income is taxed at the individual's income tax rates.
          </p>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            Income is generally taxed at the individual partners' income tax
            rates.
          </p>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            Taxed as a partnership, where partners are individually taxed on
            their share of profits.
          </p>
        </div>

        <div>
          <p className="text-justify p-4 text-[#1E1E1E] ">
            Subject to corporate tax rates. Shareholders are taxed on dividends
            received.
          </p>
        </div>
      </div> */}

      <div className="overflow-x-auto ">
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
            icon={ faHandshake}
            className="pr-5 text-[#01355D] "
          />
          Benifits
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3  gap-10  mx-10 md:mx-20 lg:mx-28 mt-5 md:mt-10">
        <div className="p-8 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={lmtliablity } alt="" className="w-3/4 h-auto"   />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
          Limited liability
          </h3>

          <p className="text-gray-600 mt-3 text-center">
          Shareholders are not personally liable for the company's debts and liabilities.
          </p>
        </div>

        <div className="p-8 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={sepratelegal } alt="" className="w-3/4 h-auto"  />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
          Separate legal entity
          </h3>

          <p className="text-gray-600 mt-3 text-center">
          The company has its own legal identity, separate from its owners.
          </p>
        </div>

        <div className="p-8 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={lmtliablity } alt="" className="w-3/4 h-auto"   />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
          Perpetual existence
          </h3>

          <p className="text-gray-600 mt-3 text-center">
          The company continues to exist even if the shareholders change.
          </p>
        </div>


        <div className="p-8 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={morecapital  } alt="" className="w-3/4 h-auto"   />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
          More capital
          </h3>

          <p className="text-gray-600 mt-3 text-center">
          Private limited companies can raise funds by issuing shares.
          </p>
        </div>


        <div className="p-8 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={limitiedcompliance} alt="" className="w-3/4 h-auto"   />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
          Limited compliance
          </h3>

          <p className="text-gray-600 mt-3 text-center">
          Private limited companies have less stringent compliance requirements compared to public companies.
          </p>
        </div>



        <div className="p-8 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={investorimg } alt="" className="w-4/4 h-auto"   />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
          Attracting investors
          </h3>

          <p className="text-gray-600 mt-3 text-center">
          The structure of a private limited company is attractive to potential investors.
          </p>
        </div>



        <div className="p-8 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={lmtliablity } alt="" className="w-3/4 h-auto"   />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
          Separate taxation
          </h3>

          <p className="text-gray-600 mt-3 text-center">
          The company is taxed separately from its owners.
          </p>
        </div>



        <div className="p-8 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={lmtliablity } alt="" className="w-3/4 h-auto"   />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
          Limited risk
          </h3>

          <p className="text-gray-600 mt-3 text-center">
          Shareholders are only liable for the amount unpaid on their shares.
          </p>
        </div>


        <div className="p-8 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={lmtliablity } alt="" className="w-3/4 h-auto"   />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
          Legal protection
          </h3>

          <p className="text-gray-600 mt-3 text-center">
          A company structure provides legal protection to shareholders and directors.
          </p>
        </div>
      </div>



      {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 sm:mx-10 md:mx-20 lg:mx-32 mt-5 md:mt-18 lg:mt-20">
        <div>
          <h1 className="font-open-sans text-4xl font-extrabold text-gray-700 leading-13">
            Pvt. Ltd. Company Registration
          </h1>
          <p className="text-base md:text-base lg:text-md xl:text-lg text-[#525252] font-normal">
            Get ready to turn your business dream into reality by registering
            your Private Limited Company (Pvt. Ltd.). This type of company
            provides a safety net, so your personal assets are protected if
            something goes wrong in the business. The process involves choosing
            a unique name, preparing some documents, and filing them with the
            government.
          </p>

          <p className="text-base md:text-base lg:text-md xl:text-lg text-[#525252] font-normal mt-2">
            The perks of going Pvt. Ltd. include reduced personal risk, a
            separate legal identity, and the company can keep going even if
            people involved change. You need at least two directors and two
            shareholders, and even people from other countries can join in.
            We're here to guide you through this, ensuring a smooth process.
            Ready to start? Contact us today, and let's make your Pvt. Ltd.
            Company happen!
          </p>
        </div>
        <div className="">
          <div className="max-w-md mx-auto p-6 bg-white border rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Get Quote Instantly</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Contact
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cityDistrict"
                  className="block text-sm font-semibold text-gray-600"
                >
                  City/District
                </label>
                <input
                  type="text"
                  id="cityDistrict"
                  name="cityDistrict"
                  value={formData.cityDistrict}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mx-auto"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      {/* 1st part end */}

      {/* 2nd part start */}
      {/* <div className="flex justify-center items-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 justify-center items-center shadow-xl rounded-lg p-10">
         
          <div className="flex  p-2 w-[202px]">
            <div>
              <img
                src="https://legal251.com/images/companyregimage/employee-experience.png"
                className="w-[63px]"
                alt=""
              />
            </div>
            <div className="ml-4">
              <p className="font-sans font-bold text-2xl  mt-0">
                <span className="counter-value" data-count="10">
                  10 Years
                </span>
              </p>
              <p className="text-medium font-sans font-semibold text-gray-500 mt-0">
                Of Experience
              </p>
            </div>
          </div>

          <div className="flex  p-2 w-[202px]">
            <div>
              <img
                src="https://legal251.com/images/companyregimage/case-report.png"
                className="w-[63px]"
                alt=""
              />
            </div>
            <div className="ml-4">
              <p className="font-sans font-bold text-2xl  mt-0">
                <span className="counter-value" data-count="10">
                  5000
                </span>
                +
              </p>
              <p className="text-medium font-sans font-semibold text-gray-500 mt-0">
                Cases Solved
              </p>
            </div>
          </div>

         
          <div className="flex  p-2 w-[202px]">
            <div>
              <img
                src="https://legal251.com/images/companyregimage/gold-cup.png"
                className="w-[63px]"
                alt=""
              />
            </div>
            <div className="ml-4">
              <p class="font-sans font-bold text-2xl  mt-0">
                <span class="counter-value" data-count="15">
                  15
                </span>
                +
              </p>
              <p className="text-medium font-sans font-semibold text-gray-500 mt-0">
                Awards Gained
              </p>
            </div>
          </div>

          
          <div className="flex  p-2 w-[202px]">
            <div>
              <img
                src="https://legal251.com/images/companyregimage/users.png"
                className="w-[63px]"
                alt=""
              />
            </div>
            <div className="ml-4">
              <p class="font-sans font-bold text-2xl  mt-0">
                <span class="counter-value" data-count="200">
                  200
                </span>
                k +
              </p>
              <p className="text-medium font-sans font-semibold text-gray-500 mt-0">
                Trusted Clients
              </p>
            </div>
          </div>

         
          <div className="flex  p-2 w-[202px]">
            <div>
              <img
                src="https://legal251.com/images/companyregimage/customer.png"
                className="w-[63px]"
                alt=""
              />
            </div>
            <div className="ml-2">
              <p className=" font-sans font-bold text-2xl  mt-0">
                <span className="counter-value" data-count="50">
                  50
                </span>
                k+
              </p>
              <p className="text-medium font-sans font-semibold text-gray-500 mt-0">
                Queries Solved
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* 2nd part end */}

      {/* 3rd part start */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  mt-5 md:mt-18 sm:mx-10 md:mx-20 lg:mx-32 lg:mt-20 ">
        <div className="">
          <img
            src="https://www.3ecpa.co.in/wp-content/uploads/2020/10/photo-legal-obligations-of-a-private-limited-company-1200x630-2.jpg"
            alt="lmt"
            className="mt-10"
          />
        </div>
        <div>
          <p className="text-base md:text-base lg:text-md xl:text-lg text-[#525252] font-normal">
            Grow your business! Register it as a Private Limited Company with
            complete legal protection. A Private Limited Company is a company
            privately held for small businesses. This business entity limits
            owner liability to their shareholdings and the number of
            shareholders to 200 and restricts shareholders from publicly trading
            shares. It can have a minimum of 2 Directors and a maximum of 15
            Directors. Private limited company registration is governed by the
            Companies Act of 2013 and the Companies Incorporation Rules of 2014.
          </p>

          <p className="text-base md:text-base lg:text-md xl:text-lg text-[#525252] font-normal mt-2">
            We offer a complete package with easy documentation, fast
            registration, and a hassle-free experience – so you can focus on
            building and growing your business. Register your private limited
            company today and start enjoying the benefits of a registered
            business name!
          </p>
        </div>
      </div> */}
      {/* 3rd part end */}

      {/* 4th part start */}
      {/* <div class="flex items-center justify-center">
        <p class="servicehrheading flex items-center mt-10 mx-auto text-center relative z-2 font-roboto font-bold text-5xl  bg-white leading-none pl-16 ">
          <img
            src="https://legal251.com/images/companyregimage/img.svg"
            class="Howtoapplyimage mr-2"
          />
          Comparison
        </p>
      </div> */}

      {/* 4th part end */}

      {/* 5th part start*/}
      {/* <div class="flex items-center justify-center">
        <p class="servicehrheading flex items-center mt-10 mx-auto text-center relative z-2 font-roboto font-bold text-5xl  bg-white leading-none pl-16 ">
          <img
            src="https://legal251.com/images/services/question.svg"
            class="Howtoapplyimage mr-2"
          />
          How to apply
        </p>
      </div> */}
      {/* <div className="grid place-items-center ">
        <img
          src="https://legal251.com/images/gstregistration/Private-Limited-Company-Registration@2x.png"
          alt="Company Registration"
          className="w-full sm:w-2/3 md:w-1/2 lg:w-5/3 mt-10"
        />
      </div> */}
      {/* 5th part end */}

      {/* 6th part  start*/}
      {/* <div class="flex items-center justify-center">
        <p class="servicehrheading flex items-center mt-10 mx-auto text-center relative z-2 font-roboto font-bold text-5xl  bg-white leading-none pl-16 ">
          <img
            src="https://legal251.com/images/services/registration.svg"
            class="Benefits mr-2"
          />
          Registration Process
        </p>
      </div>
      <div class="" style={{ marginTop: "0px" }}>
        <center>
          <img
            src="https://legal251.com/images/companyregimage/pvtl-image.png"
            class="minimumreqdivimg1 dregprocessimg"
          />
        </center>
      </div> */}

      {/* 6th part end */}
    </>
  );
};

export default ParternLtdCompanyRegisteration;
