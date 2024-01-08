import React from "react";
import playStore from "../assests/images/HomepageImages/playstore.jpg";

function MobileApp() {
  const bgImage = {
    backgroundImage: `url('https://www.interactivebrokers.co.in/images/web/ibkr-mobile-section-background-on-the-go.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="py-10" >
      <div className=" bg-gray-600 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
          <div className="col-md-5 hidden md:block">
            <div className="flex items-right rounded-lg my-auto justify-end">
              <img
                src="https://wallpaperaccess.com/full/702860.jpg"
                alt=""
                className="w-[400px] h-[300px] "
              />
            </div>
          </div>
          <div className="col-md-7  col-12 ps-5">
            <div className="flex flex-col items-left my-auto  justify-center">
              <h1 className="text-gray-100"></h1>
              <h2 className="text-2xl md:text-5xl text-gray-100 font-bold mb-3">
                Download Legal257 App!
              </h2>
              <p className="text-lg md:text-base font-normal text-gray-100 leading-6 mb-4">
              Legal257 mobile app empowers you with essential legal services, fostering independence in your legal endeavors. Access a comprehensive range of legal tools and resources seamlessly on-the-go.
              </p>
              <a href="../assests/images/Legal257.apk" download>
                <img src={playStore} className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileApp;
