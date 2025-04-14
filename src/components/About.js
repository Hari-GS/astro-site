import React from "react";
import sageImage from "../assets/dummy-prod-1.jpg"; // Replace with your actual image path
import sign1 from "../assets/Icons/image-1.png";
import sign2 from "../assets/Icons/image-2.png";
import sign3 from "../assets/Icons/image-3.png";
import sign4 from "../assets/Icons/image-4.png";
import sign5 from "../assets/Icons/image-5.png";
import sign6 from "../assets/Icons/image 14.png";
import sign7 from "../assets/Icons/image 13.png";
import sign8 from "../assets/Icons/image.png";
import sign9 from "../assets/Icons/image 9.png";
import sign10 from "../assets/Icons/image 10.png";
import sign11 from "../assets/Icons/image 11.png";
import sign12 from "../assets/Icons/image 12.png";

function About() {
  const zodiacSigns = [sign1, sign2, sign3, sign4, sign5, sign6, sign7, sign8, sign9, sign10, sign11, sign12];

  const features = [
    {
      title: "Providing accurate and insightful astrological readings",
      description: "We specialize in providing accurate and insightful astrological readings tailored to your unique journey.",
    },
    {
      title: "Delivering timely and reliable guidance for your daily life",
      description: "We deliver timely and reliable astrological insights designed to help you navigate the challenges and opportunities of daily life.",
    },
    {
      title: "Continuously learning and growing in the field of astrology",
      description: "We are committed to continuously learning and growing in the field of astrology to provide the most accurate, insightful, and meaningful guidance to our users.",
    },
  ];

  return (
    <div id="about" className="bg-[#070022] text-white md:py-10 px-6 md:px-20 flex flex-col items-center">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-between md:justify-evenly w-full gap-8 ">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-[#D2E27F]">
            India’s No. 1 Original Naadi Astrology
          </h2>
          <p className="mt-4 text-sm md:text-lg leading-relaxed">
            Agathiyar Naadi is a specialized branch of Indian astrology that interprets ancient scriptures to provide profound insights into an individual’s life. Our online Naadi astrology services offer precise guidance through Palm Leaf readings rooted in the revered traditions of Vaitheeswaran Koil Naadi Astrology.
          </p>
        </div>
        {/* Right Image */}
        <div className="w-[200px] md:w-[300px]">
          <img src={sageImage} alt="Naadi Astrology Sage" className="w-full max-w-sm md:max-w-full h-auto rounded-lg border-2 border-[#6474FF] shadow-lg" />
        </div>
      </div>

      {/* Zodiac Signs */}
      <div className="text-white flex flex-col items-center pt-10 md:pt-20 px-2 w-full">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-14">
          {zodiacSigns.map((src, index) => (
            <div key={index} className="relative flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shadow-lg border-2 border-blue-800"
            style={{
                boxShadow: "0 4px 15px rgba(108, 99, 255, 0.5)",
              }}
            >
              <img src={src} alt={`Zodiac ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <h2 className="text-lg sm:text-2xl lg:text-3xl text-[#D2E27F] font-semibold mt-10 md:mt-20">
          What is Naadi Astrology?
        </h2>

        {/* Description */}
        <p className="max-w-full md:max-w-4xl text-center text-gray-300 text-sm md:text-lg leading-relaxed px-4 md:pt-4">
          Naadi Astrology is an ancient form of astrology that provides detailed insights into a person's past, present, and future. Unlike regular astrology, it is based on palm leaf manuscripts written by sages thousands of years ago. Each leaf corresponds to a unique person and details their life aspects, including family, career, and challenges.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-16 flex items-center justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#0D0F2B] text-white p-6 rounded-2xl shadow-lg border border-white text-center transition-transform transform"
            style={{
                boxShadow: "0 4px 15px rgba(108, 99, 255, 0.5)",
              }}
            >
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
