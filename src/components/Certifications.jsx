import React from 'react'

const CERTIFICATIONS = [
    {
        title: 'Responsive Web Design',
        desc: 'In this Responsive Web Design Certification, I learned HTML and CSS, best practices for accessibility and how to make webpages that respond to different screen sizes.',
        url: 'https://www.freecodecamp.org/certification/Lucas_Palma/responsive-web-design',
        icons: [
            'bx bxl-html5',
            'bx bxl-css3'
        ]
    },
    {
        title: 'JavaScript Algorithms and Data Structures',
        desc: 'During this course I learned the fundamentals of JavaScript including variables, arrays, objects, loops, and functions. Then I was able to apply that knowledge by creating algorithms to manipulate strings and factorialize numbers. I also learned two important programming styles or paradigms: Object Oriented Programming (OOP) and Functional Programming (FP).',
        url: 'https://www.freecodecamp.org/certification/Lucas_Palma/javascript-algorithms-and-data-structures',
        icons: [
            'bx bxl-javascript'
        ]
    },
    {
        title: 'Front End Development Libraries',
        desc: 'Once I got familiar with HTML, CSS, and JavaScript, I leveled up my skills by learning some of the most popular front end libraries in the industry. In the Front End Development Libraries Certification, I learned how to style my site quickly with Bootstrap. I also learned how to add logic to my CSS styles and extend them with Sass. I built a shopping cart and other applications to learn how to create powerful Single Page Applications (SPAs) with React and Redux.',
        url: 'https://www.freecodecamp.org/certification/Lucas_Palma/front-end-development-libraries',
        icons: [
            'bx bxl-bootstrap',
            'bx bxl-jquery',
            'bx bxl-sass',
            'bx bxl-react',
            'bx bxl-redux' 
        ]
    },
    {
        title: 'Data Visualization',
        desc: ' In the Data Visualization Certification, I built charts, graphs, and maps to present different types of data with the D3.js library. I also learned about JSON (JavaScript Object Notation), and how to work with data online using an API (Application Programming Interface).',
        url: 'https://www.freecodecamp.org/certification/Lucas_Palma/data-visualization',
        icons: [
            'bx bx-scatter-chart' 
        ]
    }
]

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
            <div className="main-text">
                <p>What am I good at?</p>
                <h2><span>My</span> Certifications</h2>
                <p>from <a href="https://www.freecodecamp.org/">freecodecamp.org</a></p>
            </div>

            <div className="certifications-content">
                {
                    CERTIFICATIONS.map((certification, i) => (
                        <div key={i} className="box">
                            <div>
                                <div className="s-icons">
                                    {certification.icons.map((icon, i) =>
                                        <i key={i} className={icon}></i>
                                    )}
                                </div>
                                <h3>{certification.title}</h3>
                                <p>{certification.desc}</p> 
                            </div>
                            <a href={certification.url} className="btn" target="_blank" aria-label="See certification and projects">See Certification and Projects</a>
                        </div>
                    ))
                }
            </div>
        </section>
  )
}

export default Certifications