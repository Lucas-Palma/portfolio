import React from 'react'
import { logo } from '../img'

const Header = () => {
  return (
      <header>
        <a class="navbar-brand" href="./" aria-label="logo">
            <div class="logo-image">
                <img src={logo} alt="logo-lucaspalmadev" />
            </div>
        </a>
        <ul class="navlist">
            <li><a href="#home" aria-label="Home">Home</a></li>
            <li><a href="#about-me" aria-label="About Me">About Me</a></li>
            <li><a href="#certifications" aria-label="Certifications">Certifications</a></li>
            <li><a href="#portfolio" aria-label="Portfolio">Portfolio</a></li>
            <li><a href="#contact" aria-label="Contact">Contact</a></li>
        </ul>

        <div class="bx bx-menu" id="menu-icon">
        </div>
      </header>
  )
}

export default Header