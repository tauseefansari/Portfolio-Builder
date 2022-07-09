import { FC } from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './Experience.css';

const Experience: FC = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div className="experience__label">
                <h4>HTML</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div className="experience__label">
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div className="experience__label">
                <h4>JavaScript</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div className="experience__label">
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div className="experience__label">
                <h4>React</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div className="experience__label">
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div className="experience__label">
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div className="experience__label">
                <h4>MySQL</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div className="experience__label">
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div className="experience__label">
                <h4>Python</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
