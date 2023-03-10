import React from 'react'
import { Link } from "react-router-dom";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import './navbar.css';

// const Navbar = () => {
  const styles = {
    activity: { height: 50, width: 30, },
  };
  
  const Navbar = (props) => {
   
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark data-bs-theme='dark'">
      <div className="container-fluid">
      <CheckroomIcon  className="hanger" style={styles.activity} {...props} />
      <a className="navbar-brand fw-bold fs-4 " href="/">
         Fit-Me</a>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
          <li className="nav-item">
            <a className="nav-link active" padding-right='80px' aria-current="page" href="/order">Order</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" padding-right='80px' aria-current="page" href="/product">Products</a>
          </li>
          
          {/* <li className="nav-item">
            {/* <a className="nav-link active" padding-right='80px' aria-current="page" >Hi! admin</a>
          </li> */} 
        
        </ul>
      
        <form className="d-flex" role="search">
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>  */}
          {/* <li style="list-style: none; margin: auto; padding-right: 10px; padding-left: 30px;"> hi! admin</li> */}
          <Link to="/signup">
          <button className="btn btn-dark"  type="submit" >
            Log Out</button> 
          </Link>
          
        </form> 
      </div>
    </div>
  </nav>
  )
}

export default Navbar