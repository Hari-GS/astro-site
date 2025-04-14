import React from "react";
import heroImage from "../assets/numerology-concept-composition.jpg"; // Replace with your actual image path
import handPic from "../assets/image 7 e-Photoroom.png";

function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, #070022 10%, rgba(7, 0, 34, 0.9) 30%, rgba(7, 0, 34, 0.8) 50%, rgba(7, 0, 34, 0.9) 80%, #070022 100%), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Wrapper - Adjusted Closer to Navbar */}
      <div className="relative flex flex-col items-center text-center px-4 mt-[-120px] md:mt-[-150px]">
        <h1 className="text-2xl font-bold md:text-6xl">
          Unlock Your Destiny With <br /> Expert Guidance
        </h1>
        <img src={handPic} className="md:h-[350px] h-[250px] mt-10 md:mt-8" alt="Hand illustration"/>
      </div>
    </section>
  );
}

export default Hero;
