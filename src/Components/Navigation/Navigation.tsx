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
      <Link activeClass="active" smooth spy to="home">
        <AiOutlineHome />
      </Link>
      <Link activeClass="active" smooth spy to="about">
        <AiOutlineUser />
      </Link>
      <Link activeClass="active" smooth spy to="experience">
        <BiBook />
      </Link>
      <Link activeClass="active" smooth spy to="services">
        <RiServiceLine />
      </Link>
      <Link activeClass="active" smooth spy to="portfolio">
        <HiOutlineBriefcase />
      </Link>
      <Link activeClass="active" smooth spy to="contact">
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Navigation;
