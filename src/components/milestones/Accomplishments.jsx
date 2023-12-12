import React from 'react';
import AccomplishmentData from '../../data/AccomplishmentsData';
import AccomplishmentCard from './AccomplishmentCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Accomplishments = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className='mx-auto max-w-screen-md'>
      <div className='text-2xl text-primary-dark dark:text-primary-light font-bold flex items-center justify-center mb-5'>
        My Work Experience
      </div>
      <div className='slide-container m-2 md:mx-16 md:px-12'>
        <Slider {...sliderSettings} className='md:pl-5'>
          {AccomplishmentData.map((data) => (
            <div className='slider-item'>
              <AccomplishmentCard id={data.id} image={data.img} title={data.title} description={data.description} />
            </div>
          ))}
        </Slider>
        <style>{`
                  /* Left Arrow */
                  .slick-prev:before {
                      color: #0369a1;
                      font-size: 30px;
                      margin-left: 8px;
                  }

                  /* Right Arrow */
                  .slick-next:before {
                      color: #0369a1;
                      font-size: 30px;
                      margin-right: 8px;
                  }

                  /* Ensure arrows are visible on small screens */
                  .slick-prev, .slick-next {
                      @media only screen and (max-width: 768px) {
                          font-size: 20px;
                      }
                  }
              `}</style>
      </div>
    </div>
  );
};

export default Accomplishments;
