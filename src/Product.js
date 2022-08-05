import React from 'react'

function Product(props) {
  return (
    <div>
        <h2>{props.name}</h2>
        <h2>{props.description}</h2>
        <h3>${props.price}</h3>
    </div>
  )
}

export default Product