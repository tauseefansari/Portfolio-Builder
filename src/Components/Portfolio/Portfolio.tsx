import { FC } from 'react';
import PF1 from '../../assets/portfolio1.jpg';
import PF2 from '../../assets/portfolio2.jpg';
import PF3 from '../../assets/portfolio3.jpg';
import PF4 from '../../assets/portfolio4.jpg';
import PF5 from '../../assets/portfolio5.png';
import PF6 from '../../assets/portfolio6.jpg';
import './Portfolio.css';

const Portfolio: FC = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={PF1} alt="Portfolio 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item_cta">
            <a
              href="https://github.com/tauseefansari"
              rel="noreferrer"
              target="_blank"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://github.com/tauseefansari"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={PF2} alt="Portfolio 2" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item_cta">
            <a
              href="https://github.com/tauseefansari"
              rel="noreferrer"
              target="_blank"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://github.com/tauseefansari"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={PF3} alt="Portfolio 3" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item_cta">
            <a
              href="https://github.com/tauseefansari"
              rel="noreferrer"
              target="_blank"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://github.com/tauseefansari"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={PF4} alt="Portfolio 4" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item_cta">
            <a
              href="https://github.com/tauseefansari"
              rel="noreferrer"
              target="_blank"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://github.com/tauseefansari"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={PF5} alt="Portfolio 5" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item_cta">
            <a
              href="https://github.com/tauseefansari"
              rel="noreferrer"
              target="_blank"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://github.com/tauseefansari"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={PF6} alt="Portfolio 6" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item_cta">
            <a
              href="https://github.com/tauseefansari"
              rel="noreferrer"
              target="_blank"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://github.com/tauseefansari"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
