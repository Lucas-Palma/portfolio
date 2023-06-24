import React from 'react'
import { hoobank, delicious, jsm_headphones, cryptoverse, pueblo_serrano, portfolio, airbnbClone, netflixClone} from '../img'

const PORTFOLIO = [
    {
        title: 'Netflix Clone',
        desc: 'This is a repository for a FullStack Netflix Clone using React, NextJS, TailwindCSS, MongoDB & Prisma.',
        link: 'https://github.com/Lucas-Palma/watch-movies-app',
        link_arial_label : "Netflix Clone",
        img: netflixClone,
        img_alt: "Netflix clone home"
    },
    {
        title: 'Airbnb Clone',
        desc: 'This is a Airbnb clone built using Next.js, React, Tailwind, Prisma, MongoDB and NextAuth.',
        link: 'https://github.com/Lucas-Palma/nextjs-airbnb-clone',
        link_arial_label : "Airbnb Clone",
        img: airbnbClone,
        img_alt: "Airbnb clone home"
    },
    {
        title: 'Cryptoverse',
        desc: 'Cryptoverse is a crypto app built with React JS. It uses Redux Toolkit for API integration.',
        link: 'https://github.com/Lucas-Palma/cryptocurrency-app',
        link_arial_label : "Cryptoverse app",
        img: cryptoverse,
        img_alt: "Cryptoverse app home section"
    },
    {
        title: 'JSM Headphones',
        desc: 'JSM Headphones is a ecommerce built with React JS and Next JS. It uses Stripe as CMS for products management.',
        link: 'https://github.com/Lucas-Palma/ecommerce-reactjs-nextjs',
        link_arial_label : "JSM Headphones ecommerce",
        img: jsm_headphones,
        img_alt: "jsm Headphones ecommerce"
    },
    {
        title: 'HooBank',
        desc: 'HooBank is a fully responsive website built with React JS and Tailwind using Vite.js.',
        link: 'https://github.com/Lucas-Palma/hoobank_react_tailwind_proyect',
        link_arial_label : "HooBank",
        img: hoobank,
        img_alt: "hoobank hero section"
    },
    {
        title: 'Delicious',
        desc: 'Delicious is a recipe app built with React JS that uses a food and recipe API.',
        link: 'https://github.com/Lucas-Palma/delicious-app',
        link_arial_label : "Delicious",
        img: delicious,
        img_alt: "Delicious app"
    },
    {
        title: 'Personal Portfolio',
        desc: 'Here you can see the Github repository of this website. It was built with React JS using Vite.js.',
        link: 'https://github.com/Lucas-Palma/portfolio',
        link_arial_label : "Portfolio",
        img: portfolio,
        img_alt: "Portfolio home section"
    },
]

const OTHER_PROJECTS = [
    {
        title: 'Pueblo Serrano',
        desc: 'Pueblo Serrano is a delicatessen located in Villa Allende, Córdoba. I built their site using Webflow.',
        link: 'https://puebloserrano.com/',
        link_arial_label : "Pueblo Serrano",
        img: pueblo_serrano,
        img_alt: "Pueblo Serrano"
    }
]

const Portfolio = () => {
  return ( 
    <div>
        <section className="portfolio" id="portfolio">
            <div className="main-text">
                <p>Portfolio</p>
                <h2><span>React JS</span> Projects</h2>
            </div>

            <div className="portfolio-content">
                {
                    PORTFOLIO.map((project, i) => (
                        <div key={i} className="row">
                            <img src={project.img} alt={project.img_alt}/>
                            <div className="layer">
                                <h5>{project.title}</h5>
                                <p>{project.desc}</p>
                                <a href={project.link} target="_blank" aria-label={project.link_arial_label}><i className='bx bx-link-external'></i></a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section> 
        <section>
        <div className="main-text">
                <h2><span>Other</span> Projects</h2>
            </div>

            <div className="portfolio-content">
                {
                    OTHER_PROJECTS.map((project, i) => (
                        <div key={i} className="row">
                            <img src={project.img} alt={project.img_alt}/>
                            <div className="layer">
                                <h5>{project.title}</h5>
                                <p>{project.desc}</p>
                                <a href={project.link} target="_blank" aria-label={project.link_arial_label}><i className='bx bx-link-external'></i></a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default Portfolio