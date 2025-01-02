import PropTypes from 'prop-types';
import Card from './Card';
import './Cards.css';

function Cards(props) {
  return (
    <div className="section">
      <h3>Cards for {props.boardTitle}</h3>
      <div className='cards'>
        {props.cards.map(card => {
          return <Card
            key={card.id}
            message={card.message}
            likes={card.likes}
            onDelete={card.onDelete}
            onLike={card.onLike}
          />
        })}
      </div>
    </div>
  );
};

Cards.propTypes = {
  boardTitle: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      onDelete: PropTypes.func.isRequired,
      onLike: PropTypes.func.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Cards;