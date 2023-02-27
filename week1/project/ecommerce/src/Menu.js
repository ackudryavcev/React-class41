import React from "react";
import MenuItem from "./MenuItem";


function Menu({ categories, handleFiltered}) {
    return (
        <div className="menu">
       {categories.map(category => <div key={category.name} className={category.isActive? "menu-item black":"menu-item"}  onClick={handleFiltered}><MenuItem category={category} /></div>)}
       </div>
    )
}

export default Menu;