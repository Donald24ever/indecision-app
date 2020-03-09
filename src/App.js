import React, { Component } from 'react';
import './App.css';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';

class App extends Component {
  render(){
    return(
      <div>
        <IndecisionApp />
      </div>
    );
  }
}
//Also note: When using stateless fuctional component we use props.name but for class component we use this.props.name

export default App;
