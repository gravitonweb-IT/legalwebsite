// App.js
import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

// Start Business
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
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import FoodRegistration from "./components/Registration/FoodRegistration";
import GstRegistration from "./components/Registration/GstRegistration";
import GumastaLicense from "./components/Registration/GumastaLicense";
import IcegateRegistration from "./components/Registration/IcegateRegistration";
import ImportExportLicense from "./components/Registration/ImportExportLicense";
import MsmeUdhyanRegistration from "./components/Registration/MsmeUdhyanRegistration";
import PfRegistration from "./components/Registration/PfRegistration";
import ProfessionalTaxRegistration from "./components/Registration/ProfessionalTaxRegistration";
import SocietyRegistration from "./components/Registration/SocietyRegistration";
import TradeLicense from "./components/Registration/TradeLicense";
import TradeMarkRegistration from "./components/Registration/TradeMarkRegistration";
import GstReturnFiling from "./components/fillingThenMore/GstReturnFiling";
import ITSfiling from "./components/fillingThenMore/ITSfiling";
import OnlineAccounting from "./components/fillingThenMore/OnlineAccounting";
import TDSReturnFiling from "./components/fillingThenMore/TDSReturnFiling";
import Affidavit from "./components/Drafting/Affidavit";
import ApplicationForm from "./components/Drafting/ApplicationForm";
import LegalDrafting from "./components/Drafting/LegalDrafting";
import NDADrafting from "./components/Drafting/NDADrafting";
import NOC from "./components/Drafting/NOC";
import PowerOfAttorney from "./components/Drafting/PowerOfAttorney";
import PrivacyPolicyDrafting from "./components/Drafting/PrivacyPolicyDrafting";
import RentAgreement from "./components/Drafting/RentAgreement";
import TermAndCondition from "./components/Drafting/TermAndCondition";
import Will from "./components/Drafting/Will";
import LegalAdvice from "./components/LegalIssue/LegalAdvice";
import LegalNoticePreparation from "./components/LegalIssue/LegalNoticePreparation";
import LegalNoticeReply from "./components/LegalIssue/LegalNoticeReply";
import ProjectReportPreparation from "./components/OtherServices/ProjectReportPreparation";
import CapitalGainCalculator from "./components/Utilities/CapitalGainCalculator";
import EMICalculator from "./components/Utilities/EMICalculator";
import FDCalculator from "./components/Utilities/FDCalculator";
import GratuityCalculator from "./components/Utilities/GratuityCalculator";
import HRACalculator from "./components/Utilities/HRACalculator";
import PPfCalculator from "./components/Utilities/PPfCalculator";
import RDCalculator from "./components/Utilities/RDCalculator";
import SimpleInterestCalculator from "./components/Utilities/SimpleInterestCalculator";
import SIPCalculator from "./components/Utilities/SIPCalculator";
import TDSCalculator from "./components/Utilities/TDSCalculator";
import UCalculator from "./components/Utilities/UCalculator";
import GSTCalculator from "./components/Utilities/GSTCalculator";
import BalanceSheetPraparationAndPL from "./components/OtherServices/BalanceSheetPraparationAndPL";
import EsicRegistration from "./components/Registration/EsicRegistration";


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
          path="/ParternLtdCompanyRegisteration"
          element={<ParternLtdCompanyRegisteration />}
        />
        <Route
          path="/Section8CompanyRegistration "
          element={<Section8CompanyRegistration />}
        />

          {/* Compliance */}

          <Route
          path="/AnnualComplianceCompancy"
          element={<AnnualComplianceCompancy />}
        />
        <Route path="/AnnualComplianceLlp" element={<AnnualComplianceLlp />} />
        <Route path="/CmaReport" element={<CmaReport />} />


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

      {/* Registration */}
      <Route path="/EsicRegistration" element={<EsicRegistration/>} />
      <Route path="/FoodRegistration" element={<FoodRegistration/>} />
      <Route path="/GstRegistration" element={<GstRegistration/>} />
      <Route path="/GumastaLicense" element={<GumastaLicense/>} />
      <Route path="/IcegateRegistration" element={<IcegateRegistration/>} />
      <Route path="/ImportExportLicense" element={<ImportExportLicense/>} />
      <Route path="/MsmeUdhyanRegistration" element={<MsmeUdhyanRegistration/>} />
      <Route path="/PfRegistration" element={<PfRegistration/>} />
      <Route path="/ProfessionalTaxRegistration" element={<ProfessionalTaxRegistration/>} />
      <Route path="/SocietyRegistration" element={<SocietyRegistration/>} />
      <Route path="/TradeLicense" element={<TradeLicense/>} />
      <Route path="/TradeMarkRegistration" element={<TradeMarkRegistration/>} />
    
    

      {/* Filing & More */}
      <Route path="/GstReturnFiling" element={<GstReturnFiling/>} />
      <Route path="/ITSfiling" element={<ITSfiling/>} />
      <Route path="/OnlineAccounting" element={<OnlineAccounting/>} />
      <Route path="/TDSReturnFiling" element={<TDSReturnFiling/>} />



      {/* Drafting  */}

      <Route path="/Affidavit" element={<Affidavit/>} />
      <Route path="/ApplicationForm" element={<ApplicationForm/>} />
      <Route path="/LegalDrafting" element={<LegalDrafting/>} />
      <Route path="/NDADrafting" element={<NDADrafting/>} />
      <Route path="/NOC" element={<NOC/>} />
      <Route path="/PowerOfAttorney" element={<PowerOfAttorney/>} />
      <Route path="/PrivacyPolicyDrafting" element={<PrivacyPolicyDrafting/>} />
      <Route path="/RentAgreement" element={<RentAgreement/>} />
      <Route path="/TermAndCondition" element={<TermAndCondition/>} />
      <Route path="/Will" element={<Will/>} />





      {/* Legal Issues */}

      <Route path="/LegalAdvice" element={<LegalAdvice/>} />
      <Route path="/LegalNoticePreparation" element={<LegalNoticePreparation/>} />
      <Route path="/LegalNoticeReply" element={<LegalNoticeReply/>} />


      {/* Other Services  */}

      <Route path="/BalanceSheetPraparationAndPL" element={<BalanceSheetPraparationAndPL/>} />
      <Route path="/ProjectReportPreparation" element={<ProjectReportPreparation/>} />


      {/* Utilities */}

      <Route path="/CapitalGainCalculator" element={<CapitalGainCalculator/>} />
      <Route path="/EMICalculator" element={<EMICalculator/>} />
      <Route path="/FDCalculator" element={<FDCalculator/>} />
      <Route path="/GratuityCalculator" element={<GratuityCalculator/>} />
      <Route path="/GSTCalculator" element={<GSTCalculator/>} />
      <Route path="/HRACalculator" element={<HRACalculator/>} />
      <Route path="/PPfCalculator" element={<PPfCalculator/>} />
      <Route path="/RDCalculator" element={<RDCalculator/>} />
      <Route path="/SimpleInterestCalculator" element={<SimpleInterestCalculator/>} />
      <Route path="/SIPCalculator" element={<SIPCalculator/>} />
      <Route path="/CapitalGainCalculator" element={<TDSCalculator/>} />
      <Route path="/CapitalGainCalculator" element={<UCalculator/>} />
     





      </Routes>
      <Footer />
    </>
  );
}

export default App;
