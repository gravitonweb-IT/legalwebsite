import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const [userType, setUserType] = useState("0");
  useEffect(() => {
    if (localStorage.getItem("login") == "user") {
      setUserType("3");
    } else if (localStorage.getItem("login") == "admin") {
      setUserType("1");
    } else if (localStorage.getItem("login") == "staff") {
      setUserType("2");
    }
  }, []);
    const handleLogOut = () => {
        localStorage.removeItem("login");
        localStorage.removeItem("userData");
        // localStorage.removeItem("userData");
    
        setUserType("0");
    
        window.location.reload();
      };
  const navigate = useNavigate();
  useEffect(() => {
    // targetDiv?.innerHTML = sourceDiv?.innerHTML;

    if (localStorage.getItem("userData") == null) {
      navigate("/login");
    }
  }, []);
  return (
    <>
    <div className='pt-20'>UserDashboard</div>
    <p className="hover:bg-sky-500 bg-[#B70505]  hover:text-white border-b-2  m-2">
        <Link to="/" className="text-white " 
        onClick={() => handleLogOut()}
        >
          Logout
        </Link>
       
      </p>
      </>
  )
}

export default UserDashboard