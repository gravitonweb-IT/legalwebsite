import React, { useState } from "react";
import UserDashboard from "../UserDashboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CarLoan = () => {
  const [formData, setFormData] = useState({
    carType: "",
    fullName: "",
    cityDistrict: "",
    netMonthlySalary: "",
    panNo: "",
    loanAmount: "",
  });

  const [errors, setErrors] = useState({
    carType: "",
    fullName: "",
    cityDistrict: "",
    netMonthlySalary: "",
    panNo: "",
    loanAmount: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate Car Type
    if (!formData.carType.trim()) {
      valid = false;
      newErrors.carType = "Car Type is required";
    } else {
      newErrors.carType = "";
    }

    // Validate Full Name
    if (!formData.fullName.trim()) {
      valid = false;
      newErrors.fullName = "Full Name is required";
    } else {
      newErrors.fullName = "";
    }

    // Validate City/District
    if (!formData.cityDistrict.trim()) {
      valid = false;
      newErrors.cityDistrict = "City/District is required";
    } else {
      newErrors.cityDistrict = "";
    }

    // Validate Net Monthly Salary
    if (!formData.netMonthlySalary.trim() || isNaN(formData.netMonthlySalary)) {
      valid = false;
      newErrors.netMonthlySalary = "Please enter a valid Net Monthly Salary";
    } else {
      newErrors.netMonthlySalary = "";
    }

    // Validate PAN Number
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    if (!formData.panNo.trim() || !panRegex.test(formData.panNo)) {
      valid = false;
      newErrors.panNo = "Please enter a valid PAN Number";
    } else {
      newErrors.panNo = "";
    }

    // Validate Loan Amount
    if (!formData.loanAmount.trim() || isNaN(formData.loanAmount)) {
      valid = false;
      newErrors.loanAmount = "Please enter a valid Loan Amount";
    } else {
      newErrors.loanAmount = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "car_type": formData.carType,
  "full_name": formData.fullName,
  "city_district": formData.cityDistrict,
  "net_monthly_salary": formData.netMonthlySalary,
  "pan_no": formData.panNo,
  "loan_amount": formData.loanAmount
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://legalwebsite.pythonanywhere.com/api/car-loan-applications/", requestOptions)
  .then(response => response.text())
  .then(result =>{
     console.log(result)
     toast.success("Form submitted successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  })
  .catch(error => console.log('error', error));
    } else {
      console.log("Form validation failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <UserDashboard>
       <ToastContainer />
    <div className="bg-white shadow-2xl shadow-stone-400 m-5 pb-20  my-20">
      <div className="flex flex-col items-center justify-center max-w-lg mx-auto">
        <h1 className="text-center text-blue text-2xl font-bold">
          Car Loan
        </h1>
        <p className="text-center text-base font-medium mx-2">
        Car loans offer financing for vehicle purchases. Interest rates, credit scores, and loan terms influence repayment. Compare lenders for the best car loan options
        </p>
        <h1 className="text-center text-blue bg-yellow-300 p-2 mt-2 rounded-md font-bold mb-3">
          @@ No Commission
        </h1>
        <div className="flex justify-center">
          <a href="https://legal257.in/Termsconditions">
            <button className="text-center text-blue hover:bg-black hover:text-white bg-red-500 p-2 rounded-md">
              Know More
            </button>
          </a>
        </div>
      </div>
      <div className="max-w-[300px] md:max-w-md   mx-auto my-6 ">
        <h2 className="text-lg text-center font-bold mb-4">Fill Your Details</h2>
        <form onSubmit={handleSubmit} className="">
          {/* Car Type */}
          <div className="mb-4">
            <label
              htmlFor="carType"
              className="block text-sm font-medium text-gray-600"
            >
              Select Car Type
            </label>
            <select
              id="carType"
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              className={`mt-1 p-2 w-full rounded-md border ${
                errors.carType ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Car Type</option>
              <option value="NewCar">New Car</option>
              <option value="UsedCar">Used Car</option>
              <option value="CarRefinance">Car Refinance</option>
            </select>
            {errors.carType && (
              <p className="text-red-500 text-xs mt-1">{errors.carType}</p>
            )}
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`mt-1 p-2 w-full rounded-md border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* City/District */}
          <div className="mb-4">
            <label
              htmlFor="cityDistrict"
              className="block text-sm font-medium text-gray-600"
            >
              City/District
            </label>
            <input
              type="text"
              id="cityDistrict"
              name="cityDistrict"
              value={formData.cityDistrict}
              onChange={handleChange}
              className={`mt-1 p-2 w-full rounded-md border ${
                errors.cityDistrict ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.cityDistrict && (
              <p className="text-red-500 text-xs mt-1">{errors.cityDistrict}</p>
            )}
          </div>

          {/* Net Monthly Salary */}
          <div className="mb-4">
            <label
              htmlFor="netMonthlySalary"
              className="block text-sm font-medium text-gray-600"
            >
              Enter Net Monthly Salary
            </label>
            <input
              type="text"
              id="netMonthlySalary"
              name="netMonthlySalary"
              value={formData.netMonthlySalary}
              onChange={handleChange}
              className={`mt-1 p-2 w-full rounded-md border ${
                errors.netMonthlySalary ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.netMonthlySalary && (
              <p className="text-red-500 text-xs mt-1">
                {errors.netMonthlySalary}
              </p>
            )}
          </div>

          {/* PAN Number */}
          <div className="mb-4">
            <label
              htmlFor="panNo"
              className="block text-sm font-medium text-gray-600"
            >
              Enter PAN Number
            </label>
            <input
              type="text"
              id="panNo"
              name="panNo"
              value={formData.panNo}
              onChange={handleChange}
              className={`mt-1 p-2 w-full rounded-md border ${
                errors.panNo ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.panNo && (
              <p className="text-red-500 text-xs mt-1">{errors.panNo}</p>
            )}
          </div>

          {/* Loan Amount */}
          <div className="mb-4">
            <label
              htmlFor="loanAmount"
              className="block text-sm font-medium text-gray-600"
            >
              Enter Loan Amount
            </label>
            <input
              type="text"
              id="loanAmount"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              className={`mt-1 p-2 w-full rounded-md border ${
                errors.loanAmount ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.loanAmount && (
              <p className="text-red-500 text-xs mt-1">{errors.loanAmount}</p>
            )}
          </div>

          <div className="my-6 text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-8 text-center text-gray-600">
        <p className="text-lg font-semibold mb-2">Still Confused, Need Expert Help?</p>
        <p className="text-lg">
          Get Consultation For Free
          <br />
          Call Us: +91-9435266783 / +91-8133997722
        </p>
      </div>
      </div>
    </div>
    </UserDashboard>
  );
};

export default CarLoan;
