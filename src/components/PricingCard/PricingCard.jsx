import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    // console.log(pricing);
    return (
        <div className='border p-4 bg-amber-200 rounded-lg'>
           {/* card header */}

           <div className=''>
            <h1 className='text-2xl'>{pricing.name}</h1>
            <h4 className='text-lg'>{pricing.price}</h4>
           </div>
           {/* card body */}
           <div>
            <p>{pricing.description}</p>

           {
           pricing.features.map((feature,index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
           }
           </div>
        </div>
    );
};

export default PricingCard;