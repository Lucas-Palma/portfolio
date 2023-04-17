import React from 'react'
import { about_me } from '../img'

const About = () => {
  return (
    <section class="about" id="about-me">
            
            <div class="about-img">
                <img src={about_me} alt="picture of myself" />
            </div>
            
            <div class="about-text">
                <h2>About <span>me</span></h2>
                <h4>Creative Front End Developer</h4>
                <p>I was in my 3rd year of Teaching English and working as a teacher in a private institution when I decided to switch to programming. I found it really interesting and challenging. Since then, I've been taking courses and learning on my own by doing projects. There is not a day that I don't learn something new and I love it.
I'm very comfortable working with React.js and am looking forward to learning some back-end technologies, especially Node.js and PHP.</p>
            </div>
    </section>
  )
}

export default About