import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';


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

  const [open, setOpen] =useState(false)

  const Links =  NavigationData.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-between mx-10 mt-6 text-lg'>
          <span className='flex' onClick={() => setOpen(!open)}>
            {
            open ?
            <X className='md:hidden'></X> : 
            <Menu className='md:hidden'></Menu>
            }
            <ul className={`md:hidden absolute duration-1000
             ${open ? "top-8":"-top-64"}
               `}>
              {Links}
            </ul>

            <h1 className='hidden lg:block'>Navbar</h1>
          </span>
        <ul className='md:flex hidden'>
        {
           Links
          }
        </ul>
        <button>Sign In</button>
        </nav>
    );
};

export default Navbar;