import React, { useState } from "react";
import patnership2 from "../../assests/images/Start BusinessImages/PatnerShipimages/patnershipregimg.png";
import Dissolve from "../../assests/images/DissolveImg/Dissolution.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faFlagCheckered,
  faRegistered,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHandshake,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faSquarespace } from "@fortawesome/free-brands-svg-icons";
import whyChoose1 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose1.svg";
import whyChoose2 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose2.svg";
import whyChoose3 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose3.svg";
import whyChoose4 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose4.svg";
import whyChoose5 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose5.svg";
import whyChoose6 from "../../assests/images/Start BusinessImages/PatnerShipimages/why-choose6.svg";

const faqs = [
  {
    id: 1,
    question:
      "Q1. What are the ways of dissolving a Partnership Firm?",
    answer:
      "The ways of dissolving a Partnership Firm are: Dissolution by Mutual Consent ,Dissolution by Notice ,Dissolution by Court ,Compulsory Dissolution ,Dissolution Due to Contingencies",
  },
  {
    id: 2,
    question:
      "Q2. Which section says a court may dissolve a partnership?",
    answer:
      "Section 44 provides the grounds on which a court may dissolve a partnership..",
  },
  {
    id: 3,
    question: "Q3. What does it mean by Dissolution by Court?",
    answer:
    "Dissolution by court involves legal intervention, adjudicating disputes or misconduct, and ordering partnership termination.",
  },
  {
    id: 4,
    question: "Q4. Who Is Responsible after Dissolution?",
    answer:
      "The partners are liable for any act/occurrence after Dissolution except the ones who are insolvent/dead.",
  },
  {
    id: 5,
    question:
      "Q5. Is a firm dissolved when all partners give consent to it?",
    answer:
      "Mutual consent is the best and most straightforward way to dissolve a partnership firm.",
  },
  {
    id: 6,
    question:
      "Q6. What is Compulsory Dissolution?",
    answer:
      
"Compulsory dissolution is mandated by law due to bankruptcy, illegality, or irreconcilable issues in partnerships.",
  },
];

