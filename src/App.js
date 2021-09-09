import React from 'react';
import { BrowserRouter,Switch,  Route } from 'react-router-dom';
import Home from './screens/Home'
import Earrings  from './screens/Earrings';
import Bracelets from './screens/Bracelets';
import KeyChain from './screens/KeyChain';
import Lesson from './screens/Lesson';
import Miyuki from './screens/Miyuki';
import Necklace from './screens/Necklace';
import About from './screens/About';

const App = () => {
  return ( 
  <BrowserRouter>
    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/Earrings" component={Earrings}/>
     <Route exact path="/Bracelets" component={Bracelets}/>
     <Route exact path="/KeyChain" component={KeyChain}/>
     <Route exact path="/Lesson" component={Lesson}/>
     <Route exact path="/Miyuki" component={Miyuki}/>
     <Route exact path="/Necklace" component={Necklace}/>
     <Route exact path="/About" component={About}/>

    </Switch>
  </BrowserRouter>
  )
  
}
 
export default App;
