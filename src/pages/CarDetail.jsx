import { useParams, Link } from 'react-router-dom';
import './CarDetail.css';

export default function CarDetail({ cars, favorites, onToggleFavorite }) {
  const { id } = useParams();
  const car = cars.find((item) => item.id === parseInt(id));

  if (!car) {
    return (
      <div className="detail-container not-found">
        <h2>Modelo não encontrado!</h2>
        <Link to="/" className="back-link">Voltar ao catálogo</Link>
      </div>
    );
  }

  const isFavorite = favorites.some((fav) => fav.id === car.id);

  return (
    <div className="detail-container">
      <Link to="/" className="back-link">← Voltar ao catálogo</Link>

      <h2 className="detail-title">{car.name}</h2>

      <img src={car.image} alt={car.name} className="detail-image" />

      <p className="detail-description">{car.description}</p>

      <div className="specs-box">
  <h3>Especificações Técnicas:</h3>
  <p className="detail-info"><strong>Motor:</strong> {car.engine}</p>
  <p className="detail-info"><strong>Potência:</strong> {car.power}</p>
  <p className="detail-info"><strong>0–100 km/h:</strong> {car.zeroToHundred}</p>
  <p className="detail-info"><strong>Velocidade Máxima:</strong> {car.topSpeed}</p>
</div>

      <button
        onClick={() => onToggleFavorite(car)}
        className={`btn-detail-fav ${isFavorite ? 'is-fav' : 'not-fav'}`}
      >
        {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  );
}