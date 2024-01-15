import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import qr from "../../assests/images/Qr/qrPayment.jpeg";

import UserDashboard from '../UserDashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CommonControl = () => {
   
    
    
      const [data, setData] = useState(true);
      const [pdf, setPdf] = useState(false);
      const [qrcode, setQrcode] = useState(false);
      const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
      const userRole = localStorage.getItem("userData");
      const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        contactNo: "",
        city: "",
        type: "",
        AgentIdOrUser:userRole
      });
      const [selectedQuery, setSelectedQuery] = useState("");
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
        setSelectedQuery(e.target.value);
      };
      useEffect(() => {
        if (localStorage.getItem("userData") == null) {
          navigate("/login");
        }
      }, []);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          
          var raw = JSON.stringify({
            "firstName": formData.firstName,
            "email":  formData.email,
            "contactNo":  formData.contactNo,
            "city":  formData.city,
            "type":  formData.type,
            "agentIdOrUser":  userRole
          });
          
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          fetch("https://legalwebsite.pythonanywhere.com/api/all-pages-api/", requestOptions)
            .then(response => response.text())
            .then(result => {console.log(result)
              setPdf(true);
             } )
            .catch(error => console.log('error', error));
        } catch (error) {
          console.error("Error submitting data:", error.message);
        }
    
        setFormData({
          firstName: "",
          email: "",
          contactNo: "",
          city: "",
          type: "",
        });
      };
      const [userData, setUserData] = useState({
        name: "",
        uTrNumber: "",
        email: "",
        contactNo: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const resetForm = () => {
        setUserData({
          name: "",
          uTrNumber: "",
          email: "",
          contactNo: "",
        });
      };
    
      const submitFormData = async () => {
        try {
          const response = await fetch(
            "https://legalwebsite.pythonanywhere.com/api/paymentdata/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            }
          );
    
          if (response.ok) {
            console.log("Data submitted successfully");
            alert("Data submitted successfully");
            setShowPaymentSuccess(true);
            toast.success("Form submitted successfully!", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 5000, // Time in milliseconds the toast should be displayed
            });
            resetForm();
            // You can add further actions or redirect the user after successful submission.
          } else {
            console.error("Error submitting data:", response.statusText);
            // Handle error, show user a message, etc.
          }
        } catch (error) {
          console.error("Error submitting data:", error.message);
          // Handle error, show user a message, etc.
        }
      };
    
      const [email, setEmail] = useState("");
      const [pdfFiles, setPdfFiles] = useState({
        pdfFile1: null,
        pdfFile2: null,
        pdfFile3: null,
        pdfFile4: null,
      });
    
      const handleFileChange = (e, key) => {
        setPdfFiles({
          ...pdfFiles,
          [key]: e.target.files[0],
        });
      };
    
      const FileSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("email", email);
        formData.append("pdf_file1", pdfFiles.pdfFile1);
        formData.append("pdf_file2", pdfFiles.pdfFile2);
        formData.append("pdf_file3", pdfFiles.pdfFile3);
        formData.append("pdf_file4", pdfFiles.pdfFile4);
    
        const requestOptions = {
          method: "POST",
          body: formData,
          // No need for redirect here, handle the response in the component
        };
    
        try {
          const response = await fetch(
            "https://legalwebsite.pythonanywhere.com/api/UserOutput/",
            requestOptions
          );
          const result = await response.text();
          console.log(result);
          setQrcode(true);
    
          // Clear input fields after successful submission
          setEmail("");
          setPdfFiles({
            pdfFile1: null,
            pdfFile2: null,
            pdfFile3: null,
            pdfFile4: null,
          });
        } catch (error) {
          console.error("Error:", error);
          // Handle error, show the user a message, etc.
        }
      };
      const navigate = useNavigate();
      useEffect(() => {
        let timeoutId;
    
        if (showPaymentSuccess) {
          timeoutId = setTimeout(() => {
            setShowPaymentSuccess(false);
            navigate("/overview");
          }, 2000);
        }
    
        return () => clearTimeout(timeoutId);
      }, [showPaymentSuccess, navigate]);
    

  return (
    <UserDashboard>
       <ToastContainer />
    <div className="bg-white shadow-2xl shadow-stone-400 m-5 pb-20 my-20">
      <div className="flex flex-col items-center justify-center max-w-lg mx-auto">
        <h1 className="text-center text-blue text-2xl font-bold">
        Partner Ship 
        </h1>
        <p className="text-center text-base font-medium mx-2">
       Partner Ship  is a secured financial product where borrowers pledge gold assets to obtain funds. Interest rates vary, and timely repayment ensures asset retrieval
        </p>
        <h1 className='text-center text-blue bg-yellow-300 p-2 mt-2 rounded-md font-bold mb-3'>@@ No Commission</h1>
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
      {qrcode ? (
            <div className="container mx-auto mt-10 rounded-sm mb-24 max-w-2xl">
              <h1 className="text-2xl text-center font-bold text-red-700 pb-4">
                Pay {` ${selectedQuery.match(/\d+/)}`}
              </h1>
              <img src={qr} alt="" className="mb-5 border border-sky-600" />
              <form className="max-w-md mx-auto">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="uTrNumber"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    uTr Number
                  </label>
                  <input
                    type="text"
                    id="uTrNumber"
                    name="uTrNumber"
                    value={userData.uTrNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter uTr Number"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="contactNo"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    contactNo
                  </label>
                  <input
                    type="tel"
                    id="contactNo"
                    name="contactNo"
                    value={userData.contactNo}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your contactNo number"
                    required
                  />
                </div>

                <button
                  type="button"
                  onClick={submitFormData}
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          ) : pdf ? (
            <form onSubmit={FileSubmit} className="max-w-2xl mx-auto">
              {/* Email input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              {/* File inputs */}
              <div className="mb-4">
                <label
                  htmlFor="pdfFile1"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  PDF File 1
                </label>
                <input
                  type="file"
                  id="pdfFile1"
                  name="pdfFile1"
                  onChange={(e) => handleFileChange(e, "pdfFile1")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="pdfFile2"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  PDF File 2
                </label>
                <input
                  type="file"
                  id="pdfFile2"
                  name="pdfFile2"
                  onChange={(e) => handleFileChange(e, "pdfFile2")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="pdfFile3"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  PDF File 3
                </label>
                <input
                  type="file"
                  id="pdfFile3"
                  name="pdfFile3"
                  onChange={(e) => handleFileChange(e, "pdfFile3")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="pdfFile4"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  PDF File 4
                </label>
                <input
                  type="file"
                  id="pdfFile4"
                  name="pdfFile4"
                  onChange={(e) => handleFileChange(e, "pdfFile4")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              {/* Submit button */}
              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="container mx-auto mt-8 flex justify-center shadow-lg p-6 items-center max-w-2xl">
              <form onSubmit={handleSubmit} className="max-w-full ">
                <p>
                  <input
                    type="text"
                    id="firstname"
                    required
                    name="firstName"
                    placeholder="First Name"
                    className="py-2 border-b-2 border-slate-400 px-5 w-full"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </p>
                <p className="mt-3">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="py-2 border-b-2 border-slate-400 px-5 w-full"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </p>
                <p className="mt-3">
                  <input
                    type="text"
                    id="contactNo"
                    name="contactNo"
                    required
                    placeholder="Contact No"
                    className="py-2 border-b-2 border-slate-400 px-5 w-full"
                    value={formData.contactNo}
                    onChange={handleChange}
                  />
                </p>
                <p className="mt-3">
                  <input
                    type="city"
                    id="city"
                    name="city"
                    placeholder="City"
                    required
                    className="py-2 border-b-2 border-slate-400 px-5 w-full"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </p>
               

                {localStorage.getItem("login") == "staff" ? (
                  <p className="mt-3">
                    <input
                      type="text"
                      id="AgentIdOrUser"
                      name="AgentIdOrUser"
                      placeholder="AgentIdOrUser"
                      required
                      className="py-2 border-b-2 border-slate-400 px-5 w-full"
                      value={formData.AgentIdOrUser}
                      // onChange={handleChange}
                    />
                  </p>
                ) : (
                 ''
                )}

                <div className="mt-5">
                  <button
                    type="submit"
                    className="bg-[#8A4117] text-white px-4 py-2 rounded-[20px]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
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








export default CommonControl