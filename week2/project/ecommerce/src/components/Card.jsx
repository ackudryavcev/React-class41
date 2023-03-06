import React from "react"


function Card({product, LinkComponent}) {
return (
    <div>
      <img src={product.image} alt={product.title} />
      <LinkComponent />
    </div>
)

}

export default Card