import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigation = [
    {
      id: 1,
      link: 'Home',
      to: '/',
      scroll: false,
    },
    {
      id: 2,
      link: 'About',
      to: '/about',
      scroll: false,
    },
    {
      id: 3,
      link: 'Contact',
      to: '/contact',
      scroll: false,
    },
  ];

  const LinkComponent = ({ to, scroll, children }) => {
    return scroll ? (
      <ScrollLink to={to} smooth duration={500}>
        {children}
      </ScrollLink>
    ) : (
      <RouterLink to={to}>
        {children}
      </RouterLink>
    );
  };

  return (
    <div name="nav_bar" className='flex justify-between items-center w-full h-24 text-white bg-slate-700 px-4'>
      <div>
        <LinkComponent to='/' scroll={false}>
          <h1 className='text-4xl ml-2 text-white font-sans cursor-pointer'>
            Foodtruck Finder
          </h1>
        </LinkComponent>
      </div>
      <ul className='hidden md:flex'>
        {navigation.map(({ id, link, to, scroll }) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-110 duration-200'>
            <LinkComponent to={to} scroll={scroll}>
              {link}
            </LinkComponent>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
        {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-800 text-white'>
          {navigation.map(({ id, link, to, scroll }) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              <LinkComponent to={to} scroll={scroll}>
                {link}
              </LinkComponent>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
