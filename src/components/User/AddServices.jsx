import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import qr from "../../assests/images/Qr/qrPayment.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "../UserDashboard";
const AddServices = () => {
  const queryData = [
    {
        label: "PartnerShip",
        value: "PartnerShip (1351)",
    },
    {
        label: "Private Limited Company Registration",
        value: "Private Limited Company Registration (10051)",
    },
    {
        label: "OPC (One Person Company) Registration",
        value: "OPC (One Person Company) Registration (9751)",
    },
    {
        label: "Section 8 Company Registration",
        value: "Section 8 Company Registration (10051)",
    },
    {
        label: "LLP (Limited Liability Partnership) Company Registration",
        value: "LLP (Limited Liability Partnership) Company Registration (9251)",
    },
    {
        label: "Annual Compliance LLP",
        value: "Annual Compliance LLP (9251)",
    },
    {
        label: "Annual Compliance of Private limited Company",
        value: "Annual Compliance of Private limited Company (8251)",
    },
    {
        label: "CMA Report",
        value: "CMA Report (1206)",
    },
    {
        label: "Dissolution of Deed",
        value: "Dissolution of Deed (1351)",
    },
    {
        label: "Address Amendment Within State LLP",
        value: "Address Amendment Within State LLP (4251)",
    },
    {
        label: "Address Amendment Within State Company",
        value: "Address Amendment Within State Company (4251)",
    },
    {
        label: "Address Amendment Out State LLP",
        value: "Address Amendment Out State LLP (1151)",
    },
    {
        label: "Address Amendment Out State Company",
        value: "Address Amendment Out State Company (10051)",
    },
    {
        label: "Add Director",
        value: "Add Director (2351)",
    },
    {
        label: "Add Partner",
        value: "Add Partner (2451)",
    },
    {
        label: "Increase Capital LLP",
        value: "Increase Capital LLP (6351)",
    },
    {
        label: "Change in Name LLP",
        value: "Change in Name LLP (6351)",
    },
    {
        label: "Remove Director",
        value: "Remove Director (2351)",
    },
    {
        label: "Remove Partner",
        value: "Remove Partner (2351)",
    },
    {
        label: "Increase Capital Company",
        value: "Increase Capital Company (6251)",
    },
    {
        label: "Change in Name Company",
        value: "Change in Name Company (6251)",
    },
    {
        label: "Import Export License",
        value: "Import Export License (1351)",
    },
    {
        label: "Professional Tax Registration",
        value: "Professional Tax Registration (1351)",
    },
    {
        label: "ICEGATE Registration",
        value: "ICEGATE Registration (1351)",
    },
    {
        label: "MSME Udhyam Registration",
        value: "MSME Udhyam Registration (1751)",
    },
    {
        label: "Society Registration",
        value: "Society Registration (3351)",
    },
    {
        label: "Gumasta Licence",
        value: "Gumasta Licence (851)",
    },
    {
        label: "PF Registration",
        value: "PF Registration (1751)",
    },
    {
        label: "Trademark Registration",
        value: "Trademark Registration (1751)",
    },
    {
        label: "ESIC Registration",
        value: "ESIC Registration (1751)",
    },
    {
        label: "GST Registration",
        value: "GST Registration (4251)",
    },
    {
        label: "Food License",
        value: "Food License (690)",
    },
    {
        label: "Trade License",
        value: "Trade License (851)",
    },
    {
        label: "GST Return Filing (Starter)",
        value: "GST Return Filing (Starter) (7251)",
    },
    {
        label: "GST Return Filing (Basic)",
        value: "GST Return Filing (Basic) (8251)",
    },
    {
        label: "GST Return Filing (Pro)",
        value: "GST Return Filing (Pro) (8751)",
    },
    {
        label: "GST Return Filing (Starter)",
        value: "GST Return Filing (Starter) (9551)",
    },
    {
        label: "ITR Filing (Starter)",
        value: "ITR Filing (Starter) (600)",
    },
    {
        label: "ITR Filing (Basic)",
        value: "ITR Filing (Basic) (1300)",
    },
    {
        label: "ITR Filing (Pro)",
        value: "ITR Filing (Pro) (1400)",
    },
    {
        label: "ITR Filing (Premium)",
        value: "ITR Filing (Premium) (2401)",
    },
    {
        label: "TDS Return Filing (Starter)",
        value: "TDS Return Filing (Starter) (2251)",
    },
    {
        label: "TDS Return Filing (Basic)",
        value: "TDS Return Filing (Basic) (3251)",
    },
    {
        label: "Online Accounting (Basic)",
        value: "Online Accounting (Basic) (12,251.00)",
    },
    {
        label: "Online Accounting (Pro)",
        value: "Online Accounting (Pro) (15,251.00)",
    },
    {
        label: "Legal Drafting",
        value: "Legal Drafting (1251)",
    },
    {
        label: "Rent Agreement",
        value: "Rent Agreement (251)",
    },
    {
        label: "NOC",
        value: "NOC (551)",
    },
    {
        label: "Affidavit",
        value: "Affidavit (551)",
    },
    {
        label: "Power of Attorney",
        value: "Power of Attorney",
    },
    {
        label: "Will",
        value: "Will (551)",
    },
    {
        label: "Application Form",
        value: "Application Form (551)",
    },
    {
        label: "NDA Drafting",
        value: "NDA Drafting (2251)",
    },
    {
        label: "Privacy Policy Drafting",
        value: "Privacy Policy Drafting (2251)",
    },
    {
        label: "Terms and Conditions Drafting",
        value: "Terms and Conditions Drafting (2251)",
    },
    {
        label: "Legal Notice Reply (General)",
        value: "Legal Notice Reply (General) (551)",
    },
    {
        label: "Legal Notice Reply (Detailed)",
        value: "Legal Notice Reply (Detailed) (2251)",
    },
    {
        label: "Legal Advice",
        value: "Legal Advice (2251)",
    },
    {
        label: "Legal Notice Preparation",
        value: "Legal Notice Preparation (1251)",
    },
    {
        label: "Balance Sheet Preparation & P&L",
        value: "Balance Sheet Preparation & P&L (551)",
    },
    {
        label: "Project Report Preparation",
        value: "Project Report Preparation (2551)",
    },
];


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
    <>
      <>
        <UserDashboard>
          {qrcode ? (
            <div className="container mx-auto mt-10 rounded-sm mb-25 max-w-2xl">
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
                <p className="mt-3 ">
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium ml-2  text-gray-600"
                  >
                    Choose Services
                  </label>

                  <select
                    id="type"
                    name="type"
                    onChange={handleChange}
                    value={userRole}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  >
                    <option value="" disabled>
                      Select a query type
                    </option>
                    {queryData.map((type, index) => (
                      <option key={index} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
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
                  <p className="mt-3">
                    <input
                      type="city"
                      id="city"
                      name="city"
                      placeholder="City"
                      required
                      className="py-2 border-b-2 border-slate-400 px-5 w-full"
                      // value={User}
                      value="User"

                      // onChange={handleChange}
                    />
                  </p>
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
        </UserDashboard>
      </>

      {showPaymentSuccess && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className="text-green-500 text-2xl font-semibold mb-4">
              Payment Successful!
            </p>
            <p className="text-gray-700">Thank you for your payment.</p>
            <button
              onClick={() => setShowPaymentSuccess(false)}
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default AddServices;
