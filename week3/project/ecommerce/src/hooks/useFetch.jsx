import { useState } from "react";
import axios from "axios";

function useFetch() {
  const [connectionError, setConnectionError] = useState(false);
  const [fetchData, setFetchData] = useState([]);

  const fetchDataFromEndpoint = async (endpoint) => {
    try {
      const response = await axios(`https://fakestoreapi.com/${endpoint}`);
      setFetchData(response.data);
      setConnectionError(false);
    } catch (error) {
      console.error(`Error fetching ${endpoint}: `, error);
      setConnectionError(true);
    }
  };

  return [fetchData, connectionError, fetchDataFromEndpoint];
}

export default useFetch;
