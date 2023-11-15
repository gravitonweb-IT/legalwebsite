import React, { useEffect, useRef } from "react";
import "./home.css";
import "./css/navbar.css";
import "./css/font/CerebriSans-Bold.ttf";
import "./css/plugins.css";
import "./css/navbar.css";
import "./css/style.css";
import "./css/bootsnav.css";
// import './css/all_calculator.css';
import "./css/animation.css";
import "./css/header.css";
import "./css/Consultancy.css";
import "./css/trackingresponsive.css";
import "./css/tracking.css";
import "./css/textanimation.css";
import "./css/tds_calculator.css";
import "./css/style2.css";
import "./css/services.css";
import "./css/services2.css";
import "./css/select2.css";
import "./css/select3.css";
import "./css/policy.css";
import "./css/owl.theme.default.min.css";
import "./css/owl.carousel.min.css";
import "./css/new-hover.css";
import "./css/lovefromourclient.css";
import Close from "./images/closeicon.svg";
import Captureimg from "./images/Capture.png";
import Cancelimg from "./images/cancel.svg";
import Whatsappicon from "./images/whatsapp-icon.svg";
import Groupimg from "./images/Group_401.svg";
import Submithammer from "./images/submithammer.svg";
import Siderbar from "./images/sidebarshape.png";
import Cancle1 from "./images/cancel.svg";
import Homework from "./images/howwework.svg";
import Hometogetcon from "./images/howtogetcon.svg";
import Blog from "./images/blog.svg";
import Aboutus from "./images/aboutus.svg";
import Contactus from "./images/contactus.svg";
import Whatsapp from "./images/whatsapp.svg";
import Phoneno from "./images/phoneno.svg";
import Loginimg from "./images/common/login.svg";
import Pathimg from "./images/common/Path_1.svg";
import Agentimg from "./images/common/agent.svg";
import Trackservice from "./images/trackservice.svg";
import Groupimg1 from "./images/common/Group_7.svg";
import Groupimg2 from "./images/common/Group_3.svg";
import Sidesearchicon from "./images/sidesearchicon.svg";
import Star from "./images/star.svg";
// import Lglimg from "./images/common/legal.svg";
import Groupimg3 from "./images/megamenubimage/Group_5675.png";
import Partship from "./images/icons/partnership-deed.svg";
import Companyimg from "./images/icons/company-reg.svg";
import Sectionimg from "./images/icons/section8-reg.svg";
import LLpimg from "./images/icons/llp.svg";
import OPCimg from "./images/icons/opc.svg";

import Groupimg4 from "./images/megamenubimage/Group_5675.png";
import Annualimg from "./images/icons/newicons/annualcompliancellp.svg";
import Cmareport from "./images/icons/newicons/CMAReport.svg";
import Adddir from "./images/icons/newicons/AddDirector(company).svg";
import Group5675 from "./images/megamenubimage/Group_5675.png";
import Group917 from "./images/icons/Group 5917.svg";
import Addressimg from "./images/icons/newicons/AddressAmendmentWithinstate(LLP).svg";
import Addressimg2 from "./images/icons/newicons/AddressAmendmentWithinstate(Company).svg";
import Addressimg3 from "./images/icons/newicons/AddressAmendmentoutofstate(LLP).svg";
import Addressimg4 from "./images/icons/newicons/AddressAmendmentoutofstate(Company).svg";
import Addressimg5 from "./images/icons/newicons/AddDirector(company).svg";
import Addpartner from "./images/icons/newicons/AddPartner(LLP).svg";
import Increaseimg from "./images/icons/newicons/IncreaseCapital(LLP).svg";
import Changeimg from "./images/icons/newicons/ChangeInNameofLLP.svg";

import GroupEmail from "./images/Group_401.svg";
import Group5915 from "./images/icons/Group 5915.svg";
import Group9729 from "./images/review/Group_9729.jpg";
import Consultancyimg from "./images/consultancy.svg";
import Thumbnailimg from "./images/review/Thumbnail_For_Web_copy.jpg";
import Legallogoimg from "./images/review/Group 9575.png";
import Gstimg from "./images/home/GST.jpg";
import Linkedinimg from "./images/sociallinkedin.svg";
import Fbimg from "./images/socialfb.svg";
import Instaimg from "./images/socialinsta.svg";
import Twitterimg from "./images/socialtwitter.svg";
import Emailimg from "./images/subscribeemail.svg";
import CloseImg from "./images/closeicon.svg";
import Email2img from "./images/iconmonstr-email-2.svg";
import SubEmailimg from "./images/subemail.svg";
import GetStartArrow from "./images/getstartedarrow.svg";
import Employeeimg from "./images/companyregimage/employee-experience.png";
import Caseimg from "./images/companyregimage/case-report.png";
import GoldcupImg from "./images/companyregimage/gold-cup.png";
import Customerimg from "./images/companyregimage/customer.png";
import Group82 from "./images/companyregimage/Mask Group 5782.png";
import Preferredimg from "./images/companyregimage/badge-example-preferred.png";
import Userimg from "./images/companyregimage/users.png";
import Polygonimg from "./images/review/Polygon85.svg";
import Layerimg from "./images/review/Layer_2_1_1.svg";
import GroupA from "./images/review/Group_3506_1_1.svg";
import Professonial from "./images/review/proffessional.svg";
import Group3505 from "./images/review/Group3505.svg";
import Group5909 from "./images/review/Group5909.svg";
import Group3507 from "./images/review/Group3507.png";
import Group5912 from "./images/review/Group5912.svg";
import Group9704 from "./images/review/Group9704.png";
import NOpathimg from "./images/review/NoPath.png";
import Group59519 from "./images/review/Group5919.svg";
import Moviesimg from "./images/icons/movie-copyright_1.svg";
import Group9648 from "./images/review/Group9648.svg";
import Taximg from "./images/bookdemo/tax-rates.png";
import TaxPlaningimg from "./images/bookdemo/advance-tax-planning.png";
import Consultantimg from "./images/bookdemo/consultant.png";
import Consulationimg from "./images/bookdemo/health-consultation.png";
// import Layerimg from "./images/bookdemo/Layer%202.png";
import ArrowRightimg from "./images/review/awesome-long-arrow-alt-right.svg";
import Navyimg from "./images/bookdemo/navy-officer.png";
import Illustrationimg from "./images/downloadillustration.png";
import Googleplayimg from "./images/google_play-icon.svg";
import Appleimg from "./images/apple-logo.png";
import Heartimg from "./images/bookdemo/heart.svg";
import Kailashimg from "./images/bookdemo/Kailash_Chandra_Verma.jpg";
import Quoteimg from "./images/bookdemo/quote.svg";
import Gruoup9638 from "./images/review/Group9648.svg";
import Virendraimg from "./images/bookdemo/Virendra_Vishwkarma.jpg";
import Quoteimg2 from "./images/bookdemo/quote.svg";
import Thumbnailimg2 from "./images/review/Thumbnail_For_Web_copy1.jpg";
import Thumbnailimg3 from "./images/review/Thumbnail_For_Web_copy2.jpg";
import Reviesimg from "./images/review/Group9648.svg";
import Priyankaimg from "./images/bookdemo/PriyankaVerma.jpg";
import Monuimg from "./images/bookdemo/Monu_Panchal.jpg";
import Clientsimg from "./images/clients/1.png";
import Clientsimg2 from "./images/clients/2.png";
import Clientsimg3 from "./images/clients/3.png";
import Clientsimg4 from "./images/clients/4.png";
import Clientsimg5 from "./images/clients/5.png";
import Clientsimg6 from "./images/clients/6.png";
import Clientsimg7 from "./images/clients/7.png";
import Clientsimg8 from "./images/clients/8.png";
import Clientsimg9 from "./images/clients/9.png";
import Clientsimg10 from "./images/clients/10.png";
import Clientsimg11 from "./images/clients/11.png";
import Clientsimg12 from "./images/clients/12.png";
import Clientsimg13 from "./images/clients/13.png";
import Group9961 from "./images/bookdemo/Group_9961.png";
import Group9730 from "./images/bookdemo/Group_9730.png";
import Titleimg1 from "./images/bookdemo/tile1.png";
import Titleimg2 from "./images/bookdemo/tile2.png";
import Titleimg3 from "./images/bookdemo/tile3.png";
import Titleimg4 from "./images/bookdemo/tile4.png";
import Titleimg5 from "./images/bookdemo/tile1.png";
import Titleimg6 from "./images/bookdemo/tile2.png";
import Titleimg7 from "./images/bookdemo/tile3.png";
import Titleimg8 from "./images/bookdemo/tile4.png";
import Titleimg9 from "./images/bookdemo/tile1.png";
import Titleimg10 from "./images/bookdemo/tile2.png";
import Whatisimg from "./images/What is legal251.jpg";
import Legalconsultancy from "./images/how to get consultancy.jpg";
import Legalworkimg from "./images/how legal251 works.jpg";
import Onlineimg from "./images/online acc.jpg";
import Trackimg from "./images/Track consultancy service.jpg";
import Supportimg from "./images/widget-image-support-1.svg";
import Whatsappimg2 from "./images/whatsapp-icon.svg";
import Group9801img from "./images/bookdemo/Group_9801.svg";
import Group209801 from "./images/bookdemo/Group 9801.png";
import Ressponimg from "./images/bookdemo/resspon_Group_9962.png";
import Group97982 from "./images/bookdemo/Group_97982x.png";
import Legalwhitelogo from "./images/legalwhitelogo.svg";
import Visaimg from "./images/visa.svg";
import Upiimg from "./images/upi.svg";
import Rupayimg from "./images/rupay.svg";
import Paytmimg from "./images/paytm.svg";
import Mastercardimg from "./images/mastercard.svg";
import Emailbuttonimg from "./images/emailbutton.svg";
import Footerinstaimg from "./images/footerinsta.svg";
import FooterTwitter from "./images/fottertwitter.svg";
import FooterLinkedingimg from "./images/footerlinkedin.svg";
import Footerfbimg from "./images/footerfb.svg";
import Popupimg from "./images/popupcross2.svg";
import Phonecallimg from "./images/phonecall.svg";
import Emailimg2 from "./images/EMAIL.png";
import Contactimg from "./images/home/contact.svg";
import Personimg from "./images/personimage.svg";
import Typewriter from "typewriter-effect";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TypeIt from "typeit";
import Group5911img from "./images/review/Group5911.png";
import Group5913img from "./images/review/Group5913.svg";
import Group5916img from "./images/icons/Group 5916.svg";
import Group5645img from "./images/icons/Group_5645_1.svg";
import Group5631img from "./images/icons/Group_5631_1.svg";
// import Group5918img from "./images/icons/Group 5918.svg";
import Group5920img from "./images/icons/Group 5920.svg";
import { Link } from "react-router-dom";

