import React from "react";

function LoadComponent({ connectionError }) {
  return connectionError ? (
    <div>server is not available. try later</div>
  ) : (
    <div>data is loading</div>
  );
}

export default LoadComponent;
