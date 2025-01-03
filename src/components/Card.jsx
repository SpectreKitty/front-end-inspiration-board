import PropTypes from 'prop-types';
import './Card.css';

const Card = props => {
  return (
    <div className='card'>
      <p>{props.message}</p>
      <div className='card-actions'>
        <p>{props.likes} ❤️</p>
        <button onClick={() => props.onLike(props.id)}>+1</button>
        <button onClick={() => props.onDelete(props.id)}>Delete</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default Card;