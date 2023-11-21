import React from "react";
import Typewriter from "typewriter-effect";
import ilegalhomeimg from "./../assests/images/HomepageImages/legalImg1.jpg";
import sliderhomeimg1 from "./../assests/images/HomepageImages/users.png";
import sliderhomeimg2 from "./../assests/images/HomepageImages/customer.png";
import sliderhomeimg3 from "./../assests/images/HomepageImages/employee-experience.png";
import sliderhomeimg4 from "./../assests/images/HomepageImages/case-report.png";
import sliderhomeimg5 from "./../assests/images/HomepageImages/gold-cup.png";
import Service1 from "./../assests/images/HomepageImages/accounting.svg";
import Service2 from "./../assests/images/HomepageImages/affidavit.svg";
import Service3 from "./../assests/images/HomepageImages/applicationform.png";
import Service4 from "./../assests/images/HomepageImages/dissolution of deeds.svg";
import Service5 from "./../assests/images/HomepageImages/foodlicence.svg";
import Service6 from "./../assests/images/HomepageImages/gstfilling.svg";
import Service7 from "./../assests/images/HomepageImages/gstregister.svg";
import Service8 from "./../assests/images/HomepageImages/icegateregister.svg";
import Service9 from "./../assests/images/HomepageImages/importexportlicence.png";
import Service10 from "./../assests/images/HomepageImages/incometax.png";
import Service11 from "./../assests/images/HomepageImages/legaldrafting.svg";
import Service12 from "./../assests/images/HomepageImages/msmeregister.png";
import Service13 from "./../assests/images/HomepageImages/noc.svg";
import Service14 from "./../assests/images/HomepageImages/partnership deed.svg";
import Service15 from "./../assests/images/HomepageImages/pfregister.svg";
import Service16 from "./../assests/images/HomepageImages/power.svg";
import Service17 from "./../assests/images/HomepageImages/proffessional.svg";
import Service18 from "./../assests/images/HomepageImages/societyregister.svg";
import Service19 from "./../assests/images/HomepageImages/trade.svg";
import Service20 from "./../assests/images/HomepageImages/trademark.svg";
import Service21 from "./../assests/images/HomepageImages/gstreturn.svg";
import Service22 from "./../assests/images/HomepageImages/gumasta.svg";
import GoogleImg from "./../assests/images/HomepageImages/googleImg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1200,
  };

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1200,
  };

  const isSmallScreen1 = window.innerWidth <= 768;

  if (isSmallScreen1) {
    settings1.slidesToShow = 3;
  }

  const isSmallScreen2 = window.innerWidth <= 768;

  if (isSmallScreen2) {
    settings3.slidesToShow = 3;
  }
  return (
    <>
      {/* hero section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ml-0 md:ml-20 lg:ml-28 ">
        <div className="mx-5 sm:mx-0">
          <p className="font-bold text-2xl md:text-4xl lg:text-5xl mt-5 md:mt-20 md:h-[120px] ">
            <Typewriter
              options={{
                strings: [
                  "One-Stop Solution to All  Your  Legal Problems",
                  "Get Your Personal Legal Advisor ",
                  "Now Legal is Always On  Your Phone",
                ],
                autoStart: true,
                loop: true,
                typeSpeed: 50,
              }}
            />
          </p>

          <div className="mt-10 ">
            <Slider {...settings1}>
              <div className="">
                <div className="">
                  <img
                    src={sliderhomeimg1}
                    className="w-[70px] h-auto"
                    alt=""
                  />
                </div>

                <div className="mt-3">
                  <p className="text-[#B9BFBF] text-sm ">
                    Trusted <br />
                    Clients
                  </p>
                </div>
              </div>

              <div className="">
                <div className="">
                  <img
                    src={sliderhomeimg2}
                    className="w-[70px] h-auto"
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <p className="text-[#B9BFBF] text-sm ">
                    Queries
                    <br /> Solved
                  </p>
                </div>
              </div>

              <div className="">
                <div className="">
                  <img
                    src={sliderhomeimg3}
                    className="w-[70px] h-auto"
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <p className="text-[#B9BFBF] text-sm ">
                    Years Of
                    <br /> Experience
                  </p>
                </div>
              </div>

              <div className="">
                <div className="">
                  <img
                    src={sliderhomeimg4}
                    className="w-[70px] h-auto"
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <p className="text-[#B9BFBF] text-sm ">
                    Cases
                    <br /> Solved
                  </p>
                </div>
              </div>

              <div className="">
                <div className="">
                  <img
                    src={sliderhomeimg5}
                    className="w-[70px] h-auto"
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <p className="text-[#B9BFBF] text-sm ">
                    Awards
                    <br /> Gained
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              className="rounded-bl-[100px] w-[100%] h-[70vh]"
              src={ilegalhomeimg}
              alt="Legal Home"
            />
            <div className="absolute top-0 left-0 w-full flex  justify-center mt-16 ">
              <div className="bg-white shadow-lg rounded-2xl p-5">
                <h1 className="font-semibold text-2xl flex justify-center text-[#01355D] ">
                  Get your queries solved by
                </h1>
                <div className="mt-4 text-center text-xl font-semibold text-[#954535]">
                  <Typewriter
                    options={{
                      strings: [
                        "Lawyer",
                        "Consultant ",
                        "Company Secretary",
                        "Chartered  Accountant",
                      ],
                      autoStart: true,
                      loop: true,
                      typeSpeed: 50,
                    }}
                  />
                </div>
                <div>
                  <form>
                    <label>Name</label>
                    <p className="mb-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Your Name"
                        className=" w-full md:w-[400px] mt-2  border p-2 rounded-lg"
                      />
                    </p>
                    <label className="mt-3">Email</label>
                    <p className="mb-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className=" w-full md:w-[400px]  mt-2 border p-2 rounded-lg"
                      />
                    </p>
                    <label className="mt-3">Contact Number</label>

                    <p className="mb-3">
                      <input
                        type="text"
                        id="pnum"
                        name="phone"
                        placeholder="Enter Your Number"
                        className=" w-full md:w-[400px] mt-2  border p-2 rounded-lg"
                      />
                    </p>
                    <label>Related to</label>
                    <p>
                      <select
                        className=" border p-2 w-full md:w-[400px] mt-2 rounded-lg"
                        required
                      >
                        <option value="" disabled selected>
                          Select Course
                        </option>

                        <option value="option1" className="text-black">
                          Lawyer
                        </option>

                        <option value="option2" className="text-black">
                          Consultant
                        </option>

                        <option value="option3" className="text-black">
                          Company Secretary
                        </option>

                        <option value="option3" className="text-black">
                          Chartered Accountant
                        </option>
                      </select>
                    </p>
                    <div className="mt-5 flex justify-center">
                      <button className="bg-[#8A4117] text-white px-4 py-3 rounded-[4px]">
                        GET CONSULTANCY
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second part */}
      <div className="mt-40 md:mt-64 flex justify-center font-bold text-2xl md:text-4xl mx-5 sm:mx-0">
        <h1>
          <span> Discover</span>257+ legal services over one platform
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 mx-5 md:mx-20 lg:mx-28 mt-5 md:mt-16">
        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service1} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Online
            <br /> Accounting
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service2} className="w-[75px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-4">Affidavit</p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service3} className="w-[55px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Application
            <br />
            Form
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service4} className="w-[55px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Dissolution
            <br />
            of Deeds
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service5} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Food
            <br />
            Licence
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service6} className="w-[40px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            GST Return
            <br />
            Filing
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service7} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            GST
            <br />
            Registration
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service8} className="w-[80px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-4">
            ICEGATE <br /> Registration
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service9} className="w-[55px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Import Export
            <br />
            Licence
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service10} className="w-[55px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Income Tax
            <br />
            Return Filing
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service11} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Legal
            <br />
            Drafting
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service12} className="w-[40px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            MSME
            <br />
            Registration
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service13} className="w-[70px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">NOC</p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service14} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Partnership
            <br />
            Deed
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service15} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            PF
            <br />
            Registration
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service16} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Power of
            <br />
            Attorney
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service17} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Professional
            <br />
            Tax Registration
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-[40px] p-5">
          <div className="flex justify-center">
            <img src={Service18} className="w-[50px] h-auto"></img>
          </div>
          <p className="text-md font-semibold text-center mt-3">
            Society
            <br />
            Registration
          </p>
        </div>
      </div>

      <div className="border-b-2 border-[#8A4117] mx-5 md:mx-20 lg:mx-28 py-5 mb-5"></div>

      {/* third part */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28 mx-5 md:mx-20 lg:mx-32 mt-5 md:mt-14">
        <div>
          <Slider {...settings2}>
            <div>
              <h1 className="text-xl font-semibold text-[#8A4117]">Deepak</h1>
              <p className="text-justify mt-4 text-[#1E1E1E]">
                Another noteworthy aspect of Legal251's service was the
                transparency regarding fees and costs. I received a detailed
                breakdown of the expected expenses upfront, allowing me to make
                informed decisions. The pricing was fair and competitive,
                especially considering the high-quality legal representation I
                received.
              </p>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-[#8A4117]">Amisha</h1>
              <p className="text-justify mt-4 text-[#1E1E1E]">
                I recently had the opportunity to utilize the online legal
                services provided by Legal251, and I must say that I am
                thoroughly impressed. As someone who needed legal assistance but
                couldn't spare the time for in-person consultations, their
                online platform proved to be a convenient and efficient
                solution.
              </p>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-[#8A4117]">Anjali</h1>
              <p className="text-justify mt-4 text-[#1E1E1E]">
                Right from the start, the website was user-friendly and
                intuitive, making it easy to navigate and find the information I
                needed. The process of submitting my legal request was
                straightforward, and I appreciated the option to provide
                relevant documents electronically, saving me the hassle of
                scanning or mailing physical copies.
              </p>
            </div>
          </Slider>
        </div>

        <div>
          <img src={GoogleImg}></img>
        </div>
      </div>

      {/* fourth part */}

      <div className="mx-5 md:mx-20 lg:mx-28 mt-5 md:mt-20 lg:mt-28">
        <Slider {...settings3}>
          <div className="">
            <div className="flex justify-center">
              <img src={Service1} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Online
              <br /> Accounting
            </p>
            <div className="border-b-4 border-[#8A4117] mx-10 py-3"></div>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={Service5} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Food
              <br />
              Licence
            </p>
            <div className="border-b-4 border-[#8A4117] mx-10 py-3"></div>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={Service19} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Trade
              <br />
              Licence
            </p>
            <div className="border-b-4 border-[#8A4117] mx-10 py-3"></div>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={Service20} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Trademark
              <br />
              Registration
            </p>
            <div className="border-b-4 border-[#8A4117] mx-10 py-3"></div>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={Service21} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              GST Return
              <br />
              Filing
            </p>
            <div className="border-b-4 border-[#8A4117] mx-10 py-3"></div>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={Service22} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              Gumasta
              <br />
              Licence
            </p>
            <div className="border-b-4 border-[#8A4117] mx-10 py-3"></div>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={Service10} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-md font-semibold text-center mt-3">
              ITR
              <br />
              Filing
            </p>
            <div className="border-b-4 border-[#8A4117] mx-10 py-3"></div>
          </div>
        </Slider>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-12 gap-5 mx-5 md:mx-20 lg:mx-28 mt-5 bg-white shadow-2xl p-5">
      <div></div>
      </div>
    </>
  );
};

export default Home;
