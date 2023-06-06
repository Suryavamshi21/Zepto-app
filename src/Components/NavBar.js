import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='Header'>
    <Link to='/'><img src="https://www.zeptonow.com/images/logo.svg" alt="zepto" /></Link>
    </div>
  )
}
export default NavBar