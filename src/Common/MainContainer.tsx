import { FC } from 'react';
import Header from 'Components/Header/Header';
import Navigation from 'Components/Navigation/Navigation';
import About from 'Components/About/About';
import Skills from 'Components/Skills/Skills';
import Timeline from 'Components/Timeline/Timeline';
import Portfolio from 'Components/Portfolio/Portfolio';
import Testimonials from 'Components/Testimonials/Testimonials';
import Contact from 'Components/Contact/Contact';
import Footer from 'Components/Footer/Footer';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

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
