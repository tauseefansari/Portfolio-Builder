import { FC } from 'react';
import DynamicIcon from '../Common/DynamicIcon';
import './Timeline.css';

const Timeline: FC = () => {
  return (
    <section id="services">
      <h5>How I Reach Here</h5>
      <h2>My Journey</h2>
      <div className="container">
        <ul className="timeline">
          <li>
            <div className="timeline__image">
              <DynamicIcon iconName="GitHub" className="yellow__icon" />
            </div>
            <div className="timeline__panel">
              <div className="timeline__heading">
                <h4>2009-2011</h4>
                <h4 className="subheading">Our Humble Beginnings</h4>
              </div>
              <div className="timeline__body">
                <p className="text__muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius
                  sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde,
                  sed, incidunt et ea quo dolore laudantium consectetur!
                </p>
              </div>
            </div>
          </li>
          <li className="timeline__inverted">
            <div className="timeline__image">
              <DynamicIcon iconName="GitHub" className="green__icon" />
            </div>
            <div className="timeline__panel">
              <div className="timeline__heading">
                <h4>March 2011</h4>
                <h4 className="subheading">An Agency is Born</h4>
              </div>
              <div className="timeline__body">
                <p className="text__muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius
                  sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde,
                  sed, incidunt et ea quo dolore laudantium consectetur!
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline__image">
              <DynamicIcon iconName="GitHub" className="teal__icon" />
            </div>
            <div className="timeline__panel">
              <div className="timeline__heading">
                <h4>December 2015</h4>
                <h4 className="subheading">Transition to Full Service</h4>
              </div>
              <div className="timeline__body">
                <p className="text__muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius
                  sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde,
                  sed, incidunt et ea quo dolore laudantium consectetur!
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
