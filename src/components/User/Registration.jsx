import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    first_name: '',
    password: '',
    role: '',
    phone_number: '',
  });

 
  
const navigate= useNavigate()
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (!formData.first_name) {
        newErrors.first_name = 'first_name is required';
      }

      if (!formData.username) {
        newErrors.username = 'username is required';
      }
      if (!formData.role) {
        newErrors.role = 'role is required';
      }
      if (!formData.phone_number) {
        newErrors.phone_number = 'phone_number is required';
      }
      
    // Add more validation rules as needed

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can proceed with further actions
      var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "email": formData.email,
      "username": formData.username,
      "first_name": formData.first_name,
      "password": formData.password,
      "role": formData.role,
      "phone_number": formData.phone_number
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch("https://legalwebsite.pythonanywhere.com/api/register/", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        alert("SuccessFully Register")
        navigate('/login')
        setFormData({ email: '',
        username: '',
        first_name: '',
        password: '',
        role: '',
        phone_number: '',})
        // Handle success, e.g., redirect to another page
      })
      .catch(error => {
        console.error('Registration failed:', error);
        // Handle error, e.g., display an error message to the user
      });
      
    } else {
      // Update errors state with validation errors
      setErrors(newErrors);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
      <form >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.email ? 'border-red-500 ' : 'border-gray-300'
            } rounded`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 mb-1">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`w-full p-2 border ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              } rounded`}

          />
        </div>
        {errors.username && (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
          )}

        <div className="mb-4">
          <label htmlFor="first_name" className="block text-gray-600 mb-1">
            Full Name:
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className={`w-full p-2 border ${
                errors.first_name ? 'border-red-500' : 'border-gray-300'
              } rounded`}
          />
        </div>
        {errors.first_name && <p className="text-red-500">{errors.first_name}</p>}

        <div className="mb-4">
        <label>Role:</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className={`w-full p-2 border ${
            errors.role ? 'border-red-500' : 'border-gray-300'
          } rounded sm:w-auto`}
        >
          <option value="">Select Role</option>
          <option value="3">User</option>
          <option value="2">Agent</option>
        </select>
        {errors.role && <p className="text-red-500">{errors.role}</p>}
      </div>

        <div className="mb-4">
          <label htmlFor="phone_number" className="block text-gray-600 mb-1">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className={`w-full p-2 border ${
                errors.phone_number ? 'border-red-500' : 'border-gray-300'
              } rounded`}

          />
        </div>
        {errors.phone_number && (
            <p className="text-red-500 text-xs mt-1">{errors.phone_number}</p>
          )}

        
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <button
        onClick={handleSubmit}
          type="submit"
          className="bg-[#B70505] mt-5 px-10 py-3 text-white text-lg font-semibold rounded-lg hover:cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
