import React from 'react'

const GstReturnFiling = () => {
  return (
  <>
  <div className="wrapper">
  <div style={{ position: "relative", overflowX: "hidden" }}>
  
    <div className="servicebrhide">
      <br />
      <br />
      <br />
    </div>
    <img
      src="https://legal251.com/images/services/Group 887.svg"
      style={{
        width: 40,
        marginTop: 6,
        marginLeft: "12.5px",
        visibility: "hidden"
      }}
    />
    <div>
      <div
        className="nav navbar-nav serviceheader"
        style={{ marginTop: "-40px", padding: "2px 2px 1px" }}
      >
        <li>
          <a
            className="serviceheaderlink "
            id="p"
            href="#overview"
            style={{ color: "rgb(255, 255, 255)" }}
          >
            Overview
          </a>
        </li>
        <li>
          <a
            className="serviceheaderlink"
            id="y"
            href="#plans"
            style={{ color: "rgb(20, 31, 56)" }}
          >
            Plans
          </a>
        </li>
        <li>
          <a
            className="serviceheaderlink"
            id="q"
            href="#Howtoapply"
            style={{ color: "rgb(20, 31, 56)" }}
          >
            How to apply
          </a>
        </li>
        <li>
          <a
            className="serviceheaderlink"
            id="yu"
            href="#typesofform"
            style={{ color: "rgb(20, 31, 56)" }}
          >
            Types of forms
          </a>
        </li>
        <li>
          <a
            className="serviceheaderlink"
            id="r"
            href="#Detailedprocess"
            style={{ color: "rgb(20, 31, 56)" }}
          >
            Benefits
          </a>
        </li>
        <li>
          <a
            className="serviceheaderlink"
            id="s"
            href="#Documents"
            style={{ color: "rgb(20, 31, 56)" }}
          >
            Documents
          </a>
        </li>
        <li>
          <a
            className="serviceheaderlink"
            id="t"
            href="#Registrationprocess"
            style={{ color: "rgb(20, 31, 56)" }}
          >
            Filing process{" "}
          </a>
        </li>
        <li>
          <a
            className="serviceheaderlink"
            id="v"
            href="#FAQs"
            style={{ color: "rgb(20, 31, 56)" }}
          >
            {" "}
            FAQs
          </a>
        </li>
        <li>
          <a
            className="serviceheaderlink"
            id="w"
            href="#Whychooseus?"
            style={{ color: "rgb(20, 31, 56)" }}
          >
            Why choose us?{" "}
          </a>
        </li>
        <hr
          className="animationhr"
          id="nav_slide_click"
          style={{
            top: "-35px",
            height: "33.5px",
            width: "9.74724%",
            marginLeft: "0%"
          }}
        />
      </div>
      <br />
      <br />
      <div className="servicemaindiv" style={{ marginTop: 7 }}>
        <div className="row">
          <div className="col-md-7">
            <p className="serviceamainheading">GST Return Filing</p>
            <p
              style={{
                fontFamily: '"Roboto"',
                marginTop: 18,
                fontWeight: 700,
                fontSize: "24.5px",
                color: "#01355D",
                lineHeight: "1.2"
              }}
            >
              Legal251 has a team of specialists when it comes to GST return
              filing. GST Return Filing service plans rely upon the kind of
              professional customary, trade, import, charge deductor, and the
              number of solicitations, charges, and exchanges in your business
              every month. We are here to help you not miss deadlines or get
              fined a high amount. Hire truly dedicated professionals who always
              put you on the safer side.
            </p>
            <br />
            <a href="#plans">
              <button className="docureqbutton">Get Started</button>
            </a>
            <br />
            <a
              href="https://legal251.com/gst-registration"
              style={{
                display: "block",
                marginTop: 5,
                textDecoration: "underline",
                fontFamily: '"Roboto"',
                fontWeight: 500,
                fontSize: 19,
                color: "#F8951D",
                letterSpacing: "-0.5px"
              }}
            >
              Know more about GST &amp; Registration
            </a>
          </div>
          <div className="col-md-5 mobhidebr left-div-bodycol">
            <center className="cnt_margin left-div-body">
              <div className="login-iframe topvideo">
                <iframe
                  className="iframew "
                  id="video"
                  allowscriptaccess="always"
                  src="https://www.youtube.com/embed/VJ24V4CkmUU?&modestbranding=1&showinfo=0"
                  allowFullScreen="allowfullscreen"
                />
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
    <div id="plans" className="page-section">
      <br />
      <br />
      <br />
      <br />
      <p className="servicehrheading">
        &nbsp;{" "}
        <img
          src="https://legal251.com/images/itr/Path 20100.svg"
          className="Howtoapplyimage"
        />{" "}
        Plans&nbsp;
      </p>
      <hr className="planshr1" />
      <hr className="planshr2" />
      <hr className="planshr3" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <p className="pleaseselecttunovertext">Please select Turnover:</p>
        <select id="turnover" className="selectturnover">
          <option value={1}>₹0 to ₹50 Lakh</option>
          <option value={2}>₹50 Lakh to ₹1.50 Crore</option>
          <option value={3}>₹1.50 Crore to ₹10 Crore</option>
          <option value={4}>₹10 Crore to ₹25 Crore</option>
          <option value={5}>₹25 Crore to ₹30 Crore</option>
          <option value={6}>₹30 Crore and above</option>
        </select>
      </center>
      <div id="multiform" className="multiformdiv" style={{ display: "none" }}>
        <p className="planformtext1">Name:</p>
        <input
          type="text"
          maxLength={150}
          pattern="[A-Za-z ]{3,150}"
          id="name"
          className="appendnameinput planforminput"
          style={{ textTransform: "capitalize" }}
          required=""
        />
        <p className="planform2">Email:</p>
        <input
          type="email"
          maxLength={50}
          id="email"
          className="appendemailinput planforminput"
          required=""
        />
        <p className="planform2">Contact no:</p>
        <input
          type="tel"
          pattern="[6-9]{1}[0-9]{9}"
          maxLength={10}
          id="contact"
          className="appendcontactno planforminput"
        />
        <p className="planform2">Select Location:</p>
        <select
          id="city"
          className="js-example-basic-single appendcityinput select2-hidden-accessible"
          style={{ zIndex: 9999999999, width: "100%" }}
          name="state"
          required=""
          data-select2-id="select2-data-city"
          tabIndex={-1}
          aria-hidden="true"
        >
          <option
            className="cities"
            data-value=""
            data-select2-id="select2-data-2-nonn"
          />
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
        <span
          className="select2 select2-container select2-container--default"
          dir="ltr"
          data-select2-id="select2-data-1-qp9z"
          style={{ width: "100%" }}
        >
          <span className="selection">
            <span
              className="select2-selection select2-selection--single"
              role="combobox"
              aria-haspopup="true"
              aria-expanded="false"
              tabIndex={0}
              aria-disabled="false"
              aria-labelledby="select2-city-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-city-container"
                role="textbox"
                aria-readonly="true"
              >
                <span className="select2-selection__placeholder">
                  City / District
                </span>
              </span>
              <span className="select2-selection__arrow" role="presentation">
                <b role="presentation" />
              </span>
            </span>
          </span>
          <span className="dropdown-wrapper" aria-hidden="true" />
        </span>
        <div style={{ width: "100%", margin: 0, padding: 0, left: 0 }}>
          <p className="errorside">
            <img src="https://legal251.com/" className="errorsideimg" />
          </p>
        </div>
        <center>
          <img
            className="loader1"
            style={{ display: "none" }}
            src="https://legal251.com/images/homecontact/Rolling.svg"
            alt=""
          />
          <button
            id="normalsubmit"
            onclick="submitcontact()"
            type="submit"
            className="planformsubmitbutton"
          >
            SUBMIT
          </button>
        </center>
      </div>
      <div className="Salarieddiv planhide" id={1} style={{}}>
        <br />
        <div className="row" style={{ margin: 0, padding: 0 }}>
          <div className="col-md-3 col-sm-6 Salariedcol">
            <div
              style={{
                backgroundImage: 'url("images/itr/Salaried - starter.svg")',
                background: 'url("images/itr/Salaried - starter.svg") #01355D',
                borderRadius: 10,
                boxShadow: "6px 6px 6px #00000017",
                marginBottom: 40
              }}
            >
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 28,
                  textTransform: "uppercase",
                  color: "#F7F7F7",
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  padding: "12px 5px"
                }}
              >
                Starter
              </p>
              <div style={{ padding: "0 5px 5px 5px" }}>
                <div
                  className="formplacer"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    padding: 13
                  }}
                >
                  <div style={{ padding: "0 12px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        letterSpacing: "-0.4px",
                        color: "#01355D"
                      }}
                    >
                      Select the Tenure:
                    </p>
                    <div className="dropdown">
                      <img
                        src="https://legal251.com/images/itr/Icon ionic-ios-arrow-down.svg"
                        className="salarieddropdownimg servicedropdownimg1"
                      />
                      <button
                        id="dLabel"
                        className="dropdown-select firstdropdown"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          padding: 0,
                          border: "2px solid #f8951d",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <div
                          style={{ padding: "6px 0 6px 6px", height: "auto" }}
                        >
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span style={{ fontSize: 15, color: "#01355D" }}>
                              1 Year &nbsp;&nbsp;@
                            </span>
                            <span style={{ fontSize: 18, color: "#F8951D" }}>
                              ₹7,251.00
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                color: "rgba(1,53,93,0.4)"
                              }}
                            >
                              Yearly
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              style={{
                                fontSize: 14,
                                textDecoration: "line-through",
                                textDecorationColor: "#FF4747",
                                color: "#F8951D"
                              }}
                            >
                              ₹19,336.00
                            </span>
                            <br />
                            <div style={{ paddingLeft: 79 }}>
                              <span style={{ fontSize: 14, color: "#FF4747" }}>
                                {" "}
                                Save 50%+25%
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu firstdropdown-menu"
                        aria-labelledby="dLabel"
                        style={{
                          borderLeft: "2px solid #f8951d",
                          borderRight: "2px solid #f8951d",
                          borderBottom: "2px solid #f8951d",
                          marginTop: 0,
                          paddingTop: 5,
                          width: "100%",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <li
                          value="M"
                          style={{ borderBottom: "2px solid #f8951d" }}
                          className=""
                        >
                          <div
                            className=""
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              className=""
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                className=""
                                style={{ fontSize: 15, color: "#01355D" }}
                              >
                                1 Month &nbsp;&nbsp;@
                              </span>
                              <span
                                className=""
                                style={{ fontSize: 18, color: "#F8951D" }}
                              >
                                ₹751.00
                              </span>
                            </div>
                            <div
                              className=""
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                className=""
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Monthly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                className=""
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹1,502.00
                              </span>
                              <br />
                              <div className="" style={{ paddingLeft: 94 }}>
                                <span
                                  className=""
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  {" "}
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Q"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                3 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹2,351.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Quarterly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹4,702.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 94 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="H"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                6 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹4,051.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Half-yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹9,532.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 96 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+15%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Y"
                          className="linebtplandrop"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                1 Year &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹7,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹19,336.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 79 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li value="Y2">
                          <div
                            className=""
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              className=""
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                className=""
                                style={{ fontSize: 15, color: "#01355D" }}
                              >
                                2 Year &nbsp;&nbsp;@
                              </span>
                              <span
                                className=""
                                style={{ fontSize: 18, color: "#F8951D" }}
                              >
                                ₹14,502.00
                              </span>
                            </div>
                            <div
                              className=""
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                className=""
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                className=""
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹38,672.00
                              </span>
                              <br />
                              <div className="" style={{ paddingLeft: 79 }}>
                                <span
                                  className=""
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidesalcon1">
                    <center>
                      <button
                        id="1S"
                        className="getform"
                        style={{
                          backgroundImage:
                            'url("images/itr/Mask_Group_202.svg")',
                          width: 183,
                          height: 30,
                          borderRadius: 5,
                          border: "none",
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: "1.4",
                          boxShadow: "3px 3px 6px #00000016",
                          color: "#F3F3F3",
                          margin: "15px 0"
                        }}
                      >
                        GET STARTED
                      </button>
                    </center>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Requirements:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 3B Excel file
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 1 File
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: 1,
                        color: "#2D2D2D",
                        paddingLeft: 40,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      or
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      Normal Excel file of Sales &amp; Purchase
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Inclusions:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Dashboard for managing service
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Mobile application support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Documents sharing facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Download deliverables any time
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Password sharing
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Round the clock support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Time to time updates &amp; notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 Salariedcol">
            <div
              style={{
                backgroundImage: 'url("images/itr/Salaried - basic.svg")',
                background: 'url("images/itr/Salaried - basic.svg") #f8951d',
                borderRadius: 10,
                boxShadow: "6px 6px 6px #00000017",
                marginBottom: 40
              }}
            >
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 28,
                  textTransform: "uppercase",
                  color: "#F7F7F7",
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  padding: "12px 5px"
                }}
              >
                basic
              </p>
              <div style={{ padding: "0 5px 5px 5px" }}>
                <div
                  className="formplacer"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    padding: 13
                  }}
                >
                  <div style={{ padding: "0 12px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        letterSpacing: "-0.4px",
                        color: "#01355D"
                      }}
                    >
                      Select the Tenure:
                    </p>
                    <div className="dropdown">
                      <img
                        src="https://legal251.com/images/itr/Icon ionic-ios-arrow-down.svg"
                        className="salarieddropdownimg servicedropdownimg2"
                      />
                      <button
                        id="dLabel"
                        className="dropdown-select seconddropdown"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          padding: 0,
                          border: "2px solid #f8951d",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <div
                          style={{ padding: "6px 0 6px 6px", height: "auto" }}
                        >
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span style={{ fontSize: 15, color: "#01355D" }}>
                              1 Year &nbsp;&nbsp;@
                            </span>
                            <span style={{ fontSize: 18, color: "#F8951D" }}>
                              ₹8,251.00
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                color: "rgba(1,53,93,0.4)"
                              }}
                            >
                              Yearly
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              style={{
                                fontSize: 14,
                                textDecoration: "line-through",
                                textDecorationColor: "#FF4747",
                                color: "#F8951D"
                              }}
                            >
                              ₹22,003.00
                            </span>
                            <br />
                            <div style={{ paddingLeft: 79 }}>
                              <span style={{ fontSize: 14, color: "#FF4747" }}>
                                {" "}
                                Save 50%+25%
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu seconddropdown-menu"
                        aria-labelledby="dLabel"
                        style={{
                          borderLeft: "2px solid #f8951d",
                          borderRight: "2px solid #f8951d",
                          borderBottom: "2px solid #f8951d",
                          marginTop: 0,
                          paddingTop: 5,
                          width: "100%",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <li
                          value="M"
                          className=""
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            className=""
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div className="">
                              <span
                                className=""
                                style={{ fontSize: 15, color: "#01355D" }}
                              >
                                1 Month &nbsp;&nbsp;@
                              </span>
                              <span
                                className=""
                                style={{ fontSize: 18, color: "#F8951D" }}
                              >
                                ₹951.00
                              </span>
                            </div>
                            <div
                              className=""
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                className=""
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Monthly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                className=""
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹1902.00
                              </span>
                              <br />
                              <div className="" style={{ paddingLeft: 94 }}>
                                <span
                                  className=""
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  {" "}
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Q"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                3 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹2,651.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Quarterly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹5,302.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 94 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="H"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                6 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹4,451.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Half-yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹1047.3.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 96 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+15%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Y"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                1 Year &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹8,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹22,003.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 79 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li value="Y2">
                          <div
                            className=""
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              className=""
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                className=""
                                style={{ fontSize: 15, color: "#01355D" }}
                              >
                                2 Year &nbsp;&nbsp;@
                              </span>
                              <span
                                className=""
                                style={{ fontSize: 18, color: "#F8951D" }}
                              >
                                ₹16,502.00
                              </span>
                            </div>
                            <div
                              className=""
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                className=""
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                className=""
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                44,005.00
                              </span>
                              <br />
                              <div className="" style={{ paddingLeft: 79 }}>
                                <span
                                  className=""
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidesalcon2">
                    <center>
                      <button
                        id="1B"
                        className="getform2"
                        style={{
                          backgroundImage:
                            'url("images/itr/Mask_Group_202.svg")',
                          width: 183,
                          height: 30,
                          borderRadius: 5,
                          border: "none",
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: "1.4",
                          boxShadow: "3px 3px 6px #00000016",
                          color: "#F3F3F3",
                          margin: "15px 0"
                        }}
                      >
                        GET STARTED
                      </button>
                    </center>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Requirements:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 3B Excel file
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 1 File
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: 1,
                        color: "#2D2D2D",
                        paddingLeft: 40,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      or
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      Normal Excel file of Sales &amp; Purchase
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Inclusions:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      E-way bill facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Dashboard for managing service
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Mobile application support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Documents sharing facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Download deliverables any time
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Password sharing
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Round the clock support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Time to time updates &amp; notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 Salariedcol">
            <div
              style={{
                backgroundImage: 'url("images/itr/Salaried - pro.svg")',
                background: 'url("images/itr/Salaried - pro.svg") #01355D',
                borderRadius: 10,
                boxShadow: "6px 6px 6px #00000017",
                marginBottom: 40
              }}
            >
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 28,
                  textTransform: "uppercase",
                  color: "#F7F7F7",
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  padding: "12px 5px"
                }}
              >
                pro
              </p>
              <div style={{ padding: "0 5px 5px 5px" }}>
                <div
                  className="formplacer"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    padding: 13
                  }}
                >
                  <div style={{ padding: "0 12px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        letterSpacing: "-0.4px",
                        color: "#01355D"
                      }}
                    >
                      Select the Tenure:
                    </p>
                    <div className="dropdown">
                      <img
                        src="https://legal251.com/images/itr/Icon ionic-ios-arrow-down.svg"
                        className="salarieddropdownimg servicedropdownimg3"
                      />
                      <button
                        id="dLabel"
                        className="dropdown-select thirddropdown"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          padding: 0,
                          border: "2px solid #f8951d",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <div
                          style={{ padding: "6px 0 6px 6px", height: "auto" }}
                        >
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span style={{ fontSize: 15, color: "#01355D" }}>
                              1 Year &nbsp;&nbsp;@
                            </span>
                            <span style={{ fontSize: 18, color: "#F8951D" }}>
                              ₹8,751.00
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                color: "rgba(1,53,93,0.4)"
                              }}
                            >
                              Yearly
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              style={{
                                fontSize: 14,
                                textDecoration: "line-through",
                                textDecorationColor: "#FF4747",
                                color: "#F8951D"
                              }}
                            >
                              ₹23,336.00
                            </span>
                            <br />
                            <div style={{ paddingLeft: 79 }}>
                              <span style={{ fontSize: 14, color: "#FF4747" }}>
                                {" "}
                                Save 50%+25%
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu thirddropdown-menu"
                        aria-labelledby="dLabel"
                        style={{
                          borderLeft: "2px solid #f8951d",
                          borderRight: "2px solid #f8951d",
                          borderBottom: "2px solid #f8951d",
                          marginTop: 0,
                          paddingTop: 5,
                          width: "100%",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <li
                          value="M"
                          className=""
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            className=""
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              className=""
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                className=""
                                style={{ fontSize: 15, color: "#01355D" }}
                              >
                                1 Month &nbsp;&nbsp;@
                              </span>
                              <span
                                className=""
                                style={{ fontSize: 18, color: "#F8951D" }}
                              >
                                ₹1151.00
                              </span>
                            </div>
                            <div
                              className=""
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                className=""
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Monthly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                className=""
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹2,302.00
                              </span>
                              <br />
                              <div className="" style={{ paddingLeft: 94 }}>
                                <span
                                  className=""
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Q"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                3 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹2,851.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Quarterly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹5,702.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 94 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="H"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                6 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹4,851.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Half-yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹11,414.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 96 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+15%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Y"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                1 Year &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹8,751.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹23,336.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 79 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li value="Y2">
                          <div
                            className=""
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              className=""
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                className=""
                                style={{ fontSize: 15, color: "#01355D" }}
                              >
                                2 Year &nbsp;&nbsp;@
                              </span>
                              <span
                                className=""
                                style={{ fontSize: 18, color: "#F8951D" }}
                              >
                                ₹17,502.00
                              </span>
                            </div>
                            <div
                              className=""
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                className=""
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                className=""
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹4,6672.00
                              </span>
                              <br />
                              <div className="" style={{ paddingLeft: 79 }}>
                                <span
                                  className=""
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidesalcon3">
                    <center>
                      <button
                        id="1P"
                        className="getform3"
                        style={{
                          backgroundImage:
                            'url("images/itr/Mask_Group_202.svg")',
                          width: 183,
                          height: 30,
                          borderRadius: 5,
                          border: "none",
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: "1.4",
                          boxShadow: "3px 3px 6px #00000016",
                          color: "#F3F3F3",
                          margin: "15px 0"
                        }}
                      >
                        GET STARTED
                      </button>
                    </center>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Requirements:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      Sales &amp; Purchase Invoices
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Inclusions:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      GSTR-2A Reconciliation mismatch report
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Included data preparation
                      <br />
                      <span style={{ fontSize: 13 }}>
                        (on basis of Invoices)
                      </span>
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Dashboard for managing service
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Mobile application support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Documents sharing facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Download deliverables any time
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Password sharing
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Round the clock support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Time to time updates &amp; notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 Salariedcol">
            <div
              style={{
                backgroundImage: 'url("images/itr/Salaried - premium.svg")',
                background: 'url("images/itr/Salaried - premium.svg") #f8951d',
                borderRadius: 10,
                boxShadow: "6px 6px 6px #00000017",
                marginBottom: 40
              }}
            >
              <img
                src="https://legal251.com/images/itr/Group_3320.svg"
                className="salariedcchocieporimg"
              />
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 28,
                  textTransform: "uppercase",
                  color: "#F7F7F7",
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  padding: "12px 5px"
                }}
              >
                <img
                  src="https://legal251.com/images/itr/premium star.svg"
                  style={{ width: 23, marginTop: "-5px" }}
                />{" "}
                premium{" "}
                <img
                  src="https://legal251.com/images/itr/premium star.svg"
                  style={{ width: 23, marginTop: "-5px" }}
                />
              </p>
              <div style={{ padding: "0 5px 5px 5px" }}>
                <div
                  className="formplacer"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    padding: 13
                  }}
                >
                  <div style={{ padding: "0 12px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        letterSpacing: "-0.4px",
                        color: "#01355D"
                      }}
                    >
                      Select the Tenure:
                    </p>
                    <div className="dropdown">
                      <img
                        src="https://legal251.com/images/itr/Icon ionic-ios-arrow-down.svg"
                        className="salarieddropdownimg servicedropdownimg4"
                      />
                      <button
                        id="dLabel"
                        className="dropdown-select fourdropdown"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          padding: 0,
                          border: "2px solid #f8951d",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <div
                          style={{ padding: "6px 0 6px 6px", height: "auto" }}
                        >
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span style={{ fontSize: 15, color: "#01355D" }}>
                              1 Year &nbsp;&nbsp;@
                            </span>
                            <span style={{ fontSize: 18, color: "#F8951D" }}>
                              ₹9,751.00
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                color: "rgba(1,53,93,0.4)"
                              }}
                            >
                              Yearly
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              style={{
                                fontSize: 14,
                                textDecoration: "line-through",
                                textDecorationColor: "#FF4747",
                                color: "#F8951D"
                              }}
                            >
                              ₹26,003.00
                            </span>
                            <br />
                            <div style={{ paddingLeft: 79 }}>
                              <span style={{ fontSize: 14, color: "#FF4747" }}>
                                {" "}
                                Save 50%+25%
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu fourdropdown-menu"
                        aria-labelledby="dLabel"
                        style={{
                          borderLeft: "2px solid #f8951d",
                          borderRight: "2px solid #f8951d",
                          borderBottom: "2px solid #f8951d",
                          marginTop: 0,
                          paddingTop: 5,
                          width: "100%",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <li
                          value="M"
                          className=""
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            className=""
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              className=""
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                className=""
                                style={{ fontSize: 15, color: "#01355D" }}
                              >
                                1 Month &nbsp;&nbsp;@
                              </span>
                              <span
                                className=""
                                style={{ fontSize: 18, color: "#F8951D" }}
                              >
                                ₹1,251.00
                              </span>
                            </div>
                            <div
                              className=""
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                className=""
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Monthly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                className=""
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹2,502.00
                              </span>
                              <br />
                              <div className="" style={{ paddingLeft: 94 }}>
                                <span
                                  className=""
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Q"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                3 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹3,051.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Quarterly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹6,102.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 94 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="H"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                6 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹5,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Half-yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹12,355.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 96 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+15%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Y"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                1 Year &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹9,751.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹26,003.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 79 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li value="Y2">
                          <div
                            className=""
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              className=""
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                className=""
                                style={{ fontSize: 15, color: "#01355D" }}
                              >
                                2 Year &nbsp;&nbsp;@
                              </span>
                              <span
                                className=""
                                style={{ fontSize: 18, color: "#F8951D" }}
                              >
                                ₹19,502.00
                              </span>
                            </div>
                            <div
                              className=""
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                className=""
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                className=""
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹52,005.00
                              </span>
                              <br />
                              <div className="" style={{ paddingLeft: 79 }}>
                                <span
                                  className=""
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidesalcon4">
                    <center>
                      <button
                        id="1PR"
                        className="getform4"
                        style={{
                          backgroundImage:
                            'url("images/itr/Mask_Group_202.svg")',
                          width: 183,
                          height: 30,
                          borderRadius: 5,
                          border: "none",
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: "1.4",
                          boxShadow: "3px 3px 6px #00000016",
                          color: "#F3F3F3",
                          margin: "15px 0"
                        }}
                      >
                        GET STARTED
                      </button>
                    </center>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Requirements:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      Sales &amp; Purchase Invoices
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Inclusions:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      GSTR-2A Reconciliation mismatch report
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Included data preparation
                      <br />
                      <span style={{ fontSize: 13 }}>
                        (on basis of Invoices)
                      </span>
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      E-way bill facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Dashboard for managing service
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Mobile application support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Documents sharing facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Download deliverables any time
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Password sharing
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Round the clock support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Time to time updates &amp; notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Salarieddiv planhide" id={2} style={{ display: "none" }}>
        <br />
        <div className="row" style={{ margin: 0, padding: 0 }}>
          <div className="col-md-3 col-sm-6 Salariedcol">
            <div
              style={{
                backgroundImage: 'url("images/itr/Salaried - starter.svg")',
                background: 'url("images/itr/Salaried - starter.svg") #01355D',
                borderRadius: 10,
                boxShadow: "6px 6px 6px #00000017",
                marginBottom: 40
              }}
            >
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 28,
                  textTransform: "uppercase",
                  color: "#F7F7F7",
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  padding: "12px 5px"
                }}
              >
                Starter
              </p>
              <div style={{ padding: "0 5px 5px 5px" }}>
                <div
                  className="formplacer"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    padding: 13
                  }}
                >
                  <div style={{ padding: "0 12px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        letterSpacing: "-0.4px",
                        color: "#01355D"
                      }}
                    >
                      Select the Tenure:
                    </p>
                    <div className="dropdown">
                      <img
                        src="https://legal251.com/images/itr/Icon ionic-ios-arrow-down.svg"
                        className="salarieddropdownimg servicedropdownimg5"
                      />
                      <button
                        id="dLabel"
                        className="dropdown-select fivedropdown"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          padding: 0,
                          border: "2px solid #f8951d",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <div
                          style={{ padding: "6px 0 6px 6px", height: "auto" }}
                        >
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span style={{ fontSize: 15, color: "#01355D" }}>
                              1 Year &nbsp;&nbsp;@
                            </span>
                            <span style={{ fontSize: 18, color: "#F8951D" }}>
                              ₹9,251.00
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                color: "rgba(1,53,93,0.4)"
                              }}
                            >
                              Yearly
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              style={{
                                fontSize: 14,
                                textDecoration: "line-through",
                                textDecorationColor: "#FF4747",
                                color: "#F8951D"
                              }}
                            >
                              ₹24,670.00
                            </span>
                            <br />
                            <div style={{ paddingLeft: 79 }}>
                              <span style={{ fontSize: 14, color: "#FF4747" }}>
                                {" "}
                                Save 50%+25%
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu fivedropdown-menu"
                        aria-labelledby="dLabel"
                        style={{
                          borderLeft: "2px solid #f8951d",
                          borderRight: "2px solid #f8951d",
                          borderBottom: "2px solid #f8951d",
                          marginTop: 0,
                          paddingTop: 5,
                          width: "100%",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <li
                          value="M"
                          className="linebtplandrop"
                          onclick="{this.fivedropdownlichange}"
                        >
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                1 Months &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹1,151.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Monthly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹2,302.00
                              </span>
                              <br />
                              <div className="plan3monthssavediv">
                                <span className="plansavespan"> Save 50%</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Q"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                3 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹2,951.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Quarterly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹5,902.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 94 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="H"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                6 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹5,051.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Half-yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹11,885.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 96 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+15%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Y"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                1 Year &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹9,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹24,669.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 79 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li value="Y2">
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                2 Year &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹18,502.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Yearly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹49,339.00
                              </span>
                              <br />
                              <div className="plan1yearsavediv">
                                <span className="plansavespan">
                                  {" "}
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidesalcon5">
                    <center>
                      <button
                        className="getform5"
                        id="2S"
                        style={{
                          backgroundImage:
                            'url("images/itr/Mask_Group_202.svg")',
                          width: 183,
                          height: 30,
                          borderRadius: 5,
                          border: "none",
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: "1.4",
                          boxShadow: "3px 3px 6px #00000016",
                          color: "#F3F3F3",
                          margin: "15px 0"
                        }}
                      >
                        GET STARTED
                      </button>
                    </center>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Requirements:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 3B Excel file
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 1 File
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: 1,
                        color: "#2D2D2D",
                        paddingLeft: 40,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      or
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      Normal Excel file of Sales &amp; Purchase
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Inclusions:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Dashboard for managing service
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Mobile application support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Documents sharing facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Download deliverables any time
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Password sharing
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Round the clock support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Time to time updates &amp; notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 Salariedcol">
            <div
              style={{
                backgroundImage: 'url("images/itr/Salaried - basic.svg")',
                background: 'url("images/itr/Salaried - basic.svg") #f8951d',
                borderRadius: 10,
                boxShadow: "6px 6px 6px #00000017",
                marginBottom: 40
              }}
            >
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 28,
                  textTransform: "uppercase",
                  color: "#F7F7F7",
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  padding: "12px 5px"
                }}
              >
                basic
              </p>
              <div style={{ padding: "0 5px 5px 5px" }}>
                <div
                  className="formplacer"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    padding: 13
                  }}
                >
                  <div style={{ padding: "0 12px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        letterSpacing: "-0.4px",
                        color: "#01355D"
                      }}
                    >
                      Select the Tenure:
                    </p>
                    <div className="dropdown">
                      <img
                        src="https://legal251.com/images/itr/Icon ionic-ios-arrow-down.svg"
                        className="salarieddropdownimg servicedropdownimg6"
                      />
                      <button
                        id="dLabel"
                        className="dropdown-select sixdropdown"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          padding: 0,
                          border: "2px solid #f8951d",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <div
                          style={{ padding: "6px 0 6px 6px", height: "auto" }}
                        >
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span style={{ fontSize: 15, color: "#01355D" }}>
                              1 Year &nbsp;&nbsp;@
                            </span>
                            <span style={{ fontSize: 18, color: "#F8951D" }}>
                              ₹10,251.00
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                color: "rgba(1,53,93,0.4)"
                              }}
                            >
                              Yearly
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              style={{
                                fontSize: 14,
                                textDecoration: "line-through",
                                textDecorationColor: "#FF4747",
                                color: "#F8951D"
                              }}
                            >
                              ₹27,336.00
                            </span>
                            <br />
                            <div style={{ paddingLeft: 79 }}>
                              <span style={{ fontSize: 14, color: "#FF4747" }}>
                                {" "}
                                Save 50%+25%
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu sixdropdown-menu"
                        aria-labelledby="dLabel"
                        style={{
                          borderLeft: "2px solid #f8951d",
                          borderRight: "2px solid #f8951d",
                          borderBottom: "2px solid #f8951d",
                          marginTop: 0,
                          paddingTop: 5,
                          width: "100%",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <li
                          value="M"
                          className="linebtplandrop"
                          onclick="{this.sixdropdownlichange}"
                        >
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                1 Month &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹1,251.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Monthly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹2,502.00
                              </span>
                              <br />
                              <div className="plan3monthssavediv">
                                <span className="plansavespan"> Save 50%</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Q"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                3 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹3,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Quarterly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹6,502.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 94 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="H"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                6 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹5,551.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Half-yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹13,061.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 96 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+15%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Y"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                1 Year &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹10,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹27,336.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 79 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li value="Y2">
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                2 Year &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹20,502.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Yearly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹54,672.00
                              </span>
                              <br />
                              <div className="plan1yearsavediv">
                                <span className="plansavespan">
                                  {" "}
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidesalcon6">
                    <center>
                      <button
                        className="getform6"
                        id="2B"
                        style={{
                          backgroundImage:
                            'url("images/itr/Mask_Group_202.svg")',
                          width: 183,
                          height: 30,
                          borderRadius: 5,
                          border: "none",
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: "1.4",
                          boxShadow: "3px 3px 6px #00000016",
                          color: "#F3F3F3",
                          margin: "15px 0"
                        }}
                      >
                        GET STARTED
                      </button>
                    </center>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Requirements:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 3B Excel file
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 1 File
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: 1,
                        color: "#2D2D2D",
                        paddingLeft: 40,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      or
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      Normal Excel file of Sales &amp; Purchase
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Inclusions:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      E-way bill facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Dashboard for managing service
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Mobile application support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Documents sharing facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Download deliverables any time
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Password sharing
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Round the clock support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Time to time updates &amp; notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 Salariedcol">
            <div
              style={{
                backgroundImage: 'url("images/itr/Salaried - pro.svg")',
                background: 'url("images/itr/Salaried - pro.svg") #01355D',
                borderRadius: 10,
                boxShadow: "6px 6px 6px #00000017",
                marginBottom: 40
              }}
            >
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 28,
                  textTransform: "uppercase",
                  color: "#F7F7F7",
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  padding: "12px 5px"
                }}
              >
                pro
              </p>
              <div style={{ padding: "0 5px 5px 5px" }}>
                <div
                  className="formplacer"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    padding: 13
                  }}
                >
                  <div style={{ padding: "0 12px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        letterSpacing: "-0.4px",
                        color: "#01355D"
                      }}
                    >
                      Select the Tenure:
                    </p>
                    <div className="dropdown">
                      <img
                        src="https://legal251.com/images/itr/Icon ionic-ios-arrow-down.svg"
                        className="salarieddropdownimg servicedropdownimg7"
                      />
                      <button
                        id="dLabel"
                        className="dropdown-select sevendropdown"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          padding: 0,
                          border: "2px solid #f8951d",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <div
                          style={{ padding: "6px 0 6px 6px", height: "auto" }}
                        >
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span style={{ fontSize: 15, color: "#01355D" }}>
                              1 Year &nbsp;&nbsp;@
                            </span>
                            <span style={{ fontSize: 18, color: "#F8951D" }}>
                              ₹11,251.00
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                color: "rgba(1,53,93,0.4)"
                              }}
                            >
                              Yearly
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              style={{
                                fontSize: 14,
                                textDecoration: "line-through",
                                textDecorationColor: "#FF4747",
                                color: "#F8951D"
                              }}
                            >
                              ₹30,003.00
                            </span>
                            <br />
                            <div style={{ paddingLeft: 79 }}>
                              <span style={{ fontSize: 14, color: "#FF4747" }}>
                                {" "}
                                Save 50%+25%
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu sevendropdown-menu"
                        aria-labelledby="dLabel"
                        style={{
                          borderLeft: "2px solid #f8951d",
                          borderRight: "2px solid #f8951d",
                          borderBottom: "2px solid #f8951d",
                          marginTop: 0,
                          paddingTop: 5,
                          width: "100%",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <li
                          value="M"
                          className="linebtplandrop"
                          onclick="{this.sevendropdownlichange}"
                        >
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                1 Month &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹1,351.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Monthly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹2,702.00
                              </span>
                              <br />
                              <div className="plan3monthssavediv">
                                <span className="plansavespan"> Save 50%</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Q"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                3 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹3,551.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Quarterly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹7,102.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 94 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="H"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                6 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹6,051.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Half-yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹14,238.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 96 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+15%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Y"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                1 Year &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹11,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹30,003.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 79 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li value="Y2">
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                2 Year &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹22,502.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Yearly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹60,005.00
                              </span>
                              <br />
                              <div className="plan1yearsavediv">
                                <span className="plansavespan">
                                  {" "}
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidesalcon7">
                    <center>
                      <button
                        className="getform7"
                        id="2P"
                        style={{
                          backgroundImage:
                            'url("images/itr/Mask_Group_202.svg")',
                          width: 183,
                          height: 30,
                          borderRadius: 5,
                          border: "none",
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: "1.4",
                          boxShadow: "3px 3px 6px #00000016",
                          color: "#F3F3F3",
                          margin: "15px 0"
                        }}
                      >
                        GET STARTED
                      </button>
                    </center>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Requirements:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      Sales &amp; Purchase Invoices
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Inclusions:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      GSTR-2A Reconciliation mismatch report
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Included data preparation
                      <br />
                      <span style={{ fontSize: 13 }}>
                        (on basis of Invoices)
                      </span>
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Dashboard for managing service
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Mobile application support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Documents sharing facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Download deliverables any time
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Password sharing
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Round the clock support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Time to time updates &amp; notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 Salariedcol">
            <div
              style={{
                backgroundImage: 'url("images/itr/Salaried - premium.svg")',
                background: 'url("images/itr/Salaried - premium.svg") #f8951d',
                borderRadius: 10,
                boxShadow: "6px 6px 6px #00000017",
                marginBottom: 40
              }}
            >
              <img
                src="https://legal251.com/images/itr/Group_3320.svg"
                className="salariedcchocieporimg"
              />
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 28,
                  textTransform: "uppercase",
                  color: "#F7F7F7",
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  padding: "12px 5px"
                }}
              >
                <img
                  src="https://legal251.com/images/itr/premium star.svg"
                  style={{ width: 23, marginTop: "-5px" }}
                />{" "}
                premium{" "}
                <img
                  src="https://legal251.com/images/itr/premium star.svg"
                  style={{ width: 23, marginTop: "-5px" }}
                />
              </p>
              <div style={{ padding: "0 5px 5px 5px" }}>
                <div
                  className="formplacer"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    padding: 13
                  }}
                >
                  <div style={{ padding: "0 12px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        letterSpacing: "-0.4px",
                        color: "#01355D"
                      }}
                    >
                      Select the Tenure:
                    </p>
                    <div className="dropdown">
                      <img
                        src="https://legal251.com/images/itr/Icon ionic-ios-arrow-down.svg"
                        className="salarieddropdownimg servicedropdownimg8"
                      />
                      <button
                        id="dLabel"
                        className="dropdown-select eightdropdown"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          padding: 0,
                          border: "2px solid #f8951d",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <div
                          style={{ padding: "6px 0 6px 6px", height: "auto" }}
                        >
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span style={{ fontSize: 15, color: "#01355D" }}>
                              1 Year &nbsp;&nbsp;@
                            </span>
                            <span style={{ fontSize: 18, color: "#F8951D" }}>
                              ₹12,251.00
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                color: "rgba(1,53,93,0.4)"
                              }}
                            >
                              Yearly
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              style={{
                                fontSize: 14,
                                textDecoration: "line-through",
                                textDecorationColor: "#FF4747",
                                color: "#F8951D"
                              }}
                            >
                              ₹32,669.00
                            </span>
                            <br />
                            <div style={{ paddingLeft: 79 }}>
                              <span style={{ fontSize: 14, color: "#FF4747" }}>
                                {" "}
                                Save 50%+25%
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu eightdropdown-menu"
                        aria-labelledby="dLabel"
                        style={{
                          borderLeft: "2px solid #f8951d",
                          borderRight: "2px solid #f8951d",
                          borderBottom: "2px solid #f8951d",
                          marginTop: 0,
                          paddingTop: 5,
                          width: "100%",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <li
                          value="M"
                          className="linebtplandrop"
                          onclick="{this.eightdropdownlichange}"
                        >
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                1 Month &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹1,551.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Monthly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹3,102.00
                              </span>
                              <br />
                              <div className="plan3monthssavediv">
                                <span className="plansavespan"> Save 50%</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Q"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                3 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹3,851.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Quarterly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹7,702.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 94 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="H"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                6 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹6,551.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Half-yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹15,414.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 96 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+15%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Y"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                1 Year &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹12,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹32,669.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 79 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li value="Y2">
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                2 Year &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹24,502.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Yearly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹65,339.00
                              </span>
                              <br />
                              <div className="plan1yearsavediv">
                                <span className="plansavespan">
                                  {" "}
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidesalcon8">
                    <center>
                      <button
                        className="getform8"
                        id="2PR"
                        style={{
                          backgroundImage:
                            'url("images/itr/Mask_Group_202.svg")',
                          width: 183,
                          height: 30,
                          borderRadius: 5,
                          border: "none",
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: "1.4",
                          boxShadow: "3px 3px 6px #00000016",
                          color: "#F3F3F3",
                          margin: "15px 0"
                        }}
                      >
                        GET STARTED
                      </button>
                    </center>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Requirements:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      Sales &amp; Purchase Invoices
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Inclusions:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      GSTR-2A Reconciliation mismatch report
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Included data preparation
                      <br />
                      <span style={{ fontSize: 13 }}>
                        (on basis of Invoices)
                      </span>
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      E-way bill facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Dashboard for managing service
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Mobile application support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Documents sharing facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Download deliverables any time
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Password sharing
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Round the clock support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Time to time updates &amp; notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="plantwocards planhide" id={3} style={{ display: "none" }}>
        <br />
        <div className="row" style={{ margin: 0, padding: 0 }}>
          <div className="col-sm-6 plans2cardcol">
            <div
              style={{
                backgroundImage: 'url("images/itr/Salaried - starter.svg")',
                background: 'url("images/itr/Salaried - starter.svg") #01355D',
                borderRadius: 10,
                boxShadow: "6px 6px 6px #00000017",
                marginBottom: 40
              }}
            >
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 28,
                  textTransform: "uppercase",
                  color: "#F7F7F7",
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  padding: "12px 5px"
                }}
              >
                Starter
              </p>
              <div style={{ padding: "0 5px 5px 5px" }}>
                <div
                  className="formplacer"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    padding: 13
                  }}
                >
                  <div style={{ padding: "0 12px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        letterSpacing: "-0.4px",
                        color: "#01355D"
                      }}
                    >
                      Select the Tenure:
                    </p>
                    <div className="dropdown">
                      <img
                        src="https://legal251.com/images/itr/Icon ionic-ios-arrow-down.svg"
                        className="salarieddropdownimg servicedropdownimg9"
                      />
                      <button
                        id="dLabel"
                        className="dropdown-select ninedropdown"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          padding: 0,
                          border: "2px solid #f8951d",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <div
                          style={{ padding: "6px 0 6px 6px", height: "auto" }}
                        >
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span style={{ fontSize: 15, color: "#01355D" }}>
                              1 Year &nbsp;&nbsp;@
                            </span>
                            <span style={{ fontSize: 18, color: "#F8951D" }}>
                              ₹11,251.00
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                color: "rgba(1,53,93,0.4)"
                              }}
                            >
                              Yearly
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              style={{
                                fontSize: 14,
                                textDecoration: "line-through",
                                textDecorationColor: "#FF4747",
                                color: "#F8951D"
                              }}
                            >
                              ₹30,003.00
                            </span>
                            <br />
                            <div style={{ paddingLeft: 79 }}>
                              <span style={{ fontSize: 14, color: "#FF4747" }}>
                                {" "}
                                Save 50%+25%
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu ninedropdown-menu"
                        aria-labelledby="dLabel"
                        style={{
                          borderLeft: "2px solid #f8951d",
                          borderRight: "2px solid #f8951d",
                          borderBottom: "2px solid #f8951d",
                          marginTop: 0,
                          paddingTop: 5,
                          width: "100%",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <li
                          value="M"
                          className="linebtplandrop"
                          onclick="{this.ninedropdownlichange}"
                        >
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                1 Months &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹1,351.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Monthly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹2,702.00
                              </span>
                              <br />
                              <div className="plan3monthssavediv">
                                <span className="plansavespan"> Save 50%</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Q"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                3 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹3,551.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Quarterly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹7,102.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 94 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="H"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                6 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹6,051.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Half-yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹14,238.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 96 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+15%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Y"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                1 Year &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹11,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹30,003.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 79 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li value="Y2">
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                2 Year &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹22,502.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Yearly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹60,005.00
                              </span>
                              <br />
                              <div className="plan1yearsavediv">
                                <span className="plansavespan">
                                  {" "}
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidesalcon9">
                    <center>
                      <button
                        className="getform9"
                        id="3S"
                        style={{
                          backgroundImage:
                            'url("images/itr/Mask_Group_202.svg")',
                          width: 183,
                          height: 30,
                          borderRadius: 5,
                          border: "none",
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: "1.4",
                          boxShadow: "3px 3px 6px #00000016",
                          color: "#F3F3F3",
                          margin: "15px 0"
                        }}
                      >
                        GET STARTED
                      </button>
                    </center>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Requirements:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 3B Excel file
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 1 File
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: 1,
                        color: "#2D2D2D",
                        paddingLeft: 40,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      or
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      Normal Excel file of Sales &amp; Purchase
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Inclusions:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Dashboard for managing service
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Mobile application support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Documents sharing facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Download deliverables any time
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Password sharing
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Round the clock support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Time to time updates &amp; notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 plans2cardcol">
            <img
              src="https://legal251.com/images/itr/Group_3320.svg"
              className="salariedcchocieporimg"
            />
            <div
              style={{
                backgroundImage: 'url("images/itr/Salaried - basic.svg")',
                background: 'url("images/itr/Salaried - basic.svg") #f8951d',
                borderRadius: 10,
                boxShadow: "6px 6px 6px #00000017",
                marginBottom: 40
              }}
            >
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 28,
                  textTransform: "uppercase",
                  color: "#F7F7F7",
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  padding: "12px 5px"
                }}
              >
                basic
              </p>
              <div style={{ padding: "0 5px 5px 5px" }}>
                <div
                  className="formplacer"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    padding: 13
                  }}
                >
                  <div style={{ padding: "0 12px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        letterSpacing: "-0.4px",
                        color: "#01355D"
                      }}
                    >
                      Select the Tenure:
                    </p>
                    <div className="dropdown">
                      <img
                        src="https://legal251.com/images/itr/Icon ionic-ios-arrow-down.svg"
                        className="salarieddropdownimg servicedropdownimg10"
                      />
                      <button
                        id="dLabel"
                        className="dropdown-select tendropdown"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          padding: 0,
                          border: "2px solid #f8951d",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <div
                          style={{ padding: "6px 0 6px 6px", height: "auto" }}
                        >
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span style={{ fontSize: 15, color: "#01355D" }}>
                              1 Year &nbsp;&nbsp;@
                            </span>
                            <span style={{ fontSize: 18, color: "#F8951D" }}>
                              ₹12,251.00
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                color: "rgba(1,53,93,0.4)"
                              }}
                            >
                              Yearly
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              style={{
                                fontSize: 14,
                                textDecoration: "line-through",
                                textDecorationColor: "#FF4747",
                                color: "#F8951D"
                              }}
                            >
                              ₹32,669.00
                            </span>
                            <br />
                            <div style={{ paddingLeft: 79 }}>
                              <span style={{ fontSize: 14, color: "#FF4747" }}>
                                {" "}
                                Save 50%+25%
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu tendropdown-menu"
                        aria-labelledby="dLabel"
                        style={{
                          borderLeft: "2px solid #f8951d",
                          borderRight: "2px solid #f8951d",
                          borderBottom: "2px solid #f8951d",
                          marginTop: 0,
                          paddingTop: 5,
                          width: "100%",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <li
                          value="M"
                          className="linebtplandrop"
                          onclick="{this.tendropdownlichange}"
                        >
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                1 Month &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹1,551.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Monthly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹3,102.00
                              </span>
                              <br />
                              <div className="plan3monthssavediv">
                                <span className="plansavespan"> Save 50%</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Q"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                3 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹3,951.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Quarterly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹7,902.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 94 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="H"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                6 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹6,651.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Half-yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹15,649.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 96 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+15%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Y"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                1 Year &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹12,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹32,669.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 79 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li value="Y2">
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                2 Year &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹24,502.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Yearly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹65,339.00
                              </span>
                              <br />
                              <div className="plan1yearsavediv">
                                <span className="plansavespan">
                                  {" "}
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidesalcon10">
                    <center>
                      <button
                        className="getform10"
                        id="3B"
                        style={{
                          backgroundImage:
                            'url("images/itr/Mask_Group_202.svg")',
                          width: 183,
                          height: 30,
                          borderRadius: 5,
                          border: "none",
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: "1.4",
                          boxShadow: "3px 3px 6px #00000016",
                          color: "#F3F3F3",
                          margin: "15px 0"
                        }}
                      >
                        GET STARTED
                      </button>
                    </center>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Requirements:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 3B Excel file
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 1 File
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: 1,
                        color: "#2D2D2D",
                        paddingLeft: 40,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      or
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      Normal Excel file of Sales &amp; Purchase
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Inclusions:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      E-way bill facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Dashboard for managing service
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Mobile application support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Documents sharing facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Download deliverables any time
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Password sharing
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Round the clock support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Time to time updates &amp; notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="plantwocards planhide" id={4} style={{ display: "none" }}>
        <br />
        <div className="row" style={{ margin: 0, padding: 0 }}>
          <div className="col-sm-6 plans2cardcol">
            <div
              style={{
                backgroundImage: 'url("images/itr/Salaried - starter.svg")',
                background: 'url("images/itr/Salaried - starter.svg") #01355D',
                borderRadius: 10,
                boxShadow: "6px 6px 6px #00000017",
                marginBottom: 40
              }}
            >
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 28,
                  textTransform: "uppercase",
                  color: "#F7F7F7",
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  padding: "12px 5px"
                }}
              >
                Starter
              </p>
              <div style={{ padding: "0 5px 5px 5px" }}>
                <div
                  className="formplacer"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    padding: 13
                  }}
                >
                  <div style={{ padding: "0 12px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        letterSpacing: "-0.4px",
                        color: "#01355D"
                      }}
                    >
                      Select the Tenure:
                    </p>
                    <div className="dropdown">
                      <img
                        src="https://legal251.com/images/itr/Icon ionic-ios-arrow-down.svg"
                        className="salarieddropdownimg servicedropdownimg11"
                      />
                      <button
                        id="dLabel"
                        className="dropdown-select elevendropdown"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          padding: 0,
                          border: "2px solid #f8951d",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <div
                          style={{ padding: "6px 0 6px 6px", height: "auto" }}
                        >
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span style={{ fontSize: 15, color: "#01355D" }}>
                              1 Year &nbsp;&nbsp;@
                            </span>
                            <span style={{ fontSize: 18, color: "#F8951D" }}>
                              ₹16,251.00
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                color: "rgba(1,53,93,0.4)"
                              }}
                            >
                              Yearly
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              style={{
                                fontSize: 14,
                                textDecoration: "line-through",
                                textDecorationColor: "#FF4747",
                                color: "#F8951D"
                              }}
                            >
                              ₹43,336.00
                            </span>
                            <br />
                            <div style={{ paddingLeft: 79 }}>
                              <span style={{ fontSize: 14, color: "#FF4747" }}>
                                {" "}
                                Save 50%+25%
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu elevendropdown-menu"
                        aria-labelledby="dLabel"
                        style={{
                          borderLeft: "2px solid #f8951d",
                          borderRight: "2px solid #f8951d",
                          borderBottom: "2px solid #f8951d",
                          marginTop: 0,
                          paddingTop: 5,
                          width: "100%",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <li
                          value="M"
                          className="linebtplandrop"
                          onclick="{this.elevenropdownlichange}"
                        >
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                1 Month &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹2,051.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Monthly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹4,102.00
                              </span>
                              <br />
                              <div className="plan3monthssavediv">
                                <span className="plansavespan"> Save 50%</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Q"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                3 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹5,351.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Quarterly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹10,702.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 94 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="H"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                6 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹9,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Half-yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹21,767.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 96 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+15%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Y"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                1 Year &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹16,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹43,336.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 79 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li value="Y2">
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                2 Year &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹32,502.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Yearly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹86,672 .00
                              </span>
                              <br />
                              <div className="plan1yearsavediv">
                                <span className="plansavespan">
                                  {" "}
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidesalcon11">
                    <center>
                      <button
                        className="getform11"
                        id="4S"
                        style={{
                          backgroundImage:
                            'url("images/itr/Mask_Group_202.svg")',
                          width: 183,
                          height: 30,
                          borderRadius: 5,
                          border: "none",
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: "1.4",
                          boxShadow: "3px 3px 6px #00000016",
                          color: "#F3F3F3",
                          margin: "15px 0"
                        }}
                      >
                        GET STARTED
                      </button>
                    </center>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Requirements:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 3B Excel file
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 1 File
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: 1,
                        color: "#2D2D2D",
                        paddingLeft: 40,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      or
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      Normal Excel file of Sales &amp; Purchase
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Inclusions:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Dashboard for managing service
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Mobile application support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Documents sharing facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Download deliverables any time
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Password sharing
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Round the clock support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Time to time updates &amp; notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 plans2cardcol">
            <img
              src="https://legal251.com/images/itr/Group_3320.svg"
              className="salariedcchocieporimg"
            />
            <div
              style={{
                backgroundImage: 'url("images/itr/Salaried - basic.svg")',
                background: 'url("images/itr/Salaried - basic.svg") #f8951d',
                borderRadius: 10,
                boxShadow: "6px 6px 6px #00000017",
                marginBottom: 40
              }}
            >
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 28,
                  textTransform: "uppercase",
                  color: "#F7F7F7",
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  padding: "12px 5px"
                }}
              >
                basic
              </p>
              <div style={{ padding: "0 5px 5px 5px" }}>
                <div
                  className="formplacer"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    padding: 13
                  }}
                >
                  <div style={{ padding: "0 12px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        letterSpacing: "-0.4px",
                        color: "#01355D"
                      }}
                    >
                      Select the Tenure:
                    </p>
                    <div className="dropdown">
                      <img
                        src="https://legal251.com/images/itr/Icon ionic-ios-arrow-down.svg"
                        className="salarieddropdownimg servicedropdownimg12"
                      />
                      <button
                        id="dLabel"
                        className="dropdown-select twelvedropdown"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          padding: 0,
                          border: "2px solid #f8951d",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <div
                          style={{ padding: "6px 0 6px 6px", height: "auto" }}
                        >
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span style={{ fontSize: 15, color: "#01355D" }}>
                              1 Year &nbsp;&nbsp;@
                            </span>
                            <span style={{ fontSize: 18, color: "#F8951D" }}>
                              ₹18,251.00
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                color: "rgba(1,53,93,0.4)"
                              }}
                            >
                              Yearly
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              style={{
                                fontSize: 14,
                                textDecoration: "line-through",
                                textDecorationColor: "#FF4747",
                                color: "#F8951D"
                              }}
                            >
                              ₹48,669.00
                            </span>
                            <br />
                            <div style={{ paddingLeft: 79 }}>
                              <span style={{ fontSize: 14, color: "#FF4747" }}>
                                {" "}
                                Save 50%+25%
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu twelvedropdown-menu"
                        aria-labelledby="dLabel"
                        style={{
                          borderLeft: "2px solid #f8951d",
                          borderRight: "2px solid #f8951d",
                          borderBottom: "2px solid #f8951d",
                          marginTop: 0,
                          paddingTop: 5,
                          width: "100%",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <li
                          value="M"
                          className="linebtplandrop"
                          onclick="{this.twelveddropdownlichange}"
                        >
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                1 Month &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹2,251.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Monthly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹4,502.00
                              </span>
                              <br />
                              <div className="plan3monthssavediv">
                                <span className="plansavespan"> Save 50%</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Q"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                3 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹5,851.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Quarterly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                11,702.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 94 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="H"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                6 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹10,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Half-yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹24,120.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 96 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+15%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Y"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                1 Year &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹18,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹48,669.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 79 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li value="Y2">
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                2 Year &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹36,502.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Yearly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹97,339.00
                              </span>
                              <br />
                              <div className="plan1yearsavediv">
                                <span className="plansavespan">
                                  {" "}
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidesalcon12">
                    <center>
                      <button
                        className="getform12"
                        id="4B"
                        style={{
                          backgroundImage:
                            'url("images/itr/Mask_Group_202.svg")',
                          width: 183,
                          height: 30,
                          borderRadius: 5,
                          border: "none",
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: "1.4",
                          boxShadow: "3px 3px 6px #00000016",
                          color: "#F3F3F3",
                          margin: "15px 0"
                        }}
                      >
                        GET STARTED
                      </button>
                    </center>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Requirements:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 3B Excel file
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 1 File
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: 1,
                        color: "#2D2D2D",
                        paddingLeft: 40,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      or
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      Normal Excel file of Sales &amp; Purchase
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Inclusions:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      E-way bill facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Dashboard for managing service
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Mobile application support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Documents sharing facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Download deliverables any time
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Password sharing
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Round the clock support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Time to time updates &amp; notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="plantwocards planhide" id={5} style={{ display: "none" }}>
        <br />
        <div className="row" style={{ margin: 0, padding: 0 }}>
          <div className="col-sm-6 plans2cardcol">
            <div
              style={{
                backgroundImage: 'url("images/itr/Salaried - starter.svg")',
                background: 'url("images/itr/Salaried - starter.svg") #01355D',
                borderRadius: 10,
                boxShadow: "6px 6px 6px #00000017",
                marginBottom: 40
              }}
            >
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 28,
                  textTransform: "uppercase",
                  color: "#F7F7F7",
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  padding: "12px 5px"
                }}
              >
                Starter
              </p>
              <div style={{ padding: "0 5px 5px 5px" }}>
                <div
                  className="formplacer"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    padding: 13
                  }}
                >
                  <div style={{ padding: "0 12px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        letterSpacing: "-0.4px",
                        color: "#01355D"
                      }}
                    >
                      Select the Tenure:
                    </p>
                    <div className="dropdown">
                      <img
                        src="https://legal251.com/images/itr/Icon ionic-ios-arrow-down.svg"
                        className="salarieddropdownimg servicedropdownimg13"
                      />
                      <button
                        id="dLabel"
                        className="dropdown-select thirteendropdown"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          padding: 0,
                          border: "2px solid #f8951d",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <div
                          style={{ padding: "6px 0 6px 6px", height: "auto" }}
                        >
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span style={{ fontSize: 15, color: "#01355D" }}>
                              1 Year &nbsp;&nbsp;@
                            </span>
                            <span style={{ fontSize: 18, color: "#F8951D" }}>
                              ₹20,251.00
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                color: "rgba(1,53,93,0.4)"
                              }}
                            >
                              Yearly
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              style={{
                                fontSize: 14,
                                textDecoration: "line-through",
                                textDecorationColor: "#FF4747",
                                color: "#F8951D"
                              }}
                            >
                              ₹54,003.00
                            </span>
                            <br />
                            <div style={{ paddingLeft: 79 }}>
                              <span style={{ fontSize: 14, color: "#FF4747" }}>
                                {" "}
                                Save 50%+25%
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu thirteendropdown-menu"
                        aria-labelledby="dLabel"
                        style={{
                          borderLeft: "2px solid #f8951d",
                          borderRight: "2px solid #f8951d",
                          borderBottom: "2px solid #f8951d",
                          marginTop: 0,
                          paddingTop: 5,
                          width: "100%",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <li
                          value="M"
                          className="linebtplandrop"
                          onclick="{this.thirteendropdownlichange}"
                        >
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                1 Month &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹2,351.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Monthly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹4,702.00
                              </span>
                              <br />
                              <div className="plan3monthssavediv">
                                <span className="plansavespan"> Save 50%</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Q"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                3 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹6,551.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Quarterly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹13,002.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 94 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="H"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                6 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹11,251,.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Half-yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹26,473.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 96 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+15%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Y"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                1 Year &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹20,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹54,003.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 79 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li value="Y2">
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                2 Year &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹40,502.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Yearly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹1,08,005.00
                              </span>
                              <br />
                              <div className="plan1yearsavediv">
                                <span className="plansavespan">
                                  {" "}
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidesalcon13">
                    <center>
                      <button
                        className="getform13"
                        id="5S"
                        style={{
                          backgroundImage:
                            'url("images/itr/Mask_Group_202.svg")',
                          width: 183,
                          height: 30,
                          borderRadius: 5,
                          border: "none",
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: "1.4",
                          boxShadow: "3px 3px 6px #00000016",
                          color: "#F3F3F3",
                          margin: "15px 0"
                        }}
                      >
                        GET STARTED
                      </button>
                    </center>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Requirements:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 3B Excel file
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 1 File
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: 1,
                        color: "#2D2D2D",
                        paddingLeft: 40,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      or
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      Normal Excel file of Sales &amp; Purchase
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Inclusions:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Dashboard for managing service
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Mobile application support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Documents sharing facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Download deliverables any time
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Password sharing
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Round the clock support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Time to time updates &amp; notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 plans2cardcol">
            <img
              src="https://legal251.com/images/itr/Group_3320.svg"
              className="salariedcchocieporimg"
            />
            <div
              style={{
                backgroundImage: 'url("images/itr/Salaried - basic.svg")',
                background: 'url("images/itr/Salaried - basic.svg") #f8951d',
                borderRadius: 10,
                boxShadow: "6px 6px 6px #00000017",
                marginBottom: 40
              }}
            >
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 28,
                  textTransform: "uppercase",
                  color: "#F7F7F7",
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  padding: "12px 5px"
                }}
              >
                basic
              </p>
              <div style={{ padding: "0 5px 5px 5px" }}>
                <div
                  className="formplacer"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    padding: 13
                  }}
                >
                  <div style={{ padding: "0 12px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        letterSpacing: "-0.4px",
                        color: "#01355D"
                      }}
                    >
                      Select the Tenure:
                    </p>
                    <div className="dropdown">
                      <img
                        src="https://legal251.com/images/itr/Icon ionic-ios-arrow-down.svg"
                        className="salarieddropdownimg servicedropdownimg14"
                      />
                      <button
                        id="dLabel"
                        className="dropdown-select fourteendropdown"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          padding: 0,
                          border: "2px solid #f8951d",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <div
                          style={{ padding: "6px 0 6px 6px", height: "auto" }}
                        >
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span style={{ fontSize: 15, color: "#01355D" }}>
                              1 Year &nbsp;&nbsp;@
                            </span>
                            <span style={{ fontSize: 18, color: "#F8951D" }}>
                              ₹22,251.00
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: 500,
                              lineHeight: "1.2",
                              fontFamily: '"Roboto"'
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                color: "rgba(1,53,93,0.4)"
                              }}
                            >
                              Yearly
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              style={{
                                fontSize: 14,
                                textDecoration: "line-through",
                                textDecorationColor: "#FF4747",
                                color: "#F8951D"
                              }}
                            >
                              ₹59,336.00
                            </span>
                            <br />
                            <div style={{ paddingLeft: 79 }}>
                              <span style={{ fontSize: 14, color: "#FF4747" }}>
                                {" "}
                                Save 50%+25%
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu fourteendropdown-menu"
                        aria-labelledby="dLabel"
                        style={{
                          borderLeft: "2px solid #f8951d",
                          borderRight: "2px solid #f8951d",
                          borderBottom: "2px solid #f8951d",
                          marginTop: 0,
                          paddingTop: 5,
                          width: "100%",
                          boxShadow: "3px 3px 6px #0000001A !important",
                          borderRadius: 6
                        }}
                      >
                        <li
                          value="M"
                          className="linebtplandrop"
                          onclick="{this.fourteendropdownlichange}"
                        >
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                1 Month &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹2,551.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Monthly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹5,102.00
                              </span>
                              <br />
                              <div className="plan3monthssavediv">
                                <span className="plansavespan"> Save 50%</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Q"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                3 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹7,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Quarterly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹14,502.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 94 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="H"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                6 Months &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹12,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Half-yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹28,826.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 96 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+15%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          value="Y"
                          style={{ borderBottom: "2px solid #f8951d" }}
                        >
                          <div
                            style={{ padding: "6px 0 6px 6px", height: "auto" }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span style={{ fontSize: 15, color: "#01355D" }}>
                                1 Year &nbsp;&nbsp;@
                              </span>
                              <span style={{ fontSize: 18, color: "#F8951D" }}>
                                ₹22,251.00
                              </span>
                            </div>
                            <div
                              style={{
                                fontWeight: 500,
                                lineHeight: "1.2",
                                fontFamily: '"Roboto"'
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  color: "rgba(1,53,93,0.4)"
                                }}
                              >
                                Yearly
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span
                                style={{
                                  fontSize: 14,
                                  textDecoration: "line-through",
                                  textDecorationColor: "#FF4747",
                                  color: "#F8951D"
                                }}
                              >
                                ₹59,336.00
                              </span>
                              <br />
                              <div style={{ paddingLeft: 79 }}>
                                <span
                                  style={{ fontSize: 14, color: "#FF4747" }}
                                >
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li value="Y2">
                          <div className="plandropdowninsidediv">
                            <div className="plandropdowninsideeachdiv">
                              <span className="plantimespan">
                                2 Year &nbsp;&nbsp;@
                              </span>
                              <span className="planmainpricespan">
                                ₹44,502.00
                              </span>
                            </div>
                            <div className="plandropdowninsideeachdiv">
                              <span className="planmonthtype">Yearly</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span className="planlinecutpricespan">
                                ₹1,18,672.00
                              </span>
                              <br />
                              <div className="plan1yearsavediv">
                                <span className="plansavespan">
                                  {" "}
                                  Save 50%+25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidesalcon14">
                    <center>
                      <button
                        className="getform14"
                        id="5B"
                        style={{
                          backgroundImage:
                            'url("images/itr/Mask_Group_202.svg")',
                          width: 183,
                          height: 30,
                          borderRadius: 5,
                          border: "none",
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: "1.4",
                          boxShadow: "3px 3px 6px #00000016",
                          color: "#F3F3F3",
                          margin: "15px 0"
                        }}
                      >
                        GET STARTED
                      </button>
                    </center>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Requirements:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 3B Excel file
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      GSTR - 1 File
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: 1,
                        color: "#2D2D2D",
                        paddingLeft: 40,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      or
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Ellipse 2753.svg"
                        style={{
                          marginTop: 6,
                          position: "absolute",
                          width: 7,
                          marginLeft: "-12px"
                        }}
                      />
                      Normal Excel file of Sales &amp; Purchase
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#f8951d",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Icon open-star.svg"
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Inclusions:-
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      E-way bill facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Dashboard for managing service
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Mobile application support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Documents sharing facility
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Download deliverables any time
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Password sharing
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Round the clock support
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/itr/Mask Group 201.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          width: 12,
                          marginLeft: "-14px"
                        }}
                      />
                      Time to time updates &amp; notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="hidden" id="plantype" defaultValue="" />
      <input type="hidden" id="planduration" defaultValue="" />
      <input type="hidden" id="extra" defaultValue="" />
      <div className="planonecard planhide" id={6} style={{ display: "none" }}>
        <br />
        <div
          style={{
            backgroundImage: 'url("images/itr/Salaried - starter.svg")',
            background: 'url("images/itr/Salaried - starter.svg") #01355D',
            borderRadius: 10,
            boxShadow: "6px 6px 6px #00000017",
            marginBottom: 40
          }}
        >
          <p
            style={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: 28,
              textTransform: "uppercase",
              color: "#F7F7F7",
              textAlign: "center",
              fontWeight: 700,
              lineHeight: "1.3",
              padding: "12px 5px"
            }}
          >
            ENTERPRISE SOLUTION
          </p>
          <div style={{ padding: "0 5px 5px 5px" }}>
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 12,
                padding: 13
              }}
            >
              <center>
                <input
                  className="enterpriseinput text-center"
                  type="text"
                  maxLength={150}
                  pattern="[A-Za-z ]{3,150}"
                  id="e-name"
                  placeholder="Contact Person Name"
                  required=""
                />
                <input
                  className="enterpriseinput text-center"
                  type="text"
                  maxLength={50}
                  pattern="[A-Za-z ]{2,50}"
                  id="e-designation"
                  placeholder="Contact Person Designation"
                  required=""
                />
                <input
                  className="enterpriseinput text-center"
                  type="email"
                  maxLength={50}
                  id="e-email"
                  placeholder="Email"
                  required=""
                />
                <input
                  className="enterpriseinput text-center"
                  type="tel"
                  pattern="[6-9]{1}[0-9]{9}"
                  maxLength={10}
                  id="e-contact"
                  placeholder="Contact no."
                  required=""
                />
                <input
                  className="enterpriseinput text-center"
                  type="number"
                  maxLength={15}
                  id="e-turnover"
                  placeholder="Tentative Yearly Turnover"
                  required=""
                />
                <button
                  id="e-submit"
                  style={{
                    backgroundImage: 'url("images/itr/Mask_Group_202.svg")',
                    width: 183,
                    height: 30,
                    borderRadius: 5,
                    border: "none",
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: 14,
                    fontWeight: 700,
                    lineHeight: "1.4",
                    boxShadow: "3px 3px 6px #00000016",
                    color: "#F3F3F3",
                    margin: "15px 0"
                  }}
                  onclick="enterprise()"
                >
                  SUBMIT
                </button>
                <p
                  style={{ display: "none" }}
                  id="errorside1"
                  className="errorside"
                >
                  <img
                    src="https://legal251.com/images/Group_401.svg"
                    className="errorsideimg"
                  />
                </p>
                <p
                  style={{ display: "none", color: "green" }}
                  id="successside"
                  className="errorside"
                />
                <img
                  className="loader1"
                  id="e-loader"
                  style={{ display: "none" }}
                  src="https://legal251.com/images/homecontact/Rolling.svg"
                  alt=""
                />
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="Howtoapply" className="page-section">
      <br />
      <br />
      <br />
      <br />
      <p className="servicehrheading">
        &nbsp;{" "}
        <img
          src="https://legal251.com/images/services/question.svg"
          className="Howtoapplyimage"
        />{" "}
        How to apply&nbsp;
      </p>
      <hr className="Howtoapplyhr1" />
      <hr className="Howtoapplyhr2" />
      <hr className="Howtoapplyhr3" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <img
          src="https://legal251.com/images/gstregistration/GSTRF.png"
          className="gsthowtoapplyimg"
        />
      </center>
    </div>
    <div id="typesofform" className="page-section">
      <br />
      <br />
      <br />
      <br />
      <p className="servicehrheading">
        &nbsp;{" "}
        <img
          src="https://legal251.com/images/itr/Path 20106.svg"
          className="Howtoapplyimage"
        />{" "}
        Types of forms&nbsp;
      </p>
      <hr className="typeformhr1" />
      <hr className="typeformhr2" />
      <hr className="typeformhr3" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="typeformmaindiv">
        <div className="typeformnamemaindiv">
          <div className="row" style={{ margin: 0, padding: 0 }}>
            <div className="col-md-6 typeformleftcol1 typeform1 activetypeform firsttypeformname">
              GSTR-1
            </div>
            <div className="col-md-6 typeformrightcol1 typeform2">GSTR-2A</div>
            <div className="col-md-6 typeformleftcol1 typeform3">GSTR-2</div>
            <div className="col-md-6 typeformrightcol1 typeform4">GSTR-3B</div>
            <div className="col-md-6 typeformleftcol1 typeform5">GSTR-4</div>
            <div className="col-md-6 typeformrightcol1 typeform6">GSTR-5</div>
            <div className="col-md-6 typeformleftcol1 typeform7">GSTR-5A</div>
            <div className="col-md-6 typeformrightcol1 typeform8">GSTR-6A</div>
            <div className="col-md-6 typeformleftcol1 typeform9">GSTR-6</div>
            <div className="col-md-6 typeformrightcol1 typeform10">GSTR-7</div>
            <div className="col-md-6 typeformleftcol1 typeform11">GSTR-7A</div>
            <div className="col-md-6 typeformrightcol1 typeform12">GSTR-8</div>
            <div className="col-md-6 typeformleftcol1 typeform13">GSTR-9</div>
            <div className="col-md-6 typeformrightcol1 typeform14">GSTR-9A</div>
            <div className="col-md-6 typeformleftcol1 typeform15">GSTR-9C</div>
            <div className="col-md-6 typeformrightcol1 typeform16">GSTR-10</div>
            <div className="col-md-12 typeformleftcol2 typeform17">
              All other forms
            </div>
          </div>
        </div>
        <div className="typeofformmaincontentdiv">
          <div className="GSTR-1content">
            <p className="typeformcontentheading">GSTR-1</p>
            <p className="typeformcontenttext">
              The GSTR-1 is a monthly return form filed by businesses to report
              the details of the outward supplies of all services and goods.
              Every GST-registered entity should file GSTR-1 except Input
              service distributor and Composition taxpayer. It must be filed
              even if there is no business activity. The due date for filing
              GSTR-1 is 10th of every month.
              <br />
              <br /> GSTR 1 acts as the basis for all other form submissions for
              the month.
            </p>
          </div>
          <div className="GSTR-2Acontent" style={{ display: "none" }}>
            <p className="typeformcontentheading">GSTR-2A</p>
            <p className="typeformcontenttext">
              GSTR-2A is the return of details of all the inward supplies of
              goods/services, that is, purchases made by registered suppliers.
              This form is filed by the 15th of every month. GSTR-2A is
              auto-populated, where the data will be fetched from the GSTR-1
              filed by the supplier. It is a read-only return and cannot be
              edited.
            </p>
          </div>
          <div className="GSTR-2content" style={{ display: "none" }}>
            <p className="typeformcontentheading">GSTR-2</p>
            <p className="typeformcontenttext">
              GSTR-2 is the return filed to furnish the details of all the
              inward supplies of goods/services. It is possible to edit this
              form, but the government has suspended the filing.
            </p>
          </div>
          <div className="GSTR-3Bcontent" style={{ display: "none" }}>
            <p className="typeformcontentheading">GSTR-3B</p>
            <p className="typeformcontenttext">
              It is a summarized monthly return of all the details of inward and
              outward supplies, input tax credits, and details of all the GST
              liabilities. It is a self-declaration form filed by all taxpayers
              for every tax period.
              <br />
              <br /> The due date for filing the GSTR-3B return form is 20th
              usually. However, the date may be changed if there are any
              government notifications.
            </p>
          </div>
          <div className="GSTR-4content" style={{ display: "none" }}>
            <p className="typeformcontentheading">GSTR-4</p>
            <p className="typeformcontenttext">
              GSTR-4 is filed every year by all taxpayers under the GST
              composition scheme. Businesses should provide a summary of the
              outward supplies and all the taxes paid thereon, as details of the
              import of services and supplies that may attract reverse charges.
              <br />
              <br /> The due date for filing this form is the 30th of the month,
              succeeding the financial year.
            </p>
          </div>
          <div className="GSTR-5content" style={{ display: "none" }}>
            <p className="typeformcontentheading">GSTR-5</p>
            <p className="typeformcontenttext">
              This form is filed by all non-resident taxpayers registered in
              India and carries out business operations in India. In the GSTR-5
              return, businesses should furnish the details of all the inward
              and outward supplies and the tax liabilities. This form is to be
              submitted on a monthly basis and has to be filed by every month on
              the 20th.
            </p>
          </div>
          <div className="GSTR-5Acontent" style={{ display: "none" }}>
            <p className="typeformcontentheading">GSTR-5A</p>
            <p className="typeformcontenttext">
              Form GSTR-5A is furnished by service providers of Online
              Information and Database Access or Retrieval (OIDAR). It is filed
              to declare the services provided to unregistered entities or
              individuals from a place outside India to a person in India. It is
              a monthly return filed by the 20th of every month.
            </p>
          </div>
          <div className="GSTR-6Acontent" style={{ display: "none" }}>
            <p className="typeformcontentheading">GSTR-6A</p>
            <p className="typeformcontenttext">
              GSTR-6A form is a system-generated “draft” Statement of Inward
              Supplies for a Receiver Taxpayer. It is a read-only form.
            </p>
          </div>
          <div className="GSTR-6content" style={{ display: "none" }}>
            <p className="typeformcontentheading">GSTR-6</p>
            <p className="typeformcontenttext">
              The Input Service provider generates and files GSTR-6 only after
              all details furnished in GSTR 6A are accepted and verified on the
              13th of every month.
            </p>
          </div>
          <div className="GSTR-7content" style={{ display: "none" }}>
            <p className="typeformcontentheading">GSTR-7</p>
            <p className="typeformcontenttext">
              GSTR-7 is filed by the entities who deduct tax at the time of
              making payment to the suppliers for purchase, that is, inward
              supplies received.
              <br />
              <br />
              GSTR-7 form contains details of Tax Deducted at Source (TDS) under
              GST, the tax liability, and TDS refund. <br />
              <br /> GSTR7 must be filed on the 10th of the subsequent month.
            </p>
          </div>
          <div className="GSTR-7Acontent" style={{ display: "none" }}>
            <p className="typeformcontentheading">GSTR-7A</p>
            <p className="typeformcontenttext">
              GSTR 7A is better known as the TDS certificate, which is generated
              as soon as the tax deductor does the GSTR filing in Form GSTR-7.
              The assessee uses it for keeping records.
            </p>
          </div>
          <div className="GSTR-8content" style={{ display: "none" }}>
            <p className="typeformcontentheading">GSTR-8</p>
            <p className="typeformcontenttext">
              The form GSTR-8 is filed by e-commerce businesses who collect tax
              at source (TCS) to furnish the details of the supplies made
              through the e-commerce platform.
              <br />
              <br /> It is filed on the 10th of every month.
            </p>
          </div>
          <div className="GSTR-9content" style={{ display: "none" }}>
            <p className="typeformcontentheading">GSTR-9</p>
            <p className="typeformcontenttext">
              The GSTR 9 form is filed annually by entities to furnish the
              details of all purchases, sales, input tax credits, or refunds
              claimed or demanded created, and so. Regular taxpayers file
              GSTR-9, SEZ units, SEZ developers, OIDAR service providers, and
              the taxpayers who have withdrawn from the composition scheme to
              ordinary taxpayers.
              <br />
              <br />
              Annual return purposes. It has to be duly filled by all taxpayers
              by the coming financial year 31st. It mainly consists of all the
              details of the 12 GSTR3 filed during the financial year.
            </p>
          </div>
          <div className="GSTR-9Acontent" style={{ display: "none" }}>
            <p className="typeformcontentheading">GSTR-9A</p>
            <p className="typeformcontenttext">
              GSTR-9A is filed by entities who have opted for a composition
              scheme at any time during the financial year. The details
              furnished in GSTR-9A are inward and outward supplies, taxes paid,
              demand created, refund, and input tax credit availed or reversed.
            </p>
          </div>
          <div className="GSTR-9Ccontent" style={{ display: "none" }}>
            <p className="typeformcontentheading">GSTR-9C</p>
            <p className="typeformcontenttext">
              The GSTR 9C reconciliation statement must be filed by registered
              taxpayers with a total annual revenue above 5 Cr for the
              applicable financial year. The taxpayer is required to complete
              and self-certify GSTR 9C on the GST site. Taxpayers who must have
              their yearly accounts audited per GST regulations are subject to
              filing this form.
            </p>
          </div>
          <div className="GSTR-10content" style={{ display: "none" }}>
            <p className="typeformcontentheading">GSTR-10</p>
            <p className="typeformcontenttext">
              A taxable person whose GST registration is cancelled or
              surrendered has to file a return in Form GSTR-10 called as Final
              Return. This is statement of stocks held by such taxpayer on day
              immediately preceding the date from which cancellation is made
              effective. This return should be filed within three months of the
              date of cancellation or date of order of cancellation, whichever
              is later.
            </p>
          </div>
          <div className="ALLOTHERcontent" style={{ display: "none" }}>
            <p className="typeformcontentheading">All other Forms</p>
            <p className="typeformcontenttext">
              Registration Forms , Composition Scheme Forms , Forms for
              Enrolment under Section 35 , GSTR 11 &amp; All GST Returns Forms ,
              Input Tax Credit Forms , Electronic Ledgers/Payment Forms , Audit
              Forms in GST, Advance Ruling Forms in GST, Appellate Authority of
              Advance Ruling Forms ,Transitional Credit Forms, E-Way Bill Forms
              , ​​​​​ Inspection Forms. Legal251 will take care of all these as
              per applicability.
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
    <div id="Detailedprocess" className="page-section">
      <br />
      <br />
      <br />
      <br />
      <p className="servicehrheading">
        &nbsp;{" "}
        <img
          src="https://legal251.com/images/gstregistration/Path 19952.svg"
          className="Detailedprocessimage"
        />{" "}
        Benefits&nbsp;
      </p>
      <hr className="Detailedprocesshr1" />
      <hr className="Detailedprocesshr2" />
      <hr className="Detailedprocesshr3" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="firstcarddivpadd">
        <div className="row" style={{ margin: 0, padding: 0 }}>
          <div className="col-md-2 col-xs-4  firstcarddivcol">
            <div className="servicebenefitscard">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <p className="benefitscardtext">Unified Platform</p>
              </center>
            </div>
          </div>
          <div className="col-md-2 col-xs-4 firstcarddivcol">
            <div className="servicebenefitscard">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <p className="benefitscardtext">Subsuming of Taxes</p>
              </center>
            </div>
          </div>
          <div className="col-md-2 col-xs-4 firstcarddivcol">
            <div className="servicebenefitscard">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <p className="benefitscardtext">Lower Taxes</p>
              </center>
            </div>
          </div>
          <div className="col-md-2 col-xs-4 firstcarddivcol">
            <div className="servicebenefitscard">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <p className="benefitscardtext">Ease of Doing Business</p>
              </center>
            </div>
          </div>
          <div className="col-md-2 col-xs-4 firstcarddivcol">
            <div className="servicebenefitscard">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <p className="benefitscardtext">Larger Tax Base</p>
              </center>
            </div>
          </div>
          <div className="col-md-2 col-xs-4 firstcarddivcol">
            <div className="servicebenefitscard">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <p className="benefitscardtext">
                  Large Volume Data Handling Capacity
                </p>
              </center>
            </div>
          </div>
        </div>
      </div>
      <br className="mobhidebr" />
      <div className="secondcarddivpadd">
        <div className="row" style={{ margin: 0, padding: 0 }}>
          <div className="col-md-2 col-xs-4 secondcarddivcol">
            <div className="servicebenefitscard">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <p className="benefitscardtext">
                  Easy reconciliation Of Records
                </p>
              </center>
            </div>
          </div>
          <div className="col-md-2 col-xs-4 secondcarddivcol">
            <div className="servicebenefitscard">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <p className="benefitscardtext">
                  Multiple Platform Capabilities
                </p>
              </center>
            </div>
          </div>
          <div className="col-md-2 col-xs-4 secondcarddivcol">
            <div className="servicebenefitscard">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <p className="benefitscardtext">
                  A Simple and common form for all taxes
                </p>
              </center>
            </div>
          </div>
          <div className="col-md-2 col-xs-4 secondcarddivcol">
            <div className="servicebenefitscard">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <p className="benefitscardtext">Higher Threshold Benefits</p>
              </center>
            </div>
          </div>
          <div className="col-md-2 col-xs-4 secondcarddivcol">
            <div className="servicebenefitscard">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <p className="benefitscardtext">Startup Benefits</p>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div id="Documents" className="page-section">
        <br />
        <br />
        <br />
        <br />
        <p className="servicehrheading">
          &nbsp;{" "}
          <img
            src="https://legal251.com/images/services/contract.svg"
            className="Documentsimage"
          />
          Documents&nbsp;
        </p>
        <hr className="Documentshr1" />
        <hr className="Documentshr2" />
        <hr className="Documentshr3" />
        <br />
        <br />
        <br />
        <br />
        <p className="documentrequiredheading">
          Documents required for GST Return Filing:-
        </p>
        <br />
        <div className="row" style={{ padding: 0, margin: 0 }}>
          <div className="col-md-6 itrdocumentsimgcol">
            <center>
              <img
                src="https://legal251.com/images/itr/Group 3222.svg"
                className="itrdocumentsimg"
              />
            </center>
          </div>
          <div className="col-md-6 itrdocumentscardcol">
            <div
              style={{
                backgroundColor: "#ECECEC",
                borderRadius: 10,
                boxShadow: "6px 6px 6px #00000017",
                marginBottom: 40
              }}
            >
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 17,
                  color: "#f8951d",
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  padding: "19px 5px"
                }}
              >
                GST Return Filing
              </p>
              <div style={{ padding: "0 5px 5px 5px" }}>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    padding: 13
                  }}
                >
                  <p
                    style={{
                      fontFamily: '"Open Sans", sans-serif',
                      fontSize: 16,
                      fontWeight: 600,
                      lineHeight: "1.4",
                      color: "#2D2D2D",
                      paddingLeft: 13,
                      marginBottom: 8,
                      letterSpacing: "-0.5px"
                    }}
                  >
                    <img
                      src="https://legal251.com/images/gstregistration/Ellipse 2765.svg"
                      style={{
                        width: 7,
                        marginTop: 8,
                        position: "absolute",
                        marginLeft: "-14px"
                      }}
                    />
                    One time:
                  </p>
                  <div style={{ paddingLeft: 13 }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 15,
                        marginBottom: 8,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/gstregistration/Path 20074.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          marginLeft: "-15px",
                          zIndex: 1
                        }}
                      />
                      GST Number
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: 1,
                        color: "#2D2D2D",
                        paddingLeft: 45,
                        marginBottom: 10,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      or
                    </p>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "1.4",
                        color: "#2D2D2D",
                        paddingLeft: 13,
                        marginBottom: 8,
                        letterSpacing: "-0.5px"
                      }}
                    >
                      <img
                        src="https://legal251.com/images/gstregistration/Path 20074.svg"
                        style={{
                          marginTop: 5,
                          position: "absolute",
                          marginLeft: "-14px"
                        }}
                      />
                      GST Registration Certificate
                    </p>
                  </div>
                  <p
                    style={{
                      fontFamily: '"Open Sans", sans-serif',
                      fontSize: 16,
                      fontWeight: 600,
                      lineHeight: "1.4",
                      color: "#2D2D2D",
                      paddingLeft: 13,
                      marginBottom: 8,
                      letterSpacing: "-0.5px"
                    }}
                  >
                    <img
                      src="https://legal251.com/images/gstregistration/Ellipse 2765.svg"
                      style={{
                        width: 7,
                        marginTop: 8,
                        position: "absolute",
                        marginLeft: "-14px"
                      }}
                    />
                    Monthly:
                  </p>
                  <div style={{ paddingLeft: 13 }}>
                    <div className="row" style={{ padding: 0, margin: 0 }}>
                      <div className="col-sm-6 itrfiling1col">
                        <p
                          style={{
                            fontFamily: '"Open Sans", sans-serif',
                            fontSize: 16,
                            fontWeight: 600,
                            lineHeight: "1.4",
                            color: "#2D2D2D",
                            paddingLeft: 13,
                            marginBottom: 8,
                            letterSpacing: "-0.5px"
                          }}
                        >
                          <img
                            src="https://legal251.com/images/gstregistration/Ellipse 2765.svg"
                            style={{
                              width: 7,
                              marginTop: 8,
                              position: "absolute",
                              marginLeft: "-14px"
                            }}
                          />
                          Starter and Basic plans::
                        </p>
                        <div style={{ paddingLeft: 13 }}>
                          <p
                            style={{
                              fontFamily: '"Open Sans", sans-serif',
                              fontSize: 16,
                              fontWeight: 600,
                              lineHeight: "1.4",
                              color: "#2D2D2D",
                              paddingLeft: 15,
                              marginBottom: 8,
                              letterSpacing: "-0.5px"
                            }}
                          >
                            <img
                              src="https://legal251.com/images/gstregistration/Path 20074.svg"
                              style={{
                                marginTop: 5,
                                position: "absolute",
                                marginLeft: "-15px",
                                zIndex: 1
                              }}
                            />
                            GSTR - 3B (Soft copy)
                          </p>
                          <p
                            style={{
                              fontFamily: '"Open Sans", sans-serif',
                              fontSize: 16,
                              fontWeight: 600,
                              lineHeight: "1.4",
                              color: "#2D2D2D",
                              paddingLeft: 13,
                              marginBottom: 8,
                              letterSpacing: "-0.5px"
                            }}
                          >
                            <img
                              src="https://legal251.com/images/gstregistration/Path 20074.svg"
                              style={{
                                marginTop: 5,
                                position: "absolute",
                                marginLeft: "-14px"
                              }}
                            />
                            GSTR - 1 (Soft copy)
                          </p>
                          <p
                            style={{
                              fontFamily: '"Open Sans", sans-serif',
                              fontSize: 16,
                              fontWeight: 600,
                              lineHeight: 1,
                              color: "#2D2D2D",
                              paddingLeft: 45,
                              marginBottom: 10,
                              letterSpacing: "-0.5px"
                            }}
                          >
                            or
                          </p>
                          <p
                            style={{
                              fontFamily: '"Open Sans", sans-serif',
                              fontSize: 16,
                              fontWeight: 600,
                              lineHeight: "1.4",
                              color: "#2D2D2D",
                              paddingLeft: 13,
                              marginBottom: 8,
                              letterSpacing: "-0.5px"
                            }}
                          >
                            <img
                              src="https://legal251.com/images/gstregistration/Path 20074.svg"
                              style={{
                                marginTop: 5,
                                position: "absolute",
                                marginLeft: "-14px"
                              }}
                            />
                            Normal Excel file of Sales &amp; Purchase
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 itrfilingcol2">
                        <p
                          style={{
                            fontFamily: '"Open Sans", sans-serif',
                            fontSize: 16,
                            fontWeight: 600,
                            lineHeight: "1.4",
                            color: "#2D2D2D",
                            paddingLeft: 13,
                            marginBottom: 8,
                            letterSpacing: "-0.5px"
                          }}
                        >
                          <img
                            src="https://legal251.com/images/gstregistration/Ellipse 2765.svg"
                            style={{
                              width: 7,
                              marginTop: 8,
                              position: "absolute",
                              marginLeft: "-14px"
                            }}
                          />
                          Pro and Premium plans:
                        </p>
                        <div style={{ paddingLeft: 13 }}>
                          <p
                            style={{
                              fontFamily: '"Open Sans", sans-serif',
                              fontSize: 16,
                              fontWeight: 600,
                              lineHeight: "1.4",
                              color: "#2D2D2D",
                              paddingLeft: 15,
                              marginBottom: 8,
                              letterSpacing: "-0.5px"
                            }}
                          >
                            <img
                              src="https://legal251.com/images/gstregistration/Path 20074.svg"
                              style={{
                                marginTop: 5,
                                position: "absolute",
                                marginLeft: "-15px",
                                zIndex: 1
                              }}
                            />
                            Sales &amp; Purchase Invoices
                          </p>
                          <p
                            style={{
                              fontFamily: '"Open Sans", sans-serif',
                              fontSize: 16,
                              fontWeight: 600,
                              lineHeight: 1,
                              color: "#2D2D2D",
                              paddingLeft: 45,
                              marginBottom: 10,
                              letterSpacing: "-0.5px"
                            }}
                          >
                            or
                          </p>
                          <p
                            style={{
                              fontFamily: '"Open Sans", sans-serif',
                              fontSize: 16,
                              fontWeight: 600,
                              lineHeight: "1.4",
                              color: "#2D2D2D",
                              paddingLeft: 13,
                              marginBottom: 8,
                              letterSpacing: "-0.5px"
                            }}
                          >
                            <img
                              src="https://legal251.com/images/gstregistration/Path 20074.svg"
                              style={{
                                marginTop: 5,
                                position: "absolute",
                                marginLeft: "-14px"
                              }}
                            />
                            GSTR - 3B (Soft copy)
                          </p>
                          <p
                            style={{
                              fontFamily: '"Open Sans", sans-serif',
                              fontSize: 16,
                              fontWeight: 600,
                              lineHeight: "1.4",
                              color: "#2D2D2D",
                              paddingLeft: 13,
                              marginBottom: 8,
                              letterSpacing: "-0.5px"
                            }}
                          >
                            <img
                              src="https://legal251.com/images/gstregistration/Path 20074.svg"
                              style={{
                                marginTop: 5,
                                position: "absolute",
                                marginLeft: "-14px"
                              }}
                            />
                            GSTR - 1 (Soft copy)
                          </p>
                          <p
                            style={{
                              fontFamily: '"Open Sans", sans-serif',
                              fontSize: 16,
                              fontWeight: 600,
                              lineHeight: 1,
                              color: "#2D2D2D",
                              paddingLeft: 45,
                              marginBottom: 10,
                              letterSpacing: "-0.5px"
                            }}
                          >
                            or
                          </p>
                          <p
                            style={{
                              fontFamily: '"Open Sans", sans-serif',
                              fontSize: 16,
                              fontWeight: 600,
                              lineHeight: "1.4",
                              color: "#2D2D2D",
                              paddingLeft: 13,
                              marginBottom: 8,
                              letterSpacing: "-0.5px"
                            }}
                          >
                            <img
                              src="https://legal251.com/images/gstregistration/Path 20074.svg"
                              style={{
                                marginTop: 5,
                                position: "absolute",
                                marginLeft: "-14px"
                              }}
                            />
                            Normal Excel file of Sales &amp; Purchase
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <center>
              <p
                style={{
                  fontSize: 22,
                  color: "#01355D",
                  fontFamily: '"Roboto", sans-serif',
                  fontWeight: 700,
                  lineHeight: "1.2",
                  letterSpacing: "-0.5px"
                }}
              >
                Don't have all these documents?
                <br /> We will help you in preparing these documents
              </p>
              <br />
              <p
                style={{
                  fontSize: 22,
                  color: "#01355D",
                  fontFamily: '"Roboto", sans-serif',
                  fontWeight: 700,
                  lineHeight: "1.2",
                  letterSpacing: "-0.5px",
                  marginTop: 10
                }}
              >
                Just call on
              </p>
              <br />
              <img
                className="itrdocnoimg"
                src="images/gstregistration/Group 656.svg"
              />
            </center>
          </div>
        </div>
      </div>
    </div>
    <div id="Registrationprocess" className="page-section">
      <br />
      <br />
      <br />
      <br />
      <p className="servicehrheading">
        &nbsp;{" "}
        <img
          src="https://legal251.com/images/services/registration.svg"
          className="registrationimage"
        />
        Filing process&nbsp;
      </p>
      <hr className="Filinghr1" />
      <hr className="Filinghr2" />
      <hr className="Filinghr3" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ padding: "0px 10.61vw" }}>
        <div>
          <div
            className="row"
            style={{
              left: 15,
              right: 0,
              padding: "4.5vw 10.61vw",
              position: "absolute",
              width: "100%",
              zIndex: 1
            }}
          >
            <div className="col-md-2 Registrationprocesscol1">
              <center>
                <p className="Registrationprocesstext1 gstrftext1">
                  Our team will look into the documents that you have submitted,
                  reviewing any false or mistaken information to keep you
                  comfortable.
                </p>
              </center>
            </div>
            <div className="col-md-2 Registrationprocesscol2">
              <center>
                <p className="Registrationprocesstext2 gstrftext2">
                  Our best GST Filing experts are here to deal with document
                  necessities &amp; to fulfil your return filing needs.
                </p>
              </center>
            </div>
            <div className="col-md-2 Registrationprocesscol3">
              <center>
                <p className="Registrationprocesstext3 gstrftext3">
                  On the basics of the details that you submitted our experts
                  will determine which category of GST return is to be filed for
                  your business.
                </p>
              </center>
            </div>
            <div className="col-md-2 Registrationprocesscol4">
              <center>
                <p className="Registrationprocesstext4 gstrftext4">
                  The respective experts will proceed further with your
                  documents in order to file your GST Return.
                </p>
              </center>
            </div>
            <div className="col-md-2 Registrationprocesscol5">
              <center>
                <p className="Registrationprocesstext5 gstrftext5">
                  You are supposed to wait until our experts reach out to notify
                  you of the status of your GST return as filed.
                </p>
              </center>
            </div>
          </div>
          <div>
            <center>
              <img
                src="https://legal251.com/images/services/blue.svg"
                className="registrationicon1"
              />
              <img
                src="https://legal251.com/images/services/yellow.svg"
                className="registrationicon2"
              />
              <img
                src="https://legal251.com/images/services/blue_cut.svg"
                className="registrationicon3"
              />{" "}
              <img
                className="registrationicon4"
                src="https://legal251.com/images/services/yellow.svg"
              />
              <img
                src="https://legal251.com/images/services/Group_1799.svg"
                className="registrationicon5"
              />
            </center>
          </div>
        </div>
      </div>
    </div>
    <div id="FAQs" className="page-section">
      <br />
      <br />
      <br />
      <br />
      <p className="servicehrheading">
        &nbsp;{" "}
        <img
          src="https://legal251.com/images/services/faq.svg"
          className="FAQsimage"
        />{" "}
        FAQs&nbsp;
      </p>
      <hr className="FAQshr1" />
      <hr className="FAQshr2" />
      <hr className="FAQshr3" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className="frequentlyheading">FREQUENTLY ASKED QUESTIONS</p>
      <br />
      <br />
      <br />
      <div
        className="mobhidebr"
        style={{ position: "absolute", width: "100%" }}
      >
        <hr
          style={{
            border: "none",
            marginTop: "-20px",
            borderLeft: "2px solid rgb(1,53,93,0.3)",
            height: 300,
            width: 2
          }}
        />
      </div>
      <div style={{ padding: "0 5%" }}>
        <div className="row">
          <div className="col-md-6 servicefaqcol1">
            <div
              className="panel-group"
              id="accordion"
              style={{ border: "none" }}
            >
              <div className="panel panel-default servicefaqmainpanel">
                <div className="panel-heading servicefaqpanelheading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      className="servicefaqlink"
                      id="servicefaq1"
                      data-parent="#accordion"
                      href="#collapse1"
                    >
                      Q1: What is GST return filing ?
                      <img
                        src="https://legal251.com/images/gstregistration/Path_20192.svg"
                        className="servicefaqimg"
                      />
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse1"
                  className="panel-collapse collapse in paddingzero"
                >
                  <div className="panel-body servicefaqbody">
                    GST returns essentially stands for filing of all GST. Every
                    individual who is covered under the GST Act must produce
                    their income to the Tax Department of India. This is known
                    as return and it includes details of every sale and
                    purchase.
                  </div>
                </div>
              </div>
              <div className="panel panel-default servicefaqmainpanel">
                <div className="panel-heading servicefaqpanelheading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      className="servicefaqlink"
                      id="servicefaq2"
                      data-parent="#accordion"
                      href="#collapse2"
                    >
                      Q2: How to submit documents?
                      <img
                        src="https://legal251.com/images/gstregistration/Path_20191.svg"
                        className="servicefaqimg"
                      />
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse2"
                  className="panel-collapse collapse  paddingzero"
                >
                  <div className="panel-body servicefaqbody">
                    You can easily upload all your documents using our web
                    dashboard or app and can easily review them later and share
                    them with anyone.
                  </div>
                </div>
              </div>
              <div className="panel panel-default servicefaqmainpanel">
                <div className="panel-heading servicefaqpanelheading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      className="servicefaqlink"
                      id="servicefaq3"
                      data-parent="#accordion"
                      href="#collapse3"
                    >
                      Q3: Can a person without a GST number collect GST ?
                      <img
                        src="https://legal251.com/images/gstregistration/Path_20191.svg"
                        className="servicefaqimg"
                      />
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse3"
                  className="panel-collapse collapse paddingzero"
                >
                  <div className="panel-body servicefaqbody">
                    No, a person without GST registration can neither collect
                    GST from his customers nor can claim any input tax credit of
                    GST paid by him.
                  </div>
                </div>
              </div>
              <div className="panel panel-default servicefaqmainpanel">
                <div className="panel-heading servicefaqpanelheading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      className="servicefaqlink"
                      id="servicefaq4"
                      data-parent="#accordion"
                      href="#collapse4"
                    >
                      Q4: What is the cash transaction limit in GST?
                      <img
                        src="https://legal251.com/images/gstregistration/Path_20191.svg"
                        className="servicefaqimg"
                      />
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse4"
                  className="panel-collapse collapse paddingzero"
                >
                  <div className="panel-body servicefaqbody">
                    Threshold Limit – Cash payment exceeding Rs 10,000 to a
                    person in a single day. The limit is extended to Rs. 35,000
                    in case the payments are being made for plying, hiring or
                    leasing of goods carriage to a person in a single day.
                  </div>
                </div>
              </div>
              <div className="panel panel-default servicefaqmainpanel">
                <div className="panel-heading servicefaqpanelheading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      className="servicefaqlink"
                      id="servicefaq5"
                      data-parent="#accordion"
                      href="#collapse5"
                    >
                      Q5: What is the composition scheme under GST?
                      <img
                        src="https://legal251.com/images/gstregistration/Path_20191.svg"
                        className="servicefaqimg"
                      />
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse5"
                  className="panel-collapse collapse paddingzero"
                >
                  <div className="panel-body servicefaqbody">
                    Composition dealers need to pay nominal tax rates based on
                    the type of business (a maximum of 2% for manufacturers, 5%
                    for the restaurant service sector and 1% for other
                    suppliers).Small businesses with an annual turnover of less
                    than Rs. 1.5 crore (Rs. 75 Lakhs for the Special Category
                    States) can opt for the Composition scheme.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 servicefaqcol2">
            <div className="panel-group" id="accordion2">
              <div className="panel panel-default servicefaqmainpanel">
                <div className="panel-heading servicefaqpanelheading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      className="servicefaqlink"
                      id="servicefaq6"
                      data-parent="#accordion2"
                      href="#collapse21"
                    >
                      Q6: What if I don't pay my GST return?
                      <img
                        src="https://legal251.com/images/gstregistration/Path_20192.svg"
                        className="servicefaqimg"
                      />
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse21"
                  className="panel-collapse collapse in paddingzero"
                >
                  <div className="panel-body servicefaqbody">
                    Late filing attracts penalty called late fee. The late fee
                    is Rs. 100 per day per Act. So it is 100 under CGST &amp;
                    100 under SGST. Total will be Rs. 200/day*. The maximum is
                    Rs. 5,000. There is no late fee on IGST in case of delayed
                    filing. <br />
                    Along with late fee, interest has to be paid at 18% per
                    annum. It has to be calculated by the taxpayer on the tax to
                    be paid. The time period will be from the next day of filing
                    to the date of payment.
                  </div>
                </div>
              </div>
              <div className="panel panel-default servicefaqmainpanel">
                <div className="panel-heading servicefaqpanelheading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      className="servicefaqlink"
                      id="servicefaq7"
                      data-parent="#accordion2"
                      href="#collapse22"
                    >
                      Q7: Does GST apply to all businesses?
                      <img
                        src="https://legal251.com/images/gstregistration/Path_20191.svg"
                        className="servicefaqimg"
                      />
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse22"
                  className="panel-collapse collapse paddingzero"
                >
                  <div className="panel-body servicefaqbody">
                    You will be required to register under GST, even if your
                    business' annual revenue is less than Rs 20 lakh, which is
                    the threshold for businesses which are required to be
                    registered under GST.
                  </div>
                </div>
              </div>
              <div className="panel panel-default servicefaqmainpanel">
                <div className="panel-heading servicefaqpanelheading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      className="servicefaqlink"
                      id="servicefaq8"
                      data-parent="#accordion2"
                      href="#collapse23"
                    >
                      Q8: What are the taxes that GST replaces?
                      <img
                        src="https://legal251.com/images/gstregistration/Path_20191.svg"
                        className="servicefaqimg"
                      />
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse23"
                  className="panel-collapse collapse paddingzero"
                >
                  <div className="panel-body servicefaqbody">
                    {" "}
                    The GST replaces numerous different indirect taxes such as:{" "}
                    <br />
                    Central Excise Duty <br />
                    Service Tax <br />
                    Countervailing Duty <br />
                    Special Countervailing Duty <br />
                    Value Added Tax (VAT) <br />
                    Central Sales Tax (CST) <br />
                    Octroi <br />
                    Entertainment Tax <br />
                    Entry Tax <br />
                    Purchase Tax <br />
                    Luxury Tax <br />
                    Advertisement taxes <br />
                    Taxes applicable on lotteries. <br />
                  </div>
                </div>
              </div>
              <div className="panel panel-default servicefaqmainpanel">
                <div className="panel-heading servicefaqpanelheading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      className="servicefaqlink"
                      id="servicefaq9"
                      data-parent="#accordion2"
                      href="#collapse24"
                    >
                      Q9: Do we need different forms for IGST, SGST and CGST?
                      <img
                        src="https://legal251.com/images/gstregistration/Path_20191.svg"
                        className="servicefaqimg"
                      />
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse24"
                  className="panel-collapse collapse paddingzero"
                >
                  <div className="panel-body servicefaqbody">
                    The same return form can be used for filing SGST, CGST and
                    IGST. It will have different columns for each one of them
                    and it will have to be filled on the basis of inter-state or
                    intra-state supplies.
                  </div>
                </div>
              </div>
              <div className="panel panel-default servicefaqmainpanel">
                <div className="panel-heading servicefaqpanelheading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      className="servicefaqlink"
                      id="servicefaq10"
                      data-parent="#accordion2"
                      href="#collapse25"
                    >
                      Q10: What happens if the return is not filed within the
                      stipulated time?
                      <img
                        src="https://legal251.com/images/gstregistration/Path_20191.svg"
                        className="servicefaqimg"
                      />
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse25"
                  className="panel-collapse collapse paddingzero"
                >
                  <div className="panel-body servicefaqbody">
                    In case you delay the filing of the return, you will have to
                    pay Rs.100 per day as a late fee. The maximum late fee
                    charge will be Rs.5000.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="servicecardanimationpadd">
      <br />
      <br />
      <p className="frequentlyheading">THEY TRUST US</p>
      <br />
      <div className="owl-carousel servicecaroselpadding owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            style={{
              transition: "all 0.25s ease 0s",
              width: 8067,
              transform: "translate3d(-4033px, 0px, 0px)"
            }}
          >
            <div className="owl-item cloned" style={{ width: "806.603px" }}>
              <div
                className="clientscard clientservicemargin"
                data-position={1}
              >
                <center>
                  <img
                    src="https://legal251.com/images/about/person2.jpg"
                    className="clientscardimage servicecardimage"
                  />
                  <p className="clientscardname">Mr. Chirag Jain</p>
                  <p className="clientscardDesignation">
                    Director Samrudhi Innovation
                  </p>
                  <div className="clientscardstardiv">
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                  </div>
                  <div className="clientscardtextdiv">
                    <p className="clientscardtext">
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-1.svg"
                        className="quoteimage1"
                      />{" "}
                      For people like us who are surrounded by work, legal251 is
                      like a gift. Be it a busy day, or a deadline, legal251 can
                      always be counted upon. The customer service is always up
                      to the mark and the advices and solutions are always
                      promising. Within 48 hrs of the query you can have your
                      solution in your hand, and all this, just a few clicks
                      away and inside your pocket. Legal work is now on a whole
                      different level.
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-5.svg"
                        className="quoteimage2"
                      />
                    </p>
                  </div>
                </center>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: "806.603px" }}>
              <div
                className="clientscard clientservicemargin"
                data-position={2}
              >
                <center>
                  <img
                    src="https://legal251.com/images/about/person3.jpg"
                    className="clientscardimage servicecardimage"
                  />
                  <p className="clientscardname">Mr. Sachin Karma</p>
                  <p className="clientscardDesignation">
                    Co-Founder Today's Bharat
                  </p>
                  <div className="clientscardstardiv">
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                  </div>
                  <div className="clientscardtextdiv">
                    <p className="clientscardtext">
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-1.svg"
                        className="quoteimage1"
                      />{" "}
                      Legal251 changes the very idea which most people have
                      about getting any legal work done. Making the whole
                      process so convenient and also online makes it so easy for
                      everyone to work with. If talking about quality work, they
                      have absolutely no match. A platform as big as Today's
                      Bharat required a very complete and descriptive terms of
                      condition and privacy policy. This was greatly achieved
                      with the help of experts at <br className="hidden-md" />{" "}
                      Legal251.
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-5.svg"
                        className="quoteimage2"
                      />
                    </p>
                  </div>
                </center>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: "806.603px" }}>
              <div
                className="clientscard clientservicemargin"
                data-position={3}
              >
                <center>
                  <img
                    src="https://legal251.com/images/about/person4.jpg"
                    className="clientscardimage servicecardimage"
                  />
                  <p className="clientscardname">Mr. Vipin Soni</p>
                  <p className="clientscardDesignation">
                    Well Known Financial Consultant
                  </p>
                  <div className="clientscardstardiv">
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                  </div>
                  <div className="clientscardtextdiv">
                    <p className="clientscardtext">
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-1.svg"
                        className="quoteimage1"
                      />
                      I'm thrilled to share my exceptional experience with
                      LEGAL251. Their top priority is evident: providing the
                      best and speediest solutions. Their professionalism and
                      expertise stood out. The remarkable speed at which
                      LEGAL251 operates truly sets them apart. Their responses
                      were prompt, and packed with insightful guidance. Any
                      queries I had were addressed immediately. For those
                      seeking legal assistance that's efficient and of the
                      highest quality, I wholeheartedly endorse LEGAL251.
                      <br className="hidden-md" />{" "}
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-5.svg"
                        className="quoteimage2"
                      />
                    </p>
                  </div>
                </center>
              </div>
            </div>
            <div className="owl-item" style={{ width: "806.603px" }}>
              <div
                className="clientscard clientservicemargin"
                data-position={0}
              >
                <center>
                  <img
                    src="https://legal251.com/images/about/person.jpg"
                    className="clientscardimage  servicecardimage"
                  />
                  <p className="clientscardname">Mr. Rajat Maheshwari</p>
                  <p className="clientscardDesignation">
                    Director Rajat Gems &amp; Jewellery Pvt. Ltd.
                  </p>
                  <div className="clientscardstardiv">
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                  </div>
                  <div className="clientscardtextdiv">
                    <p className="clientscardtext">
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-1.svg"
                        className="quoteimage1"
                      />{" "}
                      Legal251 is the best platform for getting consultancy be
                      it in any legal domain they provide best solution for your
                      query.I am satisfied with their work. What i was expecting
                      i got it from Legal251. And I would really appreciate
                      their cooperative work and how they deal and cooperate
                      with their customers. They are the best in business as you
                      may know. There are many complications in Filing GST &amp;
                      Income Tax returns for jewellery supply &amp; design
                      business they make all these very easy and efficient.
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-5.svg"
                        className="quoteimage2"
                      />
                    </p>
                  </div>
                </center>
              </div>
            </div>
            <div className="owl-item" style={{ width: "806.603px" }}>
              <div
                className="clientscard clientservicemargin"
                data-position={1}
              >
                <center>
                  <img
                    src="https://legal251.com/images/about/person2.jpg"
                    className="clientscardimage servicecardimage"
                  />
                  <p className="clientscardname">Mr. Chirag Jain</p>
                  <p className="clientscardDesignation">
                    Director Samrudhi Innovation
                  </p>
                  <div className="clientscardstardiv">
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                  </div>
                  <div className="clientscardtextdiv">
                    <p className="clientscardtext">
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-1.svg"
                        className="quoteimage1"
                      />{" "}
                      For people like us who are surrounded by work, legal251 is
                      like a gift. Be it a busy day, or a deadline, legal251 can
                      always be counted upon. The customer service is always up
                      to the mark and the advices and solutions are always
                      promising. Within 48 hrs of the query you can have your
                      solution in your hand, and all this, just a few clicks
                      away and inside your pocket. Legal work is now on a whole
                      different level.
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-5.svg"
                        className="quoteimage2"
                      />
                    </p>
                  </div>
                </center>
              </div>
            </div>
            <div className="owl-item active" style={{ width: "806.603px" }}>
              <div
                className="clientscard clientservicemargin"
                data-position={2}
              >
                <center>
                  <img
                    src="https://legal251.com/images/about/person3.jpg"
                    className="clientscardimage servicecardimage"
                  />
                  <p className="clientscardname">Mr. Sachin Karma</p>
                  <p className="clientscardDesignation">
                    Co-Founder Today's Bharat
                  </p>
                  <div className="clientscardstardiv">
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                  </div>
                  <div className="clientscardtextdiv">
                    <p className="clientscardtext">
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-1.svg"
                        className="quoteimage1"
                      />{" "}
                      Legal251 changes the very idea which most people have
                      about getting any legal work done. Making the whole
                      process so convenient and also online makes it so easy for
                      everyone to work with. If talking about quality work, they
                      have absolutely no match. A platform as big as Today's
                      Bharat required a very complete and descriptive terms of
                      condition and privacy policy. This was greatly achieved
                      with the help of experts at <br className="hidden-md" />{" "}
                      Legal251.
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-5.svg"
                        className="quoteimage2"
                      />
                    </p>
                  </div>
                </center>
              </div>
            </div>
            <div
              className="owl-item active center"
              style={{ width: "806.603px" }}
            >
              <div
                className="clientscard clientservicemargin"
                data-position={3}
              >
                <center>
                  <img
                    src="https://legal251.com/images/about/person4.jpg"
                    className="clientscardimage servicecardimage"
                  />
                  <p className="clientscardname">Mr. Vipin Soni</p>
                  <p className="clientscardDesignation">
                    Well Known Financial Consultant
                  </p>
                  <div className="clientscardstardiv">
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                  </div>
                  <div className="clientscardtextdiv">
                    <p className="clientscardtext">
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-1.svg"
                        className="quoteimage1"
                      />
                      I'm thrilled to share my exceptional experience with
                      LEGAL251. Their top priority is evident: providing the
                      best and speediest solutions. Their professionalism and
                      expertise stood out. The remarkable speed at which
                      LEGAL251 operates truly sets them apart. Their responses
                      were prompt, and packed with insightful guidance. Any
                      queries I had were addressed immediately. For those
                      seeking legal assistance that's efficient and of the
                      highest quality, I wholeheartedly endorse LEGAL251.
                      <br className="hidden-md" />{" "}
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-5.svg"
                        className="quoteimage2"
                      />
                    </p>
                  </div>
                </center>
              </div>
            </div>
            <div
              className="owl-item cloned active"
              style={{ width: "806.603px" }}
            >
              <div
                className="clientscard clientservicemargin"
                data-position={0}
              >
                <center>
                  <img
                    src="https://legal251.com/images/about/person.jpg"
                    className="clientscardimage  servicecardimage"
                  />
                  <p className="clientscardname">Mr. Rajat Maheshwari</p>
                  <p className="clientscardDesignation">
                    Director Rajat Gems &amp; Jewellery Pvt. Ltd.
                  </p>
                  <div className="clientscardstardiv">
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                  </div>
                  <div className="clientscardtextdiv">
                    <p className="clientscardtext">
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-1.svg"
                        className="quoteimage1"
                      />{" "}
                      Legal251 is the best platform for getting consultancy be
                      it in any legal domain they provide best solution for your
                      query.I am satisfied with their work. What i was expecting
                      i got it from Legal251. And I would really appreciate
                      their cooperative work and how they deal and cooperate
                      with their customers. They are the best in business as you
                      may know. There are many complications in Filing GST &amp;
                      Income Tax returns for jewellery supply &amp; design
                      business they make all these very easy and efficient.
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-5.svg"
                        className="quoteimage2"
                      />
                    </p>
                  </div>
                </center>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: "806.603px" }}>
              <div
                className="clientscard clientservicemargin"
                data-position={1}
              >
                <center>
                  <img
                    src="https://legal251.com/images/about/person2.jpg"
                    className="clientscardimage servicecardimage"
                  />
                  <p className="clientscardname">Mr. Chirag Jain</p>
                  <p className="clientscardDesignation">
                    Director Samrudhi Innovation
                  </p>
                  <div className="clientscardstardiv">
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                  </div>
                  <div className="clientscardtextdiv">
                    <p className="clientscardtext">
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-1.svg"
                        className="quoteimage1"
                      />{" "}
                      For people like us who are surrounded by work, legal251 is
                      like a gift. Be it a busy day, or a deadline, legal251 can
                      always be counted upon. The customer service is always up
                      to the mark and the advices and solutions are always
                      promising. Within 48 hrs of the query you can have your
                      solution in your hand, and all this, just a few clicks
                      away and inside your pocket. Legal work is now on a whole
                      different level.
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-5.svg"
                        className="quoteimage2"
                      />
                    </p>
                  </div>
                </center>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: "806.603px" }}>
              <div
                className="clientscard clientservicemargin"
                data-position={2}
              >
                <center>
                  <img
                    src="https://legal251.com/images/about/person3.jpg"
                    className="clientscardimage servicecardimage"
                  />
                  <p className="clientscardname">Mr. Sachin Karma</p>
                  <p className="clientscardDesignation">
                    Co-Founder Today's Bharat
                  </p>
                  <div className="clientscardstardiv">
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                    <img
                      src="https://legal251.com/images/about/Icon ionic-md-star.svg"
                      className="staricon"
                    />
                  </div>
                  <div className="clientscardtextdiv">
                    <p className="clientscardtext">
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-1.svg"
                        className="quoteimage1"
                      />{" "}
                      Legal251 changes the very idea which most people have
                      about getting any legal work done. Making the whole
                      process so convenient and also online makes it so easy for
                      everyone to work with. If talking about quality work, they
                      have absolutely no match. A platform as big as Today's
                      Bharat required a very complete and descriptive terms of
                      condition and privacy policy. This was greatly achieved
                      with the help of experts at <br className="hidden-md" />{" "}
                      Legal251.
                      <img
                        src="https://legal251.com/images/about/iconmonstr-quote-5.svg"
                        className="quoteimage2"
                      />
                    </p>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav disabled">
          <button type="button" role="presentation" className="owl-prev">
            <span aria-label="Previous">‹</span>
          </button>
          <button type="button" role="presentation" className="owl-next">
            <span aria-label="Next">›</span>
          </button>
        </div>
        <div className="owl-dots">
          <button role="button" className="owl-dot">
            <span />
          </button>
          <button role="button" className="owl-dot">
            <span />
          </button>
          <button role="button" className="owl-dot">
            <span />
          </button>
          <button role="button" className="owl-dot active">
            <span />
          </button>
        </div>
      </div>
    </div>
    <div id="Whychooseus?" className="page-section">
      <br />
      <br />
      <br />
      <br />
      <p className="servicehrheading">
        &nbsp;{" "}
        <img
          src="https://legal251.com/images/services/Layer 2.svg"
          className="whychosseusserviceimage"
        />
        Why Choose Us?&nbsp;
      </p>
      <hr className="whychosseushr1" />
      <hr className="whychosseushr2" />
      <hr className="whychosseushr3" />
      <br />
      <br />
      <br />
      <div
        className="whychosseusmob"
        style={{
          background: 'url("images/services/Mask Group 33 (1).jpg")',
          backgroundSize: "cover",
          padding: 20,
          backgroundPosition: "center"
        }}
      >
        <div className="row">
          <div className="col-xs-4">
            <center>
              <div>
                <img
                  src="https://legal251.com/images/services/XMLID_1249_.svg"
                  style={{ width: "8vw", backgroundSize: "cover" }}
                />
                <p
                  style={{
                    marginTop: 10,
                    fontFamily: '"Roboto"',
                    fontWeight: 700,
                    lineHeight: "1.1",
                    fontSize: "2.2vw",
                    color: "#ffffff"
                  }}
                >
                  Growth &amp; Improvement
                </p>
                <p
                  style={{
                    marginTop: 5,
                    fontFamily: '"Roboto"',
                    fontWeight: 400,
                    lineHeight: "1.1",
                    fontSize: "2vw",
                    color: "#ffffff"
                  }}
                >
                  We believe in growth and improvement at all costs. For us,
                  growth is the law of life and it shall be fulfilled. We know
                  the importance of business and its growth for you.
                </p>
                <br />
              </div>
            </center>
          </div>
          <div className="col-xs-4">
            <center>
              <div>
                <img
                  src="https://legal251.com/images/services/customer-service.svg"
                  style={{ width: "9vw" }}
                />
                <p
                  style={{
                    marginTop: 4,
                    fontFamily: '"Roboto"',
                    fontWeight: 700,
                    lineHeight: "1.1",
                    fontSize: "2.2vw",
                    color: "#ffffff"
                  }}
                >
                  Support &amp; Availability
                </p>
                <p
                  style={{
                    marginTop: 4,
                    fontFamily: '"Roboto"',
                    fontWeight: 400,
                    lineHeight: "1.1",
                    fontSize: "2vw",
                    color: "#ffffff"
                  }}
                >
                  We feel how much pain even a small problem or query can cause,
                  that is the reason we are available to support you and solve
                  any of such problems at every particular instance in time.{" "}
                </p>
                <br />
              </div>
            </center>
          </div>
          <div className="col-xs-4">
            <center>
              <div>
                <img
                  src="https://legal251.com/images/services/success.svg"
                  style={{ width: "8vw", backgroundSize: "cover" }}
                />
                <p
                  style={{
                    marginTop: 6,
                    fontFamily: '"Roboto"',
                    fontWeight: 700,
                    lineHeight: "1.1",
                    fontSize: "2.2vw",
                    color: "#ffffff"
                  }}
                >
                  Experienced Team
                </p>
                <p
                  style={{
                    marginTop: 10,
                    fontFamily: '"Roboto"',
                    fontWeight: 400,
                    lineHeight: "1.1",
                    fontSize: "2vw",
                    color: "#ffffff"
                  }}
                >
                  All the members of our team are experienced individuals who
                  believe in professionalism and customer satisfaction above
                  all. Each one of them is passionate in their respective
                  fields.
                </p>
                <br />
              </div>
            </center>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <center>
              <div>
                <img
                  src="https://legal251.com/images/services/target.svg"
                  style={{ width: "8vw", backgroundSize: "cover" }}
                />
                <p
                  style={{
                    marginTop: 6,
                    fontFamily: '"Roboto"',
                    fontWeight: 700,
                    lineHeight: "1.1",
                    fontSize: "2.2vw",
                    color: "#ffffff"
                  }}
                >
                  Focus
                </p>
                <p
                  style={{
                    marginTop: 6,
                    fontFamily: '"Roboto"',
                    fontWeight: 400,
                    lineHeight: "1.1",
                    fontSize: "2vw",
                    color: "#ffffff"
                  }}
                >
                  Any assigned task is of utmost importance to us, that's why
                  our team members are always focused on taking care of even the
                  smallest of our clients' needs and requirements.
                </p>
              </div>
            </center>
          </div>
          <div className="col-xs-4">
            <center>
              <div>
                <img
                  src="https://legal251.com/images/services/suitcase.svg"
                  style={{ width: "8vw", backgroundSize: "cover" }}
                />
                <p
                  style={{
                    marginTop: 10,
                    fontFamily: '"Roboto"',
                    fontWeight: 700,
                    lineHeight: "1.1",
                    fontSize: "2.2vw",
                    color: "#ffffff"
                  }}
                >
                  Value for Money
                </p>
                <p
                  style={{
                    marginTop: 6,
                    fontFamily: '"Roboto"',
                    fontWeight: 400,
                    lineHeight: "1.1",
                    fontSize: "2vw",
                    color: "#ffffff"
                  }}
                >
                  We understand that the money being spent is hard-earned,
                  therefore we utilize every single penny that you pay us in the
                  most effective way possible hence providing the best value for
                  money.
                </p>
              </div>
            </center>
          </div>
          <div className="col-xs-4">
            <center>
              <div>
                <img
                  src="https://legal251.com/images/services/value.svg"
                  style={{ width: "8vw", backgroundSize: "cover" }}
                />
                <p
                  style={{
                    marginTop: 8,
                    fontFamily: '"Roboto"',
                    fontWeight: 700,
                    lineHeight: "1.1",
                    fontSize: "2.2vw",
                    color: "#ffffff"
                  }}
                >
                  Care &amp; Regards
                </p>
                <p
                  style={{
                    marginTop: 5,
                    fontFamily: '"Roboto"',
                    fontWeight: 400,
                    lineHeight: "1.1",
                    fontSize: "2vw",
                    color: "#ffffff"
                  }}
                >
                  We believe you to be a part of this family and that all your
                  problems, as well as achievements, are our very own. Your
                  interests are ours and their fulfillment is at the top in our
                  regards.
                </p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <img
        src="https://legal251.com/images/services/Why choose us.svg"
        className="whychosseusmainimage"
      />
    </div>
   
    
  </div>
 
</div>

  
  </>
  )
}

export default GstReturnFiling