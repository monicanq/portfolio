import ProjectCard from './ProjectCard';

const ProjectGallery = () => {

    const gallery = () => {
        let myarray = [];
        for (let i = 0; i < 6; i++){
            console.log('proje')
            myarray.push(<ProjectCard />)
        }
        return myarray;
    }
    const tert = gallery();
    return ( 
        <div className='project-gallery'>
            {tert.map(item => {
                return item
            })}
        </div>
     );
}
 
export default ProjectGallery;