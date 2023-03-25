import { useState } from "react";
import CategoriesMenu from "../components/CategoriesMenu";
import Items from "../components/Items";

function MainPage() {
  const [categories, setCategories] = useState("");

  return (
    <>
      <h1>Products</h1>
      <div className="menu">
        <CategoriesMenu categories={categories} setCategories={setCategories} />
      </div>
      <Items categories={categories} />
    </>
  );
}

export default MainPage;
