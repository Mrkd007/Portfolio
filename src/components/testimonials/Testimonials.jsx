import React from 'react';
import './testimonials.css';
import ClientImage from '../../assets/pic.png';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={ClientImage} alt="Client" />
          </div>
          <h5 className='client__name'>Ram</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolores? Placeat eaque in veniam ullam magnam. Reiciendis fugiat, atque amet, tenetur beatae dolor adipisci quis reprehenderit, ducimus dolorum esse labore?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={ClientImage} alt="Client" />
          </div>
          <h5 className='client__name'>Ram</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolores? Placeat eaque in veniam ullam magnam. Reiciendis fugiat, atque amet, tenetur beatae dolor adipisci quis reprehenderit, ducimus dolorum esse labore?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={ClientImage} alt="Client" />
          </div>
          <h5 className='client__name'>Ram</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolores? Placeat eaque in veniam ullam magnam. Reiciendis fugiat, atque amet, tenetur beatae dolor adipisci quis reprehenderit, ducimus dolorum esse labore?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={ClientImage} alt="Client" />
          </div>
          <h5 className='client__name'>Ram</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolores? Placeat eaque in veniam ullam magnam. Reiciendis fugiat, atque amet, tenetur beatae dolor adipisci quis reprehenderit, ducimus dolorum esse labore?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={ClientImage} alt="Client" />
          </div>
          <h5 className='client__name'>Ram</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolores? Placeat eaque in veniam ullam magnam. Reiciendis fugiat, atque amet, tenetur beatae dolor adipisci quis reprehenderit, ducimus dolorum esse labore?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials