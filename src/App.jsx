import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CarDetail from './pages/CarDetail';
import Favorites from './pages/Favorites';
import { passatModels } from './data/Cars';

export default function App() {
  const [favorites, setFavorites] = useState([]);

  // Função para adicionar ou remover um carro dos favoritos
  const handleToggleFavorite = (car) => {
    const isAlreadyFav = favorites.some((fav) => fav.id === car.id);

    if (isAlreadyFav) {
      setFavorites(favorites.filter((fav) => fav.id !== car.id));
    } else {
      setFavorites([...favorites, car]);
    }
  };

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', color: '#fff' }}>
      <Header favoriteCount={favorites.length} />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              cars={passatModels} 
              favorites={favorites} 
              onToggleFavorite={handleToggleFavorite} 
            />
          } 
        />
        <Route 
          path="/carro/:id" 
          element={
            <CarDetail 
              cars={passatModels} 
              favorites={favorites} 
              onToggleFavorite={handleToggleFavorite} 
            />
          } 
        />
        <Route 
          path="/favoritos" 
          element={
            <Favorites 
              favorites={favorites} 
              onToggleFavorite={handleToggleFavorite} 
            />
          } 
        />
      </Routes>
    </div>
  );
}