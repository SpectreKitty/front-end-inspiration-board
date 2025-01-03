import PropTypes from 'prop-types'
import './Footer.css'

function Footer(props) {
  return (
    <div className='footer'>
      <p>That was fun! Click <a onClick={() => props.onDelete()}>here</a> to delete all boards and cards!</p>
    </div>
  )
}

Footer.propTypes = {
  onDelete: PropTypes.func.isRequired,
}

export default Footer
