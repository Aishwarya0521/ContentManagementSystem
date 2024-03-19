import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'
const Navbar = () => {
const auth=useAuth()
  return (
    <div>
      <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        {auth.user==='admin' && <NavLink to='/admin'>Admin</NavLink>}
        <NavLink to='/user'>User</NavLink>
        {!auth.user &&  <NavLink to='/login'>Login</NavLink>}
         {!auth.user && <NavLink to='/signup'>Signup</NavLink>}  
        <NavLink to='/logout'>Logout</NavLink>    
      </nav>
    </div>
  )
}
export default Navbar