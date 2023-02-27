import React from "react"


function Card({product} ) {
return (
    <div>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
    </div>
)

}

export default Card