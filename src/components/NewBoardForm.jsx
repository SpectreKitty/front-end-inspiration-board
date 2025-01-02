import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoard.css';

const kDefaultFormState = {
  title: '',
  owner: '',
};

const NewBoardForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState(kDefaultFormState);
  const [isFormVisible, setIsFormVisible] = useState(true);


  const handleChange = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...formData, [fieldName]: fieldValue };
    setFormData(newFormData);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    setFormData(kDefaultFormState);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  }

  return (
    <div className="section">
      <h3>Create a New Board</h3>
      {isFormVisible ? (
      <form className="formData" onSubmit={onHandleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}/>

        <label htmlFor="owner">Owner&apos;s Name:</label>
        <input type="text" id="owner" name="owner" value={formData.owner} onChange={handleChange}/>
        
        <div>
          <p>Preview: </p>
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
        <button type="button" onClick={toggleFormVisibility}>{isFormVisible ? 'Hide New Board Form' : 'Show Form'}</button>
    </div>
  )
}
NewBoardForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default NewBoardForm;