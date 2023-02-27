import Cards from './Cards';
import products from './fake-data/all-products';
import Menu from './Menu';
import categories from './fake-data/all-categories'
import { useState } from 'react';

function App() {
const [renderProducts, setRenderProducts] = useState(products);
const [selectCategory, setSelectCategory] = useState(null);
const [renderCategory, setRenderCategory] = useState(categories.map(item => ({name:item, isActive:false})))

function HandleFiltered(event){

const currentCategory = event.target.outerText.slice(6);
//check we push using category or not
if (selectCategory === currentCategory) 
{
  //if yes we show all products again
  setRenderProducts(products); setSelectCategory(null);
  setRenderCategory(renderCategory.map(item => ({ name: item.name, isActive: false })));
}
else {
// if now we show only necessary products
setRenderProducts(products.filter(item =>item.category === currentCategory ));
setSelectCategory(currentCategory);
setRenderCategory(
  renderCategory.map(item => ({
    name: item.name,
    isActive: item.name === event.target.outerText ? !item.isActive : false
  })))
}
}

  return (
    <div className="App">
      <h1>Products</h1>
      <Menu categories={renderCategory} handleFiltered ={HandleFiltered}/>
      <Cards products={renderProducts} />
    </div>
  );
}

export default App;


// https://rad-kheer-3ead8c.netlify.app/  You can see work version here