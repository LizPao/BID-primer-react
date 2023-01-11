import './App.css';
import { Component } from 'react';
import MyComponent from './components/MyComponent';

class App extends Component{
  render(){
    return (
      <>
      <h1>Hello Dojo!</h1>
      <MyComponent />
      </>
    );
  }
  
}

export default App;