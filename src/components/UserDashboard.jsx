import { Link, useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";
// import { servieUrl } from "../../env/env";
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";
import React, { useEffect, useState } from "react";
import { WhatsappShareButton } from "react-share";
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
  MdAccountBalanceWallet,
  MdOutlineContactSupport
  
} from "react-icons/md";
import { FaHome ,FaCalculator} from "react-icons/fa";
import { SiLibreoffice } from "react-icons/si";

import {
  AiOutlineDashboard,
  AiOutlineFundProjectionScreen,
  AiOutlineMoneyCollect,
  AiOutlineProfile,
 
  AiOutlineLock,
  AiOutlineLogout,
  AiOutlineCustomerService,
  AiOutlineHistory,
} from "react-icons/ai";
import icon from "../../src/common/Images/logolegal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareNodes,
  faGlobe,
  faClipboardQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { GiTrade } from "react-icons/gi";
// import "./user.css";
const UserDashboard = ({ children }) => {
  const navigate = useNavigate();

  const [base64Image, setBase64Image] = useState(null);

  const [profile, setProfile] = useState([]);

  const uploadImage = (value) => {
    // debugger;
  };

  const sourceDiv = document.querySelector(".tv-embed-widget-wrapper__body");

  const targetDiv = document.getElementById("grapch");

  const [selectedMenuItem, setSelectedMenuItem] = useState("Allservies");

  // const menuItems = [
  //   { name: "Overview", icon: AiOutlineDashboard },
  //   { name: "My Services", icon: BsFillClipboard2DataFill },
  //   { name: "Documents Record", icon: AiOutlineFundProjectionScreen },
  //   { name: "", icon: AiOutlineMoneyCollect },
  //   { name: "Add Services", icon: GiTrade },
  //   { name: "Support", icon: AiOutlineProfile },

  //   { name: "Logout", icon: AiOutlineLogout },

  // ];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleMenuItemClick = (itemName) => {
    setSelectedMenuItem(itemName);
    // You can perform additional actions here if needed
  };

  const handleLogOut = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("userData");
    // setUserType("0");
    setIsDrawerOpen(false);
    // window.location.reload();
  };

  useEffect(() => {
    if (localStorage.getItem("userData") == null) {
      navigate("/login");
    }
  }, [navigate]);
  const [dataValue, setDataValue] = useState([]);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("userEmail", localStorage.getItem("userData"));

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("rolebased/UserAmountStatus/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let totalProfit = 0;
        let totalLoss = 0;
        let totalPrice = 0;

        // Loop through the data array
        result.forEach((item) => {
          const { profit, loss, price } = item.fields;

          // Add the profit, loss, and price values to the corresponding totals
          totalProfit += Number(profit);
          totalLoss += Number(loss);
          totalPrice += Number(price);
        });

        // Create an object to store the total values
        const result1 = {
          profit: totalProfit,
          loss: totalLoss,
          price: totalPrice,
        };

        // debugger;

        setDataValue(result1);
      })
      .catch((error) => console.log("error", error));
  }, []);
  useEffect(() => {
    var formdata = new FormData();

    formdata.append("userEmail", localStorage.getItem("userData"));

    // debugger;

    var requestOptions = {
      method: "POST",

      body: formdata,

      redirect: "follow",
    };

    fetch("rolebased/uploadProfile/", requestOptions)
      .then((response) => response.json())

      .then((result) => {
        setProfile(result);
      })

      .catch((error) => console.log("error", error));

    console.log(profile);
  }, []);

  const [users, setUsers] = useState([]);
  const userRole = localStorage.getItem("userData");
  useEffect(() => {
    // Fetch data from the API
    fetch('https://legalwebsite.pythonanywhere.com/api/register/')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredData = users.filter(item => item.email === userRole);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const shareUrl = "https://legal257.in/";
 const SupportHandle=()=>{
  setIsSidebarOpen(!isSidebarOpen);
  setSelectedMenuItem()

 }
  
  return (
    <>
      <div className="lg:grid lg:grid-cols-12 mt-7 lg:gap-4 ">
        {/* Mobile Toggle Button */}
        <div className="lg:hidden col-span-12 mb-10 ">
          
          <button
            onClick={handleToggleSidebar}
            className="text-gray-700 p-2 focus:outline-none text-5xl fixed top-0 left-1  focus:bg-gray-200"
          >
            {isSidebarOpen ? <GoSidebarExpand /> : <GoSidebarCollapse />}
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`lg:col-span-3 bg-white-100 min-h-auto    ${
            isSidebarOpen ? "block" : "hidden lg:block"
          }`}
        >
          <div className="bg-white shadow border-r    border-gray-400 rounded-lg px-2 py-5">
            <div className="">
              <img src={icon} alt="icon" />
            </div>
            <div className="mt-3 ml-3 text-[#446C8A]">
            {filteredData.map((user) => (
              <>
                <h1>{user.first_name} </h1>
              <h1>{user.email} </h1>
              <h1>{user.username} </h1>
              </>
            ))}
            </div>
            <div className="space-x-3  flex justify-end">
           
              <WhatsappShareButton url={shareUrl}>
                <FontAwesomeIcon
                  icon={faShareNodes}
                  className="w-5 h-5 text-[#446C8A]"
                />
              </WhatsappShareButton>

              <Link to="https://legal257.in/">
                {" "}
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="w-5 h-5 text-[#446C8A]"
                />{" "}
              </Link>
              <Link to="/support"  onClick={SupportHandle}>
                {" "}
                <FontAwesomeIcon
                  icon={faClipboardQuestion}
                  className="w-5 h-5 text-[#446C8A]"
                />{" "}
              </Link>
             
            </div>

            <ul className="space-y-3 mt-5">
              <li
                className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                  selectedMenuItem === "Allservies"
                    ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                    : ""
                }`}
                onClick={() => setSelectedMenuItem("Allservies")}
              >
                <Link to="/allservies" className="flex items-center">
                  <BsFillClipboard2DataFill className="mr-2" />
                  Buy Services
                </Link>
              </li>
              <li
                className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                  selectedMenuItem === "Bank"
                    ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                    : ""
                }`}
                onClick={() => setSelectedMenuItem("Bank")}
              >
                <Link to="/bank" className="flex items-center">
                  <MdImportantDevices className="mr-2" />
                  Bank Services
                </Link>
              </li>
              <li
                className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                  selectedMenuItem === "Dashboard"
                    ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                    : ""
                }`}
                onClick={() => setSelectedMenuItem("Dashboard")}
              >
                <Link to="/overview" className="flex items-center">
                  <AiOutlineDashboard className="mr-2" />
                  Overview
                </Link>
              </li>
              <li
                className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                  selectedMenuItem === "Transaction"
                    ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                    : ""
                }`}
                onClick={() => setSelectedMenuItem("Transaction")}
              >
                <Link to="/myservices" className="flex items-center">
                  <BsFillClipboard2DataFill className="mr-2" />
                  My Services
                </Link>
              </li>
              <li
                className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                  selectedMenuItem === "Fund"
                    ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                    : ""
                }`}
                onClick={() => setSelectedMenuItem("Fund")}
              >
                <Link to="/document" className="flex items-center">
                  <MdAccountBalanceWallet className="mr-2" />
                  Documents
                </Link>
              </li>
              <li
                className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                  selectedMenuItem === "Withdraw"
                    ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                    : ""
                }`}
                onClick={() => setSelectedMenuItem("Withdraw")}
              >
                <Link to="/addservices" className="flex items-center">
                  <AiOutlineMoneyCollect className="mr-2" />
                  Add Services
                </Link>
              </li>
              <li
                className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                  selectedMenuItem === "Now"
                    ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                    : ""
                }`}
                onClick={() => setSelectedMenuItem("Now")}
              >
                <Link to="/support" className="flex items-center">
                  <GiTrade className="mr-2" />
                  Support
                </Link>
              </li>
              <li
                className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                  selectedMenuItem === "Profile"
                    ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                    : ""
                }`}
                onClick={() => handleLogOut()}
              >
                <Link to="/login" className="flex items-center">
                  <AiOutlineProfile className="mr-2" />
                  LogOut
                </Link>
              </li>
              <li
                className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                  selectedMenuItem === "History"
                    ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                    : ""
                }`}
                onClick={() => setSelectedMenuItem("History")}
              >
                <Link to="/profile" className="flex items-center">
                  <AiOutlineHistory className="mr-2" />
                  Invoice
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-9 ">
          {/* <img src="https://static.vecteezy.com/system/resources/previews/000/664/771/original/banner-background-with-low-poly-design-vector.jpg" className="w-90%" alt="" /> */}
          {children}</div>
      </div>
      <nav className="bg-[#954535] shadow-2xl p-4 md:hidden fixed bottom-0 w-full z-50">
      <div className="flex justify-between items-center">
      <Link to='/allservies'>  <button className="text-white font-bold "><FaHome className="text-center ml-2 w-8 h-8" /> Home</button> </Link>
      <Link to='/bank'>      <button className="text-white"> <SiLibreoffice className="text-center ml-1  w-8 h-8" />Bank</button></Link>
      <Link to='/calcul'>     <button className="text-white"> <FaCalculator className="text-center ml-2  w-8 h-8" />Utilities</button></Link>
      <Link to='/support'>     <button className="text-white"> <MdOutlineContactSupport className="text-center ml-2  w-8 h-8" />Support</button></Link>
      
       
      </div>
    </nav>
    </>
  );
};

export default UserDashboard;
