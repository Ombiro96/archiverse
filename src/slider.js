import React, { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      text: 'Slide 1',
      image: './1.png',
    },
    {
      id: 2,
      text: 'Slide 2',
      image: './2.png',
    },
    {
      id: 3,
      text: 'Slide 3',
      image: './3.png',
    },
    {
        id: 4,
        text: 'Slide 4',
        image: './4.png',
      },
      {
        id: 5,
        text: 'Slide 5',
        image: './5.png',
      },
      {
        id: 6,
        text: 'Slide 6',
        image: './6.png',
      }
  ];

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );
  };

  return (
    <div className='slider'>
        <button onClick={handlePrev}><i className="fas fa-arrow-left"></i></button>
      <div className='slider-images'><img src={slides[currentSlide].image} alt="slide" /></div>
      {/* <p>{slides[currentSlide].text}</p> */}
      <button onClick={handleNext}><i className="fas fa-arrow-right"></i></button>
    </div>
  );
};

export default Slider;
