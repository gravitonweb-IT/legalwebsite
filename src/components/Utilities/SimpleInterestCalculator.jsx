import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import calculatorinterest from "../../assests/images/utilities/Interest-Calculator.png";
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

const ResultBox = ({ result }) => (
  <div className=" mt3  text-black">
    <h1 className="text-lg  font-semibold text-[#01355D]">
      {" "}
      Interest Amount:{" "}
    </h1>
    <p className="text-[#FBB03B] font-semibold  text-xl  md:text-2xl">
      {" "}
      &#x20B9;{result.interest} /-
    </p>
    <h1 className="text-lg  font-semibold text-[#01355D]">Total Amount: </h1>
    <p className="text-[#FBB03B] font-semibold  text-xl  md:text-2xl">
      {" "}
      &#x20B9;{result.totalAmount} /-
    </p>
  </div>
);

const faqs = [
  {
    id: 1,
    question: "Q1.  Can I use this Simple Interest Calculator anytime?",
    answer: "Yes, you can use this SI calculator 24*7.",
  },
  {
    id: 2,
    question: "Q2. How to calculate simple interest?",
    answer:
      "The formula for computing Simple Interest is (P x R x T) ÷ 100, where:  P = Principal, R = Rate of Interest,  T = Time for Tenure (for which you will earn interest),  You only have to put the values of P, R, & T in the online SI calculator, and you will get the results in moments.",
  },
  {
    id: 3,
    question:
      "Q3.  Is this calculator free, or do I need to pay any charges for it?",
    answer:
      "Yes, our SI calculator is free, and you don’t have to pay anything.",
  },
  {
    id: 4,
    question:
      "Q4. Do the Principal Amount and Interest Rates change over time?",
    answer: "No. The principal amount and the interest rates don’t change.",
  },
];

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [calculationType, setCalculationType] = useState("yearly");
  const chartRef = useRef(null);

  useEffect(() => {
    if (showResult) {
      calculateInterest();
      updateChart();
    }
  }, [principal, rate, time, showResult, calculationType]);

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);

    if (!isNaN(p) && !isNaN(r) && !isNaN(t)) {
      let interest = 0;
      if (calculationType === "yearly") {
        interest = ((p * r * t) / 100).toFixed(2);
      } else if (calculationType === "monthly") {
        interest = ((p * r * t) / (12 * 100)).toFixed(2);
      }

      const totalAmount = (p + parseFloat(interest)).toFixed(2);
      setResult({ interest, totalAmount });
    } else {
      setResult(null);
    }
  };
  const handleCalculate = () => {
    setShowResult(true);
  };

  const updateChart = () => {
    const ctx = document.getElementById("interestChart");
    if (ctx) {
      if (!chartRef.current) {
        chartRef.current = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Principal", "Interest"],
            datasets: [
              {
                data: [principal, result?.interest || 0],
                backgroundColor: ["#3490dc", "#38a169"],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      } else {
        chartRef.current.data.datasets[0].data = [
          principal,
          result?.interest || 0,
        ];
        chartRef.current.update();
      }
    }
  };

  useEffect(() => {
    updateChart();
  }, [result]);

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
            Simple Interest Calculator
          </h1>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            Interest is a fee on the money you invest, borrow or take as a loan.
            Simple In Simple Interest, the interest rate only applies to the
            loan or investment's principal amount and will not modify if any
            other interest occurs, unlike compound interest. Our SI Calculator
            is a handy tool for computing interest on loans and savings accounts
            without compounding.
          </p>
        </div>

        <div className="flex justify-center  ">
          <img
            src={calculatorinterest}
            className=" w-[75%] md:w-[40%] h-auto"
          ></img>
        </div>
      </div>
      {/* 
section-2 */}

      <div className="grid grid-cols-1 md:grid-cols-2  bg-gray-100 rounded-xl p-3 gap-5 mx-5 md:mx-20  lg:mx-28    mt-10 md:mt-14 shadow-xl">
        <div className="p-5 md:pl-10">
          <h1 className="text-2xl font-semibold mb-4">
            Financial Year 2023-2024
          </h1>

          <div className="mb-4">
            <label className="block text-lg mb-2 font-semibold text-[#01355D]">
              Principal Amount
            </label>
            <input
              type="number"
              className="p-2 border rounded"
              placeholder="  Principal Amount"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2 font-semibold text-[#01355D]">
              Rate of Interest (%)
            </label>
            <input
              type="number"
              className="p-2 border rounded"
              placeholder="Rate Of Interest"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
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
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className=" mb-4">
            <button
              className={`${
                calculationType === "yearly" ? "bg-blue-500" : "bg-gray-300"
              } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 mr-2`}
              onClick={() => setCalculationType("yearly")}
            >
              Yearly
            </button>
            <button
              className={`${
                calculationType === "monthly" ? "bg-blue-500" : "bg-gray-300"
              } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3`}
              onClick={() => setCalculationType("monthly")}
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
        <div>
          {showResult && (
            <div>
              {result && <ResultBox result={result} />}
              <div className="container mx-auto  mt-3 p-5 bg-gray-200 rounded-lg max-w-2xl ">
                <canvas id="interestChart" width="400" height="400" />
              </div>
            </div>
          )}
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
          <h1 className="mt-3 text-center text-xl font-bold">
            Easy & Faster Calculation
          </h1>
          <p className="p-3 text-center ">
            With our Simple Interest Calculator, you can quickly and efficiently
            calculate all the simple interest amounts, irrespective of the
            amount.
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
            Instant and Accurate Results
          </h1>
          <p className="p-3 text-center ">
            Unlike the conventional offline SI calculators, our online SI
            calculator gives you instant results even for complex calculations
            with a hundred per cent accuracy.
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
            Easy Comparison
          </h1>
          <p className="p-3 text-center ">
            Our Simple Interest Calculator lets you compare simple interest
            rates against compound interest rates while determining the current
            value of money.
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

export default SimpleInterestCalculator;
