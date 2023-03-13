import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Cards from "./Cards";
import axios from "axios";
import LoadComponent from "./LoadComponent";
import useFetch from "../hooks/useFetch";

function MainPage() {
  const [renderProducts, setRenderProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState(null);
  const [renderCategory, setRenderCategory] = useState([]);
  const [connectionError, setConnectionError] = useState(false);

  const [categories, categoriesError] = useFetch("products/categories");
  const [products, productsError] = useFetch("products");

  useEffect(() => {
    setRenderCategory(
      categories.map((item) => ({ name: item, isActive: false }))
    );
    setConnectionError(categoriesError);
    setRenderProducts(products);
    setConnectionError(categoriesError && productsError);
  }, [categories, categoriesError, products, productsError]);

  function HandleFiltered(event) {
    const currentCategory = event.target.outerText;

    //check we push using category or not
    if (selectCategory === currentCategory) {
      //if yes we show all products again
      setRenderProducts(products);
      setSelectCategory(null);
      setRenderCategory(
        renderCategory.map((item) => ({ name: item.name, isActive: false }))
      );
    } else {
      // if now we show only necessary products

      axios(
        `https://fakestoreapi.com/products/category/${currentCategory}`
      ).then((data) => {
        const products = data.data;
        setRenderProducts(products);
        setSelectCategory(currentCategory);
        setRenderCategory(
          renderCategory.map((item) => ({
            name: item.name,
            isActive:
              item.name === event.target.outerText ? !item.isActive : false,
          }))
        ).catch((error) => {
          console.error("Error fetching categories", error);
          setConnectionError(true);
        });
      });
    }
  }
  return (
    <>
      <h1>Products</h1>
      {renderCategory.length > 0 ? (
        <Menu categories={renderCategory} handleFiltered={HandleFiltered} />
      ) : (
        <LoadComponent connectionError={connectionError} />
      )}
      {renderProducts.length > 0 ? (
        <Cards products={renderProducts} />
      ) : (
        <LoadComponent connectionError={connectionError} />
      )}
    </>
  );
}

export default MainPage;
