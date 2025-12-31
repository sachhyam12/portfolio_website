import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaFacebook />,
              link: 'https://www.facebook.com/sachhyam.pokharel',
            },
            {
              icon: <FaLinkedin />,
              link: 'https://www.linkedin.com/in/sachhyam-pokharel-a40648271/',
            },
            {
              icon: <FaInstagram />,
              link: 'https://www.instagram.com/sachhyam.pokharel/',
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          &copy; 2025 Sachhyam Pokharel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
