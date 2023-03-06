import React from "react";

function ItemPage ({product, LinkMainPage}) {
    return (
    <>
    <h1>{product.title}</h1>
    <div className="good">
    <p>{product.description}</p>
    <img src={product.image} alt={product.title} />
    </div>
    <LinkMainPage />
    </>)
}

export default ItemPage