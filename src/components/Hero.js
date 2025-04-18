import React from "react";
import heroImage from "../assets/numerology-concept-composition.jpg";
import handPic from "../assets/image 7 e-Photoroom.png";

function Hero({ setIsPopupOpen }) {

  const handleClick = ()=>{
    setIsPopupOpen(true)
  }

  return (
    <section
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, #070022 10%, rgba(7, 0, 34, 0.9) 30%, rgba(7, 0, 34, 0.8) 50%, rgba(7, 0, 34, 0.9) 80%, #070022 100%), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative flex flex-col items-center text-center px-4 mt-[-120px] md:mt-[-150px]">
        <h1 className="text-2xl font-bold md:text-6xl">
          Unlock Your Destiny With <br /> Expert Guidance
        </h1>

        {/* Hand Image */}
        <div className="mt-10 md:mt-8 p-2">
          <img
            src={handPic}
            className="md:h-[350px] h-[250px] rounded-full"
            alt="Hand illustration"
          />
        </div>

        {/* Glowing Button */}
        <button className="mt-8 px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-xl animate-glow-yellow hover:bg-yellow-500 transition" onClick={handleClick}>
          Book Your Session
        </button>
      </div>
    </section>
  );
}

export default Hero;
