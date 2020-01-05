import React, { Component } from 'react';
import './App.css';
import { sayiArttir, sayiAzalt} from './action/index';
import Counter from './Counter';
import DigerComponent from './DigerComponent';

class App extends Component {
  
  render() {
  return (
    <div className="App">
      
      <div className="container">
        
       <div className="item item1"><Counter /></div>
       <div className="item item2"><DigerComponent /></div>
      </div>
    </div>
  );
}
}
export default App;
