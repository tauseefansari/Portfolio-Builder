import { FC } from 'react';
import DevIcon from '../Common/DevIcon';
import './Skills.css';

const Skills: FC = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container">
        <div className="badge yellow">
          <div className="circle">
            <DevIcon iconName="DiReact" />
          </div>
          <div className="bar">
            <div className="fill" style={{ width: '50%' }}>
              <div className="text">50%</div>
            </div>
            <div className="text">50%</div>
          </div>
        </div>
        <div className="badge orange">
          <div className="circle">
            <DevIcon iconName="DiJsBadge" />
          </div>
          <div className="bar">
            <div className="fill" style={{ width: '50%' }}>
              <div className="text">50%</div>
            </div>
            <div className="text">50%</div>
          </div>
        </div>
        <div className="badge pink">
          <div className="circle">
            <DevIcon iconName="DiAngularSimple" />
          </div>
          <div className="bar">
            <div className="fill" style={{ width: '50%' }}>
              <div className="text">50%</div>
            </div>
            <div className="text">50%</div>
          </div>
        </div>
        <div className="badge red">
          <div className="circle">
            <DevIcon iconName="DiAndroid" />
          </div>
          <div className="bar">
            <div className="fill" style={{ width: '50%' }}>
              <div className="text">50%</div>
            </div>
            <div className="text">50%</div>
          </div>
        </div>
        <div className="badge purple">
          <div className="circle">
            <DevIcon iconName="DiCss3" />{' '}
          </div>
          <div className="bar">
            <div className="fill" style={{ width: '50%' }}>
              <div className="text">50%</div>
            </div>
            <div className="text">50%</div>
          </div>
        </div>
        <div className="badge teal">
          <div className="circle">
            <DevIcon iconName="DiGit" />{' '}
          </div>
          <div className="bar">
            <div className="fill" style={{ width: '50%' }}>
              <div className="text">50%</div>
            </div>
            <div className="text">50%</div>
          </div>
        </div>
        <div className="badge blue">
          <div className="circle">
            <DevIcon iconName="DiHtml5" />{' '}
          </div>
          <div className="bar">
            <div className="fill" style={{ width: '50%' }}>
              <div className="text">50%</div>
            </div>
            <div className="text">50%</div>
          </div>
        </div>
        <div className="badge blue-dark">
          <div className="circle">
            <DevIcon iconName="DiJava" />{' '}
          </div>
          <div className="bar">
            <div className="fill" style={{ width: '50%' }}>
              <div className="text">50%</div>
            </div>
            <div className="text">50%</div>
          </div>
        </div>
        <div className="badge green">
          <div className="circle">
            <DevIcon iconName="DiPhp" />{' '}
          </div>
          <div className="bar">
            <div className="fill" style={{ width: '50%' }}>
              <div className="text">50%</div>
            </div>
            <div className="text">50%</div>
          </div>
        </div>
        <div className="badge green-dark">
          <div className="circle">
            <DevIcon iconName="DiMsqlServer" />{' '}
          </div>
          <div className="bar">
            <div className="fill" style={{ width: '50%' }}>
              <div className="text">50%</div>
            </div>
            <div className="text">50%</div>
          </div>
        </div>
        <div className="badge silver">
          <div className="circle">
            <DevIcon iconName="DiNodejs" />{' '}
          </div>
          <div className="bar">
            <div className="fill" style={{ width: '50%' }}>
              <div className="text">50%</div>
            </div>
            <div className="text">50%</div>
          </div>
        </div>
        <div className="badge gold">
          <div className="circle">
            <DevIcon iconName="DiVisualstudio" />{' '}
          </div>
          <div className="bar">
            <div className="fill" style={{ width: '50%' }}>
              <div className="text">50%</div>
            </div>
            <div className="text">50%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
