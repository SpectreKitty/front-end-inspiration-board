function NewBoard() {
  return (
    <div className="section">
      <h3>Create a New Board</h3>
      <form style={{display: 'flex', flexDirection: 'column'}}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="owner">Owner&apos;s Name:</label>
        <input type="text" id="owner" name="owner" />
        
        <div>
          <p>Preview: -</p>
        </div>

        <div style={{marginTop: '1rem', alignSelf: 'center'}}>
          <input type="submit" id="submit" name="submit" />
        </div>

        <button style={{marginTop: '1rem', alignSelf: 'center'}}>Hide New Board Form</button>
      </form>
    </div>
  )
}

export default NewBoard
