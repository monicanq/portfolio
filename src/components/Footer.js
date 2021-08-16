import SocialLinks from './SocialLinks';
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer
            //  style={{ backgroundImage: `url(${footerBackground})` }}
            >
                <p>Interested in collaborating <span className='link'><Link to='/contact'> Get in touch!</Link></span></p>
                <SocialLinks />
                <p>Designed and Made by Monica Navarro</p>
                <p>Powered by React and Firebase</p>
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>
     );
}
 
export default Footer;
