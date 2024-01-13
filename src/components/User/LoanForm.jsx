import React, { useEffect, useState } from 'react';
import HomeLoanPopup from './HomeLoanPopUp';
import UserDashboard from '../UserDashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { servieUrl } from '../../env/env';
import { useNavigate } from 'react-router-dom';
const LoanForm = () => {
  const [formData, setFormData] = useState({
    employmentType: '',
    fullName: '',
    cityState: '',
    monthlyIncome: '',
    salaryMode: '',
    propertyType: '',
    loanAmount: '',
    companyName: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
  
        var raw = JSON.stringify({
          "employmentType": formData.employmentType,
          "fullName": formData.fullName,
          "cityState": formData.cityState,
          "monthlyIncome": formData.monthlyIncome,
          "salaryMode": formData.salaryMode,
          "propertyType": formData.propertyType,
          "loanAmount": formData.loanAmount,
          "companyName": formData.companyName
        });
  
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
  
        const response = await fetch(servieUrl.url + "api/home-loan/", requestOptions);
        const result = await response.text();
  
        // Check if the request was successful
        if (response.ok) {
          console.log(result);
  
          // Clear form fields
          setFormData({
            employmentType: '',
            fullName: '',
            cityState: '',
            monthlyIncome: '',
            salaryMode: '',
            propertyType: '',
            loanAmount: '',
            companyName: ''
          });
  
          // Clear errors
          setErrors({});
  
          // Show success toast or handle as needed
          toast.success("Form submitted successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        } else {
          console.error("Request failed:", result);
          // Handle error response as needed
        }
      } catch (error) {
        console.error("Error during fetch:", error);
        // Handle other errors during fetch
      }
    } else {
      setErrors(validationErrors);
    }
  };
  

  const validateForm = (data) => {
    let errors = {};
  
    if (!data.employmentType) {
      errors.employmentType = 'Please select employment type';
    }
  
    if (!data.fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    }
  
    if (!data.cityState.trim()) {
      errors.cityState = 'Please enter your city/state';
    }
  
    if (!data.monthlyIncome.trim()) {
      errors.monthlyIncome = 'Please enter your monthly income';
    } else if (isNaN(data.monthlyIncome) || +data.monthlyIncome <= 0) {
      errors.monthlyIncome = 'Monthly income must be a positive number';
    }
  
    if (!data.salaryMode) {
      errors.salaryMode = 'Please select salary mode';
    }
  
    if (!data.propertyType) {
      errors.propertyType = 'Please select type of property';
    }
  
    if (!data.loanAmount.trim()) {
      errors.loanAmount = 'Please enter the loan amount';
    } else if (isNaN(data.loanAmount) || +data.loanAmount <= 0) {
      errors.loanAmount = 'Loan amount must be a positive number';
    }
  
    if (!data.companyName.trim()) {
      errors.companyName = 'Please enter the company name';
    }
  
    return errors;
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
    <div className='bg-white shadow-2xl shadow-stone-400 m-5 mt-10'>
  <div className='flex flex-col items-center justify-center max-w-lg mx-auto'>
    <h1 className='text-center text-blue text-2xl font-bold'>Home Loan</h1>
    <p className='text-center text-base font-medium mx-2'>
      Welcome to our Home Loan services. Explore our website for valuable information and expert advice on achieving your dream home. 
      Discover the perfect loan solutions tailored for you.
    </p>
    <h1 className='text-center text-blue bg-yellow-300 p-2 mt-2 rounded-md font-bold mb-3'>@@ No Commission</h1>
    <div>
      <button onClick={handleKnowMoreClick} className='text-center text-blue hover:bg-black hover:text-white bg-red-500 p-2 rounded-md'>Know More</button>

      {isPopupVisible && <HomeLoanPopup onClose={handleClosePopup} />}
    </div>
  </div>


    <div className="max-w-[300px] md:max-w-md bg-white  mx-auto mt-10 mb-28 ">
      <form onSubmit={handleSubmit} className="space-y-6 ">
        <div>
        <h1 className='text-center text-lg font-semibold'> Fill Your Details</h1>
        <div className="border-t-2 border-[#8A4117] mx-5 my-2 "></div>
        </div>
        <div>
          <label className="block text-gray-700 ml-2">Employment Type</label>
          <select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            className="form-input mt-1 border border-gray-400 rounded-md p-2 block w-full"
          >
            <option value="">Select Employment Type</option>
            <option value="Salaried">Salaried</option>
            <option value="Non-Salary">Non-Salary</option>
          </select>
          {errors.employmentType && (
            <p className="text-red-500">{errors.employmentType}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-input mt-1 border border-gray-400 rounded-md p-2 block w-full"
          />
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">City/State</label>
          <input
            type="text"
            name="cityState"
            value={formData.cityState}
            onChange={handleChange}
            className="form-input mt-1 border border-gray-400 rounded-md p-2 block w-full"
          />
          {errors.cityState && (
            <p className="text-red-500">{errors.cityState}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Monthly Income</label>
          <input
            type="text"
            name="monthlyIncome"
            value={formData.monthlyIncome}
            onChange={handleChange}
            className="form-input mt-1 border border-gray-400 rounded-md p-2 block w-full"
          />
          {errors.monthlyIncome && (
            <p className="text-red-500">{errors.monthlyIncome}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Salary Mode</label>
          <select
            name="salaryMode"
            value={formData.salaryMode}
            onChange={handleChange}
            className="form-select mt-1 border border-gray-400 rounded-md p-2 block w-full"
          >
            <option value="">Select Salary Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
          {errors.salaryMode && (
            <p className="text-red-500">{errors.salaryMode}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Type of Property</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="form-select mt-1 border border-gray-400 rounded-md p-2 block w-full"
          >
            <option value="">Select Type of Property</option>
            <option value="Type1">Type1</option>
            <option value="Type2">Type2</option>
          </select>
          {errors.propertyType && (
            <p className="text-red-500">{errors.propertyType}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Loan Amount</label>
          <input
            type="text"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            className="form-input mt-1 border border-gray-400 rounded-md p-2 block w-full"
          />
          {errors.loanAmount && (
            <p className="text-red-500">{errors.loanAmount}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="form-input mt-1 border border-gray-400 rounded-md p-2 block w-full"
          />
          {errors.companyName && (
            <p className="text-red-500">{errors.companyName}</p>
          )}
        </div>

        <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 my-3 rounded hover:bg-blue-600"
            >
              Proceed Now
            </button>
          </div>
      </form>
      <div className="mt-8 text-center pb-20 text-gray-600">
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
    </>
  );
};




export default LoanForm








