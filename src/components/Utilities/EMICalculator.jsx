import React from 'react'

const EMICalculator = () => {
  return (
  <>
  
  <div className="wrapper">
  <div>
    <div className="wrapper page-section" id="overview">
      <div className="row r1 slower fadeInDown animated"></div>
    </div>
    <div className="sidebar-contact" style={{ display: "none" }}>
      <div
        className="toggle1"
        id="freeconsultationBtn"
        style={{ display: "none" }}
      >
        <img
          src="https://legal251.com/images/services/Icon_ionic-ios-arrow-back.svg"
          id="test123"
          style={{ height: 15, marginTop: 8 }}
        />
      </div>
      <a href="#overview">
        <p
          style={{
            color: "#f8951d",
            fontSize: 14,
            fontFamily: '"Gotham"',
            lineHeight: "2.5"
          }}
        >
          Free Consultation
        </p>
      </a>
    </div>
    <div
      className="input-group popupsearchbar"
      style={{ display: "none", position: "fixed", marginTop: 94 }}
    >
      <input
        type="text"
        id="pop-input"
        autoComplete="off"
        name="search_entered"
        className="form-control Searchbar1"
        placeholder="Search..."
        style={{ boxShadow: "none", borderColor: "#2d2d2d" }}
      />
      <div className="pop-data" style={{ position: "absolute" }}></div>
      <div className="input-group-btn">
        <div
          className="input-group-addon"
          id="hide"
          style={{ padding: 0, backgroundColor: "transparent", border: "none" }}
        >
          <div className="popupsearchbaraddon">
            <img
              src="https://legal251.com/images/closeicon.svg"
              className="subscribeemailclose"
            />
          </div>
        </div>
      </div>
    </div>
    <a
      href="https://legal251.com/gst-registration-hindi"
      className="languageicon langconv"
      style={{ top: 103 }}
    >
      हिंदी{" "}
      <img
        src="https://legal251.com/images/langicon.svg"
        className="langicon"
      />
    </a>
    <div className="sidebarmain" style={{ top: 0 }}>
      <img
        src="https://legal251.com/images/sidebarshape.png"
        style={{ position: "absolute", height: "100%", zIndex: -1 }}
      />
      <img
        src="https://legal251.com/images/cancel.svg"
        style={{
          cursor: "pointer",
          width: "3.6vh",
          marginTop: "1.5vh",
          zIndex: 100,
          marginLeft: "1.2vh",
          position: "absolute"
        }}
        onclick="closesidebarmain()"
      />
      <div style={{ paddingLeft: "5.9vh" }}>
        <div className="sidebarmainsection">
          <p className="sidebarmainheading">
            <a href="https://legal251.com/how-we-work">
              <img
                src="https://legal251.com/images/howwework.svg"
                className="sidebarimage2"
              />
            </a>
          </p>
          <center>
            <a
              className="sidebarmainheading"
              href="https://legal251.com/how-we-work"
              style={{ textAlign: "center", color: "#fff" }}
            >
              {" "}
              How we work
            </a>{" "}
          </center>
        </div>
        <div className="sidebarmainsection">
          <p className="sidebarmainheading">
            <a href="https://legal251.com/how-to-get-consultancy">
              <img
                src="https://legal251.com/images/howtogetcon.svg"
                className="sidebarimage1"
              />
            </a>
          </p>
          <center>
            <a
              className="sidebarmainheading"
              href="https://legal251.com/how-to-get-consultancy"
              style={{ lineHeight: "1.3", textAlign: "center", color: "#fff" }}
            >
              How to get <br />
              Consultancy
            </a>
          </center>
          <a
            className="sidebarmainheading"
            href="https://legal251.com/how-to-get-consultancy"
            style={{ lineHeight: "1.3", textAlign: "center", color: "#fff" }}
          ></a>
        </div>
        <div className="sidebarmainsection">
          <p className="sidebarmainheading">
            <a href="https://blog.legal251.com">
              <img
                src="https://legal251.com/images/blog.svg"
                className="sidebarimage1"
              />
            </a>
          </p>
          <center>
            <a
              className="sidebarmainheading"
              href="https://legal251.com/resources/"
              style={{ textAlign: "center", color: "#fff" }}
            >
              Blog
            </a>{" "}
          </center>
        </div>
        <div className="sidebarmainsection">
          <p className="sidebarmainheading">
            <a href="https://legal251.com/about">
              <img
                src="https://legal251.com/images/aboutus.svg"
                className="sidebarimage1"
              />
            </a>
          </p>
          <center>
            {" "}
            <a
              className="sidebarmainheading"
              href="https://legal251.com/about"
              style={{ textAlign: "center", color: "#fff" }}
            >
              About Us
            </a>
          </center>
        </div>
        <div className="sidebarmainsection">
          <p className="sidebarmainheading">
            <a href="https://legal251.com/contact">
              <img
                src="https://legal251.com/images/contactus.svg"
                className="sidebarimage2"
              />
            </a>
          </p>
          <center>
            <a
              className="sidebarmainheading"
              href="https://legal251.com/contact"
              style={{ textAlign: "center", color: "#fff" }}
            >
              Contact Us
            </a>{" "}
          </center>
        </div>
      </div>
    </div>
    <noscript>
      &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N37QCKM"
      height="0" width="0"
      style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
    </noscript>
    <nav
      className="navbar navbar-default bootsnav on no-full"
      id="nav1"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 10,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 1px 29px -6px"
      }}
    >
      <div
        className="trackserviceheader"
        id="trackservicediv"
        style={{ display: "block" }}
      >
        <div className="phonenoheader">
          <a
            target="_blank"
            href="https://wa.me/917772877729/?text=917772877729&text=Hello%20Team%20Legal251!"
          >
            {" "}
            <img
              className="phonenoheaderwhatsapp"
              src="https://legal251.com/images/whatsapp.svg"
            />{" "}
          </a>
          &nbsp;&nbsp;{" "}
          <a style={{ color: "#2d2d2d" }} href="tel:7772877729">
            {" "}
            <img
              src="https://legal251.com/images/phoneno.svg"
              className="phonenoheaderlogo"
            />
            (+91)77728-77729{" "}
          </a>
        </div>
        <div className="dropdown mydropdownclass" style={{ color: "#2d2d2d" }}>
          <button
            className="userloginbutton  dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            Login{" "}
            <img
              src="https://legal251.com/images/common/login.svg"
              className="userloginicon"
            />
          </button>
          <ul className="dropdown-menu dropdown-menu2   specialdropul2">
            <li>
              <a href="https://user.legal251.com/">
                <img
                  src="https://legal251.com/images/common/Path_1.svg"
                  className="userlogindropicon"
                />
                &nbsp;User Login
              </a>
            </li>
            <li>
              <a href="https://partners.legal251.com/">
                <img
                  src="https://legal251.com/images/common/agent.svg"
                  className="userlogindropicon2"
                />
                &nbsp;Partner Login
              </a>
            </li>
          </ul>
        </div>
        <a
          href="https://legal251.com/track-service"
          style={{ color: "#2d2d2d" }}
        >
          <button className="trackservicebutton">
            <p style={{ display: "inline-block", top: 0 }}>
              Track
              <br /> Service
            </p>
            <img
              src="https://legal251.com/images/trackservice.svg"
              className="trackserviceicon"
            />
          </button>
        </a>
        <div className="trackservicebuttonmobdiv dropdown">
          <button
            className="trackservicebuttonmob dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            User Services
            <img
              src="https://legal251.com/images/common/Group_7.svg"
              className="userloginicon"
            />
          </button>
          <ul className="dropdown-menu dropdown-menu-right specialdropul">
            <li>
              <a href="https://user.legal251.com/">
                <img
                  src="https://legal251.com/images/common/Path_1.svg"
                  className="userlogindropicon"
                />{" "}
                &nbsp;User Login
              </a>
            </li>
            <li>
              <a href="https://legal251.com/track-service">
                <img
                  src="https://legal251.com/images/common/Group_3.svg"
                  className="userlogindropicon"
                />{" "}
                &nbsp;Track Service
              </a>
            </li>
            <li>
              <a href="https://partners.legal251.com/">
                <img
                  src="https://legal251.com/images/common/agent.svg"
                  className="userlogindropicon2"
                />
                &nbsp;Partner Login
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="attr-nav">
          <ul className="pal" style={{ marginTop: 13 }}>
            <li className="search">
              <a href="#" style={{ marginTop: 2 }}>
                <img
                  src="https://legal251.com/images/sidesearchicon.svg"
                  className="navSearchbaricon"
                  id="show"
                  style={{ width: 20, marginTop: 24 }}
                />
              </a>
            </li>
            <li className="menu">
              <a style={{ marginTop: 3 }}>
                <img
                  src="https://legal251.com/images/star.svg"
                  className="sidemenuicon burger1"
                  style={{ width: 23, cursor: "pointer", marginTop: 22 }}
                />
              </a>
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
          <a className="navbar-brand" href="https://legal251.com">
            <center>
              <img
                src="https://legal251.com/images/common/legal.svg"
                className="logo mainlogo"
                alt=""
                style={{ width: 207, marginTop: 2 }}
              />
            </center>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="nav navbar-nav navbar-right" data-in="" data-out="">
            <li className="dropdown megamenu-fw ">
              <a
                href="#"
                className="dropdown-toggle mytext m_togle"
                style={{ marginTop: 50, paddingBottom: 8 }}
              >
                Start Business
                <i
                  className="fa fa-angle-down down_arrow_hide"
                  aria-hidden="true"
                  style={{ display: "inline-block" }}
                />
              </a>
              <ul
                className="bimage dropdown-menu megamenu-content animated"
                role="menu"
              >
                <li className="allcontent allcontent12">
                  <div className="row ">
                    <div className="col-menu col-md-5">
                      <div className="megamenu_heading">
                        <img
                          className="megamenu_title_img"
                          src="https://legal251.com/images/megamenubimage/Group_5675.png"
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
                            <a
                              className="text"
                              href="https://legal251.com/partnership-deed"
                            >
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/partnership-deed.svg"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                Partnership Deed
                              </span>
                            </a>
                          </li>
                          <li className="incontent">
                            <a
                              className="text"
                              href="https://legal251.com/private-limited-company-registration"
                            >
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/company-reg.svg"
                                loading="lazy"
                              />{" "}
                              <span className="hvr-sweep-to-right textres">
                                Pvt. Ltd. Company Registration
                              </span>
                            </a>
                          </li>
                          <li className="incontent">
                            <a
                              className="text"
                              href="https://legal251.com/section-8-company-registration"
                            >
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/section8-reg.svg"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                Section 8 Company Registration
                              </span>
                            </a>
                          </li>
                          <li className="incontent">
                            <a
                              className="text"
                              href="https://legal251.com/llp-company-registration"
                            >
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/llp.svg"
                                loading="lazy"
                              />{" "}
                              <span className="hvr-sweep-to-right textres">
                                LLP Company Registration
                              </span>
                            </a>
                          </li>
                          <li className="incontent">
                            <a
                              className="text"
                              href="https://legal251.com/opc-one-person-company-registration"
                            >
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/opc.svg"
                                loading="lazy"
                              />{" "}
                              <span className="hvr-sweep-to-right textres">
                                OPC Company Registration
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-menu col-md-5">
                      <div className="megamenu_heading">
                        <img
                          className="megamenu_title_img"
                          src="https://legal251.com/images/megamenubimage/Group_5675.png"
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
                            <a className="text" href="/annual-compliance-llp">
                              {" "}
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/newicons/annualcompliancellp.svg"
                                loading="lazy"
                              />{" "}
                              <span className="hvr-sweep-to-right textres">
                                Annual Compliance LLP
                              </span>
                            </a>
                          </li>
                          <li className="incontent">
                            <a
                              className="text"
                              href="/annual-compliance-company"
                            >
                              {" "}
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/newicons/AnnualCompliancePvt.Ltd..svg"
                                loading="lazy"
                              />{" "}
                              <span className="hvr-sweep-to-right textres">
                                Annual Compliance Pvt. Ltd.
                              </span>
                            </a>
                          </li>
                          <li className="incontent">
                            <a className="text" href="/cma-report">
                              {" "}
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/newicons/CMAReport.svg"
                                loading="lazy"
                              />{" "}
                              <span className="hvr-sweep-to-right textres">
                                CMA Report
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="dropdown megamenu-fw ">
              <a
                href="#"
                className="dropdown-toggle mytext5 m_togle"
                style={{ marginTop: 50, paddingBottom: 8 }}
              >
                Change in Business
                <i
                  className="fa fa-angle-down down_arrow_hide"
                  aria-hidden="true"
                  style={{ display: "inline-block" }}
                />
              </a>
              <ul
                className="bimage dropdown-menu megamenu-content lopadd animated"
                role="menu"
              >
                <li className="allcontent newincontent allcontent12">
                  <div className="row col-menu">
                    <div className="megamenu_heading">
                      <img
                        className="megamenu_title_img"
                        src="https://legal251.com/images/megamenubimage/Group_5675.png"
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
                                  src="https://legal251.com/images/icons/Group 5917.svg"
                                  loading="lazy"
                                />
                              </div>
                              <div>
                                <a
                                  className="text"
                                  href="https://legal251.com/dissolution-of-deed"
                                >
                                  <span className="hvr-sweep-to-right textres">
                                    Dissolution of deeds
                                  </span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="incontent">
                            <div style={{ display: "flex" }}>
                              <div>
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/newicons/AddressAmendmentWithinstate(LLP).svg"
                                  loading="lazy"
                                />
                              </div>
                              <div>
                                <a
                                  className="text"
                                  href="/address-amendment-within-state-llp"
                                >
                                  <span className="hvr-sweep-to-right textres">
                                    {" "}
                                    Address Amendment Within state (LLP)
                                  </span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="incontent">
                            <div style={{ display: "flex" }}>
                              <div>
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/newicons/AddressAmendmentWithinstate(Company).svg"
                                  loading="lazy"
                                />
                              </div>
                              <div>
                                <a
                                  className="text"
                                  href="/address-amendment-within-state-company"
                                >
                                  <span className="hvr-sweep-to-right textres">
                                    {" "}
                                    Address Amendment Within state (Company)
                                  </span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="incontent">
                            <div style={{ display: "flex" }}>
                              <div>
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/newicons/AddressAmendmentoutofstate(LLP).svg"
                                  loading="lazy"
                                />
                              </div>
                              <div>
                                <a
                                  className="text"
                                  href="/address-amendment-out-state-llp"
                                >
                                  <span className="hvr-sweep-to-right textres">
                                    Address Amendment out of state (LLP)
                                  </span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="incontent">
                            <div style={{ display: "flex" }}>
                              <div>
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/newicons/AddressAmendmentoutofstate(Company).svg"
                                  loading="lazy"
                                />
                              </div>
                              <div>
                                <a
                                  className="text"
                                  href="/address-amendment-out-state-company"
                                >
                                  <span className="hvr-sweep-to-right textres">
                                    {" "}
                                    Address Amendment out of state (Company)
                                  </span>
                                </a>
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
                            <a className="text" href="/add-director">
                              {" "}
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/newicons/AddDirector(company).svg"
                                loading="lazy"
                              />{" "}
                              <span className="hvr-sweep-to-right textres">
                                Add Director (company)
                              </span>
                            </a>
                          </li>
                          <li className="incontent">
                            <a className="text" href="/add-partner">
                              {" "}
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/newicons/AddPartner(LLP).svg"
                                loading="lazy"
                              />{" "}
                              <span className="hvr-sweep-to-right textres">
                                Add Partner (Company)
                              </span>
                            </a>
                          </li>
                          <li className="incontent">
                            <div style={{ display: "flex" }}>
                              <div>
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/newicons/IncreaseCapital(LLP).svg"
                                  loading="lazy"
                                />
                                &nbsp;
                              </div>
                              <div>
                                <a
                                  className="text"
                                  href="/increase-capital-llp"
                                >
                                  {" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Increase Capital (LLP)
                                  </span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="incontent">
                            <a className="text" href="/change-in-name-llp">
                              {" "}
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/newicons/ChangeInNameofLLP.svg"
                                loading="lazy"
                              />{" "}
                              <span className="hvr-sweep-to-right">
                                Change In Name of LLP
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-menu col-md-4 dview">
                      <div className="content">
                        <ul className="menu-col" id="id01">
                          <li className="incontent">
                            <a className="text" href="/remove-director">
                              {" "}
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/newicons/removeDirector(company).svg"
                                loading="lazy"
                              />{" "}
                              <span className="hvr-sweep-to-right">
                                Remove Director (Company)
                              </span>
                            </a>
                          </li>
                          <li className="incontent">
                            <a className="text" href="/remove-partner">
                              {" "}
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/newicons/RemovePartner(LLP).svg"
                                loading="lazy"
                              />{" "}
                              <span className="hvr-sweep-to-right textres">
                                Remove Partner (LLP)
                              </span>
                            </a>
                          </li>
                          <li className="incontent">
                            <div style={{ display: "flex" }}>
                              <div>
                                <img
                                  className="megamenu_iconspecial"
                                  src="https://legal251.com/images/icons/newicons/IncreaseCapital(Company).svg"
                                  loading="lazy"
                                />
                                &nbsp;
                              </div>
                              <div>
                                <a
                                  className="text"
                                  href="/increase-capital-company"
                                >
                                  {" "}
                                  <span className="hvr-sweep-to-right textres">
                                    Increase Capital (Company)
                                  </span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="incontent">
                            <a className="text" href="/change-in-name-company">
                              {" "}
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/newicons/ChangeInNameofCompany.svg"
                                loading="lazy"
                              />{" "}
                              <span className="hvr-sweep-to-right textres">
                                Change In Name of Company
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="dropdown megamenu-fw">
              <a
                href="#"
                className="dropdown-toggle mytext1 m_togle"
                style={{ marginTop: 50, paddingBottom: 8 }}
              >
                Registrations
                <i
                  className="fa fa-angle-down down_arrow_hide"
                  aria-hidden="true"
                  style={{ display: "inline-block" }}
                />
              </a>
              <ul
                className="bimage dropdown-menu megamenu-content rpadd animated"
                role="menu"
              >
                <li className="allcontent incontentnew allcontent12">
                  <div className="row">
                    <div className="row col-menu">
                      <div className="megamenu_heading">
                        <img
                          className="megamenu_title_img"
                          src="https://legal251.com/images/megamenubimage/Group_5675.png"
                          loading="lazy"
                        />
                        <div>
                          <span className="title mtitle">Registrations </span>
                        </div>
                        <hr className="reheadinghr" />
                      </div>
                      <div className="col-menu col-md-4 dview">
                        <div className="content">
                          <ul className="menu-col" id="id01">
                            <li className="incontent">
                              <a
                                className="text"
                                href="https://legal251.com/import-export-license"
                              >
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/NoPath - Copy (4).svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  Import Export License (IEC)
                                </span>
                              </a>
                            </li>
                            <li className="incontent">
                              <a
                                className="text"
                                href="https://legal251.com/icegate-registration"
                              >
                                {" "}
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/Group 5910.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  ICEGATE Registration
                                </span>{" "}
                              </a>
                            </li>
                            <li className="incontent">
                              <a
                                className="text"
                                href="https://legal251.com/msme-udhyam-registration"
                              >
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/Group 5911.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  MSME Registration
                                </span>
                              </a>
                            </li>
                            <li className="incontent">
                              <a
                                className="text"
                                href="https://legal251.com/society-registration"
                              >
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/Group 5912.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  Society Registration
                                </span>
                              </a>
                            </li>
                            <li className="incontent">
                              <a
                                className="text"
                                href="https://legal251.com/pf-registration"
                              >
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/Group 5913.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  PF Registration
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-4 dview">
                        <div className="content">
                          <ul className="menu-col" id="id01">
                            <li className="incontent">
                              <a
                                href="https://legal251.com/professional-tax-registration"
                                className="singlemenua"
                              >
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/proffessional.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  Professional Tax Registration
                                </span>{" "}
                              </a>
                            </li>
                            <li className="incontent">
                              <a
                                href="https://legal251.com/gumasta-licence"
                                className="singlemenua"
                              >
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/Group_5632_1.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  Gumasta License
                                </span>
                              </a>
                            </li>
                            <li className="incontent">
                              <a
                                href="https://legal251.com/trademark-registration"
                                className="singlemenua"
                              >
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/Group_3625_2.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  Trade Mark Registration
                                </span>{" "}
                              </a>{" "}
                            </li>
                            <li className="incontent">
                              <a
                                href="https://legal251.com/esic-registration"
                                className="singlemenua"
                              >
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/Group_6897.png"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  ESIC Registration
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-4 dview">
                        <div className="content">
                          <ul className="menu-col" id="id01">
                            <li className="incontent">
                              <a
                                href="https://legal251.com/gst-registration"
                                className="singlemenua"
                              >
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/Group 5915.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  GST Registration
                                </span>
                              </a>
                            </li>
                            <li className="incontent">
                              <a
                                href="https://legal251.com/food-licence"
                                className="singlemenua"
                              >
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/Group_5645_1.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  Food Licence
                                </span>{" "}
                              </a>
                            </li>
                            <li className="incontent">
                              <a
                                href="https://legal251.com/trade-licence"
                                className="singlemenua"
                              >
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/Group_5631_1.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  Trade Licence
                                </span>
                              </a>
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
              <a
                href="#"
                className="dropdown-toggle mytext2 m_togle"
                style={{ marginTop: 50, paddingBottom: 8 }}
              >
                Filing &amp; More
                <i
                  className="fa fa-angle-down down_arrow_hide"
                  aria-hidden="true"
                  style={{ display: "inline-block" }}
                />
              </a>
              <ul
                className="bimage dropdown-menu megamenu-content animated"
                role="menu"
              >
                <li className="allcontent allcontent12">
                  <div className="row">
                    <div className="row col-menu m_mar">
                      <div className="col-menu col-md-4 col-lg-5 pleft fpadd ">
                        <div className="megamenu_heading">
                          <img
                            className="megamenu_title_img"
                            src="https://legal251.com/images/megamenubimage/Group_5675.png"
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
                              <a href="https://legal251.com/gst-return-filing">
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/Group_3506_1.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  GST Return Filing
                                </span>
                              </a>
                            </li>
                            <li className="incontent">
                              <a href="https://legal251.com/income-tax-return-filing">
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/Group_3507_1.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  ITR Filing
                                </span>{" "}
                              </a>
                            </li>
                            <li className="incontent">
                              <a href="https://legal251.com/tds-return-filing">
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/icons/newicons/tdsrf.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  TDS Return Filing
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-3 col-lg-3 pleft ">
                        <div className="megamenu_heading">
                          <img
                            className="megamenu_title_img"
                            src="https://legal251.com/images/megamenubimage/Group_5675.png"
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
                              <a href="https://legal251.com/online-accounting">
                                <img
                                  className="megamenu_icon megamenu_iconspecial"
                                  src="https://legal251.com/images/icons/Layer_2_1.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  Online Accounting
                                </span>
                              </a>
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
              <a
                href="#"
                className="dropdown-toggle mytext3 m_togle"
                style={{ marginTop: 50, paddingBottom: 8 }}
              >
                Drafting{" "}
                <i
                  className="fa fa-angle-down down_arrow_hide"
                  aria-hidden="true"
                  style={{ display: "inline-block" }}
                />
              </a>
              <ul
                className="bimage dropdown-menu megamenu-content dpadd animated"
                role="menu"
              >
                <li className="allcontent newincontent allcontent12">
                  <div className="row col-menu">
                    <div className="megamenu_heading">
                      <img
                        className="megamenu_title_img"
                        src="https://legal251.com/images/megamenubimage/Group_5675.png"
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
                            <a
                              href="https://legal251.com/legal-drafting"
                              className="singlemenua"
                            >
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/movie-copyright_1.svg"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                Legal Drafting
                              </span>{" "}
                            </a>
                          </li>
                          <li className="incontent">
                            <a
                              href="https://legal251.com/rent-agreement"
                              className="singlemenua"
                            >
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/Group 5918.svg"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                Rent Agreement
                              </span>{" "}
                            </a>
                          </li>
                          <li className="incontent">
                            <a
                              href="https://legal251.com/noc-no-objection-certificate"
                              className="singlemenua"
                            >
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/Group 5919.svg"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                {" "}
                                NOC
                              </span>
                            </a>
                          </li>
                          <li className="incontent">
                            <a
                              href="https://legal251.com/affidavit"
                              className="singlemenua"
                            >
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/Group 5920.svg"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                Affidavit
                              </span>{" "}
                            </a>
                          </li>
                          <li className="incontent">
                            <a
                              href="https://legal251.com/power-of-attorney"
                              className="singlemenua"
                            >
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/Group 5921.svg"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                Power of Attorney
                              </span>{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-menu col-md-5">
                      <div className="content">
                        <ul className="menu-col" id="id01">
                          <li className="incontent">
                            <a
                              href="https://legal251.com/will"
                              className="singlemenua"
                            >
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/NoPath - Copy (17).svg"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right">Will</span>{" "}
                            </a>
                          </li>
                          <li className="incontent">
                            <a
                              href="https://legal251.com/application"
                              className="singlemenua"
                            >
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/appf.svg"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                Application Form
                              </span>{" "}
                            </a>
                          </li>
                          <li className="incontent">
                            <a href="https://legal251.com/nda-non-disclosure-agreement-online">
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/nda.png"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                NDA Drafting
                              </span>{" "}
                            </a>
                          </li>
                          <li className="incontent">
                            <a href="https://legal251.com/privacy-policy-drafting-online">
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/user-privacy_1.svg"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                Privacy Policy Drafting
                              </span>
                            </a>
                          </li>
                          <li className="incontent">
                            <a href="https://legal251.com/terms-and-conditions-drafting-online">
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/tnc.png"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                Terms and Conditions Drafting
                              </span>{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="dropdown megamenu-fw ">
              <a
                href="#"
                className="dropdown-toggle mytext4 m_togle"
                style={{ marginTop: 50, paddingBottom: 8 }}
              >
                Legal Issues{" "}
                <i
                  className="fa fa-angle-down down_arrow_hide"
                  aria-hidden="true"
                  style={{ display: "inline-block" }}
                />
              </a>
              <ul
                className="bimage dropdown-menu megamenu-content lepadd animated"
                role="menu"
              >
                <li className="allcontent newincontent allcontent12">
                  <div className="row">
                    <div className="col-menu col-md-4">
                      <div className="megamenu_heading">
                        <img
                          src="https://legal251.com/images/megamenubimage/Group_5675.png"
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
                            <a href="https://legal251.com/legal-notice-reply">
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/legalreply.svg"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                Legal Notice Reply
                              </span>{" "}
                            </a>
                          </li>
                          <li className="incontent">
                            <a href="https://legal251.com/legal-claim-help">
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/baggage-claim.svg"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                Legal Advice
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-menu col-md-4">
                      <div className="megamenu_heading">
                        <img
                          src="https://legal251.com/images/megamenubimage/Group_5675.png"
                          loading="lazy"
                        />
                        <div>
                          <span className="title mtitle">Legal Notice </span>
                        </div>
                        <hr className="headinghr" />
                      </div>
                      <div className="content le_cpadd">
                        <ul className="menu-col" id="id01">
                          <li className="incontent">
                            <a href="https://legal251.com/legal-notice">
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/help.png"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                Legal Notice Prepration
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="dropdown megamenu-fw ">
              <a
                href="#"
                className="dropdown-toggle mytext6 m_togle"
                style={{ marginTop: 50, paddingBottom: 8 }}
              >
                Other Services
                <i
                  className="fa fa-angle-down down_arrow_hide"
                  aria-hidden="true"
                  style={{ display: "inline-block" }}
                />
              </a>
              <ul
                className="bimage dropdown-menu megamenu-content opadd animated"
                role="menu"
              >
                <li className="allcontent newincontent allcontent12">
                  <div className="row">
                    <div className="col-menu col-md-5 pleft">
                      <div className="megamenu_heading">
                        <img src="https://legal251.com/images/megamenubimage/Group_5675.png" />
                        <div>
                          <span className="title mtitle">Other Services</span>
                        </div>
                        <hr className="headinghr" />
                      </div>
                      <div className="content o_cpadd">
                        <ul className="menu-col" id="id01">
                          <li className="incontent">
                            <a href="https://legal251.com/balance-sheet-prepration">
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/Group 5926.svg"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                {" "}
                                Balance Sheet Preparation &amp; P&amp;L
                              </span>
                            </a>
                          </li>
                          <li className="incontent">
                            <a href="https://legal251.com/project-report-prepration">
                              <img
                                className="megamenu_icon"
                                src="https://legal251.com/images/icons/Group 5927.svg"
                                loading="lazy"
                              />
                              <span className="hvr-sweep-to-right textres">
                                Project Report Preparation
                              </span>{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="dropdown megamenu-fw ">
              <a
                href="#"
                className="dropdown-toggle mytext7 m_togle"
                style={{ marginTop: 50, paddingBottom: 8 }}
              >
                Utilities
                <i
                  className="fa fa-angle-down down_arrow_hide"
                  aria-hidden="true"
                  style={{ display: "inline-block" }}
                />
              </a>
              <ul
                className="bimage dropdown-menu megamenu-content opadd animated"
                role="menu"
              >
                <li className="allcontent newincontent allcontent12">
                  <div className="row">
                    <div className="col-menu">
                      <div className="megamenu_heading">
                        <img src="https://legal251.com/images/megamenubimage/Group_5675.png" />
                        <div>
                          <span className="title mtitle">Utilities </span>
                        </div>
                        <hr className="headinghr" />
                      </div>
                      <div className="col-menu col-md-4 dcol">
                        <div className="content lo_cpadd">
                          <ul className="menu-col" id="id01">
                            <li className="incontent">
                              <a href="https://legal251.com/GST-calculator">
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/calculator_icons/gst.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  GST Calculator
                                </span>{" "}
                              </a>
                            </li>
                            <li className="incontent">
                              <a href="https://legal251.com/SIP-calculator">
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/calculator_icons/sip.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  SIP Calculator
                                </span>{" "}
                              </a>
                            </li>
                            <li className="incontent">
                              <a href="https://legal251.com/EMI-calculator">
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/calculator_icons/interest.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  EMI Calculator
                                </span>{" "}
                              </a>
                            </li>
                            <li className="incontent">
                              <a href="https://legal251.com/FD-calculator">
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/calculator_icons/fd.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  FD Calculator
                                </span>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-4">
                        <div className="content lo_cpadd">
                          <ul className="menu-col" id="id01">
                            <li className="incontent">
                              <a href="https://legal251.com/80U-calculator">
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/calculator_icons/Group_6457.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  80U Calculator
                                </span>{" "}
                              </a>
                            </li>
                            <li className="incontent">
                              <a href="https://legal251.com/HRA-calculator">
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/calculator_icons/hra.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  HRA Calculator
                                </span>{" "}
                              </a>
                            </li>
                            <li className="incontent">
                              <a href="https://legal251.com/simple-interest">
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/calculator_icons/interest-rate.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  Simple Interest Calculator
                                </span>{" "}
                              </a>
                            </li>
                            <li className="incontent">
                              <a href="https://legal251.com/capital-gain-calulator">
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/calculator_icons/capital_gain.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  Capital Gain Calculator
                                </span>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-4">
                        <div className="content lo_cpadd">
                          <ul className="menu-col" id="id01">
                            <li className="incontent">
                              <a href="https://legal251.com/TDS-calculator">
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/calculator_icons/tds.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  TDS Calculator
                                </span>{" "}
                              </a>
                            </li>
                            <li className="incontent">
                              <a href="https://legal251.com/PPF-calculator">
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/calculator_icons/ppf.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  PPF Calculator
                                </span>{" "}
                              </a>
                            </li>
                            <li className="incontent">
                              <a href="https://legal251.com/Gratuity-calculator">
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/calculator_icons/gratuaty.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  Gratuity Calculator
                                </span>
                              </a>
                            </li>
                            <li className="incontent">
                              <a href="https://legal251.com/RD-calculator">
                                <img
                                  className="megamenu_icon"
                                  src="https://legal251.com/images/calculator_icons/rd.svg"
                                  loading="lazy"
                                />
                                <span className="hvr-sweep-to-right textres">
                                  RD Calculator
                                </span>{" "}
                              </a>
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
    <br />
    <img
      src="https://legal251.com/images/services/Group 887.svg"
      style={{
        width: 40,
        marginTop: 6,
        marginLeft: "12.5px",
        visibility: "hidden"
      }}
    />
    <div className="servicebrhide">
      <br />
    </div>
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
    </div>
    <div>
      <div className="Emi_main" />
      <div className="emiback">
        <div className="Emi_cal emi_cal_container">
          <center>
            <img
              className="emi_top_img"
              src="https://legal251.com/images/calculator_img/EMI_head_img.png"
              alt="head_emi_image"
            />
          </center>
          <center></center>
          <center>
            <p className="Emi_p">
              Plan your loan quickly with the easiest online EMI Calculator
              while getting accurate results every time. Save your time, and
              plan better.
            </p>
          </center>
          <div className="main_content">
            <div className="row mainrow">
              <div className="col-md-6 col-lg-4 col-xl-4">
                <div className="">
                  <div>
                    <div className="deposit_amount fd_deposit_am mb-0 loan_amount_emi">
                      <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <lable className="time_p_emi">
                            Loan amount<span>*</span>
                          </lable>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <div className="input-group deposit_amount2">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="basic-addon1"
                              >
                                <img src="https://legal251.com/images/calculator_img/Rupeeimg.svg" />
                              </span>
                            </div>
                            <input
                              type="number"
                              className="form-control fd_deposit_amount_input emi_loan_a rangeval"
                              id="deposit_am"
                              placeholder="Enter loan amount"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              onkeypress="if(this.value.length==10) return false;"
                            />
                          </div>
                          <div className="loan_am_v">
                            <span>Please enter loan amount</span>
                          </div>
                          <div className="valid_f0_emi_l_am">
                            <span>
                              Please enter greater than ₹ 0 loan amount
                            </span>
                          </div>
                          <div className="valid_f10c_emi_l_am">
                            <span>
                              Please enter less than and equal to ₹ 10 Cr loan
                              amount
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <input
                        id="emi_loan_a_range"
                        className="slider styled-slider slider-progress deposit_am_range"
                        min={0}
                        max={100000000}
                        type="range"
                      />
                      <div className="smallval">
                        <p>₹ 0</p>
                        <p>₹ 10 Cr</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="time_period fd_time_period emi_amount_b mb-0">
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <lable className="time_p_emi">
                          Rate of Interest<span>*</span>
                        </lable>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="input-group time_period2">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              <img src="https://legal251.com/images/calculator_img/per_icon.svg" />
                            </span>
                          </div>
                          <input
                            type="number"
                            className="form-control fd_time_period_input emi_amount rangeval2"
                            id="time_period"
                            placeholder="Enter rate of interest"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onkeypress="if(this.value.length==10) return false;"
                          />
                        </div>
                        <div className="emi_am_v">
                          <span>Please enter rate of interest</span>
                        </div>
                        <div className="valid_f0_emi_am valid_f0_emi_am_fm">
                          <span>
                            Please enter greater than 0% rate of interest
                          </span>
                        </div>
                        <div className="valid_f10c_emi_am valid_f10c_emi_am_fm">
                          <span>
                            Please enter less than 51% rate of interest
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <input
                      id="emi_amount_range"
                      defaultValue={0}
                      className="slider styled-slider slider-progress fd_time_period_range"
                      min={0}
                      max={50}
                      type="range"
                    />
                    <div className="smallval">
                      <p>0%</p>
                      <p>50%</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="time_period fd_time_period emi_time_peiod_b mb-0">
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <lable className="time_p_emi">
                          Time Period<span>*</span>
                        </lable>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="input-group time_period2">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              <img src="https://legal251.com/images/calculator_img/sip_cal_icon.svg" />
                            </span>
                          </div>
                          <input
                            type="number"
                            className="form-control fd_time_period_input emi_time_peiod rangeval3"
                            id="time_period"
                            placeholder="Enter time period"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onkeypress="if(this.value.length==3) return false;"
                          />
                        </div>
                        <div className="time_p_emi_v">
                          <span>Please enter time period</span>
                        </div>
                        <div className="valid_0time_per_emi">
                          <span>Please enter greater than 0 time period</span>
                        </div>
                        <div className="valid_30timr_per_emi">
                          <span>Please enter less than 51 time period</span>
                        </div>
                        <div className="valid_600m_timr_per_emi">
                          <span>Please enter less than 600 time period</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <input
                      id="emi_time_peiod_range"
                      defaultValue={0}
                      className="slider styled-slider slider-progress fd_time_period_range"
                      min={1}
                      max={50}
                      type="range"
                    />
                    <div className="smallval">
                      <p className="check_emi_my_s">1 Year</p>
                      <p className="check_emi_my_g">50 Years</p>
                    </div>
                  </div>
                  <div className="btn-container emi_btn_container">
                    <div className="switches-container">
                      <input
                        type="radio"
                        className="fdtoggle"
                        id="switchMonthly"
                        name="switchPlan"
                        defaultValue="Year"
                        defaultChecked=""
                      />
                      <input
                        type="radio"
                        className="fdtoggle"
                        id="switchYearly"
                        name="switchPlan"
                        defaultValue="Month"
                      />
                      <label htmlFor="switchMonthly">Year</label>
                      <label htmlFor="switchYearly">Month</label>
                      <div className="switch-wrapper">
                        <div className="switch">
                          <div>
                            <img src="https://legal251.com/images/calculator_img/toggleswitchimg.svg" />{" "}
                            Year
                          </div>
                          <div>
                            <img src="https://legal251.com/images/calculator_img/toggleswitchimg.svg" />{" "}
                            Month
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <center>
                      <button id="calculate_emi_btn" onclick="calculateemi()">
                        Calculate
                      </button>
                    </center>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-4">
                <div className="bg_inp">
                  <p id="M_Emi">Monthly EMI</p>
                  <h4 className="M_Emi_h4 monthly_emi_res">₹ 0/-</h4>
                  <p id="M_Emi">Total Interest</p>
                  <h4 className="M_Emi_h4 total_int_emi_res">₹ 0/-</h4>
                  <p id="M_Emi">Total Payment</p>
                  <h4 className="M_Emi_h4 total_am_emi_res">₹ 0/-</h4>
                </div>
              </div>
              <div className=" col-md-12 col-lg-4 col-xl-4">
                <center>
                  <div id="donutchart" style={{ height: 300 }} />
                  <center>
                    <div id="center_emi_graph">
                      <h5 className="emi_graph_text" />
                      <h1 className="emi_graph_per" />
                    </div>
                  </center>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="Detailedprocess" className="page-section emiback">
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
          <center>
            <h1 className="gst_b_head">Legal251 BENEFITS</h1>
          </center>
          <div className="col-md-4 col-xs-4  firstcarddivcol ">
            <div className="servicebenefitscard e_benifit_b">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <h5>Simplifies Loan Planning</h5>
                <p className="benefitscardtext">
                  {" "}
                  The EMI calculator gives you the applicable EMI and the
                  complete amortization calendar that helps you plan better and
                  more straightforwardly.
                </p>
              </center>
            </div>
          </div>
          <div className="col-md-4 col-xs-4 firstcarddivcol">
            <div className="servicebenefitscard e_benifit_b">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <h5>Consistent &amp; Accurate Results</h5>
                <p className="benefitscardtext">
                  This EMI calculator consistently gives accurate answers
                  without any calculation error while allowing you to change
                  your inputs to get desired results.
                </p>
              </center>
            </div>
          </div>
          <div className="col-md-4  col-xs-4 firstcarddivcol">
            <div className="servicebenefitscard e_benifit_b">
              <center>
                <img
                  src="https://legal251.com/images/faqflag.svg"
                  className="benefitscardimg"
                />
                <h5>Easy to Use &amp; Time-Saving</h5>
                <p className="benefitscardtext">
                  {" "}
                  You only need to furnish the essential details such as loan
                  amount, tenure, and interest rate, which instantly give you
                  the results.
                </p>
              </center>
            </div>
          </div>
        </div>
      </div>
      <br className="mobhidebr" />
      <div className="secondcarddivpadd"></div>
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
        <p className="frequentlyheading emi_f_q">FREQUENTLY ASKED QUESTIONS</p>
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
              height: 400,
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
                        1. What is an EMI?
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
                      EMI refers to Equated Monthly Installment, the amount an
                      individual must pay to the bank or any other lender every
                      month until you entirely pay off the loan.
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
                        Q2. For what types of loans can I use the EMI
                        calculator?
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
                      You can use this online EMI calculator to calculate all
                      types of loans, including personal, car, and business
                      loans. You only need to know the payable interest on the
                      principal amount for the tenure.
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
                        Q3. What does an EMI consist of?
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
                      An Equated Monthly Installment consists of your interest
                      payable on the principal amount and the tenure.
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
                        Q4. What will happen if I miss paying my EMIs?
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
                      The unpaid EMIs attract penalties from financial
                      institutions, so if you fail to pay your EMIs, you have to
                      pay an extra amount in future.
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              src="https://legal251.com/images/legalwhitelogo.svg"
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
                    src="https://legal251.com/images/visa.svg"
                    className="paymentimage"
                    loading="lazy"
                  />
                </center>
              </div>
              <div className="col-xs-6">
                <center>
                  <img
                    src="https://legal251.com/images/upi.svg"
                    className="paymentimage"
                    loading="lazy"
                  />
                  <div className="footerdemodiv" />
                </center>
              </div>
              <div className="col-xs-4">
                <center>
                  <img
                    src="https://legal251.com/images/rupay.svg"
                    className="paymentimage"
                    loading="lazy"
                  />
                </center>
              </div>
              <div className="col-xs-4">
                <center>
                  <img
                    src="https://legal251.com/images/paytm.svg"
                    className="paymentimage"
                    loading="lazy"
                  />
                </center>
              </div>
              <div className="col-xs-2"></div>
              <div className="col-xs-2">
                <center>
                  <img
                    src="https://legal251.com/images/mastercard.svg"
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
                <a
                  href="mailto:contact@legal251.com"
                  style={{ textDecoration: "underline", color: "#fff" }}
                  className="footertext"
                >
                  contact@legal251.com
                </a>
                <br />
                <a
                  href="tel:7772877729"
                  style={{ textDecoration: "underline", color: "#fff" }}
                  className="footertext"
                >
                  (+91)77728-77729
                </a>
                <br />
              </div>
              <div className="col-md-3">
                <p className="footerheading">Links</p>
                <a
                  href="https://blog.legal251.com"
                  style={{ color: "#fff" }}
                  className="footertext"
                >
                  Latest News
                </a>
                <br />
                <a
                  href="https://legal251.com/how-we-work"
                  style={{ color: "#fff" }}
                  className="footertext"
                >
                  How we work
                </a>
                <br />
                <a
                  href="https://legal251.com/about"
                  style={{ color: "#fff" }}
                  className="footertext"
                >
                  About Us
                </a>
                <br />
                <a
                  href="https://legal251.com/resources/"
                  style={{ color: "#fff" }}
                  className="footertext"
                >
                  Blog
                </a>
                <br />
                <a
                  href="https://legal251.com/resources/guides/"
                  style={{ color: "#fff" }}
                  className="footertext"
                >
                  Guides
                </a>
              </div>
              <div className="col-md-5">
                <p className="footerheading">Legal &amp; Policies</p>
                <a
                  href="https://legal251.com/terms-and-conditions"
                  style={{ color: "#fff" }}
                  className="footertext"
                >
                  Terms &amp; Condition
                </a>
                <br />
                <a
                  href="https://legal251.com/privacy-policy"
                  style={{ color: "#fff" }}
                  className="footertext"
                >
                  Privacy Policy
                </a>
                <br />
                <a
                  href="https://legal251.com/cookie-policy"
                  style={{ color: "#fff" }}
                  className="footertext"
                >
                  Cookie Policy
                </a>
                <br />
                <a
                  href="https://legal251.com/refund-policy"
                  style={{ color: "#fff" }}
                  className="footertext"
                >
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3">
                <p className="footerheading">Support</p>
                <a
                  href="https://legal251.com/faq"
                  style={{ color: "#fff" }}
                  className="footertext"
                >
                  FAQs
                </a>
                <br />
                <a
                  href="https://legal251.com/contact"
                  style={{ color: "#fff" }}
                  className="footertext"
                >
                  Contact us
                </a>
              </div>
              <div className="col-md-4">
                <p className="footerheading">Account</p>
                <a
                  href="https://user.legal251.com/"
                  style={{ color: "#fff" }}
                  className="footertext"
                >
                  User Login
                </a>
                <br />
                <a
                  href="https://partners.legal251.com/"
                  style={{ color: "#fff" }}
                  className="footertext"
                >
                  Partner Login
                </a>
                <br />
                <a
                  href="https://legal251.com/track-service"
                  style={{ color: "#fff" }}
                  className="footertext"
                >
                  Service Tracking Dashboard
                </a>
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
                          src="https://legal251.com/images/emailbutton.svg"
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
                  <a
                    href="https://www.instagram.com/legal251india/"
                    target="_blank"
                  >
                    {" "}
                    <img
                      src="https://legal251.com/images/footerinsta.svg"
                      className="footersocialicon"
                      loading="lazy"
                    />{" "}
                  </a>{" "}
                  <a href="https://twitter.com/legal251" target="_blank">
                    {" "}
                    <img
                      src="https://legal251.com/images/fottertwitter.svg"
                      className="footersocialicon"
                      loading="lazy"
                    />{" "}
                  </a>{" "}
                  <a
                    href="https://www.linkedin.com/company/legal251/"
                    target="_blank"
                  >
                    {" "}
                    <img
                      src="https://legal251.com/images/footerlinkedin.svg"
                      className="footersocialicon"
                      loading="lazy"
                    />{" "}
                  </a>{" "}
                  <a href="https://www.facebook.com/legal251" target="_blank">
                    {" "}
                    <img
                      src="https://legal251.com/images/footerfb.svg"
                      className=" footersocialicon"
                      loading="lazy"
                    />{" "}
                  </a>
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
        <div className="modal-dialog modalmainwidth" style={{ border: "none" }}>
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
                boxShadow: "6px 7px 15px -13px rgba(0,0,0,1)"
              }}
            >
              <img
                src="https://legal251.com/images/popupcross2.svg"
                className="subscribeemailemailpopupclose"
                style={{
                  position: "absolute",
                  right: "1.9%",
                  top: 0,
                  marginTop: "1.4vw"
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
                    verticalAlign: "middle"
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
                    src="https://legal251.com/images/EMAIL.png"
                    className="verificationimg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="myModal1" role="dialog">
        <div className="modal-dialog modalmainwidth" style={{ border: "none" }}>
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
                boxShadow: "6px 7px 15px -13px rgba(0,0,0,1)"
              }}
            >
              <img
                src="https://legal251.com/images/popupcross2.svg"
                className="subscribeemailemailpopupclose"
                style={{
                  position: "absolute",
                  right: "1.9%",
                  top: 0,
                  marginTop: "1.4vw"
                }}
                data-dismiss="modal"
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
                    verticalAlign: "middle"
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
                    src="https://legal251.com/images/EMAIL.png"
                    className="verificationimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  
  
  </>
  )
}

export default EMICalculator