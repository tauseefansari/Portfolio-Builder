import { FC } from 'react';
import AV1 from '../../assets/avatar1.jpg';
import AV2 from '../../assets/avatar2.jpg';
import AV3 from '../../assets/avatar3.jpg';
import AV4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonials.css';

const Testimonials: FC = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AV1} alt="Avatar 1" />
          </div>
          <h5 className="client__name">Rahul Arekar</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea dolorem deserunt
            dignissimos explicabo provident excepturi nam! Nobis explicabo, optio praesentium earum
            quia in accusamus expedita eveniet quos aliquid. Iusto.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AV2} alt="Avatar 2" />
          </div>
          <h5 className="client__name">Tauseef Ansari</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea dolorem deserunt
            dignissimos explicabo provident excepturi nam! Nobis explicabo, optio praesentium earum
            quia in accusamus expedita eveniet quos aliquid. Iusto.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AV3} alt="Avatar 3" />
          </div>
          <h5 className="client__name">Mohsin Essani</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea dolorem deserunt
            dignissimos explicabo provident excepturi nam! Nobis explicabo, optio praesentium earum
            quia in accusamus expedita eveniet quos aliquid. Iusto.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AV4} alt="Avatar 4" />
          </div>
          <h5 className="client__name">Yash Kunte</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea dolorem deserunt
            dignissimos explicabo provident excepturi nam! Nobis explicabo, optio praesentium earum
            quia in accusamus expedita eveniet quos aliquid. Iusto.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
