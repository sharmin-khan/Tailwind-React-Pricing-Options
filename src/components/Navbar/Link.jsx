import React from 'react';

const Link = ({route}) => {
    return (
     <li>
        <a className='hover:bg-amber-200 mr-8 py-2 px-5 rounded-lg duration-100' href={route.path}>{route.name}</a>
     </li>
    );
};

export default Link;