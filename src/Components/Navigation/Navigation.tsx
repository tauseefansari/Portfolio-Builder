import { FC } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { RiServiceLine } from 'react-icons/ri';
import { Link } from 'react-scroll';
import './Navigation.css';

const Navigation: FC = () => {
  return (
    <nav>
      <Link activeClass="active" smooth spy to="home" className="tooltip" data-tooltip="Home">
        <AiOutlineHome />
      </Link>
      <Link activeClass="active" smooth spy to="about" className="tooltip" data-tooltip="About">
        <AiOutlineUser />
      </Link>
      <Link activeClass="active" smooth spy to="skills" className="tooltip" data-tooltip="Skills">
        <BiBook />
      </Link>
      <Link
        activeClass="active"
        smooth
        spy
        to="timeline"
        className="tooltip"
        data-tooltip="My Journey"
      >
        <RiServiceLine />
      </Link>
      <Link
        activeClass="active"
        smooth
        spy
        to="portfolio"
        className="tooltip"
        data-tooltip="Portfolio"
      >
        <HiOutlineBriefcase />
      </Link>
      <Link activeClass="active" smooth spy to="contact" className="tooltip" data-tooltip="Contact">
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Navigation;
