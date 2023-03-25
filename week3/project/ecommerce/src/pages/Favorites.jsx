import React, { useEffect } from "react";
import useFavorites from "../hooks/useFavorites";
import useFetch from "../hooks/useFetch";
import Item from "../components/Item";
import LoadComponent from "../components/LoadComponent";

function Favorites() {
  const [favorites] = useFavorites();
  const [fetchData, connectionError, fetchDataFromEndpoint] = useFetch();

  useEffect(() => {
    fetchDataFromEndpoint("products");
  }, [fetchDataFromEndpoint]);

  if (favorites.length === 0) {
    return (
      <div>
        <h1>Favorites</h1>
        You haven't chosen any favorites yet!
      </div>
    );
  }
  return (
    <>
      <h1>Favorites</h1>
      <ul className="list">
        {connectionError && <p>There was an error fetching the data.</p>}
        {fetchData.length === 0 && <LoadComponent />}
        {fetchData &&
          // eslint-disable-next-line array-callback-return
          fetchData.map((item) => {
            if (favorites.includes(item.id)) {
              return <Item product={item} key={item.id} />;
            }
          })}
      </ul>
    </>
  );
}

export default Favorites;
