import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav className=" p-3 navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
        <h1><a className="fs-2 navbar-brand" href="#">CHEHRA</a></h1>    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="  collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className=" navbar-nav ms-auto">
      
            <Link className="nav-link" style={{textDecoration:"none"}} to={'/auth'}>Register</Link>  
            <Link className="nav-link" style={{textDecoration:"none"}} to={'/auth2'}>Login</Link>  
      </div>
    </div>
  </div>
</nav>
  )
}

export default Nav