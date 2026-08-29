import CarCard from '../components/CarCard';
import './Favorites.css';

export default function Favorites({ favorites, onToggleFavorite }) {
  return (
    <div className="favorites-container">
      <h2 className="favorites-title">Meus Favoritos</h2>
      {favorites.length === 0 ? (
        <p className="empty-message">Nenhum Passat adicionado aos favoritos ainda.</p>
      ) : (
        <div className="cars-grid">
          {favorites.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}