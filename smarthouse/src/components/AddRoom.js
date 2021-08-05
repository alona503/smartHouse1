import React, { useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { Link, Redirect } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'

function AddRoom(props) {
  const [room, setRoom] = useState({
    type: 'default',
    name: '',
    color: 'black',
  })

  const [typeError, setTypeError] = useState(false)
  const [nameError, setnameError] = useState(false)
  let history = useHistory()

  function inputValidation(event) {
    debugger
    if (room.type === 'default') {
      //this sections checking for input validation
      setTypeError(true)
      console.log(typeError)
    } else {
      setTypeError(false)
    }
    if (room.name.length > 5 || room.name === '') {
      setnameError(true)
      console.log(nameError)
    } else {
      setnameError(false)
    }
    //if no errors in input
    if (!(typeError && nameError)) {
      debugger
      props.addRoom(room)
      history.push('/')
    }

    event.preventDefault()
  }
  function updateRoom(event) {
    const { name, value } = event.target
    setRoom((prevRoom) => {
      return {
        ...prevRoom,
        [name]: value,
      }
    })
  }

  return (
    <div className="center top-padding">
      <h1>Room Adding</h1>
      <p>Hello , please pick the room you want to add to your smart house</p>
      <form>
        <select onChange={updateRoom} name="type" id="room" className="center">
          <option value="default">Choose Type Of A Room</option>
          <option value="bedroom">Bedroom</option>
          <option value="bathroom">Bathroom</option>
          <option value="kitchen">Kitchen</option>
          <option value="livingroom">Livingroom</option>
        </select>
        <br />
        <p className="error" style={{ display: typeError ? 'block' : 'none' }}>
          Room type wasnt chosen
        </p>
        <br />
        <input
          onChange={updateRoom}
          className="center"
          placeholder="room name"
          name="name"
        />
        <br />
        <p className="error" style={{ display: nameError ? 'block' : 'none' }}>
          Min 1 charecter Max 5 charecters
        </p>
        <br />
        <input name="color" onChange={updateRoom} type="color" />
        <br />
        <br />
        <button onClick={inputValidation} className="btn-icon">
          <AddCircleIcon style={{ color: 'white' }} />
        </button>
      </form>
    </div>
  )
}

export default AddRoom
