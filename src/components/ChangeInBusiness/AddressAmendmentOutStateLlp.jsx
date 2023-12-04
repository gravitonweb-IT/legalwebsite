import React, { useState } from "react";
import patnership2 from "../../assests/images/Start BusinessImages/PatnerShipimages/patnershipregimg.png";
import LLPartnership from "../../assests/images/AddressLLp/LLPartnership.png";
import Benchmarking from "../../assests/images/CmaImg/Benchmarking.png";
import Competitive from "../../assests/images/CmaImg/Competitive.png";
import Compliance from "../../assests/images/CmaImg/Compliance.png";
import Cost from "../../assests/images/CmaImg/Cost.png";
import Enhanced from "../../assests/images/CmaImg/Enhanced.png";
import LegalRegulatory from "../../assests/images/CmaImg/LegalRegulatory.png";
import Performace1 from "../../assests/images/CmaImg/Performace1.png";
import Transoarency from "../../assests/images/CmaImg/Transoarency.png";
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
    question: "How do I submit the LLP address amendment application?",
    answer:
      "Yes, you can choose any valid address within the new state where you plan to operate your LLP.",
  },
  {
    id: 2,
    question: "Q2. Can I update the address to any location in the new state?",
    answer:
      "The applicable fees vary depending on the authorised capital of your LLP. You can find the exact fee amount on the MCA website or consult with the RoC.",
  },
  {
    id: 3,
    question:
      "Q3.  What happens if I need to update the LLP address when moving out of state?",
    answer:
      "Please update the address to avoid penalties, non-compliance issues, and difficulties receiving important correspondence or notices from government authorities in the new state.",
  },
  {
    id: 4,
    question:
      "Q4. Can I seek professional assistance for the LLP address amendment (out of state) process?",
    answer:
      "It is highly recommended to consult with a qualified chartered accountant or company secretary who can provide guidance, ensure compliance, and assist with the necessary paperwork to make the process smoother and error-free.",
  },
  {
    id: 5,
    question: "Q5. What happens after the LLP address amendment is approved?",
    answer:
      "Upon approval, the RoC updates the LLP's address in its records, ensuring that official communication is directed to the correct location in the new state.",
  },
  {
    id: 6,
    question:
      "Q6. How long does processing the LLP address amendment application take?",
    answer:
      "The processing time varies based on the workload of the RoC and the accuracy of the submitted documents. It can range from a few days to a few weeks.",
  },
];

