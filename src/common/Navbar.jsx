

import React, { useState } from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <div className="mobile-icon" onClick={toggleNav}>
        ☰ 
      </div>
      <ul className={`nav-list ${showNav ? 'show' : ''}`}>
        <li className="dropdown">
          <Link to="/">Start Business</Link>
          <div className="dropdown-content">
            <Link to="/ParternerShip">Partnership Deed</Link>
            <Link to="/ParternLtdCompanyRegisteration">Partner-ltd. Company registration</Link>
            <Link to="/">section-8-company-registration </Link>
            
            <Link to="/">LLP-company-registration</Link>
            <Link to="/">opc-one-person-company-registration</Link>
          </div>
        </li>


        <li className="dropdown">
          <Link to="/">Compliance</Link>
          <div className="dropdown-content">
            <Link to="/">Annual-compliance-llp</Link>
            <Link to="/">Annual-compliance-company</Link>
            <Link to="/">CMA-report</Link>
          </div>
        </li>
      
        <li className="dropdown">
          <Link to="/">Change in business</Link>
          <div className="dropdown-content">
            <Link to="/">Dissolution-of-deed</Link>
            <Link to="/">Address-amendment-within-state-LLP</Link>
            <Link to="/">Address-amendment-within-state-company</Link>
            <Link to="/">Address-amendment-out-state-llp</Link>
            <Link to="/">Address-amendment-out-state-company</Link>
            <Link to="/">Add-director</Link>
            <Link to="/">Add-partner</Link>
            <Link to="/">Increase-capital-llp</Link>
            <Link to="/">Change-in-name-llp</Link>

            <Link to="/">Remove-director</Link>
            <Link to="/">Remove-partner</Link>
            <Link to="/">Increase-capital-company </Link>
            <Link to="/">Change-in-name-company </Link>
          </div>
        </li>
        <li className="dropdown">
          <Link to="/">Registrations</Link>
          <div className="dropdown-content">
            <Link to="/">Import-export-license</Link>
            <Link to="/">Professional-tax-registration</Link>
            <Link to="/">Icegate-registration</Link>

            <Link to="/">Msme-udhyam-registration</Link>
            <Link to="/">Society-registration</Link>
            <Link to="/">Icegate-registration</Link>
            <Link to="/">Gumasta-licence</Link>
            <Link to="/">Pf-registration</Link>
            <Link to="/">Trademark-registration</Link>

            <Link to="/">Esic-registration</Link>
            <Link to="/">Gst-registration</Link>
            <Link to="/">Food-license</Link>
            <Link to="/">Trade-license</Link>
          </div>
        </li>

  

        <li className="dropdown">
          <Link to="/">Filling and more</Link>
          <div className="dropdown-content">
            <Link to="/">GST Return Filing</Link>
            <Link to="/">ITR Filing</Link>
            <Link to="/">TDS Return Filing</Link>
            <Link to="/">Online Accounting</Link>

          </div>

 
        </li>
        <li className="dropdown">
          <Link to="/">Drafting</Link>
          <div className="dropdown-content">
            <Link to="/">Legal Drafting</Link>
            <Link to="/">Rent Agreement</Link>
            <Link to="/">NOC</Link>

            <Link to="/">Affidavit</Link>
            <Link to="/">Power of Attorney</Link>
            <Link to="/">Will</Link>

            <Link to="/">Application Form</Link>
            <Link to="/">NDA Drafting</Link>
            <Link to="/">Privacy Policy Drafting</Link>
            <Link to="/">Terms and Conditions Drafting</Link>

          </div>
        </li>


        <li className="dropdown">
          <Link to="/">Legal Issue</Link>
          <div className="dropdown-content">
            <Link to="/">Legal Notice Reply</Link>
            <Link to="/">Legal Advice</Link>
            <Link to="/">Legal Notice Preparation</Link>
          </div>
        </li>
        <li className="dropdown">
          <Link to="/">Other services</Link>
          <div className="dropdown-content">
            <Link to="/">Balance Sheet Preparation & P&L</Link>
            <Link to="/">Project Report Preparatio</Link>
          </div>
        </li>
        
        <li className="dropdown">
          <Link to="/">Utilities</Link>
          <div className="dropdown-content">
            <Link to="/"> GST Calculator</Link>
            <Link to="/">SIP Calculator</Link>
            <Link to="/">EMI Calculator</Link> 

            <Link to="/">  FD Calculator</Link>
            <Link to="/">80U Calculator</Link>
            <Link to="/">HRA Calculator</Link> 

            <Link to="/">Simple Interest Calculator</Link>
            <Link to="/">Capital Gain Calculator</Link>
            <Link to="/">TDS Calculator</Link> 

            <Link to="/">PPF Calculator</Link>
            <Link to="/">Gratuity Calculator</Link>
            <Link to="/">RD Calculator</Link> 
          </div>
        </li>



      </ul>
    </nav>
  );
}

export default Navbar;

