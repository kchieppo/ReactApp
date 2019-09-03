import React from 'react';
import './App.css';
import Clock from './Clock';
import ToggleButton from './ToggleButton';
import LoggingButton from './LoggingButton';
import LoginForm from './LoginForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to my portfolio.</h1>
        <Clock />
        <ToggleButton />
        <LoggingButton />
        <LoginForm />
      </div>
    );
  }
}

export default App;
