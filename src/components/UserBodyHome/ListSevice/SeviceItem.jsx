import React from 'react'

const SeviceItem = ({ text, image, bgColor }) => {
    return (
        <div className={`slide flex flex-col justify-between items-center space-y-4 rounded-lg shadow-lg border cursor-pointer p-4 ${bgColor}`}>
            <p className='font-bold text-white text={16px} h-1/4'>{text}</p>
            <img src={image} alt={text} className='rounded-lg w-full object-cover h-3/4' />
        </div>
    );
};

export default SeviceItem;