import React, { useState } from 'react';
import SeviceItem from './SeviceItem';
import './SeviceSlide.scss';
import img17 from '../../../assets/images/imgSevice/img17.png';
import img18 from '../../../assets/images/imgSevice/img18.png';
import img19 from '../../../assets/images/imgSevice/img19.png';
import img20 from '../../../assets/images/imgSevice/img20.png';
import img21 from '../../../assets/images/imgSevice/img21.png';
import img22 from '../../../assets/images/imgSevice/img22.png';
import img23 from '../../../assets/images/imgSevice/img23.png';
import img24 from '../../../assets/images/imgSevice/img24.png';
import img25 from '../../../assets/images/imgSevice/img25.png';
import img27 from '../../../assets/images/imgSevice/img27.png';
import img28 from '../../../assets/images/imgSevice/img28.png';

const slidesData = [
  { text: 'Website Development', image: img17, bgColor: 'bg-red-500' },
  { text: 'Logo Design', image: img18, bgColor: 'bg-green-500' },
  { text: 'SEO', image: img19, bgColor: 'bg-blue-500' },
  { text: 'Interior Design', image: img20, bgColor: 'bg-yellow-500' },
  { text: 'Social Media Marketing', image: img21, bgColor: 'bg-purple-500' },
    { text: 'Voice Over', image: img22, bgColor: 'bg-pink-500' },
    { text: 'Voice Over', image: img22, bgColor: 'bg-pink-500' },
  { text: 'Software Development', image: img23, bgColor: 'bg-indigo-500' },
  { text: 'Data Science & ML', image: img24, bgColor: 'bg-gray-500' },
  { text: 'Product Photographers', image: img25, bgColor: 'bg-orange-500' },
  { text: 'E-Commerce Marketing', image: img27, bgColor: 'bg-yellow-700' },
  { text: 'Video Editing', image: img28, bgColor: 'bg-red-700' },
];

const SeviceSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 6 < slidesData.length ? prevIndex + 6 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 6 >= 0 ? prevIndex - 6 : 0
    );
  };

    return (
        <div className='container mt-8'>
            <h1 className='text-6xl text-gray-600'>Popular services</h1>
    <div className="slider-container flex items-center justify-between">
      {/* Nút mũi tên bên trái */}
      <button
        className="arrow-btn"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      {/* Slide Track */}
      <div className="slide-track grid grid-cols-6 gap-4 overflow-hidden">
        {slidesData.slice(currentIndex, currentIndex + 6).map((slide, index) => (
          <SeviceItem
            text={slide.text}
            image={slide.image}
            bgColor={slide.bgColor}
          />
        ))}
      </div>

      {/* Nút mũi tên bên phải */}
      <button
        className="arrow-btn"
        onClick={handleNext}
        disabled={currentIndex + 6 >= slidesData.length}
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
            </div>
            </div>
  );
};

export default SeviceSlide;
