import { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Loader from './components/Loader';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


// Lazy imports
const Contact = lazy(() => import('./components/Contact'));
const Blog = lazy(() => import('./components/Blog'));
const Projects = lazy(() => import('./components/Projects'));

function App() {
    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        {/* Components loaded with Lazy loading */}
                        <Suspense fallback={<Loader />}>                        
                            <Route exact path="/projects">
                                <Projects />
                            </Route>
                            <Route exact path="/contact">
                                <Contact />
                            </Route>
                            <Route exact path="/blog">
                                <Blog />
                            </Route>
                        </Suspense>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>                
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
