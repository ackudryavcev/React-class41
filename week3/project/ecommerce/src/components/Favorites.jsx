import React, { useContext, useEffect, useState } from "react";
import { FavoriteContext } from "./FavoriteContext";
import { Link } from "react-router-dom";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

function Favorites() {
  const { favorites, setFavorites } = useContext(FavoriteContext);
  const [products, setProducts] = useState([]);
  const [fetchData, fetchDataError] = useFetch("products");

  function handleFavorites(id) {
    if (favorites.includes(id)) {
      const tempFavorites = favorites.filter((item) => item !== id);
      setFavorites(tempFavorites);
    } else {
      setFavorites([...favorites, id]);
    }
  }

  useEffect(() => {
    const filterItems = fetchData.filter((item) => favorites.includes(item.id));
    setProducts(filterItems);
    if (fetchDataError) console.error("Error fetching categories");
  }, [favorites, fetchData, fetchDataError]);

  return (
    <div>
      <h1>Favorites</h1>
      {products.length === 0 ? (
        <h2>You haven't chosen any favorites yet!</h2>
      ) : (
        <ul className="list">
          {products.map((product) => {
            const LinkComponent = () => {
              return <Link to={`/product/${product.id}`}>{product.title}</Link>;
            };
            return (
              <li key={product.id} className="list-item">
                <Card
                  product={product}
                  LinkComponent={LinkComponent}
                  isFavorite={favorites.includes(product.id)}
                  handleFavorites={() => handleFavorites(product.id)}
                ></Card>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
