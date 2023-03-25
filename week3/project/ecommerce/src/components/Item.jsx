import { Link } from "react-router-dom";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";
import useFavorites from "../hooks/useFavorites";

function Item({ product }) {
  const [favorites, handleClick] = useFavorites();

  return (
    <li className="list-item">
      <div>
        <img src={product.image} alt={product.title} />
        <img
          src={favorites.includes(product.id) ? heartSolid : heartRegular}
          alt="heart"
          onClick={() => handleClick(product.id)}
          className="heart"
        />
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </div>
    </li>
  );
}

export default Item;
