import { Link } from 'react-router-dom';
import './CarCard.css';

export default function CarCard({ car, isFavorite, onToggleFavorite }) {
  return (
    <div className="card">
      <img src={car.image} alt={car.name} className="card-image" />
      <h3 className="card-title">{car.name}</h3>
      <p className="card-info"><strong>Motor:</strong> {car.engine}</p>
      <p className="card-info"><strong>Potência:</strong> {car.power}</p>
      <p className="card-info"><strong>0–100 km/h:</strong> {car.zeroToHundred}</p>
      
      <div className="card-actions">
        <Link to={`/carro/${car.id}`} className="btn-details">
          Ver detalhes
        </Link>
        <button 
          onClick={() => onToggleFavorite(car)}
          className={`btn-fav ${isFavorite ? 'favorite' : 'not-favorite'}`}
        >
          {isFavorite ? 'Remover' : 'Favoritar'}
        </button>
      </div>
    </div>
  );
}