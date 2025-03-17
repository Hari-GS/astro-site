import React from "react";
import sageImage from "../assets/dummy-prod-1.jpg"; // Replace with your actual image path
import sign1 from "../assets/Icons/image-1.png"
import sign2 from "../assets/Icons/image-2.png"
import sign3 from "../assets/Icons/image-3.png"
import sign4 from "../assets/Icons/image-4.png"
import sign5 from "../assets/Icons/image-5.png"
import sign6 from "../assets/Icons/image 14.png"
import sign7 from "../assets/Icons/image 13.png"
import sign8 from "../assets/Icons/image.png"
import sign9 from "../assets/Icons/image 9.png"
import sign10 from "../assets/Icons/image 10.png"
import sign11 from "../assets/Icons/image 11.png"
import sign12 from "../assets/Icons/image 12.png" 

function About() {

  const zodiacSigns = [sign1,sign2,sign3,sign4,sign5,sign6,sign7,sign8,sign9,sign10,sign11,sign12]

  const features = [
    {
      title: "Providing accurate and insightful astrological readings",
      description:
        "We specialize in providing accurate and insightful astrological readings tailored to your unique journey.",
    },
    {
      title: "Delivering timely and reliable guidance for your daily life",
      description:
        "We deliver timely and reliable astrological insights designed to help you navigate the challenges and opportunities of daily life.",
    },
    {
      title: "Continuously learning and growing in the field of astrology",
      description:
        "We are committed to continuously learning and growing in the field of astrology to provide the most accurate, insightful, and meaningful guidance to our users.",
    },
  ];


  return (
    <div className="bg-[#070022] text-white py-0 px-6 md:px-20 flex flex-col md:flex-col items-center justify-between">
      <div className="flex flex-row pt-20 justify-evenly">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D2E27F]">
              India’s No. 1 Original Nadi Astrology
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              Agathiyar Nadi is a specialized branch of Indian astrology that
              interprets ancient scriptures to provide profound insights into an
              individual’s life. If you seek clarity on your life's purpose,
              relationships, or career, our online Nadi astrology services offer
              precise guidance. Our experienced astrologers utilize Palm Leaf
              readings, rooted in the revered traditions of Vaitheeswaran Koil Nadi
              Astrology, to help you navigate your path toward personal growth and
              fulfillment.
            </p>
            
          </div>

          {/* Right Image */}
          <div className="md:w-[300px] mt-10 md:mt-0">
            <img
              src={sageImage}
              alt="Nadi Astrology Sage"
              className="rounded-lg border-2 border-[#6474FF] shadow-lg"
            />
      </div>
      </div>
      <div className=" text-white min-h-screen flex flex-col items-center pt-20 px-5">
      <div className="grid grid-cols-4 gap-16 md:grid-cols-6 lg:grid-cols-6 mb-10">
        {zodiacSigns.map((src, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shadow-lg p-4 border-2 border-blue-500"
            style={{
              boxShadow: "0 4px 15px rgba(108, 99, 255, 0.5)",
            }}
          >
            <div className="absolute inset-0"></div>
            <img src={src} alt={`Zodiac ${index + 1}`} className="relative w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <h2 className="text-xl md:text-2xl lg:text-3xl text-[#D2E27F] font-semibold mb-4 mt-8">
        What is Naadi Astrology?
      </h2>
      <p className=" w-[1000px] text-center text-gray-300 leading-relaxed">
      Naadi Astrology is an ancient form of astrology that provides detailed insights into a 
person s past, present, and future. Unlike regular astrology, it is based on palm leaf 
manuscripts written by sages (Rishis) thousands of years ago. These manuscripts contain life 
predictions for individuals with remarkable accuracy.

Sages, through deep meditation, recorded people s destinies in the Tamil language on palm 
leaves. Each leaf corresponds to a unique person and details their life aspects, including 
family, career, challenges, and spiritual growth. This practice is seen as a divine gift, helping 
seekers understand their karma and life purpose.

The process begins with the seeker s thumb impression, which helps identify their specific 
palm leaf. Once found, an astrologer reads and interprets it, revealing predictions and 
suggesting remedies like mantras, rituals, or charity to reduce karmic burdens.

What makes Naadi Astrology special is its focus on karma and spiritual evolution. It explains 
how past actions shape the present and offers guidance to realign life for a better future. By 
understanding their soul s journey across lifetimes, seekers gain clarity, purpose, and a 
deeper connection with the divine.

More than just predictions, Naadi Astrology is a spiritual tool that helps individuals navigate 
life s challenges and discover their true path
      </p>
    </div>
    <div className="mt-16  flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#0D0F2B] text-white p-6 rounded-2xl shadow-lg border border-white text-center relative transition-transform transform"
            style={{
              boxShadow: "0 4px 15px rgba(108, 99, 255, 0.5)",
            }}
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default About;
