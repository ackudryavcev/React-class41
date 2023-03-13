import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(endpoint) {
  const [connectionError, setConnectionError] = useState(false);
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    axios(`https://fakestoreapi.com/${endpoint}`)
      .then((data) => {
        setFetchData(data.data);
      })
      .catch((error) => {
        console.error(`Error fetching ${endpoint}: `, error);
        setConnectionError(true);
      });
  }, [endpoint]);

  return [fetchData, connectionError];
}

export default useFetch;
