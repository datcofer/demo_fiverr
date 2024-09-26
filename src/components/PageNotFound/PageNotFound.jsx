import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../common/path'
import pageNotFoundAnimation from './../../assets/Animation/pageNotFoundAnimation.json'
import { useLottie } from 'lottie-react';
const PageNotFound = () => {
    const options = {
        animationData: pageNotFoundAnimation,
        loop: true
      };
    
      const { View } = useLottie(options);
    return (
        <div>
            <div className='w-full'>
            {View}
            </div>
            
            <Link to={path.homePage} className='mt-3 text-blue-600 inline-block hover:underline'>Bấm vào để quay về trang chủ</Link>
        </div>
    );
};

export default PageNotFound;