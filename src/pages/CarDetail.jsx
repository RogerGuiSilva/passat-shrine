import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CarDetail.css';

export default function CarDetail({ cars, favorites, onToggleFavorite }) {
  const { id } = useParams();
  const car = cars.find((item) => item.id === parseInt(id));

const [userName,setUserName] = useState('');
const [commentText, setCommentText] = useState('');
const [comments,setComments] = useState([]);

  if (!car) {
    return (
      <div className="detail-container not-found">
        <h2>Modelo não encontrado!</h2>
        <Link to="/" className="back-link">Voltar ao catálogo</Link>
      </div>
    );
  }

  const isFavorite = favorites.some((fav) => fav.id === car.id);

const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!userName.trim() || !commentText.trim()) return;

    const newComment = {
      id: Date.now(),
      author: userName,
      text: commentText,
      date: new Date().toLocaleDateString('pt-BR')
    };

    setComments([...comments, newComment]);
    setUserName('');
    setCommentText('');
  };

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
<div className = "comments-section"><h3>Deixe seu Comentario</h3>

<form onSubmit={handleSubmitComment} className="comment-form">
          <input
            type="text"
            placeholder="Seu nome"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="comment-input"
            required
          />

          <textarea
            placeholder="Escreva seu comentário..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="comment-textarea"
            rows="3"
            required
          />

          <button type="submit" className="comment-button">Cadastrar Comentário </button>
        </form>

<div className="comments-list">
          <h4>Comentários ({comments.length})</h4>
          {comments.length === 0 ? (
            <p className="no-comments">Nenhum comentário cadastrado ainda. Seja o primeiro!</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="comment-card">
                <div className="comment-header">
                  <strong>{comment.author}</strong>
                  <span>{comment.date}</span>
                </div>
                <p>{comment.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