const AddressAmendmentOutStateLlp = () => {
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
      {/* section-1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mx-5 md:mx-20 lg:mx-28 mt-24 md:mt-28">
        <div className="">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B70505]">
            LLP Address Amendment (out of State)
          </h1>
          <p className="text-lg font-medium mt-5 text-justify">
            Amending the address of a Limited Liability Partnership (LLP)
            outside its original state involves filing the appropriate form,
            typically Form 15, with the relevant Registrar of Companies.
            Alongside the form, submit necessary documents, including proof of
            the new address. Adhere to the prescribed fee structure and comply
            with the regulatory framework of both the original and new states.
          </p>
          <div className="mt-5">
            <button className="bg-[#8A4117] text-white px-4 py-3 rounded-[4px]">
              GET STARTED
            </button>
          </div>
        </div>

        <div className="grid grid:cols-1 md:grid-cols-2 gap-5 border-4 mt-8 border-[#01355D] rounded-2xl p-5">
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
              &#x20B9;1151/-
            </h1>
            <img src={LLPartnership} className="w-3/4 h-auto"></img>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 md:mx-20 lg:mx-28 mt-5 md:mt-10">
        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={Compliance} alt="" className="w-2/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Compliance with Legal Requirements
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            Adhering to laws ensures regulatory compliance and ethical
            organizational conduct.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={Cost} alt="" className="w-3/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Smooth transition to a new state
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            Careful planning ensures a smooth transition when relocating to a
            new state.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={Enhanced} alt="" className="w-3/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Maintaining good standing
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            Adhering to regulations is crucial for maintaining good standing in
            organizations.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={Transoarency} alt="" className="w-3/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Effective communication
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            Clear, concise messages foster effective communication, enhancing
            understanding and collaboration.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={LegalRegulatory} alt="" className="w-2/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Improved accessibility
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            Enhanced features and accommodations result in improved
            accessibility for diverse stakeholders.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={Competitive} alt="" className="w-2/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Uninterrupted banking and financial services
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            Efficient operations ensure uninterrupted banking and financial
            services for clients.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={Performace1} alt="" className="w-2/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-4 text-center text-[#01355D] ">
            Streamlined tax compliance
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            Efficient procedures ensure streamlined tax compliance, reducing
            errors and facilitating accuracy.
          </p>
        </div>

        <div className="p-5 border border-[#B70505] rounded-lg cursor-pointer hover:bg-[#FBB03B] hover:bg-opacity-16">
          <div className="flex justify-center">
            <img src={Benchmarking} alt="" className="w-2/4 h-auto" />
          </div>

          <h3 className="font-bold text-xl mt-2 text-center text-[#01355D] ">
            Business continuity
          </h3>

          <p className="text-gray-600 mt-3 text-center">
            Resilience strategies ensure uninterrupted operations and sustained
            business continuity.
          </p>
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
              To keep you risk-free, our team will analyze your submitted
              documents, looking for any misleading or incorrect information.
            </p>
          </div>

          <div class="flex justify-center items-center col-span-3">
            <div class="border-t-4 border-dashed border-yellow-600 w-[40%] xl:w-[70%]"></div>
            <div class="w-4 h-4 border-t-4 border-r-4 border-yellow-600 transform rotate-45"></div>
          </div>

          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              Our professionals are here to help you with document requirements
              and licensing necessities.
            </p>
          </div>

          <div class="flex justify-center items-center col-span-3">
            <div class="border-t-4 border-dashed border-yellow-600  w-[40%] xl:w-[70%]"></div>
            <div class="w-4 h-4 border-t-4 border-r-4 border-yellow-600 transform rotate-45"></div>
          </div>

          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium ">
              Once the process of preparing the amendment form, supporting
              documents, and other formalities is completed successfully by our
              team, we’ll update you.
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
              After submitting the Amendment Application and paying the fee, you
              must be patient until we confirm that the regulatory authority has
              approved the amendment.
            </p>
          </div>
          <div class="flex  justify-center items-center col-span-3">
            <div class="w-4 h-4 border-t-4 border-l-4 border-yellow-600 transform -rotate-45"></div>
            <div class="border-t-4 border-dashed border-yellow-600  w-[40%] xl:w-[70%]"></div>
          </div>
          <div className="col-span-2 bg-white border-4 border-[#01355D] rounded-full  w-52 h-52 flex items-center justify-center p-8">
            <p className="text-center text-xs font-medium">
              We’ll share the confirmation of the amendment approved by the
              regulatory authority, reflecting the new registered office
              address.
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
                To keep you risk-free, our team will analyze your submitted
                documents, looking for any misleading or incorrect information.
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
                Our professionals are here to help you with document
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
                Once the process of preparing the amendment form, supporting
                documents, and other formalities is completed successfully by
                our team, we’ll update you.
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
                After submitting the Amendment Application and paying the fee,
                you must be patient until we confirm that the regulatory
                authority has approved the amendment.
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
                We’ll share the confirmation of the amendment approved by the
                regulatory authority, reflecting the new registered office
                address.
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
              We believe in growth and improvement at all costs. For us, growth
              is the law of life and it shall be fulfilled. We know the
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
              We understand that the money being spent is hard-earned, therefore
              we utilize every single penny that you pay us in the most
              effective way possible hence providing the best value for money.
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
  );
};

export default AddressAmendmentOutStateLlp;
