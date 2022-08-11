import { FC } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Timeline from '../Timeline/Timeline';
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const MainContainer: FC = () => {
  const configuration = useSelector((state: RootState) => state.config.configuration);
  const {
    header,
    socials,
    navigation,
    about,
    skills,
    timeline,
    portfolio,
    testimonials,
    contact,
    footer
  } = configuration;

  return (
    <>
      <Header headerObj={header} socials={socials} contactId={contact.id} />
      <Navigation navigationObj={navigation} />
      <About aboutObj={about} letsTalk={header.letsTalkBtn} />
      <Skills skillsObj={skills} />
      <Timeline timelineObj={timeline} />
      <Portfolio portfolioObj={portfolio} />
      <Testimonials testimonialsObj={testimonials} />
      <Contact contactObj={contact} />
      <Footer footerObj={footer} socials={socials} />
    </>
  );
};

export default MainContainer;
