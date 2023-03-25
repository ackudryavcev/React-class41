import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";
import useFavorites from "../hooks/useFavorites";
import LoadComponent from "../components/LoadComponent";

function ItemPage() {
  const { id } = useParams();
  const [fetchData, connectionError, fetchDataFromEndpoint] = useFetch();
  const [favorites, handleClick] = useFavorites();

  useEffect(() => {
    fetchDataFromEndpoint(`products/${id}`);
  }, [fetchDataFromEndpoint, id]);

  return (
    <>
      {connectionError && <p>There was an error fetching the data.</p>}
      {fetchData.length === 0 && <LoadComponent />}
      <h1>{fetchData.title}</h1>
      <div className="good">
        <p>{fetchData.description}</p>
        <img src={fetchData.image} alt={fetchData.title} />
        <img
          src={favorites.includes(Number(id)) ? heartSolid : heartRegular}
          alt="heart"
          className="heart"
          onClick={() => handleClick(Number(id))}
        />
      </div>
    </>
  );
}

export default ItemPage;
