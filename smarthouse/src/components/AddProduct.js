import React, { useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'

function AddProduct(props) {
  const [product, setProduct] = useState()

  function updateProduct(event) {
    setProduct(event.target.value)
  }

  function addProduct(event) {
    props.addProduct(product, props.index)
    event.preventDefault()
  }

  return (
    <form>
      <select
        name="type"
        id="products"
        onChange={updateProduct}
        className="center"
      >
        <option value="default">Choose Type Of A Product</option>
        <option value="lamp">Lamp</option>
        <option value="stereo">Stereo</option>
        <option value="boiler">Boiler</option>
        <option value="airConditiner">Air Conditiner</option>
      </select>
      <br />
      <p>Click button below to add the ptoduct to {props.name} room</p>
      <button onClick={addProduct} className="btn-icon">
        <AddCircleIcon style={{ color: 'white' }} />
      </button>
    </form>
  )
}

export default AddProduct
