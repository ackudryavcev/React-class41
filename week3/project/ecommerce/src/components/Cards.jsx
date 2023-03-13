import React, { useContext } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { FavoriteContext } from "./FavoriteContext";

function Cards({ products }) {
  const { favorites, setFavorites } = useContext(FavoriteContext);
  function handleFavorites(id) {
    if (favorites.includes(id)) {
      const tempFavorites = favorites.filter((item) => item !== id);
      setFavorites(tempFavorites);
    } else {
      setFavorites([...favorites, id]);
    }
  }
  return (
    <>
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
    </>
  );
}

export default Cards;
