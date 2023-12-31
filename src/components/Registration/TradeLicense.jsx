import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import qr from '../../assests/images/Qr/qrPayment.jpeg'
import TradeImg from "../../assests/images/RegistrationImages/TradeImg.png";
import patnership2 from "../../assests/images/Start BusinessImages/PatnerShipimages/patnershipregimg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { servieUrl } from "../../env/env";
import {
  faCircleQuestion,
  faFlagCheckered,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHandshake,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";

const faqs = [
  {
    id: 1,
    question: "Q1. How To Register For A Trade Licence Online?",
    answer:
      "It is essential for every business that carries out a trade to have a Trade Licence. You can use the Legal257 app or web to get this registration done at the local municipality quickly.",
  },
  {
    id: 2,
    question: "Q2.  How long does it take to get a trade licence?",
    answer:
      "From the time you apply, Legal 257 will assist you in obtaining your trade licence in 5-10 working days.",
  },
  {
    id: 3,
    question: "Q3. Is it required to renew a business licence?",
    answer:
      "Yes, the government has made renewing this licence a necessity every year. Failure to submit the renewal may result in a penalty or fine. ",
  },
  {
    id: 4,
    question: "Q4.  Do I require a Trade Licence to operate a restaurant?",
    answer:
      "Yes, regardless of what area of the business you're in, you'll need a Trade Licence. This licence is required for every business that trades goods or services for money, and a Food Establishment licence is necessary for a restaurant.",
  },
  {
    id: 5,
    question: "Q5. When may I apply for a trade licence?",
    answer:
      "It is possible to apply for it 30 days before starting your business.",
  },
  {
    id: 6,
    question: "Q6. When will I be able to renew my trade licence?",
    answer:
      "In India, trade licences are renewed from January 1 to March 31. The renewal application must be submitted within thirty days of the license's expiration date. The following are the documents that must be supplied to renew your licence: A copy of the trade licence; challans from the previous year; and a receipt for current property taxes paid.",
  },
];
const TradeLicense = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=Z9nseXk0218jRsyMVwAhHRYLPsrUDGZf");
    
    var raw = JSON.stringify({
      "firstName": formData.firstName,
      "email": formData.email,
      "contactNo": formData.phone,
      "city": formData.city,
      "type": "Trade License"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(servieUrl.url + "api/all-pages-api/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    // You can perform additional actions here, such as sending data to a server

    // Reset the form
    setFormData({
      firstName: "",
      email: "",
      phone: "",
      city: "",
    });
  };
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
            Trade Licence
          </h1>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            Embarking on a new business venture? Start with the essential
            paperwork – the Trade Licence. Legal257's expert team ensures a
            seamless application process, enabling you to focus on your business
            operations hassle-free. Let us guide you through the procedure,
            ensuring a smooth and efficient start to your entrepreneurial
            journey. Commence your business journey by obtaining a Trade Licence.
            Legal257's expert team simplifies the application process, allowing
            you to focus on your work seamlessly and efficiently.
          </p>
         
          <div className="mt-5">
            <button className="bg-[#8A4117] text-white px-4 py-3 rounded-[4px]">
              GET STARTED
            </button>
          </div>
        </div>

        <div className="grid grid:cols-1 sm:grid-cols-2 gap-5 border-4 mt-8 border-[#01355D] rounded-2xl p-5">
          <div className="">
            <form onSubmit={handleSubmit}>
              <p>
                <input
                  type="text"
                  id="firstname"
                  required
                  name="firstName"
                  placeholder="First Name"
                  className="py-2 border-b-2 border-slate-400 px-5"
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
                  className="py-2 border-b-2 border-slate-400 px-5"
                  value={formData.email}
                  onChange={handleChange}
                />
              </p>
              <p className="mt-3">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Contact No"
                  className="py-2 border-b-2 border-slate-400 px-5"
                  value={formData.phone}
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
                  className="py-2 border-b-2 border-slate-400 px-5"
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

          <div className="">
            <h1 className="text-center text-xl text-[#F89327] font-semibold">
              &#x20B9;851.00
            </h1>
            <img src={TradeImg} className="w-3/4 h-auto"></img>
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
          <h1 className="mt-3 text-center">Easy Financial Aids</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Increased Goodwill</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Motivates Investors</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Lesser Legal Confrontations</h1>
        </div>

        <div className="bg-white shadow-2xl  p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Discourages Unethical Practices</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Intact Safety Measures</h1>
        </div>

        <div className="bg-white shadow-2xl  p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Avert Exploitation of Workers</h1>
        </div>

        <div className="bg-white shadow-lg p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Fairtrade practices</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Protect Consumer's Interest</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Aids Business Growth</h1>
        </div>

        <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
          <div className=" text-center">
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="w-10 h-10 text-yellow-500"
            />
          </div>
          <h1 className="mt-3 text-center">Escalate Credibility</h1>
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
              Our team will analyze the documents you've submitted to avoid any
              discrepancy, looking for any misleading or incorrect information.
            </p>
          </div>

          <div class="flex justify-center items-center col-span-3">
            <div class="border-t-4 border-dashed border-yellow-600 w-[40%] xl:w-[70%]"></div>
            <div class="w-4 h-4 border-t-4 border-r-4 border-yellow-600 transform rotate-45"></div>
          </div>

          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              Our best professionals are here to help you with document and
              licensing requirements as required by the state or central
              department.
            </p>
          </div>

          <div class="flex justify-center items-center col-span-3">
            <div class="border-t-4 border-dashed border-yellow-600  w-[40%] xl:w-[70%]"></div>
            <div class="w-4 h-4 border-t-4 border-r-4 border-yellow-600 transform rotate-45"></div>
          </div>

          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium ">
              The relevant expert will review your documents to apply for your
              trade licence.
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
              If the application is approved, your business or trade will be
              registered with the municipality or municipal corporation.
            </p>
          </div>
          <div class="flex  justify-center items-center col-span-3">
            <div class="w-4 h-4 border-t-4 border-l-4 border-yellow-600 transform -rotate-45"></div>
            <div class="border-t-4 border-dashed border-yellow-600  w-[40%] xl:w-[70%]"></div>
          </div>
          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              It's recommended to wait until one of our experts contacts you to
              let you know your licence has been issued.
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
                Our team will analyze the documents you've submitted to avoid
                any discrepancy, looking for any misleading or incorrect
                information.
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
                Our best professionals are here to help you with document and
                licensing requirements as required by the state or central
                department.
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
                trade licence.
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
                If the application is approved, your business or trade will be
                registered with the municipality or municipal corporation.
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
                It's recommended to wait until one of our experts contacts you
                to let you know your licence has been issued.
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

export default TradeLicense;
