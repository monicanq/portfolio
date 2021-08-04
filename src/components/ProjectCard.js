const ProjectCard = ({ project }) => {
    // console.log(project)
    return ( 
        <div className='project-card'>
            <h2>{ project.title }</h2>
            <div className="img">
                <a target="_blank" rel="noreferrer" href={project.live_site}>
                    <img src={project.img} alt="" />
                    Visit site
                </a>
            </div>

            <p>Tags: { project.tags.map((tag) => <span key={ tag }> { tag } </span>)}</p>
        </div>
     );
}
 
export default ProjectCard;
