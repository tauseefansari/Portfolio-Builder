import { FC } from 'react';
import './About.css';
import { Link } from 'react-scroll';
import { imagePath } from '../../Helpers/Helpers';
import DynamicIcon from '../Common/DynamicIcon';
import { About as AboutProps, LetsTalkBtn } from '../../modals/configuration';

type Props = {
  aboutObj: AboutProps;
  letsTalk: LetsTalkBtn;
};

const About: FC<Props> = (props) => {
  const { id, header, title, aboutImage, aboutCards, aboutDescriptions } = props.aboutObj;
  const { letsTalk } = props;

  return (
    <section id={id}>
      <h5>{header}</h5>
      <h2>{title}</h2>
      <div className="container about__container">
        <div className="about__personal">
          <div className="about__personal_image">
            <img src={imagePath(aboutImage)} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {aboutCards.map((aboutCard, i) => (
              <article className="about__card" key={`AboutCard_${i}`}>
                <DynamicIcon iconName={aboutCard.iconName} className="about__icon" />
                <h5>{aboutCard.title}</h5>
                <small>{aboutCard.description}</small>
              </article>
            ))}
          </div>
          <p>{aboutDescriptions}</p>
          <Link smooth to={letsTalk.link} className="btn btn-primary">
            {letsTalk.title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
