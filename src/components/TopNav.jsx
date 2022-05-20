import React from 'react'
import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <nav className='flex relative bg-amber-400 shadow-md'>
      { false &&
        <div className='inline-block p-2 absolute'>
          <FaBars size="2em" className='hover:cursor-pointer hover:bg-slate-200'/> 
        </div>
      }
      <ul className='nav__ul h-fit p-3 2xl:p-7'>
        
        <li className='inline-block hover:underline 2xl:text-3xl'>
          <Link to="/">Home</Link>
        </li>

        <li className='inline-block hover:underline 2xl:text-3xl'>
          <Link to="/contact">Contact</Link>
        </li>

        <li className='inline-block hover:underline 2xl:text-3xl'>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
