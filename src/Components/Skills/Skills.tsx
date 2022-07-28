import { FC } from 'react';
import DevIcon from '../Common/DevIcon';
import './Skills.css';

const Skills: FC = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container skills__container">
        <ul>
          <li>
            <div className="skills__icon">
              <DevIcon iconName="DiReact" />
            </div>
            <h3 className="skills__title">Codepen</h3>
            <div className="skills__bar">
              <div className="fill" style={{ width: '50%' }}>
                <div className="text">50%</div>
              </div>
              <div className="text">50%</div>
            </div>
          </li>
          <li>
            <div className="skills__icon">
              <DevIcon iconName="DiHtml5" />
            </div>
            <h3 className="skills__title">HTML 5</h3>
            <div className="skills__bar">
              <div className="fill" style={{ width: '50%' }}>
                <div className="text">50%</div>
              </div>
              <div className="text">50%</div>
            </div>
          </li>
          <li>
            <div className="skills__icon">
              <DevIcon iconName="DiReact" />
            </div>
            <h3 className="skills__title">Codepen</h3>
            <div className="skills__bar">
              <div className="fill" style={{ width: '50%' }}>
                <div className="text">50%</div>
              </div>
              <div className="text">50%</div>
            </div>
          </li>
          <li>
            <div className="skills__icon">
              <DevIcon iconName="DiHtml5" />
            </div>
            <h3 className="skills__title">HTML 5</h3>
            <div className="skills__bar">
              <div className="fill" style={{ width: '50%' }}>
                <div className="text">50%</div>
              </div>
              <div className="text">50%</div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
