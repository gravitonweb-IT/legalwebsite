import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import qr from '../../assests/images/Qr/qrPayment.jpeg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Check = (props) => {
    const {formType} =props;
    const [data, setData] = useState(true);
    const [pdf, setPdf] = useState(false);
    const [qrcode, setQrcode] = useState(false);
    const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  
   
  
    const [formData, setFormData] = useState({
      firstName: '',
      email: '',
      contactNo: '',
      city: '',
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch(
          'https://legalwebsite.pythonanywhere.com/api/all-pages-api/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any additional headers if needed
            },
            body: JSON.stringify({
              ...formData,
              type: formType,
            }),
          }
        );
  
        if (response.ok) {
          console.log('Data submitted successfully');
          setPdf(true);
         
        } else {
          console.error('Error submitting data:', response.statusText);
        
        }
      } catch (error) {
        console.error('Error submitting data:', error.message);
      
      }
  
    
      setFormData({
        firstName: '',
        email: '',
        contactNo: '',
        city: '',
      });
    };
  
    const [userData, setUserData] = useState({
      name: '',
      uTrNumber: '',
      email: '',
      contactNo: '',
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
        name: '',
        uTrNumber: '',
        email: '',
        contactNo: '',
      });
    };
    
    const submitFormData = async () => {
      try {
        const response = await fetch('https://legalwebsite.pythonanywhere.com/api/paymentdata/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
    
        if (response.ok) {
          console.log('Data submitted successfully');
          alert('Data submitted successfully');
          setShowPaymentSuccess(true);
          toast.success('Form submitted successfully!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, // Time in milliseconds the toast should be displayed
          });
          resetForm();
          // You can add further actions or redirect the user after successful submission.
        } else {
          console.error('Error submitting data:', response.statusText);
          // Handle error, show user a message, etc.
        }
      } catch (error) {
        console.error('Error submitting data:', error.message);
        // Handle error, show user a message, etc.
      }
    };
    
  
    const [email, setEmail] = useState('');
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
      formData.append('email', email);
      formData.append('pdf_file1', pdfFiles.pdfFile1);
      formData.append('pdf_file2', pdfFiles.pdfFile2);
      formData.append('pdf_file3', pdfFiles.pdfFile3);
      formData.append('pdf_file4', pdfFiles.pdfFile4);
  
      const requestOptions = {
        method: 'POST',
        body: formData,
        // No need for redirect here, handle the response in the component
      };
  
      try {
        const response = await fetch('https://legalwebsite.pythonanywhere.com/api/UserOutput/', requestOptions);
        const result = await response.text();
        console.log(result);
        setQrcode(true);
  
        // Clear input fields after successful submission
        setEmail('');
        setPdfFiles({
          pdfFile1: null,
          pdfFile2: null,
          pdfFile3: null,
          pdfFile4: null,
        });
      } catch (error) {
        console.error('Error:', error);
        // Handle error, show the user a message, etc.
      }
    };
    const navigate = useNavigate();
    useEffect(() => {
      let timeoutId;
  
      if (showPaymentSuccess) {
       
        timeoutId = setTimeout(() => {
          setShowPaymentSuccess(false);
          navigate('/');
        }, 2000);
      }
  
      return () => clearTimeout(timeoutId);
    }, [showPaymentSuccess, navigate]);
  
   
  
  return (
    <>
       <>
     
      {qrcode ? (
         <div className="container mx-auto mt-10 rounded-sm">
          <img src={qr} alt="" className="mb-5 border border-sky-600" />
         <form className="max-w-md mx-auto">
           <div className="mb-4">
             <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
               Amount
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
             <label htmlFor="uTrNumber" className="block text-gray-700 text-sm font-bold mb-2">
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
             <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
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
             <label htmlFor="contactNo" className="block text-gray-700 text-sm font-bold mb-2">
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
        <form onSubmit={FileSubmit} className="max-w-md mx-auto">
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
            onChange={(e) => handleFileChange(e, 'pdfFile1')}
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
            onChange={(e) => handleFileChange(e, 'pdfFile2')}
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
            onChange={(e) => handleFileChange(e, 'pdfFile3')}
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
            onChange={(e) => handleFileChange(e, 'pdfFile4')}
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
      ) : (<div className="container mx-auto mt-8">
          <div className="">
          <form onSubmit={handleSubmit}>
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
            <div className="mt-5">
              <button
                type="submit"
                className="bg-[#8A4117] text-white px-4 py-2 rounded-[20px]"
              >
                GET CONSULTANCY
              </button>
            </div>
          </form>
        </div>
    </div>
      )}
       
    </>
   
    {showPaymentSuccess && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className="text-green-500 text-2xl font-semibold mb-4">Payment Successful!</p>
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
  )
}

export default Check