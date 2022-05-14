import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  let { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  }

  return (
    <div className='navbar'>
      {pathname !== '/' && <div className='navbar-geri-btn'><button onClick={handleClick}> {`<-`} Geri</button></div>}
      <Link to={'/'}>Personel Değerlendirme</Link>
    </div>
  )
}

export default Navbar
