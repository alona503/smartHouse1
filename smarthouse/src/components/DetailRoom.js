import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import AddProduct from './AddProduct'

function DetailRoom(props) {
  const [showProducts, setShowProducts] = useState(false)

  function updateShoowProducts() {
    debugger
    setShowProducts(!showProducts)
  }

  function showProductsArea() {
    if (showProducts) {
      return (
        <div>
          <button onClick={updateShoowProducts} className="btn-icon">
            <ArrowDropUpIcon style={{ color: 'white' }} />
          </button>
          <AddProduct
            name={props.name}
            type={props.type}
            addProduct={props.addProduct}
            index={props.index}
          />
        </div>
      )
    } else {
      return (
        <button onClick={updateShoowProducts} className="btn-icon">
          <ArrowDropDownIcon style={{ color: 'white' }} />
        </button>
      )
    }
  }

  return (
    <div className="top-padding center">
      <h1>Room Name:{props.name}</h1>
      <h3>Room Type:{props.type}</h3>
      <p>Click on the arrow below to display list of products</p>
      {showProductsArea()}
      <div className="container">
        {props.products.map((product) => {
          return (
            <p
              className="room-border"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              {product}
            </p>
          )
        })}
      </div>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        <button>Back To Rooms</button>
      </Link>
    </div>
  )
}

export default DetailRoom
