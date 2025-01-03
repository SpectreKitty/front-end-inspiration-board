import PropTypes from 'prop-types';
import Card from './Card';
import './Cards.css';
import './ComponentStyles.css';

function Cards(props) {
  return (
    <div className='component-section'>
      <h3 className='component-title'>Cards for {props.boardTitle}</h3>
      {
        props.cards.length > 0
        ? (
          <div className='cards'>
            {props.cards.map(card => {
              return <Card
                key={card.id}
                id={card.id}
                message={card.message}
                likes={card.like_count}
                onDelete={props.onDelete}
                onLike={props.onLike}
              />
            })}
          </div>)
        : <p>No cards yet!</p>
      }
    </div>
  );
};

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