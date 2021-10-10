import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.js';


import MainPage from './components/MainPage';
import ShowResearchList from './components/ShowResearchList';
import SearchAction from './components/SearchAction';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={MainPage} />
          <Route path='/search' component={SearchAction}/>
          <Route path='/show-research-list' component={ShowResearchList}/>
        </div>
      </Router>
    );
  }
}

export default App;