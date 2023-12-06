import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import legallogo from "./Images/logolegal.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (dropdownIndex) => {
    setActiveDropdown(dropdownIndex);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? "bg-white text-black shadow-lg px-5 py-2 sm:px-8 sm:py-2 md:px-12  xl:px-20"
          : "bg-white text-black shadow-md px-5 py-2 sm:px-8 sm:py-2 md:px-12  xl:px-20"
      }`}
    >
      <div className="flex justify-between items-center">
        <Link to="/">
          {isScrolled ? (
            <img className="w-25 h-12 cursor-pointer" src={legallogo} alt="" />
          ) : (
            <img className="w-25 h-12 cursor-pointer" src={legallogo} alt="" />
          )}
        </Link>

        <div className="xl:hidden">
          <button
            className="p-2 focus:outline-none third-dropdown-button"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        {/* Drawer */}

        {isDrawerOpen && (
          <div className="xl:hidden absolute top-0 right-0 h-screen w-full bg-white text-black p-4 shadow-md overflow-y-auto">
            <button
              className="text-black  p-2 focus:outline-none absolute top-2 right-2"
              onClick={() => setIsDrawerOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <ul className="space-y-3">
              {/* Start Business */}
              <li>
                <button
                  className="text-black hover:text-blue-500 focus:outline-none"
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to="/"
                   
                    className="hover:text-blue-500 "
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Start Business
                  </Link>

                  {activeDropdown ? (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  )}
                </button>

                {activeDropdown === 1 && (
                  <div className="ml-2">
                    <ul className="mt-2 space-y-1">
                      <p>
                        <Link
                          to="/ParternerShip"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Partnership Deed
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/PvtLtdCompanyRegisteration"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Pvt. Ltd. Company Registration
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/Section8CompanyRegistration"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Section 8 Company Registration
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/LLPCompanyRegistration"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          LLP Company Registration
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/OpcOnePersonCompanyRegistration"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          OPC Company REgistration
                        </Link>
                      </p>

                      <p></p>
                    </ul>
                  </div>
                )}
              </li>

              {/* Start Business */}
              <li>
                <button
                  className="text-black hover:text-blue-500 focus:outline-none"
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="hover:text-blue-500 "
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Compliance
                  </Link>

                  {activeDropdown ? (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  )}
                </button>

                {activeDropdown === 2 && (
                  <div className="ml-2">
                    <ul className="mt-2 space-y-1">
                      <p>
                        <Link
                          to="/AnnualComplianceLlp"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Annual Compliance LLP
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/AnnualComplianceCompancy"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Annual Compliance Pvt.Ltd.
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/CmaReport"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          CMA Report
                        </Link>
                      </p>

                      <p></p>
                    </ul>
                  </div>
                )}
              </li>

              {/* Change in business */}
              <li>
                <button
                  className="text-black hover:text-blue-500 focus:outline-none"
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="hover:text-blue-500 "
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Change In Business
                  </Link>

                  {activeDropdown ? (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  )}
                </button>

                {activeDropdown === 3 && (
                  <div className="ml-2">
                    <ul className="mt-2 space-y-1">
                      <p>
                        <Link
                          to="/DissolutionOfDeed"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Dissolution of deeds
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/AddressAmendmentWithInStateLlp"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Address Amendment Within state (LLP)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/AddressAmendmentWithInStateCompany"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Address Amendment Within state (Company)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/AddressAmendmentOutStateLlp"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Address Amendment out of state (LLP)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/AddressAmendmentoutStateCompany"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Address Amendment out of state (Company)
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/AddDirector"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Add Director (company)
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/AddPartner"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Add Partner (Company)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/IncreaseCapitalLlp"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Increase Capital (LLP)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/ChangeInNameLlp"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Change In Name of LLP
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="RemoveDirectorcompany"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Remove Director (Company)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/RemoveDirectorllp"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Remove Partner (LLP)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/IncreaseCapitalCompany"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Increase Capital (Company)
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/Changeincompany"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Change In Name of Company
                        </Link>
                      </p>
                    </ul>
                  </div>
                )}
              </li>

              {/* Registrations */}
              <li>
                <button
                  className="text-black hover:text-blue-500 focus:outline-none"
                  onMouseEnter={() => handleMouseEnter(4)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="hover:text-blue-500 "
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Registrations
                  </Link>

                  {activeDropdown ? (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  )}
                </button>

                {activeDropdown === 4 && (
                  <div className="ml-2">
                    <ul className="mt-2 space-y-1">
                      <p>
                        <Link
                          to="/ImportExportLicense"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Import Export License (IEC)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/IcegateRegistration"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          ICEGATE Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/MsmeUdhyanRegistration"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          MSME Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/SocietyRegistration"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Society Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/PfRegistration"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          PF Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/ProfessionalTaxRegistration"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Professional Tax Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/TradeMarkRegistration"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Trade Mark Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/GumastaLicense"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Gumasta License
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/EsirRegistration"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          ESIC Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/GstRegistration"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          GST Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/FoodRegistration"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Food Licence
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/TradeLicense"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Trade Licence
                        </Link>
                      </p>
                    </ul>
                  </div>
                )}
              </li>

              {/* Filing & More */}

              <li>
                <button
                  className="text-black hover:text-blue-500 focus:outline-none"
                  onMouseEnter={() => handleMouseEnter(5)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="hover:text-blue-500 "
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Filing & More
                  </Link>

                  {activeDropdown ? (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  )}
                </button>

                {activeDropdown === 5 && (
                  <div className="ml-2">
                    <ul className="mt-2 space-y-1">
                      <p>
                        <Link
                          to="/GstReturnFiling"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          GST Return Filing
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/ITSfiling"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          ITR Filing
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/TDSReturnFiling"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          TDS Return Filing
                        </Link>
                      </p>

                      <p></p>
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <button
                  className="text-black hover:text-blue-500 focus:outline-none"
                  onMouseEnter={() => handleMouseEnter(6)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="hover:text-blue-500 "
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Accounting
                  </Link>

                  {activeDropdown ? (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  )}
                </button>

                {activeDropdown === 6 && (
                  <div className="ml-2">
                    <ul className="mt-2 space-y-1">
                      <p>
                        <Link
                          to="/OnlineAccounting"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Online Accounting
                        </Link>
                      </p>
                    </ul>
                  </div>
                )}
              </li>

              {/* Drafting */}
              <li>
                <button
                  className="text-black hover:text-blue-500 focus:outline-none"
                  onMouseEnter={() => handleMouseEnter(7)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="hover:text-blue-500 "
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Drafting
                  </Link>

                  {activeDropdown ? (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  )}
                </button>

                {activeDropdown === 7 && (
                  <div className="ml-2">
                    <ul className="mt-2 space-y-1">
                      <p>
                        <Link
                          to="/LegalDrafting"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Legal Drafting
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/RentAgreement"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Rent Agreement
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/NOC"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          NOC
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/Affidavit"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Affidavit
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/PowerOfAttorney"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Power of Attorney
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/Will"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Will
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/ApplicationForm"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Application Form
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/NDADrafting"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          NDA Drafting
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/PrivacyPolicyDrafting"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Privacy Policy Drafting
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/TermAndCondition"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Terms and Conditions Drafting
                        </Link>
                      </p>
                    </ul>
                  </div>
                )}
              </li>

              {/* Legal Issue */}
              <li>
                <button
                  className="text-black hover:text-blue-500 focus:outline-none"
                  onMouseEnter={() => handleMouseEnter(8)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="hover:text-blue-500 "
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Legal Issue
                  </Link>

                  {activeDropdown ? (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  )}
                </button>

                {activeDropdown === 8 && (
                  <div className="ml-2">
                    <ul className="mt-2 space-y-1">
                      <p>
                        <Link
                          to="/LegalNoticeReply"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Legal Notice Reply
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/LegalAdvice"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Legal Advice
                        </Link>
                      </p>

                      <p></p>
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <button
                  className="text-black hover:text-blue-500 focus:outline-none"
                  onMouseEnter={() => handleMouseEnter(9)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="hover:text-blue-500 "
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Legal Notice
                  </Link>

                  {activeDropdown ? (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  )}
                </button>

                {activeDropdown === 9 && (
                  <div className="ml-2">
                    <ul className="mt-2 space-y-1">
                      <p>
                        <Link
                          to="/LegalNoticePreparation"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Legal Notice Prepration
                        </Link>
                      </p>
                    </ul>
                  </div>
                )}
              </li>

              {/* Other Services */}
              <li>
                <button
                  className="text-black hover:text-blue-500 focus:outline-none"
                  onMouseEnter={() => handleMouseEnter(10)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="hover:text-blue-500 "
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Other Services
                  </Link>

                  {activeDropdown ? (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  )}
                </button>

                {activeDropdown === 10 && (
                  <div className="ml-2">
                    <ul className="mt-2 space-y-1">
                      <p>
                        <Link
                          to="/BalanceSheetPraparationAndP"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Balance Sheet Preparation & P&L
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/ProjectReportPreparation"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Project Report Preparationr
                        </Link>
                      </p>
                    </ul>
                  </div>
                )}
              </li>

              {/* Utilities */}
              <li>
                <button
                  className="text-black hover:text-blue-500 focus:outline-none"
                  onMouseEnter={() => handleMouseEnter(11)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="hover:text-blue-500 "
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Utilities
                  </Link>

                  {activeDropdown ? (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  )}
                </button>

                {activeDropdown === 11 && (
                  <div className="ml-2">
                    <ul className="mt-2 space-y-1">
                      <p>
                        <Link
                          to="/GSTCalculator"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          GST Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/SIPCalculator"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          SIP Calculator
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/EMICalculator"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          EMI Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/FDCalculator"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          FD Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/UCalculator"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          80U Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/HRACalculator"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          HRA Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/SimpleInterestCalculator"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Simple Interest Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/CapitalGainCalculator"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Capital Gain Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/TDSCalculator"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          TDS Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/PPfCalculator"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          PPF Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/GratuityCalculator"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Gratuity Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/RDCalculator"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          RD Calculator
                        </Link>
                      </p>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}

        {/* for desktop */}

        <ul className="hidden xl:flex space-x-4">
          {/* Start Business */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/"
              className="hover:text-blue-500 text-sm xl:text-md font-semibold"
            >
              Start Business
            </Link>

            {activeDropdown === 1 && (
              <div className="fixed inset-0 z-50  min-h-fit flex justify-center mt-[45px] ">
                <div className="bg-white text-black border shadow-lg rounded-b-lg  text-sm w-full max-w-screen-lg cursor-pointer">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="">
                      <h2 className="text-sm xl:text-md text-blue-500 mb-3">
                        Start Business{" "}
                      </h2>
                      <Link to="/ParternerShip">
                        <h2 className="text-sm xl:text-md hover:text-blue-500">
                          Partnership Deed
                        </h2>
                      </Link>

                      <Link to="/PvtLtdCompanyRegisteration">
                        <h2 className="text-sm xl:text-md hover:text-blue-500">
                          Pvt. Ltd. Company Registration
                        </h2>
                      </Link>

                      <Link to="/Section8CompanyRegistration">
                        <h2 className="text-sm xl:text-md hover:text-blue-500">
                          Section 8 Company Registration
                        </h2>
                      </Link>

                      <Link to="/LLPCompanyRegistration">
                        <h2 className="text-sm xl:text-md  hover:text-blue-500">
                          LLP Company Registration
                        </h2>
                      </Link>

                      <Link to="/OpcOnePersonCompanyRegistration">
                        <h2 className="text-sm xl:text-md  hover:text-blue-500">
                          OPC Company Registration
                        </h2>
                      </Link>
                    </div>

                    <div className="">
                      <h2 className="text-sm xl:text-md  text-blue-500 mb-3">
                        Compliance
                      </h2>

                      <Link to="/AnnualComplianceLlp">
                        <h2 className="text-sm xl:text-md  hover:text-blue-500">
                          Annual Compliance LLP
                        </h2>
                      </Link>

                      <Link to="/AnnualComplianceCompancy">
                        <h2 className="text-sm xl:text-md  hover:text-blue-500">
                          Annual Compliance Pvt.Ltd.
                        </h2>
                      </Link>

                      <Link to="/CmaReport">
                        <h2 className="text-sm xl:text-md hover:text-blue-500 ">CMA Report</h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Change In Business */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <Link  className="hover:text-blue-500 text-sm xl:text-md font-semibold">
              Change In Business
            </Link>
 
            {activeDropdown === 2 && (
              <div className="fixed inset-0 z-50 min-h-fit flex justify-center mt-[45px] ">
                <div className="bg-white text-black border shadow-lg rounded-b-lg text-sm w-full max-w-screen-lg cursor-pointer">
                  <div className="grid grid-cols-3 gap-5 p-4">
                    <div className="">
                      <h2 className="text-sm xl:text-md text-blue-500 mb-3">
                        Change In Business
                      </h2>
                       
                        <Link to="/DissolutionOfDeed">
                        <h2 className="text-sm xl:text-md  hover:text-blue-500">
                          Dissolution of deeds
                        </h2>
                        </Link>
 
                        <Link to="/AddressAmendmentWithInStateLlp">
                        <h2 className="text-sm xl:text-md hover:text-blue-500 ">
                          Address Amendment Within state (LLP)
                        </h2>
                        </Link>
 
                        <Link to="/AddressAmendmentWithInStateCompany">
                        <h2 className="text-sm xl:text-md hover:text-blue-500 ">
                          Address Amendment Within state (Company)
                        </h2>
                        </Link>
 
                        <Link to="/AddressAmendmentOutStateLlp">
                        <h2 className="text-sm xl:text-md hover:text-blue-500 ">
                          Address Amendment out of state (LLP)
                        </h2>
                        </Link>
 
                        <Link to="/AddressAmendmentoutStateCompany">
                        <h2 className="text-sm xl:text-md  hover:text-blue-500">
                          Address Amendment out of state (Company)
                        </h2>
                        </Link>
                     
                    </div>
 
                    <div className="mt-7">
                      <Link to="/AddDirector">
                      <h2 className="text-sm xl:text-md hover:text-blue-500">
                        Add Director (company)
                      </h2>
                      </Link>
 
                      <Link to="/AddPartner">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500">
                        Add Partner (Company)
                      </h2>
                      </Link>
 
                      <Link to="/IncreaseCapitalLlp">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500">
                        Increase Capital (LLP)
                      </h2>
                      </Link>
 
                     <Link to="/ChangeInNameLlp">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500">
                        Change In Name of LLP
                      </h2>
                      </Link>
                    </div>
 
                    <div className="mt-7">
                      <Link to="RemoveDirectorcompany">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500">
                        Remove Director (Company)
                      </h2>
                      </Link>
 
                      <Link to="/RemoveDirectorllp">
                      <h2 className="text-sm xl:text-md hover:text-blue-500">
                        Remove Partner LLP
                      </h2>
                      </Link>
 
                      <Link to="/IncreaseCapitalCompany">
                      <h2 className="text-sm xl:text-md hover:text-blue-500">
                        Increase Capital(Company)
                      </h2>
                      </Link>
                     
                      <Link to="/Changeincompany">
                      <h2 className="text-sm xl:text-md hover:text-blue-500 ">
                        Change In Name Of Company
                      </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Registrations */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <Link className="hover:text-blue-500 text-sm xl:text-md font-semibold">
              Registrations
            </Link>

            {activeDropdown === 3 && (
              <div className="fixed inset-0 z-50 min-h-fit flex justify-center mt-[45px] ">
                <div className="bg-white text-black border shadow-lg rounded-b-lg  text-sm w-full max-w-screen-lg cursor-pointer">
                  <div className="grid grid-cols-3 gap-5 p-4">
                    <div>
                      <h2 className="text-sm xl:text-md  text-blue-500 mb-3">
                        {" "}
                        Registrations
                      </h2>
                      <Link to="/ImportExportLicense">
                        <h2 className="text-sm xl:text-md  hover:text-blue-500">
                          {" "}
                          Import Export License (IEC)
                        </h2>
                      </Link>
                      <Link to="/IcegateRegistration">
                        <h2 className="text-sm xl:text-md hover:text-blue-500 ">
                          ICEGATE Registrations
                        </h2>
                      </Link>
                      <Link to="/MsmeUdhyanRegistration">
                        <h2 className="text-sm xl:text-md hover:text-blue-500 ">
                          MSME Registrations
                        </h2>
                      </Link>
                      <Link to="/SocietyRegistration">
                        <h2 className="text-sm xl:text-md hover:text-blue-500 ">
                          Society Registrations
                        </h2>
                      </Link>
                      <Link to="/PfRegistration">
                        <h2 className="text-sm xl:text-md  hover:text-blue-500">
                          PF Registrations
                        </h2>
                      </Link>
                    </div>

                    <div className="mt-7 p-4">
                      <Link to="/ProfessionalTaxRegistration">
                        <h2 className="text-sm xl:text-md hover:text-blue-500 ">
                          Professional Tax Registrations
                        </h2>
                      </Link>
                      <Link to="/GumastaLicense">
                        <h2 className="text-sm xl:text-md hover:text-blue-500 ">
                          {" "}
                          Gumasta Registrations
                        </h2>
                      </Link>
                      <Link to="/TradeMarkRegistration">
                        <h2 className="text-sm xl:text-md hover:text-blue-500">
                          Trade Mark Registrations
                        </h2>
                      </Link>
                      <Link to="/EsirRegistration">
                        <h2 className="text-sm xl:text-md hover:text-blue-500 ">
                          {" "}
                          ESIC Registrations
                        </h2>
                      </Link>
                    </div>

                    <div className="mt-7 p-4">
                      <Link to="/GstRegistration">
                        <h2 className="text-sm xl:text-md hover:text-blue-500">
                          GST Registrations
                        </h2>
                      </Link>
                      <Link to="/FoodRegistration">
                        <h2 className="text-sm xl:text-md hover:text-blue-500">
                          {" "}
                          Food License
                        </h2>
                      </Link>
                      <Link to="/TradeLicense">
                        <h2 className="text-sm xl:text-md hover:text-blue-500">
                          Trade License
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Filing & More */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <Link className="hover:text-blue-500 text-sm xl:text-md font-semibold">
              Filing & More
            </Link>

            {activeDropdown === 4 && (
              <div className="fixed inset-0 z-50 min-h-fit flex justify-center mt-[45px] ">
                <div className="bg-white text-black border shadow-lg rounded-b-lg  text-sm w-full max-w-screen-lg cursor-pointer">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="">
                      <h2 className="text-sm xl:text-md text-blue-500 mb-3">
                        Filing{" "}
                      </h2>
                      <Link to="/GstReturnFiling">
                        <h2 className="text-sm xl:text-md hover:text-blue-500 ">
                          GST REturn Filing
                        </h2>
                      </Link>
                      <Link to="/ITSfiling">
                        <h2 className="text-sm xl:text-md  hover:text-blue-500">ITR Filing</h2>
                      </Link>
                      <Link to="/TDSReturnFiling">
                        <h2 className="text-sm xl:text-md  hover:text-blue-500">
                          TDS Return Filing
                        </h2>
                      </Link>
                    </div>

                    <div className="">
                      <h2 className="text-sm xl:text-md  text-blue-500 mb-3">
                        Accounting
                      </h2>
                      <Link to="/OnlineAccounting">
                        <h2 className="text-sm xl:text-md   hover:text-blue-500">
                          {" "}
                          Online Accounting
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Drafting */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/"
              className="hover:text-blue-500 text-sm xl:text-md font-semibold"
            >
              Drafting
            </Link>

            {activeDropdown === 5 && (
              <div className="fixed inset-0 z-50 min-h-fit flex justify-center mt-[45px] ">
                <div className="bg-white text-black border shadow-lg rounded-b-lg  text-sm w-full max-w-screen-lg cursor-pointer">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="">
                      <h2 className="text-sm xl:text-md  text-blue-500 mb-3">
                        Drafting
                      </h2>
                      <Link to="/LegalDrafting">
                      <h2 className="text-sm xl:text-md hover:text-blue-500">Legal Drafting</h2>
                      </Link>

                      <Link to="/RentAgreement">
                      <h2 className="text-sm xl:text-md hover:text-blue-500 ">Rent Agreement</h2>
                      </Link>
                      
                      <Link to ="/NOC">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500">NOC</h2>
                      </Link>

                      <Link to="/Affidavit">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500">Affidavit</h2>
                      </Link>

                      <Link to="/PowerOfAttorney">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500">Power Of Attorney</h2>
                      </Link>

                    </div>

                    <div className="mt-7">
                      <Link to="/Will">
                      <h2 className="text-sm xl:text-md hover:text-blue-500"> Will </h2>
                      </Link>

                      <Link to="/ApplicationForm">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500"> Application Form</h2>
                      </Link>

                       <Link to="/NDADrafting">
                       <h2 className="text-sm xl:text-md hover:text-blue-500 "> NDA Drafting</h2>
                       </Link>

                       <Link to="/PrivacyPolicyDrafting">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500"> Privacy Policy Drafting</h2>
                      </Link>

                      <Link to="/TermAndCondition">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500">Terms & Conditions Drafting</h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Legal Issues */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
           
              className="hover:text-blue-500 text-sm xl:text-md font-semibold"
            >
              Legal Issues
            </Link>

            {activeDropdown === 6 && (
              <div className="fixed inset-0 z-50 min-h-fit flex justify-center mt-[45px] ">
                <div className="bg-white text-black border shadow-lg rounded-b-lg  text-sm w-full max-w-screen-lg cursor-pointer">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="">
                      
                      <h2 className="text-sm xl:text-md text-blue-500 mb-3">
                        Legal Reply
                      </h2>

                      <Link to="/LegalNoticeReply">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500 ">
                        Legal Notice Reply
                      </h2>
                      </Link>

                      <Link to="/LegalAdvice">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500">Legal Advice</h2>
                      </Link>
                    </div>

                    <div className="">
                      <h2 className="text-sm xl:text-md  text-blue-500 mb-3">
                        Accounting
                      </h2>

                      <Link to="/LegalNoticePreparation">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500">
                        Legal Notice Preparation
                      </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Other Services */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(7)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              
              className="hover:text-blue-500 text-sm xl:text-md font-semibold"
            >
              Other Services
            </Link>

            {activeDropdown === 7 && (
              <div className="fixed inset-0 z-50 min-h-fit flex justify-center mt-[45px] ">
                <div className="bg-white text-black border shadow-lg rounded-b-lg  text-sm w-full max-w-screen-lg cursor-pointer">
                  <div className="grid grid-cols-1  p-4">
                    <div className="">
                      <h2 className="text-sm xl:text-md  text-blue-500 mb-3">
                        Other Services
                      </h2>

                      <div>
                        <Link to="/BalanceSheetPraparationAndP">
                        <h2 className="text-sm xl:text-md  hover:text-blue-500 ">
                          Balance Sheet Preparation & P&L
                        </h2>
                        </Link>

                        <Link to="/ProjectReportPreparation ">
                        <h2 className="text-sm xl:text-md hover:text-blue-500 ">
                          Project Report Preparation
                        </h2>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Utilities */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(8)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              
              className="hover:text-blue-500 text-sm xl:text-md font-semibold"
            >
              Utilities
            </Link>

            {activeDropdown === 8 && (
              <div className="fixed inset-0 z-50 min-h-fit flex justify-center mt-[45px] ">
                <div className="bg-white text-black border shadow-lg rounded-b-lg  text-sm w-full max-w-screen-lg cursor-pointer">
                  <div className="grid grid-cols-3 gap-5 p-4">
                    <div>
                      <h2 className="text-sm xl:text-md  text-blue-500 mb-3">
                        {" "}
                        Utilites
                      </h2>

                      <div className="">
                        <Link to="/GSTCalculator">
                        <h2 className="text-sm xl:text-md hover:text-blue-500"> GST Calculator</h2>
                        </Link>
                        <Link to="/SIPCalculator">
                        <h2 className="text-sm xl:text-md hover:text-blue-500 ">SIP Calculator</h2>
                        </Link>
                        <Link to="/EMICalculator">
                        <h2 className="text-sm xl:text-md hover:text-blue-500 ">EMI Calculator</h2>
                        </Link>
                        <Link to="/FDCalculator">
                        <h2 className="text-sm xl:text-md hover:text-blue-500 ">FD Calculator</h2>
                        </Link>
                      </div>
                    </div>

                    <div className="mt-7">
                    <Link  to="/UCalculator">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500">80U Calculator</h2>
                      </Link>
                      <Link to="/HRACalculator">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500"> HRA Calculator</h2>
                      </Link>
                      <Link to="/SimpleInterestCalculator">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500">
                        Simple Interest Calculator
                      </h2>
                      </Link>
                      <Link to="/CapitalGainCalculator">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500">
                        {" "}
                        Capital Gain Calculator
                      </h2>
                      </Link>
                    </div>

                    <div className="mt-7">
                    <Link to="/TDSCalculator">
                      <h2 className="text-sm xl:text-md hover:text-blue-500 ">TDS Calculator</h2>
                      </Link>
                      <Link to="/PPfCalculator">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500"> PPF Calculator</h2>
                      </Link>
                      <Link to="/GratuityCalculator">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500">
                        Gratuity Calculator
                      </h2>
                      </Link>
                      <Link to="/RDCalculator">
                      <h2 className="text-sm xl:text-md  hover:text-blue-500">RD Calculator</h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
