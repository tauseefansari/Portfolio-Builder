import { FC } from 'react';
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'Components/Testimonials/Testimonials.css';
import { Testimonials as TestimonialsProps } from 'modals/configuration';
import { imagePath } from 'Helpers/Helpers';

type Props = {
  testimonialsObj: TestimonialsProps;
};

const Testimonials: FC<Props> = (props) => {
  const { id, header, title, testimonialsCards } = props.testimonialsObj;

  return (
    <section id={id}>
      <h5>{header}</h5>
      <h2>{title}</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialsCards.map((testimonial, i) => (
          <SwiperSlide className="testimonial" key={`Testimonials_${i}`}>
            <div className="client__avatar">
              <img src={imagePath(testimonial.image)} alt="Avatar 1" />
            </div>
            <h5 className="client__name">{testimonial.title}</h5>
            <small className="client__review">{testimonial.description}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
