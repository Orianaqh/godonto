import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
//image
import Logo from '../assets/images/logo.png'
import Extranav from './Extranav'

const Header = () => {
  return (
    <>
    <Extranav/>
    <header className='flex justify-between items-center pr-8'>
      <Link to='/'>
        <img src={Logo}
          className='pl-8 w-[200px] py-5'/>
      </Link>

      <Nav/>
    </header>
    </>
  )
}

export default Header