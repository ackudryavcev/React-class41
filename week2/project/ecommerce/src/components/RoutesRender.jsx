import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ItemPage from "./ItemPage";
import MainPage from "./MainPage";

function RoutesRender ({products}) {
    const LinkMainPage = () => {
        return <Link to={`/`}>Go to main page</Link>
    }
    return (<>
    <Routes>
    <Route path="/" element={<MainPage />}></Route>
    {products.map(product => {
       return ( <Route path={`/product/${product.id}`} element={<ItemPage product={product} LinkMainPage={LinkMainPage}/>} key={product.id}></Route>)
    })}
    </Routes>
    </>)
}

export default RoutesRender