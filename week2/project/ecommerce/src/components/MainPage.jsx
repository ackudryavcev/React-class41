import React, {useState, useEffect} from "react";
import Menu from "./Menu";
import Cards from "./Cards";
import axios from "axios";
import RoutesRender from "./RoutesRender";
import LoadComponent from "./LoadComponent";


function MainPage() {
const [products, setProducts] = useState([]);
const [renderProducts, setRenderProducts] = useState([]);
const [selectCategory, setSelectCategory] = useState(null);
const [renderCategory, setRenderCategory] = useState([]);
const [renderOne, setRenderOne] =useState(false);
const [connectionError, setConnectionError] = useState(false);


useEffect(() => {
    axios('https://fakestoreapi.com/products/categories')
      .then(data => {
        const categories = data.data;
        setRenderCategory(categories.map((item) => ({ name: item, isActive: false })));
      })
      .catch(error => {
        console.error('Error fetching categories', error);
        setConnectionError(true);
      });
      axios('https://fakestoreapi.com/products')
      .then(data => {
        const products = data.data;
       setProducts(products);
       setRenderProducts(products);
      })
      .catch(error => {
        console.error('Error fetching categories', error);
        setConnectionError(true);
      });
  }, []);

function HandleFiltered(event){

const currentCategory = event.target.outerText;
//check we push using category or not
if (selectCategory === currentCategory) 
{
  //if yes we show all products again
  setRenderProducts(products); setSelectCategory(null);
  setRenderCategory(renderCategory.map(item => ({ name: item.name, isActive: false })));
}
else {
// if now we show only necessary products
axios(`https://fakestoreapi.com/products/category/${currentCategory}`)
.then(data => {
    const products = data.data;
    setRenderProducts(products);
    setSelectCategory(currentCategory);
    setRenderCategory(
    renderCategory.map(item => ({
    name: item.name,
    isActive: item.name === event.target.outerText ? !item.isActive : false
  })))
  .catch(error => {
    console.error('Error fetching categories', error);
    setConnectionError(true);
  });
})
}
}
if (renderOne) return <RoutesRender products={products}/>
else 
return (<>

<h1>Products</h1>
{renderCategory.length > 0 ?<Menu categories={renderCategory} handleFiltered ={HandleFiltered}/> : <LoadComponent connectionError={connectionError}/>}
{renderProducts.length > 0 ?<Cards products={renderProducts} setRenderOne={setRenderOne}/> : <LoadComponent connectionError={connectionError}/>}
</>)
}

export default MainPage

// https://glowing-cranachan-9bdc7f.netlify.app/