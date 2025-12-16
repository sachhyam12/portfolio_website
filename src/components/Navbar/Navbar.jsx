import { React, useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  //Check Scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // NEW: observe sections for activeSection detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Active section:', entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4, // Trigger when 60% of section is visible
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  //Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'project', label: 'Project' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <nav
      className={`sticky top-0 w-full z-20 transition duration-300 px-[3vw] md:px-[3vw] lg:px-[5vw] py-2
    ${
      isScrolled
        ? 'bg-[#000001]/40 backdrop-blur-lg shadow-xl'
        : 'bg-transparent'
    }`}
    >
      <div className=" text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8345ec]">&lt;</span>
          <span className="text-white">Sachhyam</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Pokharel</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
        {/* Desktop Menu*/}

        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`hover:cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? 'text-[#8245ec]' : 'text-white'}
                            `}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Media */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/sachhyam12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] cursor-pointer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sachhyam-pokharel-a40648271/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] cursor-pointer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icons */}

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8345ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}

      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${activeSection === item.id ? 'text-[#8245ec]' : ''}`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/anonymous-acc12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sachhyam-pokharel-a40648271/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
