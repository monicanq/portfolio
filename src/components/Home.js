import Stack from './Stack';
import ProjectLink from './ProjectLink';
import About from './About';
import ScrollToTop from './ScrollToTop';

const Home = () => {
    return ( 
        <>  
            <ScrollToTop>
                <About />
                <Stack />
                <ProjectLink />
            </ScrollToTop>
        </>
     );
}
 
export default Home;