import React from 'react'

const Contact = () => {
  return (
    <section class="contact" id="contact">
        <div class="contact-text">
            <h2>Contact <span>Me</span></h2>
            <p>Do you want to work together? <br /> Let's have a conversation...</p>
            <ul class="list">
                <li>+54 9 351-2335182</li>
                <li>lucaspalmadev@gmail.com</li>
            </ul>
            <div class="contact-icons">
                <a href="https://chatwith.io/es/s/lucaspalmadev" target="_blank" aria-label="Whatsapp"><i class='bx bxl-whatsapp' ></i></a>
                <a href="https://www.linkedin.com/in/lucas-palma-18a994261/" target="_blank" aria-label="LinkedIn"><i class='bx bxl-linkedin' ></i></a>
                <a href="https://github.com/Lucas-Palma?tab=repositories" target="_blank" aria-label="Github"><i class='bx bxl-github'></i></a>
                <a href="mailto:lucaspalmadev@gmail.com" target="_blank" aria-label="Github"><i class='bx bx-envelope' ></i></a>
            </div>
        </div>
    </section>
  )
}

export default Contact