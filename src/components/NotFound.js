import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1><span>Oops!</span> I cannot find the page you are trying to reach</h1>
            <Link to='/'>Take me to the homepage</Link>
        </div>
     );
}
 
export default NotFound;