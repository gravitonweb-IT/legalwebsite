import React from 'react'

const MsmeUdhyanRegistration = () => {
  return (
    <>
   
   <div className="wrapper">
  <div style={{ position: "relative", overflowX: "hidden" }}>
  
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
        style={{ display: "none", marginTop: "-40px", padding: "2px 2px 1px" }}
      >
        <hr
          className="animationhr"
          id="nav_slide_click"
          style={{ top: "-35px", height: "33.5px" }}
        />
      </div>
      <div className="servicemaindiv2">
        <div className="companycustomcolrow">
          <div className="row ">
            <div className="col-md-7 companycustomcol1">
              <p className="peopletrusttext">
                <img src="https://legal251.com/images/companyregimage/Line.png" />
                <span>200k+</span> people trust us
              </p>
              <p className="companypageheading">MSME Registration</p>
              <p
                className="companypricetext reslinehight"
                style={{ marginTop: 15, marginBottom: "-4px" }}
              >
                Get MSME Registration{" "}
                <span className="companypricetextspan">@ Rs.1251 only /-</span>
                <span className="includegstline">
                  {" "}
                  &nbsp;( Including all Govt. fees &amp; GST )
                </span>
              </p>
              <br />
              <p className="companyaboutsectiontext">
                Reap the benefits under the MSMED Act from the Central or State
                Government and the Banking sector by registering yourself with
                Udyog Aadhaar or MSME Registration.
              </p>
              <br />
              <div className="row">
                <div className="col-sm-6 colpaddingzero2">
                  <p className="comapnydownloadappline">
                    Download The App Now!
                  </p>
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.legal251.in"
                  >
                    <img
                      src="https://legal251.com/images/companyregimage/Mask Group 5782.png"
                      className="getitgoogleplayimg"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://apps.apple.com/in/app/legal251-legal-service-more/id6443916709"
                  >
                    <img
                      src="https://legal251.com/images/companyregimage/badge-example-preferred.png"
                      className="getitplaystoreimg"
                    />
                  </a>
                </div>
                <div className="col-sm-6 colpaddingzero  cuscolpaddingzero">
                  <br /> <br />
                  <img
                    src="https://legal251.com/images/companyregimage/Group 9174.png"
                    className="googlereviewimg"
                  />
                </div>
              </div>
              <div className="startbusinessvideosection">
                <div className="startbusinessvideo">
                  <iframe
                    classname="embed-responsive-item"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 15,
                      boxShadow: "0px 0px 20px #0000001A"
                    }}
                    id="video"
                    allowscriptaccess="always"
                    src="https://www.youtube.com/embed/uECvGig9pJc?&modestbranding=1&showinfo=0"
                    allowFullScreen="allowfullscreen"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5 companycustomcol2">
              <div className="companyformouterdiv">
                <div className="companyformdiv" style={{ marginTop: 0 }}>
                  <p className="companyformdivheading">Get Quote Instantly</p>
                  <p className="companyformtext">Name *</p>
                  <input
                    type="text"
                    className="companyforminput"
                    placeholder="Enter your name"
                    style={{ textTransform: "capitalize" }}
                    maxLength={150}
                    pattern="[A-Za-z ]{3,150}"
                    id="name"
                    required=""
                  />
                  <p className="companyformtext">Contact Number *</p>
                  <input
                    type="text"
                    className="companyforminput"
                    placeholder="Enter your Contact Number"
                    pattern="[6-9]{1}[0-9]{9}"
                    maxLength={10}
                    id="contact"
                    required=""
                  />
                  <p className="companyformtext">Email *</p>
                  <input
                    type="text"
                    className="companyforminput"
                    placeholder="Enter your Email"
                    maxLength={50}
                    id="email"
                    required=""
                  />
                  <p className="companyformtext">City/district *</p>
                  <select
                    id="city"
                    className="credappfstate js-example-basic-single select2-hidden-accessible"
                    name="state"
                    required=""
                    data-select2-id="select2-data-city"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option
                      className="cities"
                      data-value=""
                      data-select2-id="select2-data-2-uklu"
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
                    data-select2-id="select2-data-1-vv9n"
                    style={{ width: "394.004px" }}
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
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                  <p className="companyformtext">Select category*</p>
                  <select className="companyforminput" id="applicationtype">
                    <option value="" id="selectOpt" selected="" disabled="">
                      Select category...
                    </option>
                    <option value={1}>Sole Proprietorship / Individual</option>
                    <option value={2}>Partnership / LLP</option>
                    <option value={3}>
                      Private limited / Public limited / One person company
                    </option>
                    <option value={4}>HUF</option>
                    <option value={5}>Society / Trust / Club</option>
                  </select>
                  <div
                    style={{ width: "100%", margin: 0, padding: 0, left: 0 }}
                  >
                    <p className="errorside">
                      <img
                        src="https://legal251.com/"
                        className="errorsideimg"
                      />
                    </p>
                  </div>
                  <center>
                    <button
                      className="companyformbtn"
                      style={{ marginTop: 15 }}
                      onclick="submitcontact()"
                      id="submit"
                    >
                      Get Started
                    </button>
                    <img
                      className="loader1"
                      style={{ display: "none" }}
                      src="https://legal251.com/images/homecontact/Rolling.svg"
                      alt=""
                    />
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="experiencecustomcolrow">
            <div className="row  pvtexperiencecustomcolrow" id="counter">
              <div className="col-md-2 col-xs-4 experiencecustomcol">
                <div className="experiencedisplay">
                  <div>
                    <img
                      src="https://legal251.com/images/companyregimage/employee-experience.png"
                      className="experienceimg1"
                      alt=""
                    />
                  </div>
                  <div className="experiencedisplaycol2">
                    <p className="experienceheading">
                      <span className="counter-value" data-count={10}>
                        0
                      </span>
                      Years
                    </p>
                    <p className="experienceheading2">Of Experience</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-4 experiencecustomcol">
                <div className="experiencedisplay">
                  <div>
                    <img
                      src="https://legal251.com/images/companyregimage/case-report.png"
                      className="experienceimg2"
                      alt=""
                    />
                  </div>
                  <div className="experiencedisplaycol2">
                    <p className="experienceheading">
                      <span className="counter-value" data-count={5000}>
                        0
                      </span>{" "}
                      +
                    </p>
                    <p className="experienceheading2">Cases Solved</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-4 experiencecustomcol">
                <div className="experiencedisplay">
                  <div>
                    <img
                      src="https://legal251.com/images/companyregimage/gold-cup.png"
                      className="experienceimg1"
                      alt=""
                    />
                  </div>
                  <div className="experiencedisplaycol2">
                    <p className="experienceheading">
                      <span className="counter-value" data-count={15}>
                        0
                      </span>
                      +
                    </p>
                    <p className="experienceheading2">Awards Gained</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-4 experiencecustomcol">
                <div className="experiencedisplay">
                  <div>
                    <img
                      src="https://legal251.com/images/companyregimage/users.png"
                      className="experienceimg1"
                      alt=""
                    />
                  </div>
                  <div className="experiencedisplaycol2">
                    <p className="experienceheading">
                      <span className="counter-value" data-count={200}>
                        0
                      </span>
                      k +
                    </p>
                    <p className="experienceheading2">Trusted Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-4 experiencecustomcol">
                <div className="experiencedisplay">
                  <div>
                    <img
                      src="https://legal251.com/images/companyregimage/customer.png"
                      className="experienceimg1"
                      alt=""
                    />
                  </div>
                  <div className="experiencedisplaycol2">
                    <p className="experienceheading">
                      <span className="counter-value" data-count={50}>
                        0
                      </span>
                      k+
                    </p>
                    <p className="experienceheading2">Queries Solved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="aboutsection">
        <div className="companyaboutsection">
          <div className="row">
            <div className="col-md-12">
              <br />
              <br />
              <p className="companyaboutsectiontext">
                Are you up to establishing your venture soon, then registering
                yourself under the MSMED Act and taking your business to new
                heights? MSME is known as the lifeline or backbone of the Indian
                economy. The Ministry of Micro, Small, Medium Enterprises aims
                to incentivize, facilitate, and boost the competitiveness of
                MSMEs working in Pan India. Registering yourself under the MSME
                Act and reap the benefits of the Central or State Government and
                the Banking Sector that will help you avail of credits,
                pre-approved loans, and subsidies from the Government. MSME
                registration is compulsory for all businesses to start and
                operate in India legally. So, get your MSME registration done
                with the help of the professionals of Legal251 and know about
                the much-arrived schemes and complete transparency of the
                government working process.
              </p>
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
          src="https://legal251.com/images/nda/MSME Registration.png"
          className="gsthowtoapplyimg"
        />
      </center>
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
                <p className="benefitscardtext"> Low-Interest Rate</p>
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
                <p className="benefitscardtext"> Credit Support Schemes</p>
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
                <p className="benefitscardtext"> Easy loan (in 59 minutes)</p>
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
                  Relaxation in Trademark Government Fees
                </p>
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
                <p className="benefitscardtext">No delayed payment </p>
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
                <p className="benefitscardtext">Tender Eligibility</p>
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
                <p className="benefitscardtext"> Reservation Benefits</p>
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
                  Participation in International Trade Fairs
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
                  No Stamp Duty &amp; Registration Charges
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
                <p className="benefitscardtext">Capital Subsidy</p>
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
                  Subsidy on Patent Registration{" "}
                </p>
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
          />{" "}
          Registration Process&nbsp;
        </p>
        <hr className="registrationhr1" />
        <hr className="registrationhr2" />
        <hr className="registrationhr3" />
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
                  <p className="Registrationprocesstext1 gstrtext1">
                    To keep you risk-free, our team will analyze your submitted
                    documents, looking for any misleading or incorrect
                    information.
                  </p>
                </center>
              </div>
              <div className="col-md-2 Registrationprocesscol2">
                <center>
                  <p className="Registrationprocesstext2 gstrtext2">
                    Our professionals are here to help you with document
                    requirements and licensing necessities.
                  </p>
                </center>
              </div>
              <div className="col-md-2 Registrationprocesscol3">
                <center>
                  <p className="Registrationprocesstext3 gstrtext3">
                    After Filing out the application form, a confirmation will
                    appear on the computer screen enclosing the reference
                    number.
                  </p>
                </center>
              </div>
              <div className="col-md-2 Registrationprocesscol4">
                <center>
                  <p className="Registrationprocesstext4 gstrtext4">
                    We recommend you wait until one of our experts contacts you
                    to let you know your certificate is ready. You can download
                    the MSME certificate from the account created by the Udyam
                    portal.
                  </p>
                </center>
              </div>
              <div className="col-md-2 Registrationprocesscol5">
                <center>
                  <p className="Registrationprocesstext5 gstrtext5">
                    We will also provide reference no. to you so you can track
                    your application status.
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
          />
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
                        Q1.Is Adhar Card mandatory for obtaining MSME
                        registration?
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
                      Yes, Adhar Card is one of India's most important documents
                      needed for MSME registration.
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
                        Q2. Can I apply for MSME registration if my mobile
                        number is not linked with my Adhar Card?
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
                      Yes, you can. But, this could be a lengthy process, so it
                      would be better to link your Adhar card with your active
                      mobile number for the fastest MSME registration.
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
                        Q3. What is the Validity of the MSME certificate?
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
                      The MSME registration comes with lifetime validity until
                      you cross the turnover criteria according to the MSMED
                      Act.
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
                        Q4. In how many days can I get my MSME certificate?
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
                      If all documents you provided are correct, you might get
                      your MSME certificate in 2 working days.
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
                        Q5. Who can apply for MSME registration?
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
                      The following entities can obtain the MSME certificate:
                      <br />
                      1) Sole Proprietorships
                      <br />
                      2) Private and Public Limited Companies
                      <br />
                      3) Individuals, Startups, MSMEs, business owners &amp;
                      entrepreneurs
                      <br />
                      4) Self-Help Groups (SHGs)
                      <br />
                      5) Partnership Firms
                      <br />
                      6) Cooperative Societies
                      <br />
                      7) Limited Liability Partnerships (LLPs)
                      <br />
                      8) Trusts and many other business entities
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
                        Q6. Where can I get my MSME certificate?
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
                      Once the registration process finishes, you will get the
                      MSME certificate at your registered email address.
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
                        Q7. Is CIBIL score or credit score mandatory for MSME
                        borrowers?
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
                      No, CIBIL or Credit score is not always mandatory for MSME
                      borrowers.
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
                        Q8. Do trading companies fall under MSME?
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
                      No. The MSME Act only covers the manufacturing and service
                      enterprises, and trading firms do not have permission to
                      get an MSME certificate.
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
                        Q9.Can I apply for MSME registration for my existing
                        business?
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
                      Yes, both New and Existing businesses can apply for the
                      MSME registration.
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
                        Q10.What is a Micro-enterprise?
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
                      Any manufacturing enterprise with the actual value of an
                      investment (in plant and machinery) is up to Rs. 25 lakh,
                      and any service enterprise with the original value of an
                      investment in equipment is up to Rs. 10 lakh.
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
                        For people like us who are surrounded by work, legal251
                        is like a gift. Be it a busy day, or a deadline,
                        legal251 can always be counted upon. The customer
                        service is always up to the mark and the advices and
                        solutions are always promising. Within 48 hrs of the
                        query you can have your solution in your hand, and all
                        this, just a few clicks away and inside your pocket.
                        Legal work is now on a whole different level.
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
                        process so convenient and also online makes it so easy
                        for everyone to work with. If talking about quality
                        work, they have absolutely no match. A platform as big
                        as Today's Bharat required a very complete and
                        descriptive terms of condition and privacy policy. This
                        was greatly achieved with the help of experts at{" "}
                        <br className="hidden-md" /> Legal251.
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
                        it in any legal domain they provide best solution for
                        your query.I am satisfied with their work. What i was
                        expecting i got it from Legal251. And I would really
                        appreciate their cooperative work and how they deal and
                        cooperate with their customers. They are the best in
                        business as you may know. There are many complications
                        in Filing GST &amp; Income Tax returns for jewellery
                        supply &amp; design business they make all these very
                        easy and efficient.
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
                        For people like us who are surrounded by work, legal251
                        is like a gift. Be it a busy day, or a deadline,
                        legal251 can always be counted upon. The customer
                        service is always up to the mark and the advices and
                        solutions are always promising. Within 48 hrs of the
                        query you can have your solution in your hand, and all
                        this, just a few clicks away and inside your pocket.
                        Legal work is now on a whole different level.
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
                        process so convenient and also online makes it so easy
                        for everyone to work with. If talking about quality
                        work, they have absolutely no match. A platform as big
                        as Today's Bharat required a very complete and
                        descriptive terms of condition and privacy policy. This
                        was greatly achieved with the help of experts at{" "}
                        <br className="hidden-md" /> Legal251.
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
                        it in any legal domain they provide best solution for
                        your query.I am satisfied with their work. What i was
                        expecting i got it from Legal251. And I would really
                        appreciate their cooperative work and how they deal and
                        cooperate with their customers. They are the best in
                        business as you may know. There are many complications
                        in Filing GST &amp; Income Tax returns for jewellery
                        supply &amp; design business they make all these very
                        easy and efficient.
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
                        For people like us who are surrounded by work, legal251
                        is like a gift. Be it a busy day, or a deadline,
                        legal251 can always be counted upon. The customer
                        service is always up to the mark and the advices and
                        solutions are always promising. Within 48 hrs of the
                        query you can have your solution in your hand, and all
                        this, just a few clicks away and inside your pocket.
                        Legal work is now on a whole different level.
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
                        process so convenient and also online makes it so easy
                        for everyone to work with. If talking about quality
                        work, they have absolutely no match. A platform as big
                        as Today's Bharat required a very complete and
                        descriptive terms of condition and privacy policy. This
                        was greatly achieved with the help of experts at{" "}
                        <br className="hidden-md" /> Legal251.
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
          />{" "}
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
                    We feel how much pain even a small problem or query can
                    cause, that is the reason we are available to support you
                    and solve any of such problems at every particular instance
                    in time.{" "}
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
                    our team members are always focused on taking care of even
                    the smallest of our clients' needs and requirements.
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
                    therefore we utilize every single penny that you pay us in
                    the most effective way possible hence providing the best
                    value for money.
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
                    interests are ours and their fulfillment is at the top in
                    our regards.
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
</div>

   
   
   
   </>
  )
}

export default MsmeUdhyanRegistration