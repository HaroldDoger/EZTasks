import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    
  return (
    <header className='header'>
       <h1>{title}</h1>
       <Button 
       color={showAdd ? 'Red' : 'Green'} 
       text={showAdd ? 'Close' : 'Add'} 
       onClick={onAdd} />
       {/*<h1 style={headingStyle}>{title}</h1>*/}
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}


export default Header