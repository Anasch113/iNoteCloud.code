import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'



export default function Navbar(props) {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  }, [location]);

  let navigate = useNavigate();
const handleLogout = ()=>{
  
  localStorage.removeItem('token');
  navigate("/login")
  props.showAlert("Logout Successfully", "Success")
}
  return (
    <div>



      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">iNoteCloud</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="about">About</Link>
              </li>


            </ul>
            {!localStorage.getItem('token')?<form className='d-flex'>
            <Link className="btn btn-success mx-1" to="login" role="button">Login</Link>
            <Link className="btn btn-success mx-1" to="signup" role="button">Signup</Link>
            </form>:<Link onClick={handleLogout} className="btn btn-success mx-1"  role="button">Logout</Link> }
          </div>
        </div>
      </nav>
    </div>
  )
}

