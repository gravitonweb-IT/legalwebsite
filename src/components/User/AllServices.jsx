import React from "react";
import UserDashboard from "../UserDashboard";
import Service1 from "../../assests/images/HomepageImages/accounting.svg";
import Service2 from "../../assests/images/HomepageImages/affidavit.svg";
import Service3 from "../../assests/images/HomepageImages/applicationform.png";
import Service4 from "../../assests/images/HomepageImages/dissolution of deeds.svg";
import Service5 from "../../assests/images/HomepageImages/foodlicence.svg";
import Service6 from "../../assests/images/HomepageImages/gstfilling.svg";
import Service7 from "../../assests/images/HomepageImages/gstregister.svg";
import Service8 from "../../assests/images/HomepageImages/icegateregister.svg";
import Service9 from "../../assests/images/HomepageImages/importexportlicence.png";
import Service10 from "../../assests/images/HomepageImages/incometax.png";
import Service11 from "../../assests/images/HomepageImages/legaldrafting.svg";
import Service12 from "../../assests/images/HomepageImages/msmeregister.png";
import Service13 from "../../assests/images/HomepageImages/noc.svg";
import Service14 from "../../assests/images/HomepageImages/partnership deed.svg";
import Service15 from "../../assests/images/HomepageImages/pfregister.svg";
import Service16 from "../../assests/images/HomepageImages/power.svg";
import Service17 from "../../assests/images/HomepageImages/proffessional.svg";
import Service18 from "../../assests/images/HomepageImages/societyregister.svg";
import Service19 from "../../assests/images/HomepageImages/trade.svg";
import Service20 from "../../assests/images/HomepageImages/trademark.svg";
import Service21 from "../../assests/images/HomepageImages/gstreturn.svg";
import Service22 from "../../assests/images/HomepageImages/gumasta.svg";

import {
  MdOutlineAppRegistration,
  MdLaptopChromebook,
  MdOutlineAddHomeWork,
  MdHolidayVillage,
  MdOutlineMoneyOffCsred,
  MdPublishedWithChanges,
  MdOutlineFormatIndentIncrease,
  MdOutlineDriveFileRenameOutline,
  MdImportantDevices,
  MdOutlineBugReport,
  MdAccountBalanceWallet
  
} from "react-icons/md";
import {
  BsFillSignIntersectionYFill,
  BsFillPersonVcardFill,
} from "react-icons/bs";
import { GrCompliance, GiTrade } from "react-icons/gr";
import { GiCalendarHalfYear, GiTransportationRings ,GiTripleBeak} from "react-icons/gi";
import { GoReport } from "react-icons/go";
import { MdRealEstateAgent } from "react-icons/md";
import { SiBandsintown ,SiTrakt,SiGnuprivacyguard  } from "react-icons/si";
import {FaToriiGate,FaCashRegister  } from 'react-icons/fa'
import {TbReceiptTax  } from 'react-icons/tb'
import {RiGitRepositoryFill  } from 'react-icons/ri'
import {PiTreeStructureBold ,PiTrafficConeBold} from 'react-icons/pi'


 
 
 

 
 
 
 

 


