// App.js
import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Navbar from "./common/Navbar";
import LLPCompanyRegistration from "./components/StartBusiness/LLPCompanyRegistration";
import OpcOnePersonCompanyRegistration from "./components/StartBusiness/OpcOnePersonCompanyRegistration";
import ParternerShip from "./components/StartBusiness/ParternerShip";
import ParternLtdCompanyRegisteration from "./components/StartBusiness/ParternLtdCompanyRegisteration";
import Section8CompanyRegistration from "./components/StartBusiness/Section8CompanyRegistration";
import DissolutionOfDeed from "./components/ChangeInBusiness/DissolutionOfDeed";
import AddressAmendmentWithInStateLlp from "./components/ChangeInBusiness/AddressAmendmentWithInStateLlp";
import AddressAmendmentWithInStateCompany from "./components/ChangeInBusiness/AddressAmendmentWithInStateCompany";
import AddressAmendmentOutStateLlp from "./components/ChangeInBusiness/AddressAmendmentOutStateLlp";
import AddressAmendmentoutStateCompany from "./components/ChangeInBusiness/AddressAmendmentoutStateCompany";
import AddDirector from "./components/ChangeInBusiness/AddDirector";
import AddPartner from "./components/ChangeInBusiness/AddPartner";
import IncreaseCapitalLlp from "./components/ChangeInBusiness/IncreaseCapitalLlp";
import ChangeInNameLlp from "./components/ChangeInBusiness/ChangeInNameLlp";
import AnnualComplianceCompancy from "./components/Compliance/AnnualComplianceCompancy";
import AnnualComplianceLlp from "./components/Compliance/AnnualComplianceLlp";
import CmaReport from "./components/Compliance/CmaReport";
import Footer from "./common/Footer";
import Changeincompany from "./components/ChangeInBusiness/Changeincompany";
import RemoveDirectorcompany from "./components/ChangeInBusiness/RemoveDirectorcompany";
import RemoveDirectorllp from "./components/ChangeInBusiness/RemoveDirectorllp";
import IncreaseCapitalCompany from "./components/ChangeInBusiness/IncreaseCapitalCompany";
import ImportExportLicense from "./components/Registration/ImportExportLicense";
import IcegateRegistration from "./components/Registration/IcegateRegistration";
import MsmeUdhyanRegistration from "./components/Registration/MsmeUdhyanRegistration";
import SocietyRegistration from "./components/Registration/SocietyRegistration";
import PfRegistration from "./components/Registration/PfRegistration";
import ProfessionalTaxRegistration from "./components/Registration/ProfessionalTaxRegistration";
import GumastaLicense from "./components/Registration/GumastaLicense";
import TradeMarkRegistration from "./components/Registration/TradeMarkRegistration";
import EsirRegistration from "./components/Registration/EsirRegistration";
import GstRegistration from "./components/Registration/GstRegistration";
import FoodRegistration from "./components/Registration/FoodRegistration";
import TradeLicense from "./components/Registration/TradeLicense";
import GstReturnFiling from "./components/fillingThenMore/GstReturnFiling";
import ITSfiling from "./components/fillingThenMore/ITSfiling";
import TDSReturnFiling from "./components/fillingThenMore/TDSReturnFiling";
import OnlineAccounting from "./components/fillingThenMore/OnlineAccounting";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Start Business */}
        <Route
          path="/LLPCompanyRegistration"
          element={<LLPCompanyRegistration />}
        />
        <Route
          path="/OpcOnePersonCompanyRegistration"
          element={<OpcOnePersonCompanyRegistration />}
        />
        <Route path="/ParternerShip" element={<ParternerShip />} />
        <Route
          path="/PvtLtdCompanyRegisteration"
          element={<ParternLtdCompanyRegisteration />}
        />
        <Route
          path="/Section8CompanyRegistration"
          element={<Section8CompanyRegistration />}
        />
        {/* Changes In Business */}

        <Route path="/DissolutionOfDeed" element={<DissolutionOfDeed />} />
        <Route
          path="/AddressAmendmentWithInStateLlp"
          element={<AddressAmendmentWithInStateLlp />}
        />
        <Route
          path="/AddressAmendmentWithInStateCompany"
          element={<AddressAmendmentWithInStateCompany />}
        />
        <Route
          path="/AddressAmendmentOutStateLlp"
          element={<AddressAmendmentOutStateLlp />}
        />
        <Route
          path="/AddressAmendmentoutStateCompany"
          element={<AddressAmendmentoutStateCompany />}
        />
        <Route path="/AddDirector" element={<AddDirector />} />
        <Route path="/AddPartner" element={<AddPartner />} />
        <Route path="/IncreaseCapitalLlp" element={<IncreaseCapitalLlp />} />
        <Route path="/ChangeInNameLlp" element={<ChangeInNameLlp />} />
        <Route path="/Changeincompany" element={<Changeincompany />} />
        <Route
          path="/RemoveDirectorcompany"
          element={<RemoveDirectorcompany />}
        />
        <Route path="/RemoveDirectorllp" element={<RemoveDirectorllp />} />
        <Route
          path="/IncreaseCapitalCompany"
          element={<IncreaseCapitalCompany />}
        />

        {/* Compliance */}

        <Route
          path="/AnnualComplianceCompancy"
          element={<AnnualComplianceCompancy />}
        />
        <Route path="/AnnualComplianceLlp" element={<AnnualComplianceLlp />} />
        <Route path="/CmaReport" element={<CmaReport />} />

        {/* Registrations */}
        <Route path="/ImportExportLicense" element={<ImportExportLicense />} />
        <Route path="/IcegateRegistration" element={<IcegateRegistration />} />
        <Route
          path="/MsmeUdhyanRegistration"
          element={<MsmeUdhyanRegistration />}
        />
        <Route path="/SocietyRegistration" element={<SocietyRegistration />} />
        <Route path="/PfRegistration" element={<PfRegistration />} />
        <Route
          path="/ProfessionalTaxRegistration"
          element={<ProfessionalTaxRegistration />}
        />
        <Route path="/GumastaLicense" element={<GumastaLicense />} />
        <Route
          path="/TradeMarkRegistration"
          element={<TradeMarkRegistration />}
        />
        <Route path="/EsirRegistration" element={<EsirRegistration />} />
        <Route path="/GstRegistration" element={<GstRegistration />} />
        <Route path="/FoodRegistration" element={<FoodRegistration />} />
        <Route path="/TradeLicense" element={<TradeLicense />} />

        {/* Filing & more */}
        <Route path="/GstReturnFiling" element={<GstReturnFiling/>} /> 
        <Route path="/ITSfiling" element={<ITSfiling/>} />
        <Route path="/TDSReturnFiling" element={<TDSReturnFiling/>} />
        <Route path="/OnlineAccounting" element={<OnlineAccounting/>} />

{/* Drafting */}


      </Routes>

      <Footer />
    </>
  );
}

export default App;
