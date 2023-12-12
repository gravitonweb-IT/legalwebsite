import React, { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import calculatorfd from "../../assests/images/utilities/fd-calculator1.png";
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
    question: "Q1. Is this online FD calculator free to use?",
    answer: "Yes, you can use any of our online calculators for free.",
  },
  {
    id: 2,
    question: "Q2. How much time does this online FD calculator take?",
    answer: "You can compute any FD interest in a few seconds.",
  },
  {
    id: 3,
    question: "Q3. What details will I need to use this FD calculator?",
    answer:
      "You only need a few essential details, such as deposit amount, tenure, and prevailing FD rates, to use this FD calculator.",
  },
  {
    id: 4,
    question: "Q4. Is the FD calculator helpful in financial planning?",
    answer:
      "Once you know how much you will get after the completion of your FD, you can choose to either re-invest or withdraw the amount.",
  },
];

const FDCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [calculatedAmount1, setCalculatedAmount1] = useState(0);
  const [calculatedAmount2, setCalculatedAmount2] = useState(0);
  const [maturityDate, setMaturityDate] = useState("");
  const [calculationFrequency, setCalculationFrequency] = useState("yearly");

  const handleCalculate = () => {
    const rate = interestRate / 100;
    const yearlyMultiplier = 1 + rate;
    const monthlyMultiplier = 1 + rate / 12;
    const totalPeriod =
      calculationFrequency === "yearly" ? timePeriod : timePeriod / 12;

    const amount1 =
      principal * Math.pow(yearlyMultiplier, totalPeriod) - principal;
    const amount2 = principal * (Math.pow(monthlyMultiplier, totalPeriod) - 1);

    setCalculatedAmount1(amount1.toFixed(2));
    setCalculatedAmount2(amount2.toFixed(2));

    const currentDate = new Date();
    let maturityDateValue;

    if (calculationFrequency === "yearly") {
      const maturityYear = currentDate.getFullYear() + parseInt(timePeriod, 10);
      maturityDateValue = `${maturityYear}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`;
    } else {
      const maturityMonth = currentDate.getMonth() + Math.floor(timePeriod);
      const maturityYear =
        currentDate.getFullYear() + Math.floor(maturityMonth / 12);
      const month = (maturityMonth % 12) + 1;
      maturityDateValue = `${maturityYear}-${month}-${currentDate.getDate()}`;
    }

    setMaturityDate(maturityDateValue);
  };

  const incrementDeposit = (incrementValue) => {
    setPrincipal((prev) => Math.max(0, prev + incrementValue));
  };

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      {/* section-1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-14 mx-5 md:mx-20 lg:mx-28 mt-24 md:mt-28">
        <div className="">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B70505]">
            FD Calculator
          </h1>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            The FD calculator helps estimate returns on Fixed Deposits. By
            entering the principal, tenure, and interest rate, it provides a
            clear picture of maturity values, aiding in informed financial
            decisions and goal planning.
          </p>
        </div>

        <div className="flex justify-center  ">
          <img src={calculatorfd} className=" w-[75%] md:w-[60%] h-auto"></img>
        </div>
      </div>

      {/* section-2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-14 mx-5 md:mx-20 lg:mx-28  mt-24 md:mt-28">
        <div>
          <div className=" border border-gray-300 p-5 rounded-xl hover:border-[#B70505]">
            <div className="mb-4 mt-4 md:mt-2">
              <h1 className="text-2xl font-semibold mb-4">
                Calculate FD Mutual Value
              </h1>
              <div className="mb-4">
                <label className="block text-lg mb-2 font-semibold text-[#01355D]">
                  Deposit Amount* (Rs):
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter Amount"
                    className="w-full border p-2 rounded"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-4">
                    <div className="cursor-pointer font-bold text-amber-500">
                      <FontAwesomeIcon
                        icon={faMinus}
                        onClick={() => incrementDeposit(-1000)}
                      />
                    </div>
                    <div className="cursor-pointer font-bold">
                      <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() => incrementDeposit(1000)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-lg mb-2 font-semibold text-[#01355D]">
                  Interest Rate* (%):
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter Interest Rate"
                    className="w-full border p-2 rounded"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-4">
                    <div className="cursor-pointer font-bold text-amber-500">
                      <FontAwesomeIcon
                        icon={faMinus}
                        onClick={() =>
                          setInterestRate((prev) => Math.max(1, prev - 1))
                        }
                      />
                    </div>
                    <div className="cursor-pointer font-bold">
                      <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() =>
                          setInterestRate((prev) => Math.min(50, prev + 1))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-lg mb-2 font-semibold text-[#01355D]">
                  Time Period* (
                  {calculationFrequency === "yearly" ? "Years" : "Months"}):
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={`Enter Time Period (${
                      calculationFrequency === "yearly" ? "Years" : "Months"
                    })`}
                    className="w-full border p-2 rounded"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-4">
                    <div className="cursor-pointer font-bold text-amber-500">
                      <FontAwesomeIcon
                        icon={faMinus}
                        onClick={() =>
                          setTimePeriod((prev) => Math.max(15, prev - 1))
                        }
                      />
                    </div>
                    <div className="cursor-pointer font-bold">
                      <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() =>
                          setTimePeriod((prev) => Math.min(30, prev + 1))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center  mt-4">
              <button
                className={`bg-gray-700 text-white px-4 py-2 rounded ${
                  calculationFrequency === "yearly" ? "bg-orange-500" : ""
                }`}
                onClick={() => setCalculationFrequency("yearly")}
              >
                Yearly
              </button>
              <button
                className={`bg-gray-700 text-white px-4 py-2 rounded ml-4 ${
                  calculationFrequency === "monthly" ? "bg-orange-500" : ""
                }`}
                onClick={() => setCalculationFrequency("monthly")}
              >
                Monthly
              </button>
            </div>

            <button
              className="hover:bg-[#B70505] bg-[#FBB03B] text-white font-bold py-2 px-4 rounded mt-5"
              onClick={handleCalculate}
            >
              Calculate
            </button>
          </div>
        </div>

        <div className="">
          <div className="bg-neutral-900 p-8 md:p-16 rounded-md  shadow-md font-bold">
            <p className="text-white mb-8">
              After {timePeriod}{" "}
              {calculationFrequency === "yearly" ? "years" : "months"}, your
              amount will be
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
              <div>
                <p className="text-white mb-2">Deposit Amount</p>
                <p>₹ {principal || 0}/-</p>
              </div>
              <div>
                <p className="text-white mb-2">Total Interest</p>
                <p>₹ {calculatedAmount1}/-</p>
              </div>
              <div>
                <p className="text-white mb-2">Maturity Value</p>
                <p>₹ {calculatedAmount2}/-</p>
              </div>
            </div>
            <p className="text-white mt-4">Maturity Date: {maturityDate}</p>
          </div>
        </div>
      </div>

      {/* section-3 */}
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
          <h1 className="mt-3 text-center text-xl font-bold">Zero Errors</h1>
          <p className="p-3 text-center ">
            Unlike manual calculators, this online FD calculator gives accurate
            results every time without a single error.
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
            Easy & Faster Calculation
          </h1>
          <p className="p-3 text-center ">
            This online FD calculator is easy to use and gives results faster in
            comparison with digital calculators and spreadsheets.
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
            Compare Different Offers
          </h1>
          <p className="p-3 text-center ">
            It is free to use, so you can compare multiple offers and decide
            which scheme will give a better return. Thus you can figure out
            numerous investment opportunities.
          </p>
        </div>
      </div>

      {/* section-4 */}
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

export default FDCalculator;
