import React, {Component} from 'react';
import logo from './slobodny-vysielac-300xwhite.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a



            lassName="App-link" href="https://slobodnyvysielac.sk/zive-vysielanie/">
            <img src={logo} width="300" alt="slobodny-vysielac-300xwhite" />
          </a>
        </header>
      </div>
    );
  }
}

export default App;
