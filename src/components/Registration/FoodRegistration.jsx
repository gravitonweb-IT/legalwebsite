import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import qr from '../../assests/images/Qr/qrPayment.jpeg'
import FoodLiecenceImg from "../../assests/images/RegistrationImages/FoodLiecenceImg.png";
import patnership2 from "../../assests/images/Start BusinessImages/PatnerShipimages/patnershipregimg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faFlagCheckered,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHandshake,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { servieUrl } from "../../env/env";

const faqs = [
  {
    id: 1,
    question: "Q1. What is the importance of the Food License Registration?",
    answer:
      "The major importance of the FSSAI License is that it ensures that your food is verified chemically and hence is safe to consume.",
  },
  {
    id: 2,
    question: "Q2. What are the types of FSSAI License Registration?",
    answer:
      "Basic license: It is for firms with a yearly turnover of up to 12 lakh rupees. State license:  businesses with yearly revenue of between 12 lakh and 20 crores must obtain a state license. Central license: any business with a turnover of more than 20 crore is required to get a central license, as is any business that exports or imports.",
  },
  {
    id: 3,
    question: "Q3.  How can I get my FSSAI license renewed?",
    answer:
      " You must renew your food license before the validity of the FSSAI License expires to continue your operation. If your food license is about to expire, stay alert and remember that you must apply 30 days before the FSSAI license or registration expires.",
  },
  {
    id: 4,
    question:
      "Q4. What is the food license number?",
    answer:
      "The FSSAI license number is a 14-digit number on the food package label that contains information about the manufacturer, registration details, the FSSAI emblem, and the brand owner's license number. In the case of an imported food product, the importer must show the FSSAI logo and license number and the importer's name and address.",
  },
  {
    id: 5,
    question: "Q5.Companies require which type of FSSAI license to operate a food business in multiple states?",
    answer:
      "Depending on the capacity/turnover, food company operators operating in more than two states must get a central license for their registered office/head office and a separate license/registration for each unit from the relevant State/Central Licensing Authority.",
  },
  {
    id: 6,
    question:
      "Q6. What are the conditions under which an application will be rejected?",
    answer:
      "If the required information is not submitted within the time limit of 30 days, the Licensing Officer has the authority to refuse the application.",
  },
];
const FoodRegistration = () => {
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
            type: "Check Registration",
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

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      {/* section-1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 mx-5 md:mx-20 lg:mx-28 mt-24 md:mt-28">
        <div className="">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B70505]">
            Food Licence
          </h1>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            Elevate your Food Business Operator status by prioritizing consumer
            safety and satisfaction through high-quality standards. Obtain your
            food license conveniently from home, kickstarting your business
            journey. Register today to ensure compliance and trust, positioning
            your venture as a reliable and customer-centric establishment.
            Prioritize safety and quality as a Food Business Operator. Secure
            your food license from home, ensuring compliance and customer
            satisfaction to kickstart your business journey promptly.
          </p>
          <div className="mt-5">
            <button className="bg-[#8A4117] text-white px-4 py-3 rounded-[4px]">
              GET STARTED
            </button>
          </div>
        </div>

        <div className="grid grid:cols-1 sm:grid-cols-2 gap-5 border-4 mt-8 border-[#01355D] rounded-2xl p-5">
          <div className="">
          <>
     
     {qrcode ? (
        <div className="container mx-auto mt-10 rounded-sm">
         <img src={qr} alt="" className="mb-5 border border-sky-600" />
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
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
          </div>

          <div className="">
            <h1 className="text-center text-xl text-[#F89327] font-semibold">
              &#x20B9;690.00
            </h1>
            <img src={FoodLiecenceImg}></img>
          </div>
        </div>
      </div>

      {/* section-2 */}
      <div className="mt-10 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            className="pr-5 text-[#01355D] "
          />
          How To Apply
        </h1>
      </div>
      <div className="mt-10 md:mt-12 flex justify-center mx-5">
        <img src={patnership2} alt="" className="w-[100%] md:w-[50%] h-auto" />
      </div>

      {/* secton-3 */}
      <div className="mt-10 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faHandshake}
            className="pr-5 text-[#01355D] "
          />
          Benefits
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 mx-5 md:mx-20 lg:mx-28 mt-10 md:mt-14">
        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Saving More Money</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Ease of business</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Increase in Revenue</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Simple & Easy Procedure</h1>
        </div>

        <div className="bg-white shadow-2xl  p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Consumer Awareness</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Legal Advantage</h1>
        </div>

        <div className="bg-white shadow-2xl  p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">FSSAI logo</h1>
        </div>

        <div className="bg-white shadow-lg p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Business Expansion</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Food Security</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Easier Import/Export</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Increase Trustworthiness</h1>
        </div>
      </div>

      {/* section-4  desktop*/}
      <div className="mt-12 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faRegistered}
            className="pr-5 text-[#01355D] "
          />
          Registration Process
        </h1>
      </div>
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mx-5 md:mx-20 lg:mx-24 xl:mx-28 mt-5 md:mt-14">
          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              To keep you safe, our team will analyze the documents you've
              submitted, looking for any misleading or incorrect information.
            </p>
          </div>

          <div class="flex justify-center items-center col-span-3">
            <div class="border-t-4 border-dashed border-yellow-600 w-[40%] xl:w-[70%]"></div>
            <div class="w-4 h-4 border-t-4 border-r-4 border-yellow-600 transform rotate-45"></div>
          </div>

          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              Our best FSSAI professionals are here to help you with document
              requirements and licensing requirements.
            </p>
          </div>

          <div class="flex justify-center items-center col-span-3">
            <div class="border-t-4 border-dashed border-yellow-600  w-[40%] xl:w-[70%]"></div>
            <div class="w-4 h-4 border-t-4 border-r-4 border-yellow-600 transform rotate-45"></div>
          </div>

          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium ">
              The relevant expert will review your documents to apply for your
              food license.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mx-5 md:mx-20 lg:mx-24 xl:mx-28  mt-5">
          <div className="col-span-4"></div>
          <div className="col-span-4"></div>
          <div className="col-span-2"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1 relative">
            <div className="relative h-20">
              <div className="absolute top-0 left-1/8 transform -translate-x-1/8 border-t-4 border-b-4 border-l-4 border-dashed border-yellow-600 h-full w-0"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mx-5 md:mx-20 lg:mx-24 xl:mx-28  mt-5">
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
          <div class="col-span-3"> </div>
          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              Your company will be registered with the FSSAI if the application
              is approved.
            </p>
          </div>
          <div class="flex  justify-center items-center col-span-3">
            <div class="w-4 h-4 border-t-4 border-l-4 border-yellow-600 transform -rotate-45"></div>
            <div class="border-t-4 border-dashed border-yellow-600  w-[40%] xl:w-[70%]"></div>
          </div>
          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              It would be best to wait until our expert contacts you to inform
              you that your license has been issued.
            </p>
          </div>
        </div>
      </div>

      {/* mobile-responsive */}

      <div className="block lg:hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mx-5 md:mx-20 lg:mx-28 mt-5 md:mt-14">
          <div className="col-span-2 flex items-center justify-center">
            <div className="bg-white border-4 border-[#01355D] rounded-full w-52 h-52 flex items-center justify-center p-8">
              <p className="text-center text-xs font-medium">
                To keep you safe, our team will analyze the documents you've
                submitted, looking for any misleading or incorrect information.
              </p>
            </div>
          </div>

          <div className="col-span-3 relative">
            <div className="relative h-10 flex items-center justify-center">
              <div className="absolute top-0 right-1/10 transform -translate-x-1/2 border-t-4 border-b-4 border-l-4 border-dashed border-yellow-600 h-full w-0"></div>
            </div>
          </div>

          <div className="col-span-2 flex items-center justify-center">
            <div className="bg-white border-4 border-[#01355D] rounded-full w-52 h-52 flex items-center justify-center p-8">
              <p className="text-center text-xs font-medium">
                Our best FSSAI professionals are here to help you with document
                requirements and licensing requirements.
              </p>
            </div>
          </div>

          <div className="col-span-3 relative">
            <div className="relative h-10 flex items-center justify-center">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-t-4 border-b-4 border-l-4 border-dashed border-yellow-600 h-full w-0"></div>
            </div>
          </div>

          <div className="col-span-2 flex items-center justify-center">
            <div className="bg-white border-4 border-[#01355D] rounded-full w-52 h-52 flex items-center justify-center p-8">
              <p className="text-center text-xs font-medium">
                The relevant expert will review your documents to apply for your
                food license.
              </p>
            </div>
          </div>

          <div className="col-span-3 relative">
            <div className="relative h-10 flex items-center justify-center">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-t-4 border-b-4 border-l-4 border-dashed border-yellow-600 h-full w-0"></div>
            </div>
          </div>

          <div className="col-span-2 flex items-center justify-center">
            <div className="bg-white border-4 border-[#01355D] rounded-full w-52 h-52 flex items-center justify-center p-8">
              <p className="text-center text-xs font-medium">
                Your company will be registered with the FSSAI if the
                application is approved.
              </p>
            </div>
          </div>

          <div className="col-span-3 relative">
            <div className="relative h-10 flex items-center justify-center">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-t-4 border-b-4 border-l-4 border-dashed border-yellow-600 h-full w-0"></div>
            </div>
          </div>

          <div className="col-span-2 flex items-center justify-center">
            <div className="bg-white border-4 border-[#01355D] rounded-full w-52 h-52 flex items-center justify-center p-8">
              <p className="text-center text-xs font-medium">
                It would be best to wait until our expert contacts you to inform
                you that your license has been issued.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section-5 */}
      <div className="mt-10 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="pr-5 text-[#01355D] "
          />
          Faq's
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-5 md:mx-20 lg:mx-28 mt-10">
        {faqs.map((faq) => (
          <div key={faq.id} className="p-4">
            <div
              className="border-2 border-gray-300 p-4 cursor-pointer flex justify-between items-center rounded-[4px]"
              onClick={() => toggleFAQ(faq.id)}
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <span className="text-gray-500">
                {openId === faq.id ? (
                  <i className="fas fa-minus" />
                ) : (
                  <i className="fas fa-plus" />
                )}
              </span>
            </div>
            {openId === faq.id && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodRegistration;
