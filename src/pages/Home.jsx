import CarCard from '../components/CarCard';
import './Home.css';

export default function Home({ cars, favorites, onToggleFavorite }) {

  return (

    <div className="home-container">
      <h2 className="home-title">Catálogo de Modelos</h2>
      <div className="cars-grid">

        {cars.map((car) => (

          <CarCard
            key={car.id}
            car={car}
            isFavorite={favorites.some((fav) => fav.id === car.id)}
            onToggleFavorite={onToggleFavorite}
          />

        ))}

      </div>

    </div>
  );

}