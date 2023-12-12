import React, { useState } from "react";

const GratuityCalculator = () => {
  const [basicPay, setBasicPay] = useState("");
  const [dearnessAllowance, setDearnessAllowance] = useState("");
  const [yearsOfService, setYearsOfService] = useState("");
  const [gratuityResult, setGratuityResult] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const calculateGratuity = () => {
    // Check if any of the input values is empty
    if (
      !basicPay.trim() ||
      !dearnessAllowance.trim() ||
      !yearsOfService.trim()
    ) {
      alert(
        "Please enter values for Basic Pay, Dearness Allowance, and Years of Service."
      );
      return;
    }

    const parsedBasicPay = parseFloat(basicPay) || 0;
    const parsedDearnessAllowance = parseFloat(dearnessAllowance) || 0;
    const parsedYearsOfService = parseFloat(yearsOfService) || 0;

    if (
      parsedBasicPay >= 0 &&
      parsedDearnessAllowance >= 0 &&
      parsedYearsOfService >= 0
    ) {
      const gratuity = calculateGratuityAmount(
        parsedBasicPay,
        parsedDearnessAllowance,
        parsedYearsOfService
      );

      setGratuityResult(gratuity.toFixed(2));
      setShowResults(true);
    } else {
      alert(
        "Invalid input values. Please enter valid values for Basic Pay, Dearness Allowance, and Years of Service."
      );
    }
  };

  const calculateGratuityAmount = (
    basicPay,
    dearnessAllowance,
    yearsOfService
  ) => {
    const gratuity =
      (basicPay + dearnessAllowance) * (yearsOfService / 26) * 15;
    return Math.min(gratuity, 2000000); // Maximum Gratuity tax exemption is Rs. 20 lakh
  };

  const goBack = () => {
    setShowResults(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-14 mx-5 md:mx-20 lg:mx-28 mt-24 md:mt-28">
        <div className="">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B70505]">
          Gratuity Calculator
          </h1>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            A gratuity calculator is a handy tool for individuals looking to
            calculate appropriate tips in various service-oriented situations.
            Whether dining at a restaurant, taking a taxi, or receiving a
            service, users can input the total bill and select a percentage for
            the tip. This tool simplifies the process, ensuring fair
            compensation for service providers while promoting transparency in
            tipping practices. It is a practical aid for those seeking to
            express appreciation for quality service without the hassle of
            mental math.
          </p>
        </div>

        <div className="">
        {showResults ? (
          <div className="">
            <button
              onClick={() => goBack()}
              className="mb-4 inline-block text-white font-bold py-3 px-6 rounded-full bg-orange-500"
            >
              &#8592; Back to Calculator
            </button>
            <h1 className="text-2xl md:text-2xl text-blue-950 font-semibold mb-4">
              Calculate Gratuity Results
            </h1>
            <div className="">
              <h2 className="font-semibold mt-2 mb-1 text-[#01355D]">
                Total Gratuity payable
              </h2>
              <p className="font-bold text-lg text-[#B70505]">₹ {gratuityResult}/-</p>
            </div>
          </div>
        ) : (
          <div className="">
            <h1 className="text-center text-2xl text-blue-950 font-semibold">
              Calculate Gratuity
            </h1>
            <h2 className="font-semibold mt-5">Basic Pay</h2>
            <div className="mt-3">
              <input
                type="text"
                value={basicPay}
                onChange={(e) => setBasicPay(e.target.value)}
                className="form-control w-full p-2 text-gray-700 bg-white border border-gray-300 rounded"
                placeholder=" ₹ e.g., 50000"
              />
            </div>
            <h2 className="font-semibold mt-4">Dearness Allowance</h2>
            <div className="mt-3">
              <input
                type="text"
                value={dearnessAllowance}
                onChange={(e) => setDearnessAllowance(e.target.value)}
                className="form-control w-full p-2 text-gray-700 bg-white border border-gray-300 rounded"
                placeholder=" ₹ e.g., 50000"
              />
            </div>
            <h2 className="font-semibold mt-4">
              Number of years of Service
            </h2>
            <div className="mt-3">
              <input
                type="text"
                value={yearsOfService}
                onChange={(e) => setYearsOfService(e.target.value)}
                className="form-control w-full p-2 text-gray-700 bg-white border border-gray-300 rounded"
                placeholder=" years e.g., 5"
              />
            </div>
            <button
              onClick={() => calculateGratuity()}
              className="mt-5 text-white font-bold py-3 px-6 rounded-full bg-[#FBB03B]"
            >
              Calculate
            </button>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default GratuityCalculator;
