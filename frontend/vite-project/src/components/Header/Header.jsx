import React from 'react'
import './Header.css'
import { Button } from 'antd'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className='header-main'>
       <div className='header-info'>Save upto 70 % with our  value plan</div>
       <nav>
        <img src={logo} alt="myle" />
        <Button className='call-now-btn' shape='round'>CALL NOW</Button>
       </nav>
    </header>
  )
}

export default Header