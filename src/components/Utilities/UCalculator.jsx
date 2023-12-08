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

const faqs = [
  {
    id: 1,
    question: "Q1.  When can I claim a deduction under 80U?",
    answer:
      "Individuals with a prescribed disability between 40% to 80% disability, can claim a deduction under section 80U of the Income Tax Act.",
  },
  {
    id: 2,
    question: "Q2. Who can claim deductions under section 80U?",
    answer:
      "Anyone from the below categories with a disability of more than 40% to 80% can claim deductions under section 80U:Low vision, Blindness, Locomotor disability ,Mental illness, Hearing impairment, Mental retardation, Leprosy-cured",
  },
  {
    id: 3,
    question: "Q3. Is 80U applicable for dependents?",
    answer: "No, one cannot claim a deduction for the disability of any of your dependents under section 80U. It is available only for taxpayers who are disabled as per section 80U.",
  },
  {
    id: 4,
    question: "Q4. How can I claim deductions under Section 80U?",
    answer:
      "A person with a physical disability can claim the deductions under section 80U while reporting income in his Income Tax Return.",
  },
];
const UCalculator = () => {
  const [financialYear, setFinancialYear] = useState("");
  const [status, setStatus] = useState("");
  const [disabilityPercentage, setDisabilityPercentage] = useState("");
  const [deductionAmount, setDeductionAmount] = useState(0);

  const calculateDeduction = () => {
    let deduction = 0;

    if (financialYear === "2023-2024" && status === "resident") {
      if (disabilityPercentage === "normal") {
        deduction = 75000;
      } else if (disabilityPercentage === "severe") {
        deduction = 125000;
      }
    } else if (financialYear === "2024-2025" && status === "resident") {
      if (disabilityPercentage === "normal") {
        deduction = 80000;
      } else if (disabilityPercentage === "severe") {
        deduction = 130000;
      }
    }

    setDeductionAmount(deduction);
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
            80U Calculator
          </h1>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            This online tool updates the latest 80U rules and regulations. This
            calculator works perfectly for everyone, especially those with
            disabilities. You can calculate Income Tax offers tax, benefits, and
            an estimate of eligibility for deductions under Section 80U. Also,
            now you can know whether you are eligible for deductions.
          </p>
        </div>

        <div className="flex justify-center   ">
          <div className="bg-white shadow-xl rounded-2xl p-5  ">
            <h1 className="text-2xl font-semibold mb-4">
              Calculate ITR deductions for disabled
            </h1>
            <div className="mb-4">
              <label
                htmlFor="financialYear"
                className="block text-lg mb-2 font-semibold text-[#01355D]"
              >
                Financial Year:
              </label>
              <select
                id="financialYear"
                className="w-[75%] md:w-full border p-2 rounded-lg "
                onChange={(e) => setFinancialYear(e.target.value)}
              >
                <option value="">Select Financial Year</option>
                <option value="2023-2024">2023-2024</option>
                <option value="2024-2025">2024-2025</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-lg mb-2 font-semibold text-[#01355D]"
              >
                Status:
              </label>
              <select
                id="status"
                className="w-[75%] md:w-full border p-2 rounded-lg"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select Status</option>
                <option value="resident">Resident Individual</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="disabilityPercentage"
                className="block text-lg mb-2 font-semibold text-[#01355D]"
              >
                Percentage of Disability:
              </label>
              <select
                id="disabilityPercentage"
                className=" w-[75%] md:w-full  border p-2 rounded-lg "
                onChange={(e) => setDisabilityPercentage(e.target.value)}
              >
                <option value="">Select Disability Percentage</option>
                <option value="normal">Normal (40% or more)</option>
                <option value="severe">Severe (80% or more)</option>
              </select>
            </div>
            <button
              className="hover:bg-[#B70505] bg-[#FBB03B] text-white py-2 px-4 rounded"
              onClick={calculateDeduction}
            >
              Calculate
            </button>
            {deductionAmount > 0 && (
              <div className="mt-4 block text-lg  font-semibold text-[#B70505]">
                <p>Deduction Amount: {deductionAmount}</p>
              </div>
            )}
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

      <div className="grid grid-cols-1 md:grid-cols-3  gap-10 mx-5 md:mx-28  lg:mx-52   mt-10 md:mt-14">
        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center text-xl font-bold">
            Easy Estimation of Deductions
          </h1>
          <p className="p-3 text-center ">
            This online Calculator assesses you and estimates the deductions you
            can avail yourself of under 80U based on your disability.
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
            Quick & Efficient
          </h1>
          <p className="p-3 text-center ">
            With the help of this online 80U Calculator, you can get the desired
            outcome quickly and accurately in a few seconds.
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
            Helps Finding Eligibility
          </h1>
          <p className="p-3 text-center ">
            The online 80U Calculator helps you compute according to various
            deductions and confirms if you are eligible for a deduction or not.
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
    </>
  );
};

export default UCalculator;
