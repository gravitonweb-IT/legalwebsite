import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDashboard from '../UserDashboard';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [data, setData] = useState([]);
  const userRole = localStorage.getItem("userData");

  useEffect(() => {
    if (localStorage.getItem("userData") == null) {
      navigate("/login");
    }
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    // Make a GET request to the API
    axios.get('https://legalwebsite.pythonanywhere.com/api/paymentdata/')
      .then(response => {
        setData(response.data.data);
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
        <h1 className="text-3xl font-bold mb-4">Invoice</h1>

        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              {/* <th className="border border-gray-300 p-2">ID</th> */}
              <th className="border border-gray-300 p-2">Amount</th>
              <th className="border border-gray-300 p-2">UTR Number</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.id}>
                {/* <td className="border border-gray-300 p-2">{item.id}</td> */}
                <td className="border border-gray-300 p-2">{item.name}</td>
                <td className="border border-gray-300 p-2">{item.uTrNumber}</td>
                <td className="border border-gray-300 p-2">{item.email}</td>
                <td className="border border-gray-300 p-2">{item.contactNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UserDashboard>
  );
};

export default Profile;
