import React from "react";
import PatnerShipimg1 from "../../assests/images/Start BusinessImages/PatnerShipimages/partnership1.png";
import patnershipimg2 from "../../assests/images/Start BusinessImages/PatnerShipimages/patnership2.png";
import patnership3 from "../../assests/images/Start BusinessImages/PatnerShipimages/patnershipregimg.png";

const ParternerShip = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10 md:mx-20 lg:mx-32 mt-5 md:mt-18">
        <div className="mt-10">
          <h1 className="text-2xl sm:text-6xl font-roboto text-[#01355D]  font-bold leading-6">
            Partnership Deed
          </h1>
          <p className="text-justify mt-5 font-semibold leading-6 text-[#01355D]">
            A Partnership Deed (PDR) is a written legal document containing an
            agreement between the partners of a firm which summarises the terms
            and conditions of their partnership under the “Indian Partnership
            Act 1932”. Get help from the experts of Legal251 for making PDR.
          </p>
          <button className="text-black font-mono rounded-[9px] w-[160px] h-[50px] bg-[#f8951d]  mt-5">
            <h2 className="text-white text-2xl font-roboto ">Get Start</h2>
          </button>

          <div className="border-2 mt-8 border-black rounded-2xl">
            <div className="mx-4 my-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mt-8">
                <div className="">
                  <p>
                    <input
                      type="text"
                      id="firstname"
                      value=""
                      required
                      name="firstname"
                      placeholder="First Name"
                      className="py-2   border-b-2 border-slate-400  px-5"
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      id="email"
                      value=""
                      name="email"
                      placeholder="Email"
                      required
                      className="py-2  border-b-2 border-slate-400  px-5"
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      id="phone"
                      value=""
                      name="phone"
                      required
                      placeholder="Contact No"
                      className="py-2  border-b-2 border-slate-400  px-5"
                    />
                  </p>
                  <p>
                    <input
                      type="city"
                      id="city"
                      value=""
                      name="city"
                      placeholder="City"
                      required
                      className="py-2  border-b-2 border-slate-400  px-5"
                    />
                  </p>
                  <button className="text-black font-mono rounded-full w-[150px] h-[35px] bg-[#f8951d]  mt-5">
                    <h2 className="text-white text-lg font-roboto ">
                      Proceed now
                    </h2>
                  </button>
                </div>

                <div className="">
                  <img src={patnershipimg2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <img src={PatnerShipimg1} alt="" />
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 mx-10 md:mx-14 lg:mx-20 mt-5 md:mt-16">
        <div className="mt-14">
          <img
            src={PatnerShipimg1}
            alt=""
            className=" mx-auto h-auto w-[400px] "
          />
        </div>
        <div>
          <p className="mt-5 font-roboto text-gray-700 text-lg text-justify ">
            A Partnership Deed is a written legal document that outlines the
            rights and responsibilities of all partners of a business or firm.
            Contact us to get your Partnership drafted in the best way by the
            best legal team! While partnering up with others for a
            business/establishment, one must prepare their Partnership Deed, an
            agreement that explains all terms & conditions about/for all
            respective partners to avoid any future/legal disputes. It is used
            to guide all the parties in business conduct and deter unwarranted
            misunderstanding, unpleasantness, and harassment among the partners
            A Partnership Deed is a written legal document that outlines the
            rights and responsibilities of all partners of a business or firm.
            Partnership Deed.
          </p>
        </div>
      </div>
      <div className="mt-14  mx-16 lg:mx-32">
        <h2 className=" font-bold text-2xl md:text-5xl ">How to apply</h2>
        <hr className="w-1/4  border-2 border-[#acae38] my-3"></hr>
      </div>

      <div className="hidden  md:block  mt-10 pointer-events-none ">
        <div className="flex justify-center">
          <img src={patnership3} className="w-[60%] h-auto"></img>
        </div>
      </div>
    </>
  );
};

export default ParternerShip;
