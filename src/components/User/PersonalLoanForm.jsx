import React, { useEffect, useState } from "react";
import HomeLoanPopup from "./HomeLoanPopUp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { servieUrl } from "../../env/env";
import PeronalLoanPopup from "./PeronalLoanPopup";
import UserDashboard from "../UserDashboard";
import { useNavigate } from "react-router-dom";
const PersonalLoanForm = () => {
  // State for form fields
  const [employmentType, setEmploymentType] = useState("");
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [cityState, setCityState] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [salaryMode, setSalaryMode] = useState("");
  const [loanAmount, setLoanAmount] = useState("");

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Simple validation example (you may need to customize based on your requirements)
    const newErrors = {};
  
    if (!employmentType) {
      newErrors.employmentType = "Please select employment type";
    }
  
    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
  
    if (!dateOfBirth) {
      newErrors.dateOfBirth = "Date of Birth is required";
    }
  
    if (!cityState.trim()) {
      newErrors.cityState = "City/State is required";
    }
  
    if (!monthlyIncome.trim()) {
      newErrors.monthlyIncome = "Monthly Income is required";
    }
  
    if (!salaryMode) {
      newErrors.salaryMode = "Please select salary mode";
    }
  
    if (!loanAmount.trim()) {
      newErrors.loanAmount = "Loan Amount is required";
    }
  
    // Set errors if any, or proceed with form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        "employment_type": employmentType,
        "full_name": fullName,
        "date_of_birth": dateOfBirth,
        "city_state": cityState,
        "monthly_income": monthlyIncome,
        "salary_mode": salaryMode,
        "loan_amount": loanAmount,
      });
  
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      fetch(servieUrl.url + "api/personalLoans/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
  
          // Clear form fields
          setEmploymentType("");
          setFullName("");
          setDateOfBirth("");
          setCityState("");
          setMonthlyIncome("");
          setSalaryMode("");
          setLoanAmount("");
  
          // Clear errors
          setErrors({});
  
          // Show success toast
          toast.success("Form submitted successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        })
        .catch((error) => console.log("error", error));
    }
  };
  
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleKnowMoreClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
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
     <ToastContainer />
      <div className="bg-white shadow-2xl shadow-stone-400 m-5 mt-20">
        <div className="flex flex-col items-center justify-center max-w-lg mx-auto">
          <h1 className="text-center text-blue text-2xl font-bold">
            Personal Loan
          </h1>
          <p className="text-center text-base font-medium mx-2">
            Securing a personal loan empowers individuals to meet diverse
            financial needs. Whether it's home improvements, education expenses,
            or debt consolidation, personal loans offer flexibility and tailored
            solutions.
          </p>
          <h1 className="text-center text-blue bg-yellow-300 p-2 mt-2 rounded-md font-bold mb-3">
            @@ No Commission
          </h1>
          <div>
            <button
              onClick={handleKnowMoreClick}
              className="text-center text-blue hover:bg-black hover:text-white bg-red-500 p-2 rounded-md"
            >
              Know More
            </button>

            {isPopupVisible && <PeronalLoanPopup onClose={handleClosePopup} />}
          </div>
        </div>
        <div className="max-w-[300px] md:max-w-md mb-28  mx-auto mt-6 ">
          <div>
            <h1 className="text-center text-lg font-semibold ">
              {" "}
              Fill Your Details
            </h1>
            <div className="border-t-2 border-[#8A4117] mx-10 my-2 "></div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 mt-5">
            {/* Employment Type */}
            <div className="mb-4">
              <label
                htmlFor="employmentType"
                className="block text-sm font-medium text-gray-700"
              >
                Employment Type
              </label>
              <select
                id="employmentType"
                name="employmentType"
                value={employmentType}
                onChange={(e) => setEmploymentType(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="">Select...</option>
                <option value="salaried">Salaried</option>
                <option value="non-salary">Non-Salary</option>
              </select>
              {errors.employmentType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.employmentType}
                </p>
              )}
            </div>

            {/* Full Name */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dateOfBirth}
                </p>
              )}
            </div>

            {/* City/State */}
            <div className="mb-4">
              <label
                htmlFor="cityState"
                className="block text-sm font-medium text-gray-700"
              >
                City/State
              </label>
              <input
                type="text"
                id="cityState"
                name="cityState"
                value={cityState}
                onChange={(e) => setCityState(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              {errors.cityState && (
                <p className="text-red-500 text-sm mt-1">{errors.cityState}</p>
              )}
            </div>

            {/* Monthly Income */}
            <div className="mb-4">
              <label
                htmlFor="monthlyIncome"
                className="block text-sm font-medium text-gray-700"
              >
                Monthly Income
              </label>
              <input
                type="text"
                id="monthlyIncome"
                name="monthlyIncome"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              {errors.monthlyIncome && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.monthlyIncome}
                </p>
              )}
            </div>

            {/* Salary Mode */}
            <div className="mb-4">
              <label
                htmlFor="salaryMode"
                className="block text-sm font-medium text-gray-700"
              >
                Salary Mode
              </label>
              <select
                id="salaryMode"
                name="salaryMode"
                value={salaryMode}
                onChange={(e) => setSalaryMode(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="">Select...</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
              {errors.salaryMode && (
                <p className="text-red-500 text-sm mt-1">{errors.salaryMode}</p>
              )}
            </div>

            {/* Loan Amount */}
            <div className="mb-4">
              <label
                htmlFor="loanAmount"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Loan Amount
              </label>
              <input
                type="text"
                id="loanAmount"
                name="loanAmount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              {errors.loanAmount && (
                <p className="text-red-500 text-sm mt-1">{errors.loanAmount}</p>
              )}
            </div>

            {/* Submit button */}
            <div className="mt-4 mb-20 text-center">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 my-3 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </UserDashboard>
    </>
  );
};

export default PersonalLoanForm;
