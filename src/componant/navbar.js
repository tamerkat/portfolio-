import React from 'react'
import '../css/Navbar.css' 

const navbar = () => {
  return (

<nav class="navbar navbar-expand-lg">
  <div class="container-fluid container">
    <a color='white' class="navbar-brand" href="#">Fitness Gym</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active-" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Class</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <li class="nav-item log">
          <a class="nav-link" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>










    
  //   <nav class="navbar navbar-expand-lg">
  //   <div class="container container-fluid">
  //     <a class="navbar-brand" href="#">Fitness Gym</a>
  //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  //       <span class="navbar-toggler-icon"></span>
  //     </button>
  //     <div class="collapse linked navbar-collapse" id="navbarNavDropdown">
  //       <ul class="navbar-nav">
  //         <li class="nav-item">
  //           <a class="nav-link active" aria-current="page" href="#">Home</a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link" href="#">Features</a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link" href="#">Pricing</a>
  //         </li>
  //         <li class="nav-item" href="#">
  //           <a class="nav-link" href="#">
  //             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  //               <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  //               <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
  //             </svg>
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
      
  //     <div class="log nav-link linked">

  //     </div>
  //   </div>
  // </nav>
  )
}

export default navbar
