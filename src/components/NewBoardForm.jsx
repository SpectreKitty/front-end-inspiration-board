import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';

const kDefaultFormState = {
  title: '',
  owner: '',
};

const NewBoardForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState(kDefaultFormState);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [errors, setErrors] = useState({});

  const handleChange = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...formData, [fieldName]: fieldValue };
    setFormData(newFormData);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.owner) newErrors.owner = 'Owner is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      handleSubmit(formData);
      setFormData(kDefaultFormState);
      setErrors({});
    }
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  }

  return (
    <div className="component-section new-board-form">
      <h3 className="component-title">Create a New Board</h3>
      {isFormVisible ? (
      <form className="formData" onSubmit={onHandleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <p className="error-message">{errors.title}</p>}

        <label htmlFor="owner">Owner&apos;s Name:</label>
        <input
          type="text"
          id="owner"
          name="owner"
          value={formData.owner}
          onChange={handleChange}
          className={errors.owner ? 'error' : ''}
        />
        {errors.owner && <p className="error-message">{errors.owner}</p>}
        
        <div className="preview">
          <p>Preview </p>
          <p>Title: {formData.title}</p>
          <p>Owner: {formData.owner}</p>
        </div>

        <div className="submitButton">
          <input type="submit" id="submit" name="submit" />
        </div>
      </form>
      ):(
        <p>The form is hidden. Click &quot;Show Form&quot; to display it again</p>
        )}
        <button className="show-hide-button" type="button" onClick={toggleFormVisibility}>{isFormVisible ? 'Hide New Board Form' : 'Show Form'}</button>
    </div>
  )
}
NewBoardForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default NewBoardForm;