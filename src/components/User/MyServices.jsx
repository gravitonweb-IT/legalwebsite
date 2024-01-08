import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDashboard from '../UserDashboard';
import { useNavigate } from 'react-router-dom';

const MyServices = () => {
  const [data, setData] = useState([]);
  const userRole = localStorage.getItem("userData");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userData") == null) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    // Make a GET request to the API
    axios.get('https://legalwebsite.pythonanywhere.com/api/all-pages-api/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  // Filter data based on user role
  const filteredData = data.filter(item => item.email === userRole);

  return (
    <UserDashboard>
      <div className="container mx-auto p-4">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div>
          <h1 className="text-3xl font-bold text-center text-red-700 mb-4">Active Services</h1>
          
          {filteredData.map(item => (
            <div key={item.id} className="bg-gray-200 p-4 rounded shadow-md">
              
              <p className="font-bold">{item.firstName}</p>
              <p>Email: {item.email}</p>
              <p>Contact No: {item.contactNo}</p>
              <p>City: {item.city}</p>
              <p>Type: {item.type}</p>
              <p>Action: {item.action}</p>
            </div>
          ))}
          </div>
          <div>
          <h1 className="text-3xl text-center text-red-700 font-bold mb-4">Completed Services
</h1>
          </div>
        </div>
      </div>
    </UserDashboard>
  );
};

export default MyServices;
