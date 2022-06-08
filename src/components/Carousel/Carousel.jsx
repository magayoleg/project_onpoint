import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Carousel.sass';

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  let touchStart = null;
  
  const updateIndex = (newIndex) => {
    if (newIndex === 0) {
      setActiveIndex(0);
    }
    if (activeIndex < children.length - 1) {
      setActiveIndex((prevState) => prevState + newIndex);
    }
  };

  const start = (e) => {
    touchStart = e.targetTouches[0].clientX;
  };

  const move = (e) => {
    let touchEnd = e.targetTouches[0].clientX;
    const minSwipeDistance = 200;
    if (!touchStart || !touchEnd) {
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isRightSwipe && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
    if (isLeftSwipe && activeIndex < children.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="carousel">
      <Navigation updateIndex={updateIndex} />
      <div
        className="carousel__inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {children.map((child, index) => {
          return (
            <div
              className="carousel-item"
              key={index}
              onTouchStart={start}
              onTouchMove={move}
            >
              {React.cloneElement(child, { updateIndex, activeIndex })}
            </div>
          );
        })}
      </div>
      <Logo />
    </div>
  );
};

export default Carousel;
