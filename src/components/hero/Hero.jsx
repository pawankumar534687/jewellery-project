import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div  className='mt-14'>
    <Link><img className="w-full h-auto  max-md:hidden" src="Banner.webp" alt="" /></Link>
    <Link><img className="w-full h-auto  md:hidden" src="traval_banner.webp" alt="" /></Link>

    </div>
  )
}

export default Hero
