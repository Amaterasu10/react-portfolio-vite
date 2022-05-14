import React from 'react'
import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <nav className='flex relative bg-white shadow-md'>
      { false &&
        <div className='inline-block p-2 absolute'>
          <FaBars size="2em" className='hover:cursor-pointer hover:bg-slate-200'/> 
        </div>
      }
      <ul className='nav__ul h-fit p-3'>
        
        <li className='inline-block hover:underline'>
          <Link to="/">Home</Link>
        </li>

        <li className='inline-block hover:underline'>
          <Link to="/contact">Contact</Link>
        </li>

        <li className='inline-block hover:underline'>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
