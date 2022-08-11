import { FC } from 'react';
import { imagePath } from '../../Helpers/Helpers';
import { Portfolio as PortfolioProps } from '../../modals/configuration';
import './Portfolio.css';

type Props = {
  portfolioObj: PortfolioProps;
};

const Portfolio: FC<Props> = (props) => {
  const { id, header, title, portfolioCards } = props.portfolioObj;

  return (
    <section id={id}>
      <h5>{header}</h5>
      <h2>{title}</h2>
      <div className="container portfolio__container">
        {portfolioCards.map((portfolio, i) => (
          <article key={`Portfolio_${i}`} className="portfolio__item">
            <div className="portfolio__item_image">
              <img src={imagePath(portfolio.image)} alt="Portfolio 1" />
            </div>
            <h3>{portfolio.title}</h3>
            <p>{portfolio.description}</p>
            <div className="portfolio__item_cta">
              {portfolio.buttons.map((button, j) => (
                <a
                  key={`PortfolioButton_${j}`}
                  href={button.url}
                  rel="noreferrer"
                  target="_blank"
                  className={`btn ${j % 2 !== 0 ? 'btn-primary' : ''}`}
                >
                  {button.title}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
