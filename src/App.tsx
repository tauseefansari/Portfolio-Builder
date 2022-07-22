import { FC } from 'react';
import { useSelector } from 'react-redux';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Loader from './Components/Common/Loader';
import Preloader from './Components/Common/Preloader';
import useConfiguration from './hooks/use-configuration';
import { RootState } from './redux/store';
import Timeline from './Components/Timeline/Timeline';

const App: FC = () => {
  const configLoaded = useConfiguration();
  const loading = useSelector((state: RootState) => state.config.loading);

  return loading ? (
    <>
      {configLoaded && <Preloader />}
      <Loader />
    </>
  ) : (
    <>
      <Header />
      <Navigation />
      <About />
      <Skills />
      <Timeline />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
