import {Route,Switch} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import Subscription from './Pages/Subscription/Subscription';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Sign-in/Signin';

import Partners from './Pages/Partners/Partners';
import Invite from './Pages/Invite/Invite';
import HowWorks from './Pages/How-it-works/How-it-works'
import Dashboard from './Pages/Dashboard/Dashboard'
import Company from './Pages/Company/Company';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Blog from  './Pages/Blog/Blog'
import Profile from './Pages/Settings/Profile/Profile';
import Notifications from './Pages/Settings/Notifications/Notifications'
import Application from './Pages/Settings/Application/Application';
import Payments from './Pages/Settings/Payments/Payments';
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
     <Route exact path="/invite" component={Invite}/>
     <Route exact path="/partners" component={Partners}/>
     <Route exact path="/signup" component={Signup}/>
     <Route exact path="/signin" component={Signin}/>
     <Route exact path="/subscription" component={Subscription}/>
     <Route exact path="/settings/profile/:id" component={Profile}/>
     <Route exact path="/settings/notifications" component={Notifications}/>
     <Route exact path="/settings/application" component={Application}/>
     <Route exact path="/settings/payments" component={Payments}/>
    </Switch>
    </div>
  );
}

export default App;
