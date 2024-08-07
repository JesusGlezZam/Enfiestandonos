import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SectionCarousel = ({ title, items }) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <div className="carousel-section">
        <h2>{title}</h2>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="feature">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
}    
