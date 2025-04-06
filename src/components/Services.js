import React from "react";
import skyImage from "../assets/starry-sky-2533009.jpg";
import handPic from "../assets/image 7.jpg";
import tellerPic from "../assets/front-view-fortune-teller-with-client.jpg";

const Services = () => {
  return (
    <div className="bg-[#070022] text-white pt-16 md:pt-32">
      {/* Banner Image */}
      <div className="w-full h-40 md:h-60 flex items-center justify-center my-12">
        <img src={skyImage} alt="sky-image" className="w-full h-auto" />
      </div>

      {/* Services Section */}
      <div id="services" className="px-6 md:px-24 md:pt-24">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center">
            <img src={handPic} alt="Hand-pic" className="w-48 md:w-64 h-auto rounded-lg" />
          </div>

          {/* Service List */}
          <div className="flex-1 space-y-4">
            {[
              "NADI ASTROLOGY",
              "OUR HERITAGE",
              "ONLINE PREDICTIONS",
              "NADI PROCEDURE",
              "HISTORY OF NADI",
            ].map((service, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"></div>
                <span className="ml-3 md:ml-4 bg-gray-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-md text-sm md:text-base">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-white p-6 md:p-8 flex flex-col items-center md:pt-10">
        <div className="w-full self-start md:pl-[17%] mt-4">
          <h5 className="text-[#C4E15A] text-sm font-semibold text-left">
            Why Choose Us
          </h5>
          <h2 className="text-yellow-300 text-xl md:text-3xl font-semibold mt-2 text-left">
            Discover Your Path in the Stars with Us
          </h2>
        </div>

        {/* Fortune Teller Image */}
        <div className="mt-12 md:mt-20 w-full flex justify-center">
          <div className="w-full md:w-2/3 h-auto md:h-52 bg-gray-500 rounded-lg flex items-center justify-center">
            <img src={tellerPic} alt="Fortune Teller" className="rounded-lg w-full h-auto" />
          </div>
        </div>

        {/* Description */}
        <p className="mt-12 md:pt-16 text-center max-w-xl text-gray-300 text-sm md:text-base">
          Experience the true essence of Naadi Astrology with our authentic, tradition-rich services. We work directly with hereditary Naadi astrologers who have preserved this sacred wisdom for generations, ensuring precise and insightful readings.
        </p>
        <p className="mt-4 text-center max-w-xl text-gray-300 text-sm md:text-base">
          From identifying your unique thumb impression to interpreting your personal palm leaf, our astrologers guide you with care and clarity. Each reading unveils your karmic patterns, life’s purpose, and spiritual path, offering not just predictions but transformative solutions—whether through mantras, rituals, or charitable acts.
        </p>
        <p className="mt-4 text-center max-w-xl text-gray-300 text-sm md:text-base">
          With a perfect blend of tradition and accessibility, we bring the timeless insights of the sages to you, wherever you are. Choose authenticity, spiritual depth, and life-changing clarity with our Naadi Astrology services.
        </p>

        {/* Features Section */}
        <div className="mt-10 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-12">
          {[
            {
              title: "Expert Astrologers",
              desc: "We generate your natal chart and interpret the positions of the planets, signs, and houses to give you insights into your personality, strengths, weaknesses, and life path.",
            },
            {
              title: "Compatibility Readings",
              desc: "We can analyze the compatibility between two individuals by comparing their natal charts. This can help people understand their relationships with partners, friends, or family members better.",
            },
            {
              title: "Progression Readings",
              desc: "We provide insights into upcoming planetary transits and progressions that may influence your life events and experiences. It can be useful for timing significant decisions or life changes.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#0D0F2B] p-4 md:p-6 rounded-lg w-full md:w-80 text-center border border-white"
              style={{
                boxShadow: "0 4px 15px rgba(108, 99, 255, 0.5)",
              }}
            >
              <h3 className="text-[#C4E15A] text-lg md:text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-2 text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
