import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  
  return (
    <div className='flex justify-center items-center gap-8 text-blue pr-14 font-black text-menu
    hover:bg-gray rounded-2xl p-3'>
      <Link to={'/'}>Home</Link>
      <Link to={'/servicios'}>Servicios</Link>
      <Link to={'/team'}>Team</Link>
      <Link to={'/contacto'}>Contacto</Link>
      <Link to={'/faq'}>FAQ</Link>
    </div>
  )
}

export default Nav