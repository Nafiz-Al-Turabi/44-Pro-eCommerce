import React from 'react';
import image from './../../assets/SocialPromot/saleblock_speedcustom.jpg'
import image2 from './../../assets/SocialPromot/240906_EndofSeason_Homepage_new.jpg'

const SocialPromot = () => {
    return (
        <div className='mt-20 max-w-[1600px] mx-auto'>
            <div className='text-center'>
                <p className='text-lg'>Always Custom Since 2011</p>
                <h1 className='text-5xl font-bold mt-2'>Over 500,000 Players Choose 44</h1>
            </div>
            <div className='flex gap-5 mt-10'>
                <div className='group'>
                    <img src={image} alt="" className='max-w-5xl'/>
                    <p className=' group-hover:underline text-lg font-bold text-red-500'>Need It Fast</p>
                    <p className=' group-hover:underline text-lg'>Save 40% off your new custom bat while supplies last</p>
                </div>
                <div className='group'>
                    <img src={image2} alt="" className='max-w-3xl' />
                    <p className=' group-hover:underline text-lg font-bold text-red-500'>End of Season Sale</p>
                    <p className=' group-hover:underline text-lg'>Get Speed Custom Infield or Outfield models in 2 weeks</p>
                </div>
            </div>
        </div>
    );
};

export default SocialPromot;