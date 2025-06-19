import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>

     <Link to="/"><img className='w-auto h-8 m-3 mx-12' src="/logo.webp" alt="" /></Link>
    </div>
  )
}

export default Logo
