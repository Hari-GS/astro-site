import React from "react";
import starsImage from "../assets/stars-2651963.jpg";
import premiumStar from "../assets/Icons/star.png";
import careImg from "../assets/Icons/care.png";
import lockImg from "../assets/Icons/lock.png";

function WhyChooseUs({ setIsPopupOpen }) {
  return (
    <div className="bg-[#070022] text-white px-4 py-12 md:p-24">
      {/* Membership Banner */}
      <div
        className="p-6 md:p-10 rounded-lg text-center mx-auto max-w-[90%] md:max-w-4xl"
        style={{
          backgroundImage: `url(${starsImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-lg md:text-2xl font-bold">
          Join our membership for daily bits of astrology
        </h2>
        <p className="mt-2 text-gray-300 text-sm md:text-base">
          We provide the essentials for your astrology needs
        </p>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="mt-4 bg-[#C4E15A] text-black py-2 px-6 rounded-lg text-sm md:text-lg hover:bg-[#afd81c]"
        >
          Join Membership
        </button>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-24 text-center max-w-screen-lg mx-auto">
        <h2 className="text-lg md:text-xl font-bold">Why choose ASTRO POINT</h2>

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Great Experience */}
          <div className="p-6 md:p-8 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center">
              <img src={premiumStar} alt="star" />
            </div>
            <h3 className="text-[#C4E15A] text-base md:text-lg font-semibold mt-4">
              GREAT EXPERIENCE
            </h3>
            <p className="text-gray-300 mt-2 text-sm">
              Discover clarity and guidance at your fingertips with our personalized astrology app.
            </p>
          </div>

          {/* Best Customer Support */}
          <div className="p-6 md:p-8 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center">
              <img src={careImg} alt="care" />
            </div>
            <h3 className="text-[#C4E15A] text-base md:text-lg font-semibold mt-4">
              BEST CUSTOMER SUPPORT
            </h3>
            <p className="text-gray-300 mt-2 text-sm">
              Your cosmic journey is our priority! Reach out to our dedicated support team anytime.
            </p>
          </div>

          {/* Data Privacy */}
          <div className="p-6 md:p-8 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center">
              <img src={lockImg} alt="lock" />
            </div>
            <h3 className="text-[#C4E15A] text-base md:text-lg font-semibold mt-4">
              DATA PRIVACY
            </h3>
            <p className="text-gray-300 mt-2 text-sm">
              We prioritize your privacy and ensure your data is securely encrypted and protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
