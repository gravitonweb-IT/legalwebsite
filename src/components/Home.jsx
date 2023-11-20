import React from 'react'
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
    <div className="grid grid-cols-1  md:grid-cols-2   gap-10 mx-10 md:mx-20 lg:mx-32 mt-5">
     
     <div className="font-bold text-2xl ">
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
     

<div>
hello
</div>



    </div>
    </>
  )
}

export default Home