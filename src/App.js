import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/index'
import { Route } from 'react-router-dom'
import HomePage from './components/home'
import MoviesContainer from './components/Movies/MoviesContainer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesContainer} />
        <audio controls autoPlay>
           <source src="../OneSummersDay.mp3" type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}

export default App;
