import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import Contact from './Pages/Contact';


class App extends Component{
  render(){
    return (
      <BrowserRouter>
       <Navbar/>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact}/>
       
       <Footer/>

      </BrowserRouter>
    );
  }
  
}

export default App;
