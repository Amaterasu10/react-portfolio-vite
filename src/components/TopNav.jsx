import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';

import useCheckMobileScreen from '../hooks/useCheckMobileScreen';

export default function TopNav({ navs }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const { isMobileScreen } = useCheckMobileScreen()

  return (
    <nav 
    className='
      flex 
      relative 
      flex-col
      
    '>
      { isMobileScreen &&
        <div 
          className='
            w-fit
          '
          >
          <div
            className='nav-icon-container group'
            onClick={
              ()=> setIsCollapsed(!isCollapsed)
            } 
          >
            <FaBars size={"2rem"} className='nav-icon'/> 

            <span className='block text-center'>
              {isCollapsed ? 'close': 'open'}
            </span>
          </div>
        </div>
      }

      { (isCollapsed || !isMobileScreen) &&
        <ul className='nav__ul'>

          {
            navs.map(
              (navData, key) => (
                <Nav 
                  key={ key }
                  text={ navData.text } 
                  icon={ navData.icon }
                  navOnclick={ ()=> navData.ref.current.scrollIntoView() }
                />
              )
            )
          }
        </ul>
      }
    </nav>
  )
}

const Nav = ({text, navOnclick, icon}) => {
  return (
    <li 
      className='nav-icon-container group'
      onClick={ navOnclick }
    >
      { icon }

      <span className='block text-center'>
        {text}
      </span>
    </li>
  )
};