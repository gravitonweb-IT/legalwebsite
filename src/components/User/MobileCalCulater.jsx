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
import UserDashboard from "../UserDashboard";
import { useNavigate } from "react-router-dom";

const MobileCalCulater = () => {

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
    const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userData") == null) {
      navigate("/login");
    }
  }, []);
  return (
    <>
    <UserDashboard>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 rounded-xl p-3 gap-10 mx-5 md:mx-20  lg:mx-28   mt-10 md:mt-14 shadow-xl">
          <div>
            <div className="p-4">
              <div className="mb-4">
                <label className="text-lg mb-2 font-semibold text-[#01355D] text-justify">
                  Amount
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
        </UserDashboard>
    </>
  )
}

export default MobileCalCulater