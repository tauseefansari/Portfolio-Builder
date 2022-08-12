import { FC } from 'react';
import { Timeline as TimelineProps } from '../../modals/configuration';
import './Timeline.css';

type Props = {
  timelineObj: TimelineProps;
};

const Timeline: FC<Props> = (props) => {
  const { id, header, title, timelineCards } = props.timelineObj;

  return (
    <section id={id}>
      <h5>{header}</h5>
      <h2>{title}</h2>
      <div className="container timeline__container">
        <ul>
          {timelineCards.map((card, i) => (
            <li key={`Timeline_${i}`}>
              <h2 className="timeline__date">{card.date}</h2>
              <h3 className="timeline__title">{card.title}</h3>
              <div className="timeline__descr">{card.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
