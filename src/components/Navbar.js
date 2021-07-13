import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <div className='nav-bar'>
                <NavLink to='/' exact activeClassName='active'>Home</NavLink>
                <NavLink to='/projects' >Projects</NavLink>
                <NavLink to='/blog'  >Blog</NavLink>
                <NavLink to='/contact'  >Contact</NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;