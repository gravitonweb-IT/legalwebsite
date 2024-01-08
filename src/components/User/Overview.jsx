import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDashboard from '../UserDashboard';
import { useNavigate } from 'react-router-dom';

// JSON data constant
const servicesList = [
  "Private-limited-company-registration",
  "opc-one-person-company-registration",
  "section-8-company-registration",
  "llp-company-registration",
  "annual-compliance-llp",
  "annual-compliance-company",
  "CMA-report",
  "dissolution-of-deed",
  "Address-amendment-within-state-LLP",
  "Address-amendment-within-state-company",
  "Address-amendment-out-state-llp",
  "Address-amendment-out-state-company",
  "add-director",
  "add-partner",
  "increase-capital-llp",
  "change-in-name-llp",
  "remove-director",
  "remove-partner",
  "increase-capital-company",
  "change-in-name-company",
  "import-export-license",
  "professional-tax-registration",
  "icegate-registration",
  "msme-udhyam-registration",
  "society-registration",
  "gumasta-licence",
  "pf-registration",
  "trademark-registration",
  "esic-registration",
  "gst-registration",
  "food-license",
  "trade-license",
  "GST Return Filing",
  "ITR Filing",
  "TDS Return Filing",
  "Online Accounting",
  "Legal Drafting",
  "Rent Agreement",
  "NOC",
  "Affidavit",
  "Power of Attorney",
  "Will",
  "Application Form",
  "NDA Drafting",
  "Privacy Policy Drafting",
  "Terms and Conditions Drafting",
  "Legal Notice Reply",
  "Legal Advice",
  "Legal Notice Preparation",
  "Balance Sheet Preparation & P&L",
  "Project Report Preparation"
];

const Overview = () => {
  const [data, setData] = useState([]);
  const [dropDownValue, setDropDownValue] = useState(""); // State for selected dropdown value
  const [image, setImage] = useState(false);
  const userRole = localStorage.getItem("userData");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userData") == null) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
   
    axios.get('https://legalwebsite.pythonanywhere.com/api/all-pages-api/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 


  const filteredData = data.filter(item => item.email === userRole && item.type === dropDownValue);

  useEffect(() => {
    // Set image state based on filteredData
    setImage(filteredData && filteredData.length === 0);
  }, [filteredData]);

  const handleDropDownChange = (event) => {
    setDropDownValue(event.target.value);
  };

  return (
    <UserDashboard>
      <div className="container mx-auto p-4">
        <div className="mb-4">
          {/* Dropdown menu */}
          <select
            value={dropDownValue}
            onChange={handleDropDownChange}
            className="p-2 border border-gray-400 rounded"
          >
            <option value="">Select a service</option>
            {servicesList.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 gap-4">
  <div className='shadow-lg py-10'>
    <h1 className="text-3xl font-bold text-center text-red-700 mb-4">Active Services</h1>
    
      {image ? (
     
     <img
     src='https://cdn3.vectorstock.com/i/1000x1000/95/22/overview-vector-6359522.jpg'
     alt="Overview"
     className="mx-auto w-56 h-56"
   />
       
      ) : (
        filteredData.map(item => (
          <div key={item.id} className="bg-gray-200 p-4 rounded shadow-md">
            <p className="font-bold">{item.firstName}</p>
            <p>Email: {item.email}</p>
            <p>Contact No: {item.contactNo}</p>
            <p>City: {item.city}</p>
            <p>Type: {item.type}</p>
            {/* <p>Action: {item.action}</p> */}
          </div>
        ))
      )}
  
  </div>
  <div className='shadow-lg py-10'>
    <h1 className="text-3xl font-bold text-center text-red-700 mb-4">Completed Services</h1>
    
      {image ? (
     
     <img
     src='https://th.bing.com/th/id/OIP.3JtnY_63hVdqD30dlhoGfwHaHa?w=512&h=512&rs=1&pid=ImgDetMain'
     alt="Overview"
     className="mx-auto w-56 h-56"
   />
       
      ) : (
        filteredData.map(item => (
          <div key={item.id} className="bg-gray-200 p-4 rounded shadow-md">
            <p className="font-bold">{item.firstName}</p>
            <p>Email: {item.email}</p>
            <p>Contact No: {item.contactNo}</p>
            <p>City: {item.city}</p>
            <p>Type: {item.type}</p>
            {/* <p>Action: {item.action}</p> */}
          </div>
        ))
      )}
  
  </div>
</div>

      </div>
    </UserDashboard>
  );
};

export default Overview;