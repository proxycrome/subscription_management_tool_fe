import {Route,Switch} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import Subscription from './Pages/Subscription/Subscription';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Sign-in/Signin';
import Productcategory from './Pages/Productcategory/Productcategory';
import Product from './Pages/Product/Product';
import Partners from './Pages/Partners/Partners';
import Newsub from './Pages/Newsub/Newsub';
import Invite from './Pages/Invite/Invite';
import HowWorks from './Pages/How-it-works/How-it-works'
import Dashboard from './Pages/Dashboard/Dashboard'
import Company from './Pages/Company/Company';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Addsub from  './Pages/Addsub/Addsub';
import Blog from  './Pages/Blog/Blog'
import './App.css';

function App() {
  return (
    <div className="App">
    <Switch>
    
     <Route exact path="/" component={Homepage}/>
     <Route exact path="/dashboard" component={Dashboard}/>
     
     <Route exact path="/about" component={About}/>
     <Route exact path="/addsub" component={Addsub}/>
     <Route exact path="/blog" component={Blog}/>
     <Route exact path="/company" component={Company}/>
     <Route exact path="/contact" component={Contact}/>
     <Route exact path="/HowWorks" component={HowWorks}/>
     <Route exact path="/invite" component={Invite}/>
     <Route exact path="/Newsub/:name" component={Newsub}/>
     <Route exact path="/partners" component={Partners}/>
     <Route exact path="/product" component={Product}/>
     <Route exact path="/productcategory" component={Productcategory}/>
     <Route exact path="/signup" component={Signup}/>
     <Route exact path="/signin" component={Signin}/>
     <Route exact path="/subscription" component={Subscription}/>
    </Switch>
    </div>
  );
}

export default App;
