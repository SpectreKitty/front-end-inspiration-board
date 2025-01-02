import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCard.css';

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    message: '',
  });

  const [error, setError] = useState('');

  const onMessageChange = (event) => {
    const newMessage = event.target.value;

    // check for validation
    if (newMessage.length > 40) {
      setError('Message cannnot be more than 40 characters.');
    } else if (newMessage.trim() === '') {
      setError('Message cannot be blank.');
    } else {
      setError(''); // clear the error
    }

    setFormFields({
      ...formFields,
      message: newMessage,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (formFields.message.trim() === '') {
      setError('Message cannot be blank.');
      return;
    }

    props.onCardAdd({
      message: formFields.message,
    });

    setFormFields({
      message: '',
    });
    setError('');
  };

  return (
    <div className="section">
    <h3>Create a New Card</h3>
    <form onSubmit={onFormSubmit}>
      <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          name="message"
          value={formFields.message}
          onChange={onMessageChange}
          className={error ? 'error' : ''}
        />
        {error && <div className="error-message">{error}</div>}

      <div>
        <p>Preview: {formFields.message}</p>
      </div>

      <div className="submit-card">
        <input 
          type="submit"
          id="submit"
          value="Add Card"
          disabled={!!error || formFields.message.trim() === ''} 
        />
      </div>
    </form>
  </div>
  );
};

NewCardForm.propTypes = {
  onCardAdd: PropTypes.func.isRequired,
};  

export default NewCardForm; 