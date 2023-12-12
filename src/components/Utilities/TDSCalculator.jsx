import React, { useState } from "react";
import { TiArrowLeftThick } from "react-icons/ti";

const TDSCalculator = () => {
  const [panAvailable, setPanAvailable] = useState("");
  const [amountOfPayment, setAmountOfPayment] = useState("");
  const [recipientType, setRecipientType] = useState("");
  const [natureOfPayment, setNatureOfPayment] = useState("");
  const [tdsResult, setTdsResult] = useState({
    exemption: 0,
    isTdsApplicable: false,
    tdsPolicyInfo: "",
  });
  const [showTdsCalculator, setShowTdsCalculator] = useState(true);

  const calculateTDS = () => {
    const parsedAmountOfPayment = parseFloat(amountOfPayment) || 0;

    const isTdsApplicable =
      panAvailable === "yes" &&
      (recipientType === "individual" || recipientType === "other") &&
      [
        "192A",
        "193",
        "194",
        "194B",
        "194BB",
        "194DA",
        "194H",
        "194I(a)",
        "194I(b)",
        "194IA",
        "194IB",
        "194K",
        "194O",
      ].includes(natureOfPayment);

    let tdsExemption = 0;
    let cumulativePolicyInfo = "";

    if (isTdsApplicable) {
      switch (`${natureOfPayment}_${recipientType}`) {
        case "192A_individual":
          if (parsedAmountOfPayment > 50000) {
            tdsExemption = parsedAmountOfPayment * 0.1;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross withdrawal before 5 years of continuous services during the F.Y. exceeds Rs. 50,000, then TDS will be applicable at 10%. ";
          }
          break;
        case "193_individual":
          if (parsedAmountOfPayment > 10000) {
            tdsExemption = parsedAmountOfPayment * 0.1;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. exceeds Rs. 10,000, then TDS will be applicable at 10%. No TDS for debentures issued by listed companies up to Rs. 5000. ";
          }
          break;
        case "194_individual":
          if (parsedAmountOfPayment > 5000) {
            tdsExemption = parsedAmountOfPayment * 0.1;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. exceeds Rs. 5,000, then TDS will be applicable at 10%. ";
          }
          break;
        case "194B_individual":
          if (parsedAmountOfPayment > 10000) {
            tdsExemption = parsedAmountOfPayment * 0.3;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. exceeds Rs. 10,000, then TDS will be applicable at 30%. ";
          }
          break;
        case "194BB_individual":
          if (parsedAmountOfPayment > 10000) {
            tdsExemption = parsedAmountOfPayment * 0.3;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. exceeds Rs. 10,000, then TDS will be applicable at 30%. ";
          }
          break;
        case "194DA_individual":
          if (parsedAmountOfPayment >= 100000) {
            tdsExemption = parsedAmountOfPayment * 0.05;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. is Rs. 1,00,000 or more, then TDS will be applicable at 5%. Not applicable if the amount is exempt u/s 10(10D). ";
          }
          break;
        case "194H_individual":
          if (parsedAmountOfPayment > 15000) {
            tdsExemption = parsedAmountOfPayment * 0.05;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. exceeds Rs. 15,000, then TDS will be applicable at 5%. ";
          }
          break;
        case "194I(a)_individual":
          if (parsedAmountOfPayment > 240000) {
            tdsExemption = parsedAmountOfPayment * 0.02;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. exceeds Rs. 2,40,000, then TDS will be applicable at 2% for Plant & Machinery. ";
          }
          break;
        case "194I(b)_individual":
          if (parsedAmountOfPayment > 240000) {
            tdsExemption = parsedAmountOfPayment * 0.1;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. exceeds Rs. 2,40,000, then TDS will be applicable at 10% for land & building or furniture & fitting. ";
          }
          break;
        case "194IA_individual":
          if (parsedAmountOfPayment >= 5000000) {
            tdsExemption = parsedAmountOfPayment * 0.01;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. is Rs. 50,00,000 or more, then TDS will be applicable at 1%. ";
          }
          break;
        case "194IB_individual":
          if (parsedAmountOfPayment > 50000) {
            tdsExemption = parsedAmountOfPayment * 0.05;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If monthly rent payment to the landlord exceeds Rs. 50,000, then TDS will be applicable at 5%. ";
          }
          break;
        case "194K_individual":
          if (parsedAmountOfPayment > 5000) {
            tdsExemption = parsedAmountOfPayment * 0.1;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If dividend amount during the F.Y. exceeds Rs. 5,000, then TDS will be applicable at 10%. No TDS on Income from Capital Gains on the sale of MFs. ";
          }
          break;
        case "194O_individual":
          if (parsedAmountOfPayment > 500000) {
            tdsExemption = parsedAmountOfPayment * 0.01;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If sale of goods or provision of services during the F.Y. exceeds Rs. 5,00,000, then TDS will be applicable at 1%. ";
          }
          break;
        case "192A_other":
          if (parsedAmountOfPayment > 50000) {
            tdsExemption = parsedAmountOfPayment * 0.1;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross withdrawal before 5 years of continuous services during the F.Y. exceeds Rs. 50,000, then TDS will be applicable at 10%. ";
          }
          break;
        case "193_other":
          if (parsedAmountOfPayment > 10000) {
            tdsExemption = parsedAmountOfPayment * 0.1;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. exceeds Rs. 10,000, then TDS will be applicable at 10%. No TDS for debentures issued by listed companies up to Rs. 5000. ";
          }
          break;
        case "194_other":
          if (parsedAmountOfPayment > 5000) {
            tdsExemption = parsedAmountOfPayment * 0.1;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. exceeds Rs. 5,000, then TDS will be applicable at 10%. ";
          }
          break;
        case "194B_other":
          if (parsedAmountOfPayment > 10000) {
            tdsExemption = parsedAmountOfPayment * 0.3;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. exceeds Rs. 10,000, then TDS will be applicable at 30%. ";
          }
          break;
        case "194BB_other":
          if (parsedAmountOfPayment > 10000) {
            tdsExemption = parsedAmountOfPayment * 0.3;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. exceeds Rs. 10,000, then TDS will be applicable at 30%. ";
          }
          break;
        case "194DA_other":
          if (parsedAmountOfPayment >= 100000) {
            tdsExemption = parsedAmountOfPayment * 0.05;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. is Rs. 1,00,000 or more, then TDS will be applicable at 5%. Not applicable if the amount is exempt u/s 10(10D). ";
          }
          break;
        case "194H_other":
          if (parsedAmountOfPayment > 15000) {
            tdsExemption = parsedAmountOfPayment * 0.05;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. exceeds Rs. 15,000, then TDS will be applicable at 5%. ";
          }
          break;
        case "194I(a)_other":
          if (parsedAmountOfPayment > 240000) {
            tdsExemption = parsedAmountOfPayment * 0.02;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. exceeds Rs. 2,40,000, then TDS will be applicable at 2% for Plant & Machinery. ";
          }
          break;
        case "194I(b)_other":
          if (parsedAmountOfPayment > 240000) {
            tdsExemption = parsedAmountOfPayment * 0.1;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. exceeds Rs. 2,40,000, then TDS will be applicable at 10% for land & building or furniture & fitting. ";
          }
          break;
        case "194IA_other":
          if (parsedAmountOfPayment >= 5000000) {
            tdsExemption = parsedAmountOfPayment * 0.01;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If gross payment to the party during the F.Y. is Rs. 50,00,000 or more, then TDS will be applicable at 1%. ";
          }
          break;
        case "194IB_other":
          if (parsedAmountOfPayment > 50000) {
            tdsExemption = parsedAmountOfPayment * 0.05;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If monthly rent payment to the landlord exceeds Rs. 50,000, then TDS will be applicable at 5%. ";
          }
          break;
        case "194K_other":
          if (parsedAmountOfPayment > 5000) {
            tdsExemption = parsedAmountOfPayment * 0.1;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If dividend amount during the F.Y. exceeds Rs. 5,000, then TDS will be applicable at 10%. No TDS on Income from Capital Gains on the sale of MFs. ";
          }
          break;
        case "194O_other":
          if (parsedAmountOfPayment > 500000) {
            tdsExemption = parsedAmountOfPayment * 0.01;
            cumulativePolicyInfo +=
              "Tax Calculation Rule: If sale of goods or provision of services during the F.Y. exceeds Rs. 5,00,000, then TDS will be applicable at 1%. ";
          }
          break;
          default:
          break;
      }
    }
    setTdsResult({
      exemption: tdsExemption,
      isTdsApplicable,
      tdsPolicyInfo: cumulativePolicyInfo,
    });

    setShowTdsCalculator(false);
  };
  const goBack = () => {
    setShowTdsCalculator(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-14 mx-5 md:mx-20 lg:mx-28 mt-24 md:mt-28">
        <div className="">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B70505]">
            TDS Calculator
          </h1>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            The TDS calculator efficiently computes your Tax Deducted at Source,
            aiding in precise income tax planning. By entering income and
            applicable deductions, it provides instant TDS estimates, helping
            you manage your finances effectively. Simplify tax calculations and
            ensure compliance with this user-friendly tool, optimizing your
            financial planning effortlessly.
          </p>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            A TDS calculator facilitates the computation of Tax Deducted at
            Source. By inputting income, deductions, and applicable rates, it
            determines the TDS liability. This tool ensures accurate tax
            planning, compliance, and helps individuals manage their financial
            affairs efficiently within the regulatory framework.
          </p>
        </div>

        <div className="">
          {showTdsCalculator ? (
            <div className="">
              <h1 className="text-center text-2xl font-semibold mb-5">
                Financial Year 2021-2022
              </h1>

              <label className="font-semibold text-lg">
                PAN of Recipient Available
              </label>
              <select
                value={panAvailable}
                onChange={(e) => setPanAvailable(e.target.value)}
                className="form-control w-full p-2 text-gray-700 bg-white border border-gray-300 rounded mt-3 mb-4"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <label className="font-semibold text-lg">
                Amount of Payment
              </label>
              <input
                type="text"
                value={amountOfPayment}
                onChange={(e) => setAmountOfPayment(e.target.value)}
                className="form-control w-full p-2 text-gray-700 bg-white border border-gray-300 rounded mt-3 mb-4"
                placeholder="₹ e.g., 60000"
              />

              <label className="font-semibold text-lg">Recipient</label>
              <div className="mb-4 mt-3">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="individualRecipient"
                    value="individual"
                    checked={recipientType === "individual"}
                    onChange={() => setRecipientType("individual")}
                    className="w-4 h-4 "
                  />
                  <label
                    htmlFor="individualRecipient"
                    className="ms-2 text-sm font-medium"
                  >
                    Individual/HUF/Sole Proprietor
                  </label>
                </div>
                <div className="flex items-center mt-2">
                  <input
                    type="radio"
                    id="otherRecipient"
                    value="other"
                    checked={recipientType === "other"}
                    onChange={() => setRecipientType("other")}
                    className="w-4 h-4"
                  />
                  <label
                    htmlFor="otherRecipient"
                    className="ms-2 text-sm font-medium "
                  >
                    Other
                  </label>
                </div>
              </div>

              <label className="font-semibold text-lg">
                Nature of Payment
              </label>
              <select
                value={natureOfPayment}
                onChange={(e) => setNatureOfPayment(e.target.value)}
                className="form-control w-full p-2 text-gray-700 bg-white border border-gray-300 rounded mt-3"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="192A">
                  Section 192A - Payment of accumulated PF balance to an
                  employee
                </option>
                <option value="193">
                  Section 193 - Interest on Securities
                </option>
                <option value="194">
                  Section 194 - Dividend other than the Dividend as referred to
                  in Section 115-O
                </option>
                <option value="194B">
                  Section 194B - Winnings from Lotteries/ Puzzles/ Game etc.
                </option>
                <option value="194BB">
                  Section 194BB - Income by way of Winnings from Horse Races
                </option>
                <option value="194DA">
                  Section 194DA - Maturity of Life Insurance Policy
                </option>
                <option value="194H">
                  Section 194H - Commission or Brokerage
                </option>
                <option value="194I(a)">
                  Section 194I(a) - Rent on Plant & Machinery
                </option>
                <option value="194I(b)">
                  Section 194I(b) - Rent on Land & building or Furniture &
                  Fitting
                </option>
                <option value="194IA">
                  Section 194IA - Payment on transfer of certain Immovable
                  Property other than agricultural land
                </option>
                <option value="194IB">
                  Section 194IB - Rent Payment to Landlord by Individuals
                </option>
                <option value="194K">
                  Section 194K - Income in respect of units (UTI/MF)
                </option>
                <option value="194O">
                  Section 194O - TDS on Payment by E-commerce Operator to
                  E-commerce participant
                </option>
              </select>

              <button
                onClick={() => calculateTDS()}
                className="mt-4  text-white font-bold py-3 px-6 rounded-full bg-[#FBB03B]"
              >
                Calculate TDS
              </button>
            </div>
          ) : (
            <div className="">
              <button
                onClick={() => goBack()}
                className="mb-4 inline-block text-white font-bold py-3 px-6 rounded-full bg-[#FBB03B]"
              >
                &#8592; Back
              </button>
              <h1 className="text-2xl text-[#01355D] font-bold">
                TDS Results
              </h1>
              <div className="font-bold mt-5">
                <h2 className="font-semibold text-xl">Exemption</h2>
                <p className="font-bold text-2xl text-[#FBB03B] mt-2">₹ {tdsResult.exemption}/-</p>
              </div>
              <div className="mt-4">
                <h2 className="font-bold text-xl">TDS Policy Information</h2>
                <p className="font-medium text-lg mt-2">{tdsResult.tdsPolicyInfo}</p>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TDSCalculator;
