import React from "react";
import hero from "../assets/images/h1.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative ">
        <img
          src={hero}
          alt=""
          className="w-full object-cover md:mt-0 mt-14"
        />
        <div className="absolute   rounded-md" ></div>
       
        <div className=" absolute inset-0 flex justify-center items-center " style={{background:"linear-gradient(180deg, rgba(255,255,255,0) 16%, rgba(0,0,0,1) 100%)"}}>
          <div className="flex items-center justify-center text-center">
            <div className="space-y-5">
              <div className=" font-bold  text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-cyan-600">
              <p className="text-4xl md:text-6xl ">
                Welcome to
              </p>
              <h2 className=" text-5xl md:text-6xl uppercase ">
                company name

              </h2>
              </div>

              <TypeAnimation
              className="text-2xl md:text-4xl text-white"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "We produce food for Mice",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "We produce food for Hamsters",
                  1000,
                ]}
                wrapper="span"
                speed={40}
                style={{ fontSize: "1.5em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
        {/* <div
          className="absolute bg-gradient-to-t from-slate-900 to-slate-50 inset-0 m-auto max-w-xs  sm:max-w-md md:max-w-lg"
          // style={{
          //   background:
          //     "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          // }}
        ></div> */}
    </section>
  );
};

export default Hero;