export default function Home() {
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

 

  return (
    <>
      <div style={{ position: "relative", overflowX: "hidden" }}>
        <div
          className="input-group popupsearchbar"
          style={{ position: "fixed", display: "none" }}
        >
          <input
            type="text"
            id="pop-input"
            name="search_entered"
            autoComplete="off"
            className="form-control Searchbar1"
            placeholder="Search..."
            style={{ boxShadow: "none", borderColor: "#2d2d2d" }}
          />
          <div className="pop-data" style={{ position: "absolute" }}></div>
          <div className="input-group-btn">
            <div
              className="input-group-addon"
              id="hide"
              style={{
                padding: 0,
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <div className="popupsearchbaraddon">
                <img src={Close} className="subscribeemailclose" />
              </div>
            </div>
          </div>
        </div>
        <div className="sidephoneform">
          <img
          src={Captureimg}
            className="formholeshape"
            style={{ position: "absolute", zIndex: -1 }}
          />
          <img
            src={Cancelimg}
            className="formcloseicon"
            style={{ cursor: "pointer", position: "absolute" }}
            onclick="closesideNav()"
          />
          <div className="sideformdiv">
            <p className="sideformheading">Reach Us Out</p>
            <center>
              <div className="success-show" style={{ display: "none" }}>
                <div className="dummy-positioning d-flex">
                  <div className="success-icon">
                    <div className="success-icon__tip" />
                    <div className="success-icon__long" />
                  </div>
                  <p className="successmessageside">
                    Thank you for Filing out your information!
                    <br />
                    We appreciate you contacting Legal251. We will get back in
                    touch with you soon! Have a great day!
                  </p>
                </div>
              </div>
              <div>
                <input
                  id="sidename"
                  type="text"
                  maxLength={150}
                  pattern="[A-Za-z ]{3,150}"
                  className="text-center getconsultancysideinput"
                  placeholder="Name"
                  required=""
                />
                <br />
                <input
                  id="sideemail"
                  type="email"
                  maxLength={50}
                  className="text-center getconsultancysideinput"
                  placeholder="E-mail"
                  required=""
                />
                <br />
                <input
                  id="sidecontact"
                  type="tel"
                  pattern="[6-9]{1}[0-9]{9}"
                  maxLength={10}
                  className="text-center getconsultancysideinput"
                  placeholder="Contact no."
                  required=""
                />
                <input
                  type="hidden"
                  className="appendcontactno"
                  defaultValue="R"
                  id="typeofside"
                />
                <br />
                <br />
                <select
                  id="city"
                  className="js-example-basic-single"
                  style={{ zIndex: 9999999999 }}
                  name="state"
                >
                  <option className="cities" data-value="" />
                  <option className="cities" data-value={1}>
                    Adilabad
                  </option>
                  <option className="cities" data-value={2}>
                    Agar Malwa
                  </option>
                  <option className="cities" data-value={3}>
                    Agra
                  </option>
                  <option className="cities" data-value={4}>
                    Ahmedabad
                  </option>
                  <option className="cities" data-value={5}>
                    Ahmednagar
                  </option>
                  <option className="cities" data-value={6}>
                    Aizawl
                  </option>
                  <option className="cities" data-value={7}>
                    Ajmer
                  </option>
                  <option className="cities" data-value={8}>
                    Akola
                  </option>
                  <option className="cities" data-value={9}>
                    Alappuzha
                  </option>
                  <option className="cities" data-value={10}>
                    Aligarh
                  </option>
                  <option className="cities" data-value={11}>
                    Alipurduar
                  </option>
                  <option className="cities" data-value={12}>
                    Alirajpur
                  </option>
                  <option className="cities" data-value={13}>
                    Allahabad
                  </option>
                  <option className="cities" data-value={14}>
                    Almora
                  </option>
                  <option className="cities" data-value={15}>
                    Alwar
                  </option>
                  <option className="cities" data-value={16}>
                    Ambala
                  </option>
                  <option className="cities" data-value={17}>
                    Ambedkar Nagar
                  </option>
                  <option className="cities" data-value={18}>
                    Amethi (Chatrapati Sahuji Mahraj Nagar)
                  </option>
                  <option className="cities" data-value={19}>
                    Amravati
                  </option>
                  <option className="cities" data-value={20}>
                    Amreli
                  </option>
                  <option className="cities" data-value={21}>
                    Amritsar
                  </option>
                  <option className="cities" data-value={22}>
                    Amroha
                  </option>
                  <option className="cities" data-value={23}>
                    Anand
                  </option>
                  <option className="cities" data-value={24}>
                    Anantapur
                  </option>
                  <option className="cities" data-value={25}>
                    Anantnag
                  </option>
                  <option className="cities" data-value={26}>
                    Angul
                  </option>
                  <option className="cities" data-value={27}>
                    Anjaw
                  </option>
                  <option className="cities" data-value={28}>
                    Anuppur
                  </option>
                  <option className="cities" data-value={29}>
                    Araria
                  </option>
                  <option className="cities" data-value={30}>
                    Aravalli
                  </option>
                  <option className="cities" data-value={31}>
                    Ariyalur
                  </option>
                  <option className="cities" data-value={32}>
                    Arwal
                  </option>
                  <option className="cities" data-value={33}>
                    Ashoknagar
                  </option>
                  <option className="cities" data-value={34}>
                    Auraiya
                  </option>
                  <option className="cities" data-value={35}>
                    Aurangabad (BH)
                  </option>
                  <option className="cities" data-value={36}>
                    Aurangabad (MH)
                  </option>
                  <option className="cities" data-value={37}>
                    Azamgarh
                  </option>
                  <option className="cities" data-value={38}>
                    Bagalkot
                  </option>
                  <option className="cities" data-value={39}>
                    Bageshwar
                  </option>
                  <option className="cities" data-value={40}>
                    Baghpat
                  </option>
                  <option className="cities" data-value={41}>
                    Bahraich
                  </option>
                  <option className="cities" data-value={42}>
                    Baksa
                  </option>
                  <option className="cities" data-value={43}>
                    Balaghat
                  </option>
                  <option className="cities" data-value={44}>
                    Balangir
                  </option>
                  <option className="cities" data-value={45}>
                    Balasore
                  </option>
                  <option className="cities" data-value={46}>
                    Ballari (Bellary)
                  </option>
                  <option className="cities" data-value={47}>
                    Ballia
                  </option>
                  <option className="cities" data-value={48}>
                    Balod
                  </option>
                  <option className="cities" data-value={49}>
                    Baloda Bazar
                  </option>
                  <option className="cities" data-value={50}>
                    Balrampur (CG)
                  </option>
                  <option className="cities" data-value={51}>
                    Balrampur (UP)
                  </option>
                  <option className="cities" data-value={52}>
                    Banaskantha (Palanpur)
                  </option>
                  <option className="cities" data-value={53}>
                    Banda
                  </option>
                  <option className="cities" data-value={54}>
                    Bandipore
                  </option>
                  <option className="cities" data-value={55}>
                    Banka
                  </option>
                  <option className="cities" data-value={56}>
                    Bankura
                  </option>
                  <option className="cities" data-value={57}>
                    Banswara
                  </option>
                  <option className="cities" data-value={58}>
                    Barabanki
                  </option>
                  <option className="cities" data-value={59}>
                    Baramulla
                  </option>
                  <option className="cities" data-value={60}>
                    Baran
                  </option>
                  <option className="cities" data-value={61}>
                    Bareilly
                  </option>
                  <option className="cities" data-value={62}>
                    Bargarh
                  </option>
                  <option className="cities" data-value={63}>
                    Barmer
                  </option>
                  <option className="cities" data-value={64}>
                    Barnala
                  </option>
                  <option className="cities" data-value={65}>
                    Barpeta
                  </option>
                  <option className="cities" data-value={66}>
                    Barwani
                  </option>
                  <option className="cities" data-value={67}>
                    Bastar
                  </option>
                  <option className="cities" data-value={68}>
                    Basti
                  </option>
                  <option className="cities" data-value={69}>
                    Bathinda
                  </option>
                  <option className="cities" data-value={70}>
                    Beed
                  </option>
                  <option className="cities" data-value={71}>
                    Begusarai
                  </option>
                  <option className="cities" data-value={72}>
                    Belagavi (Belgaum)
                  </option>
                  <option className="cities" data-value={73}>
                    Bemetara
                  </option>
                  <option className="cities" data-value={74}>
                    Bengaluru (Bangalore) Rural
                  </option>
                  <option className="cities" data-value={75}>
                    Bengaluru (Bangalore) Urban
                  </option>
                  <option className="cities" data-value={76}>
                    Betul
                  </option>
                  <option className="cities" data-value={77}>
                    Bhadohi
                  </option>
                  <option className="cities" data-value={78}>
                    Bhadradri Kothagudem
                  </option>
                  <option className="cities" data-value={79}>
                    Bhadrak
                  </option>
                  <option className="cities" data-value={80}>
                    Bhagalpur
                  </option>
                  <option className="cities" data-value={81}>
                    Bhandara
                  </option>
                  <option className="cities" data-value={82}>
                    Bharatpur
                  </option>
                  <option className="cities" data-value={83}>
                    Bharuch
                  </option>
                  <option className="cities" data-value={84}>
                    Bhavnagar
                  </option>
                  <option className="cities" data-value={85}>
                    Bhilwara
                  </option>
                  <option className="cities" data-value={86}>
                    Bhind
                  </option>
                  <option className="cities" data-value={87}>
                    Bhiwani
                  </option>
                  <option className="cities" data-value={88}>
                    Bhojpur
                  </option>
                  <option className="cities" data-value={89}>
                    Bhopal
                  </option>
                  <option className="cities" data-value={90}>
                    Bidar
                  </option>
                  <option className="cities" data-value={91}>
                    Bijapur
                  </option>
                  <option className="cities" data-value={92}>
                    Bijnor
                  </option>
                  <option className="cities" data-value={93}>
                    Bikaner
                  </option>
                  <option className="cities" data-value={94}>
                    Bilaspur (CG)
                  </option>
                  <option className="cities" data-value={95}>
                    Bilaspur (HP)
                  </option>
                  <option className="cities" data-value={96}>
                    Birbhum
                  </option>
                  <option className="cities" data-value={97}>
                    Bishnupur
                  </option>
                  <option className="cities" data-value={98}>
                    Biswanath
                  </option>
                  <option className="cities" data-value={99}>
                    Bokaro
                  </option>
                  <option className="cities" data-value={100}>
                    Bongaigaon
                  </option>
                  <option className="cities" data-value={101}>
                    Botad
                  </option>
                  <option className="cities" data-value={102}>
                    Boudh
                  </option>
                  <option className="cities" data-value={103}>
                    Budaun
                  </option>
                  <option className="cities" data-value={104}>
                    Budgam
                  </option>
                  <option className="cities" data-value={105}>
                    Bulandshahr
                  </option>
                  <option className="cities" data-value={106}>
                    Buldhana
                  </option>
                  <option className="cities" data-value={107}>
                    Bundi
                  </option>
                  <option className="cities" data-value={108}>
                    Burhanpur
                  </option>
                  <option className="cities" data-value={109}>
                    Buxar
                  </option>
                  <option className="cities" data-value={110}>
                    Cachar
                  </option>
                  <option className="cities" data-value={111}>
                    Central Delhi
                  </option>
                  <option className="cities" data-value={112}>
                    Chamarajanagar
                  </option>
                  <option className="cities" data-value={113}>
                    Chamba
                  </option>
                  <option className="cities" data-value={114}>
                    Chamoli
                  </option>
                  <option className="cities" data-value={115}>
                    Champawat
                  </option>
                  <option className="cities" data-value={116}>
                    Champhai
                  </option>
                  <option className="cities" data-value={117}>
                    Chandauli
                  </option>
                  <option className="cities" data-value={118}>
                    Chandel
                  </option>
                  <option className="cities" data-value={119}>
                    Chandigarh
                  </option>
                  <option className="cities" data-value={120}>
                    Chandrapur
                  </option>
                  <option className="cities" data-value={121}>
                    Changlang
                  </option>
                  <option className="cities" data-value={122}>
                    Charaideo
                  </option>
                  <option className="cities" data-value={123}>
                    Charkhi Dadri
                  </option>
                  <option className="cities" data-value={124}>
                    Chatra
                  </option>
                  <option className="cities" data-value={125}>
                    Chengalpattu
                  </option>
                  <option className="cities" data-value={126}>
                    Chennai
                  </option>
                  <option className="cities" data-value={127}>
                    Chhatarpur
                  </option>
                  <option className="cities" data-value={128}>
                    Chhindwara
                  </option>
                  <option className="cities" data-value={129}>
                    Chhota Udepur
                  </option>
                  <option className="cities" data-value={130}>
                    Chikballapur
                  </option>
                  <option className="cities" data-value={131}>
                    Chikkamagaluru (Chikmagalur)
                  </option>
                  <option className="cities" data-value={132}>
                    Chirang
                  </option>
                  <option className="cities" data-value={133}>
                    Chitradurga
                  </option>
                  <option className="cities" data-value={134}>
                    Chitrakoot
                  </option>
                  <option className="cities" data-value={135}>
                    Chittoor
                  </option>
                  <option className="cities" data-value={136}>
                    Chittorgarh
                  </option>
                  <option className="cities" data-value={137}>
                    Churachandpur
                  </option>
                  <option className="cities" data-value={138}>
                    Churu
                  </option>
                  <option className="cities" data-value={139}>
                    Coimbatore
                  </option>
                  <option className="cities" data-value={140}>
                    Cooch Behar
                  </option>
                  <option className="cities" data-value={141}>
                    Cuddalore
                  </option>
                  <option className="cities" data-value={142}>
                    Cuttack
                  </option>
                  <option className="cities" data-value={143}>
                    Dadra &amp; Nagar Haveli
                  </option>
                  <option className="cities" data-value={144}>
                    Dahod
                  </option>
                  <option className="cities" data-value={145}>
                    Dakshin Dinajpur (South Dinajpur)
                  </option>
                  <option className="cities" data-value={146}>
                    Dakshina Kannada
                  </option>
                  <option className="cities" data-value={147}>
                    Daman
                  </option>
                  <option className="cities" data-value={148}>
                    Damoh
                  </option>
                  <option className="cities" data-value={149}>
                    Dangs (Ahwa)
                  </option>
                  <option className="cities" data-value={150}>
                    Dantewada (South Bastar)
                  </option>
                  <option className="cities" data-value={151}>
                    Darbhanga
                  </option>
                  <option className="cities" data-value={152}>
                    Darjeeling
                  </option>
                  <option className="cities" data-value={153}>
                    Darrang
                  </option>
                  <option className="cities" data-value={154}>
                    Datia
                  </option>
                  <option className="cities" data-value={155}>
                    Dausa
                  </option>
                  <option className="cities" data-value={156}>
                    Davangere
                  </option>
                  <option className="cities" data-value={157}>
                    Dehradun
                  </option>
                  <option className="cities" data-value={158}>
                    Deogarh
                  </option>
                  <option className="cities" data-value={159}>
                    Deoghar
                  </option>
                  <option className="cities" data-value={160}>
                    Deoria
                  </option>
                  <option className="cities" data-value={161}>
                    Devbhoomi Dwarka
                  </option>
                  <option className="cities" data-value={162}>
                    Dewas
                  </option>
                  <option className="cities" data-value={163}>
                    Dhalai
                  </option>
                  <option className="cities" data-value={164}>
                    Dhamtari
                  </option>
                  <option className="cities" data-value={165}>
                    Dhanbad
                  </option>
                  <option className="cities" data-value={166}>
                    Dhar
                  </option>
                  <option className="cities" data-value={167}>
                    Dharmapuri
                  </option>
                  <option className="cities" data-value={168}>
                    Dharwad
                  </option>
                  <option className="cities" data-value={169}>
                    Dhemaji
                  </option>
                  <option className="cities" data-value={170}>
                    Dhenkanal
                  </option>
                  <option className="cities" data-value={171}>
                    Dholpur
                  </option>
                  <option className="cities" data-value={172}>
                    Dhubri
                  </option>
                  <option className="cities" data-value={173}>
                    Dhule
                  </option>
                  <option className="cities" data-value={174}>
                    Dibang Valley
                  </option>
                  <option className="cities" data-value={175}>
                    Dibrugarh
                  </option>
                  <option className="cities" data-value={176}>
                    Dima Hasao (North Cachar Hills)
                  </option>
                  <option className="cities" data-value={177}>
                    Dimapur
                  </option>
                  <option className="cities" data-value={178}>
                    Dindigul
                  </option>
                  <option className="cities" data-value={179}>
                    Dindori
                  </option>
                  <option className="cities" data-value={180}>
                    Diu
                  </option>
                  <option className="cities" data-value={181}>
                    Doda
                  </option>
                  <option className="cities" data-value={182}>
                    Dumka
                  </option>
                  <option className="cities" data-value={183}>
                    Dungarpur
                  </option>
                  <option className="cities" data-value={184}>
                    Durg
                  </option>
                  <option className="cities" data-value={185}>
                    East Champaran (Motihari)
                  </option>
                  <option className="cities" data-value={186}>
                    East Delhi
                  </option>
                  <option className="cities" data-value={187}>
                    East Garo Hills
                  </option>
                  <option className="cities" data-value={188}>
                    East Godavari
                  </option>
                  <option className="cities" data-value={189}>
                    East Jaintia Hills
                  </option>
                  <option className="cities" data-value={190}>
                    East Kameng
                  </option>
                  <option className="cities" data-value={191}>
                    East Khasi Hills
                  </option>
                  <option className="cities" data-value={192}>
                    East Siang
                  </option>
                  <option className="cities" data-value={193}>
                    East Sikkim
                  </option>
                  <option className="cities" data-value={194}>
                    East Singhbhum
                  </option>
                  <option className="cities" data-value={195}>
                    Ernakulam
                  </option>
                  <option className="cities" data-value={196}>
                    Erode
                  </option>
                  <option className="cities" data-value={197}>
                    Etah
                  </option>
                  <option className="cities" data-value={198}>
                    Etawah
                  </option>
                  <option className="cities" data-value={199}>
                    Faizabad
                  </option>
                  <option className="cities" data-value={200}>
                    Faridabad
                  </option>
                  <option className="cities" data-value={201}>
                    Faridkot
                  </option>
                  <option className="cities" data-value={202}>
                    Farrukhabad
                  </option>
                  <option className="cities" data-value={203}>
                    Fatehabad
                  </option>
                  <option className="cities" data-value={204}>
                    Fatehgarh Sahib
                  </option>
                  <option className="cities" data-value={205}>
                    Fatehpur
                  </option>
                  <option className="cities" data-value={206}>
                    Fazilka
                  </option>
                  <option className="cities" data-value={207}>
                    Ferozepur
                  </option>
                  <option className="cities" data-value={208}>
                    Firozabad
                  </option>
                  <option className="cities" data-value={209}>
                    Gadag
                  </option>
                  <option className="cities" data-value={210}>
                    Gadchiroli
                  </option>
                  <option className="cities" data-value={211}>
                    Gajapati
                  </option>
                  <option className="cities" data-value={212}>
                    Ganderbal
                  </option>
                  <option className="cities" data-value={213}>
                    Gandhinagar
                  </option>
                  <option className="cities" data-value={214}>
                    Ganjam
                  </option>
                  <option className="cities" data-value={215}>
                    Garhwa
                  </option>
                  <option className="cities" data-value={216}>
                    Gariyaband
                  </option>
                  <option className="cities" data-value={217}>
                    Gautam Buddha Nagar
                  </option>
                  <option className="cities" data-value={218}>
                    Gaya
                  </option>
                  <option className="cities" data-value={219}>
                    Ghaziabad
                  </option>
                  <option className="cities" data-value={220}>
                    Ghazipur
                  </option>
                  <option className="cities" data-value={221}>
                    Gir Somnath
                  </option>
                  <option className="cities" data-value={222}>
                    Giridih
                  </option>
                  <option className="cities" data-value={223}>
                    Goalpara
                  </option>
                  <option className="cities" data-value={224}>
                    Godda
                  </option>
                  <option className="cities" data-value={225}>
                    Golaghat
                  </option>
                  <option className="cities" data-value={226}>
                    Gomati
                  </option>
                  <option className="cities" data-value={227}>
                    Gonda
                  </option>
                  <option className="cities" data-value={228}>
                    Gondia
                  </option>
                  <option className="cities" data-value={229}>
                    Gopalganj
                  </option>
                  <option className="cities" data-value={230}>
                    Gorakhpur
                  </option>
                  <option className="cities" data-value={231}>
                    Gumla
                  </option>
                  <option className="cities" data-value={232}>
                    Guna
                  </option>
                  <option className="cities" data-value={233}>
                    Guntur
                  </option>
                  <option className="cities" data-value={234}>
                    Gurdaspur
                  </option>
                  <option className="cities" data-value={235}>
                    Gurugram (Gurgaon)
                  </option>
                  <option className="cities" data-value={236}>
                    Gwalior
                  </option>
                  <option className="cities" data-value={237}>
                    Hailakandi
                  </option>
                  <option className="cities" data-value={238}>
                    Hamirpur (HP)
                  </option>
                  <option className="cities" data-value={239}>
                    Hamirpur (UP)
                  </option>
                  <option className="cities" data-value={240}>
                    Hanumangarh
                  </option>
                  <option className="cities" data-value={241}>
                    Hapur (Panchsheel Nagar)
                  </option>
                  <option className="cities" data-value={242}>
                    Harda
                  </option>
                  <option className="cities" data-value={243}>
                    Hardoi
                  </option>
                  <option className="cities" data-value={244}>
                    Haridwar
                  </option>
                  <option className="cities" data-value={245}>
                    Hassan
                  </option>
                  <option className="cities" data-value={246}>
                    Hathras
                  </option>
                  <option className="cities" data-value={247}>
                    Haveri
                  </option>
                  <option className="cities" data-value={248}>
                    Hazaribag
                  </option>
                  <option className="cities" data-value={249}>
                    Hingoli
                  </option>
                  <option className="cities" data-value={250}>
                    Hisar
                  </option>
                  <option className="cities" data-value={251}>
                    Hojai
                  </option>
                  <option className="cities" data-value={252}>
                    Hooghly
                  </option>
                  <option className="cities" data-value={253}>
                    Hoshangabad
                  </option>
                  <option className="cities" data-value={254}>
                    Hoshiarpur
                  </option>
                  <option className="cities" data-value={255}>
                    Howrah
                  </option>
                  <option className="cities" data-value={256}>
                    Hyderabad
                  </option>
                  <option className="cities" data-value={257}>
                    Idukki
                  </option>
                  <option className="cities" data-value={258}>
                    Imphal East
                  </option>
                  <option className="cities" data-value={259}>
                    Imphal West
                  </option>
                  <option className="cities" data-value={260}>
                    Indore
                  </option>
                  <option className="cities" data-value={261}>
                    Jabalpur
                  </option>
                  <option className="cities" data-value={262}>
                    Jagatsinghapur
                  </option>
                  <option className="cities" data-value={263}>
                    Jagtial
                  </option>
                  <option className="cities" data-value={264}>
                    Jaipur
                  </option>
                  <option className="cities" data-value={265}>
                    Jaisalmer
                  </option>
                  <option className="cities" data-value={266}>
                    Jajpur
                  </option>
                  <option className="cities" data-value={267}>
                    Jalandhar
                  </option>
                  <option className="cities" data-value={268}>
                    Jalaun
                  </option>
                  <option className="cities" data-value={269}>
                    Jalgaon
                  </option>
                  <option className="cities" data-value={270}>
                    Jalna
                  </option>
                  <option className="cities" data-value={271}>
                    Jalore
                  </option>
                  <option className="cities" data-value={272}>
                    Jalpaiguri
                  </option>
                  <option className="cities" data-value={273}>
                    Jammu
                  </option>
                  <option className="cities" data-value={274}>
                    Jamnagar
                  </option>
                  <option className="cities" data-value={275}>
                    Jamtara
                  </option>
                  <option className="cities" data-value={276}>
                    Jamui
                  </option>
                  <option className="cities" data-value={277}>
                    Jangaon
                  </option>
                  <option className="cities" data-value={278}>
                    Janjgir-Champa
                  </option>
                  <option className="cities" data-value={279}>
                    Jashpur
                  </option>
                  <option className="cities" data-value={280}>
                    Jaunpur
                  </option>
                  <option className="cities" data-value={281}>
                    Jayashankar Bhoopalpally
                  </option>
                  <option className="cities" data-value={282}>
                    Jehanabad
                  </option>
                  <option className="cities" data-value={283}>
                    Jhabua
                  </option>
                  <option className="cities" data-value={284}>
                    Jhajjar
                  </option>
                  <option className="cities" data-value={285}>
                    Jhalawar
                  </option>
                  <option className="cities" data-value={286}>
                    Jhansi
                  </option>
                  <option className="cities" data-value={287}>
                    Jhargram
                  </option>
                  <option className="cities" data-value={288}>
                    Jharsuguda
                  </option>
                  <option className="cities" data-value={289}>
                    Jhunjhunu
                  </option>
                  <option className="cities" data-value={290}>
                    Jind
                  </option>
                  <option className="cities" data-value={291}>
                    Jiribam
                  </option>
                  <option className="cities" data-value={292}>
                    Jodhpur
                  </option>
                  <option className="cities" data-value={293}>
                    Jogulamba Gadwal
                  </option>
                  <option className="cities" data-value={294}>
                    Jorhat
                  </option>
                  <option className="cities" data-value={295}>
                    Junagadh
                  </option>
                  <option className="cities" data-value={296}>
                    Kabirdham (Kawardha)
                  </option>
                  <option className="cities" data-value={297}>
                    Kachchh
                  </option>
                  <option className="cities" data-value={298}>
                    Kaimur (Bhabua)
                  </option>
                  <option className="cities" data-value={299}>
                    Kaithal
                  </option>
                  <option className="cities" data-value={300}>
                    Kakching
                  </option>
                  <option className="cities" data-value={301}>
                    Kalaburagi (Gulbarga)
                  </option>
                  <option className="cities" data-value={302}>
                    Kalahandi
                  </option>
                  <option className="cities" data-value={303}>
                    Kalimpong
                  </option>
                  <option className="cities" data-value={304}>
                    Kallakurichi
                  </option>
                  <option className="cities" data-value={305}>
                    Kamareddy
                  </option>
                  <option className="cities" data-value={306}>
                    Kamjong
                  </option>
                  <option className="cities" data-value={307}>
                    Kamle
                  </option>
                  <option className="cities" data-value={308}>
                    Kamrup
                  </option>
                  <option className="cities" data-value={309}>
                    Kamrup Metropolitan
                  </option>
                  <option className="cities" data-value={310}>
                    Kanchipuram
                  </option>
                  <option className="cities" data-value={311}>
                    Kandhamal
                  </option>
                  <option className="cities" data-value={312}>
                    Kangpokpi
                  </option>
                  <option className="cities" data-value={313}>
                    Kangra
                  </option>
                  <option className="cities" data-value={314}>
                    Kanker (North Bastar)
                  </option>
                  <option className="cities" data-value={315}>
                    Kannauj
                  </option>
                  <option className="cities" data-value={316}>
                    Kannur
                  </option>
                  <option className="cities" data-value={317}>
                    Kanpur Dehat
                  </option>
                  <option className="cities" data-value={318}>
                    Kanpur Nagar
                  </option>
                  <option className="cities" data-value={319}>
                    Kanshiram Nagar (Kasganj)
                  </option>
                  <option className="cities" data-value={320}>
                    Kanyakumari
                  </option>
                  <option className="cities" data-value={321}>
                    Kapurthala
                  </option>
                  <option className="cities" data-value={322}>
                    Karaikal
                  </option>
                  <option className="cities" data-value={323}>
                    Karauli
                  </option>
                  <option className="cities" data-value={324}>
                    Karbi Anglong
                  </option>
                  <option className="cities" data-value={325}>
                    Kargil
                  </option>
                  <option className="cities" data-value={326}>
                    Karimganj
                  </option>
                  <option className="cities" data-value={327}>
                    Karimnagar
                  </option>
                  <option className="cities" data-value={328}>
                    Karnal
                  </option>
                  <option className="cities" data-value={329}>
                    Karur
                  </option>
                  <option className="cities" data-value={330}>
                    Kasaragod
                  </option>
                  <option className="cities" data-value={331}>
                    Kathua
                  </option>
                  <option className="cities" data-value={332}>
                    Katihar
                  </option>
                  <option className="cities" data-value={333}>
                    Katni
                  </option>
                  <option className="cities" data-value={334}>
                    Kaushambi
                  </option>
                  <option className="cities" data-value={335}>
                    Kendrapara
                  </option>
                  <option className="cities" data-value={336}>
                    Kendujhar (Keonjhar)
                  </option>
                  <option className="cities" data-value={337}>
                    Khagaria
                  </option>
                  <option className="cities" data-value={338}>
                    Khammam
                  </option>
                  <option className="cities" data-value={339}>
                    Khandwa
                  </option>
                  <option className="cities" data-value={340}>
                    Khargone
                  </option>
                  <option className="cities" data-value={341}>
                    Kheda (Nadiad)
                  </option>
                  <option className="cities" data-value={342}>
                    Khordha
                  </option>
                  <option className="cities" data-value={343}>
                    Khowai
                  </option>
                  <option className="cities" data-value={344}>
                    Khunti
                  </option>
                  <option className="cities" data-value={345}>
                    Kinnaur
                  </option>
                  <option className="cities" data-value={346}>
                    Kiphire
                  </option>
                  <option className="cities" data-value={347}>
                    Kishanganj
                  </option>
                  <option className="cities" data-value={348}>
                    Kishtwar
                  </option>
                  <option className="cities" data-value={349}>
                    Kodagu
                  </option>
                  <option className="cities" data-value={350}>
                    Koderma
                  </option>
                  <option className="cities" data-value={351}>
                    Kohima
                  </option>
                  <option className="cities" data-value={352}>
                    Kokrajhar
                  </option>
                  <option className="cities" data-value={353}>
                    Kolar
                  </option>
                  <option className="cities" data-value={354}>
                    Kolasib
                  </option>
                  <option className="cities" data-value={355}>
                    Kolhapur
                  </option>
                  <option className="cities" data-value={356}>
                    Kolkata
                  </option>
                  <option className="cities" data-value={357}>
                    Kollam
                  </option>
                  <option className="cities" data-value={358}>
                    Komaram Bheem Asifabad
                  </option>
                  <option className="cities" data-value={359}>
                    Kondagaon
                  </option>
                  <option className="cities" data-value={360}>
                    Koppal
                  </option>
                  <option className="cities" data-value={361}>
                    Koraput
                  </option>
                  <option className="cities" data-value={362}>
                    Korba
                  </option>
                  <option className="cities" data-value={363}>
                    Korea (Koriya)
                  </option>
                  <option className="cities" data-value={364}>
                    Kota
                  </option>
                  <option className="cities" data-value={365}>
                    Kottayam
                  </option>
                  <option className="cities" data-value={366}>
                    Kozhikode
                  </option>
                  <option className="cities" data-value={367}>
                    Kra Daadi
                  </option>
                  <option className="cities" data-value={368}>
                    Krishna
                  </option>
                  <option className="cities" data-value={369}>
                    Krishnagiri
                  </option>
                  <option className="cities" data-value={370}>
                    Kulgam
                  </option>
                  <option className="cities" data-value={371}>
                    Kullu
                  </option>
                  <option className="cities" data-value={372}>
                    Kupwara
                  </option>
                  <option className="cities" data-value={373}>
                    Kurnool
                  </option>
                  <option className="cities" data-value={374}>
                    Kurukshetra
                  </option>
                  <option className="cities" data-value={375}>
                    Kurung Kumey
                  </option>
                  <option className="cities" data-value={376}>
                    Kushinagar (Padrauna)
                  </option>
                  <option className="cities" data-value={377}>
                    Lahaul &amp; Spiti
                  </option>
                  <option className="cities" data-value={378}>
                    Lakhimpur
                  </option>
                  <option className="cities" data-value={379}>
                    Lakhimpur - Kheri
                  </option>
                  <option className="cities" data-value={380}>
                    Lakhisarai
                  </option>
                  <option className="cities" data-value={381}>
                    Lakshadweep
                  </option>
                  <option className="cities" data-value={382}>
                    Lalitpur
                  </option>
                  <option className="cities" data-value={383}>
                    Latehar
                  </option>
                  <option className="cities" data-value={384}>
                    Latur
                  </option>
                  <option className="cities" data-value={385}>
                    Lawngtlai
                  </option>
                  <option className="cities" data-value={386}>
                    Leh
                  </option>
                  <option className="cities" data-value={387}>
                    Lepa Rada
                  </option>
                  <option className="cities" data-value={388}>
                    Lohardaga
                  </option>
                  <option className="cities" data-value={389}>
                    Lohit
                  </option>
                  <option className="cities" data-value={390}>
                    Longding
                  </option>
                  <option className="cities" data-value={391}>
                    Longleng
                  </option>
                  <option className="cities" data-value={392}>
                    Lower Dibang Valley
                  </option>
                  <option className="cities" data-value={393}>
                    Lower Siang
                  </option>
                  <option className="cities" data-value={394}>
                    Lower Subansiri
                  </option>
                  <option className="cities" data-value={395}>
                    Lucknow
                  </option>
                  <option className="cities" data-value={396}>
                    Ludhiana
                  </option>
                  <option className="cities" data-value={397}>
                    Lunglei
                  </option>
                  <option className="cities" data-value={398}>
                    Madhepura
                  </option>
                  <option className="cities" data-value={399}>
                    Madhubani
                  </option>
                  <option className="cities" data-value={400}>
                    Madurai
                  </option>
                  <option className="cities" data-value={401}>
                    Mahabubabad
                  </option>
                  <option className="cities" data-value={402}>
                    Mahabubnagar
                  </option>
                  <option className="cities" data-value={403}>
                    Maharajganj
                  </option>
                  <option className="cities" data-value={404}>
                    Mahasamund
                  </option>
                  <option className="cities" data-value={405}>
                    Mahe
                  </option>
                  <option className="cities" data-value={406}>
                    Mahendragarh
                  </option>
                  <option className="cities" data-value={407}>
                    Mahisagar
                  </option>
                  <option className="cities" data-value={408}>
                    Mahoba
                  </option>
                  <option className="cities" data-value={409}>
                    Mainpuri
                  </option>
                  <option className="cities" data-value={410}>
                    Majuli
                  </option>
                  <option className="cities" data-value={411}>
                    Malappuram
                  </option>
                  <option className="cities" data-value={412}>
                    Malda
                  </option>
                  <option className="cities" data-value={413}>
                    Malkangiri
                  </option>
                  <option className="cities" data-value={414}>
                    Mamit
                  </option>
                  <option className="cities" data-value={415}>
                    Mancherial
                  </option>
                  <option className="cities" data-value={416}>
                    Mandi
                  </option>
                  <option className="cities" data-value={417}>
                    Mandla
                  </option>
                  <option className="cities" data-value={418}>
                    Mandsaur
                  </option>
                  <option className="cities" data-value={419}>
                    Mandya
                  </option>
                  <option className="cities" data-value={420}>
                    Mansa
                  </option>
                  <option className="cities" data-value={421}>
                    Mathura
                  </option>
                  <option className="cities" data-value={422}>
                    Mau
                  </option>
                  <option className="cities" data-value={423}>
                    Mayurbhanj
                  </option>
                  <option className="cities" data-value={424}>
                    Medak
                  </option>
                  <option className="cities" data-value={425}>
                    Medchal
                  </option>
                  <option className="cities" data-value={426}>
                    Meerut
                  </option>
                  <option className="cities" data-value={427}>
                    Mehsana
                  </option>
                  <option className="cities" data-value={428}>
                    Mirzapur
                  </option>
                  <option className="cities" data-value={429}>
                    Moga
                  </option>
                  <option className="cities" data-value={430}>
                    Mokokchung
                  </option>
                  <option className="cities" data-value={431}>
                    Mon
                  </option>
                  <option className="cities" data-value={432}>
                    Moradabad
                  </option>
                  <option className="cities" data-value={433}>
                    Morbi
                  </option>
                  <option className="cities" data-value={434}>
                    Morena
                  </option>
                  <option className="cities" data-value={435}>
                    Morigaon
                  </option>
                  <option className="cities" data-value={436}>
                    Muktsar
                  </option>
                  <option className="cities" data-value={437}>
                    Mumbai City
                  </option>
                  <option className="cities" data-value={438}>
                    Mumbai Suburban
                  </option>
                  <option className="cities" data-value={439}>
                    Mungeli
                  </option>
                  <option className="cities" data-value={440}>
                    Munger (Monghyr)
                  </option>
                  <option className="cities" data-value={441}>
                    Murshidabad
                  </option>
                  <option className="cities" data-value={442}>
                    Muzaffarnagar
                  </option>
                  <option className="cities" data-value={443}>
                    Muzaffarpur
                  </option>
                  <option className="cities" data-value={444}>
                    Mysuru (Mysore)
                  </option>
                  <option className="cities" data-value={445}>
                    Nabarangpur
                  </option>
                  <option className="cities" data-value={446}>
                    Nadia
                  </option>
                  <option className="cities" data-value={447}>
                    Nagaon
                  </option>
                  <option className="cities" data-value={448}>
                    Nagapattinam
                  </option>
                  <option className="cities" data-value={449}>
                    Nagarkurnool
                  </option>
                  <option className="cities" data-value={450}>
                    Nagaur
                  </option>
                  <option className="cities" data-value={451}>
                    Nagpur
                  </option>
                  <option className="cities" data-value={452}>
                    Nainital
                  </option>
                  <option className="cities" data-value={453}>
                    Nalanda
                  </option>
                  <option className="cities" data-value={454}>
                    Nalbari
                  </option>
                  <option className="cities" data-value={455}>
                    Nalgonda
                  </option>
                  <option className="cities" data-value={456}>
                    Namakkal
                  </option>
                  <option className="cities" data-value={457}>
                    Namsai
                  </option>
                  <option className="cities" data-value={458}>
                    Nanded
                  </option>
                  <option className="cities" data-value={459}>
                    Nandurbar
                  </option>
                  <option className="cities" data-value={460}>
                    Narayanpur
                  </option>
                  <option className="cities" data-value={461}>
                    Narmada (Rajpipla)
                  </option>
                  <option className="cities" data-value={462}>
                    Narsinghpur
                  </option>
                  <option className="cities" data-value={463}>
                    Nashik
                  </option>
                  <option className="cities" data-value={464}>
                    Navsari
                  </option>
                  <option className="cities" data-value={465}>
                    Nawada
                  </option>
                  <option className="cities" data-value={466}>
                    Nawanshahr (Shahid Bhagat Singh Nagar)
                  </option>
                  <option className="cities" data-value={467}>
                    Nayagarh
                  </option>
                  <option className="cities" data-value={468}>
                    Neemuch
                  </option>
                  <option className="cities" data-value={469}>
                    New Delhi
                  </option>
                  <option className="cities" data-value={470}>
                    Nicobar
                  </option>
                  <option className="cities" data-value={471}>
                    Nilgiris
                  </option>
                  <option className="cities" data-value={472}>
                    Nirmal
                  </option>
                  <option className="cities" data-value={473}>
                    Nizamabad
                  </option>
                  <option className="cities" data-value={474}>
                    Noney
                  </option>
                  <option className="cities" data-value={475}>
                    North 24 Parganas
                  </option>
                  <option className="cities" data-value={476}>
                    North Delhi
                  </option>
                  <option className="cities" data-value={477}>
                    North East Delhi
                  </option>
                  <option className="cities" data-value={478}>
                    North Garo Hills
                  </option>
                  <option className="cities" data-value={479}>
                    North Goa
                  </option>
                  <option className="cities" data-value={480}>
                    North Sikkim
                  </option>
                  <option className="cities" data-value={481}>
                    North Tripura
                  </option>
                  <option className="cities" data-value={482}>
                    North West Delhi
                  </option>
                  <option className="cities" data-value={483}>
                    North and Middle Andaman
                  </option>
                  <option className="cities" data-value={484}>
                    Nuapada
                  </option>
                  <option className="cities" data-value={485}>
                    Nuh
                  </option>
                  <option className="cities" data-value={486}>
                    Osmanabad
                  </option>
                  <option className="cities" data-value={487}>
                    Pakke Kessang
                  </option>
                  <option className="cities" data-value={488}>
                    Pakur
                  </option>
                  <option className="cities" data-value={489}>
                    Palakkad
                  </option>
                  <option className="cities" data-value={490}>
                    Palamu
                  </option>
                  <option className="cities" data-value={491}>
                    Palghar
                  </option>
                  <option className="cities" data-value={492}>
                    Pali
                  </option>
                  <option className="cities" data-value={493}>
                    Palwal
                  </option>
                  <option className="cities" data-value={494}>
                    Panchkula
                  </option>
                  <option className="cities" data-value={495}>
                    Panchmahal (Godhra)
                  </option>
                  <option className="cities" data-value={496}>
                    Panipat
                  </option>
                  <option className="cities" data-value={497}>
                    Panna
                  </option>
                  <option className="cities" data-value={498}>
                    Papum Pare
                  </option>
                  <option className="cities" data-value={499}>
                    Parbhani
                  </option>
                  <option className="cities" data-value={500}>
                    Paschim (West) Burdwan (Bardhaman)
                  </option>
                  <option className="cities" data-value={501}>
                    Paschim Medinipur (West Medinipur)
                  </option>
                  <option className="cities" data-value={502}>
                    Patan
                  </option>
                  <option className="cities" data-value={503}>
                    Pathanamthitta
                  </option>
                  <option className="cities" data-value={504}>
                    Pathankot
                  </option>
                  <option className="cities" data-value={505}>
                    Patiala
                  </option>
                  <option className="cities" data-value={506}>
                    Patna
                  </option>
                  <option className="cities" data-value={507}>
                    Pauri Garhwal
                  </option>
                  <option className="cities" data-value={508}>
                    Peddapalli
                  </option>
                  <option className="cities" data-value={509}>
                    Perambalur
                  </option>
                  <option className="cities" data-value={510}>
                    Peren
                  </option>
                  <option className="cities" data-value={511}>
                    Phek
                  </option>
                  <option className="cities" data-value={512}>
                    Pherzawl
                  </option>
                  <option className="cities" data-value={513}>
                    Pilibhit
                  </option>
                  <option className="cities" data-value={514}>
                    Pithoragarh
                  </option>
                  <option className="cities" data-value={515}>
                    Poonch
                  </option>
                  <option className="cities" data-value={516}>
                    Porbandar
                  </option>
                  <option className="cities" data-value={517}>
                    Prakasam
                  </option>
                  <option className="cities" data-value={518}>
                    Pratapgarh (RJ)
                  </option>
                  <option className="cities" data-value={519}>
                    Pratapgarh (UP)
                  </option>
                  <option className="cities" data-value={520}>
                    Puducherry
                  </option>
                  <option className="cities" data-value={521}>
                    Pudukkottai
                  </option>
                  <option className="cities" data-value={522}>
                    Pulwama
                  </option>
                  <option className="cities" data-value={523}>
                    Pune
                  </option>
                  <option className="cities" data-value={524}>
                    Purba Burdwan (Bardhaman)
                  </option>
                  <option className="cities" data-value={525}>
                    Purba Medinipur (East Medinipur)
                  </option>
                  <option className="cities" data-value={526}>
                    Puri
                  </option>
                  <option className="cities" data-value={527}>
                    Purnia (Purnea)
                  </option>
                  <option className="cities" data-value={528}>
                    Purulia
                  </option>
                  <option className="cities" data-value={529}>
                    RaeBareli
                  </option>
                  <option className="cities" data-value={530}>
                    Raichur
                  </option>
                  <option className="cities" data-value={531}>
                    Raigad
                  </option>
                  <option className="cities" data-value={532}>
                    Raigarh
                  </option>
                  <option className="cities" data-value={533}>
                    Raipur
                  </option>
                  <option className="cities" data-value={534}>
                    Raisen
                  </option>
                  <option className="cities" data-value={535}>
                    Rajanna Sircilla
                  </option>
                  <option className="cities" data-value={536}>
                    Rajgarh
                  </option>
                  <option className="cities" data-value={537}>
                    Rajkot
                  </option>
                  <option className="cities" data-value={538}>
                    Rajnandgaon
                  </option>
                  <option className="cities" data-value={539}>
                    Rajouri
                  </option>
                  <option className="cities" data-value={540}>
                    Rajsamand
                  </option>
                  <option className="cities" data-value={541}>
                    Ramanagara
                  </option>
                  <option className="cities" data-value={542}>
                    Ramanathapuram
                  </option>
                  <option className="cities" data-value={543}>
                    Ramban
                  </option>
                  <option className="cities" data-value={544}>
                    Ramgarh
                  </option>
                  <option className="cities" data-value={545}>
                    Rampur
                  </option>
                  <option className="cities" data-value={546}>
                    Ranchi
                  </option>
                  <option className="cities" data-value={547}>
                    Rangareddy
                  </option>
                  <option className="cities" data-value={548}>
                    Ranipet
                  </option>
                  <option className="cities" data-value={549}>
                    Ratlam
                  </option>
                  <option className="cities" data-value={550}>
                    Ratnagiri
                  </option>
                  <option className="cities" data-value={551}>
                    Rayagada
                  </option>
                  <option className="cities" data-value={552}>
                    Reasi
                  </option>
                  <option className="cities" data-value={553}>
                    Rewa
                  </option>
                  <option className="cities" data-value={554}>
                    Rewari
                  </option>
                  <option className="cities" data-value={555}>
                    Ri Bhoi
                  </option>
                  <option className="cities" data-value={556}>
                    Rohtak
                  </option>
                  <option className="cities" data-value={557}>
                    Rohtas
                  </option>
                  <option className="cities" data-value={558}>
                    Rudraprayag
                  </option>
                  <option className="cities" data-value={559}>
                    Rupnagar
                  </option>
                  <option className="cities" data-value={560}>
                    Sabarkantha (Himmatnagar)
                  </option>
                  <option className="cities" data-value={561}>
                    Sagar
                  </option>
                  <option className="cities" data-value={562}>
                    Saharanpur
                  </option>
                  <option className="cities" data-value={563}>
                    Saharsa
                  </option>
                  <option className="cities" data-value={564}>
                    Sahibganj
                  </option>
                  <option className="cities" data-value={565}>
                    Sahibzada Ajit Singh Nagar (Mohali)
                  </option>
                  <option className="cities" data-value={566}>
                    Saiha
                  </option>
                  <option className="cities" data-value={567}>
                    Salem
                  </option>
                  <option className="cities" data-value={568}>
                    Samastipur
                  </option>
                  <option className="cities" data-value={569}>
                    Samba
                  </option>
                  <option className="cities" data-value={570}>
                    Sambalpur
                  </option>
                  <option className="cities" data-value={571}>
                    Sambhal (Bhim Nagar)
                  </option>
                  <option className="cities" data-value={572}>
                    Sangareddy
                  </option>
                  <option className="cities" data-value={573}>
                    Sangli
                  </option>
                  <option className="cities" data-value={574}>
                    Sangrur
                  </option>
                  <option className="cities" data-value={575}>
                    Sant Kabir Nagar
                  </option>
                  <option className="cities" data-value={576}>
                    Saran
                  </option>
                  <option className="cities" data-value={577}>
                    Satara
                  </option>
                  <option className="cities" data-value={578}>
                    Satna
                  </option>
                  <option className="cities" data-value={579}>
                    Sawai Madhopur
                  </option>
                  <option className="cities" data-value={580}>
                    Sehore
                  </option>
                  <option className="cities" data-value={581}>
                    Senapati
                  </option>
                  <option className="cities" data-value={582}>
                    Seoni
                  </option>
                  <option className="cities" data-value={583}>
                    Sepahijala
                  </option>
                  <option className="cities" data-value={584}>
                    Seraikela-Kharsawan
                  </option>
                  <option className="cities" data-value={585}>
                    Serchhip
                  </option>
                  <option className="cities" data-value={586}>
                    Shahdara
                  </option>
                  <option className="cities" data-value={587}>
                    Shahdol
                  </option>
                  <option className="cities" data-value={588}>
                    Shahjahanpur
                  </option>
                  <option className="cities" data-value={589}>
                    Shajapur
                  </option>
                  <option className="cities" data-value={590}>
                    Shamali (Prabuddh Nagar)
                  </option>
                  <option className="cities" data-value={591}>
                    Sheikhpura
                  </option>
                  <option className="cities" data-value={592}>
                    Sheohar
                  </option>
                  <option className="cities" data-value={593}>
                    Sheopur
                  </option>
                  <option className="cities" data-value={594}>
                    Shi Yomi
                  </option>
                  <option className="cities" data-value={595}>
                    Shimla
                  </option>
                  <option className="cities" data-value={596}>
                    Shivamogga (Shimoga)
                  </option>
                  <option className="cities" data-value={597}>
                    Shivpuri
                  </option>
                  <option className="cities" data-value={598}>
                    Shopian
                  </option>
                  <option className="cities" data-value={599}>
                    Shravasti
                  </option>
                  <option className="cities" data-value={600}>
                    Siang
                  </option>
                  <option className="cities" data-value={601}>
                    Siddharth Nagar
                  </option>
                  <option className="cities" data-value={602}>
                    Siddipet
                  </option>
                  <option className="cities" data-value={603}>
                    Sidhi
                  </option>
                  <option className="cities" data-value={604}>
                    Sikar
                  </option>
                  <option className="cities" data-value={605}>
                    Simdega
                  </option>
                  <option className="cities" data-value={606}>
                    Sindhudurg
                  </option>
                  <option className="cities" data-value={607}>
                    Singrauli
                  </option>
                  <option className="cities" data-value={608}>
                    Sirmaur (Sirmour)
                  </option>
                  <option className="cities" data-value={609}>
                    Sirohi
                  </option>
                  <option className="cities" data-value={610}>
                    Sirsa
                  </option>
                  <option className="cities" data-value={611}>
                    Sitamarhi
                  </option>
                  <option className="cities" data-value={612}>
                    Sitapur
                  </option>
                  <option className="cities" data-value={613}>
                    Sivaganga
                  </option>
                  <option className="cities" data-value={614}>
                    Sivasagar
                  </option>
                  <option className="cities" data-value={615}>
                    Siwan
                  </option>
                  <option className="cities" data-value={616}>
                    Solan
                  </option>
                  <option className="cities" data-value={617}>
                    Solapur
                  </option>
                  <option className="cities" data-value={618}>
                    Sonbhadra
                  </option>
                  <option className="cities" data-value={619}>
                    Sonepur
                  </option>
                  <option className="cities" data-value={620}>
                    Sonipat
                  </option>
                  <option className="cities" data-value={621}>
                    Sonitpur
                  </option>
                  <option className="cities" data-value={622}>
                    South 24 Parganas
                  </option>
                  <option className="cities" data-value={623}>
                    South Andaman
                  </option>
                  <option className="cities" data-value={624}>
                    South Delhi
                  </option>
                  <option className="cities" data-value={625}>
                    South East Delhi
                  </option>
                  <option className="cities" data-value={626}>
                    South Garo Hills
                  </option>
                  <option className="cities" data-value={627}>
                    South Goa
                  </option>
                  <option className="cities" data-value={628}>
                    South Salamara-Mankachar
                  </option>
                  <option className="cities" data-value={629}>
                    South Sikkim
                  </option>
                  <option className="cities" data-value={630}>
                    South Tripura
                  </option>
                  <option className="cities" data-value={631}>
                    South West Delhi
                  </option>
                  <option className="cities" data-value={632}>
                    South West Garo Hills
                  </option>
                  <option className="cities" data-value={633}>
                    South West Khasi Hills
                  </option>
                  <option className="cities" data-value={634}>
                    Sri Ganganagar
                  </option>
                  <option className="cities" data-value={635}>
                    Sri Potti Sriramulu Nellore{" "}
                  </option>
                  <option className="cities" data-value={636}>
                    Srikakulam
                  </option>
                  <option className="cities" data-value={637}>
                    Srinagar
                  </option>
                  <option className="cities" data-value={638}>
                    Sukma
                  </option>
                  <option className="cities" data-value={639}>
                    Sultanpur
                  </option>
                  <option className="cities" data-value={640}>
                    Sundargarh
                  </option>
                  <option className="cities" data-value={641}>
                    Supaul
                  </option>
                  <option className="cities" data-value={642}>
                    Surajpur
                  </option>
                  <option className="cities" data-value={643}>
                    Surat
                  </option>
                  <option className="cities" data-value={644}>
                    Surendranagar
                  </option>
                  <option className="cities" data-value={645}>
                    Surguja
                  </option>
                  <option className="cities" data-value={646}>
                    Suryapet
                  </option>
                  <option className="cities" data-value={647}>
                    Tamenglong
                  </option>
                  <option className="cities" data-value={648}>
                    Tapi (Vyara)
                  </option>
                  <option className="cities" data-value={649}>
                    Tarn Taran
                  </option>
                  <option className="cities" data-value={650}>
                    Tawang
                  </option>
                  <option className="cities" data-value={651}>
                    Tehri Garhwal
                  </option>
                  <option className="cities" data-value={652}>
                    Tengnoupal
                  </option>
                  <option className="cities" data-value={653}>
                    Tenkasi
                  </option>
                  <option className="cities" data-value={654}>
                    Thane
                  </option>
                  <option className="cities" data-value={655}>
                    Thanjavur
                  </option>
                  <option className="cities" data-value={656}>
                    Theni
                  </option>
                  <option className="cities" data-value={657}>
                    Thiruvananthapuram
                  </option>
                  <option className="cities" data-value={658}>
                    Thoothukudi (Tuticorin)
                  </option>
                  <option className="cities" data-value={659}>
                    Thoubal
                  </option>
                  <option className="cities" data-value={660}>
                    Thrissur
                  </option>
                  <option className="cities" data-value={661}>
                    Tikamgarh
                  </option>
                  <option className="cities" data-value={662}>
                    Tinsukia
                  </option>
                  <option className="cities" data-value={663}>
                    Tirap
                  </option>
                  <option className="cities" data-value={664}>
                    Tiruchirappalli
                  </option>
                  <option className="cities" data-value={665}>
                    Tirunelveli
                  </option>
                  <option className="cities" data-value={666}>
                    Tirupathur
                  </option>
                  <option className="cities" data-value={667}>
                    Tiruppur
                  </option>
                  <option className="cities" data-value={668}>
                    Tiruvallur
                  </option>
                  <option className="cities" data-value={669}>
                    Tiruvannamalai
                  </option>
                  <option className="cities" data-value={670}>
                    Tiruvarur
                  </option>
                  <option className="cities" data-value={671}>
                    Tonk
                  </option>
                  <option className="cities" data-value={672}>
                    Tuensang
                  </option>
                  <option className="cities" data-value={673}>
                    Tumakuru (Tumkur)
                  </option>
                  <option className="cities" data-value={674}>
                    Udaipur
                  </option>
                  <option className="cities" data-value={675}>
                    Udalguri
                  </option>
                  <option className="cities" data-value={676}>
                    Udham Singh Nagar
                  </option>
                  <option className="cities" data-value={677}>
                    Udhampur
                  </option>
                  <option className="cities" data-value={678}>
                    Udupi
                  </option>
                  <option className="cities" data-value={679}>
                    Ujjain
                  </option>
                  <option className="cities" data-value={680}>
                    Ukhrul
                  </option>
                  <option className="cities" data-value={681}>
                    Umaria
                  </option>
                  <option className="cities" data-value={682}>
                    Una
                  </option>
                  <option className="cities" data-value={683}>
                    Unakoti
                  </option>
                  <option className="cities" data-value={684}>
                    Unnao
                  </option>
                  <option className="cities" data-value={685}>
                    Upper Siang
                  </option>
                  <option className="cities" data-value={686}>
                    Upper Subansiri
                  </option>
                  <option className="cities" data-value={687}>
                    Uttar Dinajpur (North Dinajpur)
                  </option>
                  <option className="cities" data-value={688}>
                    Uttara Kannada (Karwar)
                  </option>
                  <option className="cities" data-value={689}>
                    Uttarkashi
                  </option>
                  <option className="cities" data-value={690}>
                    Vadodara
                  </option>
                  <option className="cities" data-value={691}>
                    Vaishali
                  </option>
                  <option className="cities" data-value={692}>
                    Valsad
                  </option>
                  <option className="cities" data-value={693}>
                    Varanasi
                  </option>
                  <option className="cities" data-value={694}>
                    Vellore
                  </option>
                  <option className="cities" data-value={695}>
                    Vidisha
                  </option>
                  <option className="cities" data-value={696}>
                    Vijayapura (Bijapur)
                  </option>
                  <option className="cities" data-value={697}>
                    Vikarabad
                  </option>
                  <option className="cities" data-value={698}>
                    Viluppuram
                  </option>
                  <option className="cities" data-value={699}>
                    Virudhunagar
                  </option>
                  <option className="cities" data-value={700}>
                    Visakhapatnam
                  </option>
                  <option className="cities" data-value={701}>
                    Vizianagaram
                  </option>
                  <option className="cities" data-value={702}>
                    Wanaparthy
                  </option>
                  <option className="cities" data-value={703}>
                    Warangal (Rural)
                  </option>
                  <option className="cities" data-value={704}>
                    Warangal (Urban)
                  </option>
                  <option className="cities" data-value={705}>
                    Wardha
                  </option>
                  <option className="cities" data-value={706}>
                    Washim
                  </option>
                  <option className="cities" data-value={707}>
                    Wayanad
                  </option>
                  <option className="cities" data-value={708}>
                    West Champaran
                  </option>
                  <option className="cities" data-value={709}>
                    West Delhi
                  </option>
                  <option className="cities" data-value={710}>
                    West Garo Hills
                  </option>
                  <option className="cities" data-value={711}>
                    West Godavari
                  </option>
                  <option className="cities" data-value={712}>
                    West Jaintia Hills
                  </option>
                  <option className="cities" data-value={713}>
                    West Kameng
                  </option>
                  <option className="cities" data-value={714}>
                    West Karbi Anglong
                  </option>
                  <option className="cities" data-value={715}>
                    West Khasi Hills
                  </option>
                  <option className="cities" data-value={716}>
                    West Siang
                  </option>
                  <option className="cities" data-value={717}>
                    West Sikkim
                  </option>
                  <option className="cities" data-value={718}>
                    West Singhbhum
                  </option>
                  <option className="cities" data-value={719}>
                    West Tripura
                  </option>
                  <option className="cities" data-value={720}>
                    Wokha
                  </option>
                  <option className="cities" data-value={721}>
                    YSR District, Kadapa (Cuddapah)
                  </option>
                  <option className="cities" data-value={722}>
                    Yadadri Bhuvanagiri
                  </option>
                  <option className="cities" data-value={723}>
                    Yadgir
                  </option>
                  <option className="cities" data-value={724}>
                    Yamunanagar
                  </option>
                  <option className="cities" data-value={725}>
                    Yanam
                  </option>
                  <option className="cities" data-value={726}>
                    Yavatmal
                  </option>
                  <option className="cities" data-value={727}>
                    Zunheboto
                  </option>
                </select>
                <br />
                <select
                  id="services"
                  className="getconsultancysideinputselect"
                  required=""
                >
                  <option
                    value=""
                    selected=""
                    style={{ color: "#2d2d2d" }}
                    disabled=""
                  >
                    Select Service
                  </option>
                  <option value="ITRF" style={{ color: "#2d2d2d" }}>
                    Income Tax Return Filing
                  </option>
                  <option value="GSTR" style={{ color: "#2d2d2d" }}>
                    GST Registration
                  </option>
                  <option value="GSTRF" style={{ color: "#2d2d2d" }}>
                    GST Return Filing
                  </option>
                  <option value="TR" style={{ color: "#2d2d2d" }}>
                    Trademark Registration
                  </option>
                  <option value="OA" style={{ color: "#2d2d2d" }}>
                    Online Accounting
                  </option>
                  <option value="GUMASTA" style={{ color: "#2d2d2d" }}>
                    Gumasta Licence (S&amp;E)
                  </option>
                  <option value="TL" style={{ color: "#2d2d2d" }}>
                    Trade Licence
                  </option>
                  <option value="FL" style={{ color: "#2d2d2d" }}>
                    Food Licence
                  </option>
                </select>
                <div
                  style={{
                    width: "100%",
                    margin: "0px 0px 0px 0px",
                    padding: 0,
                    left: 0,
                  }}
                >
                  <p className="errorside">
                    <img src={Groupimg} className="errorsideimg" />
                  </p>
                </div>
                <button
                  id="sidesubmit"
                  onclick="submitcontact()"
                  className="legalsidesubmitBtn"
                >
                  SUBMIT{" "}
                  <img
                    src={Submithammer}
                    className="legalsidesubmitBtnlogo"
                  />
                </button>
              </div>
            </center>
          </div>
        </div>   
        <div className="sidebarmain">
          <img
            src={Siderbar}
            style={{ position: "absolute", height: "100%", zIndex: -1 }}
          />
          <img
            src={Cancle1}
            style={{
              cursor: "pointer",
              width: "3.6vh",
              marginTop: "1.5vh",
              zIndex: 100,
              marginLeft: "1.2vh",
              position: "absolute",
            }}
            onclick="closesidebarmain()"
          />
          <div style={{ paddingLeft: "5.9vh" }}>
            <div className="sidebarmainsection">
              <p className="sidebarmainheading">
                <Link to="how-we-work.html">
                  <img src={Homework} className="sidebarimage2" />
                </Link>
              </p>
              <center>
                <Link
                  className="sidebarmainheading"
                  to="how-we-work.html"
                  style={{ textAlign: "center", color: "#fff" }}
                >
                  {" "}
                  How we work
                </Link>{" "}
              </center>
            </div>
            <div className="sidebarmainsection">
              <p className="sidebarmainheading">
                <Link to="how-to-get-consultancy.html">
                  <img src={Hometogetcon} className="sidebarimage1" />
                </Link>
              </p>
              <center>
                <Link
                  className="sidebarmainheading"
                  to="how-to-get-consultancy.html"
                  style={{
                    lineHeight: "1.3",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  How to get <br />
                  Consultancy
                </Link>
              </center>
              <Link
                className="sidebarmainheading"
                to="how-to-get-consultancy.html"
                style={{
                  lineHeight: "1.3",
                  textAlign: "center",
                  color: "#fff",
                }}
              ></Link>
            </div>
            <div className="sidebarmainsection">
              <p className="sidebarmainheading">
                <Link to="https://blog.legal251.com/">
                  <img src={Blog} className="sidebarimage1" />
                </Link>
              </p>
              <center>
                <Link
                  className="sidebarmainheading"
                  to="resources/index.html"
                  style={{ textAlign: "center", color: "#fff" }}
                >
                  Blog
                </Link>{" "}
              </center>
            </div>
            <div className="sidebarmainsection">
              <p className="sidebarmainheading">
                <Link to="about.html">
                  <img src={Aboutus} className="sidebarimage1" />
                </Link>
              </p>
              <center>
                {" "}
                <Link
                  className="sidebarmainheading"
                  to="about.html"
                  style={{ textAlign: "center", color: "#fff" }}
                >
                  About Us
                </Link>
              </center>
            </div>
            <div className="sidebarmainsection">
              <p className="sidebarmainheading">
                <Link to="contact.html">
                  <img src={Contactus} className="sidebarimage2" />
                </Link>
              </p>
              <center>
                <Link
                  className="sidebarmainheading"
                  to="contact.html"
                  style={{ textAlign: "center", color: "#fff" }}
                >
                  Contact Us
                </Link>{" "}
              </center>
            </div>
          </div>
        </div>
        <noscript>
          &lt;iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N37QCKM"
          height="0" width="0"
          style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
        </noscript>
        <nav
          className="navbar navbar-default bootsnav"
          id="nav1"
          style={{ position: "fixed", width: "100%", zIndex: 10 }}
        >
          <div className="trackserviceheader" id="trackservicediv">
            <div className="phonenoheader">
              <Link
                target="_blank"
                to="https://wa.me/917772877729/?text=917772877729&text=Hello%20Team%20Legal251!"
              >
                {" "}
                <img className="phonenoheaderwhatsapp" src={Whatsapp} />{" "}
              </Link>
              &nbsp;&nbsp;{" "}
              <Link style={{ color: "#2d2d2d" }} to="tel:7772877729">
                {" "}
                <img src={Phoneno} className="phonenoheaderlogo" />
                (+91)77728-77729{" "}
              </Link>
            </div>
            <div
              className="dropdown mydropdownclass"
              style={{ color: "#2d2d2d" }}
            >
              <button
                className="userloginbutton  dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                Login <img src={Loginimg} className="userloginicon" />
              </button>
              <ul className="dropdown-menu dropdown-menu2   specialdropul2">
                <li>
                  <Link to="https://user.legal251.com/">
                    <img src={Pathimg} className="userlogindropicon" />
                    &nbsp;User Login
                  </Link>
                </li>
                <li>
                  <Link to="https://partners.legal251.com/">
                    <img src={Agentimg} className="userlogindropicon2" />
                    &nbsp;Partner Login
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="track-service.html" style={{ color: "#2d2d2d" }}>
              <button className="trackservicebutton">
                <p style={{ display: "inline-block", top: 0 }}>
                  Track
                  <br /> Service
                </p>
                <img src={Trackservice} className="trackserviceicon" />
              </button>
            </Link>
            <div className="trackservicebuttonmobdiv dropdown">
              <button
                className="trackservicebuttonmob dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                User Services
                <img src={Groupimg1} className="userloginicon" />
              </button>
              <ul className="dropdown-menu dropdown-menu-right specialdropul">
                <li>
                  <Link to="https://user.legal251.com/">
                    <img src={Pathimg} className="userlogindropicon" />{" "}
                    &nbsp;User Login
                  </Link>
                </li>
                <li>
                  <Link to="track-service.html">
                    <img src={Groupimg2} className="userlogindropicon" />{" "}
                    &nbsp;Track Service
                  </Link>
                </li>
                <li>
                  <Link to="https://partners.legal251.com/">
                    <img src={Agentimg} className="userlogindropicon2" />
                    &nbsp;Partner Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="container-fluid"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="attr-nav">
              <ul className="pal">
                <li className="search">
                  <Link to="#" style={{ marginTop: 2 }}>
                    <img
                      src={Sidesearchicon}
                      className="navSearchbaricon"
                      id="show"
                      style={{ width: 20 }}
                    />
                  </Link>
                </li>
                <li className="menu">
                  <Link style={{ marginTop: 3 }}>
                    <img
                      src={Star}
                      className="sidemenuicon burger1"
                      style={{ width: 23, cursor: "pointer" }}
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                id="testingside"
                style={{ backgroundColor: "transparent" }}
              >
                <i
                  className="fa fa-bars"
                  style={{ fontSize: 25, backgroundColor: "transparent" }}
                />
              </button>
              <Link className="navbar-brand" to="index.html">
                <center>
                  <img
                    // src={Lglimg}
                    className="logo mainlogo"
                    alt=""
                  />
                </center>
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav navbar-right"
                data-in=""
                data-out=""
              >
                <li className="dropdown megamenu-fw ">
                  <Link to="/" className="dropdown-toggle mytext m_togle">
                    Start Business
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </Link>
                  <ul
                    className="bimage dropdown-menu megamenu-content "
                    role="menu"
                  >
                    <li className="allcontent allcontent12">
                      <div className="row ">
                        <div className="col-menu col-md-5">
                          <div className="megamenu_heading">
                            <img
                              className="megamenu_title_img"
                              src={Groupimg3}
                              loading="lazy"
                            />
                            <div>
                              <span
                                className="title mtitle "
                                data-toggle="dropdown"
                              >
                                Start Business
                              </span>
                            </div>
                            <hr className="headinghr" />
                          </div>

                          <div className="content">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <Link
                                  to='/ParternerShip'
                                  className="text"
                                 
                                >
                                  <img
                                    className="megamenu_icon"
                                    src={Partship}
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Partnership Deed
                                  </span>
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link
                                to='/ParternLtdCompanyRegisteration'
                                  className="text"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src={Companyimg}
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Pvt. Ltd. Company Registration
                                  </span>
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link
                                to='/Section8CompanyRegistration '
                                  className="text"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src={Sectionimg}
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Section 8 Company Registration
                                  </span>
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link
                                to='/LLPCompanyRegistration'
                                  className="text"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src={LLpimg}
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    LLP Company Registration
                                  </span>
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link
                                to='/OpcOnePersonCompanyRegistration'
                                  className="text"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src={OPCimg}
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    OPC Company Registration
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          
                        </div>
                        <div className="col-menu col-md-5">
                          <div className="megamenu_heading">
                            <img
                              className="megamenu_title_img"
                              src={Groupimg4}
                              loading="lazy"
                            />
                            <div>
                              <span className="title mtitle">Compliance</span>
                            </div>
                            <hr className="headinghr" />
                          </div>
                          <div className="content">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <Link
                                  className="text"
                                  to="/AnnualComplianceLlp"
                                >
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src={Annualimg}
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Annual Compliance LLP
                                  </span>
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link
                                  className="text"
                                  to="/AnnualComplianceCompancy"
                                >
                                  {"  "}
                                  <img
                                    className="megamenu_icon"
                                    src={Adddir}
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Annual Compliance Pvt. Ltd.
                                  </span>
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link className="text" to="/CmaReport">
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src={Cmareport}
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    CMA Report
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu-fw ">
                  <Link to="#" className="dropdown-toggle mytext5 m_togle">
                    Change in Business
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </Link>
                  <ul
                    className="bimage dropdown-menu megamenu-content lopadd"
                    role="menu"
                  >
                    <li className="allcontent newincontent allcontent12">
                      <div className="row col-menu">
                        <div className="megamenu_heading">
                          <img
                            className="megamenu_title_img"
                            src={Group5675}
                            loading="lazy"
                          />
                          <div>
                            <span className="title mtitle">
                              Change in Business{" "}
                            </span>
                          </div>
                          <hr className="headinghr" />
                        </div>
                        <div className="col-menu col-md-5 dview">
                          <div className="content">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <img
                                      className="megamenu_icon"
                                      src={Group917}
                                      loading="lazy"
                                    />
                                  </div>
                                  <div>
                                    <Link
                                      className="text"
                                      to="/DissolutionOfDeed"
                                    >
                                      <span className="hvr-sweep-to-right textres">
                                        Dissolution of deeds
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li className="incontent">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <img
                                      className="megamenu_icon"
                                      src={Addressimg}
                                      loading="lazy"
                                    />
                                  </div>
                                  <div>
                                    <Link
                                      className="text"
                                      to="/AddressAmendmentWithInStateLlp"
                                    >
                                      <span className="hvr-sweep-to-right textres">
                                        {" "}
                                        Address Amendment Within state (LLP)
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li className="incontent">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <img
                                      className="megamenu_icon"
                                      src={Addressimg2}
                                      loading="lazy"
                                    />
                                  </div>
                                  <div>
                                    <Link
                                      className="text"
                                      to="/AddressAmendmentWithInStateCompany"
                                    >
                                      <span className="hvr-sweep-to-right textres">
                                        {" "}
                                        Address Amendment Within state (Company)
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li className="incontent">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <img
                                      className="megamenu_icon"
                                      src={Addressimg3}
                                      loading="lazy"
                                    />
                                  </div>
                                  <div>
                                    <Link
                                      className="text"
                                      to="/AddressAmendmentOutStateLlp"
                                    >
                                      <span className="hvr-sweep-to-right textres">
                                        Address Amendment out of state (LLP)
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li className="incontent">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <img
                                      className="megamenu_icon"
                                      src={Addressimg4}
                                      loading="lazy"
                                    />
                                  </div>
                                  <div>
                                    <Link
                                      className="text"
                                      to="/AddressAmendmentoutStateCompany"
                                    >
                                      <span className="hvr-sweep-to-right textres">
                                        {" "}
                                        Address Amendment out of state (Company)
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-3 dview">
                          <div className="content">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <Link className="text" to="/AddDirector">
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src={Addressimg5}
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Add Director (company)
                                  </span>
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link className="text" to="/AddPartner">
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src={Addpartner}
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Add Partner (Company)
                                  </span>
                                </Link>
                              </li>
                              <li className="incontent">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <img
                                      className="megamenu_icon"
                                      src={Increaseimg}
                                      loading="lazy"
                                    />
                                    &nbsp;
                                  </div>
                                  <div>
                                    <Link
                                      className="text"
                                      to="/IncreaseCapitalLlp"
                                    >
                                      {" "}
                                      <span className="hvr-sweep-to-right textres">
                                        Increase Capital (LLP)
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li className="incontent">
                                <Link
                                  className="text"
                                  to="/ChangeInNameLlp"
                                >
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src={Changeimg}
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right">
                                    Change In Name of LLP
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-4 dview">
                          <div className="content">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <Link className="text" to="remove-director.html">
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/newicons/removeDirector(company).svg"
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right">
                                    Remove Director (Company)
                                  </span>
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link className="text" to="remove-partner.html">
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/newicons/RemovePartner(LLP).svg"
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Remove Partner (LLP)
                                  </span>
                                </Link>
                              </li>
                              <li className="incontent">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <img
                                      className="megamenu_iconspecial"
                                      src="images/icons/newicons/IncreaseCapital(Company).svg"
                                      loading="lazy"
                                    />
                                    &nbsp;
                                  </div>
                                  <div>
                                    <Link
                                      className="text"
                                      to="increase-capital-company.html"
                                    >
                                      {" "}
                                      <span className="hvr-sweep-to-right textres">
                                        Increase Capital (Company)
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li className="incontent">
                                <Link
                                  className="text"
                                  to="change-in-name-company.html"
                                >
                                  {" "}
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/newicons/ChangeInNameofCompany.svg"
                                    loading="lazy"
                                  />{" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Change In Name of Company
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu-fw">
                  <Link to="#" className="dropdown-toggle mytext1 m_togle">
                    Registrations
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </Link>
                  <ul
                    className="bimage dropdown-menu megamenu-content rpadd"
                    role="menu"
                  >
                    <li className="allcontent incontentnew allcontent12">
                      <div className="row">
                        <div className="row col-menu">
                          <div className="megamenu_heading">
                            <img
                              className="megamenu_title_img"
                              src="images/megamenubimage/Group_5675.png"
                              loading="lazy"
                            />
                            <div>
                              <span className="title mtitle">
                                Registrations{" "}
                              </span>
                            </div>
                            <hr className="reheadinghr" />
                          </div>
                          <div className="col-menu col-md-4 dview">
                            <div className="content ">
                              <ul className="menu-col" id="id01">
                                <li className="incontent">
                                  <Link
                                    className="text"
                                    to="import-export-license.html"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/NoPath%20-%20Copy%20(4).svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Import Export License (IEC)
                                    </span>
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link
                                    className="text"
                                    to="icegate-registration.html"
                                  >
                                    {" "}
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group%205910.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      ICEGATE Registration
                                    </span>{" "}
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link
                                    className="text"
                                    to="msme-udhyam-registration.html"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group%205911.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      MSME Registration
                                    </span>
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link
                                    className="text"
                                    to="society-registration.html"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group%205912.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Society Registration
                                    </span>
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link
                                    className="text"
                                    to="pf-registration.html"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group%205913.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      PF Registration
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-menu col-md-4 dview">
                            <div className="content">
                              <ul className="menu-col" id="id01">
                                <li className="incontent">
                                  <Link
                                    to="professional-tax-registration.html"
                                    className="singlemenua"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/proffessional.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Professional Tax Registration
                                    </span>{" "}
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link
                                    to="gumasta-licence.html"
                                    className="singlemenua"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group_5632_1.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Gumasta License
                                    </span>
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link
                                    to="trademark-registration.html"
                                    className="singlemenua"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group_3625_2.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Trade Mark Registration
                                    </span>{" "}
                                  </Link>{" "}
                                </li>
                                <li className="incontent">
                                  <Link
                                    to="esic-registration.html"
                                    className="singlemenua"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group_6897.png"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      ESIC Registration
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-menu col-md-4 dview">
                            <div className="content">
                              <ul className="menu-col" id="id01">
                                <li className="incontent">
                                  <Link
                                    to="gst-registration.html"
                                    className="singlemenua"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group%205915.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      GST Registration
                                    </span>
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link
                                    to="food-licence.html"
                                    className="singlemenua"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group_5645_1.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Food Licence
                                    </span>{" "}
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link
                                    to="trade-licence.html"
                                    className="singlemenua"
                                  >
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group_5631_1.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Trade Licence
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu-fw ">
                  <Link to="#" className="dropdown-toggle mytext2 m_togle">
                    Filing &amp; More
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </Link>
                  <ul
                    className="bimage dropdown-menu megamenu-content"
                    role="menu"
                  >
                    <li className="allcontent allcontent12">
                      <div className="row">
                        <div className="row col-menu m_mar">
                          <div className="col-menu col-md-4 col-lg-5 pleft fpadd ">
                            <div className="megamenu_heading">
                              <img
                                className="megamenu_title_img"
                                src="images/megamenubimage/Group_5675.png"
                                loading="lazy"
                              />
                              <div>
                                <span className="title mtitle">Filings </span>
                              </div>
                              <hr className="reheadinghr" />
                            </div>
                            <div className="content">
                              <ul className="menu-col" id="id01">
                                <li className="incontent">
                                  <Link to="gst-return-filing.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group_3506_1.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      GST Return Filing
                                    </span>
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link to="income-tax-return-filing.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/Group_3507_1.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      ITR Filing
                                    </span>{" "}
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link to="tds-return-filing.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/icons/newicons/tdsrf.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      TDS Return Filing
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-menu col-md-3 col-lg-3 pleft ">
                            <div className="megamenu_heading">
                              <img
                                className="megamenu_title_img"
                                src="images/megamenubimage/Group_5675.png"
                                loading="lazy"
                              />
                              <div>
                                <span className="title mtitle maxcon">
                                  Accounting{" "}
                                </span>
                              </div>
                              <hr className="headinghr" />
                            </div>
                            <div className="content">
                              <ul className="menu-col" id="id01">
                                <li className="incontent li_dview newincontent">
                                  <Link to="online-accounting.html">
                                    <img
                                      className="megamenu_icon megamenu_iconspecial"
                                      src="images/icons/Layer_2_1.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Online Accounting
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu-fw">
                  <Link to="#" className="dropdown-toggle mytext3 m_togle">
                    Drafting{" "}
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </Link>
                  <ul
                    className="bimage dropdown-menu megamenu-content dpadd"
                    role="menu"
                  >
                    <li className="allcontent newincontent allcontent12">
                      <div className="row col-menu">
                        <div className="megamenu_heading">
                          <img
                            className="megamenu_title_img"
                            src="images/megamenubimage/Group_5675.png"
                            loading="lazy"
                          />
                          <div>
                            <span className="title mtitle">Drafting </span>
                          </div>
                          <hr className="reheadinghr" />
                        </div>
                        <div className="col-menu col-md-4 dcol">
                          <div className="content">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <Link
                                  to="legal-drafting.html"
                                  className="singlemenua"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/movie-copyright_1.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Legal Drafting
                                  </span>{" "}
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link
                                  to="rent-agreement.html"
                                  className="singlemenua"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/Group%205918.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Rent Agreement
                                  </span>{" "}
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link
                                  to="noc-no-objection-certificate.html"
                                  className="singlemenua"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/Group%205919.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    {" "}
                                    NOC
                                  </span>
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link
                                  to="affidavit.html"
                                  className="singlemenua"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/Group%205920.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Affidavit
                                  </span>{" "}
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link
                                  to="power-of-attorney.html"
                                  className="singlemenua"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/Group%205921.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Power of Attorney
                                  </span>{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-5">
                          <div className="content">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <Link to="will.html" className="singlemenua">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/NoPath%20-%20Copy%20(17).svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right">
                                    Will
                                  </span>{" "}
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link
                                  to="application.html"
                                  className="singlemenua"
                                >
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/appf.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Application Form
                                  </span>{" "}
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link to="nda-non-disclosure-agreement-online.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/nda.png"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    NDA Drafting
                                  </span>{" "}
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link to="privacy-policy-drafting-online.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/user-privacy_1.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Privacy Policy Drafting
                                  </span>
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link to="terms-and-conditions-drafting-online.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/tnc.png"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Terms and Conditions Drafting
                                  </span>{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu-fw ">
                  <Link to="#" className="dropdown-toggle mytext4 m_togle">
                    Legal Issues{" "}
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </Link>
                  <ul
                    className="bimage dropdown-menu megamenu-content lepadd "
                    role="menu"
                  >
                    <li className="allcontent newincontent allcontent12">
                      <div className="row">
                        <div className="col-menu col-md-4">
                          <div className="megamenu_heading">
                            <img
                              src="images/megamenubimage/Group_5675.png"
                              loading="lazy"
                            />
                            <div>
                              <span className="title mtitle textres">
                                Legal Reply{" "}
                              </span>
                            </div>
                            <hr className="headinghr" />
                          </div>
                          <div className="content le_cpadd">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <Link to="legal-notice-reply.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/legalreply.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Legal Notice Reply
                                  </span>{" "}
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link to="legal-claim-help.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/baggage-claim.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Legal Advice
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-4">
                          <div className="megamenu_heading">
                            <img
                              src="images/megamenubimage/Group_5675.png"
                              loading="lazy"
                            />
                            <div>
                              <span className="title mtitle">
                                Legal Notice{" "}
                              </span>
                            </div>
                            <hr className="headinghr" />
                          </div>
                          <div className="content le_cpadd">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <Link to="legal-notice.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/help.png"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Legal Notice Prepration
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu-fw ">
                  <Link to="#" className="dropdown-toggle mytext6 m_togle">
                    Other Services
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </Link>
                  <ul
                    className="bimage dropdown-menu megamenu-content opadd"
                    role="menu"
                  >
                    <li className="allcontent newincontent allcontent12">
                      <div className="row">
                        <div className="col-menu col-md-5 pleft">
                          <div className="megamenu_heading">
                            <img src="images/megamenubimage/Group_5675.png" />
                            <div>
                              <span className="title mtitle">
                                Other Services
                              </span>
                            </div>
                            <hr className="headinghr" />
                          </div>
                          <div className="content o_cpadd">
                            <ul className="menu-col" id="id01">
                              <li className="incontent">
                                <Link to="balance-sheet-prepration.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/Group%205926.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    {" "}
                                    Balance Sheet Preparation &amp; P&amp;L
                                  </span>
                                </Link>
                              </li>
                              <li className="incontent">
                                <Link to="project-report-prepration.html">
                                  <img
                                    className="megamenu_icon"
                                    src="images/icons/Group%205927.svg"
                                    loading="lazy"
                                  />
                                  <span className="hvr-sweep-to-right textres">
                                    Project Report Preparation
                                  </span>{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu-fw ">
                  <Link to="#" className="dropdown-toggle mytext7 m_togle">
                    Utilities
                    <i
                      className="fa fa-angle-down down_arrow_hide"
                      aria-hidden="true"
                      style={{ display: "inline-block" }}
                    />
                  </Link>
                  <ul
                    className="bimage dropdown-menu megamenu-content opadd"
                    role="menu"
                  >
                    <li className="allcontent newincontent allcontent12">
                      <div className="row">
                        <div className="col-menu">
                          <div className="megamenu_heading">
                            <img src="images/megamenubimage/Group_5675.png" />
                            <div>
                              <span className="title mtitle">Utilities </span>
                            </div>
                            <hr className="headinghr" />
                          </div>
                          <div className="col-menu col-md-4 dcol">
                            <div className="content lo_cpadd">
                              <ul className="menu-col" id="id01">
                                <li className="incontent">
                                  <Link to="GST-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/gst.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      GST Calculator
                                    </span>{" "}
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link to="SIP-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/sip.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      SIP Calculator
                                    </span>{" "}
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link to="EMI-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/interest.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      EMI Calculator
                                    </span>{" "}
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link to="FD-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/fd.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      FD Calculator
                                    </span>{" "}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-menu col-md-4">
                            <div className="content lo_cpadd">
                              <ul className="menu-col" id="id01">
                                <li className="incontent">
                                  <Link to="80U-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/Group_6457.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      80U Calculator
                                    </span>{" "}
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link to="HRA-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/hra.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      HRA Calculator
                                    </span>{" "}
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link to="simple-interest.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/interest-rate.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Simple Interest Calculator
                                    </span>{" "}
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link to="capital-gain-calulator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/capital_gain.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Capital Gain Calculator
                                    </span>{" "}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-menu col-md-4">
                            <div className="content lo_cpadd">
                              <ul className="menu-col" id="id01">
                                <li className="incontent">
                                  <Link to="TDS-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/tds.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      TDS Calculator
                                    </span>{" "}
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link to="PPF-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/ppf.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      PPF Calculator
                                    </span>{" "}
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link to="Gratuity-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/gratuaty.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      Gratuity Calculator
                                    </span>
                                  </Link>
                                </li>
                                <li className="incontent">
                                  <Link to="RD-calculator.html">
                                    <img
                                      className="megamenu_icon"
                                      src="images/calculator_icons/rd.svg"
                                      loading="lazy"
                                    />
                                    <span className="hvr-sweep-to-right textres">
                                      RD Calculator
                                    </span>{" "}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <div className="sidesocialicon">
          <Link to="https://www.linkedin.com/company/legal251/" target="_blank">
            <img src={Linkedinimg} className="socialicon" />
          </Link>
          <Link to="https://www.facebook.com/legal251" target="_blank">
            <img src={Fbimg} className="socialicon" />
          </Link>
          <Link to="https://www.instagram.com/legal251india/" target="_blank">
            <img src={Instaimg} className="socialicon" />
          </Link>
          <Link to="https://twitter.com/legal251" target="_blank">
            <img src={Twitterimg} className="socialicon" />
          </Link>
          <img src={Emailimg} className="subscribeemail" />
        </div>
        <div className="subscribeemailpopup">
          <img src={CloseImg} className="subscribeemailpopupclose" />
          <p className="subscribeemailpopuptext">
            <img className="emailicon" src={Email2img} />
            Subscribe to Legal <br />
            updates from Legal251
          </p>
          <div className="popupinside">
            <input
              type="email"
              name="userEmail"
              maxLength={50}
              id="userEmail"
              className="subscribeemailpopupinput"
              placeholder="email"
              required=""
            />
            <button
              className="subscribeemailpopupbutton"
              id="emailsubmit"
              type="submit"
              onclick="submitemail()"
            >
              <img src={SubEmailimg} className="subscribeemailpopupbuttonimg" />
            </button>
          </div>
        </div>
        <div className="row landingpagerow" style={{ marginTop: 74 }}>
          <div className="col-12 col-sm-12 col-md-7 col-lg-7">
            <br />
            {/* <p className="legalmainheading legalmainheadingres autotype">
            Lorem ipsum, dolor sit Lorem 
            ipsum, dolor
            </p> */}

            <div className="typeitheading">
              <Typewriter
                options={{
                  strings: [
                    "One-Stop Solution to All  Your  Legal Problems",
                    "Get Your Personal Legal Advisor ",
                    "Now Legal is Always On  Your Phone",
                  ],
                  autoStart: true,
                  loop: true,
                  typeSpeed: 50,
                }}
              />
            </div>
            <br />

            <br />
            <center>
              <div className="row experiencecustomcolrow expsecmobres " id="">
                <div id="reviews-exp" className="">
                  <Slider {...settings1}>
                    <div className="experiencedisplay ourexp">
                      <div className="expimg">
                        <img
                          src={Employeeimg}
                          className="experienceimghome"
                          alt=""
                        />
                      </div>

                      <div className="experiencedisplaycol2 experiencedisplaycolres">
                        <p className="experienceheading2">
                          Years Of Experience
                        </p>
                      </div>
                    </div>

                    <div className="experiencedisplay ourexp">
                      <div className="expimg">
                        <img
                          src={Caseimg}
                          className="experienceimghome"
                          alt=""
                        />
                      </div>
                      <div className="experiencedisplaycol2 experiencedisplaycolres">
                        {/* <p
                          className="experienceheading"
                          style={{ width: 90 }}
                        ></p> */}
                        {/* <p className="experienceheading experience1" />
                        <span className="experienceheading">+</span>
                        <p /> */}
                        <p className="experienceheading2">Cases Solved</p>
                      </div>
                    </div>

                    <div className="experiencedisplay ourexp">
                      <div className="expimg">
                        <img
                          src={GoldcupImg}
                          className="experienceimghome"
                          alt=""
                        />
                      </div>
                      <div className="experiencedisplaycol2 experiencedisplaycolres">
                        {/* <p
                          className="experienceheading"
                          style={{ width: 90 }}
                        ></p> */}
                        {/* <p className="experienceheading experience2" />
                        <span className="experienceheading">+</span>
                        <p /> */}
                        <p className="experienceheading2">Awards Gained</p>
                      </div>
                    </div>

                    <div className="experiencedisplay ourexp">
                      <div className="expimg">
                        <img
                          src={Userimg}
                          className="experienceimghome"
                          alt=""
                        />
                      </div>
                      <div className="experiencedisplaycol2 experiencedisplaycolres">
                        {/* <p
                          className="experienceheading"
                          style={{ width: 90 }}
                        ></p>
                        <p className="experienceheading experience3" />
                        <span className="experienceheading"> k+</span>
                        <p />
                        <p /> */}
                        <p className="experienceheading2">Trusted Clients</p>
                      </div>
                    </div>

                    <div className="experiencedisplay ourexp">
                      <div className="expimg">
                        <img
                          src={Customerimg}
                          className="experienceimghome"
                          alt=""
                        />
                      </div>
                      <div className="experiencedisplaycol2 experiencedisplaycolres">
                        {/* <p
                          className="experienceheading"
                          style={{ width: 90 }}
                        ></p>
                        <p className="experienceheading experience4" />
                        <span className="experienceheading"> k+</span>
                        <p />
                        <p /> */}
                        <p className="experienceheading2">Queries Solved</p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>

              <div className="quotesdiv quotesdivres">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 colpaddingzero2">
                    <p className="comapnydownloadappline comapnydownloadapplineres">
                      Download Legal251 App Now!
                    </p>
                    <Link
                      target="_blank"
                      to="https://play.google.com/store/apps/details?id=com.legal251.in"
                    >
                      <img src={Group82} className="getitgoogleplayimg" />
                    </Link>
                    <Link
                      target="_blank"
                      to="https://apps.apple.com/in/app/legal251-legal-service-more/id6443916709"
                    >
                      <img src={Preferredimg} className="getitplaystoreimg" />
                    </Link>
                  </div>
                </div>
              </div>
            </center>
          </div>

          <div className="col-12 col-sm-12 col-md-5 col-lg-5">
            <input
              type="text"
              id="input"
              className="Searchbar ressearchbar"
              name="search_entered"
              autoComplete="off"
              placeholder="Search.."
            />
            <div className="data"></div>

            <div className="getConsultancybuttondiv getConsultancybuttondiv1 getconsultancyformres">
              <div className="companyformouterdiv companyformouterdiv1 companyformouterdivres">
                <div
                  className="companyformdiv"
                  style={{ marginTop: 0, paddingBottom: 20, paddingTop: 10 }}
                >
                  <h1
                    className="cd-headline push getConsultancyformheading"
                    style={{ lineHeight: "1.3" }}
                  >
                    <span>
                      Get your queries solved by
                      <br />
                    </span>
                    <span className="cd-words-wrapper">
                      <b className="is-visible" style={{ color: "#f8951d" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Consultant
                      </b>
                      <b style={{ color: "#f8951d" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lawyer
                      </b>
                      <b style={{ color: "#f8951d" }}>Chartered Accountant </b>
                      <b style={{ color: "#f8951d" }}>Company Secretary </b>
                    </span>
                  </h1>
                  <p className="companyformtext">
                    Name <span className="menstar">*</span>
                  </p>
                  <input
                    type="text"
                    className="companyforminput"
                    placeholder="Enter your name"
                    style={{ textTransform: "capitalize" }}
                    data-rule="minlen:4"
                    maxLength={150}
                    pattern="[A-Za-z ]{3,150}"
                    id="inputName"
                    required=""
                  />
                  <p className="companyformtext">
                    Email <span className="menstar">*</span>
                  </p>
                  <input
                    type="text"
                    className="companyforminput"
                    placeholder="Enter your Email"
                    maxLength={50}
                    id="inputEmail"
                    required=""
                  />
                  <p className="companyformtext">
                    Contact Number <span className="menstar">*</span>
                  </p>
                  <input
                    type="text"
                    className="companyforminput"
                    placeholder="Enter your Contact Number"
                    pattern="[6-9]{1}[0-9]{9}"
                    maxLength={10}
                    id="inputphone"
                    required=""
                  />
                  <p className="companyformtext">
                    Related To <span className="menstar">*</span>
                  </p>
                  <select
                    id="inputrelatedto"
                    className="companyforminput"
                    required=""
                  >
                    <option value="" disabled="" selected="">
                      Related to
                    </option>
                    <option value="AD" style={{ color: "#000000" }}>
                      Lawyer
                    </option>
                    <option value="CA" style={{ color: "#000000" }}>
                      Chartered Accountant
                    </option>
                    <option value="CS" style={{ color: "#000000" }}>
                      Company Secretary
                    </option>
                    <option value="NS" style={{ color: "#000000" }}>
                      Not sure
                    </option>
                  </select>
                  <div
                    style={{ width: "100%", margin: 0, padding: 0, left: 0 }}
                  >
                    <p className="errormessage">
                      <img src={GroupEmail} className="errormessageimg" />
                    </p>
                  </div>
                  <center>
                    <button
                      className="companyformbtn companyformbtn1 companyformbtn2"
                      style={{ marginTop: 35, marginBottom: 0 }}
                      onclick="submitContactForm()"
                      id="submit"
                    >
                      <img
                        src={Consultancyimg}
                        className="getConsultancybuttonimg"
                      />
                      &nbsp; GET CONSULTANCY
                    </button>
                    <img
                      className="loader1"
                      style={{ display: "none" }}
                      src="images/homecontact/Rolling.svg"
                      alt=""
                    />
                  </center>
                </div>
              </div>
            </div>

            <div style={{ paddingRight: "3.3vw" }}>
              <center>
                <button
                  className="getstartedbutton getstartbtnres"
                  style={{ marginTop: 50 }}
                >
                  <span style={{ textDecoration: "underline" }}>
                    Get Started
                  </span>{" "}
                  <span className="getstartedbuttondiv">
                    <img src={GetStartArrow} className="getstartedbuttonicon" />
                  </span>
                </button>
              </center>
            </div>
          </div>
        </div>
        <section className="section4">
          <div
            className="row allcontent allcontent1"
            style={{ paddingTop: 85 }}
          >
            <div className="dourser">
              <h4 className="dislegalser">
                <img className="dlstar" src={Polygonimg} />
                <span className="discovery headeranamition">Discover</span> 251+
                legal services over one platform{" "}
                <img className="drstar" src={Polygonimg} loading="lazy" />
              </h4>

              {/* Legal Services Carousel  part start */}
         

             <div className="servicecardanimationpadd">
                <div
                  id="owl-carousel1"
                  className="owl-carousel servicecaroselpadding"
                >
                
                    <div className="row marlr1">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space space1">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="online-accounting.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{}}
                                      src={Layerimg}
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                  <p className="Owl_Para">
                                    {" "}
                                    Online <br /> Accounting
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="msme-udhyam-registration.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src={Group5911img}
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                  <p
                                    className="Owl_Para"
                                    style={{ marginBottom: 10 }}
                                  >
                                    {" "}
                                    MSME
                                    <br />
                                    Registration
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                    </div>

                    <div className="row marlr1">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space space1">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="gst-return-filing.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{}}
                                      src={GroupA}
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                  <p className="Owl_Para">
                                    {" "}
                                    GST Return <br />
                                    Filing
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>

                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="professional-tax-registration.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src={Professonial}
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                  <p
                                    className="Owl_Para"
                                    style={{ marginBottom: 10 }}
                                  >
                                    {" "}
                                    Professional
                                    <br /> Tax Registration
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                    </div>
                    <div className="row marlr1">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space space1">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="gst-registration.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{}}
                                      src={Group3505}
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                  <p className="Owl_Para">
                                    {" "}
                                    GST
                                    <br /> Registration
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="icegate-registration.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src={Group5909}
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                  <p
                                    className="Owl_Para"
                                    style={{ marginBottom: 10 }}
                                  >
                                    {" "}
                                    ICEGATE
                                    <br />
                                    Registration
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                    </div>
                    <div className="row marlr1">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space space1">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="income-tax-return-filing.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 24,
                                        width: "auto !important",
                                      }}
                                      src={Group3507}
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                  <p className="Owl_Para">
                                    {" "}
                                    Income Tax <br />
                                    Return Filing
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="society-registration.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src={Group5912}
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                  <p
                                    className="Owl_Para"
                                    style={{ marginBottom: 10 }}
                                  >
                                    {" "}
                                    Society
                                    <br />
                                    Registration
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                    </div>
                    <div className="row marlr1">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="trademark-registration.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src={Group9704}
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                  <p className="Owl_Para">
                                    {" "}
                                    Trademark <br />
                                    Registration
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="pf-registration.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src={Group5913img}
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                  <p
                                    className="Owl_Para"
                                    style={{ marginBottom: 10 }}
                                  >
                                    {" "}
                                    PF <br />
                                    Registration
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                    </div>
                    <div className="row marlr1">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="import-export-license.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src={NOpathimg}
                                      alt=""
                                      loading="lazy"
                                    />
                                  </div>
                                  <p className="Owl_Para">
                                    {" "}
                                    Import Export <br /> License
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space space1">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="noc-no-objection-certificate.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src={Group59519}
                                      alt=""
                                      loading="lazy"
                                    />
                                  </div>
                                  <p
                                    className="Owl_Para"
                                    style={{ marginBottom: 10 }}
                                  >
                                    {" "}
                                    NOC <br />
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                    </div>
                    <div className="row marlr1">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="partnership-deed.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src={Group5916img}
                                      alt=""
                                      loading="lazy"
                                    />
                                  </div>
                                  <p className="Owl_Para">
                                    {" "}
                                    Partnership <br />
                                    Deed
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="/DissolutionOfDeed">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src="./Draftingimages/icons/Group%205917.svg"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </div>
                                  <p
                                    className="Owl_Para"
                                    style={{ marginBottom: 10 }}
                                  >
                                    {" "}
                                    Dissolution
                                    <br /> Of Deeds
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                    </div>
                    <div className="row marlr1">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="food-licence.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src={Group5645img}
                                      alt=""
                                      loading="lazy"
                                    />
                                  </div>
                                  <p className="Owl_Para">
                                    {" "}
                                    Food <br />
                                    Licence
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="trade-licence.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src={Group5631img}
                                      alt=""
                                      loading="lazy"
                                    />
                                  </div>
                                  <p
                                    className="Owl_Para"
                                    style={{ marginBottom: 10 }}
                                  >
                                    {" "}
                                    Trade <br />
                                    Licence
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                    </div>
                    <div className="row marlr1">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="food-licence.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src={Moviesimg}
                                      alt=""
                                      loading="lazy"
                                    />
                                  </div>
                                  <p className="Owl_Para">
                                    {" "}
                                    Legal <br />
                                    Drafting
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="trade-licence.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      // src={Group5918img}
                                      alt=""
                                      loading="lazy"
                                    />
                                  </div>
                                  <p
                                    className="Owl_Para"
                                    style={{ marginBottom: 10 }}
                                  >
                                    {" "}
                                    Rent <br />
                                    Agreement
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                    </div>
                    <div className="row marlr1">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space space1">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="affidavit.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src={Group5920img}
                                      alt=""
                                      loading="lazy"
                                    />
                                  </div>
                                  <p className="Owl_Para"> Affidavit</p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="power-of-attorney.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src="images/icons/Group%205921.svg"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </div>
                                  <p
                                    className="Owl_Para"
                                    style={{ marginBottom: 10 }}
                                  >
                                    {" "}
                                    Power <br />
                                    of Attorney
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                    </div>
                    <div className="row marlr1">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space space1">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="will.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src="images/icons/NoPath%20-%20Copy%20(17).svg"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </div>
                                  <p className="Owl_Para"> Will</p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 padlr">
                        <center>
                          <div className="space">
                            <div className="owl_data OwLData">
                              <div className="new1">
                                <Link to="power-of-attorney.html">
                                  <div className="new2">
                                    <img
                                      className="Owl_img"
                                      style={{
                                        marginTop: 30,
                                        width: "auto !important",
                                      }}
                                      src="images/icons/appf.png"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </div>
                                  <p
                                    className="Owl_Para"
                                    style={{ marginBottom: 10 }}
                                  >
                                    {" "}
                                    Application <br />
                                    Form
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </center>
                      </div>
                    </div>
                
                </div>
              </div> 

              <hr className="reviewhr" style={{ color: "#F8951D" }} />
              <div className="disbottom">
                <div className="row marlr">
                  <div className="col-12 col-sm-12 col-mg-12 col-lg-6 marlr">
                    <div id="owl-demo" className="owl-carousel owl-theme">
                      <div className="item">
                        <div className=" contenthead contenthead1">
                          <div className="">
                            <div className="mobstar">
                              <div>
                                <h5 className="conhead">Ramika Khandelwal</h5>
                              </div>
                              <div className="ratestar revratestar1">
                                <div>
                                  <img
                                    className=""
                                    style={{ marginRight: 5 }}
                                    src={Group9648}
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <div>
                                  <p className="amazplat">"Amazing Platform"</p>
                                </div>
                              </div>
                            </div>
                            <p className="conp">Proprietor , Balaji Apparels</p>
                          </div>
                        </div>
                        <div>
                          <p className="ptext ptext1">
                            I recently had the opportunity to utilize the online
                            legal services provided by Legal251, and I must say
                            that I am thoroughly impressed. As someone who
                            needed legal assistance but couldn't spare the time
                            for in-person consultations, their online platform
                            proved to be a convenient and efficient solution.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className=" contenthead contenthead1">
                          <div className="">
                            <div className="mobstar">
                              <div>
                                <h5 className="conhead">Mukesh Tiwari</h5>
                              </div>
                              <div className="ratestar revratestar1">
                                <div>
                                  <img
                                    className=""
                                    style={{ marginRight: 5 }}
                                    src="images/review/Group9648.svg"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <div>
                                  <p className="amazplat">"Amazing Platform"</p>
                                </div>
                              </div>
                            </div>
                            <p className="conp">
                              Founder &amp; CEO Bharatmat.co
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="ptext ptext1">
                            Right from the start, the website was user-friendly
                            and intuitive, making it easy to navigate and find
                            the information I needed. The process of submitting
                            my legal request was straightforward, and I
                            appreciated the option to provide relevant documents
                            electronically, saving me the hassle of scanning or
                            mailing physical copies.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className=" contenthead contenthead1">
                          <div className="">
                            <div className="mobstar">
                              <div>
                                <h5 className="conhead">Deepak Agrawal</h5>
                              </div>
                              <div className="ratestar revratestar1">
                                <div>
                                  <img
                                    className=""
                                    style={{ marginRight: 5 }}
                                    src="images/review/Group9648.svg"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <div>
                                  <p className="amazplat">"Amazing Platform"</p>
                                </div>
                              </div>
                            </div>
                            <p className="conp">CEO DLX.Pvt.Ltd</p>
                          </div>
                        </div>
                        <div>
                          <p className="ptext ptext1">
                            Another noteworthy aspect of Legal251's service was
                            the transparency regarding fees and costs. I
                            received a detailed breakdown of the expected
                            expenses upfront, allowing me to make informed
                            decisions. The pricing was fair and competitive,
                            especially considering the high-quality legal
                            representation I received.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-mg-12 col-lg-6 paddmarlr">
                    <div className="greview">
                      <div>
                        <img
                          className="greviewimg"
                          src="images/review/Group9675.png"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div className="viewbtndiv">
                        <button className="viewbtn">
                          <img
                            style={{ marginLeft: 10 }}
                            src={ArrowRightimg}
                            alt=""
                            className="arrowbtn1"
                            loading="lazy"
                          />{" "}
                          <br className="arrowbtn1" />
                          View All{" "}
                          <img
                            style={{ marginLeft: 10 }}
                            src="images/review/awesome-long-arrow-alt-right.svg"
                            alt=""
                            className="arrowbtn"
                            loading="lazy"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br /> <br /> <br />
        <section>
          <div className="servicebackimg">
            <div className="servicesection">
              <center>
                <div
                  id="sercice-sec-carosel"
                  className="owl-carousel owl-theme"
                >
                  <div>
                    <div
                      className="nav-link space clickborderch1 active show"
                      data-target="#gst-registr"
                      data-toggle="tab"
                    >
                      <div className="owl_data OwLData">
                        <div className="new1">
                          <Link to="power-of-attorney.html">
                            <div className="new2">
                              <img
                                className="Owl_img"
                                style={{
                                  marginTop: 30,
                                  width: "auto !important",
                                }}
                                src="images/icons/Group%205915.svg"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <p
                              className="Owl_Para"
                              style={{ marginBottom: 10 }}
                            >
                              {" "}
                              GST
                              <br />
                              Registration
                            </p>
                          </Link>
                        </div>
                      </div>
                      <div className="border border1" />
                    </div>
                  </div>
                  <div>
                    <div
                      className="nav-link space clickborderch2"
                      data-target="#gst-return-filing"
                      data-toggle="tab"
                    >
                      <div className="owl_data OwLData">
                        <div className="new1">
                          <Link to="power-of-attorney.html">
                            <div className="new2">
                              <img
                                className="Owl_img"
                                style={{
                                  marginTop: 30,
                                  width: "auto !important",
                                }}
                                src="images/icons/Group_3506_1.svg"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <p
                              className="Owl_Para"
                              style={{ marginBottom: 10 }}
                            >
                              {" "}
                              GST Return
                              <br />
                              Filing
                            </p>
                          </Link>
                        </div>
                      </div>
                      <div className="border border2" />
                    </div>
                  </div>
                  <div>
                    <div
                      className="nav-link space clickborderch3"
                      data-target="#itr-filing"
                      data-toggle="tab"
                    >
                      <div className="owl_data OwLData">
                        <div className="new1">
                          <Link to="power-of-attorney.html">
                            <div className="new2">
                              <img
                                className="Owl_img"
                                style={{
                                  marginTop: 30,
                                  width: "auto !important",
                                }}
                                src="images/icons/Group_3507_1.svg"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <p
                              className="Owl_Para"
                              style={{ marginBottom: 10 }}
                            >
                              ITR <br />
                              Filing
                            </p>
                          </Link>
                        </div>
                      </div>
                      <div className="border border3" />
                    </div>
                  </div>
                  <div>
                    <div
                      className="nav-link space clickborderch4"
                      data-target="#online-acc"
                      data-toggle="tab"
                    >
                      <div className="owl_data OwLData">
                        <div className="new1">
                          <Link to="power-of-attorney.html">
                            <div className="new2">
                              <img
                                className="Owl_img"
                                style={{
                                  marginTop: 30,
                                  width: "auto !important",
                                }}
                                src="images/icons/Layer_2_1.svg"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <p
                              className="Owl_Para"
                              style={{ marginBottom: 10 }}
                            >
                              {" "}
                              Online
                              <br />
                              Accounting
                            </p>
                          </Link>
                        </div>
                      </div>
                      <div className="border border4" />
                    </div>
                  </div>
                  <div>
                    <div
                      className="nav-link space clickborderch5"
                      data-target="#teademark-reg"
                      data-toggle="tab"
                    >
                      <div className="owl_data OwLData">
                        <div className="new1">
                          <Link to="power-of-attorney.html">
                            <div className="new2">
                              <img
                                className="Owl_img"
                                style={{
                                  marginTop: 30,
                                  width: "auto !important",
                                }}
                                src="images/icons/Group_3625_2.svg"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <p
                              className="Owl_Para"
                              style={{ marginBottom: 10 }}
                            >
                              Trademark <br />
                              Registration
                            </p>
                          </Link>
                        </div>
                      </div>
                      <div className="border border5" />
                    </div>
                  </div>
                  <div>
                    <div
                      className="nav-link space clickborderch6"
                      data-target="#gumasta-lic"
                      data-toggle="tab"
                    >
                      <div className="owl_data OwLData">
                        <div className="new1">
                          <Link to="power-of-attorney.html">
                            <div className="new2">
                              <img
                                className="Owl_img"
                                style={{
                                  marginTop: 30,
                                  width: "auto !important",
                                }}
                                src="images/icons/Group_5632_1.svg"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <p
                              className="Owl_Para"
                              style={{ marginBottom: 10 }}
                            >
                              Gumasta <br />
                              Licence(S &amp; E)
                            </p>
                          </Link>
                        </div>
                      </div>
                      <div className="border border6" />
                    </div>
                  </div>
                  <div>
                    <div
                      className="nav-link space clickborderch7"
                      data-target="#food-lic"
                      data-toggle="tab"
                    >
                      <div className="owl_data OwLData">
                        <div className="new1">
                          <Link to="power-of-attorney.html">
                            <div className="new2">
                              <img
                                className="Owl_img"
                                style={{
                                  marginTop: 30,
                                  width: "auto !important",
                                }}
                                src="images/icons/Group_5645_1.svg"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <p
                              className="Owl_Para"
                              style={{ marginBottom: 10 }}
                            >
                              Food
                              <br />
                              Licence
                            </p>
                          </Link>
                        </div>
                      </div>
                      <div className="border border7" />
                    </div>
                  </div>
                  <div>
                    <div
                      className="nav-link space clickborderch8"
                      data-target="#trade-lic"
                      data-toggle="tab"
                    >
                      <div className="owl_data OwLData">
                        <div className="new1">
                          <Link to="power-of-attorney.html">
                            <div className="new2">
                              <img
                                className="Owl_img"
                                style={{
                                  marginTop: 30,
                                  width: "auto !important",
                                }}
                                src="images/icons/Group_5631_1.svg"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <p
                              className="Owl_Para"
                              style={{ marginBottom: 10 }}
                            >
                              Trade
                              <br />
                              Licence
                            </p>
                          </Link>
                        </div>
                      </div>
                      <div className="border border8" />
                    </div>
                  </div>
                </div>
              </center>
            </div>
            <div className="servicesection servicesection1">
              <div id="tabsContent" className="tab-content">
                <div id="gst-registr" className="row tab-pane fade active in">
                  <div className="col-4 col-md-3">
                    <div className="">
                      <img
                        src={Gstimg}
                        className="legalcardcaroseldivimg serviceimage"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-8 col-md-9">
                    <div className=" ">
                      <div className="legalcardcaroselheadingdiv">
                        <div className="col-md-5">
                          <p className="legalcardcaroselheading serviceheading">
                            {" "}
                            GST Registration{" "}
                          </p>
                        </div>
                        <div className="col-md-7">
                          <p
                            className="cardflowtext cardflowtext1"
                            style={{ display: "block" }}
                          >
                            <span style={{ color: "#2d2d2d" }}>
                              Time required: 6-7 d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span>
                              <span
                                style={{
                                  color: "#2d2d2d",
                                  borderLeft: "1px solid #2d2d2d",
                                }}
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                              </span>
                              <span style={{ color: "#f8951d" }}>
                                &nbsp;₹2251
                              </span>{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="legalcardcontain legalcardcontain1">
                        Register yourself as a trusted business of this country
                        with GST online in minutes. Ask our experts to guide you
                        for an easy GST Registration.{" "}
                      </p>
                    </div>
                    <div>
                      <p
                        className="cardflowtext cardflowtext1 cardflowtext2"
                        style={{ display: "block" }}
                      >
                        <i
                          className="fa fa-circle circlebullet"
                          style={{ visibility: "hidden" }}
                        />
                        Register now &gt; Submit documents &gt; Filing process
                        &gt; GST No. is ready
                      </p>
                      <button
                        className="companyformbtn"
                        style={{ marginLeft: "2vw", height: 45 }}
                        id="submit"
                      >
                        <Link
                          style={{ color: "#FAFAFA" }}
                          to="gst-registration.html"
                          target="_blank"
                        >
                          {" "}
                          Get Started{" "}
                        </Link>
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div id="gst-return-filing" className="row tab-pane fade">
                  <div className="col-4 col-md-3">
                    <div className="">
                      <img
                        src="images/home/GSTR.jpg"
                        className="legalcardcaroseldivimg serviceimage"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-8 col-md-9">
                    <div className=" ">
                      <div className="legalcardcaroselheadingdiv">
                        <div className="col-md-5">
                          <p className="legalcardcaroselheading serviceheading">
                            {" "}
                            GST Return Filing{" "}
                          </p>
                        </div>
                        <div className="col-md-7">
                          <p
                            className="cardflowtext cardflowtext1"
                            style={{ display: "block" }}
                          >
                            <span style={{ color: "#2d2d2d" }}>
                              {" "}
                              Time taken: Plan
                              based&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span>
                              <span
                                style={{
                                  color: "#2d2d2d",
                                  borderLeft: "1px solid #2d2d2d",
                                }}
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                              </span>
                              <span style={{ color: "#f8951d" }}>
                                &nbsp;₹751
                              </span>{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="legalcardcontain legalcardcontain1">
                        Stay ahead of deadlines and file your returns on time
                        with an all-time available team. Start Playing it safe
                        now.{" "}
                      </p>
                    </div>
                    <div>
                      <p
                        className="cardflowtext cardflowtext1 cardflowtext2"
                        style={{ display: "block" }}
                      >
                        <i
                          className="fa fa-circle circlebullet"
                          style={{ visibility: "hidden" }}
                        />
                        Choose plan &gt; Submit documents &gt; Verify document
                        &gt; Return filed
                      </p>
                      <button
                        className="companyformbtn"
                        style={{ marginLeft: "2vw", height: 45 }}
                        id="submit"
                      >
                        <Link
                          style={{ color: "#FAFAFA" }}
                          to="gst-return-filing.html"
                          target="_blank"
                        >
                          {" "}
                          Get Started{" "}
                        </Link>
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div id="itr-filing" className="row tab-pane fade">
                  <div className="col-4 col-md-3">
                    <div className="">
                      <img
                        src="images/home/ITR.jpg"
                        className="legalcardcaroseldivimg serviceimage"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-8 col-md-9">
                    <div className=" ">
                      <div className="legalcardcaroselheadingdiv">
                        <div className="col-md-5">
                          <p className="legalcardcaroselheading serviceheading">
                            ITR Filing
                          </p>
                        </div>
                        <div className="col-md-7">
                          <p
                            className="cardflowtext cardflowtext1"
                            style={{ display: "block" }}
                          >
                            <span style={{ color: "#2d2d2d" }}>
                              {" "}
                              Time taken: Plan
                              based&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span>
                              <span
                                style={{
                                  color: "#2d2d2d",
                                  borderLeft: "1px solid #2d2d2d",
                                }}
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                              </span>
                              <span style={{ color: "#f8951d" }}>
                                &nbsp;₹590
                              </span>{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="legalcardcontain legalcardcontain1">
                        Simply fill any type of Tax Return like salary tax,
                        capital gains, business, professional or property taxes.
                        Comprehensive Tax return services at your fingertips.
                      </p>
                    </div>
                    <div>
                      <p
                        className="cardflowtext cardflowtext1 cardflowtext2"
                        style={{ display: "block" }}
                      >
                        <i
                          className="fa fa-circle circlebullet"
                          style={{ visibility: "hidden" }}
                        />
                        Choose plan &gt; Submit documents &gt; Verify document
                        &gt; Return filed
                      </p>
                      <button
                        className="companyformbtn"
                        style={{ marginLeft: "2vw", height: 45 }}
                        id="submit"
                      >
                        <Link
                          style={{ color: "#FAFAFA" }}
                          to="income-tax-return-filing.html"
                          target="_blank"
                        >
                          {" "}
                          Get Started{" "}
                        </Link>
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div id="online-acc" className="row tab-pane fade">
                  <div className="col-4 col-md-3">
                    <div className="">
                      <img
                        src="images/home/Acc.jpg"
                        className="legalcardcaroseldivimg serviceimage"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-8 col-md-9">
                    <div className=" ">
                      <div className="legalcardcaroselheadingdiv">
                        <div className="col-md-5">
                          <p className="legalcardcaroselheading serviceheading">
                            Online Accounting
                          </p>
                        </div>
                        <div className="col-md-7">
                          <p
                            className="cardflowtext cardflowtext1"
                            style={{ display: "block" }}
                          >
                            <span style={{ color: "#2d2d2d" }}>
                              {" "}
                              Time taken: Plan
                              based&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span>
                              <span
                                style={{
                                  color: "#2d2d2d",
                                  borderLeft: "1px solid #2d2d2d",
                                }}
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                              </span>
                              <span style={{ color: "#f8951d" }}>
                                &nbsp;₹1451
                              </span>{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="legalcardcontain legalcardcontain1">
                        We offer overall cashflow management and tracking along
                        with payroll services. Enhance your productivity and let
                        Legal251 handle your accounting.
                      </p>
                    </div>
                    <div>
                      <p
                        className="cardflowtext cardflowtext1 cardflowtext2"
                        style={{ display: "block" }}
                      >
                        <i
                          className="fa fa-circle circlebullet"
                          style={{ visibility: "hidden" }}
                        />
                        Register now &gt; Choose type &gt; Submit documents &gt;
                        Accounts managed
                      </p>
                      <button
                        className="companyformbtn"
                        style={{ marginLeft: "2vw", height: 45 }}
                        id="submit"
                      >
                        <Link
                          style={{ color: "#FAFAFA" }}
                          to="online-accounting.html"
                          target="_blank"
                        >
                          {" "}
                          Get Started{" "}
                        </Link>
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div id="teademark-reg" className="row tab-pane fade">
                  <div className="col-4 col-md-3">
                    <div className="">
                      <img
                        src="images/home/TM.jpg"
                        className="legalcardcaroseldivimg serviceimage"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-8 col-md-9">
                    <div className=" ">
                      <div className="legalcardcaroselheadingdiv">
                        <div className="col-md-6">
                          <p className="legalcardcaroselheading serviceheading">
                            Trademark Registration
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p
                            className="cardflowtext cardflowtext1"
                            style={{ marginLeft: "0vw", display: "block" }}
                          >
                            <span style={{ color: "#2d2d2d" }}>
                              Time taken: 1-2 d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span>
                              <span
                                style={{
                                  color: "#2d2d2d",
                                  borderLeft: "1px solid #2d2d2d",
                                }}
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                              </span>
                              <span style={{ color: "#f8951d" }}>
                                &nbsp;₹2251
                              </span>{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="legalcardcontain legalcardcontain1">
                        We offer overall cashflow management and tracking along
                        with payroll services. Enhance your productivity and let
                        Legal251 handle your accounting.
                      </p>
                    </div>
                    <div>
                      <p
                        className="cardflowtext cardflowtext1 cardflowtext2"
                        style={{ display: "block" }}
                      >
                        <i
                          className="fa fa-circle circlebullet"
                          style={{ visibility: "hidden:" }}
                        />
                        Register now &gt; Submit documents &gt; Complete
                        verification &gt; Trademark applied
                      </p>
                      <button
                        className="companyformbtn"
                        style={{ marginLeft: "2vw", height: 45 }}
                        id="submit"
                      >
                        <Link
                          style={{ color: "#FAFAFA" }}
                          to="trademark-registration.html"
                          target="_blank"
                        >
                          {" "}
                          Get Started{" "}
                        </Link>
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div id="gumasta-lic" className="row tab-pane fade">
                  <div className="col-4 col-md-3">
                    <div className="">
                      <img
                        src="images/home/Guamsta.jpg"
                        className="legalcardcaroseldivimg serviceimage"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-8 col-md-9">
                    <div className=" ">
                      <div className="legalcardcaroselheadingdiv">
                        <div className="col-md-6">
                          <p className="legalcardcaroselheading serviceheading">
                            Gumasta Licence (S &amp; E)
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p
                            className="cardflowtext cardflowtext1"
                            style={{ marginLeft: "0vw", display: "block" }}
                          >
                            <span style={{ color: "#2d2d2d" }}>
                              {" "}
                              Time taken: 3-8 d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span>
                              <span
                                style={{
                                  color: "#2d2d2d",
                                  borderLeft: "1px solid #2d2d2d",
                                }}
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                              </span>
                              <span style={{ color: "#f8951d" }}>
                                &nbsp;₹751
                              </span>{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="legalcardcontain legalcardcontain1">
                        Apply for Gumasta Licence or Shop &amp; Establishment
                        Certificate online &amp; get hassle-free services. Get
                        your Shop registered with a hassle-free process.
                      </p>
                    </div>
                    <div>
                      <p
                        className="cardflowtext cardflowtext1 cardflowtext2"
                        style={{ display: "block" }}
                      >
                        <i
                          className="fa fa-circle circlebullet"
                          style={{ visibility: "hidden" }}
                        />
                        Register now &gt; Submit documents &gt; Complete
                        verification &gt; Gumasta issued
                      </p>
                      <button
                        className="companyformbtn"
                        style={{ marginLeft: "2vw", height: 45 }}
                        id="submit"
                      >
                        <Link
                          style={{ color: "#FAFAFA" }}
                          to="gumasta-licence.html"
                          target="_blank"
                        >
                          {" "}
                          Get Started{" "}
                        </Link>
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div id="food-lic" className="row tab-pane fade">
                  <div className="col-4 col-md-3">
                    <div className="">
                      <img
                        src="images/home/Food_License.jpg"
                        className="legalcardcaroseldivimg serviceimage"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-8 col-md-9">
                    <div className=" ">
                      <div className="legalcardcaroselheadingdiv">
                        <div className="col-md-5">
                          <p className="legalcardcaroselheading serviceheading">
                            Food Licence
                          </p>
                        </div>
                        <div className="col-md-7">
                          <p
                            className="cardflowtext cardflowtext1"
                            style={{ display: "block" }}
                          >
                            <span style={{ color: "#2d2d2d" }}>
                              Time taken: 5-15 d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span>
                              <span
                                style={{
                                  color: "#2d2d2d",
                                  borderLeft: "1px solid #2d2d2d",
                                }}
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                              </span>
                              <span style={{ color: "#f8951d" }}>
                                &nbsp;₹590
                              </span>{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="legalcardcontain legalcardcontain1">
                        Starting a food business needs an FSSAI registration.
                        Register for your food license online, supported by
                        expert professionals.
                      </p>
                    </div>
                    <div>
                      <p
                        className="cardflowtext cardflowtext1 cardflowtext2"
                        style={{ display: "block" }}
                      >
                        <i
                          className="fa fa-circle circlebullet"
                          style={{ visibility: "hidden" }}
                        />
                        Register now &gt; Select turnover &gt; Submit documents
                        &gt; Registered for FSSAI
                      </p>
                      <button
                        className="companyformbtn"
                        style={{ marginLeft: "2vw", height: 45 }}
                        id="submit"
                      >
                        <Link
                          style={{ color: "#FAFAFA" }}
                          to="food-licence.html"
                          target="_blank"
                        >
                          {" "}
                          Get Started{" "}
                        </Link>
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div id="trade-lic" className="row tab-pane fade">
                  <div className="col-4 col-md-3">
                    <div className="">
                      <img
                        src="images/home/Trade_License.jpg"
                        className="legalcardcaroseldivimg serviceimage"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-8 col-md-9">
                    <div className=" ">
                      <div className="legalcardcaroselheadingdiv">
                        <div className="col-md-5">
                          <p className="legalcardcaroselheading serviceheading">
                            Trade Licence
                          </p>
                        </div>
                        <div className="col-md-7">
                          <p
                            className="cardflowtext cardflowtext1"
                            style={{ display: "block" }}
                          >
                            <span style={{ color: "#2d2d2d" }}>
                              Time taken: 3-15 d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span>
                              <span
                                style={{
                                  color: "#2d2d2d",
                                  borderLeft: "1px solid #2d2d2d",
                                }}
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting at:
                              </span>
                              <span style={{ color: "#f8951d" }}>
                                &nbsp;₹751
                              </span>{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="legalcardcontain legalcardcontain1">
                        Get permission to do business with speedy and 24*7 trade
                        license online application and registration services.
                      </p>
                    </div>
                    <div>
                      <p
                        className="cardflowtext cardflowtext1 cardflowtext2"
                        style={{ display: "block" }}
                      >
                        <i
                          className="fa fa-circle circlebullet"
                          style={{ visibility: "hidden" }}
                        />
                        Register now &gt; Submit documents &gt; Complete
                        verification &gt; Trade Licence issued
                      </p>
                      <button
                        className="companyformbtn"
                        style={{ marginLeft: "2vw", height: 45 }}
                        id="submit"
                      >
                        <Link
                          style={{ color: "#FAFAFA" }}
                          to="trade-licence.html"
                          target="_blank"
                        >
                          {" "}
                          Get Started{" "}
                        </Link>
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <section className="what_we_can_help_you_with">
          <div className="otrust">
            <h3 className="whatwchu">
              What <span className="whatwe">We</span> Can{" "}
              <span className="helpu">Help You</span>
              With?
            </h3>
            <div className="mainwwchy">
              <div id="helpyou" className="owl-carousel owl-theme">
                <div>
                  <center>
                    <div className="whatwchdiv">
                      <center>
                        <img
                          src={Taximg}
                          className="whatwch_img1 "
                          alt=""
                          loading="lazy"
                        />
                        <h6 className="whatwch_text">Tax filing</h6>
                      </center>
                    </div>
                  </center>
                </div>
                <div>
                  <center>
                    <div className="whatwchdiv">
                      <center>
                        <img
                          src={TaxPlaningimg}
                          className="whatwch_img2"
                          alt=""
                          loading="lazy"
                        />
                        <h6 className="whatwch_text">Tax Planning</h6>
                      </center>
                    </div>
                  </center>
                </div>
                <div>
                  <center>
                    <div className="whatwchdiv">
                      <center>
                        <img
                          src={Consultantimg}
                          className="whatwch_img3"
                          alt=""
                          loading="lazy"
                        />
                        <h6 className="whatwch_text">Consultancy</h6>
                      </center>
                    </div>
                  </center>
                </div>
                <div>
                  <center>
                    <div className="whatwchdiv">
                      <center>
                        <img
                          src={Consulationimg}
                          className="whatwch_img4"
                          alt=""
                          loading="lazy"
                        />
                        <h6 className="whatwch_text">Tax Consultancy</h6>
                      </center>
                    </div>
                  </center>
                </div>
                <div>
                  <center>
                    <div className="whatwchdiv">
                      <center>
                        <img
                          src={Layerimg}
                          className="whatwch_img5"
                          alt=""
                          loading="lazy"
                        />
                        <h6 className="whatwch_text">Updates on Laws</h6>
                      </center>
                    </div>
                  </center>
                </div>
                <div>
                  <center>
                    <div className="whatwchdiv">
                      <center>
                        <img
                          src={Navyimg}
                          className="whatwch_img6"
                          alt=""
                          loading="lazy"
                        />
                        <h6 className="whatwch_text">Tax Experts</h6>
                      </center>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <div className="row downloadrow">
          <div className="col-sm-6 downfirstcol">
            <center>
              <img
                src={Illustrationimg}
                className="downloadimage"
                loading="lazy"
              />
            </center>
          </div>
          <div className="col-sm-6 downsecondcol">
            <p className="downloadtext">
              Download <span style={{ color: "#f8951d" }}>Legal251</span> App
            </p>
            <p className="downloadsmalltext">
              Manage all your legal works &amp; business with ease!
            </p>
            <div className="flex-container">
              <Link
                to="https://play.google.com/store/apps/details?id=com.legal251.in"
                className="googleplaybutton"
              >
                <p style={{ display: "block" }}>
                  <img
                    src={Googleplayimg}
                    className="googleplayimg"
                    loading="lazy"
                  />
                  <span className="getittext">
                    <span className="getitspan">GET IT ON</span>
                    <br />
                    Google Play
                  </span>
                </p>
              </Link>
              <Link
                to="https://apps.apple.com/in/app/legal251-legal-service-more/id6443916709"
                className="googleplaybutton2"
              >
                <p style={{ display: "block" }}>
                  <img
                    src={Appleimg}
                    className="googleplayimg"
                    loading="lazy"
                  />
                  <span className="getittext">
                    <span className="getitspan">GET IT ON</span>
                    <br />
                    App Store
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <section className="testimonial">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              <div className="testmdiv">
                <span className="testimonal">Testimonials</span>
                <h3 className="test_heading">
                  <span className="love">
                    L
                    <img className="heartimg" src={Heartimg} loading="lazy" />
                    ve
                  </span>{" "}
                  From
                  <br /> Our <span className="client">Clients</span>
                </h3>
                <p className="test_para">
                  {" "}
                  Our customers love the convenience of filing with us and
                  appreciate our expertise in getting their Legal work done on
                  time. We value the trust our clients place in us, and we
                  strive to provide them with the best service possible.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8">
              <div id="owl-demo1" className="owl-carousel owl-theme">
                <div className="item" style={{ width: 400 }}>
                  <div className="owlcarhead">
                    <div className="croimgdiv">
                      <img
                        className="cords testimonialimg"
                        src={Kailashimg}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h6 className="owlhead">Kailash Chandra Verma</h6>
                      <p className="owlsubh testimonialsubtit">
                        Proprietor , Balaji Apparels
                      </p>
                    </div>
                  </div>
                  <div className=" owlcard">
                    <div className="box1 scrollAnim fade-in-up ">
                      <div className="contenthead anim-top testicard">
                        <div>
                          <img
                            className="cords "
                            src={Quoteimg}
                            loading="lazy"
                          />
                        </div>
                        <div className="ratestar">
                          <div>
                            <img
                              className=""
                              style={{ marginRight: 5 }}
                              src={Gruoup9638}
                              loading="lazy"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="amazplat">"Amazing Platform"</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="ptext anim-top">
                          Filing my GST returns had been an absolute nightmare
                          until I found Legal251. The interface is so easy to
                          use, it makes filing my returns on time a breeze. I
                          can easily keep track of all my invoices and payments
                          and Legal251 experts even provides helpful tips for me
                          to make sure that everything is done correctly. Thanks
                          to Legal251 team, filing GST returns has become
                          stress-free!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item" style={{ width: 400 }}>
                  <div className="owlcarhead">
                    <div className="croimgdiv">
                      <img
                        className="cords testimonialimg"
                        src={Virendraimg}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h6 className="owlhead">Virendra Vishwkarma</h6>
                      <p className="owlsubh testimonialsubtit">
                        Founder, Tirth Enterprises{" "}
                      </p>
                    </div>
                  </div>
                  <div className=" owlcard">
                    <div className="box1 scrollAnim fade-in-up ">
                      <div className="contenthead anim-top testicard">
                        <div>
                          <img
                            className="cords "
                            src={Quoteimg2}
                            loading="lazy"
                          />
                        </div>
                        <div className="ratestar">
                          <div>
                            <img
                              className=""
                              style={{ marginRight: 5 }}
                              src={Reviesimg}
                              loading="lazy"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="amazplat">"Highly recommended!"</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="ptext anim-top">
                          I was having a hard time filing my GST returns and was
                          really confused as to how to go about it. That's when
                          I came across Legal251. They were thorough
                          professionals who made sure that my documents were
                          filed perfectly without any errors. Their customer
                          service was also top-notch and they guided me through
                          the entire process with ease. I'm glad that I chose
                          Legal251 for filing my GST returns. Highly
                          recommended!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item" style={{ width: 400 }}>
                  <div className="owlcarhead">
                    <div className="croimgdiv">
                      <img
                        className="cords testimonialimg"
                        src={Priyankaimg}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h6 className="owlhead">Priyanka Agnihotri</h6>
                      <p className="owlsubh testimonialsubtit">
                        CEO, 9 Telecom and Security
                      </p>
                    </div>
                  </div>
                  <div className=" owlcard">
                    <div className="box1 scrollAnim fade-in-up ">
                      <div className="contenthead anim-top testicard">
                        <div>
                          <img
                            className="cords"
                            src={Quoteimg2}
                            loading="lazy"
                          />
                        </div>
                        <div className="ratestar">
                          <div>
                            <img
                              className=""
                              style={{ marginRight: 5 }}
                              src={Reviesimg}
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <p className="amazplat">"Extremely Impressed"</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="ptext anim-top">
                          I've been using Legal251 for filing my GST returns for
                          the past few months and I'm extremely impressed with
                          their service and platform. It's so easy to use, and
                          all the necessary information is provided in a very
                          organized way. Plus, filing my returns on time has
                          become so much easier with this platform. Highly
                          recommend Legal251 for anyone looking for an efficient
                          way to file their GST returns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item" style={{ width: 400 }}>
                  <div className="owlcarhead">
                    <div className="croimgdiv">
                      <img
                        className="cords testimonialimg"
                        src={Monuimg}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h6 className="owlhead">Monu Panchal </h6>
                      <p className="owlsubh testimonialsubtit">
                        Founder , Mishi Industries
                      </p>
                    </div>
                  </div>
                  <div className=" owlcard">
                    <div className="box1 scrollAnim fade-in-up ">
                      <div className="contenthead anim-top testicard">
                        <div>
                          <img
                            className="cords"
                            src={Quoteimg2}
                            loading="lazy"
                          />
                        </div>
                        <div className="ratestar">
                          <div>
                            <img
                              className=""
                              style={{ marginRight: 5 }}
                              src={Reviesimg}
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <p className="amazplat">"Excellent Knowledge "</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="ptext anim-top">
                          I was a bit worried when filing my GST return for the
                          first time, but Legal251 made it a breeze. Their team
                          of experts guided me through every step and filed my
                          return perfectly. I'm really glad I chose Legal251 to
                          help me with this task as they have an excellent
                          knowledge of the regulations and ensured that
                          everything was done correctly. Thank you!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <section>
          <center>
            <h3 className="reviewheading">
              <img className="headlstar" src={Polygonimg} loading="lazy" />
              Amazing Stories From Our{" "}
              <span className="valclient headeranamition">
                Valuable Clients{" "}
              </span>{" "}
              <img className="headrstar" src={Polygonimg} loading="lazy" />
            </h3>
          </center>
          <center>
            <p className="reviewp">
              {" "}
              Amazing things are on the way{" "}
              <span className="reviewpspan">
                {" "}
                “What has changed for the better since you moved to{" "}
                <img className="legallogo" src={Legallogoimg} loading="lazy" />
                ?”
              </span>{" "}
              we asked our clients. Thousands of people answered; here are some
              of their comments.{" "}
            </p>
            <center>
              <div className="row Allimg marlr" id="amazing-stories-desktop">
                <div className="backimgouterdiv">
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 padleft openmodal">
                    <div className="amaztdiv">
                      <div className="backimg">
                        <img
                          className="clientimg"
                          src={Group9729}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 padleft openmodal1">
                    <div className="amaztdiv">
                      <div className="backimg1">
                        <img
                          className="clientimg"
                          src={Thumbnailimg}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 padleft openmodal2">
                    <div className="amaztdiv">
                      <div className="backimg">
                        <img
                          className="clientimg"
                          src={Thumbnailimg2}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 padleft openmodal3">
                    <div className="amaztdiv">
                      <div className="backimg1">
                        <img
                          className="clientimg"
                          src={Thumbnailimg3}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" Allimg marlr amazing-stories">
                <div className="backimgouterdiv">
                  <div id="amazing-stories" className="owl-carousel">
                    <div className="item">
                      <div className="openmodal">
                        <div className="amaztdiv">
                          <div className="backimg">
                            <img
                              className="clientimg"
                              src="images/review/Group_9729.jpg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="openmodal1">
                        <div className="amaztdiv">
                          <div className="backimg1">
                            <img
                              className="clientimg"
                              src="images/review/Thumbnail_For_Web_copy.jpg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="openmodal2">
                        <div className="amaztdiv">
                          <div className="backimg">
                            <img
                              className="clientimg"
                              src="images/review/Thumbnail_For_Web_copy1.jpg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="openmodal3">
                        <div className="amaztdiv">
                          <div className="backimg1">
                            <img
                              className="clientimg"
                              src="images/review/Thumbnail_For_Web_copy2.jpg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </center>
          </center>
        </section>
        <div className="row">
          <div className="col-md-7">
            <div className="legallandingnorow hexagonrow1">
              <div className="legallandingnocol">
                <div
                  className="hexagon hexagonspacing"
                  style={{ position: "relative" }}
                >
                  <img
                    className="change0 clientslogo"
                    src={Clientsimg}
                    loading="lazy"
                  />
                  <div className="hexTop" />
                  <div className="hexBottom" />
                </div>
              </div>
              <div className="legallandingnocol">
                <div
                  className="hexagon hexagonspacing"
                  style={{ position: "relative" }}
                >
                  <img
                    className="change1 clientslogo"
                    src={Clientsimg2}
                    loading="lazy"
                  />
                  <div className="hexTop" />
                  <div className="hexBottom" />
                </div>
              </div>
              <div className="legallandingnocol">
                <div
                  className="hexagon hexagonspacing"
                  style={{ position: "relative" }}
                >
                  <img
                    className="change2 clientslogo"
                    src={Clientsimg3}
                    loading="lazy"
                  />
                  <div className="hexTop" />
                  <div className="hexBottom" />
                </div>
              </div>
              <div className="legallandingnocol">
                <div className="hexagon">
                  <img
                    className="change3 clientslogo"
                    src={Clientsimg4}
                    loading="lazy"
                  />
                  <div className="hexTop" />
                  <div className="hexBottom" />
                </div>
              </div>
            </div>
            <div className="legallandingnorow hexagonrow2">
              <div className="legallandingnocol">
                <div
                  className="hexagon hexagonspacing"
                  style={{ position: "relative" }}
                >
                  <img
                    className="change4 clientslogo"
                    src={Clientsimg5}
                    loading="lazy"
                  />
                  <div className="hexTop" />
                  <div className="hexBottom" />
                </div>
              </div>
              <div className="legallandingnocol">
                <div
                  className="hexagon hexagonspacing"
                  style={{ position: "relative" }}
                >
                  <img
                    className="change5 clientslogo"
                    src={Clientsimg6}
                    loading="lazy"
                  />
                  <div className="hexTop" />
                  <div className="hexBottom" />
                </div>
              </div>
              <div className="legallandingnocol">
                <div
                  className="hexagon hexagonspacing"
                  style={{ position: "relative" }}
                >
                  <img
                    className="change6 clientslogo"
                    src={Clientsimg7}
                    loading="lazy"
                  />
                  <div className="hexTop" />
                  <div className="hexBottom" />
                </div>
              </div>
              <div className="legallandingnocol">
                <div
                  className="hexagon hexagonspacing"
                  style={{ position: "relative" }}
                >
                  <img
                    className="change7 clientslogo"
                    src={Clientsimg8}
                    loading="lazy"
                  />
                  <div className="hexTop" />
                  <div className="hexBottom" />
                </div>
              </div>
              <div className="legallandingnocol">
                <div className="hexagon">
                  <img
                    className="change8 clientslogo"
                    src={Clientsimg9}
                    loading="lazy"
                  />
                  <div className="hexTop" />
                  <div className="hexBottom" />
                </div>
              </div>
            </div>
            <div className="legallandingnorow hexagonrow3">
              <div className="legallandingnocol">
                <div
                  className="hexagon hexagonspacing"
                  style={{ position: "relative" }}
                >
                  <img
                    className="change9 clientslogo"
                    src={Clientsimg10}
                    loading="lazy"
                  />
                  <div className="hexTop" />
                  <div className="hexBottom" />
                </div>
              </div>
              <div className="legallandingnocol">
                <div
                  className="hexagon hexagonspacing"
                  style={{ position: "relative" }}
                >
                  <img
                    className="change10 clientslogo"
                    src={Clientsimg11}
                    loading="lazy"
                  />
                  <div className="hexTop" />
                  <div className="hexBottom" />
                </div>
              </div>
              <div className="legallandingnocol">
                <div
                  className="hexagon hexagonspacing"
                  style={{ position: "relative" }}
                >
                  <img
                    className="change11 clientslogo"
                    src={Clientsimg12}
                    loading="lazy"
                  />
                  <div className="hexTop" />
                  <div className="hexBottom" />
                </div>
              </div>
              <div className="legallandingnocol">
                <div className="hexagon">
                  <img
                    className="change12 clientslogo"
                    src={Clientsimg13}
                    loading="lazy"
                  />
                  <div className="hexTop" />
                  <div className="hexBottom" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3" id="counter" style={{ display: "block" }}>
            <center>
              <h3 className="counterheading1">
                <span className="counter-value" data-count={100}>
                  0
                </span>
                <span
                  style={{ color: "#f8951d", fontFamily: '"CerebriSansHeavy"' }}
                >
                  +
                </span>
              </h3>
              <span className="counterheadingtext1">
                Currently served cities
              </span>
              <h3 className="counterheading2">
                <span className="counter-value" data-count={110}>
                  0
                </span>
                <span style={{ color: "#01355D" }}>k</span>
                <span
                  style={{ color: "#f8951d", fontFamily: '"CerebriSansHeavy"' }}
                >
                  +
                </span>
              </h3>
              <span className="counterheadingtext2">Trusted clients</span>
            </center>
          </div>
          <div className="col-md-2">
            <center>
              <h3 className="counterheading3">
                <span className="counter-value" data-count={354}>
                  0
                </span>
                <span
                  style={{ color: "#f8951d", fontFamily: '"CerebriSansHeavy"' }}
                >
                  +
                </span>
              </h3>
              <span className="counterheadingtext3">
                Qualified professionals
              </span>
              <h3 className="counterheading4">
                <span className="counter-value" data-count={50}>
                  0
                </span>
                <span style={{ color: "#01355D" }}>k</span>
                <span style={{ color: "#f8951d" }}>+</span>
              </h3>
              <span className="counterheadingtext4">Queries Solved</span>
            </center>
          </div>
        </div>
        <br />
        <br />
        <br />
        <section>
          <div className="row otrust" style={{ padding: "0px 30px" }}>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="whychoosediv">
                <h3 className="wych">
                  Why Choose{" "}
                  <img
                    src={Group9961}
                    className="legal251logo"
                    alt=""
                    loading="lazy"
                  />{" "}
                  ?
                </h3>
                <p className="wych_para">
                  Legal251 is the perfect choice for anyone looking to prepare
                  legal documents , registrations and compliance with ease and
                  confidence. Our team of experienced experts provide filing
                  services that are always on-time and accurate. Plus, we have a
                  mobile app and dashboard for managing your service &amp;
                  documents, so you can stay on top of your filing and other
                  works from anywhere. With over 10 years of experience in the
                  industry, you can trust us to get the job done right!
                </p>
                <img
                  src={Group9730}
                  className="gooreview"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lfg-6">
              <div className="whychoose2">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="displayflexdiv">
                    <div className="wctext">
                      <img
                        src={Titleimg1}
                        loading="lazy"
                        className="organegtickimage"
                      />
                    </div>
                    <div className="wctext">
                      <p className="wctext">Trusted Advisors</p>
                    </div>
                  </div>
                  <div className="displayflexdiv">
                    <div className="wctext">
                      <img
                        src={Titleimg2}
                        loading="lazy"
                        className="organegtickimage"
                      />
                    </div>
                    <div className="wctext">
                      <p className="wctext">10 Years of Experience</p>
                    </div>
                  </div>
                  <div className="displayflexdiv">
                    <div className="wctext">
                      <img
                        src={Titleimg3}
                        loading="lazy"
                        className="organegtickimage"
                      />
                    </div>
                    <div className="wctext">
                      <p className="wctext">Dedicated Experts</p>
                    </div>
                  </div>
                  <div className="displayflexdiv">
                    <div className="wctext">
                      <img
                        src={Titleimg4}
                        loading="lazy"
                        className="organegtickimage"
                      />
                    </div>
                    <div className="wctext">
                      <p className="wctext">Safe &amp; Secure</p>
                    </div>
                  </div>
                  <div className="displayflexdiv">
                    <div className="wctext">
                      <img
                        src={Titleimg5}
                        loading="lazy"
                        className="organegtickimage"
                      />
                    </div>
                    <div className="wctext">
                      <p className="wctext">Digital Platform</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="displayflexdiv">
                    <div className="wctext">
                      <img
                        src={Titleimg6}
                        loading="lazy"
                        className="organegtickimage"
                      />
                    </div>
                    <div className="wctext">
                      <p className="wctext">Round Clock Support</p>
                    </div>
                  </div>
                  <div className="displayflexdiv">
                    <div className="wctext">
                      <img
                        src={Titleimg7}
                        loading="lazy"
                        className="organegtickimage"
                      />
                    </div>
                    <div className="wctext">
                      <p className="wctext">Verified Professionals</p>
                    </div>
                  </div>
                  <div className="displayflexdiv">
                    <div className="wctext">
                      <img
                        src={Titleimg8}
                        loading="lazy"
                        className="organegtickimage"
                      />
                    </div>
                    <div className="wctext">
                      <p className="wctext">Quick and Reliable System</p>
                    </div>
                  </div>
                  <div className="displayflexdiv">
                    <div className="wctext">
                      <img
                        src={Titleimg9}
                        loading="lazy"
                        className="organegtickimage"
                      />
                    </div>
                    <div className="wctext">
                      <p className="wctext">Super Fast Team</p>
                    </div>
                  </div>
                  <div className="displayflexdiv">
                    <div className="wctext">
                      <img
                        src={Titleimg10}
                        loading="lazy"
                        className="organegtickimage"
                      />
                    </div>
                    <div className="wctext">
                      <p className="wctext">Best Operational Control</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <div className="news ">
          <div>
            <div className="row newsrow">
              <div className="col-md-6 bignewscardcol">
                <center>
                  <div className="card4 text-center bignewscard">
                    <img
                      className="card-img-top bignewscardimage"
                      src={Whatisimg}
                      loading="lazy"
                    />
                    <div className="card-body cardnewscol">
                      <h5 className="card-title bignewscardtitle">
                        What is Legal251?
                      </h5>
                      <p className="card-text bignewscardtext">
                        Meet the online legal advisors covering all domains and
                        providing services to simplify the most complex-looking
                        processes for a common person. Legal251 is an online
                        legal solutions provider that comprehensively delivers
                        the solutions for all queries of the Legal domain.
                        <br />
                        <br />
                        Founded in 2010 with a vision of streamlining the legal
                        issues and concerns of every person of this country,
                        Legal251 is the most trusted name among its users. Our
                        services are helping startups and businesses around the
                        country extensively in easing the process of
                        Registrations and Legal Management. It all started with
                        the inception of an idea to reduce the time spent on
                        legal activities of growth-focused startups and
                        businesses. The clients loved our services and therefore
                        the retention rate went up to 95%. We grew to a team of
                        100+ Members including Chartered Accountants, Lawyers,
                        Legal Advisors, Accounting Managers and more. Our
                        value-based model for our clients has made us achieve
                        numerous milestones in our path to glory. Recently, we
                        decided to go digital and bring our loved services on
                        mobiles, desktops and pcs for everyone to get
                        benefitted. We brought the best in class technology and
                        added new services to become the partner of our clients
                        in their legal issues. Trust and Transparency are the
                        key values that drive us to go the extra mile for client
                        satisfaction.
                      </p>
                      <center>
                        <Link className="readmorebutton" to="about.html">
                          Read more...
                        </Link>
                      </center>
                      <br />
                    </div>
                  </div>
                </center>
              </div>
              <div className="col-md-6 w1">
                <div className="row">
                  <div className="col-md-6 bignewscardcol">
                    <div className="card5 text-center smallnewscard">
                      <img
                        src={Legalconsultancy}
                        className="smallnewscardimage"
                        loading="lazy"
                      />
                      <div className="card-body cardnewscol">
                        <h5 className="card-title smallnewscardtitle">
                          How to get consultancy?
                        </h5>
                        <p style={{ marginTop: 10 }} />
                        <p className="card-text smallnewscardtext">
                          Getting consultancy with Legal251 becomes hassle-free
                          and time-saving. Whatever may be your problem in this
                          legal domain we are here for you to give a perfect
                          solution. You just have to follow the process
                          explained below and we will handle the rest.
                        </p>
                        <center>
                          <Link
                            className="readmorebutton"
                            to="how-to-get-consultancy.html"
                          >
                            Read more...
                          </Link>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 bignewscardcol">
                    <div className="card5 text-center smallnewscard">
                      <img
                        src={Legalworkimg}
                        className="smallnewscardimage"
                        loading="lazy"
                      />
                      <div className="card-body cardnewscol">
                        <h5 className="card-title smallnewscardtitle">
                          How Legal251 works?
                        </h5>
                        <p style={{ marginTop: 10 }} />
                        <p className="card-text smallnewscardtext">
                          We leverage the power of digital to simplify the
                          things and not make them complex for you. Our clear,
                          concise and transparent process gives you the complete
                          control of actions taken for you. Working smartly we
                          execute the operations in a flawless manner.
                        </p>
                        <center>
                          <Link className="readmorebutton" to="how-we-work.html">
                            Read more...
                          </Link>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "1.83vw" }}>
                  <div className="col-md-6 bignewscardcol">
                    <div className="card5 text-center smallnewscard">
                      <img
                        src={Onlineimg}
                        className="smallnewscardimage"
                        loading="lazy"
                      />
                      <div className="card-body cardnewscol">
                        <h5 className="card-title smallnewscardtitle">
                          Online Accounting by Legal251
                        </h5>
                        <p style={{ marginTop: 10 }} />
                        <p className="card-text smallnewscardtext">
                          Accounting made super easy for you with verified and
                          trusted professionals made accessible to you on your
                          fingertips. We give a specialist, reliable and capable
                          virtual online accounting administrations to private
                          companies.
                        </p>
                        <center>
                          <Link
                            className="readmorebutton"
                            to="online-accounting.html"
                          >
                            Read more...
                          </Link>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 bignewscardcol">
                    <div className="card5 text-center smallnewscard">
                      <img
                        src={Trackimg}
                        className="smallnewscardimage"
                        loading="lazy"
                      />
                      <div className="card-body cardnewscol">
                        <h5 className="card-title smallnewscardtitle">
                          Track your services
                        </h5>
                        <p style={{ marginTop: 10 }} />
                        <p className="card-text smallnewscardtext">
                          Tracking your services becomes much easier in Legal251
                          you can see the progress of your query and track each
                          and every step of it and when it's completed you can
                          directly see and download the solution from Service
                          Tracking Dashboard whenever you want it will always be
                          accessible to you. <br />
                        </p>
                        <center>
                          <Link
                            className="readmorebutton"
                            to="track-service.html"
                          >
                            Read more...
                          </Link>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
        <div className="whatspopupclosediv" id="whatspopupclosediv">
          <button
            className="whatspopupclosebtn"
            id="closewhatspopbtn"
            onclick="closepop()"
          >
            <img style={{ width: 15 }} src="images/close.svg" className="" />
          </button>
        </div>
        <div className="popupbtndiv" id="popupbtndiv">
          <button
            className="whatsuppopupbtn"
            id="openwhatspupbtn"
            onclick="openwhpop()"
          >
            <img
              style={{ width: "100%", height: "100%", marginTop: "-7px" }}
              src={Whatsappicon}
              className=""
            />
          </button>
        </div>
        <div className="whatsupchatsection " id="whatsupchatpopup">
          <div style={{ padding: 10 }}>
            <img src={Supportimg} style={{ width: "100%" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <h2 className="whatsup_head">Hi we are Online!</h2>
            <p className="whatsup_pera">
              We are here to help you! Chat with us on WhatsApp for any queries
              or more.
            </p>
          </div>
          <div style={{ textAlign: "center", display: "flex" }}>
            <button className="chatbtn" onclick="wht()">
              {" "}
              <img
                style={{ width: 24, height: 24, marginRight: 15 }}
                src={Whatsappimg2}
                className=""
              />{" "}
              START CHAT
            </button>
          </div>
        </div>
        <br className="mobresbr" />
        <br className="mobresbr" />
        <br className="mobresbr" />
        <br className="mobresbr" />
        <div className="consulationnowsection consulationnowsection1">
          <div className="row">
            <div className="col-md-7">
              <p className="bookconst">
                BOOK A <span className="bookconstspan1">FREE</span>{" "}
                <span className="bookconstspan2">CONSULTATION</span> NOW!
              </p>
              <div className="row">
                <div className="col-md-7">
                  <p className="readyconsline">
                    Ready to take first step ? Let's chat about how we can help.
                  </p>
                  <button className="bookbtn2 bookdemoform">
                    Book a free demo
                  </button>
                </div>
                <div className="col-md-5 ">
                  <img
                    src={Group9801img}
                    className="bookconstimg2 reshide"
                    loading="lazy"
                  />
                  <img
                    src={Group209801}
                    className="ershideondesk bookconstimg3"
                    loading="lazy"
                  />
                  <img
                    src={Ressponimg}
                    className="ershideondesk bookconstimg4"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5 reshide">
              <img src={Group97982} className="bookconstimg" loading="lazy" />
              <img />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <footer className="mainfooter">
          <div className="row">
            <div className="col-xs-4">
              <img
                src={Legalwhitelogo}
                className="footerlegallogo"
                loading="lazy"
              />
            </div>
            <div className="col-xs-8 paymentrow">
              <div className="row">
                <div className="col-xs-2"></div>
                <div className="col-xs-4">
                  <center>
                    <img
                      src={Visaimg}
                      className="paymentimage"
                      loading="lazy"
                    />
                  </center>
                </div>
                <div className="col-xs-6">
                  <center>
                    <img src={Upiimg} className="paymentimage" loading="lazy" />
                    <div className="footerdemodiv" />
                  </center>
                </div>
                <div className="col-xs-4">
                  <center>
                    <img
                      src={Rupayimg}
                      className="paymentimage"
                      loading="lazy"
                    />
                  </center>
                </div>
                <div className="col-xs-4">
                  <center>
                    <img
                      src={Paytmimg}
                      className="paymentimage"
                      loading="lazy"
                    />
                  </center>
                </div>
                <div className="col-xs-2"></div>
                <div className="col-xs-2">
                  <center>
                    <img
                      src={Mastercardimg}
                      className="paymentimage"
                      loading="lazy"
                    />
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "6.4vw" }}>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <p className="footerheading">Contact us</p>
                  <Link
                    to="cdn-cgi/l/email-protection.html#ee8d81809a8f8d9aae828b898f82dcdbdfc08d8183"
                    style={{ textDecoration: "underline", color: "#fff" }}
                    className="footertext"
                  >
                    <span
                      className="__cf_email__"
                      data-cfemail="f4979b9a80959780b49891939598c6c1c5da979b99"
                    >
                      [email&nbsp;protected]
                    </span>
                  </Link>
                  <br />
                  <Link
                    to="tel:7772877729"
                    style={{ textDecoration: "underline", color: "#fff" }}
                    className="footertext"
                  >
                    (+91)77728-77729
                  </Link>
                  <br />
                </div>
                <div className="col-md-3">
                  <p className="footerheading">Links</p>
                  <Link
                    to="https://blog.legal251.com/"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Latest News
                  </Link>
                  <br />
                  <Link
                    to="how-we-work.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    How we work
                  </Link>
                  <br />
                  <Link
                    to="about.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    About Us
                  </Link>
                  <br />
                  <Link
                    to="resources/index.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Blog
                  </Link>
                  <br />
                  <Link
                    to="resources/guides/index.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Guides
                  </Link>
                </div>
                <div className="col-md-5">
                  <p className="footerheading">Legal &amp; Policies</p>
                  <Link
                    to="terms-and-conditions.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Terms &amp; Condition
                  </Link>
                  <br />
                  <Link
                    to="privacy-policy.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Privacy Policy
                  </Link>
                  <br />
                  <Link
                    to="cookie-policy.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Cookie Policy
                  </Link>
                  <br />
                  <Link
                    to="refund-policy.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Refund Policy
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <p className="footerheading">Support</p>
                  <Link
                    to="faq.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    FAQs
                  </Link>
                  <br />
                  <Link
                    to="contact.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Contact us
                  </Link>
                </div>
                <div className="col-md-4">
                  <p className="footerheading">Account</p>
                  <Link
                    to="https://user.legal251.com/"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    User Login
                  </Link>
                  <br />
                  <Link
                    to="https://partners.legal251.com/"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Partner Login
                  </Link>
                  <br />
                  <Link
                    to="track-service.html"
                    style={{ color: "#fff" }}
                    className="footertext"
                  >
                    Service Tracking Dashboard
                  </Link>
                </div>
                <div className="col-md-5">
                  <center>
                    <p className="Subscribeinfoheading">
                      Subscribe for more info
                    </p>
                    <div className="input-group Subscribeinfodiv">
                      <input
                        type="email"
                        id="footerEmail"
                        maxLength={50}
                        className="form-control Subscribeemail Subscribeinfoinput"
                        placeholder="email..."
                        style={{ borderColor: "#F4FC40", borderRadius: 40 }}
                        required=""
                      />
                      <div className="input-group-btn">
                        <button
                          id="footersubmitemail"
                          onclick="submitfooteremail()"
                          className="Subscribeinfobutton"
                          type="submit"
                        >
                          <img
                            src={Emailbuttonimg}
                            className="Subscribeinfobuttonimg"
                            loading="lazy"
                          />
                        </button>
                      </div>
                    </div>
                    <p
                      id="footererror"
                      className="Subscribeemail"
                      style={{ color: "#fe0c0c" }}
                    />
                    <br />
                    <p className="Followusheading">Follow us on</p>
                    <Link
                      to="https://www.instagram.com/legal251india/"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src={Footerinstaimg}
                        className="footersocialicon"
                        loading="lazy"
                      />{" "}
                    </Link>{" "}
                    <Link to="https://twitter.com/legal251" target="_blank">
                      {" "}
                      <img
                        src={FooterTwitter}
                        className="footersocialicon"
                        loading="lazy"
                      />{" "}
                    </Link>{" "}
                    <Link
                      to="https://www.linkedin.com/company/legal251/"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src={FooterLinkedingimg}
                        className="footersocialicon"
                        loading="lazy"
                      />{" "}
                    </Link>{" "}
                    <Link to="https://www.facebook.com/legal251" target="_blank">
                      {" "}
                      <img
                        src={Footerfbimg}
                        className=" footersocialicon"
                        loading="lazy"
                      />{" "}
                    </Link>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <p className="footerbottomtext" style={{ textAlign: "center" }}>
            © 2023 ISONOMY LEGAL251 Private Limited. All Rights Reserved
          </p>
        </footer>
        <div className="modal fade" id="myModal1" role="dialog">
          <div
            className="modal-dialog modalmainwidth"
            style={{ border: "none" }}
          >
            <div
              className="modal-content"
              style={{ borderRadius: 10, border: "none" }}
            >
              <div
                className="modal-header subscribeemailpopupheader"
                style={{
                  display: "block",
                  border: "none",
                  backgroundColor: "#2d2d2d",
                  borderRadius: "8px 8px 0 0",
                  WebkitBoxShadow: "6px 7px 15px -13px rgba(0,0,0,1)",
                  MozBoxShadow: "6px 7px 15px -13px rgba(0,0,0,1)",
                  boxShadow: "6px 7px 15px -13px rgba(0,0,0,1)",
                }}
              >
                <img
                  src={Popupimg}
                  className="subscribeemailemailpopupclose"
                  style={{
                    position: "absolute",
                    right: "1.9%",
                    top: 0,
                    marginTop: "1.4vw",
                  }}
                  data-dismiss="modal"
                  loading="lazy"
                />
                <h4 className="subscribeemailpopupheading">
                  Thank you for subscribing newsletter
                </h4>
              </div>
              <div className="modal-body">
                <div className="legallandingnorow">
                  <div
                    className="legallandingnocol"
                    style={{
                      padding: "0px 1.46vw",
                      margin: 0,
                      verticalAlign: "middle",
                    }}
                  >
                    <p className="email-content verificationtext">
                      A verification link
                      <br /> has been sent.
                      <br />
                      Please verify your e-mail address
                    </p>
                  </div>
                  <div className="legallandingnocol">
                    <img
                      src={Emailimg2}
                      className="verificationimg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={Contactimg}
          className="burger"
          width={50}
          height={50}
          style={{ cursor: "pointer" }}
        />
        <div className="modal modalmain fade" id="myModal" role="dialog">
          <div
            className="modal-dialog modalmainwidth"
            style={{ border: "none" }}
          >
            <div className="modal-content" style={{ borderRadius: 10 }}>
              <div
                className="modal-header"
                style={{
                  border: "none",
                  backgroundColor: "#f8951d",
                  borderRadius: "8px 8px 0 0",
                  WebkitBoxShadow: "6px 7px 15px -13px rgba(0,0,0,1)",
                  MozBoxShadow: "6px 7px 15px -13px rgba(0,0,0,1)",
                  boxShadow: "6px 7px 15px -13px rgba(0,0,0,1)",
                }}
              >
                <img
                  src={Popupimg}
                  className="chossingpopupclose"
                  style={{ position: "absolute" }}
                  data-dismiss="modal"
                  loading="lazy"
                />
                <h4
                  className="chossingpopupmainheading"
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    textAlign: "center",
                    fontWeight: 800,
                  }}
                >
                  Thank You for Trusting Legal251
                </h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-xs-7">
                    <p
                      className="chossingpopuprequesth"
                      style={{
                        color: "#01355D",
                        fontFamily: '"Open Sans", sans-serif',
                        textAlign: "center",
                      }}
                    >
                      We have received your query.
                    </p>
                    <p
                      className="chossingpopupexecutive"
                      style={{
                        color: "#2d2d2d",
                        fontFamily: '"Open Sans", sans-serif',
                        textAlign: "center",
                      }}
                    >
                      One of our experts will contact you soon. If you wish, you
                      can submit your query/problem online also.{" "}
                    </p>
                    <center>
                      <Link to="index.html" className="btn Clickherebutton">
                        Proceed online
                      </Link>
                      <p
                        className="choossingno"
                        style={{
                          color: "#2d2d2d",
                          fontFamily: '"Open Sans", sans-serif',
                          textAlign: "center",
                        }}
                      >
                        Or call on (+91){" "}
                        <Link
                          style={{ display: "block", color: "#2d2d2d" }}
                          to="tel:7772877729"
                        >
                          77728-77729{" "}
                          <img
                            src={Phonecallimg}
                            className="phonecall"
                            loading="lazy"
                          />
                        </Link>
                      </p>
                    </center>
                  </div>
                  <div className="col-xs-5">
                    <div
                      className="chossingpopupimgdiv"
                      style={{
                        marginTop: "2.19vw",
                        WebkitBoxShadow: "4px 5px 5px 0px rgba(0,0,0,0.2)",
                        MozBoxShadow: "4px 5px 5px 0px rgba(0,0,0,0.2)",
                        boxShadow: "4px 5px 5px 0px rgba(0,0,0,0.2)",
                        backgroundColor: "#F3F3F3",
                      }}
                    >
                      <img
                        src={Personimg}
                        className="chossingpopupimg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg modal1"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                background: "transparent",
              }}
            >
              <button
                type="button"
                className="close close1 modal1close"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "black",
                  fontSize: 30,
                }}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div
              className="modal-content"
              style={{ height: 500, background: "transparent" }}
            >
              <iframe
                className="embed-responsive-item youtube-iframe"
                id="linkmodalclose"
                style={{ width: "100%", height: "100%" }}
                allowscriptaccess="always"
                src="https://www.youtube.com/embed/4KCHx81vaY8?&modestbranding=1&showinfo=0"
                allowFullScreen="allowfullscreen"
              />
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg modal2"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                background: "transparent",
              }}
            >
              <button
                type="button"
                className="close close1 modalclose1"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "black",
                  fontSize: 30,
                }}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div
              className="modal-content"
              style={{ height: 500, background: "transparent" }}
            >
              <iframe
                className="embed-responsive-item youtube-iframe"
                id="linkmodalclose1"
                style={{ width: "100%", height: "100%" }}
                allowscriptaccess="always"
                src="https://www.youtube.com/embed/wDzFGWLg8xw?&modestbranding=1&showinfo=0"
                allowFullScreen="allowfullscreen"
              />
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg modal3"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                background: "transparent",
              }}
            >
              <button
                type="button"
                className="close close1 modalclose2"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "black",
                  fontSize: 30,
                }}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div
              className="modal-content"
              style={{ height: 500, background: "transparent" }}
            >
              <iframe
                className="embed-responsive-item youtube-iframe"
                id="linkmodalclose2"
                style={{ width: "100%", height: "100%" }}
                allowscriptaccess="always"
                src="https://www.youtube.com/embed/pLbI6QqWuiw?&modestbranding=1&showinfo=0"
                allowFullScreen="allowfullscreen"
              />
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg modal4"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                background: "transparent",
              }}
            >
              <button
                type="button"
                className="close close1 modalclose3"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "black",
                  fontSize: 30,
                }}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div
              className="modal-content"
              style={{ height: 500, background: "transparent" }}
            >
              <iframe
                className="embed-responsive-item youtube-iframe"
                id="linkmodalclose3"
                style={{ width: "100%", height: "100%" }}
                allowscriptaccess="always"
                src="https://www.youtube.com/embed/PEwm1L37DEM?&modestbranding=1&showinfo=0"
                allowFullScreen="allowfullscreen"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}