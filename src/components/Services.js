import React from "react";
import skyImage from "../assets/starry-sky-2533009.png"
import handPic from "../assets/image 7.png";
import tellerPic from "../assets/front-view-fortune-teller-with-client.png"

const Services = () => {
  return (
    <div  className="bg-[#070022] text-white pt-24">
      {/* Banner Image Placeholder */}
      <div className="w-full h-60 bg-gray-700 flex items-center justify-center my-24">
        <img src={skyImage} alt="sky-image"/>
      </div>
      
      <div id="services" className="p-12 px-24">
        <h2 className="text-lime-300 text-2xl mb-6">Our Service:</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-evenly">
          {/* Left Side - Image Placeholder */}
          <div className="flex-1 flex items-center justify-center pl-20">
            <div className="w-64 h-64 flex items-center justify-center rounded-lg">
              <img src={handPic} alt="Hand-pic"/>
            </div>
          </div>
          
          {/* Right Side - Service List */}
          <div className="flex-1 space-y-4">
            {[
              "NADI ASTROLOGY",
              "OUR HERITAGE",
              "ONLINE PREDICTIONS",
              "NADI PROCEDURE",
              "HISTORY OF NADI",
            ].map((service, index) => (
              <div key={index} className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"></div>
                <span className="ml-4 bg-gray-600 text-white px-4 py-2 rounded-md">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-white p-8 flex flex-col items-center">
      {/* <button className="bg-[#C4E15A] text-black py-2 px-6 rounded-lg text-lg mb-6 hover:bg-[#afd81c]">
        View All Service
      </button> */}

      <div className="w-full self-start pl-[17%] mt-4">
        <h5 className="text-[#C4E15A] text-sm font-semibold text-left">Why Choose Us</h5>
        <h2 className="text-yellow-300 text-3xl font-semibold mt-2 text-left">
          Discover Your Path in the Stars with Us
        </h2>
      </div>

      <div className="mt-24 w-full flex justify-center">
        <div className="w-2/3 h-52 bg-gray-500 rounded-lg flex items-center justify-center">
          <img src={tellerPic} alt="Fortune Teller" className="rounded-lg" />
        </div>
      </div>

      <p className="mt-24 text-center max-w-3xl text-gray-300">
        Experience the true essence of Naadi Astrology with our authentic, tradition-rich services. We work directly with hereditary Naadi astrologers who have preserved this sacred wisdom for generations, ensuring precise and insightful readings.
      </p>
      <p className="mt-4 text-center max-w-3xl text-gray-300">
        From identifying your unique thumb impression to interpreting your personal palm leaf, our astrologers guide you with care and clarity. Each reading unveils your karmic patterns, life’s purpose, and spiritual path, offering not just predictions but transformative solutions—whether through mantras, rituals, or charitable acts.
      </p>
      <p className="mt-4 text-center max-w-3xl text-gray-300">
        With a perfect blend of tradition and accessibility, we bring the timeless insights of the sages to you, wherever you are. Choose authenticity, spiritual depth, and life-changing clarity with our Naadi Astrology services.
      </p>

      <div className="mt-10 flex flex-col md:flex-row gap-24">
        <div className="bg-[#0D0F2B] p-6 rounded-lg w-80 text-center border border-white"
        style={{
              boxShadow: "0 4px 15px rgba(108, 99, 255, 0.5)",
            }}>
          <h3 className="text-[#C4E15A] text-xl font-semibold">Expert Astrologers</h3>
          <p className="text-gray-300 mt-2 text-sm">
            We generate your natal chart and interpret the positions of the planets, signs, and houses to give you insights into your personality, strengths, weaknesses, and life path.
          </p>
        </div>

        <div className="bg-[#0D0F2B] p-6 rounded-lg w-80 text-center border border-white"
        style={{
              boxShadow: "0 4px 15px rgba(108, 99, 255, 0.5)",
            }}>
          <h3 className="text-[#C4E15A] text-xl font-semibold">Compatibility Readings</h3>
          <p className="text-gray-300 mt-2 text-sm">
            We can analyze the compatibility between two individuals by comparing their natal charts. This can help people understand their relationships with partners, friends, or family members better.
          </p>
        </div>

        <div className="bg-[#0D0F2B] p-6 rounded-lg w-80 text-center border border-white"
        style={{
              boxShadow: "0 4px 15px rgba(108, 99, 255, 0.5)",
            }}>
          <h3 className="text-[#C4E15A] text-xl font-semibold">Progression Readings</h3>
          <p className="text-gray-300 mt-2 text-sm">
            We provide insights into upcoming planetary transits and progressions that may influence your life events and experiences. It can be useful for timing significant decisions or life changes.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
