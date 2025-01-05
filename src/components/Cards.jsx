import PropTypes from 'prop-types';
import Card from './Card';
import './Cards.css';
import './ComponentStyles.css';

function Cards({ boardTitle, cards = [], onDelete, onLike }) {
  return (
    <div className="component-section">
      <h3 className="component-title">{boardTitle} - Cards</h3>
      {cards.length > 0 ? (
        <ul className="cards-container">
          {cards.map((card) => (
            <li key={card.id} className="card-item">
              <Card
              key={card.id} 
              id={card.id}
              message={card.message}
              likes={card.like_count}
              onLike={onLike}
              onDelete={onDelete}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No cards available for this board!</p>
      )}
    </div>
  );
}

Cards.propTypes = {
  boardTitle: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      like_count: PropTypes.number.isRequired,
    }).isRequired,  
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default Cards;