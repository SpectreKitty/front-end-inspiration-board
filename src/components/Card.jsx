import PropTypes from 'prop-types';
import './Card.css';

const Card = props => {
  return (
    <div className='card'>
      <p>{props.message}</p>
      <div className='card-actions'>
        <span>{props.likes} ❤️</span>
        <button onClick={props.onLike}>+1</button>
        <button onClick={props.onDelete}>Delete</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default Card;