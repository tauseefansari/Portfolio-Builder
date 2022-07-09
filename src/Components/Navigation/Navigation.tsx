import { FC, MouseEventHandler, useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { RiServiceLine } from 'react-icons/ri';
import './Navigation.css';

const Navigation: FC = () => {
  const [activeNav, setActiveNav] = useState<string | null>('#home');

  const handleNavigation: MouseEventHandler<HTMLAnchorElement> = (e) => {
    setActiveNav(e.currentTarget.getAttribute('href'));
  };

  return (
    <nav>
      <a
        href="#home"
        className={activeNav === '#home' ? 'active' : ''}
        rel="noreferrer"
        onClick={handleNavigation}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === '#about' ? 'active' : ''}
        rel="noreferrer"
        onClick={handleNavigation}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === '#experience' ? 'active' : ''}
        rel="noreferrer"
        onClick={handleNavigation}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={activeNav === '#services' ? 'active' : ''}
        rel="noreferrer"
        onClick={handleNavigation}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        className={activeNav === '#portfolio' ? 'active' : ''}
        rel="noreferrer"
        onClick={handleNavigation}
      >
        <HiOutlineBriefcase />
      </a>
      <a
        href="#contact"
        className={activeNav === '#contact' ? 'active' : ''}
        rel="noreferrer"
        onClick={handleNavigation}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navigation;
