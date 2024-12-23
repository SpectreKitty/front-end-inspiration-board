function NewCard() {
  return (
    <div className="section">
    <h3>Create a New Card</h3>
    <form style={{display: 'flex', flexDirection: 'column'}}>
      <label htmlFor="message">Message:</label>
      <input type="text" id="message" name="message" />
      
      <div>
        <p>Preview: -</p>
      </div>

      <div style={{marginTop: '1rem', alignSelf: 'center'}}>
        <input type="submit" id="submit" name="submit" />
      </div>
    </form>
  </div>
  )
}

export default NewCard
