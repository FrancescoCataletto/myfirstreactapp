import React from 'react'
import ItemDescription from './ItemDescription'

function Product({name, description, price}) {
  return (
    <div>
        <h2>{name}</h2>
        <h2>{description}</h2>
        <h3>${price}</h3>

        <ItemDescription />
    </div>
  )
}

export default Product