import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";
import { FavoriteContext } from "./FavoriteContext";
import useFetch from "../hooks/useFetch";

function ItemPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { favorites, setFavorites } = useContext(FavoriteContext);
  const [currentProduct, currentProductError] = useFetch(`products/${id}`);

  function handleFavorites(id) {
    if (favorites.includes(id)) {
      const tempFavorites = favorites.filter((item) => item !== id);
      setFavorites(tempFavorites);
    } else {
      setFavorites([...favorites, id]);
    }
  }

  useEffect(() => {
    setProduct(currentProduct);
    if (currentProductError) console.error("Error fetching categories");
  }, [id, currentProduct, currentProductError]);

  if (!currentProductError) {
    return (
      <>
        <h1>{product.title}</h1>
        <div className="good">
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
          <img
            src={favorites.includes(Number(id)) ? heartSolid : heartRegular}
            alt="heart"
            className="heart"
            onClick={() => handleFavorites(Number(id))}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2>Connection error</h2>
      </>
    );
  }
}

export default ItemPage;