const DissolutionOfDeed = () => {
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
    console.log("Form Data:", formData);

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
      <>
        {/* section-1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 mx-5 md:mx-20 lg:mx-28 mt-24 md:mt-28">
          <div className="">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B70505]">
              Dissolution Of Deeds
            </h1>
            <p className="text-md xl:text-lg font-medium mt-5 text-justify">
              Dissolution of deeds involves the formal termination or
              nullification of legal documents, such as contracts, agreements,
              or partnerships. It requires careful review, mutual consent, and
              adherence to legal procedures. The process may include revoking
              rights, cancelling obligations, and transferring assets.
              <p className="text-md xl:text-lg font-medium mt-5 text-justify">
                Nullifying contracts, revoking agreements, terminating
                partnerships; dissolving deeds involves legal processes for
                canceling, ending, and officially nullifying commitments and
                obligations.
              </p>
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
                    id="phone"
                    name="phone"
                    required
                    placeholder="Contact No"
                    className="py-2 border-b-2 border-slate-400 px-5 w-full"
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

            <div className="">
              <h1 className="text-center text-xl text-[#F89327] font-semibold">
                &#x20B9;1351.00
              </h1>
              <img src={Dissolve}></img>
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
          <img
            src={patnership2}
            alt=""
            className="w-[100%] md:w-[50%] h-auto"
          />
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
            <h1 className="mt-3 text-center">Removal of Partners</h1>
          </div>

          <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
            <div className=" text-center">
              <FontAwesomeIcon
                icon={faFlagCheckered}
                className="w-10 h-10 text-yellow-500"
              />
            </div>
            <h1 className="mt-3 text-center">Sharing Profits</h1>
          </div>

          <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
            <div className=" text-center">
              <FontAwesomeIcon
                icon={faFlagCheckered}
                className="w-10 h-10 text-yellow-500"
              />
            </div>
            <h1 className="mt-3 text-center">Avoid Legal Proceedings</h1>
          </div>

          <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
            <div className=" text-center">
              <FontAwesomeIcon
                icon={faFlagCheckered}
                className="w-10 h-10 text-yellow-500"
              />
            </div>
            <h1 className="mt-3 text-center">Regulates Liabilities & Duties</h1>
          </div>

          <div className="bg-white shadow-2xl  p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
            <div className=" text-center">
              <FontAwesomeIcon
                icon={faFlagCheckered}
                className="w-10 h-10 text-yellow-500"
              />
            </div>
            <h1 className="mt-3 text-center">Protects Rights</h1>
          </div>

          <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
            <div className=" text-center">
              <FontAwesomeIcon
                icon={faFlagCheckered}
                className="w-10 h-10 text-yellow-500"
              />
            </div>
            <h1 className="mt-3 text-center">
              Effective & Clear Communication
            </h1>
          </div>

          <div className="bg-white shadow-lg p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
            <div className=" text-center">
              <FontAwesomeIcon
                icon={faFlagCheckered}
                className="w-10 h-10 text-yellow-500"
              />
            </div>
            <h1 className="mt-3 text-center">Time-Saving</h1>
          </div>

          <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
            <div className=" text-center">
              <FontAwesomeIcon
                icon={faFlagCheckered}
                className="w-10 h-10 text-yellow-500"
              />
            </div>
            <h1 className="mt-3 text-center">Avoid Mistakes</h1>
          </div>

          <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
            <div className=" text-center">
              <FontAwesomeIcon
                icon={faFlagCheckered}
                className="w-10 h-10 text-yellow-500"
              />
            </div>
            <h1 className="mt-3 text-center">Easy Settlements</h1>
          </div>

          <div className="bg-white shadow-2xl p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
            <div className=" text-center">
              <FontAwesomeIcon
                icon={faFlagCheckered}
                className="w-10 h-10 text-yellow-500"
              />
            </div>
            <h1 className="mt-3 text-center">Assigning Outstanding Debts</h1>
          </div>

          <div className="bg-white shadow-2xl  p-5 rounded-[12px] cursor-pointer hover:border-[#F89327] border-2 border-transparent transition duration-300">
            <div className=" text-center">
              <FontAwesomeIcon
                icon={faFlagCheckered}
                className="w-10 h-10 text-yellow-500"
              />
            </div>
            <h1 className="mt-3 text-center">Avoid State Default Rules</h1>
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
                Our legal aces will carefully review all the documents provided
                by you to avoid mistakes.
              </p>
            </div>

            <div class="flex justify-center items-center col-span-3">
              <div class="border-t-4 border-dashed border-yellow-600 w-[40%] xl:w-[70%]"></div>
              <div class="w-4 h-4 border-t-4 border-r-4 border-yellow-600 transform rotate-45"></div>
            </div>

            <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
              <p className="text-center text-xs font-medium">
                Our best advocates are here to help you with document
                requirements and licensing necessities.
              </p>
            </div>

            <div class="flex justify-center items-center col-span-3">
              <div class="border-t-4 border-dashed border-yellow-600  w-[40%] xl:w-[70%]"></div>
              <div class="w-4 h-4 border-t-4 border-r-4 border-yellow-600 transform rotate-45"></div>
            </div>

            <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
              <p className="text-center text-xs font-medium ">
                The respective professional will move further with your
                documents to apply for your Dissolution of Deed registration.
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
                The Registrar of Firm (RoF) will verify the application along
                with the NOC provided by all the firm's partners.
              </p>
            </div>
            <div class="flex  justify-center items-center col-span-3">
              <div class="w-4 h-4 border-t-4 border-l-4 border-yellow-600 transform -rotate-45"></div>
              <div class="border-t-4 border-dashed border-yellow-600  w-[40%] xl:w-[70%]"></div>
            </div>
            <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
              <p className="text-center text-xs font-medium">
                We will share the Application number with you through which you
                can track your Dissolution of Deed Registration status.
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
                  Our legal aces will carefully review all the documents
                  provided by you to avoid mistakes.
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
                  Our best advocates are here to help you with document
                  requirements and licensing necessities.
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
                  The respective professional will move further with your
                  documents to apply for your Dissolution of Deed registration.
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
                  The Registrar of Firm (RoF) will verify the application along
                  with the NOC provided by all the firm's partners.
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
                  We will share the Application number with you through which
                  you can track your Dissolution of Deed Registration status.
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

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-5 md:mx-20 lg:mx-28 mt-10">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="p-4 border-2 border-gray-300 rounded-[4px]"
          >
            <div
              className="cursor-pointer flex justify-between items-center"
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
            <div
              style={{ visibility: openId === faq.id ? "visible" : "hidden" }}
              className="text-gray-700 mt-2"
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div> */}

        {/* section-6 */}
        <div className="mt-10 md:mt-16 flex justify-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#01355D]">
            <FontAwesomeIcon
              icon={faSquarespace}
              className="pr-5 text-[#01355D] "
            />
            Why Choose Us?
          </h1>
        </div>

        <div className="why-choose-image mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-16 mx-5 md:mx-20 lg:mx-28 pt-12 lg:pt-20 pb-10">
            <div className="text-white">
              <div className="flex justify-center">
                <img src={whyChoose1} alt="" className=" md:w-[40%] h-auto" />
              </div>
              <h1 className="mt-3 text-center text-xl font-semibold">
                Growth & Improvement
              </h1>
              <p className="mt-2 text-center">
                We believe in growth and improvement at all costs. For us,
                growth is the law of life and it shall be fulfilled. We know the
                importance of business and its growth for you.
              </p>
            </div>

            <div className="text-white">
              <div className="flex justify-center">
                <img src={whyChoose2} alt="" className=" md:w-[35%] h-auto" />
              </div>
              <h1 className="mt-3 text-center text-xl font-semibold">
                Support & Availability
              </h1>
              <p className="mt-2 text-center">
                We feel how much pain even a small problem or query can cause,
                that is the reason we are available to support you and solve any
                of such problems at every particular instance in time.
              </p>
            </div>

            <div className="text-white">
              <div className="flex justify-center">
                <img src={whyChoose3} alt="" className=" md:w-[30%] h-auto" />
              </div>
              <h1 className="mt-3 text-center text-xl font-semibold">
                Experienced Team
              </h1>
              <p className="mt-2 text-center">
                All the members of our team are experienced individuals who
                believe in professionalism and customer satisfaction above all.
                Each one of them is passionate in their respective fields.
              </p>
            </div>

            <div className="text-white">
              <div className="flex justify-center">
                <img src={whyChoose4} alt="" className=" md:w-[35%] h-auto" />
              </div>
              <h1 className="mt-3 text-center text-xl font-semibold">Focus</h1>
              <p className="mt-2 text-center">
                Any assigned task is of utmost importance to us, that's why our
                team members are always focused on taking care of even the
                smallest of our clients' needs and requirements.
              </p>
            </div>

            <div className="text-white">
              <div className="flex justify-center">
                <img src={whyChoose5} alt="" className=" md:w-[35%] h-auto" />
              </div>
              <h1 className="mt-3 text-center text-xl font-semibold">
                Value For Money
              </h1>
              <p className="mt-2 text-center">
                We understand that the money being spent is hard-earned,
                therefore we utilize every single penny that you pay us in the
                most effective way possible hence providing the best value for
                money.
              </p>
            </div>

            <div className="text-white">
              <div className="flex justify-center">
                <img src={whyChoose6} alt="" className=" md:w-[35%] h-auto" />
              </div>
              <h1 className="mt-3 text-center text-xl font-semibold">
                Care & Regards
              </h1>
              <p className="mt-2 text-center">
                We believe you to be a part of this family and that all your
                problems, as well as achievements, are our very own. Your
                interests are ours and their fulfillment is at the top in our
                regards.
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default DissolutionOfDeed;
