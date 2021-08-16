import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faCheckSquare, faCoffee, faEnvelope)

const SocialLinks = () => {
    const githubUrl = 'https://github.com/monicanq'
    const linkedinUrl = 'https://www.linkedin.com/in/monicanq/'
    const email = 'monicanq@gmail.com'

    // Function to create an email link
    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
      
        return <a href={`mailto:${email}${params}`}>{children}</a>;
      };
    

    return ( 
        <div className="social-links">
            <a href={githubUrl} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={["fab", "github"]} size="2x"/></a>
            <a href={linkedinUrl} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/></a>
            <Mailto email={email} subject="" body="">
                <FontAwesomeIcon icon="envelope" size="2x"/>
            </Mailto>
        </div>
     );
}
 
export default SocialLinks;