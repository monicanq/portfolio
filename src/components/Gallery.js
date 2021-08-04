import styles from './gallery.module.css';
import ProjectCard from './ProjectCard';
import { db } from '../data/db';


const Gallery = () => {
    // console.log(db)

    return( 
            <div className={styles.gallery} >
                {db.map(project => <ProjectCard project={ project }/>)}
            </div>
    )

    // const gallery = () => {
    //     let myarray = [];
    //     for (let i = 0; i < 6; i++){
    //         myarray.push(<ProjectCard />)
    //     }
    //     return myarray;
    // }
    // const tert = gallery();
    // return ( 
    //     <div className={styles.gallery}>
    //         {tert.map(item => {
    //             return item
    //         })}
    //     </div>
    //  );
}
 
export default Gallery;