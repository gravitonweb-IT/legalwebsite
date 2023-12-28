import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { servieUrl } from "../env/env";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [dataValue, setDataValue] = useState([]);
  const [base64Image, setBase64Image] = useState(null);

  const [profile, setProfile] = useState([]);

  const uploadImage = (value) => {
    debugger;
  };

  const sourceDiv = document.querySelector(".tv-embed-widget-wrapper__body");

  const targetDiv = document.getElementById("grapch");

  const [userType, setUserType] = useState("0");
  useEffect(() => {
    if (localStorage.getItem("login") == "user") {
      setUserType("3");
    } else if (localStorage.getItem("login") == "admin") {
      setUserType("1");
    } else if (localStorage.getItem("login") == "staff") {
      setUserType("2");
    }
  }, []);
  const handleLogOut = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("userData");
    // localStorage.removeItem("userData");

    setUserType("0");

    window.location.reload();
  };

  useEffect(() => {
    // targetDiv?.innerHTML = sourceDiv?.innerHTML;

    if (localStorage.getItem("userData") == null) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("userEmail", localStorage.getItem("userData"));

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(servieUrl.url + "rolebased/UserAmountStatus/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let totalProfit = 0;
        let totalLoss = 0;
        let totalPrice = 0;

        // Loop through the data array
        result.forEach((item) => {
          const { profit, loss, price } = item.fields;

          // Add the profit, loss, and price values to the corresponding totals
          totalProfit += Number(profit);
          totalLoss += Number(loss);
          totalPrice += Number(price);
        });

        // Create an object to store the total values
        const result1 = {
          profit: totalProfit,
          loss: totalLoss,
          price: totalPrice,
        };

        debugger;

        setDataValue(result1);
      })
      .catch((error) => console.log("error", error));
  }, []);
  useEffect(() => {
    var formdata = new FormData();

    formdata.append("userEmail", localStorage.getItem("userData"));

    debugger;

    var requestOptions = {
      method: "POST",

      body: formdata,

      redirect: "follow",
    };

    fetch(servieUrl.url + "rolebased/uploadProfile/", requestOptions)
      .then((response) => response.json())

      .then((result) => {
        setProfile(result);
      })

      .catch((error) => console.log("error", error));

    console.log(profile);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setBase64Image(e.target.result);

        if (e.target.result) {
          var formdata = new FormData();

          formdata.append("userEmail", localStorage.getItem("userData"));

          formdata.append("image", e.target.result);

          var requestOptions = {
            method: "POST",

            body: formdata,

            redirect: "follow",
          };

          fetch(servieUrl.url + "/api/all-pages-api/", requestOptions)
            .then((response) => response.json())

            .then((result) => {
              alert("successfully update image");
            })

            .catch((error) => console.log("error", error));
        }

        // console.log("base64",e.target.result)
      };

      reader.readAsDataURL(file);
    }

    console.log("base64", e.target.result);
  };

  return (
    <>
      <div className="overflow-x-hidden md:pt-20">
        <div className=" grid md:grid-cols-3 mx-5 gap-5 border border-red-700 mt-10 ">
          <div className="bg-white p-5  shadow-xl text-center">
            <img
              src={
                base64Image
                  ? base64Image
                  : profile[0]?.fields?.Image
                  ? profile[0]?.fields?.Image
                  : "https://bootdey.com/img/Content/avatar/avatar7.png"
              }
              alt="Admin"
              className="rounded-circle m-auto"
              width="150"
            />

            <div className="mt-3">
              <h4>{profile[0]?.fields?.first_name}</h4>

              <p className=" mt-2">{profile[0]?.fields?.email}</p>

              <p className="mt-2  ">{profile[0]?.fields?.created_date}</p>

              <label className="custom-file-input mt-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>

              <Link to="#">
                {" "}
                <button className=" p-2  border-2 border-blue-600  rounded-[4px] mt-2">
                  More Details
                </button>{" "}
              </Link>
            </div>
          </div>

          <div className="md:col-span-2   ">
            <div className=" bg-white  p-3 py-3 shadow-2xl">
              <div className="flex  p-4">
                <p>FullName:</p>

                <p className="ml-14">{profile[0]?.fields?.first_name}</p>
              </div>

              <hr />

              <div className="flex  p-4 ">
                <p>Email:</p>

                <p className="ml-20"> {profile[0]?.fields?.email}</p>
              </div>

              <hr />

              <div className="flex  p-4 ">
                <p>Mobile</p>

                <p className="ml-20"> {profile[0]?.fields?.phone_number}</p>
              </div>

              <hr />

              <div className="flex  p-4 ">
                <p>Date Joined:</p>

                <p className="ml-10"> {profile[0]?.fields?.date_joined}</p>
              </div>

              <Link
                to="/login"
                className="px-5 py-2 rounded-[4px] m-4 bg-[#B70505] text-white "
                onClick={() => handleLogOut()}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-10 mt-10">
          <div>
            <div className="flex p-4 justify-between border border-blue-600 rounded-[4px]">
              <p className="pl-3 text-xl font-medium">Support</p>

              <p> {dataValue?.price}</p>
            </div>

            <div className="flex mt-8 p-4 justify-between border border-blue-600 rounded-[4px]">
              <p className="pl-3 text-xl font-medium">Document Record</p>

              <p> {dataValue?.profit}</p>
            </div>

            <div className="flex mt-8 p-4 justify-between border border-blue-600 rounded-[4px]">
              <p className="pl-3 text-xl font-medium">Payments Invoices</p>

              <p> {dataValue?.loss}</p>
            </div>
            <div className="flex mt-8 p-4 justify-between border border-blue-600 rounded-[4px]">
              <p className="pl-3 text-xl font-medium">My Services</p>

              <p> {dataValue?.loss}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
