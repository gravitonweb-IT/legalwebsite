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
                  <Link
                    className="hover:text-blue-500 "
                    onClick={() => setIsDrawerOpen(true)}
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
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Section 8 Company Registration
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          LLP Company Registration
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
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
                    onClick={() => setIsDrawerOpen(true)}
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
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Annual Compliance LLP
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Annual Compliance Pvt.Ltd.
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
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
                    onClick={() => setIsDrawerOpen(true)}
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
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Dissolution of deeds
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Address Amendment Within state (LLP)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Address Amendment Within state (Company)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Address Amendment out of state (LLP)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Address Amendment out of state (Company)
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Add Director (company)
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Add Partner (Company)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          {" "}
                          Increase Capital (LLP)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Change In Name of LLP
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Remove Director (Company)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Remove Partner (LLP)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Increase Capital (Company)
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/"
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
                    onClick={() => setIsDrawerOpen(true)}
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
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Import Export License (IEC)
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          ICEGATE Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          MSME Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Society Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          PF Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Professional Tax Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Trade Mark Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Gumasta License
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          ESIC Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          GST Registration
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Food Licence
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/"
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
                    onClick={() => setIsDrawerOpen(true)}
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
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          GST Return Filing
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          ITR Filing
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/"
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
                    onClick={() => setIsDrawerOpen(true)}
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
                          to="/"
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
                    onClick={() => setIsDrawerOpen(true)}
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
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Legal Drafting
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Rent Agreement
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          NOC
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Affidavit
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Power of Attorney
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Will
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Application Form
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          NDA Drafting
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Privacy Policy Drafting
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
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
                    onClick={() => setIsDrawerOpen(true)}
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
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Legal Notice Reply
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
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
                    onClick={() => setIsDrawerOpen(true)}
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
                          to="/"
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
                    onClick={() => setIsDrawerOpen(true)}
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
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Balance Sheet Preparation & P&L
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
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
                    onClick={() => setIsDrawerOpen(true)}
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
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          GST Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          SIP Calculator
                        </Link>
                      </p>

                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          EMI Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          FD Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          80U Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          HRA Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Simple Interest Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Capital Gain Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          TDS Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          PPF Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="hover:text-blue-500"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Gratuity Calculator
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/"
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
            <Link to="/" className="hover:text-blue-500 text-sm xl:text-md">
              Start Business
            </Link>

            {activeDropdown === 1 && (
              <div className="fixed inset-0 z-50  min-h-fit flex justify-center mt-[50px] ">
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
                        </Link >
                        <Link to= "/PvtLtdCompanyRegisteration">
                        <h2 className="text-sm xl:text-md hover:text-blue-500">
                          Pvt. Ltd. Company Registration
                        </h2>
                        </Link>
                        <h2 className="text-sm xl:text-md ">
                          Section 8 Company Registration
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          LLP Company Registration
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          OPC Company REgistration
                        </h2>
                    
                    </div>
                    
                    <div className="">
                      <h2 className="text-sm xl:text-md  text-blue-500 mb-3">
                        Compliance
                      </h2>
                      
                        <h2 className="text-sm xl:text-md ">
                          {" "}
                          Annual Compliance LLP{" "}
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          Annual Compliance Pvt.Ltd.
                        </h2>
                        <h2 className="text-sm xl:text-md ">CMA Report</h2>
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
            <Link to="/" className="hover:text-blue-500  text-sm xl:text-md">
              Change In Business
            </Link>

            {activeDropdown === 2 && (
              <div className="fixed inset-0 z-50 min-h-fit flex justify-center mt-[50px] ">
                <div className="bg-white text-black border shadow-lg rounded-b-lg text-sm w-full max-w-screen-lg cursor-pointer">
                  <div className="grid grid-cols-3 gap-5 p-4">
                    <div className="">
                      <h2 className="text-sm xl:text-md text-blue-500 mb-3">
                        {" "}
                        Change In Business
                      </h2>
                        <h2 className="text-sm xl:text-md ">
                          {" "}
                          Dissolution of deeds
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          Address Amendment Within state (LLP)
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          Address Amendment Within state (Company)
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          Address Amendment out of state (LLP)
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          Address Amendment out of state (Company)
                        </h2>
                      
                    </div>

                    <div className="mt-7">
                      <h2 className="text-sm xl:text-md ">
                        Add Director (company)
                      </h2>
                      <h2 className="text-sm xl:text-md ">
                        {" "}
                        Add Partner (Company)
                      </h2>
                      <h2 className="text-sm xl:text-md ">
                        Increase Capital (LLP)
                      </h2>
                      <h2 className="text-sm xl:text-md ">
                        {" "}
                        Change In Name of LLP
                      </h2>
                    </div>

                    <div className="mt-7">
                      <h2 className="text-sm xl:text-md ">
                        Remove Director (Company)
                      </h2>
                      <h2 className="text-sm xl:text-md ">
                        {" "}
                        Remove Partner LLP
                      </h2>
                      <h2 className="text-sm xl:text-md ">
                        Increase Capital (LLP)
                      </h2>
                      <h2 className="text-sm xl:text-md ">
                        {" "}
                        Increase Capital(Company)
                      </h2>
                      <h2 className="text-sm xl:text-md ">
                        {" "}
                        Change In Name Of Company
                      </h2>
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
            <Link to="/" className="hover:text-blue-500  text-sm xl:text-md">
              Registrations
            </Link>

            {activeDropdown === 3 && (
              <div className="fixed inset-0 z-50 min-h-fit flex justify-center mt-[50px] ">
                <div className="bg-white text-black border shadow-lg rounded-b-lg  text-sm w-full max-w-screen-lg cursor-pointer">
                  <div className="grid grid-cols-3 gap-5 p-4">
                    <div>
                      <h2 className="text-sm xl:text-md  text-blue-500 mb-3">
                        {" "}
                        Registrations
                      </h2>

                        <h2 className="text-sm xl:text-md ">
                          {" "}
                          Import Export License (IEC)
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          ICEGATE Registrations
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          MSME Registrations
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          Society Registrations
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          PF Registrations
                        </h2>
                     
                    </div>

                    <div className="mt-7 p-4">
                      <h2 className="text-sm xl:text-md ">
                        Professional Tax Registrations
                      </h2>
                      <h2 className="text-sm xl:text-md ">
                        {" "}
                        Gumasta Registrations
                      </h2>
                      <h2 className="text-sm xl:text-md ">
                        Trade Mark Registrations
                      </h2>
                      <h2 className="text-sm xl:text-md ">
                        {" "}
                        ESIC Registrations
                      </h2>
                    </div>

                    <div className="mt-7 p-4">
                      <h2 className="text-sm xl:text-md ">
                        GST Registrations
                      </h2>
                      <h2 className="text-sm xl:text-md "> Food License</h2>
                      <h2 className="text-sm xl:text-md ">Trade License</h2>
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
            <Link to="/" className="hover:text-blue-500  text-sm xl:text-md">
              Filing & More
            </Link>

            {activeDropdown === 4 && (
              <div className="fixed inset-0 z-50 min-h-fit flex justify-center mt-[50px] ">
                <div className="bg-white text-black border shadow-lg rounded-b-lg  text-sm w-full max-w-screen-lg cursor-pointer">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="">
                      <h2 className="text-sm xl:text-md text-blue-500 mb-3">
                        Filing{" "}
                      </h2>
                        <h2 className="text-sm xl:text-md  ">
                          GST REturn Filing
                        </h2>
                        <h2 className="text-sm xl:text-md ">ITR Filing</h2>
                        <h2 className="text-sm xl:text-md ">
                          TDS Return Filing
                        </h2>
                    
                    </div>

                    <div className="">
                      <h2 className="text-sm xl:text-md  text-blue-500 mb-3">
                        Accounting
                      </h2>
                        <h2 className="text-sm xl:text-md ">
                          {" "}
                          Online Accounting
                        </h2>
                      
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
            <Link to="/" className="hover:text-blue-500  text-sm xl:text-md">
              Drafting
            </Link>

            {activeDropdown === 5 && (
              <div className="fixed inset-0 z-50 min-h-fit flex justify-center mt-[50px] ">
                <div className="bg-white text-black border shadow-lg rounded-b-lg  text-sm w-full max-w-screen-lg cursor-pointer">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="">
                      <h2 className="text-sm xl:text-md  text-blue-500 mb-3">
                        Drafting
                      </h2>
                        <h2 className="text-sm xl:text-md  ">
                          Legal Drafting
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          Rent Agreement
                        </h2>
                        <h2 className="text-sm xl:text-md ">NOC</h2>
                        <h2 className="text-sm xl:text-md ">Affidavit</h2>
                        <h2 className="text-sm xl:text-md ">
                          Power Of Attorney
                        </h2>
                      
                    </div>

                    <div className="">
                    
                        <h2 className="text-sm xl:text-md mb-3 text-blue-500"> Will</h2>
                        <h2 className="text-sm xl:text-md ">
                          {" "}
                          Application Form
                        </h2>
                        <h2 className="text-sm xl:text-md "> NDA Drafting</h2>
                        <h2 className="text-sm xl:text-md ">
                          {" "}
                          Privacy Policy Drafting
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          {" "}
                          Terms & Conditions Drafting
                        </h2>
                      
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
            <Link to="/" className="hover:text-blue-500  text-sm xl:text-md">
              Legal Issues
            </Link>

            {activeDropdown === 6 && (
              <div className="fixed inset-0 z-50 min-h-fit flex justify-center mt-[50px] ">
                <div className="bg-white text-black border shadow-lg rounded-b-lg  text-sm w-full max-w-screen-lg cursor-pointer">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="">
                      <h2 className="text-sm xl:text-md text-blue-500 mb-3">
                        Legal Reply
                      </h2>

                        <h2 className="text-sm xl:text-md  ">
                          Legal Notice Reply
                        </h2>
                        <h2 className="text-sm xl:text-md ">Legal Advice</h2>
                      
                    </div>

                    <div className="">
                      <h2 className="text-sm xl:text-md  text-blue-500 mb-3">
                        Accounting
                      </h2>
                        <h2 className="text-sm xl:text-md ">
                          {" "}
                          Legal Notice Preparation
                        </h2>
                      
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
            <Link to="/" className="hover:text-blue-500  text-sm xl:text-md">
              Other Services
            </Link>

            {activeDropdown === 7 && (
              <div className="fixed inset-0 z-50 min-h-fit flex justify-center mt-[50px] ">
                <div className="bg-white text-black border shadow-lg rounded-b-lg  text-sm w-full max-w-screen-lg cursor-pointer">
                  <div className="grid grid-cols-1  p-4">
                    <div className="">
                      <h2 className="text-sm xl:text-md  text-blue-500 mb-3">
                        Other Services
                      </h2>

                      <div>
                        <h2 className="text-sm xl:text-md  ">
                          Balance Sheet Preparation & P&L
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          Project Report Preparation
                        </h2>
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
            <Link to="/" className="hover:text-blue-500  text-sm xl:text-md">
              Utilities
            </Link>

            {activeDropdown === 8 && (
              <div className="fixed inset-0 z-50 min-h-fit flex justify-center mt-[50px] ">
                <div className="bg-white text-black border shadow-lg rounded-b-lg  text-sm w-full max-w-screen-lg cursor-pointer">
                  <div className="grid grid-cols-3 gap-5 p-4">
                    <div>
                      <h2 className="text-sm xl:text-md  text-blue-500 mb-3">
                        {" "}
                        Utilites
                      </h2>

                      <div className="">
                        <h2 className="text-sm xl:text-md ">
                          {" "}
                          GST Calculator
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          SIP Calculator
                        </h2>
                        <h2 className="text-sm xl:text-md ">
                          EMI Calculator
                        </h2>
                        <h2 className="text-sm xl:text-md ">FD Calculator</h2>
                      </div>
                    </div>

                    <div className="mt-7">
                      <h2 className="text-sm xl:text-md ">80U Calculator</h2>
                      <h2 className="text-sm xl:text-md "> HRA Calculator</h2>
                      <h2 className="text-sm xl:text-md ">
                        Simple Interest Calculator
                      </h2>
                      <h2 className="text-sm xl:text-md ">
                        {" "}
                        Capital Gain Calculator
                      </h2>
                    </div>

                    <div className="mt-7">
                      <h2 className="text-sm xl:text-md ">TDS Calculator</h2>
                      <h2 className="text-sm xl:text-md "> PPF Calculator</h2>
                      <h2 className="text-sm xl:text-md ">
                        Gratuity Calculator
                      </h2>
                      <h2 className="text-sm xl:text-md ">RD Calculator</h2>
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
