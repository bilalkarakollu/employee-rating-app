import React from 'react'
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const Navbar = ({title}) => {
  let { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  }

  return (
    <div className='navbar'>
      {pathname !== '/' && <div className='navbar-geri-btn'><button onClick={handleClick}> <BsArrowLeft/></button></div>}
      {title}
    </div>
  )
}

export default Navbar;


Navbar.propTypes = {
  title: PropTypes.string
};