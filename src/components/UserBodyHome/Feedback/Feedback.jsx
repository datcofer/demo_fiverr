import React, { useState } from 'react';
import './Feedback.scss';
import feedback1 from './../../../assets/Video/feedback/feedback1.mp4';
import feedback2 from './../../../assets/Video/feedback/feedback2.mp4';
import feedback3 from './../../../assets/Video/feedback/feedback3.mp4';
import feedback4 from './../../../assets/Video/feedback/feedback4.mp4';

const slidesData = [
    {
        id: 1,
        text: `"We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."`,
        videoSrc: feedback1
    },
    {
        id: 2,
        text: `"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."`,
        videoSrc: feedback2
    },
    {
        id: 3,
        text: `"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."`,
        videoSrc: feedback3
    },
    {
        id: 4,
        text: `"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."`,
        videoSrc: feedback4
    }
];

const Feedback = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='container mt-8'>
            <h1 className='text-6xl text-gray-600 py-8'>What they're saying about Fiverr</h1>
            <div className="slider-container mt-8">
                {/* Nút mũi tên bên trái */}
                <button className="arrow-btn" onClick={handlePrev}>
                    <i class="fa-solid fa-chevron-left"></i>
                </button>

                {/* Slide hiển thị video và text */}
                <div className="slide-content">
                    <video key={currentIndex} width="600" className='rounded-lg' controls>
                        <source src={slidesData[currentIndex].videoSrc} type="video/mp4" />
                    </video>
                    <p className="text-content text-green-900 font-bold italic">{slidesData[currentIndex].text}</p>
                </div>

                {/* Nút mũi tên bên phải */}
                <button className="arrow-btn" onClick={handleNext}>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Feedback;
