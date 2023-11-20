import React, { useState } from "react";
// import image1 from "../../assests/images/PrivateImage/limited-liability.svg";
const ParternLtdCompanyRegisteration = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    cityDistrict: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* 1st part start */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 sm:mx-10 md:mx-20 lg:mx-32 mt-5 md:mt-18 lg:mt-20">
        <div>
          <h1 className="font-open-sans text-4xl font-extrabold text-gray-700 leading-13">
            Pvt. Ltd. Company Registration
          </h1>
          <p className="text-base md:text-base lg:text-md xl:text-lg text-[#525252] font-normal">
            Get ready to turn your business dream into reality by registering
            your Private Limited Company (Pvt. Ltd.). This type of company
            provides a safety net, so your personal assets are protected if
            something goes wrong in the business. The process involves choosing
            a unique name, preparing some documents, and filing them with the
            government.
          </p>

          <p className="text-base md:text-base lg:text-md xl:text-lg text-[#525252] font-normal mt-2">
            The perks of going Pvt. Ltd. include reduced personal risk, a
            separate legal identity, and the company can keep going even if
            people involved change. You need at least two directors and two
            shareholders, and even people from other countries can join in.
            We're here to guide you through this, ensuring a smooth process.
            Ready to start? Contact us today, and let's make your Pvt. Ltd.
            Company happen!
          </p>
        </div>
        <div className="">
          <div className="max-w-md mx-auto p-6 bg-white border rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Get Quote Instantly</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Contact
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cityDistrict"
                  className="block text-sm font-semibold text-gray-600"
                >
                  City/District
                </label>
                <input
                  type="text"
                  id="cityDistrict"
                  name="cityDistrict"
                  value={formData.cityDistrict}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mx-auto"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* 1st part end */}

      {/* 2nd part start */}
      <div className="flex justify-center items-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 justify-center items-center shadow-xl rounded-lg p-10">
          {/* Column 1 */}
          <div className="flex  p-2 w-[202px]">
            <div>
              <img
                src="https://legal251.com/images/companyregimage/employee-experience.png"
                className="w-[63px]"
                alt=""
              />
            </div>
            <div className="ml-4">
              <p className="font-sans font-bold text-2xl  mt-0">
                <span className="counter-value" data-count="10">
                  10 Years
                </span>
              </p>
              <p className="text-medium font-sans font-semibold text-gray-500 mt-0">
                Of Experience
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex  p-2 w-[202px]">
            <div>
              <img
                src="https://legal251.com/images/companyregimage/case-report.png"
                className="w-[63px]"
                alt=""
              />
            </div>
            <div className="ml-4">
              <p className="font-sans font-bold text-2xl  mt-0">
                <span className="counter-value" data-count="10">
                  5000
                </span>
                +
              </p>
              <p className="text-medium font-sans font-semibold text-gray-500 mt-0">
                Cases Solved
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex  p-2 w-[202px]">
            <div>
              <img
                src="https://legal251.com/images/companyregimage/gold-cup.png"
                className="w-[63px]"
                alt=""
              />
            </div>
            <div className="ml-4">
              <p class="font-sans font-bold text-2xl  mt-0">
                <span class="counter-value" data-count="15">
                  15
                </span>
                +
              </p>
              <p className="text-medium font-sans font-semibold text-gray-500 mt-0">
                Awards Gained
              </p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex  p-2 w-[202px]">
            <div>
              <img
                src="https://legal251.com/images/companyregimage/users.png"
                className="w-[63px]"
                alt=""
              />
            </div>
            <div className="ml-4">
              <p class="font-sans font-bold text-2xl  mt-0">
                <span class="counter-value" data-count="200">
                  200
                </span>
                k +
              </p>
              <p className="text-medium font-sans font-semibold text-gray-500 mt-0">
                Trusted Clients
              </p>
            </div>
          </div>

          {/* Column 5 */}
          <div className="flex  p-2 w-[202px]">
            <div>
              <img
                src="https://legal251.com/images/companyregimage/customer.png"
                className="w-[63px]"
                alt=""
              />
            </div>
            <div className="ml-2">
              <p className=" font-sans font-bold text-2xl  mt-0">
                <span className="counter-value" data-count="50">
                  50
                </span>
                k+
              </p>
              <p className="text-medium font-sans font-semibold text-gray-500 mt-0">
                Queries Solved
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd part end */}

      {/* 3rd part start */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  mt-5 md:mt-18 sm:mx-10 md:mx-20 lg:mx-32 lg:mt-20 ">
        <div className="">
          <img
            src="https://www.3ecpa.co.in/wp-content/uploads/2020/10/photo-legal-obligations-of-a-private-limited-company-1200x630-2.jpg"
            alt="lmt"
            className="mt-10"
          />
        </div>
        <div>
          <p className="text-base md:text-base lg:text-md xl:text-lg text-[#525252] font-normal">
            Grow your business! Register it as a Private Limited Company with
            complete legal protection. A Private Limited Company is a company
            privately held for small businesses. This business entity limits
            owner liability to their shareholdings and the number of
            shareholders to 200 and restricts shareholders from publicly trading
            shares. It can have a minimum of 2 Directors and a maximum of 15
            Directors. Private limited company registration is governed by the
            Companies Act of 2013 and the Companies Incorporation Rules of 2014.
          </p>

          <p className="text-base md:text-base lg:text-md xl:text-lg text-[#525252] font-normal mt-2">
            We offer a complete package with easy documentation, fast
            registration, and a hassle-free experience – so you can focus on
            building and growing your business. Register your private limited
            company today and start enjoying the benefits of a registered
            business name!
          </p>
        </div>
      </div>
      {/* 3rd part end */}

      {/* 4th part start */}
      {/* <div class="flex items-center justify-center">
        <p class="servicehrheading flex items-center mt-10 mx-auto text-center relative z-2 font-roboto font-bold text-5xl  bg-white leading-none pl-16 ">
          <img
            src="https://legal251.com/images/companyregimage/img.svg"
            class="Howtoapplyimage mr-2"
          />
          Comparison
        </p>
      </div> */}

      {/* 4th part end */}

      {/* 5th part start*/}
      <div class="flex items-center justify-center">
        <p class="servicehrheading flex items-center mt-10 mx-auto text-center relative z-2 font-roboto font-bold text-5xl  bg-white leading-none pl-16 ">
          <img
            src="https://legal251.com/images/services/question.svg"
            class="Howtoapplyimage mr-2"
          />
          How to apply
        </p>
      </div>
      <div className="grid place-items-center ">
        <img
          src="https://legal251.com/images/gstregistration/Private-Limited-Company-Registration@2x.png"
          alt="Company Registration"
          className="w-full sm:w-2/3 md:w-1/2 lg:w-5/3 mt-10"
        />
      </div>
      {/* 5th part end */}

      {/* 6th part  start*/}
      <div class="flex items-center justify-center">
        <p class="servicehrheading flex items-center mt-10 mx-auto text-center relative z-2 font-roboto font-bold text-5xl  bg-white leading-none pl-16 ">
          <img
            src="https://legal251.com/images/services/registration.svg"
            class="Benefits mr-2"
          />
          Registration Process
        </p>
      </div>
      <div class="" style={{ marginTop: "0px" }}>
        <center>
          <img
            src="https://legal251.com/images/companyregimage/pvtl-image.png"
            class="minimumreqdivimg1 dregprocessimg"
          />
        </center>
      </div>

      {/* 6th part end */}
    </>
  );
};

export default ParternLtdCompanyRegisteration;
