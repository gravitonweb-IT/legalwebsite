import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreditCard = (props) => {
    const {loanType} =props;
  const [formData, setFormData] = useState({
    occupationType: '',
    fullName: '',
    fatherName: '',
    motherName: '',
    aadharNumber: '',
    companyName: '',
    companyAddress: '',
    pinCode: '',
    dob: '',
    applicantAddress: '',
    cityDistrict: '',
    netMonthlyIncome: '',
    panNo: '',
    hasCreditCard: '',
    // loanType: '',
  });

  const [errors, setErrors] = useState({
    occupationType: '',
    fullName: '',
    fatherName: '',
    motherName: '',
    aadharNumber: '',
    companyName: '',
    companyAddress: '',
    pinCode: '',
    dob: '',
    applicantAddress: '',
    cityDistrict: '',
    netMonthlyIncome: '',
    panNo: '',
    hasCreditCard: '',
    // loanType: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate Occupation Type
    if (!formData.occupationType.trim()) {
      valid = false;
      newErrors.occupationType = 'Occupation Type is required';
    } else {
      newErrors.occupationType = '';
    }

    // Validate Full Name
    if (!formData.fullName.trim()) {
      valid = false;
      newErrors.fullName = 'Full Name is required';
    } else {
      newErrors.fullName = '';
    }

    // Validate Father's Name
    if (!formData.fatherName.trim()) {
      valid = false;
      newErrors.fatherName = "Father's Name is required";
    } else {
      newErrors.fatherName = '';
    }

    // Validate Mother's Name
    if (!formData.motherName.trim()) {
      valid = false;
      newErrors.motherName = "Mother's Name is required";
    } else {
      newErrors.motherName = '';
    }

    // Validate Aadhar Number
    const aadharRegex = /^\d{12}$/;
    if (!formData.aadharNumber.trim() || !aadharRegex.test(formData.aadharNumber)) {
      valid = false;
      newErrors.aadharNumber = 'Please enter a valid Aadhar Number';
    } else {
      newErrors.aadharNumber = '';
    }

    // Validate Company/Business Name
    if (!formData.companyName.trim()) {
      valid = false;
      newErrors.companyName = 'Company/Business Name is required';
    } else {
      newErrors.companyName = '';
    }

    // Validate Company/Business Address
    if (!formData.companyAddress.trim()) {
      valid = false;
      newErrors.companyAddress = 'Company/Business Address is required';
    } else {
      newErrors.companyAddress = '';
    }

    // Validate Pin Code
    if (!formData.pinCode.trim() || isNaN(formData.pinCode)) {
      valid = false;
      newErrors.pinCode = 'Please enter a valid Pin Code';
    } else {
      newErrors.pinCode = '';
    }

    // Validate Date of Birth
    if (!formData.dob.trim()) {
      valid = false;
      newErrors.dob = 'Date of Birth is required';
    } else {
      newErrors.dob = '';
    }

    // Validate Applicant Address
    if (!formData.applicantAddress.trim()) {
      valid = false;
      newErrors.applicantAddress = 'Applicant Address is required';
    } else {
      newErrors.applicantAddress = '';
    }

    // Validate City/District
    if (!formData.cityDistrict.trim()) {
      valid = false;
      newErrors.cityDistrict = 'City/District is required';
    } else {
      newErrors.cityDistrict = '';
    }

    // Validate Net Monthly Income
    if (!formData.netMonthlyIncome.trim() || isNaN(formData.netMonthlyIncome)) {
      valid = false;
      newErrors.netMonthlyIncome = 'Please enter a valid Net Monthly Income';
    } else {
      newErrors.netMonthlyIncome = '';
    }

    // Validate PAN Number
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    if (!formData.panNo.trim() || !panRegex.test(formData.panNo)) {
      valid = false;
      newErrors.panNo = 'Please enter a valid PAN Number';
    } else {
      newErrors.panNo = '';
    }

    // Validate Credit Card
    if (!formData.hasCreditCard.trim()) {
      valid = false;
      newErrors.hasCreditCard = 'Credit Card information is required';
    } else {
      newErrors.hasCreditCard = '';
    }

    // Validate Type of Loan
    // if (!formData.loanType.trim()) {
    //   valid = false;
    //   newErrors.loanType = 'Type of Loan is required';
    // } else {
    //   newErrors.loanType = '';
    // }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "occupation_type": formData.occupationType,
          "full_name": formData.fullName,
          "father_name": formData.fatherName,
          "mother_name": formData.motherName,
          "aadhar_number": formData.aadharNumber,
          "company_name": formData.companyName,
          "company_address": formData.companyAddress,
          "pin_code": formData.pinCode,
          "dob": formData.dob,
          "applicant_address": formData.applicantAddress,
          "city_district": formData.cityDistrict,
          "net_monthly_income": formData.netMonthlyIncome,
          "pan_no": formData.panNo,
          "has_credit_card": formData.hasCreditCard,
          "loan_type": loanType
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://legalwebsite.pythonanywhere.com/api/loan-applications/", requestOptions)
          .then(response => response.text())
          .then(result => {
            
            console.log(result)
            toast.success("Form submitted successfully!", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2000,
            });
            
           } )
          .catch(error => console.log('error', error));

      setFormData({
        occupationType: '',
        fullName: '',
        fatherName: '',
        motherName: '',
        aadharNumber: '',
        companyName: '',
        companyAddress: '',
        pinCode: '',
        dob: '',
        applicantAddress: '',
        cityDistrict: '',
        netMonthlyIncome: '',
        panNo: '',
        hasCreditCard: '',
        // loanType: '',
      })
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
  <>
   <ToastContainer />
   <div className="max-w-md mx-auto p-6 bg-white mt-10 mb-20 rounded-md shadow-lg">
      <h2 className="text-lg font-bold mb-4 text-center">Fill Your Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Occupation Type */}
        <div className="mb-4">
          <label htmlFor="occupationType" className="block text-sm font-medium text-gray-600">
            Occupation Type
          </label>
          <select
            id="occupationType"
            name="occupationType"
            value={formData.occupationType}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.occupationType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Occupation Type</option>
            <option value="Salaried">Salaried</option>
            <option value="HousePerson">House Person</option>
            <option value="Retired">Retired</option>
            <option value="GovernmentJob">Government Job</option>
            <option value="SelfEmployedBusiness">Self Employed Business</option>
            <option value="SelfEmployedProfessional">Self Employed Professional</option>
            <option value="Student">Student</option>
          </select>
          {errors.occupationType && (
            <p className="text-red-500 text-xs mt-1">{errors.occupationType}</p>
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

        {/* Father's Name */}
        <div className="mb-4">
          <label htmlFor="fatherName" className="block text-sm font-medium text-gray-600">
            Father's Name
          </label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.fatherName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.fatherName && <p className="text-red-500 text-xs mt-1">{errors.fatherName}</p>}
        </div>

        {/* Mother's Name */}
        <div className="mb-4">
          <label htmlFor="motherName" className="block text-sm font-medium text-gray-600">
            Mother's Name
          </label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.motherName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.motherName && <p className="text-red-500 text-xs mt-1">{errors.motherName}</p>}
        </div>

        {/* Aadhar Number */}
        <div className="mb-4">
          <label htmlFor="aadharNumber" className="block text-sm font-medium text-gray-600">
            Aadhar Number
          </label>
          <input
            type="text"
            id="aadharNumber"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.aadharNumber ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.aadharNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.aadharNumber}</p>
          )}
        </div>

        {/* Company/Business Name */}
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-600">
            Enter Company/Business Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.companyName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.companyName && (
            <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* Company/Business Address */}
        <div className="mb-4">
          <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-600">
            Enter Company/Business Address
          </label>
          <input
            type="text"
            id="companyAddress"
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.companyAddress ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.companyAddress && (
            <p className="text-red-500 text-xs mt-1">{errors.companyAddress}</p>
          )}
        </div>

        {/* Pin Code */}
        <div className="mb-4">
          <label htmlFor="pinCode" className="block text-sm font-medium text-gray-600">
            Pin Code
          </label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.pinCode ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.pinCode && <p className="text-red-500 text-xs mt-1">{errors.pinCode}</p>}
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-600">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.dob ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
        </div>

        {/* Applicant Address */}
        <div className="mb-4">
          <label htmlFor="applicantAddress" className="block text-sm font-medium text-gray-600">
            Applicant Address
          </label>
          <input
            type="text"
            id="applicantAddress"
            name="applicantAddress"
            value={formData.applicantAddress}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.applicantAddress ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.applicantAddress && (
            <p className="text-red-500 text-xs mt-1">{errors.applicantAddress}</p>
          )}
        </div>

        {/* City/District */}
        <div className="mb-4">
          <label htmlFor="cityDistrict" className="block text-sm font-medium text-gray-600">
            Enter City/District
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

        {/* Net Monthly Income */}
        <div className="mb-4">
          <label htmlFor="netMonthlyIncome" className="block text-sm font-medium text-gray-600">
            Enter Net Monthly Income
          </label>
          <input
            type="text"
            id="netMonthlyIncome"
            name="netMonthlyIncome"
            value={formData.netMonthlyIncome}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.netMonthlyIncome ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.netMonthlyIncome && (
            <p className="text-red-500 text-xs mt-1">{errors.netMonthlyIncome}</p>
          )}
        </div>

        {/* PAN Number */}
        <div className="mb-4">
          <label htmlFor="panNo" className="block text-sm font-medium text-gray-600">
            Enter PAN Number
          </label>
          <input
            type="text"
            id="panNo"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.panNo ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.panNo && <p className="text-red-500 text-xs mt-1">{errors.panNo}</p>}
        </div>

        {/* Credit Card */}
        <div className="mb-4">
          <label htmlFor="hasCreditCard" className="block text-sm font-medium text-gray-600">
            Credit Card (Yes or No)
          </label>
          <select
            id="hasCreditCard"
            name="hasCreditCard"
            value={formData.hasCreditCard}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.hasCreditCard ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Credit Card</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.hasCreditCard && (
            <p className="text-red-500 text-xs mt-1">{errors.hasCreditCard}</p>
          )}
        </div>

        {/* Type of Loan */}
        <div className="mb-4">
          <label htmlFor="loanType" className="block text-sm font-medium text-gray-600">
            Type of Loan
          </label>
          <input
            type="text"
            id="loanType"
            name="loanType"
            value={loanType}
            onChange={handleChange}
            className={`mt-1 p-2 w-full rounded-md border`}
          />
          {/* {errors.loanType && <p className="text-red-500 text-xs mt-1">{errors.loanType}</p>} */}
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 hover:text-white  text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
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
  </>
);
};


export default CreditCard