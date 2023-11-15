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
import DissolutionOfDeed from './components/ChangeInBusiness/DissolutionOfDeed';
import AddressAmendmentWithInStateLlp from './components/ChangeInBusiness/AddressAmendmentWithInStateLlp';
import AddressAmendmentWithInStateCompany from './components/ChangeInBusiness/AddressAmendmentWithInStateCompany';
import AddressAmendmentOutStateLlp from './components/ChangeInBusiness/AddressAmendmentOutStateLlp';
import AddressAmendmentoutStateCompany from './components/ChangeInBusiness/AddressAmendmentoutStateCompany';
import AddDirector from './components/ChangeInBusiness/AddDirector';
import AddPartner from './components/ChangeInBusiness/AddPartner';
import IncreaseCapitalLlp from './components/ChangeInBusiness/IncreaseCapitalLlp';
import ChangeInNameLlp from './components/ChangeInBusiness/ChangeInNameLlp';
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
       {/* Changes In Business */}

       <Route path="/DissolutionOfDeed" element={<DissolutionOfDeed/>}/>
       <Route path="/AddressAmendmentWithInStateLlp" element={<AddressAmendmentWithInStateLlp/>}/>
       <Route path="/AddressAmendmentWithInStateCompany" element={<AddressAmendmentWithInStateCompany/>}/>
       <Route path="/AddressAmendmentOutStateLlp" element={<AddressAmendmentOutStateLlp/>}/>
       <Route path="/AddressAmendmentoutStateCompany" element={<AddressAmendmentoutStateCompany/>}/>
       <Route path="/AddDirector" element={<AddDirector/>}/>
       <Route path="/AddPartner" element={<AddPartner/>}/>
       <Route path="/IncreaseCapitalLlp" element={<IncreaseCapitalLlp/>}/>
       <Route path="/ChangeInNameLlp" element={<ChangeInNameLlp/>}/>









      </Routes>
    </>
  );
}

export default App;
