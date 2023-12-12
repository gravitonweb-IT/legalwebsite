import React, { useState } from "react";

const HRACalculator = () => {
  const [basicSalary, setBasicSalary] = useState("");
  const [hraReceived, setHraReceived] = useState("");
  const [cityType, setCityType] = useState("metro");
  const [actualRentPaid, setActualRentPaid] = useState("");
  const [hraResult, setHraResult] = useState({ exemption: 0, taxableHRA: 0 });
  const [showResults, setShowResults] = useState(false);

  const calculateHRA = () => {
    const parsedBasicSalary = parseFloat(basicSalary) || 0;
    const parsedHraReceived = parseFloat(hraReceived) || 0;
    const parsedActualRentPaid = parseFloat(actualRentPaid) || 0;

    if (
      parsedBasicSalary > 0 &&
      parsedHraReceived >= 0 &&
      parsedActualRentPaid >= 0
    ) {
      const hraExemption = calculateHRAExemption(
        parsedBasicSalary,
        parsedHraReceived,
        parsedActualRentPaid,
        cityType
      );

      const taxableHRA = Math.max(0, parsedHraReceived - hraExemption);

      setHraResult({
        exemption: hraExemption.toFixed(2),
        taxableHRA: taxableHRA.toFixed(2),
      });

      setShowResults(true);
    } else {
      alert(
        "Invalid input values. Please enter valid values for Basic Salary, HRA Received, and Actual Rent Paid."
      );
    }
  };

  const calculateHRAExemption = (
    basicSalary,
    hraReceived,
    actualRentPaid,
    cityType
  ) => {
    const lowerLimit = 0.1 * basicSalary;
    const upperLimit = cityType === "metro" ? 0.5 : 0.4;

    const eligibleHRA = Math.min(hraReceived, actualRentPaid - lowerLimit);
    const hra = Math.min(eligibleHRA, upperLimit * basicSalary);

    return Math.min(hra, actualRentPaid - lowerLimit, 0.5 * basicSalary);
  };

  const goBack = () => {
    setShowResults(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-14 mx-5 md:mx-20 lg:mx-28 mt-24 md:mt-28">
        <div className="">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B70505]">
            HRA Calculator
          </h1>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            The HRA calculator is a vital tool for optimizing tax savings. By
            inputting key details like salary and rent paid, it accurately
            computes your eligible House Rent Allowance. This simplifies
            financial planning, ensuring you make informed decisions while
            maximizing benefits. Streamline your tax calculations and enhance
            your financial strategy effortlessly.
          </p>

          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            The HRA calculator determines your House Rent Allowance based on
            salary, city, and rent paid. It aids in estimating tax exemptions.
            Accurate calculations ensure optimal financial planning and
            compliance.
          </p>
        </div>

        <div className="">
          {showResults ? (
            <div className="">
              <button
                onClick={() => goBack()}
                className="mb-4 inline-block text-white font-bold py-3 px-6 rounded-full bg-[#FBB03B]"
              >
                &#8592; Back to Calculator
              </button>
              <h1 className="text-2xl text-[#01355D] font-semibold mb-4">
                Results
              </h1>
              <div className="text-teal-700">
                <h2 className="font-semibold mt-2 mb-1 text-[#01355D]">
                  Exemption
                </h2>
                <p className="font-semibold text-lg text-[#FBB03B]">
                  ₹ {hraResult.exemption}/-
                </p>
              </div>
              <div className="text-teal-700">
                <h2 className="font-semibold mt-4 mb-1 text-[#01355D]">
                  HRA taxable
                </h2>
                <p className="font-semibold text-lg text-[#FBB03B]">
                  ₹ {hraResult.taxableHRA}/-
                </p>
              </div>
            </div>
          ) : (
            <div className="">
              <h1 className="text-center text-2xl text-blue-950 font-semibold">
                Calculate HRA
              </h1>
              <h2 className="font-semibold mt-5">Basic Salary + DA</h2>
              <div className="mt-3">
                <input
                  type="text"
                  value={basicSalary}
                  onChange={(e) => setBasicSalary(e.target.value)}
                  className="form-control w-full p-2 text-gray-700 bg-white border border-gray-300 rounded"
                  placeholder=" ₹ e.g., 50000"
                />
              </div>
              <h2 className="font-semibold mt-4">HRA Received</h2>
              <div className="mt-3">
                <input
                  type="text"
                  value={hraReceived}
                  onChange={(e) => setHraReceived(e.target.value)}
                  className="form-control w-full p-2 text-gray-700 bg-white border border-gray-300 rounded"
                  placeholder=" ₹ e.g., 50000"
                />
              </div>
              <h2 className="font-semibold mt-4">Choose City</h2>
              <div className="flex mt-3">
                <div className="flex items-center me-4">
                  <input
                    type="radio"
                    id="metroCity"
                    value="metro"
                    checked={cityType === "metro"}
                    onChange={() => setCityType("metro")}
                    className="w-4 h-4"
                  />
                  <label
                    htmlFor="metroCity"
                    className="ms-2 text-sm font-medium"
                  >
                    Metro City
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    type="radio"
                    id="otherCity"
                    value="other"
                    checked={cityType === "other"}
                    onChange={() => setCityType("other")}
                    className="w-4 h-4 "
                  />
                  <label
                    htmlFor="otherCity"
                    className="ms-2 text-sm font-medium"
                  >
                    Other City
                  </label>
                </div>
              </div>

              <h2 className="font-semibold mt-4">Actual Rent Paid</h2>
              <div className="mt-3">
                <input
                  type="text"
                  value={actualRentPaid}
                  onChange={(e) => setActualRentPaid(e.target.value)}
                  className="form-control w-full p-2 text-gray-700 bg-white border border-gray-300 rounded"
                  placeholder=" ₹ e.g., 50000"
                />
              </div>
              <button
                onClick={() => calculateHRA()}
                className="mt-4 inline-block text-white font-bold py-3 px-6 rounded-full bg-[#FBB03B]"
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

export default HRACalculator;
