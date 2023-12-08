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
    <p className="text-lg font-semibold ">Simple Interest: ₹{result.interest}</p>
    <p className="text-lg font-semibold ">Total Amount: ₹{result.totalAmount}</p>
  </div>
);

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
    answer:
      "No. You cannot change your SIP amount anytime, as it is fixed for a given period.",
  },
  {
    id: 4,
    question: "Q4. Is SIP renewable?",
    answer:
      "Yes, you can automatically renew your SIP easily. While different companies also offer you the option to cancel the auto-renew feature.",
  },
];

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [calculationType, setCalculationType] = useState('yearly');
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
      if (calculationType === 'yearly') {
        interest = ((p * r * t) / 100).toFixed(2);
      } else if (calculationType === 'monthly') {
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
            calculationType === 'yearly' ? 'bg-blue-500' : 'bg-gray-300'
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 mr-2`}
          onClick={() => setCalculationType('yearly')}
        >
          Yearly
        </button>
        <button
          className={`${
            calculationType === 'monthly' ? 'bg-blue-500' : 'bg-gray-300'
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3`}
          onClick={() => setCalculationType('monthly')}
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

      {/* <div className="container mx-auto mt-1 p-4 bg-gray-100 rounded-lg max-w-full  ">
        <h1 className="text-4xl font-bold text-center mt-5 mb-8 text-black">
          Simple Interest Calculator
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-8 md:ml-8 ">
         
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Financial Year 2021-2022
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Principal Amount
              </label>
              <input
                type="number"
                className="w-full p-3 border border-blue-400 rounded"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Rate of Interest (%)
              </label>
              <input
                type="number"
                className="w-full p-3 border border-blue-400 rounded"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Time (in years)
              </label>
              <input
                type="number"
                className="w-full p-3 border border-blue-400 rounded"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-900 text-white p-3 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
              onClick={handleCalculate}
            >
              Calculate
            </button>



            {showResult && (
              <div>
                {result && <ResultBox result={result} />}
                <div className="container mx-auto mt-8 p-4 bg-gray-200 rounded-lg max-w-2xl ">
                  <canvas id="interestChart" width="400" height="400" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SimpleInterestCalculator;
