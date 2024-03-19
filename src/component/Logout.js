import React from 'react'
import { useAuth } from './Auth'

const Logout = () => {
    const auth=useAuth()
    const handleLogout=()=>{
        auth.logout()
    }
  return (
    <div>
        <div class="container">
        <div class="logout-container">
      <h1>Welcome {auth.user}</h1>
      <br></br>
      <button onClick={handleLogout}>Logout</button>
      </div>
      </div>
    </div>
  )
}

export default Logout