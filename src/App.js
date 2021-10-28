import {Route,Switch} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Sign-in/Signin';
import Partners from './Pages/Partners/Partners';
import HowWorks from './Pages/How-it-works/How-it-works'
import Dashboard from './Pages/Dashboard/Dashboard'
import Company from './Pages/Company/Company';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Blog from  './Pages/Blog/Blog'
import './App.css';

function App() {
  return (
    <div className="App">
    <Switch>
    
     <Route exact path="/" component={Homepage}/>
     <Route exact path="/dashboard" component={Dashboard}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/blog" component={Blog}/>
     <Route exact path="/company" component={Company}/>
     <Route exact path="/contact" component={Contact}/>
     <Route exact path="/HowWorks" component={HowWorks}/>
     <Route exact path="/partners" component={Partners}/>
     <Route exact path="/signup" component={Signup}/>
     <Route exact path="/signin" component={Signin}/>
   
    </Switch>
    </div>
  );
}

export default App;
