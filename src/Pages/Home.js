import React, {Component} from 'react';
import Portfolio from '../Component/Portfolio';
import About from '../Component/About';
// import SocialMedia from '../Component/SocialMedia';
// import Profile from '../Component/Profile';
import Work from '../Component/Work';
import Hero from '../Component/Hero';
import ContactUs from '../Component/Contact/Contact';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Hero/>
        <Work/>
        <Portfolio/>
       {/*<Profile/> */}
       <About/>
       {/* <SocialMedia/> */}
       <ContactUs/>

      </div>
    );
  }
  
}

export default App;