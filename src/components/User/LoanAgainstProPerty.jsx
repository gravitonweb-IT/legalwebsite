import React, { useState } from 'react';
import UserDashboard from '../UserDashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoanAgainstProPerty = () => {
  const [formData, setFormData] = useState({
    occupation: '',
    fullName: '',
    cityDistrict: '',
    dateOfBirth: '',
    netMonthlySalary: '',
    propertyType: '',
    propertyValue: '',
    loanAmount: '',
  });

  const [errors, setErrors] = useState({
    occupation: '',
    fullName: '',
    cityDistrict: '',
    dateOfBirth: '',
    netMonthlySalary: '',
    propertyType: '',
    propertyValue: '',
    loanAmount: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate Occupation
    if (!formData.occupation.trim()) {
      valid = false;
      newErrors.occupation = 'Occupation is required';
    } else {
      newErrors.occupation = '';
    }

    // Validate Full Name
    if (!formData.fullName.trim()) {
      valid = false;
      newErrors.fullName = 'Full Name is required';
    } else {
      newErrors.fullName = '';
    }

    // Validate City/District
    if (!formData.cityDistrict.trim()) {
      valid = false;
      newErrors.cityDistrict = 'City/District is required';
    } else {
      newErrors.cityDistrict = '';
    }

    // Validate Date of Birth
    if (!formData.dateOfBirth.trim()) {
      valid = false;
      newErrors.dateOfBirth = 'Date of Birth is required';
    } else {
      newErrors.dateOfBirth = '';
    }

    // Validate Net Monthly Salary
    if (!formData.netMonthlySalary.trim() || isNaN(formData.netMonthlySalary)) {
      valid = false;
      newErrors.netMonthlySalary = 'Please enter a valid Net Monthly Salary';
    } else {
      newErrors.netMonthlySalary = '';
    }

    // Validate Property Type
    if (!formData.propertyType.trim()) {
      valid = false;
      newErrors.propertyType = 'Property Type is required';
    } else {
      newErrors.propertyType = '';
    }

    // Validate Property Value
    if (!formData.propertyValue.trim() || isNaN(formData.propertyValue)) {
      valid = false;
      newErrors.propertyValue = 'Please enter a valid Property Value';
    } else {
      newErrors.propertyValue = '';
    }

    // Validate Loan Amount
    if (!formData.loanAmount.trim() || isNaN(formData.loanAmount)) {
      valid = false;
      newErrors.loanAmount = 'Please enter a valid Loan Amount';
    } else {
      newErrors.loanAmount = '';
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
  "occupation": formData.occupation,
  "full_name": formData.fullName,
  "city_district": formData.cityDistrict,
  "date_of_birth": formData.dateOfBirth,
  "net_monthly_salary": formData.netMonthlySalary,
  "property_type": formData.propertyType,
  "property_value": formData.propertyValue,
  "loan_amount": formData.loanAmount
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://legalwebsite.pythonanywhere.com/api/loan-against-property-applications/", requestOptions)
  .then(response => response.text())
  .then(result => 
    {
    console.log(result)
    toast.success("Form submitted successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    })
  .catch(error => console.log('error', error));
    } else {
      console.log('Form validation failed');
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
       Loan Against Property Loan
        </h1>
        <p className="text-center text-base font-medium mx-2">
        Loan Against Property provides financial support by using a property as collateral, offering low-interest rates and extended repayment terms for various financial needs
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
      <form onSubmit={handleSubmit}>
        {/* Occupation */}
        <div className="mb-4">
          <label htmlFor="occupation" className="block text-sm font-medium text-gray-600">
            Select Occupation
          </label>
          <select
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.occupation ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Occupation</option>
            <option value="Salaried">Salaried</option>
            <option value="Professional">Professional</option>
            <option value="SelfEmployed">Self Employed</option>
          </select>
          {errors.occupation && (
            <p className="text-red-500 text-xs mt-1">{errors.occupation}</p>
          )}
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>

        {/* City/District */}
        <div className="mb-4">
          <label htmlFor="cityDistrict" className="block text-sm font-medium text-gray-600">
            City/District
          </label>
          <input
            type="text"
            id="cityDistrict"
            name="cityDistrict"
            value={formData.cityDistrict}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.cityDistrict ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.cityDistrict && (
            <p className="text-red-500 text-xs mt-1">{errors.cityDistrict}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-600">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>
          )}
        </div>

        {/* Net Monthly Salary */}
        <div className="mb-4">
          <label htmlFor="netMonthlySalary" className="block text-sm font-medium text-gray-600">
            Enter Net Monthly Salary
          </label>
          <input
            type="text"
            id="netMonthlySalary"
            name="netMonthlySalary"
            value={formData.netMonthlySalary}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.netMonthlySalary ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.netMonthlySalary && (
            <p className="text-red-500 text-xs mt-1">{errors.netMonthlySalary}</p>
          )}
        </div>

        {/* Property Type */}
        <div className="mb-4">
          <label htmlFor="propertyType" className="block text-sm font-medium text-gray-600">
            Select Type of Property
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.propertyType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Type of Property</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
          {errors.propertyType && (
            <p className="text-red-500 text-xs mt-1">{errors.propertyType}</p>
          )}
        </div>

        {/* Property Value */}
        <div className="mb-4">
          <label htmlFor="propertyValue" className="block text-sm font-medium text-gray-600">
            Enter Property Value
          </label>
          <input
            type="text"
            id="propertyValue"
            name="propertyValue"
            value={formData.propertyValue}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.propertyValue ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.propertyValue && (
            <p className="text-red-500 text-xs mt-1">{errors.propertyValue}</p>
          )}
        </div>

        {/* Loan Amount */}
        <div className="mb-4">
          <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-600">
            Enter Loan Amount
          </label>
          <input
            type="text"
            id="loanAmount"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.loanAmount ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.loanAmount && <p className="text-red-500 text-xs mt-1">{errors.loanAmount}</p>}
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




export default LoanAgainstProPerty