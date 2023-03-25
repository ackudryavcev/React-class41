import React from "react";
import { FavoritesProvider } from "./components/FavoriteContext";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import ItemPage from "./pages/ItemPage";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="product/:id" element={<ItemPage />} />
        </Route>
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
