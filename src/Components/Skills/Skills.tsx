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
            <h3 className="skills__title">React</h3>
            <div className="skills__progress-bar">
              <div className="skills__progress-label">95%</div>
              <div className="skills__progress-animation" style={{ marginLeft: '95%' }}></div>
            </div>
          </li>
          <li>
            <div className="skills__icon">
              <DevIcon iconName="DiHtml5" />
            </div>
            <h3 className="skills__title">HTML 5</h3>
            <div className="skills__progress-bar">
              <div className="skills__progress-label">85%</div>
              <div className="skills__progress-animation" style={{ marginLeft: '85%' }}></div>
            </div>
          </li>
          <li>
            <div className="skills__icon">
              <DevIcon iconName="DiReact" />
            </div>
            <h3 className="skills__title">React</h3>
            <div className="skills__progress-bar">
              <div className="skills__progress-label">80%</div>
              <div className="skills__progress-animation" style={{ marginLeft: '80%' }}></div>
            </div>
          </li>
          <li>
            <div className="skills__icon">
              <DevIcon iconName="DiHtml5" />
            </div>
            <h3 className="skills__title">HTML 5</h3>
            <div className="skills__progress-bar">
              <div className="skills__progress-label">60%</div>
              <div className="skills__progress-animation" style={{ marginLeft: '60%' }}></div>
            </div>
          </li>
          <li>
            <div className="skills__icon">
              <DevIcon iconName="DiReact" />
            </div>
            <h3 className="skills__title">React</h3>
            <div className="skills__progress-bar">
              <div className="skills__progress-label">95%</div>
              <div className="skills__progress-animation" style={{ marginLeft: '95%' }}></div>
            </div>
          </li>
          <li>
            <div className="skills__icon">
              <DevIcon iconName="DiHtml5" />
            </div>
            <h3 className="skills__title">HTML 5</h3>
            <div className="skills__progress-bar">
              <div className="skills__progress-label">85%</div>
              <div className="skills__progress-animation" style={{ marginLeft: '85%' }}></div>
            </div>
          </li>
          <li>
            <div className="skills__icon">
              <DevIcon iconName="DiReact" />
            </div>
            <h3 className="skills__title">React</h3>
            <div className="skills__progress-bar">
              <div className="skills__progress-label">80%</div>
              <div className="skills__progress-animation" style={{ marginLeft: '80%' }}></div>
            </div>
          </li>
          <li>
            <div className="skills__icon">
              <DevIcon iconName="DiHtml5" />
            </div>
            <h3 className="skills__title">HTML 5</h3>
            <div className="skills__progress-bar">
              <div className="skills__progress-label">60%</div>
              <div className="skills__progress-animation" style={{ marginLeft: '60%' }}></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
