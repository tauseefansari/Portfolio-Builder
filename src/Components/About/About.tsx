import { FC } from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import './About.css';
import { Link } from 'react-scroll';
import { imagePath } from '../../Helpers/Helpers';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const About: FC = () => {
  const configuration = useSelector((state: RootState) => state.config.configuration);
  const { about } = configuration.imagesPreload;

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__personal">
          <div className="about__personal_image">
            <img src={imagePath(about)} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa deserunt nobis saepe
            mollitia nostrum nesciunt quod exercitationem impedit atque adipisci culpa repudiandae,
            amet at illum dolores maiores qui sunt.
          </p>
          <Link smooth to="contact" className="btn btn-primary">
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
