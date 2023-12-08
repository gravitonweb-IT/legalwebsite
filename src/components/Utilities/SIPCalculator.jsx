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
import calculatorsip from "../../assests/images/utilities/sipcalculator.png";

const faqs = [
  {
    id: 1,
    question: "Q1. How much should a person invest in SIP?",
    answer:
      "No upper limit for the amount one can invest in a SIP. However, you can invest only Rs. 500 per month.",
  },
  {
    id: 2,
    question: "Q2. Are SIPs and mutual funds similar?",
    answer:
      "SIP is not an investment scheme or any fund. It is a method of investing in Mutual Funds. You can use it to systematically invest a fixed amount of money in Mutual Funds for a period on a regular basis.",
  },
  {
    id: 3,
    question: "Q3. Can I alter my SIP amount anytime?",
    answer: "No. You cannot change your SIP amount anytime, as it is fixed for a given period.",
  },
  {
    id: 4,
    question: "Q4. Is SIP renewable?",
    answer:
      "Yes, you can automatically renew your SIP easily. While different companies also offer you the option to cancel the auto-renew feature.",
  },
];

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [rateOfInterest, setRateOfInterest] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [isMonthly, setIsMonthly] = useState(true);
  const [result, setResult] = useState(null);

  const calculateSIP = (isMonthlyCalculation) => {
    const principal = parseFloat(monthlyInvestment);
    const rate =
      parseFloat(rateOfInterest) / 100 / (isMonthlyCalculation ? 12 : 1); // Adjust rate based on yearly or monthly
    const periods = parseFloat(timePeriod) * (isMonthlyCalculation ? 12 : 1); // Total number of months or years

    // Calculate the future value of the investment
    let futureValue = 0;
    for (let i = 0; i < periods; i++) {
      futureValue = (futureValue + principal) * (1 + rate);
    }

    const totalInvestment = parseFloat(monthlyInvestment) * periods;
    const capitalGains = futureValue - totalInvestment;

    setResult({
      futureValue: futureValue.toFixed(2),
      capitalGains: capitalGains.toFixed(2),
      periods: periods,
    });
  };

  const handleCalculateMonthly = () => {
    setIsMonthly(true);
  };

  const handleCalculateYearly = () => {
    setIsMonthly(false);
  };

  const handleCalculate = () => {
    calculateSIP(isMonthly);
  };

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-14 mx-5 md:mx-20 lg:mx-28 mt-24 md:mt-28">
        <div className="">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B70505]">
            SIP Calculator
          </h1>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            With the help of the SIP Calculator, it is effortless to determine
            the return of your mutual fund investment throughout the SIP tenure,
            deposits, and return rates. Now, plan your investment corpus
            smartly.
          </p>
        </div>

        <div className="flex justify-center  ">
          <img src={calculatorsip} className=" w-[75%] md:w-[60%] h-auto"></img>
        </div>
      </div>

      {/* section-1 */}


      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 rounded-xl p-3 gap-5 mx-5 md:mx-20  lg:mx-28    mt-10 md:mt-14 shadow-xl">
        <div className="p-5 md:pl-10">
          <h1 className="text-2xl font-semibold mb-4">
            Calculate SIP Mutual Fund Returns
          </h1>

          <div className="mb-4">
            <label className="block text-lg mb-2 font-semibold text-[#01355D]">
              Monthly Investment
            </label>
            <input
              type="number"
              className="p-2 border rounded"
              placeholder="Monthly Investment"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2 font-semibold text-[#01355D]">
              Rate Of Interest %
            </label>
            <input
              type="number"
              className="p-2 border rounded"
              placeholder="Rate Of Interest"
              value={rateOfInterest}
              onChange={(e) => setRateOfInterest(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2 font-semibold text-[#01355D]">
              Time Period
            </label>
            <input
              type="number"
              className="p-2 border rounded"
              placeholder="Time Period "
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
            />
          </div>
          <div className=" mb-4">
            <button
              className={`${
                isMonthly
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              } px-4 py-2 rounded mr-2`}
              onClick={() => {
                handleCalculateMonthly();
                setResult(null);
              }}
            >
              Yearly
            </button>
            <button
              className={`${
                !isMonthly
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              } px-4 py-2 rounded ml-3`}
              onClick={() => {
                handleCalculateYearly();
                setResult(null);
              }}
            >
              Monthly
            </button>
          </div>
          <div className="">
            <button
              className="hover:bg-[#B70505] bg-[#FBB03B] text-white font-bold py-2 px-4 rounded mt-3"
              onClick={handleCalculate}
            >
              Calculate
            </button>
          </div>
        </div>

        <div className=" hover:border-[#F89327] rounded-xl border-2 border-transparent transition duration-300 ">
          {result && (
            <div className="mt-8 p-5 text-[#01355D]">
              <p>
                After {timePeriod} {isMonthly ? "Years" : "Months"}, your amount
                will be <br />
                <span className="text-[#F89327] font-bold text-xl md:2xl">
                  ₹ {result.futureValue}
                </span>
              </p>
              <p className="mt-4">
                This includes ₹{" "}
                <span className="text-[] font-bold text-xl md:2xl">
                  {result.capitalGains}
                </span>{" "}
                capital gains on an investment amount of ₹{" "}
                <span className="text-[#B70505] font-bold text-xl md:2xl">
                  {" "}
                  {(parseFloat(monthlyInvestment) * result.periods).toFixed(2)}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>




      {/* section-2 */}
      <div className="mt-14 md:mt-16 flex justify-center">
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
            Better Investment Planning
          </h1>
          <p className="p-3 text-center ">
            The SIP calculator is an ideal tool that helps you better plan your
            Mutual Fund SIP investments based on amount and tenure.
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
            Estimates Better Returns
          </h1>
          <p className="p-3 text-center ">
            You can compute the total value of your investments at the end of
            your SIP tenure and better estimate your returns.
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
            Accurate & Time Saving
          </h1>
          <p className="p-3 text-center ">
            Unlike manual calculation, it saves time on computation and gives
            accurate results each time.
          </p>
        </div>
      </div>

      {/* section-3 */}
      <div className="mt-14 md:mt-16 flex justify-center">
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

export default SIPCalculator;
