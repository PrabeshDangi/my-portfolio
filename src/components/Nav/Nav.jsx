import React from 'react'
import logo from '../../assets/logooo.png'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav'>
    <div className="logo">
        <img src={logo} alt='' />
      </div>
      <div className="name">
    <h3>Dangee Prabesh</h3>
    </div>
    </div>
  )
}

export default Nav