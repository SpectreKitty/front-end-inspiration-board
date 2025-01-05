import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    message: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onMessageChange = (event) => {
    const newMessage = event.target.value;

    // check for validation
    if (newMessage.length > 40) {
      setError('Message cannot be more than 40 characters.');
      setSuccessMessage('');
    } else if (newMessage.trim() === '') {
      setError('Message cannot be blank.');
      setSuccessMessage('');
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

    setFormFields({ message: '',});
    setError('');
    setSuccessMessage('Card added successfully!');
  };

  return (
    <div className="new-card-form flex-container">
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
    {successMessage && <div className="success-message">{successMessage}</div>}
  </div>
  );
};

NewCardForm.propTypes = {
  onCardAdd: PropTypes.func.isRequired,
};  

export default NewCardForm; 