import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
      <div className='container'>
      <div className='design'>
       <Link to='/addarticledesign'>Add Article Design</Link>
       <Link to='/addblogdesign'>Add Blog Design</Link>
       <Link to='/addpostdesign'>Add Post Design</Link>
       <Link to='/addpagedesign'>Add Page Design</Link>
      </div>
      </div>
    </div>
  )
}

export default Admin
