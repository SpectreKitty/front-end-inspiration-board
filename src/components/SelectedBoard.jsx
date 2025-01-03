// import { useState } from 'react';
import PropTypes from 'prop-types';
import './ComponentStyles.css';
import './Boards.css';

function SelectedBoard({ board }) {
  return (
    <div className="component-section">
      <h3 className="component-title">Selected Board</h3>
      {board ? (
        <p>
          {board.title} - {board.owner}
        </p>
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
  }),
};

export default SelectedBoard;
