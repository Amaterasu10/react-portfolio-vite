import React from 'react'
import { FaBars } from 'react-icons/fa';
export default function TopNav() {
  return (
    <nav className='flex'>
      <div className='inline-block p-3'>
        <FaBars size="2em"/>
      </div>
      <ul className='nav__ul h-fit'>
        <li className='inline-block'>Home</li>
        <li className='inline-block'>About</li>
      </ul>
    </nav>
  )
}
