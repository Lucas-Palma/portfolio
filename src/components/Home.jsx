import React from 'react'

export const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home-text">
            <div className="slide">
                <span className="one">Hi!</span>
                <span className="two">I am</span>
            </div>
            <h1>Lucas Palma</h1>
            <h3>Front End <span>Developer</span></h3>
            <p className=" ">Front End Developer in Córdoba, Argentina.</p>
            <div className="button">
                <a href="#contact" className="btn" aria-label="Contact me">Contact me</a>
                <a href="https://github.com/Lucas-Palma" className="btn2" target="_blank" aria-label="Whatsapp"><span><i className='bx bxl-github'></i></span>See all my projects</a>
            </div>
        </div>
    </section>
  )
}

export default Home
