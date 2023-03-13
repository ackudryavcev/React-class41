import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="layout-menu">
        <Link to={`/`}>Products</Link>
        <Link to={`favorites`}>Favorites</Link>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
