import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <nav className='flex'>
      <div className='inline-block p-3'>
        <FaBars size="2em"/>
      </div>
      <ul className='nav__ul h-fit'>
        
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
