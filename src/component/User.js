import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div>
      <div className='container'>
      <div className='design'>
      <Link to='/articledesign'>Article Design</Link>
       <Link to='/blogdesign'>Blog Design</Link>
       <Link to='/postdesign'>Post Design</Link>
       <Link to='/pagedesign'>Page Design</Link>
       </div>
      </div>
    </div>
  )
}

export default User
