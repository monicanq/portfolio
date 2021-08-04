import Gallery from './Gallery';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Construction from './Construction';

library.add(fab)

const Projects = () => {
    const githubUrl = 'https://github.com/monicanq';
    return ( 
        <div className="projects">
            {/* <Construction /> */}
            <div className='intro'>
                <div className="text">
                    <h1 className='purple'>Here are some of my projects</h1>
                    <p>You can check my <span className='link'>Github</span> page for more code but here are some examples</p>
                </div>
                <div className="github">
                    <a href={githubUrl} target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={["fab", "github"]} size="5x"/></a>
                </div>
            </div>
            <Gallery />
        </div>
     );
}
 

export default Projects;