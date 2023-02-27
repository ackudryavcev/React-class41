import React from "react";
import Card from "./Card";


function Cards({products}) {
return (
    <ul className="list">
        {products.map(product => <li key={product.id} className="list-item"><Card product={product}/></li>)}
    </ul>
)
}

export default Cards;