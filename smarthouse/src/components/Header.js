import React from 'react'
import HouseIcon from '@material-ui/icons/House'

function Header() {
  return (
    <header>
      <HouseIcon style={{ color: 'white', fontSize: '35' }} />
      <span className="logo">Smart House.</span>
    </header>
  )
}

export default Header
