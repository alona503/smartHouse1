import React from 'react'
import CopyrightIcon from '@material-ui/icons/Copyright'

function Footer() {
  var date = new Date()
  var year = date.getFullYear()
  return (
    <footer className="center">
      <CopyrightIcon fontSize="small" /> <span>{year}</span>
    </footer>
  )
}

export default Footer
