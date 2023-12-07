import React, { useState } from "react";
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



const faqs = [
  {
    id: 1,
    question: "Q1.  What is a GST Calculator?",
    answer: "GST calculator assists in computing the payable GST for a specific period.",
  },
  {
    id: 2,
    question: "Q2. How to use the GST calculator?",
    answer:
      "As a buyer, you can use the GST Calculator by entering the price and then the rate of GST for a particular product or service. It will calculate the total cost of production, SGST, CGST, and tax.",
  },
  {
    id: 3,
    question:
      "Q3. Is GST applicable to all goods?",
    answer: "Yes, every business location requires its gumasta license.",
  },
  {
    id: 4,
    question: "Q4. What is an exclusive GST amount?",
    answer:
      "An exclusive GST amount is the value of a good after deducting GST cost from the GST inclusion price of the items.",
  },

];

const GSTCalculator = () => {

  const [initialAmount, setInitialAmount] = useState(0);
  const [gstRate, setGSTRate] = useState(0);
  const [yourState, setYourState] = useState("");
  const [customerState, setCustomerState] = useState("");
  const [isAddGST, setIsAddGST] = useState(true);
  const [netAmount, setNetAmount] = useState(0);
  const [gstAmount, setGSTAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [sgst, setSGST] = useState(0);
  const [cgst, setCGST] = useState(0);
  const [igst, setIGST] = useState(0);

  const handleCalculate = () => {
    let netAmt = parseFloat(initialAmount);
    let gstAmt = 0;
    let totalAmt = 0;
    let sgstVal = 0;
    let cgstVal = 0;
    let igstVal = 0;

    if (isAddGST) {
      gstAmt = (netAmt * gstRate) / 100;
      totalAmt = netAmt + gstAmt;

      if (yourState === customerState) {
        sgstVal = gstAmt / 2;
        cgstVal = gstAmt / 2;
      } else {
        igstVal = gstAmt;
      }
    } else {
      totalAmt = netAmt;
    }

    setNetAmount(netAmt.toFixed(2));
    setGSTAmount(gstAmt.toFixed(2));
    setTotalAmount(totalAmt.toFixed(2));
    setSGST(sgstVal.toFixed(2));
    setCGST(cgstVal.toFixed(2));
    setIGST(igstVal.toFixed(2));
  };
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
    "Jammu and Kashmir",
    "Ladakh",
  ];

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
{/* section-1 */}
<div className="mt-24 md:mt-28 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faHandshake}
            className="pr-5 text-[#01355D] "
          />
          GST CALCULATOR
        </h1>
      </div>
      <div className="mx-5">
        <p className="mt-3 text-center">
          The easiest way for businesses to calculate GST is to use our online
          GST Calculator and get error-free results in a blink of an eye.
        </p>
      </div>

      {/* Calculator */}
      <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-100 rounded-xl p-3 gap-10 mx-5 md:mx-20  lg:mx-28   mt-10 md:mt-14 shadow-xl">
        <div className="flex justify-center">
          <div className="">
           
            <label className="block text-lg mb-2 font-semibold text-[#01355D]">Initial Amount:</label>
            <input
              type="number"
              value={initialAmount}
              onChange={(e) => setInitialAmount(e.target.value)}
              className="border rounded py-2 px-3 mb-5 font-medium "
            />
            <label className="block text-lg mb-2 font-semibold text-[#01355D]">GST Rate (%):</label>
            <input
              type="number"
              value={gstRate}
              onChange={(e) => setGSTRate(e.target.value)}
              className="border rounded py-2 px-3 mb-5"
            />
            <label className="block text-lg mb-2 font-semibold text-[#01355D]">Your State:</label>
            <select
              value={yourState}
              onChange={(e) => setYourState(e.target.value)}
              className="border rounded py-2 w-[225px] mb-5"
            >
              <option value="">Select Your State</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <label className="block text-lg mb-2 font-semibold text-[#01355D]">Customer State:</label>
            <select
              value={customerState}
              onChange={(e) => setCustomerState(e.target.value)}
              className="border rounded py-2  w-[225px] mb-5"
            >
              <option value="">Select Customer State</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {/* Radio buttons for add/remove GST */}
            <div className="flex items-center mb-5">
              <input
                type="radio"
                id="addGST"
                name="gstOption"
                value="add"
                checked={isAddGST}
                onChange={() => setIsAddGST(true)}
                className="mr-2"
              />
              <label className="font-semibold text-[#01355D]" htmlFor="addGST">Add GST</label>
              <input
                type="radio"
                id="removeGST"
                name="gstOption"
                value="remove"
                checked={!isAddGST}
                onChange={() => setIsAddGST(false)}
                className="ml-4 mr-2"
              />
              <label  className="font-semibold text-[#01355D]" htmlFor="removeGST">Remove GST</label>
            </div>
            <button
              onClick={handleCalculate}
              className="hover:bg-[#B70505] bg-[#FBB03B] text-white font-bold py-2 px-4 rounded mt-4"
            >
              Calculate
            </button>
          </div>
        </div>

        <div  className="flex justify-center">
          <div className="">
           <div className="mt-5 md:mt-10 hover:border-[#B70505] border-2 rounded-lg border-gray-300 transition duration-300 px-12 py-3">
            <h1 className="text-lg  font-semibold text-[#01355D]">Net Amount:</h1>
            <p className="text-[#FBB03B] font-semibold  text-xl  md:text-2xl"> &#x20B9; {netAmount} /-</p>
            </div>

            <div className="mt-5 md:mt-10 hover:border-[#B70505] border-2 rounded-lg border-gray-300 transition duration-300 px-12 py-3">
            <h1 className="text-lg  font-semibold text-[#01355D]">GST Amount:</h1>
            <p className="text-[#FBB03B] font-semibold  text-xl  md:text-2xl"> &#x20B9; {gstAmount} /-</p>
            </div>


            <div className="mt-5 md:mt-10 hover:border-[#B70505] border-2 rounded-lg border-gray-300 transition duration-300 px-12 py-3">
            <h1 className="text-lg  font-semibold text-[#01355D]">Total Amount:</h1>
            <p className="text-[#FBB03B] font-semibold  text-xl  md:text-2xl"> &#x20B9; {totalAmount} /-</p>
            </div>
        
            </div>
        </div>



        <div  className="flex justify-center">
          <div className="">
           <div className="mt-5 md:mt-10 hover:border-[#B70505] border-2 rounded-lg border-gray-300 transition duration-300 px-20 py-3">
            <h1 className="text-lg  font-semibold text-[#01355D]">SGST:</h1>
            <p className="text-[#FBB03B] font-semibold  text-xl  md:text-2xl"> &#x20B9; {sgst} /-</p>
            </div>

            <div className="mt-5 md:mt-10 hover:border-[#B70505] border-2 rounded-lg border-gray-300 transition duration-300 px-20 py-3">
            <h1 className="text-lg  font-semibold text-[#01355D]">CGST:</h1>
            <p className="text-[#FBB03B] font-semibold  text-xl  md:text-2xl"> &#x20B9; {cgst} /-</p>
            </div>


            <div className="mt-5 md:mt-10 mb-3 hover:border-[#B70505] border-2 rounded-lg border-gray-300 transition duration-300 px-20 py-3">
            <h1 className="text-lg  font-semibold text-[#01355D]">IGST:</h1>
            <p className="text-[#FBB03B] font-semibold  text-xl  md:text-2xl"> &#x20B9; {igst} /-</p>
            </div>
        
            </div>
        </div>
        </div>



    {/* section-2 */}
      <div className="mt-10 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faHandshake}
            className="pr-5 text-[#01355D] "
          />
          Benefits
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-10 mx-5 md:mx-28  lg:mx-52   mt-10 md:mt-14">
        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center text-xl font-bold">
            Determine Gross or Net Price
          </h1>
          <p className="p-3 text-center ">
            Using this online GST Calculator, you can figure out a product's
            Gross or Net Price using percentage-based goods and service tax
            rates.
          </p>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center text-xl font-bold">Manageable</h1>
          <p className="p-3 text-center ">
            It helps you quickly differentiate between SGST, CGST, and IGST, as
            well as assess each tax accurately in a manageable and hassle-free
            way.
          </p>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center text-xl font-bold">
            Time Saving & Error Free
          </h1>
          <p className="p-3 text-center ">
            It provides immediate returns and saves your time while making the
            computation of the price of products & services easy and free from
            human errors.
          </p>
        </div>
      </div>


      {/* section-3 */}
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
    </>
  );
};

export default GSTCalculator;
