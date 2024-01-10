import React from "react";
import zero from "../assests/images/Bankservices/zero.png";
import CASH from "../assests/images/Bankservices/CASH.png";
import DEPOSIT from "../assests/images/Bankservices/deposit.png";
import fsat from "../assests/images/Bankservices/fsat.png";
import pickup from "../assests/images/Bankservices/pickup.png";
import aadhar from "../assests/images/Bankservices/aadhar.jpeg";
import dmt from "../assests/images/Bankservices/dmt.png";
import aeps from "../assests/images/Bankservices/aeps.svg";
import upi from "../assests/images/Bankservices/upi.png";
import pan from "../assests/images/Bankservices/pan.png";
import micro from "../assests/images/Bankservices/micro.png";
import bbps from "../assests/images/Bankservices/bbps.png";
import bank from "../assests/images/Bankservices/bank.png";
import RECHARGE from "../assests/images/Bankservices/RECHARGE.png";
import PAY from "../assests/images/Bankservices/PAYCONTACTS.png";
import mobile from "../assests/images/Bankservices/mobilepayment.png";
import cibil from "../assests/images/Bankservices/cibilscore.jpg";
import upid from "../assests/images/Bankservices/UPIid.png";
import FLIGHTBOOKING from "../assests/images/Bankservices/FLIGHTBOOKING.jpg";
import bus from "../assests/images/Bankservices/BUSBOOKING.png";
import HOTEL from "../assests/images/Bankservices/HOTEL.png";
import INSURANCE from "../assests/images/Bankservices/INSURANCE.png";
import FASTAG from "../assests/images/Bankservices/FASTAG.png";
import QR from "../assests/images/Bankservices/QR CODE.png";
import bhim from "../assests/images/Bankservices/bhim.png";
import TRANSFER from "../assests/images/Bankservices/TRANSFER.png";
import DROP from "../assests/images/Bankservices/DROP.png";

function BankServices() {
  return (
    <>
    <div className="mt-24 md:mt-32">
    <h1 className='text-center text-2xl font-bold text-[#B70505]'>BANKING SERVICES</h1>
    </div>
    

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-5 md:mx-20 mt-10">
        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={zero} alt="image" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">
            ZERO BALANCE <br />
            ACCOUNT OPENING
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={CASH} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">
            CASH
            <br /> WITHDRAWAL
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={DEPOSIT} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">CASH DEPOSIT</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={fsat} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">M-CASH RETURN</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={pickup} alt="image" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">
            CASH PICKUP REQUEST
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={aadhar} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">AADHAAR PAY</p>
        </div>

        <div className="bg-white p-4 rounded shadow  mb-3">
          <img src={dmt} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">DMT</p>
        </div>

        <div className="bg-white p-4 rounded shadow  mb-3">
          <img src={aeps} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">AEPS</p>
        </div>

        <div className="bg-white p-4 rounded shadow  mb-3">
          <img src={upi} alt="image" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">ADD MONEY TO UPI</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={pan} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">NSDL PAN CARD</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={micro} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">DMT</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={bbps} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">BBPS</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={DROP} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">CASH DROP</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={bank} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">CASH DROP</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={RECHARGE} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">RECHARGE</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={PAY} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">PAY CONTACTS</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={mobile} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">PAY PHONE NUMBER</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={cibil} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">CIBIL SCORE</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={upid} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">UPI PAYMENT</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={FLIGHTBOOKING} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">FLIGHT BOOKING</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={bus} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">BUS BOOKING</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={HOTEL} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">HOTEL BOOKING</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={INSURANCE} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">INSURANCE POLICY</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={FASTAG} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">FASTAG</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={QR} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">QR CODE</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={bhim} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">PAY UPI ID</p>
        </div>

        <div className="bg-white p-4 rounded shadow mb-3">
          <img src={TRANSFER} alt="cash" className="w-20 h-25 mx-auto" />
          <p className="mt-5 text-center text-md font-700">BANK TRANSFER</p>
        </div>
      </div>

    </> 
  );
}

export default BankServices;
