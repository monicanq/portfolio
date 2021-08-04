import binoculars from '../static/binoculars.png';
import { useHistory } from 'react-router-dom';


const ProjectLink = () => {
    const history = useHistory();
    return ( 
        <section className='project-link'>
            <div className='project-info'>
                <h2 className='purple'>Check out my projects!</h2>
                <img src={binoculars} alt="projects link" />
            </div>
            <div className='project-action'>
                <p>You can check my <span className='link'>Github</span> page for more code but here are some examples</p>
                <button onClick={ () => history.push('/projects') }>Take me there</button>
            </div>
        </section>
     );
}
 
export default ProjectLink;