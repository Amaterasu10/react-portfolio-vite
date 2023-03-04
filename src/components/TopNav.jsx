import React from 'react'
import { Link } from 'react-router-dom';

export default function TopNav({ navs }) {
  return (
    <nav className='flex relative bg-white shadow-md'>
      { false &&
        <div className='inline-block p-2 absolute'>
          <FaBars size="2em" className='hover:cursor-pointer hover:bg-slate-200'/> 
        </div>
      }
      <ul className='nav__ul h-fit p-3 2xl:p-7'>
        {
          navs.map(
            (navData, key) => (
              <Nav 
              key={ key }
                text={ navData.text } 
                navOnclick={ ()=> navData.ref.current.scrollIntoView() }
              />
            )
          )
        }
        
      </ul>
    </nav>
  )
}

const Nav = ({text, navOnclick}) => {
  return (
    <li 
      className='
        inline-block 
        hover:underline 
        2xl:text-3xl 
        cursor-pointer
      '
      onClick={ navOnclick }
    >
      { text }
    </li>
  )
};