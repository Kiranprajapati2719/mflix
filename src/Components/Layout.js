import React, {Component} from 'react';
import Header from './Header';
import Hero from './Hero';

class Layout extends Component{
  render(){
    return(
      <div className="enable-js">
        <Header/>
        <Hero/>
      </div>
    );
  }
}

export default Layout;
