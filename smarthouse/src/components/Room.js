import React, { useState } from 'react'
import { Link, Redirect } from 'react-dom'

function Room(props) {
  return (
    <div className="room-border" style={{ backgroundColor: `${props.color}` }}>
      <div>{props.type}</div>
      <div>{props.name}</div>
    </div>
  )
}

export default Room
