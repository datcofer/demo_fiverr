import React from 'react'
import useResponsive from '../../../hooks/useReponsive';
import { Grid } from 'antd';
import ProgrammingTechIcon from '../../Icon/IconJob/ProgrammingTechIcon';
import GraphicsDesignIcon from '../../Icon/IconJob/GraphicsDesignIcon';
import DigitalMarketing from '../../Icon/IconJob/DigitalMarketing';
import WritingTranslationIcon from '../../Icon/IconJob/WritingTranslationIcon';
import VideoAnimationIcon from '../../Icon/IconJob/VideoAnimationIcon';
import AIServicesIcon from '../../Icon/IconJob/AIServicesIcon';
import MusicAudioIcon from '../../Icon/IconJob/MusicAudioIcon';
import BusinessIcon from '../../Icon/IconJob/BusinessIcon';
import ConsultingIcon from '../../Icon/IconJob/ConsultingIcon';

const ListJob = () => {
    const isResponsive = useResponsive({
        mobile: 576,
        tablet: 768,
    })
    return (
        <div className='container  mt-8'>
            <div className={`grid ${isResponsive.mobile ? "grid-cols-2" : isResponsive.tablet ? "grid-cols-5" : "grid-cols-9"} gap-4 my-4`}>
                <div className='jobItem font-bold text-gray-800 border rounded-lg shadow-lg cursor-pointer hover:bg-green-100  duration-500 space-y-4 p-4'>
                    <div className="h-auto w-10"><ProgrammingTechIcon /></div>
                    <p className={`${isResponsive.mobile ? "text-md" : "text-sm"}`}>Programming & Tech</p>
                </div>
                <div className='jobItem font-bold text-gray-800 border rounded-lg shadow-lg cursor-pointer hover:bg-green-100 duration-500 space-y-4 p-4'>
                    <div className="h-auto w-10"><GraphicsDesignIcon /></div>
                    <p className={`${isResponsive.mobile ? "text-md" : "text-sm"}`}>Graphics & Design</p>
                </div>
                <div className='jobItem font-bold text-gray-800 border rounded-lg shadow-lg cursor-pointer hover:bg-green-100 duration-500 space-y-4 p-4'>
                    <div className="h-auto w-10"><DigitalMarketing /></div>
                    <p className={`${isResponsive.mobile ? "text-md" : "text-sm"}`}>Digital Marketing</p>
                </div>
                <div className='jobItem font-bold text-gray-800 border rounded-lg shadow-lg cursor-pointer hover:bg-green-100 duration-500 space-y-4 p-4'>
                    <div className="h-auto w-10"><WritingTranslationIcon /></div>
                    <p className={`${isResponsive.mobile ? "text-md" : "text-sm"}`}>Writing & Translation</p>
                </div>
                <div className='jobItem font-bold text-gray-800 border rounded-lg shadow-lg cursor-pointer hover:bg-green-100 duration-500 space-y-4 p-4'>
                    <div className="h-auto w-10"><VideoAnimationIcon /></div>
                    <p className={`${isResponsive.mobile ? "text-md" : "text-sm"}`}>Video & Animation</p>
                </div>
                <div className='jobItem font-bold text-gray-800 border rounded-lg shadow-lg cursor-pointer hover:bg-green-100 duration-500 space-y-4 p-4'>
                    <div className="h-auto w-10"><AIServicesIcon /></div>
                    <p className={`${isResponsive.mobile ? "text-md" : "text-sm"}`}>AI Services</p>
                </div>
                <div className='jobItem font-bold text-gray-800 border rounded-lg shadow-lg cursor-pointer hover:bg-green-100 duration-500 space-y-4 p-4'>
                    <div className="h-auto w-10"><MusicAudioIcon /></div>
                    <p className={`${isResponsive.mobile ? "text-md" : "text-sm"}`}>Music & Audio</p>
                </div>
                <div className='jobItem font-bold text-gray-800 border rounded-lg shadow-lg cursor-pointer hover:bg-green-100 duration-500 space-y-4 p-4'>
                    <div className="h-auto w-10"><BusinessIcon /></div>
                    <p className={`${isResponsive.mobile ? "text-md" : "text-sm"}`}>Business</p>
                </div>
                <div className='jobItem font-bold text-gray-800 border rounded-lg shadow-lg cursor-pointer hover:bg-green-100 duration-500 space-y-4 p-4'>
                    <div className="h-auto w-10"><ConsultingIcon /></div>
                    <p className={`${isResponsive.mobile ? "text-md" : "text-sm"}`}>Consulting</p>
                </div>
            </div>
        </div>
    );
};

export default ListJob;