import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Hotels from '../routes/Hotels';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route path="/hotels" component={Hotels}></Route>
    </Router>
  );
}

export default App;