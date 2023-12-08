import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faFlagCheckered,
  faRegistered,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHandshake,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import Chart from "chart.js/auto";

const faqs = [
  {
    id: 1,
    question: "Q1. Can I transfer my PPF account to another branch?",
    answer:
      "Yes, you are eligible to transfer your PPF account from one branch/office to another branch/office.",
  },
  {
    id: 2,
    question: "Q2. What is the maturity period for my PPF investment?",
    answer:
      "YThe maturity period for your PPF investment is 15 years, and you are liable to withdraw your entire amount after this period.",
  },
  {
    id: 3,
    question: "Q3. Can I extend my PPF tenure, and how many times?",
    answer:
      "Yes. You can extend your PPF tenure investment as many times as you wish after the maturity period.",
  },
  {
    id: 4,
    question:
      "Q4. Can I close my PPF account if I cannot contribute to the same?",
    answer:
      "Yes, you can close your PPF account after five years. However, some other factors need to meet for closing the PPF account.",
  },
];
const PPfCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [calculatedAmount1, setCalculatedAmount1] = useState(0);
  const [calculatedAmount2, setCalculatedAmount2] = useState(0);

  const handleCalculate = () => {
    const amount1 = principal * (1 + (interestRate / 100) * timePeriod);
    const amount2 = principal * Math.pow(1 + interestRate / 100, timePeriod);

    setCalculatedAmount1(amount1.toFixed(2));
    setCalculatedAmount2(amount2.toFixed(2));
  };

  const handleDepositIncrement = (increment) => {
    setPrincipal((prev) => {
      const newValue =
        prev === "" ? increment : Math.max(0, parseFloat(prev) + increment);
      return newValue.toString();
    });
  };

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="mt-24 md:mt-28 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faHandshake}
            className="pr-5 text-[#01355D] "
          />
          PPF CALCULATOR
        </h1>
      </div>
      <div className="mx-5">
        <p className="mt-3 text-center">
          Save for the future and get the estimated interest insights now using
          this online PPF calculator, with easy calculation. Also, save you from
          paying huge taxes on your savings.
        </p>
      </div>

      {/* section-2 */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 rounded-xl p-3 gap-10 mx-5 md:mx-20  lg:mx-28   mt-10 md:mt-14 shadow-xl">
        <div>
          <div className="mb-4 mt-4 md:mt-24">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Yearly Investment* (Rs):
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
                      onClick={() => handleDepositIncrement(-1000)}
                    />
                  </div>
                  <div className="cursor-pointer font-bold">
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => handleDepositIncrement(1000)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
                Rate of Interest* (%):
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

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
                Time Period* (Years):
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Time Period"
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

            <button
              className="bg-orange-400 text-white px-4 py-2 rounded"
              onClick={handleCalculate}
            >
              Calculate
            </button>
          </div>
        </div>

        <div>
          <div className="p-3">
            <div className="mt-4 bg-black bg-center bg-cover border rounded-lg h-96 w-full p-10 text-yellow-500">
              <p className="text-center text-white font-open-sans">
                Invested Amount:
                <br />{" "}
                <span className="text-center text-yellow-500 text-4xl font-open-sans mt-10">
                  &#x20B9; {principal || 0} /-
                </span>
              </p>
              <p className="text-center text-white font-open-sans mt-6">
                Total Interest:
                <br />
                <span className="text-center text-yellow-500 text-4xl font-open-sans mt-10">
                  &#x20B9; {calculatedAmount1} /-
                </span>
              </p>
              <p className="text-center text-white font-open-sans mt-6">
                Maturity Value:
                <br />
                <span className="text-center text-yellow-500 text-4xl font-open-sans mt-10">
                  &#x20B9; {calculatedAmount2} /-
                </span>
              </p>
            </div>
          </div>
        </div>

        <div></div>
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
            Get Interest Insights
          </h1>
          <p className="p-3 text-center ">
            This online computing tool allows users to get insight into the
            interest amount they can earn by investing a certain amount of money
            for a particular time.
          </p>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center text-xl font-bold">Tax Saving</h1>
          <p className="p-3 text-center ">
            Our PPF calculator makes the calculation easy, helps you determine
            the tax liability, and saves you from paying a hefty amount.
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
            Decide Maturity Period
          </h1>
          <p className="p-3 text-center ">
            The online PPF calculator eases the process of deciding the maturity
            period for your investment.
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

      {/* <div className="text-center mt-8 md:mt-20 mb-6">
      <div className="p-4 md:p-6 lg:p-8 mb-4 mt-4 md:w-full lg:w-2/3 xl:w-2/3 mx-auto grid grid-cols-1 gap-4 shadow-lg border border-b-4 border-cyan-800 rounded">
      

        <div className="mb-4 mt-4 md:mt-24">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Yearly Investment* (Rs):
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
                    onClick={() => handleDepositIncrement(-1000)}
                  />
                </div>
                <div className="cursor-pointer font-bold">
                  <FontAwesomeIcon
                    icon={faPlus}
                    onClick={() => handleDepositIncrement(1000)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
              Rate of Interest* (%):
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

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
              Time Period* (Years):
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Time Period"
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

          <button
            className="bg-orange-400 text-white px-4 py-2 rounded"
            onClick={handleCalculate}
          >
            Calculate
          </button>
        </div>

        <div className="mt-4 md:mt-20 p-4">
          <div className="bg-cyan-900 p-8 md:p-16 rounded-md mb-4 mt-4 shadow-md font-bold">
            <p className="text-white mb-4">
              Invested Amount ₹ {principal || 0}/-
            </p>
            <p className="text-white mb-4">
              Total Interest ₹ {calculatedAmount1}/-
            </p>
            <p className="text-white">Maturity Value ₹ {calculatedAmount2}/-</p>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default PPfCalculator;
