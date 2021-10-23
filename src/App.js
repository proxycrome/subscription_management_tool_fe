import {Route,Switch} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Sign-in/Signin';
import Dashboard from './Pages/Dashboard/Dashboard'
import './App.css';

function App() {
  return (
    <div className="App">
    <Switch>
    
     <Route exact path="/" component={Homepage}/>
     <Route exact path="/dashboard" component={Dashboard}/>
     <Route exact path="/signup" component={Signup}/>
     <Route exact path="/signin" component={Signin}/>
   
    </Switch>
    </div>
  );
}

export default App;
