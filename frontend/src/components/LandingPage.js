import React from 'react'
import './LandingPage.css';
import { Footer } from './Footer';

export default function LandingPage() {
    return (
      <>

        <header >
            <h2 className="main-title text-center">Le tableau d'affichage de l'université est partout</h2>
            <p className="main-para text-center">Rejoignez-nous dès maintenant et ne perdez pas de temps</p>
    </header>
    <div
			className="d-flex flex-row justify-content-center w-80 mt-0 mb-0 "
			style={{ width: "100%", margin: "0px"}}>
			<div style={{ display: "flex", gap: "-4rem"  }}>
        <span class="navbar-item has-dropdown is-hoverable " id="style-dropdown1" >
        <a class="navbar-link "  id='drop-down-style1'>
        Log in
        </a>
        <div class="navbar-dropdown ">
          <a class="navbar-item " href='http://localhost:3000/loginAdmin' >
            Admin
          </a>
          <a class="navbar-item " href='http://localhost:3000/loginChef'>
            chef 
          </a>
          <a class="navbar-item " href='http://localhost:3000/login'>
            Etudiant
          </a>
        </div>
        
  </span>
				
  <span class="navbar-item has-dropdown is-hoverable " id="style-dropdown2">
        <a class="navbar-link " id='drop-down-style2'>
        Sign Up
        </a>
        <div class="navbar-dropdown ">
          <a class="navbar-item " href='http://localhost:3000/registerAdmin'>
            Admin
          </a>
          <a class="navbar-item " href='http://localhost:3000/registerChef'>
            chef 
          </a>
          <a class="navbar-item "  href='http://localhost:3000/signup'>
            Etudiant
          </a>
        </div>
     </span> 
			</div>
		</div>
    <Footer />
    </>
    )
}