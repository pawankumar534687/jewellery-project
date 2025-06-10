import React from 'react'
import Logo from './logo/Logo'
import AllJewellery from './alljewellery/AllJewellery'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center'>
     <Logo/>
     
     
    </div>
  )
}

export default Navbar
