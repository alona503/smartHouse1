import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { Link } from 'react-router-dom'
import Room from './Room'
import DetailRoom from './DetailRoom.js'

function HomePage(props) {
  return (
    <div className="center top-padding">
      <h1>Hey There!</h1>
      <p>Start adding rooms</p>
      <Link to="/AddRoom">
        <button className="btn-icon">
          <AddCircleIcon style={{ color: 'white' }} />
        </button>
      </Link>

      <div className="container">
        {props.rooms.map((room, index) => {
          return (
            <Link
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
              to={`/DetailRoom${room.name}`}
              room={room}
            >
              <Room
                key={index}
                id={index}
                name={room.name}
                type={room.type}
                color={room.color}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
