import firebase from '../static/firebase.png';
import html from '../static/html.png';
import mongodb from '../static/mongodb.png';
import nodejs from '../static/nodejs.png';
import js from '../static/js.png';
import reactlogo from '../static/react.png';
import typescript from '../static/typescript.png';

const Stack = () => {
    return ( 
        <div className="stack">
            <h2 className='purple'>Technologies I use...</h2>
            <div className="scatter">
                <img src={ firebase } className='firebase' alt="Firebase Logo" />
                <img src={ html } className='html' alt="Firebase Logo" />
                <img src={ mongodb } className='mongodb' alt="Firebase Logo" />
                <img src={ nodejs } className='nodejs' alt="NodeJS Logo" />
                <img src={ reactlogo } className='reactjs' alt="ReactJS Logo" />
                <img src={ typescript } className='typescript' alt="TypeScript Logo" />
                <img src={ js } className='js' alt="JavaScript Logo" />
            </div>
        </div>
     );
}
 
export default Stack;