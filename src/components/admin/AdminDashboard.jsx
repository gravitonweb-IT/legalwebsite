import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
const AdminDashboard = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if (localStorage.getItem("login") != "admin") {

      navigate("/login");

    }

  }, []);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("userData");
    // setUserType("0");
    setIsDrawerOpen(false);
    // window.location.reload();
  };
  return (
    <>
    <div className='flex justify-center items-center bg-slate-600'>
       <a href="https://legalwebsite.pythonanywhere.com/admin/" className='text-white py-5 font-bold'>Go There</a>

       <br />
          </div>
          <button onClick={handleLogOut} className='border border-orange-400 p-3 bg-black text-white'>
          <Link to='/login' >
        LogOut
       </Link>  
       </button> 
    </>
  )
}

export default AdminDashboard