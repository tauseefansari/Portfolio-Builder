import { FC } from 'react';
import DevIcon from 'Common/DevIcon';
import 'Components/Skills/Skills.css';
import { Skills as SkillsProps } from 'modals/configuration';

type Props = {
  skillsObj: SkillsProps;
};

const Skills: FC<Props> = (props) => {
  const { id, header, title, skillsCards } = props.skillsObj;

  return (
    <section id={id}>
      <h5>{header}</h5>
      <h2>{title}</h2>
      <div className="container skills__container">
        <ul>
          {skillsCards.map((skill, i) => (
            <li key={`Skills_${i}`}>
              <div className="skills__icon">
                <DevIcon iconName={skill.iconName} />
              </div>
              <h3 className="skills__title">{skill.title}</h3>
              <div className="skills__progress-bar">
                <div className="skills__progress-label">{skill.progress}</div>
                <div
                  className="skills__progress-animation"
                  style={{ marginLeft: skill.progress }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
