import SocialLinks from './SocialLinks';
import photo from '../static/toon.jpg';
import { Link } from "react-router-dom";


const About = () => {
    return ( 
        <section className="about">
            <div className="intro">
                <img src={ photo } className='profile-picture' alt="Monica" />
                <div className="about-info">
                    <h1 className='purple'>Monica Navarro</h1>
                    <h2>Software Engineer</h2>
                    <SocialLinks />
                </div>

            </div>
            <p >
            Hi I am Monica! I am a UK-based Software Engineer who enjoys writing clean and efficient code as well as testing new technologies and putting them to use. My love for code started back in 2010 when I started working as an engineer and realised how a few snippets of code could streamline my work. 

            Throughout the years, I have experimented and utilised many different technologies ranging from Python to JavaScript. Finally, I discovered ReactJS and Firebase in 2018, and since then, I have focused my efforts on exploiting their capabilities.

            I am always open to hear about new ideas, so do not hesitate to 
            <span className='link'><Link to='/contact'> get in touch.</Link></span>
            </p>
        </section>
     );
}
 
export default About;