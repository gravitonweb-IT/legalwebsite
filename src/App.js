// App.js
import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

// Start Business
import LLPCompanyRegistration from './components/StartBusiness/LLPCompanyRegistration';
import OpcOnePersonCompanyRegistration from './components/StartBusiness/OpcOnePersonCompanyRegistration';
import ParternerShip from './components/StartBusiness/ParternerShip';
import ParternLtdCompanyRegisteration from './components/StartBusiness/ParternLtdCompanyRegisteration';
import Section8CompanyRegistration from './components/StartBusiness/Section8CompanyRegistration';
// import Navbar from './common/Navbar';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Start Business */}
        <Route path="/LLPCompanyRegistration" element={<LLPCompanyRegistration />} />
        <Route path="/OpcOnePersonCompanyRegistration" element={<OpcOnePersonCompanyRegistration/>} />
        <Route path="/ParternerShip" element={<ParternerShip />} />
        <Route path="/ParternLtdCompanyRegisteration" element={<ParternLtdCompanyRegisteration />} />
        <Route path="/Section8CompanyRegistration " element={<Section8CompanyRegistration />} />
       {/*  */}

      </Routes>
    </>
  );
}

export default App;
