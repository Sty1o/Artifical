import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
