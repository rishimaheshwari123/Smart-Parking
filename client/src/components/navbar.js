import React from "react";
// import { Navbar, NavbarBrand } from "reactstrap";
import "./nav.css"

export default function Navbar() {
  return (
    <div>
      <header class="header">

        <div id="menu-btn" class="fas fa-bars"></div>

        <div class="logo">
          <a href="#" />
          <img class="logo" src="NLogo.png" alt="logo" />
        </div>


        <nav class="navbar">
          <a href="#home">home</a>
          <a href="#services">services</a>
          <a href="#reviews">reviews</a>
          <a href="#contact">contact</a>
        </nav>


      </header>

    </div>

  )
}
