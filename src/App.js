import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import Contact from './Pages/Contact';
import Portfolio from './Component/Portfolio';
import Map from './Pages/Map';


class App extends Component{
  render(){
    return (
      <BrowserRouter>
       <Navbar/>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/map" component={Map}/>
       <Footer/>

      </BrowserRouter>
    );
  }
  
}

export default App;
