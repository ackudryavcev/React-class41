import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";


function Cards({products, setRenderOne}) { 
return (
   <>
            <ul className="list">    
                {products.map(product => {
                    const LinkComponent = () => {
                        return <Link onClick={()=>{setRenderOne(true)}} to={`/product/${product.id}`}>{product.title}</Link>
                    }
                    return (<li key={product.id} className="list-item"><Card product={product} LinkComponent={LinkComponent}></Card></li>)
                })}  
            </ul>
   </>
)
}

export default Cards;