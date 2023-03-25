import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import LoadComponent from "./LoadComponent";

function CategoriesMenu({ categories, setCategories }) {
  const [fetchData, connectionError, fetchDataFromEndpoint] = useFetch();

  useEffect(() => {
    fetchDataFromEndpoint("products/categories");
  }, [fetchDataFromEndpoint]);

  function handleClick(event) {
    if (categories === "" || categories !== event.target.innerHTML) {
      setCategories(event.target.innerHTML);
    } else {
      setCategories("");
    }
  }

  return (
    <div>
      {connectionError && <p>There was an error fetching the data.</p>}
      {fetchData.length === 0 && <LoadComponent />}
      {!connectionError && fetchData.length > 0 && (
        <ul className="menu">
          {fetchData.map((category) => (
            <li
              key={category}
              className={
                categories === category ? "menu-item black" : "menu-item"
              }
              onClick={handleClick}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoriesMenu;
