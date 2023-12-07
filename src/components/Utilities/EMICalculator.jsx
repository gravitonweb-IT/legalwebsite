import React, { useState, useEffect, useRef } from "react";
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
import Chart from "chart.js/auto";

const faqs = [
  {
    id: 1,
    question: "Q1. What is an EMI?",
    answer:
      "EMI refers to Equated Monthly Installment, the amount an individual must pay to the bank or any other lender every month until you entirely pay off the loan.",
  },
  {
    id: 2,
    question: "Q2. For what types of loans can I use the EMI calculator?",
    answer:
      "You can use this online EMI calculator to calculate all types of loans, including personal, car, and business loans. You only need to know the payable interest on the principal amount for the tenure.",
  },
  {
    id: 3,
    question: "Q3. What does an EMI consist of?",
    answer:
      "An Equated Monthly Installment consists of your interest payable on the principal amount and the tenure.",
  },
  {
    id: 4,
    question: "Q4. What will happen if I miss paying my EMIs?",
    answer:
      "The unpaid EMIs attract penalties from financial institutions, so if you fail to pay your EMIs, you have to pay an extra amount in future.",
  },
];

const EMICalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState("months");
  const [isCalculating, setIsCalculating] = useState(false);
  const [errors, setErrors] = useState({
    principal: "",
    interestRate: "",
    tenure: "",
  });

  const [chartData, setChartData] = useState({
    labels: ["Principal Amount", " Interest Amount"],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ["#3490dc", "#38a169"],
      },
    ],
  });

  const chartRef = useRef(null);

  const calculateEmi = () => {
    const errorsCopy = { ...errors };

    if (!principal) {
      errorsCopy.principal = "Please enter Principal Amount.";
    } else {
      errorsCopy.principal = "";
    }

    if (!interestRate) {
      errorsCopy.interestRate = "Please enter Annual Interest Rate.";
    } else {
      errorsCopy.interestRate = "";
    }

    if (!tenure) {
      errorsCopy.tenure = "Please enter Time Period.";
    } else {
      errorsCopy.tenure = "";
    }

    setErrors(errorsCopy);

    if (errorsCopy.principal || errorsCopy.interestRate || errorsCopy.tenure) {
      setIsCalculating(false);
      return;
    }

    setIsCalculating(true);

    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(tenure) * (selectedUnit === "months" ? 12 : 1);

    if (!isNaN(p) && !isNaN(r) && !isNaN(n) && n > 0) {
      const emiResult = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiResult.toFixed(2));

      const totalPaymentResult = emiResult * n;
      setTotalPayment(totalPaymentResult.toFixed(2));

      const totalInterestResult = totalPaymentResult - p;
      setTotalInterest(totalInterestResult.toFixed(2));

      setChartData({
        labels: ["Principal Amount", " Interest Amount"],
        datasets: [
          {
            data: [p, totalInterestResult],
            backgroundColor: ["#3490dc", "#38a169"],
          },
        ],
      });

      // Destroy existing chart if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Create a new chart
      const ctx = document.getElementById("myChart");
      chartRef.current = new Chart(ctx, {
        type: "doughnut",
        data: chartData,
      });
    } else {
      setEmi(null);
      setTotalPayment(null);
      setTotalInterest(null);

      // Destroy chart if there's no data
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      setIsCalculating(false);
    }
  };

  // Cleanup chart on component unmount
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      {/* section-1 */}
      <div className="overflow-x-hidden">
        <div className="mt-24 md:mt-28 flex justify-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
            <FontAwesomeIcon
              icon={faHandshake}
              className="pr-5 text-[#01355D] "
            />
            EMI CALCULATOR
          </h1>
        </div>

        <div className="mx-5">
          <p className="mt-3 text-center">
            Plan your loan quickly with the easiest online EMI Calculator while
            getting accurate results every time. Save your time, and plan
            better.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 rounded-xl p-3 gap-10 mx-5 md:mx-20  lg:mx-28   mt-10 md:mt-14 shadow-xl">
          <div>
            <div className="p-4">
              <div className="mb-4">
                <label className="text-lg mb-2 font-semibold text-[#01355D] text-justify">
                  Loan Amount
                </label>
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  className={`mt-1 p-2 border rounded w-full ${
                    errors.principal ? "border-red-500" : ""
                  }`}
                />
                {errors.principal && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.principal}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="text-lg mb-2 font-semibold text-[#01355D] text-justify">
                  Rate Of Interest (%)
                </label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className={`mt-1 p-2 border rounded w-full ${
                    errors.interestRate ? "border-red-500" : ""
                  }`}
                />
                {errors.interestRate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.interestRate}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="text-lg mb-2 font-semibold text-[#01355D] text-justify">
                  Time Period*
                </label>
                <input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  className={`mt-1 p-2 border rounded w-full ${
                    errors.tenure ? "border-red-500" : ""
                  }`}
                />
                {errors.tenure && (
                  <p className="text-red-500 text-sm mt-1">{errors.tenure}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="text-lg mb-2 font-semibold text-[#01355D]">
                  Select Unit
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setSelectedUnit("months")}
                    className={`bg-blue-500 text-white px-4 py-2 rounded ${
                      selectedUnit === "months"
                        ? "bg-opacity-100"
                        : "bg-opacity-50"
                    }`}
                  >
                    Months
                  </button>
                  <button
                    onClick={() => setSelectedUnit("years")}
                    className={`bg-blue-500 text-white px-4 py-2 rounded ${
                      selectedUnit === "years"
                        ? "bg-opacity-100"
                        : "bg-opacity-50"
                    }`}
                  >
                    Years
                  </button>
                </div>
              </div>

              <button
                onClick={calculateEmi}
                className="bg-[#F8951D] text-white px-4 py-2 rounded mt-3"
              >
                Calculate EMI
              </button>

              {errors.principal || errors.interestRate || errors.tenure ? (
                <p className="text-red-500 mt-2">
                  Please fix the errors before calculating.
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <div className="p-3">
              <div className="mt-4 bg-black bg-center bg-cover border rounded-lg h-96 w-full p-10 text-yellow-500">
                <p className="text-center text-white font-open-sans">
                  Monthly EMI:
                  <br />{" "}
                  <span className="text-center text-yellow-500 text-4xl font-open-sans mt-10">
                    &#x20B9; {emi} /-
                  </span>
                </p>
                <p className="text-center text-white font-open-sans mt-6">
                  Total Interest:
                  <br />
                  <span className="text-center text-yellow-500 text-4xl font-open-sans mt-10">
                    &#x20B9; {totalInterest} /-
                  </span>
                </p>
                <p className="text-center text-white font-open-sans mt-6">
                  Total Payment:
                  <br />
                  <span className="text-center text-yellow-500 text-4xl font-open-sans mt-10">
                    &#x20B9; {totalPayment} /-
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className=" p-4">
              <canvas id="myChart" />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 md:mx-28  lg:mx-52   mt-10 md:mt-14">
          <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
            <div className=" text-center">
              <FontAwesomeIcon
                icon={faFlagCheckered}
                className="w-10 h-10 text-yellow-500"
              />
            </div>
            <h1 className="mt-3 text-center text-xl font-bold">
              Simplifies Loan Planning
            </h1>
            <p className="p-3 text-center ">
              The EMI calculator gives you the applicable EMI and the complete
              amortization calendar that helps you plan better and more
              straightforwardly.
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
              Consistent & Accurate Results
            </h1>
            <p className="p-3 text-center ">
              This EMI calculator consistently gives accurate answers without
              any calculation error while allowing you to change your inputs to
              get desired results.
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
              Easy to Use & Time-Saving
            </h1>
            <p className="p-3 text-center ">
              You only need to furnish the essential details such as loan
              amount, tenure, and interest rate, which instantly give you the
              results.
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
      </div>
    </>
  );
};

export default EMICalculator;
