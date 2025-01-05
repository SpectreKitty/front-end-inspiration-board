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