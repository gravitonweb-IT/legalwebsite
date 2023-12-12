import React, { useState } from "react";
import RDImg from "../../assests/images/utilities/rdcalculator.png";

const RDCalculator = () => {
  const [principal, setPrincipal] = useState();
  const [interestRate, setInterestRate] = useState("");
  const [timePeriod, setTimePeriod] = useState();
  const [calculatedAmount1, setCalculatedAmount1] = useState(0);

  const [maturityDate, setMaturityDate] = useState("");
  const [calculationFrequency, setCalculationFrequency] = useState("yearly");
  const [amt, setamt] = useState(0);
  const [Total, setTotal] = useState(0);

  const handleCalculate = () => {
    const rate = interestRate / 400;
    const yearlyMultiplier = 1 + rate;

    const totalPeriod =
      calculationFrequency === "yearly"
        ? (timePeriod * 12) / 3
        : timePeriod / 3;

    const deposit =
      calculationFrequency === "yearly"
        ? principal * timePeriod * 12
        : principal * timePeriod;
    setamt(deposit.toFixed(2));

    const amount1 =
      (principal * (Math.pow(yearlyMultiplier, totalPeriod) - 1)) /
      (1 - Math.pow(yearlyMultiplier, -1 / 3));

    setCalculatedAmount1(amount1.toFixed(2));

    const int = amount1 - deposit;
    setTotal(int.toFixed(2));

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
      maturityDateValue = ` ${maturityYear}-${month}-${currentDate.getDate()}`;
    }

    setMaturityDate(maturityDateValue);
  };

  const incrementDeposit = (incrementValue) => {
    setPrincipal((prev) => Math.max(0, prev + incrementValue));
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10  mx-5 md:mx-20 lg:mx-28 mt-24 md:mt-28">
        <div className="">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B70505]">
            RD Calculator
          </h1>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            The RD calculator gauges returns on Recurring Deposits. By
            specifying the monthly deposit, tenure, and interest rate, it
            computes the maturity amount, assisting individuals in effective
            financial planning and achieving their savings goals with
            disciplined regular contributions.
          </p>
        </div>

        <div className="flex justify-center">
          <img src={RDImg}></img>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-14 mx-5 md:mx-20 lg:mx-28 mt-5 md:mt-20">
        <div className="">
          <div className="bg-neutral-900 p-8 md:p-16 rounded-md mb-4 mt-4 shadow-md font-bold">
            <p className="text-white mb-8">
              After {timePeriod}{" "}
              {calculationFrequency === "yearly" ? "years" : "months"}, your
              amount will be
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
              <div className="">
                <p className="text-white mb-2">Deposit Amount</p>
                <p className="text-orange-400">₹{amt} /-</p>
              </div>
              <div>
                <p className="text-white mb-2">Total Interest</p>
                <p className="text-orange-400"> ₹ {Total}/-</p>
              </div>
              <div>
                <p className="text-white mb-2">Maturity Value</p>
                <p className="text-orange-400">₹ {calculatedAmount1}/-</p>
              </div>
            </div>
            <p className=" mt-4 text-white">Maturity Date: </p>
            <p className="text-orange-400">{maturityDate} </p>
          </div>
        </div>

        <div className="">
          <h1 className="text-xl font-semibold text-black mb-4">
            RD CALCULATER
          </h1>
          <label className="text-lg font-bold">Deposit Amount* (Rs):</label>
          <div className="mt-3 mb-4">
            <input
              type="text"
              placeholder="Enter Amount"
              className="form-control w-full p-2 text-gray-700 bg-white border border-gray-300 rounded"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>

          <label className="text-lg font-bold">Interest Rate* (%):</label>
          <div className="mt-3 mb-4">
            <input
              type="text"
              placeholder="Enter Interest Rate"
              className="form-control w-full p-2 text-gray-700 bg-white border border-gray-300 rounded"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>

          <label className="text-lg font-bold">
            Time Period* (
            {calculationFrequency === "yearly" ? "Years" : "Months"}):
          </label>
          <div className="mt-3">
            <input
              type="text"
              placeholder={`Enter Time Period (${
                calculationFrequency === "yearly" ? "Years" : "Months"
              })`}
              className="form-control w-full p-2 text-gray-700 bg-white border border-gray-300 rounded"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
            />
          </div>

          <div className=" mt-5">
            <label className="font-bold text-lg pr-5">Frequency:</label>
            <button
              className={`bg-orange-500 text-white px-4 py-2 rounded-2xl ${
                calculationFrequency === "yearly" ? "bg-orange-500" : ""
              }`}
              onClick={() => setCalculationFrequency("yearly")}
            >
              Yearly
            </button>

            <button
              className={`bg-orange-500 text-white px-4 py-2 rounded-2xl ml-4 ${
                calculationFrequency === "monthly" ? "bg-orange-500" : ""
              }`}
              onClick={() => setCalculationFrequency("monthly")}
            >
              Monthly
            </button>
          </div>

          <button
            className="text-white font-bold py-3 px-6 rounded-full bg-[#FBB03B] mt-5"
            onClick={handleCalculate}
          >
            Calculate
          </button>
        </div>
      </div>
    </>
  );
};

export default RDCalculator;
