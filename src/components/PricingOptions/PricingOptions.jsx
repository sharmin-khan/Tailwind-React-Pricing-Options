import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise)

    // console.log(pricingData);

    return (
        <div>
            <h2 className='text-2xl font-bold text-center text-gray-800  mt-18 mb-8'>Get our MemberShip</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;