import React from 'react'

const TalentItem = ({icon, title, text}) => {
    return (
        <div className='flex flex-col justify-between gap-5 space-y-4 p-4'>
            <div className='h-auto w-10'>{icon}</div>
            <h2 className='text-gray-800 text-3xl'>{title}</h2>
            <p className='text-gray-500 text-lg'>{text}</p>
        </div>
    );
}

export default TalentItem;