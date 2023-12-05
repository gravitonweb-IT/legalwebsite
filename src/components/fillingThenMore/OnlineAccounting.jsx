import React, { useState } from "react";
import onlineimage from "../../assests/images/filing and more/onlineaccounting.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import patnership2 from "../../assests/images/Start BusinessImages/PatnerShipimages/patnershipregimg.png";

const OnlineAccounting = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
    console.log("Form Data:", formData);
    // You can perform additional actions here, such as sending data to a server

    // Reset the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
    });
  };

  const [showForm, setShowForm] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };
  const openForm1 = () => {
    setShowForm1(true);
  };
  const openForm2 = () => {
    setShowForm2(true);
  };
  const openForm3 = () => {
    setShowForm3(true);
  };
  return (
    <>
      {/* section-1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-14 mx-5 md:mx-20 lg:mx-28 mt-24 md:mt-28">
        <div className="">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B70505]">
            Online Accounting
          </h1>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            Seeking individualized services combined with expertise? Look no
            further! Our online accounting services cater to business owners and
            independent professionals. Count on our unparalleled experience and
            dedicated team for your success. Trust us as your ideal accounting
            solution.
          </p>
          <p className="text-md xl:text-lg font-medium mt-5 text-justify">
            For business owners and professionals, our online accounting
            services offer tailored solutions and unmatched expertise. Rely on
            our dedicated team for unparalleled experience and your success.
          </p>
          <div className="mt-5">
            <button className="bg-[#8A4117] text-white px-4 py-3 rounded-[4px]">
              GET STARTED
            </button>
          </div>
        </div>

        <div className="flex justify-center  ">
          <img src={onlineimage} className=" w-[80%] md:w-[65%] h-auto "></img>
        </div>
      </div>

      {/* section-2 */}
      <div className="mt-10 md:mt-16 flex justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            className="pr-5 text-[#01355D] "
          />
          Plans
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 md:mx-28 lg:mx-52 xl:mx-96 mt-5 md:mt-12">
    

        <div className="bg-[#FBB03B]   rounded-xl shadow-lg p-3">
          <h1 className="text-white text-center font-semibold text-xl md:text-2xl ">
            BASIC
          </h1>
          <div className="bg-white  rounded-lg  p-7 mt-3">
            <div className=" ">
              {!showForm1 ? (
                <div className="">
                  <h2 className="text-xl font-bold mb-4">Tenure Options</h2>
                  <div className="text-center">
                    <button
                      onClick={openForm1}
                      className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                    >
                      GET STARTED
                    </button>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold">Requirements:</h3>
                    <p>
                      - GSTR - 3B Excel file
                      <br />- GSTR - 1 File or Normal Excel file of Sales &
                      Purchase
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold">Inclusions:</h3>
                    <p>
                      - E-way bill facility
                      <br />
                      -Dashboard for managing service
                      <br />
                      - Mobile application support
                      <br />
                      -Documents sharing facility
                      <br />
                      - Download deliverables any timeg
                      <br />
                      - Password sharing
                      <br />
                      - Round the clock support
                      <br />- Time to time updates & notifications
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-4">
                  {/* This is where your form or content will be displayed */}
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
                        className="bg-[#FBB03B] text-white px-4 py-2 rounded-[20px]"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#B70505]   rounded-xl shadow-lg p-3">
          <h1 className="text-white text-center font-semibold text-xl md:text-2xl ">
            PRO
          </h1>
          <div className="bg-white  rounded-lg  p-5 mt-3">
            <div className=" ">
              {!showForm2 ? (
                <div className="">
                  <h2 className="text-xl font-bold mb-4">Tenure Options</h2>
                  <div className="text-center">
                    <button
                      onClick={openForm2}
                      className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                    >
                      GET STARTED
                    </button>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold">Requirements:</h3>
                    <p>- Sales & Purchase Invoices</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Inclusions:</h3>
                    <p>
                      - GSTR-2A Reconciliation mismatch report
                      <br />
                      - Included data preparation (on basis of Invoices)
                      <br />
                      -Dashboard for managing service
                      <br />
                      - Mobile application support
                      <br />
                      -Documents sharing facility
                      <br />
                      -Download deliverables any time
                      <br />
                      - Password sharing
                      <br />
                      - Round the clock support
                      <br />- Time to time updates & notifications
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-4">
                  {/* This is where your form or content will be displayed */}
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
                        className="bg-[#B70505] text-white px-4 py-2 rounded-[20px]"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

       
      </div>

      {/* section-3 */}
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
    </>
  );
};

export default OnlineAccounting;
