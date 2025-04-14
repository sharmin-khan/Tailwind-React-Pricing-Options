import React from 'react';
import Link from './Link';

const NavigationData =
[
  {
    "id": 1,
    "name": "Home",
    "path": "/"
  },
  {
    "id": 2,
    "name": "About",
    "path": "/about"
  },
  {
    "id": 3,
    "name": "Services",
    "path": "/services"
  },
  {
    "id": 4,
    "name": "Blog",
    "path": "/blog"
  },
  {
    "id": 5,
    "name": "Contact",
    "path": "/contact"
  }
];


const Navbar = () => {
    return (
        <nav>
        <ul className='flex'>
        {
            NavigationData.map(route => <Link key={route.id} route={route}></Link>)
          }
        </ul>
            {/* <ul className='flex'>
                {
                    NavigationData.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}
        </nav>
    );
};

export default Navbar;