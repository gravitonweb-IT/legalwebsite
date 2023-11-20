import React from "react";
import Typewriter from "typewriter-effect";
import ilegalhomeimg from "./../assests/images/HomepageImages/legalImg1.jpg";
import sliderhomeimg1 from "./../assests/images/HomepageImages/users.png";
import sliderhomeimg2 from "./../assests/images/HomepageImages/customer.png";
import sliderhomeimg3 from "./../assests/images/HomepageImages/employee-experience.png";
import sliderhomeimg4 from "./../assests/images/HomepageImages/case-report.png";
import sliderhomeimg5 from "./../assests/images/HomepageImages/gold-cup.png";
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

  const isSmallScreen1 = window.innerWidth <= 768;
 
  if (isSmallScreen1) {
    settings1.slidesToShow = 3;
  }
  return (
    <>
    {/* hero section */}
      <div className="grid grid-cols-1  md:grid-cols-2   gap-10 ml-0 md:ml-20 lg:ml-28 ">

        <div >
          <p className="font-bold text-2xl md:text-4xl  lg:text-5xl mt-10 md:mt-20 md:h-[150px] ">
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
                          Trusted <br/>Clients
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
                   
                      <p className="text-[#B9BFBF] text-sm ">Queries<br/> Solved</p>
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
                    
                      <p className="text-[#B9BFBF] text-sm ">Years Of<br/> Experience</p>
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
                     
                      <p className="text-[#B9BFBF] text-sm ">Cases<br/> Solved</p>
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
                 
                      <p className="text-[#B9BFBF] text-sm ">Awards<br/> Gained</p>
                      </div>
                    </div>
                  </Slider>
                  </div>
        </div>
         


        <div>
          <div className="relative">
            <img
              className="rounded-bl-[100px] w-[100%] h-[60vh]"
              src={ilegalhomeimg}
              alt="Legal Home"
            />
            <div className="absolute top-0 left-0 w-full  flex  justify-center mt-16 ">
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
                        className=" w-full md:w-[500px] mt-3  border p-3 rounded-lg"
                      />
                    </p>
                    <label className="mt-3">Email</label>
                    <p className="mb-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className=" w-full md:w-[500px]  mt-3 border p-3 rounded-lg"
                      />
                    </p>
                    <label className="mt-3">Contact Number</label>

                    <p className="mb-3">
                      <input
                        type="text"
                        id="pnum"
                        name="phone"
                        placeholder="Enter Your Number"
                        className=" w-full md:w-[500px] mt-3  border p-3 rounded-lg"
                      />
                    </p>
                    <label>Related to</label>
                    <p>
                      <select
                        className=" border p-3 w-full md:w-[500px] mt-3 rounded-lg"
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
                    <button className="bg-[#8A4117] text-white px-5 py-3 rounded-[4px]">
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
<div className="mt-60 flex justify-center items-center font-bold text-4xl ">
  <h1>
<span> Discover</span>257+ legal services over one platform</h1>
</div>


    </>
  );
};

export default Home;
