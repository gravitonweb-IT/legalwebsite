import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDashboard from '../UserDashboard';
import { useNavigate } from 'react-router-dom';

const Document = () => {
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
    axios.get('https://legalwebsite.pythonanywhere.com/api/UserOutput/')
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

          {filteredData.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-lg">
              <h2 className="text-xl flex justify-center font-semibold mb-2">Service {index + 1}</h2>
              {/* <p>Email: {item.email}</p> */}
              <div className="mt-4 flex flex-col items-center justify-center">
                <p>PDF File 1: <a href={item.pdf_file1} target="_blank" rel="noopener noreferrer">Aadhar</a></p>
                <p>PDF File 2: <a href={item.pdf_file2} target="_blank" rel="noopener noreferrer">Pan</a></p>
                <p>PDF File 3: <a href={item.pdf_file3} target="_blank" rel="noopener noreferrer">Voter Id</a></p>
                <p>PDF File 4: <a href={item.pdf_file4} target="_blank" rel="noopener noreferrer">More</a></p>
              </div>
            </div>
          ))}
          </div>
          <div>
        <h1 className="text-3xl font-bold text-center text-red-700 mb-4">Completed Services</h1>

          </div>
        </div>
      </div>
    </UserDashboard>
  );
};

export default Document;
