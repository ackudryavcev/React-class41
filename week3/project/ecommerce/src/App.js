import React from "react";
import { FavoritesProvider } from "./components/FavoriteContext";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./components/MainPage";
import Favorites from "./components/Favorites";
import ItemPage from "./components/ItemPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="product/:id" element={<ItemPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
