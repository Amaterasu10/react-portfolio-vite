import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <nav className='flex relative'>
      <div className='inline-block p-3 absolute'>
        <FaBars size="2em"/>
      </div>
      <ul className='nav__ul h-fit p-3'>
        
        <li className='inline-block'>
          <Link to="/">Home</Link>
        </li>

        <li className='inline-block'>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
