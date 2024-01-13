import React, { useEffect, useState } from 'react';
import UserDashboard from '../UserDashboard';
import { useNavigate } from "react-router-dom";
const Support = () => {
  const [formData, setFormData] = useState({
    queryType: '',
    subject: '',
    description: '',
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userData") == null) {
      navigate("/login");
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log('Form submitted:', formData);
    // Reset the form after submission if needed
    setFormData({
      queryType: '',
      subject: '',
      description: '',
    });
  };

  const queryTypes = [
    'General Inquiry',
    'Technical Support',
    'Billing Issue',
    // Add more query types as needed
  ];

  return (
    <UserDashboard>
    <div className="container mx-auto shadow-2xl p-5 ">
        <div className="mt-8 flex text-center flex-col justify-center">
        <h2 className="text-xl font-bold mb-2 ">Support:</h2>
        <p className="text-gray-700 mb-4">Have any query in mind!! Get support from Legal257 Team</p>

        <h2 className="text-xl font-bold mb-2">Attention:</h2>
        <p className="text-gray-700">
          👉 Expected waiting time is 24-48hrs. Thank you for your patience. 🙏
        </p>
      </div>
      <h1 className="text-3xl text-center font-bold mb-4 mt-10">Ask Your Inquiry </h1>

      <form onSubmit={handleSubmit} className="max-w-md mb-20 mx-auto">
        <div className="mb-4">
          <label htmlFor="queryType" className="block text-sm font-medium text-gray-600">
            Choose your query type
          </label>
          <select
            id="queryType"
            name="queryType"
            onChange={handleInputChange}
            value={formData.queryType}
            className="mt-1 p-4 border  border-gray-600 rounded-md w-full"
          >
            <option value="" disabled>Select a query type</option>
            {queryTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
            Please enter your subject here
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            onChange={handleInputChange}
            value={formData.subject}
            className="mt-1 p-4 border  border-gray-600 rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={handleInputChange}
            value={formData.description}
            rows="4"
            className="mt-1 p-4 border  border-gray-600 rounded-md w-full"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600"
        >
          Submit Inquiry
        </button>
      </form>

    
    </div>
    </UserDashboard>
  );
};

export default Support;
