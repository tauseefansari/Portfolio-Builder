import { FC } from 'react';
import './Timeline.css';

const Timeline: FC = () => {
  return (
    <section id="timeline">
      <h5>How I Reach Here</h5>
      <h2>My Journey</h2>
      <div className="container timeline__container">
        <ul>
          <li>
            <h2 className="timeline__date">2002</h2>
            <h3 className="timeline__title">Title 1</h3>
            <div className="timeline__descr">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam
              fugiat est numquam harum, accusamus suscipit consequatur laboriosam!
            </div>
          </li>
          <li>
            <h2 className="timeline__date">2007</h2>
            <h3 className="timeline__title">Title 2</h3>
            <h4 className="timeline__descr">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum
              vero nihil veniam.
            </h4>
          </li>
          <li>
            <h2 className="timeline__date">2012</h2>
            <h3 className="timeline__title">Title 3</h3>
            <h4 className="timeline__descr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur
              soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod
              reprehenderit, sequi quo, et dolorum saepe nulla hic.
            </h4>
          </li>
          <li>
            <h2 className="timeline__date">2017</h2>
            <h3 className="timeline__title">Title 4</h3>
            <h4 className="timeline__descr">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque.
            </h4>
          </li>
          <li>
            <h2 className="timeline__date">2022</h2>
            <h3 className="timeline__title">Title 5</h3>
            <h4 className="timeline__descr">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.
            </h4>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
