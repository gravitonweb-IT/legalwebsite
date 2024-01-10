import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "../UserDashboard";
import HomeLoanPopup from "./HomeLoanPopUp";
import { servieUrl } from "../../env/env";
import BusinessLoanPupUp from "./BusinessLoanPupUp";
import { useNavigate } from "react-router-dom";
const BusinessLoan = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    cityState: "",
    annualProfit: "",
    loanAmount: "",
  });

  // State for form validation errors
  const [errors, setErrors] = useState({
    fullName: "",
    dateOfBirth: "",
    cityState: "",
    annualProfit: "",
    loanAmount: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear validation errors when the input changes
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    let valid = true;
    const newErrors = { ...errors };

    // Example validation: Check if the fields are not empty
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
        valid = false;
      }
    });

    // Update errors state
    setErrors(newErrors);

    // If validation passes, you can submit the form or perform further actions
    if (valid) {



      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "fullName": formData.fullName,
  "dateOfBirth": formData.dateOfBirth,
  "cityState": formData.cityState,
  "annualProfit": formData.annualProfit,
  "loanAmount": formData.loanAmount
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(servieUrl.url + "api/business-loans/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

      toast.success("Form submitted successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // Time in milliseconds the toast should be displayed
      });
      // Add your logic here for form submission
      console.log("Form submitted:", formData);
      setFormData({
        fullName: "",
        dateOfBirth: "",
        cityState: "",
        annualProfit: "",
        loanAmount: "",
      });
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
              Business Loan
            </h1>
            <p className="text-center text-base font-medium mx-2">
             Apply
              now and propel your business towards success.
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

              {isPopupVisible && <BusinessLoanPupUp onClose={handleClosePopup} />}
            </div>
          </div>
          <div className="max-w-[300px] md:max-w-md   mx-auto mt-6 ">
            <div>
              <h1 className="text-center text-lg font-semibold ">
                {" "}
                Fill Your Details
              </h1>
              <div className="border-t-2 border-[#8A4117] mx-10 my-2 "></div>
            </div>
            <div className="container mx-auto border max-w-md mt-8">
              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-12 mb-20"
              >
                {/* Full Name */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    className={`appearance-none border ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                  <p className="text-red-500 text-xs italic">
                    {errors.fullName}
                  </p>
                </div>

                {/* Date of Birth */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="dateOfBirth"
                  >
                    Date of Birth
                  </label>
                  <input
                    className={`appearance-none border ${
                      errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                    } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                    id="dateOfBirth"
                    type="date"
                    placeholder="YYYY-MM-DD"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                  />
                  <p className="text-red-500 text-xs italic">
                    {errors.dateOfBirth}
                  </p>
                </div>

                {/* City/State */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="cityState"
                  >
                    City/State
                  </label>
                  <input
                    className={`appearance-none border ${
                      errors.cityState ? "border-red-500" : "border-gray-300"
                    } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                    id="cityState"
                    type="text"
                    placeholder="City, State"
                    name="cityState"
                    value={formData.cityState}
                    onChange={handleInputChange}
                  />
                  <p className="text-red-500 text-xs italic">
                    {errors.cityState}
                  </p>
                </div>

                {/* Average Annual Profit */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="annualProfit"
                  >
                    Average Annual Profit
                  </label>
                  <input
                    className={`appearance-none border ${
                      errors.annualProfit ? "border-red-500" : "border-gray-300"
                    } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                    id="annualProfit"
                    type="text"
                    placeholder="Enter annual profit"
                    name="annualProfit"
                    value={formData.annualProfit}
                    onChange={handleInputChange}
                  />
                  <p className="text-red-500 text-xs italic">
                    {errors.annualProfit}
                  </p>
                </div>

                {/* Enter Loan Amount */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="loanAmount"
                  >
                    Enter Loan Amount
                  </label>
                  <input
                    className={`appearance-none border ${
                      errors.loanAmount ? "border-red-500" : "border-gray-300"
                    } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                    id="loanAmount"
                    type="text"
                    placeholder="Enter loan amount"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                  />
                  <p className="text-red-500 text-xs italic">
                    {errors.loanAmount}
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </UserDashboard>
    </>
  );
};

export default BusinessLoan;
