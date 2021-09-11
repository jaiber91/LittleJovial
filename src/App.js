import React from 'react';
import { BrowserRouter,Switch,  Route } from 'react-router-dom';
import Home from './screens/Home'
import About from './screens/About';
import Contact from './screens/Contact';
import Header from './components/basics/Header';
import Footer from './components/basics/Footer';
import Earrings from './screens/Earrings';
import Lesson from './screens/Lesson';

const App = () => {
  return ( 
    
  <BrowserRouter>
  <Header/>
    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/About" component={About}/>
     <Route exact path="/Contact" component={Contact}/>
     <Route exact path="/:category" component={Earrings}/>
     <Route exact path="/:category" component={Lesson}/>

    </Switch>
    <Footer/>
  </BrowserRouter>
  )
  
}
 
export default App;
