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
import calculatorcapital from "../../assests/images/utilities/capital-gain1.png";

const faqs = [
  {
    id: 1,
    question: "Q1. What is a Capital Gain?",
    answer:
      "If the selling amount of a capital asset is more than the purchasing amount, this (extra) amount is Capital Gain. Similarly goes with Capital Loss. When the selling amount is lower than the purchasing amount, it is a Capital Loss. The gain comes under the income, so the taxpayer needs to pay tax on the gain.",
  },
  {
    id: 2,
    question: "Q2. How can I calculate capital gains tax?",
    answer:
      "You can calculate Capital Gain as Capital gain = final value - ( cost of acquisition of capital asset + cost of improvement of capital asset + cost of transfer of a capital asset).",
  },
  {
    id: 3,
    question: "Q3. What is an Asset?",
    answer:
      "A capital asset is any asset one acquires for personal or business use. It may be movable, immovable, tangible, intangible, circulating or fixed, such as shares, stocks, house property, and so.",
  },
  {
    id: 4,
    question:
      "Q4.  Can I avail of indexation benefit while calculating capital gain arising on the transfer of short-term capital assets?",
    answer:
      "Yes, but only in the case of long-term capital assets. The benefit is not applicable to short-term capital assets.",
  },
];

const CapitalGainCalculator = () => {
  const [assetType, setAssetType] = useState("Stocks");
  const [sellingPrice, setSellingPrice] = useState("");
  const [assetBoughtDate, setAssetBoughtDate] = useState("");
  const [netBuyingPrice, setNetBuyingPrice] = useState("");
  const [assetSoldDate, setAssetSoldDate] = useState("");
  const [capitalGain, setCapitalGain] = useState(0);

  const cgcalculate = () => {
    const sellingPriceValue = parseFloat(sellingPrice);
    const netBuyingPriceValue = parseFloat(netBuyingPrice);

    const boughtDate = new Date(assetBoughtDate);
    const soldDate = new Date(assetSoldDate);

    if (
      isNaN(sellingPriceValue) ||
      isNaN(netBuyingPriceValue) ||
      isNaN(boughtDate) ||
      isNaN(soldDate)
    ) {
      alert(
        "Please enter valid values for Selling Price, Net Buying Price, and Dates."
      );
      return;
    }

    const holdingPeriodInYears =
      (soldDate - boughtDate) / (365 * 24 * 60 * 60 * 1000);

    const calculatedCapitalGain = sellingPriceValue - netBuyingPriceValue;

    setCapitalGain(calculatedCapitalGain.toFixed(2));
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
            Capital Gain Calculator
          </h1>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            Capital Gains Calculator assists investors in saving on taxes in
            long-term gains. It enables the taxpayer to inflate the asset's
            buying price by considering the result of inflation and estimates
            the taxable gain by reckoning the sale price.
          </p>
        </div>

        <div className="flex justify-center  ">
          <img
            src={calculatorcapital}
            className=" w-[85%] md:w-[70%] h-auto"
          ></img>
        </div>
      </div>

      {/* section-2 */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-14 mx-5 md:mx-20 lg:mx-28  mt-24 md:mt-28">
        {/* Left Column */}
        <div className="border border-gray-300 hover:border-[#B70505] rounded-xl p-5">
          <div className="mb-6 ">
            <label
              htmlFor="type_aset_sold"
              className="block text-lg mb-2 font-semibold text-[#01355D]"
            >
              Type of Asset Sold<span>*</span>
            </label>
            <select
              id="type_aset_sold"
              className="mt-1 p-2 border rounded w-full"
              value={assetType}
              onChange={(e) => setAssetType(e.target.value)}
            >
              <option value="Stocks">Stocks</option>
              <option value="Equity Oriented">
                Equity Oriented Mutual Funds
              </option>
              <option value="Rest of the Mutual Funds">
                Rest of the Mutual Funds
              </option>
              <option value="Government">Government and Corporate Bonds</option>
              <option value="Gold">Gold</option>
              <option value="Gold ETF">Gold ETF</option>
              <option value="Property">Property</option>
              <option value="Privately held Stocks">
                Privately held Stocks
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                htmlFor="selling_price"
                className="block text-lg mb-2 font-semibold text-[#01355D]"
              >
                Net Selling Price<span>*</span>
              </label>
              <input
                type="text"
                id="selling_price"
                className="mt-1 p-2 border rounded w-full"
                placeholder="10,00,000"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="asset_bought_date"
                className="block text-lg mb-2 font-semibold text-[#01355D]"
              >
                Asset Bought Date<span>*</span>
              </label>
              <input
                type="date"
                id="asset_bought_date"
                className="mt-1 p-2 border rounded w-full"
                value={assetBoughtDate}
                onChange={(e) => setAssetBoughtDate(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                htmlFor="net_buying_price"
                className="block text-lg mb-2 font-semibold text-[#01355D]"
              >
                Net Buying Price<span>*</span>
              </label>
              <input
                type="text"
                id="net_buying_price"
                className="mt-1 p-2 border rounded w-full"
                placeholder="10,00,000"
                value={netBuyingPrice}
                onChange={(e) => setNetBuyingPrice(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="asset_sold_date"
                className="block text-lg mb-2 font-semibold text-[#01355D]"
              >
                Asset Sold Date<span>*</span>
              </label>
              <input
                type="date"
                id="asset_sold_date"
                className="mt-1 p-2 border rounded w-full"
                value={assetSoldDate}
                onChange={(e) => setAssetSoldDate(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <button
              className="hover:bg-[#B70505] bg-[#FBB03B] text-white font-bold py-2 px-4 rounded mt-3"
              onClick={cgcalculate}
            >
              Calculate
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className=" bg-gray-900 shadow rounded-lg bg-center bg-cover p-4 mt-10">
            <div className="cg_calculate_res-contaner text-white text-center   ">
              <div>
                <p>
                  After <span className="text-[#F8951D]">4 years,</span> Asset
                  Holding Period (in years)
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Capital Gain / Loss */}
                <div className="text-white p-4">
                  <center>
                    <h6>Capital Gain / Loss</h6>
                    <h4 className="cg_p_l text-[#F8951D] text-3xl font-bold">
                      ₹ {capitalGain}/-
                    </h4>
                  </center>
                </div>
                {/* Effective Tax Rate */}
                <div className="text-white p-4">
                  <center>
                    <h6>Effective Tax Rate</h6>
                    <h4 className="eff_tax_rate text-[#F8951D] text-3xl font-bold">
                      Profit Taxed at your Applicable Income Tax Rate
                    </h4>
                  </center>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Type of Capital Gain */}
                <div className="text-white p-4">
                  <center>
                    <h6>Type of Capital Gain</h6>
                    <h4 className="long_short_term text-[#F8951D] text-5xl font-bold">
                      Short Term
                    </h4>
                  </center>
                </div>
                {/* Tax Payable */}
                <div className="text-white p-4">
                  <center>
                    <h6>Tax Payable</h6>
                    <h4 className="cg_tax_payable text-[#F8951D] text-5xl leading-8 font-bold">
                      ₹ 0/-
                    </h4>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            Easy and Quick Processing
          </h1>
          <p className="p-3 text-center ">
            With the online Capital Gain Calculator, now calculate both Long
            Term Capital Gain and Short Term Capital Gain easily in a blink of
            an eye.
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
            Accurate Results
          </h1>
          <p className="p-3 text-center ">
            You only have to put the values and variables, and the online
            capital gain calculator will do it for you with full accuracy.
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
            No More Complexities
          </h1>
          <p className="p-3 text-center ">
            This Capital Gain calculator helps you estimate all the gains and
            losses along with the tax payable with zero complexity.
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
    </>
  );
};

export default CapitalGainCalculator;
