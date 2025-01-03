import PropTypes from 'prop-types';
import './ComponentStyles.css';
import './Boards.css';

function Boards({ boards, onSelectBoard }) {
  return (
    <div className="component-section">
      <h3 className="component-title">Boards</h3>
      <ul className="boards-list">
        {boards.map((board) => (
          <li
            key={board.id}
            onClick={() => onSelectBoard(board)}
          >
            {board.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

Boards.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectBoard: PropTypes.func.isRequired,
};

export default Boards;
