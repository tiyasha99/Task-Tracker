import React from 'react'
import PropTypes from 'prop-types'
import '../index.css';


const Header = ({title}) => {
  return (
    <header className='container'>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
// const HeadingStyle = {
//   color: 'white',
//   backgroundColor: 'black'
// }

export default Header
