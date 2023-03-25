import { useContext } from "react";
import { FavoriteContext } from "../components/FavoriteContext";

function useFavorites() {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  function handleClick(id) {
    if (favorites.includes(id)) {
      const tempFavorites = favorites.filter((favorite) => favorite !== id);
      setFavorites(tempFavorites);
    } else {
      setFavorites([...favorites, id]);
    }
  }

  return [favorites, handleClick];
}

export default useFavorites;
