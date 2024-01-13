import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreditCard from './CreditCard';
import UserDashboard from '../UserDashboard';

const StashFinCreditCard = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    cityDistrict: '',
    netMonthlySalary: '',
    penNo: '',
    loanAmount: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here

    // Display success toast on successful submission
    toast.success('Form submitted successfully!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <>
    <UserDashboard>
      <div className=" shadow-stone-400 m-5 mt-20 p-4">
        <div className="max-w-lg mx-auto">
          <h1 className="text-center text-blue text-2xl font-bold mb-4">
          StashFin Bank Credit Card
          </h1>
          <p className="text-center text-base font-medium mx-2 mb-4">
          StashFin Bank Credit Card offers rewards, cashback, and exclusive privileges. Enjoy seamless transactions, low fees, and personalized benefits for your financial needs.
          </p>
          <div className='flex justify-center'>
          <button className='text-center text-blue bg-yellow-300 p-2 mt-2 rounded-md font-bold mb-3'>@@ No Commission</button>
          </div>
          <div className='flex justify-center'>
        <a href="https://legal257.in/Termsconditions">
             <button
               
                className="text-center text-blue hover:bg-black hover:text-white bg-red-500 p-2 rounded-md"
              >
                Know More
              </button>
               </a> 
               </div>
        </div>
      </div>
        <div className=' bg-white shadow-2xl rounded-md '>
        <CreditCard loanType={"StashFin Bank Credit Card "} />
        </div>
        </UserDashboard>
    </>
  );
};

export default StashFinCreditCard;
