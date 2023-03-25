/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Item from "./Item";
import LoadComponent from "./LoadComponent";

function Items({ categories }) {
  const [fetchData, connectionError, fetchDataFromEndpoint] = useFetch();

  useEffect(() => {
    fetchDataFromEndpoint("products");
  }, []);

  useEffect(() => {
    if (categories !== "") {
      fetchDataFromEndpoint(`products/category/${categories}`);
    } else {
      fetchDataFromEndpoint("products");
    }
  }, [categories]);

  return (
    <>
      {connectionError && <p>There was an error fetching the data.</p>}
      {fetchData.length === 0 && <LoadComponent />}
      <ul className="list">
        {fetchData.length > 0 &&
          fetchData.map((product) => {
            return <Item product={product} key={product.id} />;
          })}
      </ul>
    </>
  );
}

export default Items;
