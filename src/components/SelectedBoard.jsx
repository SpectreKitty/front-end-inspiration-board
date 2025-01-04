import PropTypes from 'prop-types';
import './ComponentStyles.css';
import NewCardForm from './NewCardForm';

function SelectedBoard({ board, onAddCard }) {
  return (
    <div className="component-section">
      <h3 className="component-title">Selected Board</h3>
      {board ? (
        <div>
          <p>
            {board.title} - {board.owner}
          </p>
          {/* <h4>Cards:</h4>
          <ul>
            {board.cards && board.cards.length > 0 ? (
              board.cards.map((card) => (
                <li key={card.id}>
                  {card.message} (Likes: {card.like_count})
                </li>
              ))
            ) : (
              <p>No cards available!</p>
            )}
          </ul> */}
        </div>
      ) : (
        <p>No board selected</p>
      )}
    </div>
  );
}

SelectedBoard.propTypes = {
  board: PropTypes.shape({
    title: PropTypes.string,
    owner: PropTypes.string,
      })
  };

export default SelectedBoard;