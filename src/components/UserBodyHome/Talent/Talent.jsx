import React from 'react'
import TalentItem from './TalentItem';
import CategoriesIcon from '../../Icon/TalentIcon/CategoriesIcon';
import HandshakeIcon from '../../Icon/TalentIcon/HandshakeIcon';
import LightningIcon from '../../Icon/TalentIcon/LightningIcon';
import SupportIcon from '../../Icon/TalentIcon/SupportIcon';
import fiverrTalent from './../../../assets/Video/fiverrTalent.mp4'



const Talent = () => {
    return (
        <div className='container mt-8'>
            <h1 className='text-6xl text-gray-600 py-10 '>A whole world of freelance<br /> talent at your fingertips</h1>
            <div className='grid grid-cols-4 gap-4 my-4'>
                <TalentItem icon={<CategoriesIcon />} title={"Over 700 categories"} text={"Get results from skilled freelancers from all over the world, for every task, at any price point."} />
                <TalentItem icon={<HandshakeIcon />} title={"Clear, transparent pricing"} text={"Pay per project or by the hour (Pro). Payments only get released when you approve."} />
                <TalentItem icon={<LightningIcon />} title={"Quality work done faster"} text={"Filter to find the right freelancers quickly and get great work delivered in no time, every time."} />
                <TalentItem icon={<SupportIcon />} title={"24/7 award-winning support"} text={"Chat with our team to get your questions answered or resolve any issues with your orders."} />
            </div>
            <div>
                <video width="100%" className='rounded-3xl' controls>
                    <source src={fiverrTalent} type="video/mp4" />
                </video>
            </div>
          
        </div>
    );
}

export default Talent;