import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Header from './components/Header'
import AddRoom from './components/AddRoom'
import Footer from './components/Footer'
import DetailRoom from './components/DetailRoom'

function App() {
  const [rooms, setRooms] = useState([])

  function updateRooms(room) {
    setRooms((prevRooms) => {
      return [
        ...prevRooms,
        { name: room.name, type: room.type, color: room.color, products: [] },
      ]
    })
  }

  function addProduct(product, index) {
    debugger
    let productsLength = rooms[index].products.length
    if (productsLength < 5) {
      rooms[index].products.push(product)
    }
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Route
          exact
          path="/"
          component={() => {
            return <HomePage rooms={rooms} />
          }}
        />
        <Route
          exect
          path="/AddRoom"
          component={() => {
            return <AddRoom addRoom={updateRooms} />
          }}
        />
        {rooms.map((room, index) => {
          return (
            <Route
              exact
              path={`/DetailRoom${room.name}`}
              component={() => {
                return (
                  <DetailRoom
                    name={room.name}
                    type={room.type}
                    index={index}
                    addProduct={addProduct}
                    products={rooms[index].products}
                  />
                )
              }}
            />
          )
        })}
        <Footer />
      </Router>
    </div>
  )
}

export default App
