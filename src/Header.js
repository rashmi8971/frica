import React from 'react';
import './Header.css';


function Header() {
    return (
        <div>
             
<nav className="navbar navbar-light bg-white" id="navb">
  <div className="container-fluid">
 <a href="#"><img src="toggle-icon.png" alt="" width="32" height="32" title="Bootstrap"></img></a> 
 <a href="#"><img src="fri.png" alt="" ></img></a>
    <span>
   <a href="#"><img src="user-icon.png" alt=""></img></a> &emsp;
   <a href="#"><img src="trolly-icon.png" alt=""></img></a> &emsp;
   <a href="#"><img src="search-icon.png" alt=""></img></a> &emsp;
    </span>
  </div>
</nav> 


            
        </div>
    )
}

export default Header
