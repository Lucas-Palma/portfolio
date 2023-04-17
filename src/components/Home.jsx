import React from 'react'

export const Home = () => {
  return (
    <section class="home" id="home">
        <div class="home-text">
            <div class="slide">
                <span class="one">Hi!</span>
                <span class="two">I am</span>
            </div>
            <h1>Lucas Palma</h1>
            <h3>Front End <span>Developer</span></h3>
            <p class=" ">Front End Developer in Córdoba, Argentina.</p>
            <div class="button">
                <a href="#contact" class="btn" aria-label="Contact me">Contact me</a>
                <a href="https://chatwith.io/es/s/lucaspalmadev" class="btn2" target="_blank" aria-label="Whatsapp"><span><i class="fa-brands fa-whatsapp"></i></span>Send me a message</a>
            </div>
        </div>
    </section>
  )
}

export default Home