import { Link } from "react-router-dom";
const AllServices = () => {
  return (
    <>
      <UserDashboard>
        <div className="mt-20 md:mt-8 text-center font-bold text-2xl md:text-4xl mx-5 sm:mx-0">
          <h1>
            <span> Unified Platform:</span> Access 257+ Legal Solutions
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5 mx-5 md:mx-20 lg:mx-28 mt-10 md:mt-8">
          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                <img src={Service21} className="w-[50px] h-auto"></img>
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Partner
                <br />
                Ship
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                <img src={Service1} className="w-[50px] h-auto"></img>
              </div>
              <p className="text-md font-semibold text-center mt-3">
                NDA <br />
                Drafting
              </p>
            </div>
          </Link>

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

        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5 mx-5 md:mx-20 lg:mx-28 mt-10 md:mt-16">
          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <MdOutlineAppRegistration className="w-16 h-16 text-gray-500" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Private-limited-company-registration
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <MdLaptopChromebook className="w-16 h-16 text-red-500" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                opc-one-person-company-registration
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <BsFillSignIntersectionYFill className="w-16 h-16 text-blue-700" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                section-8-company-registration
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <GrCompliance className="w-16 h-16 text-" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                llp-company-registration
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <GiCalendarHalfYear className="w-16 h-16 text-yellow-700" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                annual-compliance-llp
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <BsFillPersonVcardFill className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                annual-compliance-company
              </p>
            </div>
          </Link>
          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <GoReport className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Private-limited-company-registration
              </p>
            </div>
          </Link>

          {/* new */}

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <MdRealEstateAgent className="w-16 h-16 text-green-700" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Address-amendment-within-state-LLP
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <MdOutlineAddHomeWork className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Address-amendment-within-state-company
              </p>
            </div>
          </Link>
          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <SiBandsintown className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Address-amendment-out-state-llp
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <MdHolidayVillage className="w-16 h-16 text-yellow-700" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Address-amendment-out-state-company
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <MdOutlineMoneyOffCsred className="w-16 h-16 text-violet-700" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                increase-capital-llp
              </p>
            </div>
          </Link>
          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <MdPublishedWithChanges className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Change-in-name-llp
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <MdOutlineFormatIndentIncrease className="w-16 h-16 text-red-700" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Increase-capital-company
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <MdOutlineDriveFileRenameOutline className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Change-in-name-company
              </p>
            </div>
          </Link>
          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <MdImportantDevices className="w-16 h-16 text-teal-700" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Import-export-license
              </p>
            </div>
          </Link>

          {/* he;llo */}

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <TbReceiptTax className="w-16 h-16 text-yellow-700" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                professional-tax-registration
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <FaToriiGate className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Icegate-registration
              </p>
            </div>
          </Link>
          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <FaCashRegister className="w-16 h-16 text-teal-800" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                msme-udhyam-registration
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <MdOutlineBugReport className="w-16 h-16 text-green-700" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                society-registration
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <  MdAccountBalanceWallet  className="w-16 h-16 text-zinc-800" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Gumasta-licence
              </p>
            </div>
          </Link>
          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <GiTransportationRings className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Project Report Preparation
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <GiCalendarHalfYear className="w-16 h-16 text-yellow-700" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                trademark-registration
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <BsFillPersonVcardFill className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Esic-registration
              </p>
            </div>
          </Link>
          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <RiGitRepositoryFill className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Balance Sheet Preparation & P&L
              </p>
            </div>
          </Link>

          {/* again */}

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <SiTrakt className="w-16 h-16 text-yellow-700" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                ITR Filing
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <BsFillPersonVcardFill className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                TDS Return Filing
              </p>
            </div>
          </Link>
          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <PiTreeStructureBold className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Online Accounting
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
              <img src={Service2} className="w-[75px] h-auto"></img>
                {/* <GiCalendarHalfYear className="w-16 h-16 text-yellow-700" /> */}
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Legal Notice Preparation
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <GiTripleBeak className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Rent Agreement
              </p>
            </div>
          </Link>
          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <GoReport className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Legal Advice
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
              <img src={Service11} className="w-[50px] h-auto"></img>
                {/* <GiCalendarHalfYear className="w-16 h-16 text-yellow-700" /> */}
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Terms and Conditions Drafting
              </p>
            </div>
          </Link>

          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <PiTrafficConeBold className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Legal Notice Reply
              </p>
            </div>
          </Link>
          <Link to="/addservices">
            <div className="bg-white shadow-2xl rounded-[40px] p-5">
              <div className="flex justify-center">
                {/* <img src={Service1} className="w-[50px] h-auto"></img> */}
                <SiGnuprivacyguard  className="w-16 h-16" />
              </div>
              <p className="text-md font-semibold text-center mt-3">
                Privacy Policy Drafting
              </p>
            </div>
          </Link>
        </div>
      </UserDashboard>
    </>
  );
};

export default AllServices;
