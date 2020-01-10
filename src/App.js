import React, { Component } from 'react';
import './App.css';
import Question from './Question/Question';
import Contact from './contact';
import Header from './header';

const divStyle = {
  width: '900px',
  border: '5px solid grey',
  padding: '1px',
  margin: '89px',
}

class App extends Component {
  render() {
    return (
      <div style={divStyle}>
        <Header />
        <Question ques="I can't find my medicare number" text="You can see your Medicare Number and print an official copy of your card. If you don't have a myMedicare.gov/ account yet, go to 'create an account' and follow the instructions. If you can't or prefer not to use the online service, you can call 1-800-MEDICARE (1-800-633-4227 TTY 1-877-486-2048)." />
        <Contact />
      </div>
    );
  }
}

export default App;
