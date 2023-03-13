import React from "react";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";

function Card({ product, LinkComponent, isFavorite, handleFavorites }) {
  return (
    <div>
      <img src={product.image} alt={product.title} /> <LinkComponent />
      <img
        src={isFavorite ? heartSolid : heartRegular}
        alt="heart"
        className="heart"
        onClick={handleFavorites}
      />
    </div>
  );
}

export default Card;
