import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    // console.log(pricing);
    return (
        <div className=' flex flex-col p-4 bg-amber-200 rounded-lg'>
           {/* card header */}

           <div className=''>
            <h1 className='text-3xl mb-2'>{pricing.name}</h1>
            <h4 className='text-xl'>{pricing.price}</h4>
           </div>
           {/* card body */}
           <div className='flex-1 bg-amber-100 p-4 rounded-lg mt-6'>
            <p>{pricing.description}</p>

           {
           pricing.features.map((feature,index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
           }
           </div>
           <button className='btn w-full mt-4 rounded-lg'>Subscribe</button>
        </div>
    );
};

export default PricingCard;