import React, { useState } from 'react'
import { logo } from '../img'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    
      <header>
        {/* <a className="navbar-brand" href="./" aria-label="logo">
            <div className="logo-image">
                <img src={logo} alt="logo-lucaspalmadev" />
            </div>
        </a> */}
        <ul className="navlist">
            <li><a href="#home" aria-label="Home">Home</a></li>
            <li><a href="#about-me" aria-label="About Me">About Me</a></li>
            <li><a href="#certifications" aria-label="Certifications">Certifications</a></li>
            <li><a href="#portfolio" aria-label="Portfolio">Portfolio</a></li>
            <li><a href="#contact" aria-label="Contact">Contact</a></li>
        </ul>

        <div className='menu-box'>
          <button 
            onClick={() => setIsOpen((prevState) => !prevState)}
            className="bx bx-menu" 
            id="menu-icon"
          >
          </button>
          {isOpen &&
              <ul 
                  onClick={() => setIsOpen((prevState) => !prevState)}
                  className='menu-links'
                >
                <li><a href="#home" aria-label="Home">Home</a></li>
                <li><a href="#about-me" aria-label="About Me">About Me</a></li>
                <li><a href="#certifications" aria-label="Certifications">Certifications</a></li>
                <li><a href="#portfolio" aria-label="Portfolio">Portfolio</a></li>
                <li><a href="#contact" aria-label="Contact">Contact</a></li>
              </ul>
          }
        </div>
      </header>
    </>
  )
}

export default Header